import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, fireEvent, act, within, render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { I18nProvider } from "../../i18n/I18nContext";
import { FooterB } from "../FooterB";
import { renderWithProviders, resetI18n } from "../../../test/test-utils";
import { EMAILS_BY_AREA } from "../../constants/contacts";
import { SECTION_IDS } from "../../constants/anchors";

// RN-024-3 (RNs RN-003/RN-024): Rodapé B — 3 grupos de navegação, gate de
// Sistemas por landing própria (Groom → /groom), links legais para as
// páginas (sem modal — CR-005), contatos por área copiáveis (RN-003) e
// identificação empresarial. i18n RN-004.

async function flushPromises() {
  await act(async () => {});
}

describe("FooterB (RN-024-3)", () => {
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

  it("exibe fundo escuro, marca + statement e identificação empresarial em PT", () => {
    renderWithProviders(<FooterB />);

    // Fundo #111318 e id contato (contrato de âncoras)
    const footer = screen.getByTestId("footerb");
    expect(footer.id).toBe(SECTION_IDS.contato);
    expect(footer.className).toContain("bg-[#111318]");

    expect(screen.getAllByText("TechMinds").length).toBeGreaterThan(0);
    expect(within(footer).getByText("Sistemas que evoluem. Negócios que crescem.")).toBeInTheDocument();

    // Identificação (CNPJ real — ADR-005) + © 2026
    const idBlock = screen.getByTestId("footerb-legal-id");
    expect(within(idBlock).getByText("Nome Empresarial: 69.184.592 MICHEL LEMOS BITTENCOURT")).toBeInTheDocument();
    expect(within(idBlock).getByText("CNPJ: 69.184.592/0001-45 | Guaíba - RS")).toBeInTheDocument();
    expect(within(idBlock).getByText("© 2026 TechMinds. Todos os direitos reservados.")).toBeInTheDocument();
    // Divisor do design
    expect(footer.innerHTML).toContain("border-[#303342]");
  });

  it("nav em 3 grupos: Sistemas (5 produtos), Empresa e Legal", () => {
    renderWithProviders(<FooterB />);

    const systems = screen.getByTestId("footerb-nav-systems");
    for (const product of ["Groom", "VibeCut", "FasTo", "Lumen", "Escola Conectada"]) {
      expect(within(systems).getByRole("link", { name: product })).toBeInTheDocument();
    }

    const company = screen.getByTestId("footerb-nav-company");
    expect(within(company).getByRole("link", { name: "Sobre nós" })).toBeInTheDocument();
    expect(within(company).getByRole("link", { name: "Contato" })).toBeInTheDocument();

    const legal = screen.getByTestId("footerb-nav-legal");
    expect(within(legal).getByRole("link", { name: "Termos de uso" })).toBeInTheDocument();
    expect(within(legal).getByRole("link", { name: "Privacidade" })).toBeInTheDocument();
  });

  it("gate por landing: só Groom vai a /groom; demais produtos apontam para a âncora do Catálogo", () => {
    renderWithProviders(<FooterB />);

    const systems = screen.getByTestId("footerb-nav-systems");
    expect(within(systems).getByRole("link", { name: "Groom" })).toHaveAttribute("href", "/groom");
    for (const product of ["VibeCut", "FasTo", "Lumen", "Escola Conectada"]) {
      expect(within(systems).getByRole("link", { name: product })).toHaveAttribute(
        "href",
        `#${SECTION_IDS.catalogo}`
      );
    }
  });

  it("links legais navegam para as páginas (vibecut — fallback RN-007), sem modal", () => {
    renderWithProviders(<FooterB />);

    expect(screen.getByTestId("footerb-link-terms")).toHaveAttribute(
      "href",
      "/terms-of-use/vibecut"
    );
    expect(screen.getByTestId("footerb-link-privacy")).toHaveAttribute(
      "href",
      "/privacy/vibecut"
    );

    // CR-005: nenhuma janela sobreposta — zero diálogo/role modal no footer
    expect(within(screen.getByTestId("footerb")).queryByRole("dialog")).toBeNull();
  });

  it("links de Empresa apontam para as âncoras Company and trust e Rodapé", () => {
    renderWithProviders(<FooterB />);

    const company = screen.getByTestId("footerb-nav-company");
    expect(within(company).getByRole("link", { name: "Sobre nós" })).toHaveAttribute(
      "href",
      `#${SECTION_IDS.empresa}`
    );
    expect(within(company).getByRole("link", { name: "Contato" })).toHaveAttribute(
      "href",
      `#${SECTION_IDS.contato}`
    );
  });

  it("contatos por área copiáveis com feedback 'Copiado!' por 2s (RN-003)", async () => {
    vi.useFakeTimers();
    renderWithProviders(<FooterB />);

    const contacts = screen.getByTestId("footerb-contacts");
    expect(within(contacts).getByText("Carreiras")).toBeInTheDocument();
    expect(within(contacts).getByText(EMAILS_BY_AREA.careers)).toBeInTheDocument();
    expect(within(contacts).getByText("Suporte")).toBeInTheDocument();
    expect(within(contacts).getByText(EMAILS_BY_AREA.support)).toBeInTheDocument();
    expect(within(contacts).getByText("Privacidade e conformidade")).toBeInTheDocument();
    expect(within(contacts).getByText(EMAILS_BY_AREA.compliance)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("footerb-contact-support-button"));
    await flushPromises();

    expect(writeText).toHaveBeenCalledWith(EMAILS_BY_AREA.support);
    expect(screen.getByText("Copiado!")).toBeInTheDocument();

    await act(async () => vi.advanceTimersByTime(2000));
    expect(screen.queryByText("Copiado!")).not.toBeInTheDocument();
  });

  it("cópia via fallback execCommand quando clipboard nativo está indisponível", async () => {
    vi.useFakeTimers();
    Object.defineProperty(navigator, "clipboard", {
      value: undefined,
      configurable: true,
    });
    renderWithProviders(<FooterB />);

    fireEvent.click(screen.getByTestId("footerb-contact-careers-button"));
    await flushPromises();

    expect(execCommand).toHaveBeenCalledWith("copy");
    expect(screen.getByText("Copiado!")).toBeInTheDocument();
  });

  it("reflete o idioma ativo quando o dicionário é EN (RN-004)", () => {
    renderWithProviders(<FooterB />, { language: "en" });

    const footer = screen.getByTestId("footerb");
    const systems = within(footer).getByTestId("footerb-nav-systems");
    expect(within(footer).getByText("Systems")).toBeInTheDocument();
    expect(within(systems).getAllByRole("link").map((l) => l.textContent)).toEqual([
      "Groom",
      "VibeCut",
      "FasTo",
      "Lumen",
      "Escola Conectada",
    ]);
    expect(within(footer).getByTestId("footerb-nav-company").textContent).toContain("About us");
    expect(within(footer).getByTestId("footerb-nav-legal").textContent).toContain("Terms of use");
    expect(within(footer).getByText("© 2026 TechMinds. All rights reserved.")).toBeInTheDocument();
    expect(within(footer).getByText("Legal Name: 69.184.592 MICHEL LEMOS BITTENCOURT")).toBeInTheDocument();
  });

  it("reflete o idioma ativo quando o dicionário é ES (RN-004)", () => {
    renderWithProviders(<FooterB />, { language: "es" });

    const footer = screen.getByTestId("footerb");
    expect(within(footer).getByText("Sistemas")).toBeInTheDocument();
    expect(within(footer).getByText("Sobre nosotros")).toBeInTheDocument();
    expect(within(footer).getByText("Términos de uso")).toBeInTheDocument();
    expect(within(footer).getByText("Nombre Empresarial: 69.184.592 MICHEL LEMOS BITTENCOURT")).toBeInTheDocument();
    expect(within(footer).getByText("© 2026 TechMinds. Todos los derechos reservados.")).toBeInTheDocument();
    expect(within(footer).getByText("Contactos por área")).toBeInTheDocument();
  });

  it("renderiza em rota legal sem quebrar (FooterB autossuficiente — sem props de modal)", async () => {
    render(
      <I18nProvider>
        <MemoryRouter initialEntries={["/terms-of-use/vibecut"]}>
          <Routes>
            <Route path="/terms-of-use/:product" element={<FooterB />} />
            <Route path="/" element={<div data-testid="main-page">Main</div>} />
          </Routes>
        </MemoryRouter>
      </I18nProvider>
    );

    expect(screen.getByTestId("footerb")).toBeInTheDocument();
    // Gate continua resolvido da mesma forma em página legal
    expect(screen.getByTestId("footerb-link-terms")).toHaveAttribute(
      "href",
      "/terms-of-use/vibecut"
    );
  });
});
