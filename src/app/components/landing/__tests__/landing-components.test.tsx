import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ReactNode } from "react";
import { LandingCta } from "../LandingCta";
import { LandingFaq } from "../LandingFaq";
import { ProductFooter } from "../ProductFooter";
import { I18nProvider } from "../../../i18n/I18nContext";
import { Language } from "../../../i18n/translations";
import { resetI18n } from "../../../../test/test-utils";
import { EMAILS_BY_AREA } from "../../../constants/contacts";

// ── Suites dos componentes comuns de landing (RN-025-1) ────────────
// Contratos puros — sem copy de produto (a copy é das landings).

const THEME = {
  pageBg: "",
  titleFont: "",
  navbarBg: "",
  brandText: "",
  productChip: "",
  navLink: "",
  navLinkHover: "",
  navDivider: "",
  accentBg: "",
  accentText: "",
  footerBg: "bg-black",
  footerTitle: "text-white",
  footerMuted: "text-slate-300",
  footerHover: "hover:text-white",
  footerDivider: "border-slate-700",
  footerIdentityStrong: "text-white",
};

function renderWithI18n(ui: ReactNode, language: Language = "pt") {
  localStorage.setItem("techminds-language", language);
  return render(
    <MemoryRouter>
      <I18nProvider>{ui}</I18nProvider>
    </MemoryRouter>
  );
}

describe("LandingCta — gate de CTAs (RN-032)", () => {
  beforeEach(() => resetI18n());

  it("CTA sem destino nasce desabilitado com microcopy e tooltip", () => {
    renderWithI18n(
      <LandingCta
        cta={{ label: "Explorar o Lumen", kind: "disabled", reason: "Destino indisponível" }}
        microcopy="Destino indisponível"
        microcopyId="m1"
        testId="cta"
      />
    );
    const button = screen.getByTestId("cta-button");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(button).toHaveAttribute("title", "Destino indisponível");
    expect(button).toHaveAttribute("aria-describedby", "m1");
    expect(screen.getByTestId("cta-microcopy")).toBeInTheDocument();
  });

  it("CTA kind route vira Link apontando ao destino", () => {
    renderWithI18n(
      <LandingCta
        cta={{ label: "Termos", kind: "route", target: "/terms-of-use/vibecut" }}
        testId="cta"
      />
    );
    const link = screen.getByTestId("cta");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/terms-of-use/vibecut");
  });

  it("CTA mailto abre cliente de e-mail do usuário (href mailto:)", () => {
    renderWithI18n(
      <LandingCta
        cta={{
          label: "Solicitar",
          kind: "mailto",
          target: `mailto:${EMAILS_BY_AREA.business}`,
        }}
        testId="cta"
      />
    );
    const link = screen.getByTestId("cta");
    expect(link).toHaveAttribute("href", `mailto:${EMAILS_BY_AREA.business}`);
  });

  it("CTA âncora aponta #seção (com destino definido)", () => {
    renderWithI18n(
      <LandingCta cta={{ label: "Como funciona", kind: "anchor", target: "sec-x" }} testId="cta" />
    );
    expect(screen.getByTestId("cta")).toHaveAttribute("href", "#sec-x");
  });

  it("anchor/route/mailto sem target caem no estado desabilitado (defensivo RN-032)", () => {
    renderWithI18n(
      <LandingCta cta={{ label: "Sem destino", kind: "anchor" }} testId="cta"
        microcopy="CTA sem destino (fallback)" microcopyId="m2" />
    );
    expect(screen.getByTestId("cta-button")).toBeDisabled();
  });
});

describe("LandingFaq — accordion (RN-035)", () => {
  beforeEach(() => resetI18n());

  const items = [
    { q: "Q1", a: "A1" },
    { q: "Q2", a: "A2" },
  ];

  it("abre uma pergunta por vez", () => {
    renderWithI18n(<LandingFaq items={items} testId="faq" itemVariants="" />);
    expect(screen.getAllByTestId("faq-answer")).toHaveLength(1);
    expect(screen.getAllByTestId("faq-toggle")[0]).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(screen.getAllByTestId("faq-toggle")[1]);
    const answers = screen.getAllByTestId("faq-answer");
    expect(answers).toHaveLength(1);
    expect(answers[0]).toHaveTextContent("A2");
    expect(screen.getAllByTestId("faq-toggle")[1]).toHaveAttribute("aria-expanded", "true");
  });
});

describe("ProductFooter — rodapé TechMinds de produto (RN-025)", () => {
  beforeEach(() => resetI18n());

  it("identidade empresarial real (ADR-005) + © por produto", () => {
    renderWithI18n(
      <ProductFooter
        theme={THEME}
        footer={{
          statement: "Statement do produto",
          tagline: "Um produto TechMinds",
          columns: [
            {
              title: "TechMinds",
              links: [
                { label: "Conheça a empresa", kind: "route", target: "/" },
                {
                  label: "Solicitar apresentação",
                  kind: "mailto",
                  target: EMAILS_BY_AREA.business,
                },
              ],
            },
          ],
          copyright: "© 2026 FasTo · TechMinds.",
        }}
      />
    );
    const footer = screen.getByTestId("landing-footer");
    expect(footer).toHaveTextContent(
      "Nome Empresarial: 69.184.592 MICHEL LEMOS BITTENCOURT"
    );
    expect(footer).toHaveTextContent("CNPJ: 69.184.592/0001-45 | Guaíba - RS");
    expect(footer).toHaveTextContent("© 2026 FasTo · TechMinds.");
    const mailtos = within(footer).getAllByRole("link");
    expect(
      mailtos.some(
        (l) => (l as HTMLAnchorElement).getAttribute("href") === `mailto:${EMAILS_BY_AREA.business}`
      )
    ).toBe(true);
  });

  it("link kind text renderiza como texto (coluna 'Do seu jeito' — Lumen)", () => {
    renderWithI18n(
      <ProductFooter
        theme={THEME}
        footer={{
          statement: "S",
          tagline: "T",
          columns: [
            {
              title: "Do seu jeito",
              links: [{ label: "Português (BR) · Idioma do produto", kind: "text" }],
            },
          ],
          copyright: "©",
        }}
      />
    );
    const footer = screen.getByTestId("landing-footer");
    expect(footer).toHaveTextContent("Português (BR) · Idioma do produto");
    const links = within(footer).queryAllByRole("link");
    expect(links).toHaveLength(0);
  });
});
