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
    expect(links.getByRole("link", { name: "Soluções" })).toHaveAttribute(
      "href",
      `#${SECTION_IDS.catalogo}`
    );
    expect(links.getByRole("link", { name: "Como trabalhamos" })).toHaveAttribute(
      "href",
      `#${SECTION_IDS.comoFunciona}`
    );
    expect(links.getByRole("link", { name: "Empresa" })).toHaveAttribute(
      "href",
      `#${SECTION_IDS.empresa}`
    );
    expect(links.getByRole("link", { name: "Contato" })).toHaveAttribute(
      "href",
      `#${SECTION_IDS.contato}`
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
    expect(within(screen.getByTestId("navb-links")).getByText("Soluciones")).toBeInTheDocument();
    expect(within(screen.getByTestId("navb-links")).getByText("Cómo trabajamos")).toBeInTheDocument();
  });

  it("clicar em âncora ainda não entregue é no-op seguro (sem exceção)", () => {
    renderWithProviders(<NavbarB />);

    const links = within(screen.getByTestId("navb-links"));
    expect(() =>
      fireEvent.click(links.getByRole("link", { name: "Soluções" }))
    ).not.toThrow();
    expect(screen.getByTestId("navb-links")).toBeInTheDocument();
  });

  it("drawer mobile (RN-012): abre pelo hamburger, trava o scroll do body e mantém links legados", () => {
    renderWithProviders(<NavbarB />);

    expect(document.body.style.overflow).toBe("");

    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
    expect(document.body.style.overflow).toBe("hidden");

    // Links legados do drawer intactos (RN-012 — inalterado)
    expect(screen.getByRole("button", { name: "Produtos" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Início" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /close menu/i }));
    expect(document.body.style.overflow).toBe("");
  });
});
