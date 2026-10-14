import { describe, it, expect, beforeEach } from "vitest";
import { screen, within } from "@testing-library/react";
import { ProblemSection } from "../ProblemSection";
import { renderWithProviders, resetI18n } from "../../../test/test-utils";
import { SECTION_IDS } from "../../constants/anchors";

describe("ProblemSection (RN-022-3 — frame #111:12708 atualizado 13/10)", () => {
  beforeEach(() => resetI18n());

  it("layout de 2 colunas: eyebrow + H2/body à esquerda e as 3 situações à direita (PT)", () => {
    renderWithProviders(<ProblemSection />);

    expect(screen.getByText("Para facilitar seu dia a dia")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Cuidar do seu negócio pode ser mais simples."
    );

    const cards = screen.getAllByTestId("problem-card");
    expect(cards).toHaveLength(3);
    expect(cards[0]).toHaveTextContent("Mensagens que se acumulam no WhatsApp");
    expect(cards[1]).toHaveTextContent("Horários difíceis de organizar");
    expect(cards[2]).toHaveTextContent("Informações espalhadas para decidir");
  });

  it("situações têm entrada em cascata: motion-safe com delays 1..3 (movement-safe desativado em reduced)", () => {
    renderWithProviders(<ProblemSection />);

    const cards = screen.getAllByTestId("problem-card");
    expect(cards[0].className).toContain("motion-safe");
    expect(cards[0].className).toContain("motion-safe-delay-1");
    expect(cards[1].className).toContain("motion-safe-delay-2");
    expect(cards[2].className).toContain("motion-safe-delay-3");
  });

  it("gancho conduz ao Catálogo (RN-022) com a copy do frame", () => {
    renderWithProviders(<ProblemSection />);

    const hookLink = within(screen.getByTestId("section-hook")).getByRole("link");
    expect(hookLink).toHaveAttribute("href", `#${SECTION_IDS.catalogo}`);
    expect(hookLink).toHaveTextContent(
      "Conheça os sistemas que podem facilitar o dia a dia do seu negócio."
    );
  });

  it("renderiza a copy nova em ES quando o idioma persistido é es (RN-004)", () => {
    renderWithProviders(<ProblemSection />, { language: "es" });

    expect(screen.getByText("Para facilitar tu día a día")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Cuidar de tu negocio puede ser más simple."
    );
    expect(screen.getAllByTestId("problem-card")[0]).toHaveTextContent(
      "Mensajes que se acumulan en WhatsApp"
    );
    expect(screen.getAllByTestId("problem-card")[2]).toHaveTextContent(
      "Información esparcida para decidir"
    );
  });
});
