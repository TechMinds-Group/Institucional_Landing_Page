import { describe, it, expect, beforeEach } from "vitest";
import { screen, within } from "@testing-library/react";
import { HowItWorksB } from "../HowItWorksB";
import { renderWithProviders, resetI18n } from "../../../test/test-utils";

describe("HowItWorksB (frame #111:13082 atualizado 13/10)", () => {
  beforeEach(() => resetI18n());

  it("intro à esquerda: eyebrow, H2 e support com a copy nova (PT)", () => {
    renderWithProviders(<HowItWorksB />);

    expect(screen.getByText("Como a gente trabalha")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Primeiro, a gente entende o seu negócio."
    );
    expect(
      screen.getByText(
        "Você conta o que precisa. Juntos, definimos a solução e os próximos passos."
      )
    ).toBeInTheDocument();
  });

  it("etapas com títulos combinados: 01 / Ouvir você → 02 / Combinar os detalhes → 03 / Colocar em prática", () => {
    renderWithProviders(<HowItWorksB />);

    const steps = screen.getAllByTestId("step-card");
    expect(steps).toHaveLength(3);
    expect(steps[0]).toHaveTextContent("01 / Ouvir você");
    expect(steps[0]).toHaveTextContent(
      "Conhecemos sua rotina para avaliar um sistema próprio, um site personalizado ou uma solução sob medida."
    );
    expect(steps[1]).toHaveTextContent("02 / Combinar os detalhes");
    expect(steps[1]).toHaveTextContent(
      "Alinhamos o que será entregue, as condições e o suporte, para você saber o que esperar."
    );
    expect(steps[2]).toHaveTextContent("03 / Colocar em prática");
    expect(steps[2]).toHaveTextContent(
      "Começamos conforme a disponibilidade da solução e o que foi combinado com você."
    );
  });

  it("nota de expectativa e gancho REMOVIDOS (frame 13/10)", () => {
    renderWithProviders(<HowItWorksB />);

    expect(screen.queryByTestId("how-it-works-note")).not.toBeInTheDocument();
    expect(screen.queryByTestId("section-hook")).not.toBeInTheDocument();
  });

  it("ilustrações HTML/CSS: chips de produtos (primeiro selecionado), itens com check e painel de rotina", () => {
    renderWithProviders(<HowItWorksB />);

    const chips = within(screen.getByTestId("step-illustration-chips"));
    expect(chips.getByText("Groom")).toBeInTheDocument();
    expect(chips.getByText("FasTo")).toBeInTheDocument();
    expect(chips.getByText("Lumen")).toBeInTheDocument();

    const checklist = within(screen.getByTestId("step-illustration-checklist"));
    expect(checklist.getByText("Escopo definido")).toBeInTheDocument();
    expect(checklist.getByText("Suporte acordado")).toBeInTheDocument();
    expect(checklist.getByText("Condições alinhadas")).toBeInTheDocument();

    const panel = within(screen.getByTestId("step-illustration-panel"));
    expect(panel.getByText("Sua rotina, conectada")).toBeInTheDocument();
  });

  it("cards têm entrada em cascata: motion-safe com delays 1..3 (gating reduced-motion no CSS)", () => {
    renderWithProviders(<HowItWorksB />);

    const steps = screen.getAllByTestId("step-card");
    expect(steps[0].className).toContain("motion-safe");
    expect(steps[0].className).toContain("motion-safe-delay-1");
    expect(steps[1].className).toContain("motion-safe-delay-2");
    expect(steps[2].className).toContain("motion-safe-delay-3");
  });

  it("renderiza a copy nova em EN quando o idioma persistido é en (RN-004)", () => {
    renderWithProviders(<HowItWorksB />, { language: "en" });

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "First, we get to know your business."
    );
    expect(screen.getAllByTestId("step-card")[0]).toHaveTextContent(
      "We listen to you"
    );
  });

  it("renderiza a copy nova em ES quando o idioma persistido é es (RN-004)", () => {
    renderWithProviders(<HowItWorksB />, { language: "es" });

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Primero, entendemos tu negocio."
    );
    expect(screen.getAllByTestId("step-card")[1]).toHaveTextContent(
      "Combinamos los detalles"
    );
    expect(
      within(screen.getByTestId("step-illustration-checklist")).getByText(
        "Alcance definido"
      )
    ).toBeInTheDocument();
  });
});
