import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router";
import type { ReactElement } from "react";
import { TermosDeUso } from "../TermosDeUso";
import { Privacidade } from "../Privacidade";
import { resetI18n } from "../../../test/test-utils";

// ─────────────────────────────────────────────────────────────────────────────
// RN-007 — Tabs das páginas legais no canônico CR-001 (nota 11/10/2026).
// Ordem = fonte única constants/catalog.ts (groom, fasto, lumen, vibecut,
// escola-conectada); ZoneMap fora; ativos vibecut/lumen; "Em breve" sem
// navegação (groom, fasto, escola-conectada); fallback vibecut para
// parâmetro inválido/desabilitado.
// ─────────────────────────────────────────────────────────────────────────────

const CANONICAL_TAB_NAMES = ["Groom", "FasTo", "Lumen", "VibeCut", "Escola Conectada"];

function PathProbe() {
  const { pathname } = useLocation();
  return <span data-testid="probe-path">{pathname}</span>;
}

function renderAt(path: string, ui: ReactElement) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <PathProbe />
      <Routes>
        <Route path="/terms-of-use/:product" element={ui} />
        <Route path="/privacy/:product" element={ui} />
      </Routes>
    </MemoryRouter>
  );
}

// window.scrollTo / Element.scrollTo não são implementados no jsdom —
// as transições de tab chamam scrollTo({ behavior: "smooth" }).
function stubScrollTo() {
  const stub = vi.fn();
  window.scrollTo = stub as unknown as typeof window.scrollTo;
  (document.documentElement as Element).scrollTo =
    stub as unknown as typeof Element.prototype.scrollTo;
  (document.body as Element).scrollTo = stub as unknown as typeof Element.prototype.scrollTo;
}

function tabNames(): string[] {
  const grid = screen.getByTestId("legal-tabs-grid");
  return within(grid)
    .getAllByRole("button")
    .map((tab) => tab.querySelector("h3")?.textContent ?? "");
}

beforeEach(() => {
  resetI18n();
  stubScrollTo();
});

describe("Termos de Uso — tabs no canônico CR-001 (RN-007)", () => {
  it("renderiza exatamente 5 tabs na ordem do canônico e sem ZoneMap", () => {
    renderAt("/terms-of-use/vibecut", <TermosDeUso />);

    expect(tabNames()).toEqual(CANONICAL_TAB_NAMES);

    const grid = screen.getByTestId("legal-tabs-grid");
    expect(within(grid).queryByText(/ZoneMap/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId("legal-tab-zonemap")).not.toBeInTheDocument();
  });

  it("tabs: ativos (vibecut/lumen) habilitam; desabilitados ficam off", () => {
    renderAt("/terms-of-use/vibecut", <TermosDeUso />);

    expect(screen.getByTestId("legal-tab-vibecut")).not.toBeDisabled();
    expect(screen.getByTestId("legal-tab-lumen")).not.toBeDisabled();
    expect(screen.getByTestId("legal-tab-groom")).toBeDisabled();
    expect(screen.getByTestId("legal-tab-fasto")).toBeDisabled();
    expect(screen.getByTestId("legal-tab-escola-conectada")).toBeDisabled();
  });

  it("tab Lumen navega para /terms-of-use/lumen e VibeCut volta", () => {
    renderAt("/terms-of-use/vibecut", <TermosDeUso />);

    fireEvent.click(screen.getByTestId("legal-tab-lumen"));
    expect(screen.getByTestId("probe-path")).toHaveTextContent("/terms-of-use/lumen");

    fireEvent.click(screen.getByTestId("legal-tab-vibecut"));
    expect(screen.getByTestId("probe-path")).toHaveTextContent("/terms-of-use/vibecut");
  });

  it("FasTo 'Em breve' sem navegação — URL permanece inalterada", () => {
    renderAt("/terms-of-use/vibecut", <TermosDeUso />);

    const fasto = screen.getByTestId("legal-tab-fasto");
    expect(fasto).toBeDisabled();
    expect(within(fasto).getAllByText("Em breve").length).toBeGreaterThanOrEqual(1);

    fireEvent.click(fasto);
    expect(screen.getByTestId("probe-path")).toHaveTextContent("/terms-of-use/vibecut");
  });

  it.each([
    "/terms-of-use/groom",
    "/terms-of-use/fasto",
    "/terms-of-use/zonemap",
    "/terms-of-use/xyz",
  ])("fallback vibecut para parâmetro inválido/desabilitado (%s)", (path) => {
    renderAt(path, <TermosDeUso />);

    // Resolve para o corpo do VibeCut (RN-007 — fallback intacto)
    expect(screen.getByText("1. ACEITAÇÃO DOS TERMOS")).toBeInTheDocument();
  });

  it("tags de segmento vêm de legalProductMeta (PT) — groom/fast/vibecut", () => {
    renderAt("/terms-of-use/vibecut", <TermosDeUso />);

    const grid = screen.getByTestId("legal-tabs-grid");
    expect(within(grid).getByText("Inteligência Artificial")).toBeInTheDocument();
    expect(within(grid).getByText("Gestão & Automação")).toBeInTheDocument();
    expect(within(grid).getByText("Gestão Educacional")).toBeInTheDocument();
  });
});

describe("Privacidade — tabs no canônico CR-001 (RN-007)", () => {
  it("renderiza as 5 tabs na ordem do canônico e sem ZoneMap", () => {
    renderAt("/privacy/vibecut", <Privacidade />);

    expect(tabNames()).toEqual(CANONICAL_TAB_NAMES);
    expect(within(screen.getByTestId("legal-tabs-grid")).queryByText(/ZoneMap/i)).not.toBeInTheDocument();
  });

  it("tab Lumen navega para /privacy/lumen; FasTo sem navegação", () => {
    renderAt("/privacy/vibecut", <Privacidade />);

    expect(screen.getByTestId("legal-tab-fasto")).toBeDisabled();
    fireEvent.click(screen.getByTestId("legal-tab-fasto"));
    expect(screen.getByTestId("probe-path")).toHaveTextContent("/privacy/vibecut");

    fireEvent.click(screen.getByTestId("legal-tab-lumen"));
    expect(screen.getByTestId("probe-path")).toHaveTextContent("/privacy/lumen");
  });

  it.each(["/privacy/groom", "/privacy/fasto", "/privacy/zonemap", "/privacy/abc"])(
    "fallback vibecut para parâmetro inválido/desabilitado (%s)",
    (path) => {
      renderAt(path, <Privacidade />);

      // Resolve para o corpo do VibeCut (RN-007 — fallback intacto);
      // heading (h2) — o TOC repete o título como item de navegação
      expect(
        screen.getByRole("heading", { name: "1. Informações que Coletamos" })
      ).toBeInTheDocument();
    }
  );
});

describe("i18n das tabs legais — troca viva, provider único (RN-004/RN-007)", () => {
  it("legalProductMeta re-renderiza ao trocar idioma sem recarregar (EN live)", () => {
    renderAt("/terms-of-use/vibecut", <TermosDeUso />);

    // PT inicial
    expect(screen.getByText("Inteligência Artificial")).toBeInTheDocument();

    // Troca ao vivo via pill do provider único (drawer de idiomas — PN-005 single)
    fireEvent.click(screen.getByRole("button", { name: "EN" }));

    expect(screen.getByText("Artificial Intelligence")).toBeInTheDocument();
    expect(screen.getByText("February 11, 2026")).toBeInTheDocument();
    // FasTo viabiliza fastoTag/fastolastUpdated EN
    const fasto = screen.getByTestId("legal-tab-fasto");
    expect(within(fasto).getAllByText("Coming soon").length).toBeGreaterThanOrEqual(1);
    // lang do documento reflete o idioma (RN-004)
    expect(document.documentElement.lang).toBe("en");
  });

  it("idioma persistido em localStorage inicializa ES (fasto em ES)", () => {
    localStorage.setItem("techminds-language", "es");

    renderAt("/privacy/vibecut", <Privacidade />);

    const fasto = screen.getByTestId("legal-tab-fasto");
    expect(within(fasto).getAllByText("Próximamente").length).toBeGreaterThanOrEqual(1);
    expect(document.documentElement.lang).toBe("es");
  });
});

describe("Regressão nas páginas legais (RN-008 / CR-005 / BC-3)", () => {
  it("FooterB presente na página de Termos (CR-005/RN-024-3)", () => {
    renderAt("/terms-of-use/vibecut", <TermosDeUso />);
    expect(screen.getByTestId("footerb")).toBeInTheDocument();
  });

  it("FooterB presente na página de Privacidade (CR-005/RN-024-3)", () => {
    renderAt("/privacy/vibecut", <Privacidade />);
    expect(screen.getByTestId("footerb")).toBeInTheDocument();
  });

  it("cross-link entre páginas (BC-3): terms → privacy/:product", () => {
    renderAt("/terms-of-use/vibecut", <TermosDeUso />);

    // da main — mailto compliance@ também é link; alvo por nome do cross-link
    expect(
      within(screen.getByRole("main")).getByRole("link", { name: /Privacidade/i })
    ).toHaveAttribute("href", "/privacy/vibecut");
  });

  it("cross-link inverso (BC-3): privacy → terms-of-use/:product", () => {
    renderAt("/privacy/vibecut", <Privacidade />);

    expect(
      within(screen.getByRole("main")).getByRole("link", { name: /Termos/i })
    ).toHaveAttribute("href", "/terms-of-use/vibecut");
  });

  it("voltar-ao-topo escondido aparece após 300px de scroll (RN-008)", () => {
    renderAt("/terms-of-use/vibecut", <TermosDeUso />);

    const btn = screen.getByTitle("Voltar ao topo");
    expect(btn.className).toContain("opacity-0");

    Object.defineProperty(window, "scrollY", {
      value: 400,
      configurable: true,
      writable: true,
    });
    fireEvent.scroll(window);
    expect(btn.className).toContain("opacity-100");

    Object.defineProperty(window, "scrollY", {
      value: 0,
      configurable: true,
      writable: true,
    });
  });
});
