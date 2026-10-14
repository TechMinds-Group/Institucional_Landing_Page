import { describe, it, expect, beforeAll } from "vitest";
import { screen, within, fireEvent } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Groom } from "../Groom";
import { renderWithProviders } from "../../../test/test-utils";
import {
  buildWhatsAppUrl,
  WHATSAPP_NUMBER,
  WHATSAPP_GROOM_TRIAL_MESSAGE,
  WHATSAPP_GROOM_PLAN_ESSENCIAL_MESSAGE,
  WHATSAPP_GROOM_PLAN_PROFISSIONAL_MESSAGE,
} from "../../constants/contacts";

// Fonte da página — asserções estruturais (remoção Crown/paleta indigo, RN-014-2).
const groomTsxPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "Groom.tsx"
);

// jsdom não implementa IntersectionObserver — stub igual aos specs irmãos
// (flutuante voltar-ao-topo da /groom, RN-009).
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

// Copy EXATA do dossier g2 §7 (fonte única, sem parafrasear)
const benefits = [
  ["Essenciais sem surpresa", "Recursos essenciais sem cobranças surpresa."],
  [
    "Seu robô no WhatsApp 24h",
    "Atende, agenda e confirma enquanto você cuida do negócio.",
  ],
  [
    "Recupere clientes inativos",
    "Acompanhe a frequência e identifique quem deixou de voltar.",
  ],
  [
    "VibeCut: visagismo com IA",
    "Integração futura no plano Elite. Em breve, sugestões visuais de cortes para seus clientes.",
  ],
  [
    "Receita mais previsível",
    "Clube de assinaturas para fidelizar clientes e organizar a receita recorrente.",
  ],
  [
    "Migração sem complicação",
    "Do Tua Agenda, automática. De outros sistemas, assistida pela nossa equipe.",
  ],
] as const;

// Q&A EXATAS do dossier g2 §9 (copy 100% idêntica ao código pré-RN-014)
const faqs = [
  [
    "Preciso de cartão de crédito para testar?",
    "Não. Oferecemos 15 dias totalmente grátis para você testar sem precisar cadastrar cartão ou qualquer compromisso financeiro inicial.",
  ],
  [
    "E se eu já uso outro sistema de agendamento?",
    "Vem do Tua Agenda? Importação automática em poucos cliques. Usa outro sistema? Fala com a gente que nosso time analisa e cuida de toda a migração dos seus dados pra você.",
  ],
  [
    "O Groom funciona para qualquer tipo de estabelecimento?",
    "Sim! O Groom foi feito para barbearias, salões de beleza, estúdios de tatuagem, clínicas de estética e qualquer negócio que trabalhe com agendamento de serviços e gestão de equipe.",
  ],
  [
    "Precisa instalar algum aplicativo?",
    "Nenhuma instalação é necessária. Tudo roda na nuvem direto do navegador e integrado ao seu WhatsApp corporativo. Configuração completa em apenas 5 minutos.",
  ],
  [
    "Tem suporte para me ajudar?",
    "Claro! Nosso time atende diretamente via WhatsApp de verdade. Sem respostas automáticas padrão, atendimento feito por pessoas prontas para te ajudar.",
  ],
  [
    "Posso cancelar quando quiser?",
    "Sim. Sem contratos ou multas. Você pode exportar seus dados a qualquer momento e solicitar o cancelamento da sua assinatura com 1 clique.",
  ],
] as const;

describe("Groom — Diferenciais (RN-014-1/RN-036, dossier g2 §7)", () => {
  it("label e título preservados e os 6 benefícios curtos com copy EXATA", () => {
    renderWithProviders(<Groom />);

    expect(screen.getByText("POR QUE O GROOM É DIFERENTE?")).toBeInTheDocument();
    expect(
      screen.getByText(
        "O que o Groom faz pelo seu negócio que nenhum outro sistema faz"
      )
    ).toBeInTheDocument();

    const cards = screen.getAllByTestId("groom-benefit-card");
    expect(cards).toHaveLength(6);
    for (const [title, desc] of benefits) {
      const card = cards.find((c) => c.textContent.includes(title));
      expect(card).toBeDefined();
      const cardEl = card as HTMLElement;
      expect(within(cardEl).getByText(title)).toBeInTheDocument();
      expect(within(cardEl).getByText(desc)).toBeInTheDocument();
    }
  });

  it("VibeCut com gating RN-023: copy 'Integração futura…' sem link/data; 'IA exclusiva' removida", () => {
    renderWithProviders(<Groom />);

    const vibecut = screen.getByText("VibeCut: visagismo com IA").closest(
      '[data-testid="groom-benefit-card"]'
    ) as HTMLElement;
    expect(
      within(vibecut).getByText(
        "Integração futura no plano Elite. Em breve, sugestões visuais de cortes para seus clientes."
      )
    ).toBeInTheDocument();
    // Card estático — sem link e sem CTA (nenhuma promessa de disponibilidade).
    expect(within(vibecut).queryAllByRole("link")).toHaveLength(0);
    expect(within(vibecut).queryAllByRole("button")).toHaveLength(0);

    // Promo antiga explicitamente removida (dossier §7: VibeCut rebaixado).
    const bodyText = document.body.textContent ?? "";
    expect(bodyText).not.toContain("IA exclusiva do Groom");
  });

  it("subtitle antiga e perguntas retóricas removidas (RN-036), ícones 44×44 vetoriais", () => {
    renderWithProviders(<Groom />);

    const bodyText = document.body.textContent ?? "";
    expect(bodyText).not.toContain(
      "Tecnologia de verdade para quem quer crescer"
    );
    expect(bodyText).not.toContain(
      "Seu sistema cobra extra por qualquer recurso básico?"
    );
    expect(bodyText).not.toContain(
      "Ainda perde tempo respondendo mensagem por mensagem no WhatsApp?"
    );
    expect(bodyText).not.toContain(
      "Já imaginou oferecer consultoria de visagismo por IA no seu atendimento?"
    );

    // Ícones 44×44 (dossier g2 §7) — sem_assets raster na seção.
    const section = document.getElementById("diferenciais");
    expect(section?.querySelectorAll("img")).toHaveLength(0);
    for (const iconBox of document.querySelectorAll(
      '[data-testid="groom-benefit-card"] > div > div'
    )) {
      expect(iconBox.className).toContain("size-[44px]");
    }
  });

  it("âncora #diferenciais preservada (navbar/rodapé rolam até ela)", () => {
    renderWithProviders(<Groom />);
    expect(document.getElementById("diferenciais")).not.toBeNull();
  });
});

describe("Groom — Planos (RN-014-2: RN-014 exata + RN-015 Elite, dossier g2 §8)", () => {
  it('label "PLANOS PARA O SEU MOMENTO" e título/descrição idênticos ao código', () => {
    renderWithProviders(<Groom />);

    expect(screen.getByText("PLANOS PARA O SEU MOMENTO")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Escolha o plano ideal para automatizar seu atendimento e aumentar seu faturamento."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Teste por 15 dias sem pagar nada. Cancele quando quiser, sem taxas e sem fidelidade."
      )
    ).toBeInTheDocument();
  });

  it("preços e limites EXATOS byte a byte (nenhuma alteração comercial RN-014)", () => {
    renderWithProviders(<Groom />);

    // Preços com riscados
    expect(screen.getByText("De R$ 49,90")).toBeInTheDocument();
    expect(screen.getByText("R$ 29,90")).toBeInTheDocument();
    expect(screen.getByText("De R$ 89,90")).toBeInTheDocument();
    expect(screen.getByText("R$ 49,90")).toBeInTheDocument();
    expect(screen.getByText("De R$ 149,90")).toBeInTheDocument();
    expect(screen.getByText("R$ 89,90")).toBeInTheDocument();
    expect(screen.getAllByText("/mês")).toHaveLength(3);
    expect(screen.getAllByText("nos 3 primeiros meses")).toHaveLength(2);

    // Positioning e nomes UPPERCASE
    expect(screen.getByText("ESSENCIAL")).toBeInTheDocument();
    expect(screen.getByText("PROFISSIONAL")).toBeInTheDocument();
    expect(screen.getByText("ELITE")).toBeInTheDocument();
    expect(screen.getByText("OPERACIONAL BÁSICO")).toBeInTheDocument();
    expect(screen.getByText("CAMPEÃO DE VENDAS")).toBeInTheDocument();
    expect(screen.getByText("MAIS COMPLETO — IA INTEGRADA")).toBeInTheDocument();

    // Limites EXATOS, cada um dentro do seu card
    const essencial = screen.getByTestId("groom-plan-essencial");
    expect(
      within(essencial).getByText("Inclui até 3 profissionais e 500 clientes.")
    ).toBeInTheDocument();
    const profissional = screen.getByTestId("groom-plan-profissional");
    expect(
      within(profissional).getByText(
        "Inclui até 5 profissionais e 1.000 clientes."
      )
    ).toBeInTheDocument();
    const elite = screen.getByTestId("groom-plan-elite");
    expect(
      within(elite).getByText("Inclui até 15 profissionais e 5.000 clientes.")
    ).toBeInTheDocument();

    // Nota do Elite EXATA (condição comercial)
    expect(
      within(elite).getByText(
        "Por menos de R$ 3 por dia, tenha IA trabalhando pelo seu negócio!"
      )
    ).toBeInTheDocument();

    // Features por plano: 3 · 4 · 4 (com as primeiras gradacionais)
    expect(
      within(profissional).getByText("Tudo do Plano Essencial +")
    ).toBeInTheDocument();
    expect(within(elite).getByText("Tudo do Plano Profissional +")).toBeInTheDocument();
  });

  it("limites destacados fw600 ANTES do divisor, com CTA depois (delta dossier §8)", () => {
    renderWithProviders(<Groom />);

    for (const planId of ["groom-plan-essencial", "groom-plan-profissional", "groom-plan-elite"]) {
      const card = screen.getByTestId(planId);
      const limits = within(card).getByText(/Inclui até \d+ profissionais/);
      // fw600 = font-semibold (destaque aprovado)
      expect(limits.className).toContain("font-semibold");
      // Divisor presente no card
      const divisor = card.querySelector('div[aria-hidden][class*="border-t"]');
      expect(divisor).not.toBeNull();
      // Ordem: limites → divisor → CTA
      expect(
        limits.compareDocumentPosition(divisor as Node) &
          Node.DOCUMENT_POSITION_FOLLOWING
      ).toBeTruthy();
    }

    // CTA Essencial/Profissional após o divisor (follows limits + divisor)
    const essencial = screen.getByTestId("groom-plan-essencial");
    const essLimits = within(essencial).getByText(
      "Inclui até 3 profissionais e 500 clientes."
    );
    const essCta = within(essencial).getByRole("link", {
      name: "COMEÇAR 15 DIAS GRÁTIS",
    });
    expect(
      essLimits.compareDocumentPosition(essCta) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });

  it("CTAs Essencial/Profissional abrem WhatsApp deep-link por plano em nova aba", () => {
    renderWithProviders(<Groom />);

    const essCta = screen.getByRole("link", { name: "COMEÇAR 15 DIAS GRÁTIS" });
    expect(essCta).toHaveAttribute(
      "href",
      buildWhatsAppUrl(WHATSAPP_GROOM_PLAN_ESSENCIAL_MESSAGE)
    );
    expect(essCta).toHaveAttribute("target", "_blank");

    const proCta = screen.getByRole("link", {
      name: "QUERO O PLANO PROFISSIONAL GRÁTIS",
    });
    expect(proCta).toHaveAttribute(
      "href",
      buildWhatsAppUrl(WHATSAPP_GROOM_PLAN_PROFISSIONAL_MESSAGE)
    );
    expect(proCta).toHaveAttribute("target", "_blank");
    expect(
      essCta.getAttribute("href")?.startsWith(`https://wa.me/${WHATSAPP_NUMBER}`)
    ).toBe(true);
  });

  it("Elite: CTA 'DISPONÍVEL EM BREVE' desabilitado e badge 'Em breve' junto ao título (RN-015/CR-007)", () => {
    renderWithProviders(<Groom />);

    const elite = screen.getByTestId("groom-plan-elite");
    const cta = within(elite).getByRole("button", {
      name: "DISPONÍVEL EM BREVE",
    });
    expect(cta).toBeDisabled();
    expect(cta.tagName).toBe("BUTTON");
    // Sem href/handler ativo — nenhum <a> no bloco do CTA
    expect(cta.closest("a")).toBeNull();

    const badge = within(elite).getByText("Em breve");
    expect(badge).toHaveAttribute("data-testid", "groom-elite-badge");
    // Badge junto ao título ELITE (mesmo container flex)
    expect(
      screen.getByText("ELITE").closest("div")?.contains(badge)
    ).toBe(true);
  });

  it("linha 🔒-criptografia, ícone Crown e paleta indigo removidos (dossier §8/RN-036)", () => {
    renderWithProviders(<Groom />);

    const bodyText = document.body.textContent ?? "";
    expect(bodyText).not.toContain("criptografia de ponta a ponta");
    expect(bodyText).not.toContain("100% protegidos");

    const source = readFileSync(groomTsxPath, "utf-8");
    expect(source).not.toContain("Crown");
    // Paleta indigo removida — tokens neutros no Elite
    expect(source).not.toContain("818cf8");
    expect(source).not.toContain("4f46e5");
    expect(source).not.toContain("f0f4ff");
  });

  it("âncora #precos preservada", () => {
    renderWithProviders(<Groom />);
    expect(document.getElementById("precos")).not.toBeNull();
  });
});

describe("Groom — FAQ accordion (RN-014-3/RN-035, dossier g2 §9)", () => {
  it("título lowercase + 6 Q&A copy EXATA como triggers acessíveis", () => {
    renderWithProviders(<Groom />);

    // Label "FAQ" escopo na seção (nav/rodapé têm o mesmo texto como link)
    const faqSection = document.getElementById("faq");
    expect(within(faqSection as HTMLElement).getByText("FAQ")).toBeInTheDocument();
    // Lowercase — delta de copy aprovado (código: "Perguntas Frequentes")
    expect(screen.getByText("Perguntas frequentes")).toBeInTheDocument();

    for (const [question] of faqs) {
      const trigger = screen.getByRole("button", { name: question });
      expect(trigger).toHaveAttribute("aria-controls");
      expect(trigger.getAttribute("aria-controls")).toMatch(
        /^groom-faq-panel-\d$/
      );
    }
  });

  it("estado inicial: exatamente 1 pergunta aberta (padrão do design)", () => {
    renderWithProviders(<Groom />);

    for (let i = 0; i < faqs.length; i++) {
      const trigger = screen.getByTestId(`groom-faq-trigger-${i}`);
      const panel = screen.getByTestId(`groom-faq-panel-${i}`);
      if (i === 0) {
        expect(trigger).toHaveAttribute("aria-expanded", "true");
        expect(panel.hasAttribute("hidden")).toBe(false);
        expect(
          within(panel).getByText(faqs[0][1])
        ).toBeInTheDocument();
      } else {
        expect(trigger).toHaveAttribute("aria-expanded", "false");
        expect(panel.hasAttribute("hidden")).toBe(true);
      }
    }
  });

  it("uma pergunta aberta por vez: abrir outra recolhe a anterior e reclicar fecha", () => {
    renderWithProviders(<Groom />);

    // Abre a 3ª → a 1ª recolhe, a 3ª mostra a resposta
    fireEvent.click(screen.getByTestId("groom-faq-trigger-2"));
    expect(screen.getByTestId("groom-faq-trigger-0")).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    expect(screen.getByTestId("groom-faq-panel-0")).toHaveAttribute("hidden");
    expect(screen.getByTestId("groom-faq-trigger-2")).toHaveAttribute(
      "aria-expanded",
      "true"
    );
    const panel2 = screen.getByTestId("groom-faq-panel-2");
    expect(panel2.hasAttribute("hidden")).toBe(false);
    expect(within(panel2).getByText(faqs[2][1])).toBeInTheDocument();

    const openCount = faqs.filter(
      (_, i) =>
        screen
          .getByTestId(`groom-faq-trigger-${i}`)
          .getAttribute("aria-expanded") === "true"
    ).length;
    expect(openCount).toBe(1);

    // Reclicar na aberta a fecha (toggle)
    fireEvent.click(screen.getByTestId("groom-faq-trigger-2"));

    for (let i = 0; i < faqs.length; i++) {
      expect(screen.getByTestId(`groom-faq-trigger-${i}`)).toHaveAttribute(
        "aria-expanded",
        "false"
      );
      expect(screen.getByTestId(`groom-faq-panel-${i}`)).toHaveAttribute(
        "hidden"
      );
    }
  });

  it("painel acessível: role region com aria-labelledby do trigger; só o painel aberto entra na árvore de acessibilidade", () => {
    renderWithProviders(<Groom />);

    // Todos os painéis marcam role="region" (verificação por atributo — os
    // fechados ficam ocultos e fora da árvore de acessibilidade)
    for (let i = 0; i < faqs.length; i++) {
      const panel = screen.getByTestId(`groom-faq-panel-${i}`);
      expect(panel.getAttribute("role")).toBe("region");
      expect(panel.getAttribute("aria-labelledby")).toBe(
        `groom-faq-button-${i}`
      );
    }

    // Estado inicial: apenas o painel aberto (i=0) é exposto como region
    expect(screen.getAllByRole("region")).toHaveLength(1);

    // Abre a 2ª e confere que a resposta só existe aberta no painel dela
    fireEvent.click(screen.getByTestId("groom-faq-trigger-1"));
    const panel1 = screen.getByTestId("groom-faq-panel-1");
    expect(within(panel1).getByText(faqs[1][1])).toBeInTheDocument();
    // Painel 1 aberto não expõe a resposta de outra pergunta
    expect(
      within(panel1).queryByText(faqs[5][1])
    ).not.toBeInTheDocument();
  });

  it("âncora #faq preservada (navegação nativa de button para teclado/Space está garantida)", () => {
    renderWithProviders(<Groom />);
    expect(document.getElementById("faq")).not.toBeNull();
  });
});

describe("Groom — Convite e Rodapé (RN-014-4: RN-014+RN-024, dossier g2 §10–§11)", () => {
  it("convite com copy EXATA (idêntica ao código), sem ⚡, CTA WhatsApp em nova aba", () => {
    renderWithProviders(<Groom />);

    expect(screen.getByText("APROVEITE A OPORTUNIDADE")).toBeInTheDocument();
    expect(
      screen.getByText("Pronto para profissionalizar seu negócio?")
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/⚡/)
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(
        "Sem cartão de crédito. Configuração em 5 minutos. Cancele quando quiser."
      )
    ).toBeInTheDocument();

    const cta = screen.getByRole("link", { name: "COMEÇAR GRÁTIS POR 15 DIAS" });
    expect(cta).toHaveAttribute(
      "href",
      buildWhatsAppUrl(WHATSAPP_GROOM_TRIAL_MESSAGE)
    );
    expect(cta).toHaveAttribute("target", "_blank");
  });

  it("rodapé: nav com 5 âncoras do Groom — 'Preços' renomeado apontando #precos", () => {
    renderWithProviders(<Groom />);

    const nav = screen.getByTestId("groom-footer-nav");
    const anchors: Array<[string, string]> = [
      ["Como Funciona", "#como-funciona"],
      ["Funcionalidades", "#funcionalidades"],
      ["Diferenciais", "#diferenciais"],
      ["Preços", "#precos"],
      ["FAQ", "#faq"],
    ];
    for (const [label, href] of anchors) {
      const link = within(nav).getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", href);
      // Âncora de destino existe na página (rolagem suave nativa)
      expect(document.getElementById(href.slice(1))).not.toBeNull();
    }
  });

  it("rodapé: portal real mantido + identificação empresarial EXATA (ADR-005)", () => {
    renderWithProviders(<Groom />);

    const portal = screen.getByRole("link", {
      name: "portal.techminds.net.br",
    });
    expect(portal).toHaveAttribute("href", "https://portal.techminds.net.br");

    expect(
      screen.getByText(
        "Nome Empresarial: 69.184.592 MICHEL LEMOS BITTENCOURT"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("CNPJ: 69.184.592/0001-45 | Guaíba - RS")
    ).toBeInTheDocument();
  });

  it("© unificada em linha única '© 2026 Groom' (frame — PEND-013 em aberto: ajustável na decisão), dupla © TechMinds removida", () => {
    renderWithProviders(<Groom />);

    // PEND-013: frame do design mostra "© 2026 Groom"; se o operador fechar
    // diferente ("© TechMinds"), este teste é o ponto único de ajuste.
    expect(
      screen.getAllByText("© 2026 Groom — Todos os direitos reservados.")
    ).toHaveLength(1);
    const bodyText = document.body.textContent ?? "";
    expect(bodyText).not.toContain("© 2026 TechMinds");
  });

  it("voltar-ao-topo (RN-009) e sentinela mantidos no Groom (regressão de movimento)", () => {
    renderWithProviders(<Groom />);

    expect(
      screen.getByRole("button", { name: "Voltar ao topo" })
    ).toBeInTheDocument();
    expect(
      document.getElementById("groom-scroll-sentinel")
    ).not.toBeNull();
    // Flutuante WhatsApp ícone/pill existente preservado (escopo irmão RN-033)
    expect(
      screen.getByRole("button", { name: /Fale conosco e teste grátis/ })
    ).toBeInTheDocument();
  });
});
