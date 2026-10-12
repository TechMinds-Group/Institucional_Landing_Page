import { describe, it, expect, beforeEach } from "vitest";
import { screen, within } from "@testing-library/react";
import { SocialProofSection } from "../SocialProofSection";
import { renderWithProviders, resetI18n } from "../../../test/test-utils";
import { SECTION_IDS } from "../../constants/anchors";

describe("SocialProofSection (RN-021-3 / RN-023)", () => {
  beforeEach(() => resetI18n());

  it("exibe título, apoio e 2 cards de caso — Barbearias e Estética e beleza (PT)", () => {
    renderWithProviders(<SocialProofSection />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Resultados merecem contexto. E evidência."
    );
    expect(
      screen.getByText(
        "Espaços reservados para casos e depoimentos reais. Publicação após validação e autorização dos clientes."
      )
    );

    const cards = screen.getAllByTestId("case-card");
    expect(cards).toHaveLength(2);
    expect(cards[0]).toHaveTextContent("Barbearias");
    expect(cards[1]).toHaveTextContent("Estética e beleza");
  });

  it("cards exibem os placeholders canônicos do design (RN-023)", () => {
    renderWithProviders(<SocialProofSection />);

    for (const card of screen.getAllByTestId("case-card")) {
      expect(card).toHaveTextContent("[Depoimento aprovado a inserir]");
      expect(card).toHaveTextContent("[Resultado e contexto a validar]");
      expect(card).toHaveTextContent("[Logo]");
      expect(card).toHaveTextContent("[Nome]");
      expect(card).toHaveTextContent("[Cargo] · [Empresa]");
    }
    // Tag de política em ambos os cards
    expect(screen.getAllByTestId("case-pending-tag")).toHaveLength(2);
    expect(screen.getAllByTestId("case-pending-tag")[0]).toHaveTextContent(
      "CONTEÚDO PENDENTE"
    );
  });

  it("notas de política visíveis: validação/autorização e nenhum número comercial como prova", () => {
    renderWithProviders(<SocialProofSection />);

    expect(screen.getByTestId("social-proof-note")).toHaveTextContent(
      "Depoimentos, logos e resultados ainda não confirmados. Nenhum número comercial é apresentado como prova."
    );
  });

  it("regression guard RN-023: nenhum número comercial/métrica no conteúdo dos cards", () => {
    renderWithProviders(<SocialProofSection />);

    for (const card of screen.getAllByTestId("case-card")) {
      // Placeholders não contêm dígitos; métricas de resultado são proibidas
      expect(card.textContent).not.toMatch(/\d/);
    }
  });

  it("gancho conduz à empresa com a frase do frame", () => {
    renderWithProviders(<SocialProofSection />);

    const hookLink = within(screen.getByTestId("section-hook")).getByRole("link");
    expect(hookLink).toHaveAttribute("href", `#${SECTION_IDS.empresa}`);
    expect(hookLink).toHaveTextContent(
      "Enquanto os casos são preparados, você pode conhecer a proposta diretamente."
    );
  });

  it("cards têm entrada em cascata: motion-safe com delays 1..2 (gating reduced-motion no CSS)", () => {
    renderWithProviders(<SocialProofSection />);

    const cards = screen.getAllByTestId("case-card");
    expect(cards[0].className).toContain("motion-safe");
    expect(cards[0].className).toContain("motion-safe-delay-1");
    expect(cards[1].className).toContain("motion-safe-delay-2");
  });

  it("renderiza placeholders e notas no idioma ativo EN (RN-004)", () => {
    renderWithProviders(<SocialProofSection />, { language: "en" });
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Results deserve context. And evidence."
    );
    expect(screen.getAllByTestId("case-card")[0]).toHaveTextContent(
      "[Approved testimonial to be inserted]"
    );
    expect(screen.getAllByTestId("case-pending-tag")[0]).toHaveTextContent(
      "CONTENT PENDING"
    );
  });

  it("renderiza placeholders e notas no idioma ativo ES (RN-004)", () => {
    renderWithProviders(<SocialProofSection />, { language: "es" });
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Los resultados merecen contexto. Y evidencia."
    );
    expect(screen.getAllByTestId("case-card")[0]).toHaveTextContent(
      "[Testimonio aprobado a insertar]"
    );
    expect(screen.getByTestId("social-proof-note")).toHaveTextContent(
      "Ningún número comercial se presenta como prueba."
    );
  });
});
