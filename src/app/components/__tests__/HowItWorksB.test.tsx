import { describe, it, expect, beforeEach } from "vitest";
import { screen, within } from "@testing-library/react";
import { HowItWorksB } from "../HowItWorksB";
import { renderWithProviders, resetI18n } from "../../../test/test-utils";
import { SECTION_IDS } from "../../constants/anchors";

describe("HowItWorksB (RN-021-1)", () => {
  beforeEach(() => resetI18n());

  it("exibe título, apoio e as 3 etapas na ordem 01 Escolher → 02 Contratar → 03 Operar (PT)", () => {
    renderWithProviders(<HowItWorksB />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "O que acontece depois da primeira conversa?"
    );
    expect(screen.getByText("Três passos simples, com decisões claras em cada etapa."));

    const steps = screen.getAllByTestId("step-card");
    expect(steps).toHaveLength(3);
    expect(steps[0]).toHaveTextContent("01");
    expect(steps[0]).toHaveTextContent("Escolher");
    expect(steps[0]).toHaveTextContent(
      "Conte sua rotina e identifique um produto ativo ou um projeto sob medida."
    );
    expect(steps[1]).toHaveTextContent("02");
    expect(steps[1]).toHaveTextContent("Contratar");
    expect(steps[2]).toHaveTextContent("03");
    expect(steps[2]).toHaveTextContent("Operar");
  });

  it("ilustrações HTML/CSS: chips de opções, itens com check e painel de rotina", () => {
    renderWithProviders(<HowItWorksB />);

    const chips = within(screen.getByTestId("step-illustration-chips"));
    expect(chips.getByText("Groom"));
    expect(chips.getByText("FasTo"));
    expect(chips.getByText("Lumen"));

    const checklist = within(screen.getByTestId("step-illustration-checklist"));
    expect(checklist.getByText("Escopo definido"));
    expect(checklist.getByText("Suporte acordado"));
    expect(checklist.getByText("Condições alinhadas"));

    const panel = within(screen.getByTestId("step-illustration-panel"));
    expect(panel.getByText("Sua rotina, conectada"));
    expect(panel.getByText("Agendamento confirmado"));
  });

  it("nota de expectativa acompanha os cartões (VibeCut/Escola Conectada em desenvolvimento)", () => {
    renderWithProviders(<HowItWorksB />);

    expect(screen.getByTestId("how-it-works-note")).toHaveTextContent(
      "VibeCut e Escola Conectada permanecem em desenvolvimento. A conversa não implica acesso imediato."
    );
  });

  it("gancho conduz à próxima seção (#empresa) com a frase do frame", () => {
    renderWithProviders(<HowItWorksB />);

    const hookLink = within(screen.getByTestId("section-hook")).getByRole("link");
    expect(hookLink).toHaveAttribute("href", `#${SECTION_IDS.empresa}`);
    expect(hookLink).toHaveTextContent(
      "E depois da entrega? A continuidade também precisa estar combinada."
    );
  });

  it("cards têm entrada em cascata: motion-safe com delays 1..3 (gating reduced-motion no CSS)", () => {
    renderWithProviders(<HowItWorksB />);

    const steps = screen.getAllByTestId("step-card");
    expect(steps[0].className).toContain("motion-safe");
    expect(steps[0].className).toContain("motion-safe-delay-1");
    expect(steps[1].className).toContain("motion-safe-delay-2");
    expect(steps[2].className).toContain("motion-safe-delay-3");
  });

  it("renderiza em EN quando o idioma persistido é en (RN-004)", () => {
    renderWithProviders(<HowItWorksB />, { language: "en" });

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "What happens after the first conversation?"
    );
    expect(screen.getAllByTestId("step-card")[0]).toHaveTextContent("Choose");
    expect(screen.getByTestId("how-it-works-note")).toHaveTextContent(
      "VibeCut and Escola Conectada remain in development. The conversation does not imply immediate access."
    );
  });

  it("renderiza em ES quando o idioma persistido é es (RN-004)", () => {
    renderWithProviders(<HowItWorksB />, { language: "es" });

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "¿Qué sucede después de la primera conversación?"
    );
    expect(screen.getAllByTestId("step-card")[1]).toHaveTextContent("Contratar");
    expect(
      within(screen.getByTestId("step-illustration-checklist")).getByText(
        "Alcance definido"
      )
    );
  });
});
