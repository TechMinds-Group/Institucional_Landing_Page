import { describe, it, expect, beforeEach } from "vitest";
import { screen, within, fireEvent } from "@testing-library/react";
import { NavbarB } from "../NavbarB";
import { renderWithProviders, resetI18n } from "../../../test/test-utils";
import { SECTION_IDS } from "../../constants/anchors";

describe("NavbarB (RN-022-1)", () => {
  beforeEach(() => resetI18n());

  it("exibe marca, 4 links âncora e 3 pills de idioma em PT (default)", () => {
    renderWithProviders(<NavbarB />);

    expect(screen.getAllByText("TechMinds").length).toBeGreaterThan(0);

    const links = within(screen.getByTestId("navb-links"));
    expect(links.getByRole("link", { name: "Catálogo" })).toHaveAttribute(
      "href",
      `#${SECTION_IDS.catalogo}`
    );
    expect(links.getByRole("link", { name: "Como funciona" })).toHaveAttribute(
      "href",
      `#${SECTION_IDS.comoFunciona}`
    );
    expect(links.getByRole("link", { name: "Pilares" })).toHaveAttribute(
      "href",
      `#${SECTION_IDS.pilares}`
    );
    expect(links.getByRole("link", { name: "Empresa" })).toHaveAttribute(
      "href",
      `#${SECTION_IDS.empresa}`
    );

    const pills = within(screen.getByTestId("navb-language-pills"));
    expect(pills.getByRole("button", { name: "PT" })).toHaveAttribute("aria-pressed", "true");
    expect(pills.getByRole("button", { name: "EN" })).toHaveAttribute("aria-pressed", "false");
    expect(pills.getByRole("button", { name: "ES" })).toHaveAttribute("aria-pressed", "false");
  });

  it("destaca a pill ativa quando o idioma persistido é EN", () => {
    renderWithProviders(<NavbarB />, { language: "en" });

    const pills = within(screen.getByTestId("navb-language-pills"));
    expect(pills.getByRole("button", { name: "EN" })).toHaveAttribute("aria-pressed", "true");
    expect(pills.getByRole("button", { name: "PT" })).toHaveAttribute("aria-pressed", "false");
  });

  it("troca para ES ao clicar na pill: <html lang>, localStorage e textos (RN-004)", () => {
    renderWithProviders(<NavbarB />);

    const pills = within(screen.getByTestId("navb-language-pills"));
    fireEvent.click(pills.getByRole("button", { name: "ES" }));

    expect(document.documentElement.lang).toBe("es");
    expect(localStorage.getItem("techminds-language")).toBe("es");
    expect(within(screen.getByTestId("navb-links")).getByText("Catálogo")).toBeInTheDocument();
    expect(within(screen.getByTestId("navb-links")).getByText("Cómo funciona")).toBeInTheDocument();
  });

  it("clicar em âncora ainda não entregue é no-op seguro (sem exceção)", () => {
    renderWithProviders(<NavbarB />);

    const links = within(screen.getByTestId("navb-links"));
    expect(() =>
      fireEvent.click(links.getByRole("link", { name: "Catálogo" }))
    ).not.toThrow();
    expect(screen.getByTestId("navb-links")).toBeInTheDocument();
  });

  it("sidebar mobile (RN-012 — frame #59:3): abre pelo hamburger, trava o scroll do body e usa o contrato de âncoras do design B", () => {
    renderWithProviders(<NavbarB />);

    expect(document.body.style.overflow).toBe("");

    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
    expect(document.body.style.overflow).toBe("hidden");

    // Links da sidebar → contrato de âncoras B (frame #59:36):
    expect(screen.getByRole("button", { name: "Soluções" })).toHaveAttribute(
      "data-testid",
      `sidebar-link-${SECTION_IDS.catalogo}`
    );
    expect(
      screen.getByRole("button", { name: "Como trabalhamos" })
    ).toHaveAttribute("data-testid", `sidebar-link-${SECTION_IDS.comoFunciona}`);
    expect(screen.getByRole("button", { name: "Empresa" })).toHaveAttribute(
      "data-testid",
      `sidebar-link-${SECTION_IDS.empresa}`
    );
    expect(screen.getByRole("button", { name: "Contato" })).toHaveAttribute(
      "data-testid",
      `sidebar-link-${SECTION_IDS.contato}`
    );

    // Clique em âncora da sidebar: sem exceção e body destravado (fecha).
    expect(() =>
      fireEvent.click(screen.getByRole("button", { name: "Soluções" }))
    ).not.toThrow();
    expect(document.body.style.overflow).toBe("");
  });

  it("sidebar mobile: seletor de idioma PT/EN/ES com check no ativo e documentos legais (frame #59:51/#59:63)", async () => {
    renderWithProviders(<NavbarB />, { language: "pt" });

    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));

    // Grupo de idioma com o ativo em PT (check)
    const languageBox = screen.getByTestId("sidebar-language");
    expect(within(languageBox).getByRole("button", { pressed: true })).toHaveTextContent("PT");
    expect(within(languageBox).getByRole("button", { name: "EN" })).toBeInTheDocument();
    expect(within(languageBox).getByRole("button", { name: "ES" })).toBeInTheDocument();

    // Troca de idioma na sidebar persiste (RN-004) — sidebar permanece aberta
    fireEvent.click(within(languageBox).getByRole("button", { name: "EN" }));
    expect(within(languageBox).getByRole("button", { pressed: true })).toHaveTextContent("EN");
    expect(localStorage.getItem("techminds-language")).toBe("en");

    // Documentos → rotas legais
    expect(screen.getByTestId("sidebar-doc-terms")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar-doc-privacy")).toBeInTheDocument();
  });
});
