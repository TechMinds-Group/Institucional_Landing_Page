import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, within, fireEvent, act } from "@testing-library/react";
import { CatalogSection, computePageCount } from "../CatalogSection";
import { renderWithProviders, resetI18n } from "../../../test/test-utils";
import { SECTION_IDS } from "../../constants/anchors";
import { WHATSAPP_HERO_MESSAGE, WHATSAPP_NUMBER } from "../../constants/contacts";

// Ordem canônica do carrossel (CR-001): groom, fasto, lumen, vibecut,
// escola-conectada.
//
// Paginação dinâmica (revisão 11/10/2026): o nº de páginas vem das medidas
// reais do viewport (mount + resize via computePageCount), não da
// quantidade fixa de produtos. jsdom não mede scroll — nas specs de
// componente, as métricas são determinadas no elemento (fallback de 1
// página em jsdom), e computePageCount é verificada como função pura.
// Mockups ilustrativos removidos dos cartões na revisão 11/10/2026.

function cardById(id: string): HTMLElement {
  const card = screen
    .getAllByTestId("product-card")
    .find((c) => c.dataset.productId === id);
  expect(card, `cartão ${id} deve estar no carrossel`).toBeDefined();
  return card as HTMLElement;
}

function pageButtons() {
  return screen.getAllByTestId("carousel-page");
}

// jsdom não implementa Element.scrollTo — stub captura as chamadas do carrossel.
function stubScrollTo(): { calls: unknown[] } {
  const calls: unknown[] = [];
  (Element.prototype as unknown as Record<string, unknown>).scrollTo = vi.fn(
    (arg: unknown) => {
      calls.push(arg);
    }
  );
  return { calls };
}

/** Sobrescreve as métricas de layout do viewport e dispara o resize
 *  medindo de novo no listener do componente. */
function stubViewportMetrics(scrollWidth: number, clientWidth: number) {
  const viewport = screen.getByTestId("carousel-viewport");
  Object.defineProperty(viewport, "scrollWidth", {
    value: scrollWidth,
    configurable: true,
  });
  Object.defineProperty(viewport, "clientWidth", {
    value: clientWidth,
    configurable: true,
  });
  act(() => {
    window.dispatchEvent(new Event("resize"));
  });
}

afterEach(() => {
  delete (Element.prototype as unknown as Record<string, unknown>).scrollTo;
  vi.restoreAllMocks();
});

describe("computePageCount (paginação pela quantidade real de conteúdo)", () => {
  it("sem overflow → 1 página", () => {
    expect(computePageCount(2000, 2000)).toBe(1);
  });

  it("faixa menor que o viewport → 1 página", () => {
    expect(computePageCount(100, 400)).toBe(1);
  });

  it("medidas 0/indefinidas → 1 página (fallback seguro)", () => {
    expect(computePageCount(0, 400)).toBe(1);
    expect(computePageCount(400, 0)).toBe(1);
    expect(computePageCount(0, 0)).toBe(1);
    expect(
      computePageCount(undefined as unknown as number, 400)
    ).toBe(1);
    expect(computePageCount(400, undefined as unknown as number)).toBe(1);
  });

  it("overflow real → ceil((scrollWidth - clientWidth) / 400) + 1 (ex.: 3 páginas)", () => {
    expect(computePageCount(1000, 400)).toBe(3);
  });

  it("5 cartões de 400px em viewport de 400px → 5 páginas", () => {
    expect(computePageCount(2000, 400)).toBe(5);
  });
});

describe("CatalogSection (RN-019-2 — carrossel de soluções)", () => {
  beforeEach(() => resetI18n());

  it("seção com id catalogo, eyebrow, H2 e estados textuais (CR-001)", () => {
    renderWithProviders(<CatalogSection />);

    expect(screen.getByTestId("catalog-section").id).toBe(SECTION_IDS.catalogo);
    expect(screen.getByText("Encontre o seu caminho")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Qual parte da sua rotina pode ficar mais clara?",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Cinco produtos no catálogo. Groom, FasTo e Lumen estão ativos."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("VibeCut e Escola Conectada estão em desenvolvimento.")
    ).toBeInTheDocument();
  });

  it("renderiza 5 cartões e 5 chips; paginação com fallback de 1 página em jsdom", () => {
    renderWithProviders(<CatalogSection />);

    expect(screen.getAllByTestId("product-card")).toHaveLength(5);
    expect(screen.getAllByTestId("catalog-chip")).toHaveLength(5);
    // jsdom mede 0 → computePageCount(0, 0) = 1
    expect(pageButtons().map((p) => p.textContent)).toEqual(["1"]);
    expect(pageButtons()[0]).toHaveAttribute("aria-current", "true");
    // Única página: setas com stop nas duas pontas
    expect(screen.getByTestId("carousel-prev")).toBeDisabled();
    expect(screen.getByTestId("carousel-next")).toBeDisabled();
  });

  it("paginação dinâmica reflete o conteúdo medido do viewport (resize)", () => {
    renderWithProviders(<CatalogSection />);

    stubViewportMetrics(2000, 400);

    expect(pageButtons().map((p) => p.textContent)).toEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
    ]);
    // Página 1 continua ativa após recontagem
    expect(pageButtons()[0]).toHaveAttribute("aria-current", "true");
  });

  it("setas navegam pelas páginas com stop nas pontas (decisão documentada)", () => {
    const { calls } = stubScrollTo();
    renderWithProviders(<CatalogSection />);
    stubViewportMetrics(2000, 400);

    const next = screen.getByTestId("carousel-next");
    const prev = screen.getByTestId("carousel-prev");

    // Página 1: prev desabilitada (STOP — sem wrap)
    expect(prev).toBeDisabled();
    expect(next).not.toBeDisabled();

    // 4 avanços → página 5 (última), next desabilitada
    for (let i = 0; i < 4; i++) fireEvent.click(next);
    expect(pageButtons()[4]).toHaveAttribute("aria-current", "true");
    expect(next).toBeDisabled();
    expect(prev).not.toBeDisabled();
    // deslocamento por cartão (400px) na página 5
    expect(calls.at(-1)).toEqual({ left: 1600, behavior: "smooth" });

    // Volta: paginação reflete o índice ativo
    fireEvent.click(prev);
    expect(pageButtons()[3]).toHaveAttribute("aria-current", "true");
  });

  it("paginação numerada controla a posição do carrossel", () => {
    const { calls } = stubScrollTo();
    renderWithProviders(<CatalogSection />);
    stubViewportMetrics(2000, 400);

    fireEvent.click(pageButtons()[2]); // página 3
    expect(pageButtons()[2]).toHaveAttribute("aria-current", "true");
    expect(calls.at(-1)).toEqual({ left: 800, behavior: "smooth" });
  });

  it("scroll do viewport é a fonte da verdade da página ativa (onScroll)", () => {
    renderWithProviders(<CatalogSection />);
    stubViewportMetrics(2000, 400);

    const viewport = screen.getByTestId("carousel-viewport");
    Object.defineProperty(viewport, "scrollLeft", {
      value: 1200, // 1200/400 = índice 3 → página 4
      configurable: true,
    });
    fireEvent.scroll(viewport);

    expect(pageButtons()[3]).toHaveAttribute("aria-current", "true");
  });

  it("chips compartilham a posição com o carrossel", () => {
    const { calls } = stubScrollTo();
    renderWithProviders(<CatalogSection />);
    stubViewportMetrics(2000, 400);

    const chips = screen.getAllByTestId("catalog-chip");
    fireEvent.click(chips[3]); // VibeCut

    expect(chips[3]).toHaveAttribute("aria-current", "true");
    expect(pageButtons()[3]).toHaveAttribute("aria-current", "true");
    expect(calls.at(-1)).toEqual({ left: 1200, behavior: "smooth" });
  });

  it("badges de disponibilidade: 3 '● Ativo' e 2 'Em desenvolvimento' (CR-002)", () => {
    renderWithProviders(<CatalogSection />);

    const badges = screen.getAllByTestId("product-badge");
    expect(badges.filter((b) => b.dataset.status === "ativo")).toHaveLength(3);
    expect(
      badges.filter((b) => b.dataset.status === "em-desenvolvimento")
    ).toHaveLength(2);
    expect(screen.getAllByText("● Ativo")).toHaveLength(3);
    expect(screen.getAllByText("Em desenvolvimento")).toHaveLength(2);
  });

  it("CTA 'Conhecer Groom' é link para /groom (RN-006/CR-004)", () => {
    renderWithProviders(<CatalogSection />);

    const cta = within(cardById("groom")).getByTestId("product-cta");
    expect(cta.tagName).toBe("A");
    expect(cta).toHaveAttribute("href", "/groom");
    expect(cta).toHaveTextContent("Conhecer Groom");
  });

  it("CTAs ativos para os 4 produtos com landing (CR-008) — rotas do CR-006", () => {
    renderWithProviders(<CatalogSection />);

    const expected: Record<string, string> = {
      groom: "/groom",
      fasto: "/fasto",
      lumen: "/lumen",
      vibecut: "/vibecut",
    };
    for (const [id, href] of Object.entries(expected)) {
      const cta = within(cardById(id)).getByTestId("product-cta");
      expect(cta.tagName, id).toBe("A");
      expect(cta, id).toHaveAttribute("href", href);
    }
  });

  it("CTA da Escola Conectada permanece desabilitado (aguarda landing — CR-008), sem modal", () => {
    renderWithProviders(<CatalogSection />);

    const cta = within(cardById("escola-conectada")).getByTestId("product-cta");
    expect(cta.tagName).toBe("BUTTON");
    expect(cta).toBeDisabled();

    // CR-005: nenhum modal de produto no fluxo do catálogo
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("cartões não exibem mockups (removidos na revisão 11/10/2026)", () => {
    renderWithProviders(<CatalogSection />);

    expect(screen.queryByTestId("mockup-vibecut")).not.toBeInTheDocument();
    expect(screen.queryByTestId("mockup-escola")).not.toBeInTheDocument();
    for (const id of ["groom", "fasto", "lumen", "vibecut", "escola-conectada"]) {
      const card = cardById(id);
      expect(
        card.querySelector("[data-testid='mockup-vibecut']"),
        id
      ).toBeNull();
      expect(
        card.querySelector("[data-testid='mockup-escola']"),
        id
      ).toBeNull();
    }
  });

  it("conteúdo em EN quando idioma persistido é en (RN-004)", () => {
    renderWithProviders(<CatalogSection />, { language: "en" });

    expect(screen.getByText("Find your path")).toBeInTheDocument();
    expect(screen.getAllByText("● Active")).toHaveLength(3);
    expect(screen.getAllByText("In development")).toHaveLength(2);
    expect(within(cardById("groom")).getByTestId("product-cta")).toHaveTextContent(
      "Discover Groom"
    );
  });

  it("mensagem do WhatsApp do bloco sob medida difere da mensagem do Hero", () => {
    renderWithProviders(<CatalogSection />);

    const cta = screen.getByTestId("custom-dev-whatsapp-cta");
    expect(cta.getAttribute("href")).not.toBe(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_HERO_MESSAGE)}`
    );
  });

  it("gancho final aponta para 'Como funciona' (RN-022)", () => {
    renderWithProviders(<CatalogSection />);

    const hookLink = within(screen.getByTestId("section-hook")).getByRole(
      "link"
    );
    expect(hookLink).toHaveAttribute("href", `#${SECTION_IDS.comoFunciona}`);
  });

  it("deslocamento respeita prefers-reduced-motion (behavior auto — RN-022)", () => {
    const { calls } = stubScrollTo();
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
    } as MediaQueryList);

    renderWithProviders(<CatalogSection />);
    stubViewportMetrics(2000, 400);

    fireEvent.click(screen.getByTestId("carousel-next"));
    expect(calls.at(-1)).toEqual({ left: 400, behavior: "auto" });
  });
});
