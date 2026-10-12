import type { ReactElement } from "react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Language, languageHtmlCodes, translations } from "../../i18n/translations";
import { legalProductMeta } from "../../i18n/legalContent";
import { TermosDeUso } from "../TermosDeUso";
import { Privacidade } from "../Privacidade";
import { resetI18n } from "../../../test/test-utils";

// ─────────────────────────────────────────────────────────────────────────────
// LegalShell — redesign B das páginas legais (frame Figma #3:31384,
// extraído 12/10/2026). Cobertura:
//   • NavbarB no topo das duas páginas (testid `navb-links`);
//   • header "Legal" com H1 pelo idioma ativo (pt/en/es — RN-004);
//   • wrapper claro do design B (`#F7F8FC`), sem remanescente dark;
//   • source-scan: tokens dark legados (0D0D0D / 7B5EA7 / 5BC8C0) ZERO
//     nas duas páginas (asserção estrutural, padrão do repo).
// Textos esperados vêm direto das fontes i18n (translations/legalProductMeta) —
// nenhum literal acentuado no spec (fonte única, RN-004).
// A lógica (tabs CR-001, scroll-spy RN-008) segue coberta por
// legal-tabs.test.tsx; aqui garantimos o chrome visual novo.
// ─────────────────────────────────────────────────────────────────────────────

const here = dirname(fileURLToPath(import.meta.url));
const termosSource = readFileSync(resolve(here, "..", "TermosDeUso.tsx"), "utf-8");
const privacidadeSource = readFileSync(resolve(here, "..", "Privacidade.tsx"), "utf-8");
const legalShellSource = readFileSync(
  resolve(here, "..", "..", "components", "legal", "LegalShell.tsx"),
  "utf-8"
);

// window.scrollTo não é implementado no jsdom (mesmo stub de legal-tabs).
function stubScrollTo() {
  const stub = vi.fn();
  window.scrollTo = stub as unknown as typeof window.scrollTo;
  (document.documentElement as Element).scrollTo =
    stub as unknown as typeof Element.prototype.scrollTo;
  (document.body as Element).scrollTo = stub as unknown as typeof Element.prototype.scrollTo;
}

function renderAt(path: string, ui: ReactElement) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/terms-of-use/:product" element={ui} />
        <Route path="/privacy/:product" element={ui} />
      </Routes>
    </MemoryRouter>
  );
}

beforeEach(() => {
  resetI18n();
  stubScrollTo();
});

describe("LegalShell — NavbarB no design B (frame #3:31384)", () => {
  it("renderiza <NavbarB /> (navb-links) na página /terms-of-use/vibecut", () => {
    renderAt("/terms-of-use/vibecut", <TermosDeUso />);

    expect(screen.getByTestId("navb-links")).toBeInTheDocument();
    expect(screen.getByTestId("navb-language-pills")).toBeInTheDocument();
    // Rodapé B permanece (CR-005/RN-024-3)
    expect(screen.getByTestId("footerb")).toBeInTheDocument();
  });

  it("renderiza <NavbarB /> (navb-links) na página /privacy/vibecut", () => {
    renderAt("/privacy/vibecut", <Privacidade />);

    expect(screen.getByTestId("navb-links")).toBeInTheDocument();
    expect(screen.getByTestId("footerb")).toBeInTheDocument();
  });
});

describe("LegalShell — header LEGAL com H1 no idioma ativo (RN-004)", () => {
  it("eyebrow 'Legal' no header e H1 seguindo o i18n vigente (PT)", () => {
    renderAt("/terms-of-use/vibecut", <TermosDeUso />);

    // Scope do header legal-hero: o FooterB também rende o texto "Legal"
    // (coluna Legal — legalTitle), então o assert é acoplado ao header.
    const header = document.getElementById("legal-hero") as HTMLElement;
    expect(header).not.toBeNull();
    expect(within(header).getByText("Legal")).toBeInTheDocument();
    expect(
      within(header).getByRole("heading", {
        level: 1,
        name: translations.pt.legal.termsTitle,
      })
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe(languageHtmlCodes.pt);
  });

  it.each<Language>(["en", "es"])(
    "H1 de Termos traduzido com idioma persistido (%s)",
    (lang) => {
      localStorage.setItem("techminds-language", lang);

      renderAt("/terms-of-use/vibecut", <TermosDeUso />);

      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1.textContent).toBe(translations[lang].legal.termsTitle);
      expect(document.documentElement.lang).toBe(languageHtmlCodes[lang]);
    }
  );

  it.each<Language>(["pt", "en"])(
    "H1 de Privacidade traduzido (%s)",
    (lang) => {
      if (lang !== "pt") localStorage.setItem("techminds-language", lang);

      renderAt("/privacy/vibecut", <Privacidade />);

      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1.textContent).toBe(translations[lang].legal.privacyTitle);
      expect(document.documentElement.lang).toBe(languageHtmlCodes[lang]);
    }
  );
});

describe("LegalShell — wrapper claro do design B (sem remanescente dark)", () => {
  it("wrapper claro: bg-[#F7F8FC] no root e H1 em #1F3A5F (classes)", () => {
    const { container } = renderAt("/terms-of-use/vibecut", <TermosDeUso />);

    // Wrapper da página (primeiro filho do container) recebe o fundo do design B
    const wrapper = container.firstElementChild as HTMLElement | null;
    expect(wrapper).not.toBeNull();
    expect(wrapper!.className).toContain("bg-[#F7F8FC]");

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.className).toContain("text-[#1F3A5F]");
    expect(h1.className).toContain("font-bold");
  });

  it("source-scan: tokens dark legados (0D0D0D / 7B5EA7 / 5BC8C0) ZERO nas duas páginas", () => {
    const darkTokenPattern = /0D0D0D|7B5EA7|5BC8C0/i;

    expect(termosSource).not.toMatch(darkTokenPattern);
    expect(privacidadeSource).not.toMatch(darkTokenPattern);
    // As páginas consomem o shell compartilhado (extraído — sem duplicação)
    expect(termosSource).toContain("<LegalShell");
    expect(privacidadeSource).toContain("<LegalShell");
    // O wrapper claro vive no shell (fonte única do chrome)
    expect(legalShellSource).toContain("bg-[#F7F8FC]");
    expect(legalShellSource).toContain("<NavbarB");
  });

  it("pill 'Disponível' do produto publicado e 'Em breve' do FasTo (tokens do frame)", () => {
    renderAt("/terms-of-use/vibecut", <TermosDeUso />);

    const vibecut = screen.getByTestId("legal-tab-vibecut");
    expect(vibecut.className).toContain("border-[#1F3A5F]");
    expect(vibecut.textContent).toContain(legalProductMeta.pt.availableLabel);

    const fasto = screen.getByTestId("legal-tab-fasto");
    expect(fasto).toBeDisabled();
    expect(fasto.textContent).toContain(translations.pt.legal.comingSoon);
  });
});
