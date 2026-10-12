import { describe, it, expect, beforeEach } from "vitest";
import { screen, within } from "@testing-library/react";
import { ProblemSection } from "../ProblemSection";
import { renderWithProviders, resetI18n } from "../../../test/test-utils";
import { SECTION_IDS } from "../../constants/anchors";

describe("ProblemSection (RN-022-3)", () => {
  beforeEach(() => resetI18n());

  it("exibe título e os 3 cards do problema em PT", () => {
    renderWithProviders(<ProblemSection />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "O problema da rotina dispersa"
    );

    const cards = screen.getAllByTestId("problem-card");
    expect(cards).toHaveLength(3);
    expect(cards[0]).toHaveTextContent("Pedidos espalhados no WhatsApp");
    expect(cards[1]).toHaveTextContent("Agenda difícil de acompanhar");
    expect(cards[2]).toHaveTextContent("Dados separados para decidir");
  });

  it("cards têm entrada em cascata: motion-safe com delays 1..3 na ordem do design", () => {
    renderWithProviders(<ProblemSection />);

    const cards = screen.getAllByTestId("problem-card");
    expect(cards[0].className).toContain("motion-safe");
    expect(cards[0].className).toContain("motion-safe-delay-1");
    expect(cards[1].className).toContain("motion-safe-delay-2");
    expect(cards[2].className).toContain("motion-safe-delay-3");
  });

  it("gancho conduz ao Catálogo (RN-022)", () => {
    renderWithProviders(<ProblemSection />);

    const hookLink = within(screen.getByTestId("section-hook")).getByRole("link");
    expect(hookLink).toHaveAttribute("href", `#${SECTION_IDS.catalogo}`);
    expect(hookLink).toHaveTextContent(
      "O próximo passo é reunir o que importa. Encontre seu caminho no catálogo."
    );
  });

  it("renderiza textos em ES quando o idioma persistido é es (RN-004)", () => {
    renderWithProviders(<ProblemSection />, { language: "es" });

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "El problema de la rutina dispersa"
    );
    expect(screen.getAllByTestId("problem-card")[0]).toHaveTextContent(
      "Pedidos dispersos en WhatsApp"
    );
    expect(screen.getAllByTestId("problem-card")[2]).toHaveTextContent(
      "Datos separados al decidir"
    );
  });
});
