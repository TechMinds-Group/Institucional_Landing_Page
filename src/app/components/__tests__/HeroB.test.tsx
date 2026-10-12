import { describe, it, expect, beforeEach } from "vitest";
import { screen, within } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { HeroB } from "../HeroB";
import { renderWithProviders, resetI18n } from "../../../test/test-utils";
import { buildWhatsAppUrl, WHATSAPP_HERO_MESSAGE, WHATSAPP_NUMBER } from "../../constants/contacts";
import { SECTION_IDS } from "../../constants/anchors";

// Fonte do stylesheet de animação (RN-022) — lida direto para assegurar
// a regra prefers-reduced-motion (vitest não expõe CSS via ?raw).
const motionCss = readFileSync(
  resolve(dirname(fileURLToPath(import.meta.url)), "../../../styles/motion.css"),
  "utf-8"
);

describe("HeroB (RN-022-2)", () => {
  beforeEach(() => resetI18n());

  it("exibe eyebrow, H1, 2 linhas de apoio, CTA, microcopy, gancho e imagem em PT", () => {
    renderWithProviders(<HeroB />);

    expect(screen.getByText("Tecnologia para negócios que crescem")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Menos rotina dispersa. Mais controle para crescer."
    );
    expect(screen.getByText(/Sistemas prontos, em evolução constante/)).toBeInTheDocument();
    expect(screen.getByText(/Você conversa com a gente/)).toBeInTheDocument();

    const cta = screen.getByTestId("hero-whatsapp-cta");
    expect(cta).toHaveTextContent("Conversar no WhatsApp");
    expect(screen.getByText("Escopo, suporte e condições acordados com você.")).toBeInTheDocument();
    expect(screen.getByText("Veja qual solução faz sentido para sua rotina.")).toBeInTheDocument();
    expect(screen.getByAltText(/hub orbital noturno/i)).toBeInTheDocument();
  });

  it("CTA abre deep-link wa.me com mensagem pré-preenchida em nova aba (RN-002)", () => {
    renderWithProviders(<HeroB />);

    const cta = screen.getByTestId("hero-whatsapp-cta");
    expect(cta.getAttribute("href")).toMatch(
      new RegExp(`^https:\\/\\/wa\\.me\\/${WHATSAPP_NUMBER}\\?text=`)
    );
    expect(cta).toHaveAttribute("href", buildWhatsAppUrl(WHATSAPP_HERO_MESSAGE));
    expect(cta).toHaveAttribute("target", "_blank");
    expect(cta.getAttribute("rel")).toContain("noopener");
    expect(cta.getAttribute("rel")).toContain("noreferrer");
  });

  it("não possui CTA de rolagem 'Conhecer os produtos' (RN-001 superseded — CR-003)", () => {
    renderWithProviders(<HeroB />);

    expect(screen.queryByText("Conhecer os produtos")).not.toBeInTheDocument();
    expect(screen.queryByText("Solicitar una demo")).not.toBeInTheDocument();
    expect(screen.queryByText("Request a demo")).not.toBeInTheDocument();
  });

  it("gancho aponta para a seção Problema (decisão 11/10/2026)", () => {
    renderWithProviders(<HeroB />);

    const hookLink = within(screen.getByTestId("section-hook")).getByRole("link");
    expect(hookLink).toHaveAttribute("href", `#${SECTION_IDS.problema}`);
  });

  it("conteúdo usa a classe utilitária motion-safe (fade/slide-in)", () => {
    renderWithProviders(<HeroB />);

    expect(screen.getByRole("heading", { level: 1 }).closest(".motion-safe")).not.toBeNull();
    expect(screen.getByAltText(/hub orbital noturno/i).closest(".motion-safe")).not.toBeNull();
  });

  it("motion.css desativa a animação sob prefers-reduced-motion: reduce (RN-022)", () => {
    const mediaIndex = motionCss.indexOf("@media (prefers-reduced-motion: reduce)");
    expect(mediaIndex).toBeGreaterThan(-1);

    const reducedBlock = motionCss.slice(mediaIndex);
    expect(reducedBlock).toContain(".motion-safe");
    expect(reducedBlock).toContain("animation: none");
  });

  it("renderiza textos em EN quando o idioma persistido é en (RN-004)", () => {
    renderWithProviders(<HeroB />, { language: "en" });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Less scattered routine. More control to grow."
    );
    expect(screen.getByTestId("hero-whatsapp-cta")).toHaveTextContent("Chat on WhatsApp");
    expect(screen.getByText("See which solution makes sense for your routine.")).toBeInTheDocument();
  });
});
