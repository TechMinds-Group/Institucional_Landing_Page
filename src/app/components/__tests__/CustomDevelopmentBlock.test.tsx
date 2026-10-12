import { describe, it, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import { CustomDevelopmentBlock } from "../CustomDevelopmentBlock";
import { renderWithProviders, resetI18n } from "../../../test/test-utils";
import {
  buildWhatsAppUrl,
  WHATSAPP_CUSTOM_DEV_MESSAGE,
} from "../../constants/contacts";

describe("CustomDevelopmentBlock (RN-020 — Desenvolvimento sob medida)", () => {
  beforeEach(() => resetI18n());

  it("exibe eyebrow, H2, texto de escopo acordado e microcopy em PT", () => {
    renderWithProviders(<CustomDevelopmentBlock />);

    expect(screen.getByText("Seu negócio tem outra dinâmica?")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "O sistema pode partir da sua operação.",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Para necessidades fora do catálogo, desenvolvemos sob medida, com escopo e customização acordados."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("Conte sua rotina na mesma conversa comercial.")
    ).toBeInTheDocument();
  });

  it("CTA branco abre wa.me/5551997066347 em nova aba com mensagem própria (RN-002)", () => {
    renderWithProviders(<CustomDevelopmentBlock />);

    const cta = screen.getByTestId("custom-dev-whatsapp-cta");
    expect(cta).toHaveTextContent("Conversar no WhatsApp");
    expect(cta).toHaveAttribute(
      "href",
      buildWhatsAppUrl(WHATSAPP_CUSTOM_DEV_MESSAGE)
    );
    expect(cta.getAttribute("href")).toMatch(
      /^https:\/\/wa\.me\/5551997066347\?text=/
    );
    expect(cta).toHaveAttribute("target", "_blank");
    expect(cta.getAttribute("rel")).toContain("noopener");
    expect(cta.getAttribute("rel")).toContain("noreferrer");
  });

  it("fundo escuro do design B (#1F3A5F) e posicionamento como bloco do catálogo", () => {
    const { container } = renderWithProviders(<CustomDevelopmentBlock />);

    const block = screen.getByTestId("custom-dev-block");
    expect(block.className).toContain("bg-[#1F3A5F]");
    expect(container.querySelector("[data-testid='custom-dev-block']")).not.toBeNull();
  });

  it("renderiza título e CTA em EN (RN-004)", () => {
    renderWithProviders(<CustomDevelopmentBlock />, { language: "en" });

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "The system can start from your operation.",
      })
    ).toBeInTheDocument();
    expect(screen.getByTestId("custom-dev-whatsapp-cta")).toHaveTextContent(
      "Chat on WhatsApp"
    );
  });

  it("renderiza título e CTA em ES (RN-004)", () => {
    renderWithProviders(<CustomDevelopmentBlock />, { language: "es" });

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "El sistema puede partir de tu operación.",
      })
    ).toBeInTheDocument();
    expect(screen.getByTestId("custom-dev-whatsapp-cta")).toHaveTextContent(
      "Conversar por WhatsApp"
    );
  });
});
