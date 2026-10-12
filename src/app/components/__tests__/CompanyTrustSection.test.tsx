import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, fireEvent, act } from "@testing-library/react";
import { CompanyTrustSection } from "../CompanyTrustSection";
import { renderWithProviders, resetI18n } from "../../../test/test-utils";
import {
  buildWhatsAppUrl,
  EMAILS_BY_AREA,
  PHONE_DISPLAY,
  WHATSAPP_HERO_MESSAGE,
} from "../../constants/contacts";
import { SECTION_IDS } from "../../constants/anchors";

// RN-024-2 (RNs RN-003/RN-024): trust panel "Company and trust" — cópia com
// Clipboard API + fallback execCommand, feedback "Copiado!" 2s por campo com
// timers independentes, CTA WhatsApp deep-link e i18n RN-004.

async function flushPromises() {
  await act(async () => {});
}

describe("CompanyTrustSection (RN-024-2)", () => {
  let writeText: ReturnType<typeof vi.fn>;
  let execCommand: ReturnType<typeof vi.fn>;
  let originalExecCommand: unknown;

  beforeEach(() => {
    resetI18n();
    writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });
    originalExecCommand = document.execCommand;
    execCommand = vi.fn(() => true);
    (document as unknown as Record<string, unknown>).execCommand = execCommand;
  });

  afterEach(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: undefined,
      configurable: true,
    });
    (document as unknown as Record<string, unknown>).execCommand =
      originalExecCommand;
    vi.useRealTimers();
  });

  it("exibe header, marca, statement, canal comercial e os 3 contatos por área em PT", () => {
    renderWithProviders(<CompanyTrustSection />);

    // Header verdadeiro (sem depoimentos/ números fictícios)
    expect(screen.getByText("Empresa e confiança")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Informações verdadeiras e canais diretos."
    );
    expect(screen.getByText(/não usa depoimentos inventados/)).toBeInTheDocument();

    // Trust panel
    expect(screen.getByTestId("trust-panel")).toBeInTheDocument();
    expect(screen.getByText("Sistemas que evoluem. Negócios que crescem.")).toBeInTheDocument();

    // Canal comercial
    expect(screen.getByText("Fale com a equipe comercial")).toBeInTheDocument();
    expect(screen.getByText("Para novos projetos, parcerias e vendas.")).toBeInTheDocument();
    expect(screen.getByText(EMAILS_BY_AREA.business)).toBeInTheDocument();
    expect(screen.getByText(PHONE_DISPLAY)).toBeInTheDocument();

    // Contatos por área com propósito
    expect(screen.getByText("Contatos por área")).toBeInTheDocument();
    expect(screen.getByText("Escolha o canal certo para sua necessidade")).toBeInTheDocument();
    expect(screen.getByText(EMAILS_BY_AREA.careers)).toBeInTheDocument();
    expect(screen.getByText("Carreiras · oportunidades profissionais")).toBeInTheDocument();
    expect(screen.getByText(EMAILS_BY_AREA.support)).toBeInTheDocument();
    expect(screen.getByText("Suporte · ajuda com os produtos")).toBeInTheDocument();
    expect(screen.getByText(EMAILS_BY_AREA.compliance)).toBeInTheDocument();
    expect(screen.getByText("Compliance · privacidade e conformidade")).toBeInTheDocument();
  });

  it("seção tem id empresa (contrato de âncoras — navbar/hooks apontam para ela)", () => {
    renderWithProviders(<CompanyTrustSection />);

    expect(screen.getByTestId("company-trust-section").id).toBe(
      SECTION_IDS.empresa
    );
  });

  it("copia o e-mail comercial via Clipboard API com feedback 'Copiado!' por 2s", async () => {
    vi.useFakeTimers();
    renderWithProviders(<CompanyTrustSection />);

    fireEvent.click(screen.getByTestId("company-trust-commercial-email-button"));
    await flushPromises();

    expect(writeText).toHaveBeenCalledWith(EMAILS_BY_AREA.business);
    expect(screen.getByText("Copiado!")).toBeInTheDocument();

    // Após 2s o valor volta ao original
    await act(async () => vi.advanceTimersByTime(2000));
    expect(screen.queryByText("Copiado!")).not.toBeInTheDocument();
    expect(screen.getByText(EMAILS_BY_AREA.business)).toBeInTheDocument();
  });

  it("copia o telefone comercial de forma independente do e-mail", async () => {
    vi.useFakeTimers();
    renderWithProviders(<CompanyTrustSection />);

    fireEvent.click(screen.getByTestId("company-trust-commercial-phone-button"));
    await flushPromises();

    expect(writeText).toHaveBeenCalledWith(PHONE_DISPLAY);
    // Telefone em estado "Copiado!" e e-mail intacto (timers independentes)
    expect(screen.getByText("Copiado!")).toBeInTheDocument();
    expect(screen.getByText(EMAILS_BY_AREA.business)).toBeInTheDocument();
    expect(screen.queryByText(PHONE_DISPLAY)).toBeNull();

    await act(async () => vi.advanceTimersByTime(2000));
    expect(screen.getByText(PHONE_DISPLAY)).toBeInTheDocument();
  });

  it("usa fallback execCommand quando navigator.clipboard está indisponível", async () => {
    vi.useFakeTimers();
    Object.defineProperty(navigator, "clipboard", {
      value: undefined,
      configurable: true,
    });
    renderWithProviders(<CompanyTrustSection />);

    fireEvent.click(screen.getByTestId("company-trust-commercial-email-button"));
    await flushPromises();

    expect(execCommand).toHaveBeenCalledWith("copy");
    expect(screen.getByText("Copiado!")).toBeInTheDocument();

    await act(async () => vi.advanceTimersByTime(2000));
    expect(screen.queryByText("Copiado!")).not.toBeInTheDocument();
  });

  it("copia qualquer contato por área com o mesmo feedback", async () => {
    vi.useFakeTimers();
    renderWithProviders(<CompanyTrustSection />);

    fireEvent.click(screen.getByTestId("company-trust-area-compliance-button"));
    await flushPromises();

    expect(writeText).toHaveBeenCalledWith(EMAILS_BY_AREA.compliance);
    expect(screen.getByText("Copiado!")).toBeInTheDocument();
  });

  it("CTA 'Conversar no WhatsApp' abre deep-link wa.me pré-preenchido em nova aba (RN-002)", () => {
    renderWithProviders(<CompanyTrustSection />);

    const cta = screen.getByTestId("company-trust-whatsapp-cta");
    expect(cta).toHaveTextContent("Conversar no WhatsApp");
    expect(cta).toHaveAttribute("href", buildWhatsAppUrl(WHATSAPP_HERO_MESSAGE));
    expect(cta).toHaveAttribute("target", "_blank");
    expect(cta.getAttribute("rel")).toContain("noopener");
    expect(cta.getAttribute("rel")).toContain("noreferrer");
  });

  it("reflete o idioma ativo quando o dicionário é EN (RN-004)", () => {
    renderWithProviders(<CompanyTrustSection />, { language: "en" });

    expect(screen.getByText("Company and trust")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Truthful information and direct channels."
    );
    expect(screen.getByText("Systems that evolve. Businesses that grow.")).toBeInTheDocument();
    const commercialCol = screen.getByText("Talk to our commercial team");
    expect(commercialCol).toBeInTheDocument();
    expect(screen.getByTestId("company-trust-whatsapp-cta")).toHaveTextContent("Chat on WhatsApp");
    expect(screen.getByText("Careers · professional opportunities")).toBeInTheDocument();
    expect(screen.getByText("Support · help with our products")).toBeInTheDocument();
    expect(screen.getByText("Compliance · privacy and conformity")).toBeInTheDocument();
  });

  it("reflete o idioma ativo quando o dicionário é ES (RN-004)", () => {
    renderWithProviders(<CompanyTrustSection />, { language: "es" });

    expect(screen.getByText("Empresa y confianza")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Información verdadera y canales directos."
    );
    expect(screen.getByText("Habla con el equipo comercial")).toBeInTheDocument();
    expect(screen.getByTestId("company-trust-whatsapp-cta")).toHaveTextContent("Conversar por WhatsApp");
    expect(screen.getByText("Carreras · oportunidades profesionales")).toBeInTheDocument();
    expect(screen.getByText("Soporte · ayuda con los productos")).toBeInTheDocument();
  });
});
