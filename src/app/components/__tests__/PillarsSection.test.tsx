import { describe, it, expect, beforeEach } from "vitest";
import { screen, within } from "@testing-library/react";
import { PillarsSection } from "../PillarsSection";
import { renderWithProviders, resetI18n } from "../../../test/test-utils";
import { SECTION_IDS } from "../../constants/anchors";

describe("PillarsSection (RN-021-2)", () => {
  beforeEach(() => resetI18n());

  it("exibe título, apoio e os 3 pilares — Manutenção, Evolução e Performance (PT)", () => {
    renderWithProviders(<PillarsSection />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Seu sistema não termina na entrega."
    );
    expect(
      screen.getByText(
        "Manutenção, evolução e performance orientam a entrega. A cobertura de cada pilar é definida no contrato."
      )
    );

    const pillars = screen.getAllByTestId("pillar-card");
    expect(pillars).toHaveLength(3);
    expect(pillars[0]).toHaveTextContent("Manutenção");
    expect(pillars[0]).toHaveTextContent(
      "Correções, estabilidade e segurança conforme contrato."
    );
    expect(pillars[1]).toHaveTextContent("Evolução");
    expect(pillars[2]).toHaveTextContent("Performance");
  });

  it("cobertura dos pilares remete a contrato, sem promessa de prazo/SLA/números (RN-021)", () => {
    renderWithProviders(<PillarsSection />);

    const pillars = screen.getAllByTestId("pillar-card");
    for (const pillar of pillars) {
      // Cobertura sempre remete ao acordado: "conforme contrato" ou "acordados"
      expect(pillar.textContent).toMatch(/contrato|acordad/i);
      expect(pillar.textContent).not.toMatch(/\d+%|\d+x|R\$\d|SLA/);
    }
  });

  it("ícones em quadrado rgba(31,58,95,0.08) conforme o design", () => {
    renderWithProviders(<PillarsSection />);

    const icons = screen.getAllByTestId("pillar-icon");
    expect(icons).toHaveLength(3);
    for (const icon of icons) {
      expect(icon.className).toContain("bg-[rgba(31,58,95,0.08)]");
    }
  });

  it("gancho conduz à prova social/empresa com a frase do frame", () => {
    renderWithProviders(<PillarsSection />);

    const hookLink = within(screen.getByTestId("section-hook")).getByRole("link");
    expect(hookLink).toHaveAttribute("href", `#${SECTION_IDS.empresa}`);
    expect(hookLink).toHaveTextContent(
      "Quer avaliar esse caminho para o seu negócio? Comece com uma conversa direta."
    );
  });

  it("cards têm entrada em cascata: motion-safe com delays 1..3 (gating reduced-motion no CSS)", () => {
    renderWithProviders(<PillarsSection />);

    const pillars = screen.getAllByTestId("pillar-card");
    expect(pillars[0].className).toContain("motion-safe");
    expect(pillars[0].className).toContain("motion-safe-delay-1");
    expect(pillars[1].className).toContain("motion-safe-delay-2");
    expect(pillars[2].className).toContain("motion-safe-delay-3");
  });

  it("renderiza em EN conforme idioma persistido (RN-004)", () => {
    renderWithProviders(<PillarsSection />, { language: "en" });
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Your system does not end at delivery."
    );
    expect(screen.getAllByTestId("pillar-card")[0]).toHaveTextContent(
      "Maintenance"
    );
  });

  it("renderiza em ES conforme idioma persistido (RN-004)", () => {
    renderWithProviders(<PillarsSection />, { language: "es" });
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Tu sistema no termina en la entrega."
    );
    expect(screen.getAllByTestId("pillar-card")[2]).toHaveTextContent(
      "Performance"
    );
  });
});
