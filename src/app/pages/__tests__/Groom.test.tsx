import { describe, it, expect, beforeAll } from "vitest";
import { screen, within, fireEvent, waitFor } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Groom } from "../Groom";
import { renderWithProviders } from "../../../test/test-utils";
import {
  buildWhatsAppUrl,
  WHATSAPP_GROOM_TRIAL_MESSAGE,
  WHATSAPP_NUMBER,
} from "../../constants/contacts";

// Fonte do arquivo da página — verificação estrutural do cleanup de raster (RN-034).
const groomTsxPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "Groom.tsx"
);

// jsdom não implementa IntersectionObserver — o flutuante voltar-ao-topo do
// Groom (RN-009, mantido no código) depende dele. Stub local do ambiente de teste.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
beforeAll(() => {
  (globalThis as Record<string, unknown>).IntersectionObserver =
    IntersectionObserverStub;
});

// RN-031 do canônico não se aplica aqui: Groom é PT-only (RN-018) — sem testes
// de troca de idioma nesta página. SPA estática (A-1): sem mocks de rede.

describe("Groom — Navigation (RN-033-1, CR-007)", () => {
  it('não renderiza o botão "Entrar" nem link de login na navbar (CR-007 — asserção de ausência)', () => {
    renderWithProviders(<Groom />);

    expect(screen.queryByText(/^(entrar|login)$/i)).not.toBeInTheDocument();
    // Login segue acessível somente pela URL própria do produto (CR-007):
    // nenhum link de login na navbar/landing.
    expect(document.body.querySelector('a[href*="/login"]')).toBeNull();
  });

  it("navbar segue o padrão de identidade (CR-010): Logo TechMinds + pill Groom com accent #f1c75c", () => {
    renderWithProviders(<Groom />);

    const brand = screen.getByTestId("groom-brand");
    expect(brand).toHaveTextContent("TechMinds");
    expect(within(brand).getByTestId("groom-brand-chip")).toHaveTextContent("Groom");
    // Logo é o <img> do padrão (Logo component); o scissors raster pré-existente não deve voltar.
    expect(brand.querySelectorAll("img")).toHaveLength(1);
    expect(brand.textContent).not.toContain("Testar gratuitamente");
  });

  it("navbar mantém as 5 âncoras com os mesmos destinos e IDs estáveis no DOM (RN-011)", () => {
    renderWithProviders(<Groom />);

    const navbar = screen.getByTestId("groom-nav");
    const anchors: Array<[string, string]> = [
      ["Como Funciona", "#como-funciona"],
      ["Funcionalidades", "#funcionalidades"],
      ["Diferenciais", "#diferenciais"],
      ["Preços", "#precos"],
      ["FAQ", "#faq"],
    ];
    for (const [label, href] of anchors) {
      const link = within(navbar).getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", href);
      expect(document.getElementById(href.slice(1))).not.toBeNull();
    }
  });

  it("CTA TESTAR GRÁTIS (desktop + mobile header) abre deep-link wa.me em nova aba", () => {
    renderWithProviders(<Groom />);

    const ctas = screen.getAllByTestId("groom-nav-trial-cta");
    expect(ctas.length).toBe(2);
    for (const cta of ctas) {
      expect(cta).toHaveTextContent("TESTAR GRÁTIS");
      expect(cta.getAttribute("href")).toMatch(
        new RegExp(`^https:\\/\\/wa\\.me\\/${WHATSAPP_NUMBER}\\?text=`)
      );
      expect(cta).toHaveAttribute(
        "href",
        buildWhatsAppUrl(WHATSAPP_GROOM_TRIAL_MESSAGE)
      );
      expect(cta).toHaveAttribute("target", "_blank");
      expect(cta.getAttribute("rel")).toContain("noopener");
      expect(cta.getAttribute("rel")).toContain("noreferrer");
    }
  });
});

describe("Groom — Hero: rede de módulos (RN-033-2 / RN-034 — frame #194:580)", () => {
  it("exibe eyebrow novo (âmbar), H1 único sem span, description e microcopy sem ⚡", () => {
    renderWithProviders(<Groom />);

    expect(screen.getByTestId("groom-hero-eyebrow").textContent).toBe(
      "SUA AGENDA ORGANIZADA. SEU NEGÓCIO NO CONTROLE."
    );

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.textContent).toBe(
      "Enquanto você organiza agenda no papel, seu concorrente está faturando com o Groom."
    );
    expect(h1.querySelectorAll("span")).toHaveLength(0);

    expect(
      screen.getByText(
        /O Groom é o sistema mais completo de agendamento e gestão/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Sem cartão de crédito. Sem compromisso. Configuração em 5 minutos."
      )
    ).toBeInTheDocument();

    const hero = screen.getByTestId("groom-hero");
    expect(within(hero).queryByText(/⚡/)).not.toBeInTheDocument();
  });

  it("CTA do Hero aponta para o deep-link wa.me com mensagem pré-preenchida em nova aba", () => {
    renderWithProviders(<Groom />);

    const cta = screen.getByTestId("groom-hero-cta");
    expect(cta).toHaveTextContent("QUERO TESTAR GRÁTIS POR 15 DIAS");
    expect(cta.getAttribute("href")).toMatch(
      new RegExp(`^https:\\/\\/wa\\.me\\/${WHATSAPP_NUMBER}\\?text=`)
    );
    expect(cta).toHaveAttribute(
      "href",
      buildWhatsAppUrl(WHATSAPP_GROOM_TRIAL_MESSAGE)
    );
    expect(cta).toHaveAttribute("target", "_blank");
    expect(cta.getAttribute("rel")).toContain("noopener");
    expect(cta.getAttribute("rel")).toContain("noreferrer");
  });

  it("rede de módulos: 3 módulos com tags e descrições (WhatsApp IN destaque âmbar · Agenda SYNC · Gestão OUT), fluxo entre eles e nenhuma imagem raster", () => {
    renderWithProviders(<Groom />);

    const eco = screen.getByTestId("groom-ecosystem");
    expect(eco.querySelectorAll("img")).toHaveLength(0);

    const whatsapp = screen.getByTestId("eco-node-whatsapp");
    expect(whatsapp).toHaveTextContent("WhatsApp");
    expect(whatsapp).toHaveTextContent("IN");
    expect(whatsapp).toHaveTextContent("Confirma e lembra o cliente");
    // WhatsApp é o módulo destacado (fundo âmbar); os demais são escuros
    expect(whatsapp.className).toContain("bg-[#f1c75c]");

    const agenda = screen.getByTestId("eco-node-agenda");
    expect(agenda).toHaveTextContent("Agenda");
    expect(agenda).toHaveTextContent("SYNC");
    expect(agenda).toHaveTextContent("Reserva o horário escolhido");
    expect(agenda.className).toContain("bg-[#171c22]");
    expect(agenda.className).not.toContain("bg-[#f1c75c]");

    const gestao = screen.getByTestId("eco-node-gestao");
    expect(gestao).toHaveTextContent("Gestão");
    expect(gestao).toHaveTextContent("OUT");
    expect(gestao).toHaveTextContent("Reúne serviços e faturamento");
    expect(gestao.className).toContain("bg-[#171c22]");

    // Fluxo âmbar entre os módulos (2 conectores entre 3 cartões)
    expect(screen.getByTestId("eco-flow-1")).toBeInTheDocument();
    expect(screen.getByTestId("eco-flow-2")).toBeInTheDocument();

    const hero = document.querySelector('[data-name="section-hero"]');
    // A marca agora usa o Logo <img> do padrão CR-010 — excluí-la do scan de raster do hero.
    const heroRaster = Array.from(hero?.querySelectorAll("img") ?? []).filter(
      (img) => !img.closest("[data-testid='groom-brand']")
    );
    expect(heroRaster).toHaveLength(0);
  });

  it("imports do mockup PNG do dashboard não existem mais no código (0 assets raster)", () => {
    const source = readFileSync(groomTsxPath, "utf-8");
    expect(source).not.toContain("GroomLandingPage-3");
    expect(source).not.toContain("imgDashboardPreview");
    expect(source).not.toContain("imgIconContainer");
    expect(source).not.toContain("20860e87f1caa68bf54946def42a084f479fa552");
  });
});

describe("Groom — Strip de segmentos (RN-033-3)", () => {
  it("faixa com os 4 segmentos na copy literal, sem raster e entre Hero e Problemas", () => {
    renderWithProviders(<Groom />);

    const strip = screen.getByTestId("groom-segment-strip");
    expect(strip).toHaveTextContent("Barbearias");
    expect(strip).toHaveTextContent("Salões de beleza");
    expect(strip).toHaveTextContent("Estúdios de tatuagem");
    expect(strip).toHaveTextContent("Clínicas de estética");
    expect(strip.querySelectorAll("img")).toHaveLength(0);
    // Sem links/CTAs na strip (faixa informativa).
    expect(within(strip).queryAllByRole("link")).toHaveLength(0);

    // Ordem do frame: strip dentro do bloco Hero, antes de "Problemas e soluções".
    const hero = document.querySelector('[data-name="section-hero"]');
    expect(strip.closest('[data-name="section-hero"]')).not.toBeNull();
    const painTitle = screen.getByText(
      "Cliente marcou e simplesmente não apareceu?"
    );
    expect(painTitle.closest('[data-name="section-hero"]')).toBeNull();
    expect(
      strip.compareDocumentPosition(painTitle) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
    expect(hero).not.toBeNull();
  });
});

describe("Groom — regressão mínima (RN-033-4)", () => {
  it("menu mobile fora do padrão das landings (PEND-012): sem hamburger e sem drawer — CTA TESTAR GRÁTIS segue visível no mobile", () => {
    renderWithProviders(<Groom />);

    // Navbar alinhada ao ProductNavbar (RN-026): sem menu mobile
    expect(screen.queryByRole("button", { name: "Abrir menu" })).not.toBeInTheDocument();
    expect(screen.queryByTestId("groom-drawer")).not.toBeInTheDocument();

    // CTA do header: desktop + mobile (2 instâncias, mesmo destino wa.me)
    const ctas = screen.getAllByTestId("groom-nav-trial-cta");
    expect(ctas).toHaveLength(2);
    for (const cta of ctas) {
      expect(cta.getAttribute("href")).toMatch(
        new RegExp(`^https:\\/\\/wa\\.me\\/${WHATSAPP_NUMBER}\\?text=`)
      );
    }
  });

  it("flutuantes não regrediram: WhatsApp pill e voltar-ao-topo presentes", () => {
    renderWithProviders(<Groom />);

    expect(
      screen.getByRole("button", { name: /Fale conosco e teste grátis/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Voltar ao topo" })
    ).toBeInTheDocument();
  });

  it("pricing RN-014 segue íntegro (preços/limites exatos e CTAs por plano)", () => {
    renderWithProviders(<Groom />);

    expect(screen.getByText("R$ 29,90")).toBeInTheDocument();
    expect(screen.getByText("R$ 49,90")).toBeInTheDocument();
    expect(screen.getByText("R$ 89,90")).toBeInTheDocument();
    expect(screen.getAllByText("nos 3 primeiros meses")).toHaveLength(2);
    expect(
      screen.getByText("Inclui até 3 profissionais e 500 clientes.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Inclui até 5 profissionais e 1.000 clientes.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Inclui até 15 profissionais e 5.000 clientes.")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: "COMEÇAR 15 DIAS GRÁTIS",
      }).getAttribute("href")
    ).toMatch(new RegExp(`^https:\\/\\/wa\\.me\\/${WHATSAPP_NUMBER}`));
  });

  it("seções de trás continuam renderizando (FAQ, convite e rodapé)", () => {
    renderWithProviders(<Groom />);

    // Título FAQ lowercase — delta de copy aprovado (dossier g2 §9 / RN-014-3).
    expect(screen.getByText("Perguntas frequentes")).toBeInTheDocument();
    expect(
      screen.getByText("Pronto para profissionalizar seu negócio?")
    ).toBeInTheDocument();
    // Identificação empresarial removida (14/10) — © unificada permanece (PEND-013)
    expect(screen.queryByText(/CNPJ: 69\.184\.592/)).not.toBeInTheDocument();
  });
});
