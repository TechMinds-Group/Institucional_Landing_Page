import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, within, fireEvent } from "@testing-library/react";
import { CatalogSection } from "../CatalogSection";
import { renderWithProviders, resetI18n } from "../../../test/test-utils";
import { SECTION_IDS } from "../../constants/anchors";
import { WHATSAPP_HERO_MESSAGE } from "../../constants/contacts";

// Ordem canônica do carrossel (CR-001): groom, fasto, lumen, vibecut,
// escola-conectada — posições 1–5 da paginação numerada.

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

afterEach(() => {
  delete (Element.prototype as unknown as Record<string, unknown>).scrollTo;
  vi.restoreAllMocks();
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

  it("renderiza 5 cartões com índice de chips e paginação numerada 1–5", () => {
    renderWithProviders(<CatalogSection />);

    expect(screen.getAllByTestId("product-card")).toHaveLength(5);
    expect(screen.getAllByTestId("catalog-chip")).toHaveLength(5);
    expect(pageButtons().map((p) => p.textContent)).toEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
    ]);
  });

  it("setas navegam pelos cartões com stop nas pontas (decisão documentada)", () => {
    const { calls } = stubScrollTo();
    renderWithProviders(<CatalogSection />);

    const next = screen.getByTestId("carousel-next");
    const prev = screen.getByTestId("carousel-prev");

    // Posição inicial 1: prev desabilitada (STOP — sem wrap)
    expect(prev).toBeDisabled();
    expect(next).not.toBeDisabled();

    // 4 avanços → posição 5, next desabilitada
    for (let i = 0; i < 4; i++) fireEvent.click(next);
    expect(pageButtons()[4]).toHaveAttribute("aria-current", "true");
    expect(next).toBeDisabled();
    expect(prev).not.toBeDisabled();
    // deslocamento por cartão (400px) na posição 5
    expect(calls.at(-1)).toEqual({ left: 1600, behavior: "smooth" });

    // Volta: paginação reflete o índice ativo
    fireEvent.click(prev);
    expect(pageButtons()[3]).toHaveAttribute("aria-current", "true");
  });

  it("paginação numerada controla a posição do carrossel", () => {
    const { calls } = stubScrollTo();
    renderWithProviders(<CatalogSection />);

    fireEvent.click(pageButtons()[2]); // posição 3
    expect(pageButtons()[2]).toHaveAttribute("aria-current", "true");
    expect(calls.at(-1)).toEqual({ left: 800, behavior: "smooth" });
  });

  it("chips compartilham a posição com o carrossel", () => {
    const { calls } = stubScrollTo();
    renderWithProviders(<CatalogSection />);

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

  it("CTAs de FasTo/Lumen/VibeCut/Escola desabilitados, sem navegação e sem modal", () => {
    renderWithProviders(<CatalogSection />);

    for (const id of ["fasto", "lumen", "vibecut", "escola-conectada"]) {
      const cta = within(cardById(id)).getByTestId("product-cta");
      expect(cta.tagName, id).toBe("BUTTON");
      expect(cta, id).toBeDisabled();
    }

    // CR-005: nenhum modal de produto no fluxo do catálogo
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("mockup demo ilustrativo do VibeCut (barra + thumb de referência)", () => {
    renderWithProviders(<CatalogSection />);

    const mockup = screen.getByTestId("mockup-vibecut");
    expect(mockup).toHaveTextContent("VibeCut · DEMO ILUSTRATIVA");
    const img = within(mockup).getByRole("img");
    expect(img.getAttribute("src")).toMatch(/vibecut-demo-ref/);
  });

  it("mockup placeholder 'DEMO PENDENTE' da Escola Conectada com abas", () => {
    renderWithProviders(<CatalogSection />);

    const mockup = screen.getByTestId("mockup-escola");
    expect(mockup).toHaveTextContent("Escola Conectada · DEMO PENDENTE");
    expect(within(mockup).getByText("Matrículas")).toBeInTheDocument();
    expect(within(mockup).getByText("Frequência")).toBeInTheDocument();
    expect(within(mockup).getByText("Notas")).toBeInTheDocument();
  });

  it("Groom, FasTo e Lumen não exibem bloco de mockup demo", () => {
    renderWithProviders(<CatalogSection />);

    for (const id of ["groom", "fasto", "lumen"]) {
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
      `https://wa.me/5551997066347?text=${encodeURIComponent(WHATSAPP_HERO_MESSAGE)}`
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

    fireEvent.click(screen.getByTestId("carousel-next"));
    expect(calls.at(-1)).toEqual({ left: 400, behavior: "auto" });
  });
});
