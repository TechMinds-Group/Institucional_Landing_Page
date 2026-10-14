import { describe, it, expect, beforeAll } from "vitest";
import { screen, within } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Groom } from "../Groom";
import { renderWithProviders } from "../../../test/test-utils";

// Fonte da página — regressão byte a byte dos títulos intocados (RN-036-4).
const groomTsxPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "Groom.tsx"
);

// jsdom não implementa IntersectionObserver — stub igual ao Groom.test.tsx
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

// Groom é PT-only (RN-018) — copy NOVA inline PT; strings literais do dossier
// g2-groom.md §4–§6 (fonte única, sem parafrasear).
const painCards = [
  [
    "Cliente marcou e simplesmente não apareceu?",
    "Lembretes automáticos pelo WhatsApp ajudam a reduzir as faltas.",
  ],
  [
    "Anotou no papel e perdeu o agendamento?",
    "Sua agenda digital fica organizada e segura na nuvem.",
  ],
  [
    "Planos de assinatura e serviços avulsos",
    "Perfil, validade e serviços separados para simplificar a gestão.",
  ],
  [
    "Seu barbeiro chegou e não sabia a agenda do dia?",
    "Cada profissional acompanha a agenda em tempo real pelo celular.",
  ],
  [
    "Terça-feira vazia e você nem percebeu o padrão?",
    "Identifique horários vazios e encontre oportunidades para promoções.",
  ],
  [
    "Cliente sumiu e você nem notou?",
    "Acompanhe a frequência dos clientes e lembre os aniversários.",
  ],
] as const;

const steps = [
  [
    "01",
    "Cliente agenda em segundos",
    "Pelo seu link exclusivo ou WhatsApp, o cliente escolhe profissional, serviço e horário.",
  ],
  [
    "02",
    "WhatsApp notifica",
    "O profissional confirma ou recusa o agendamento e o cliente é notificado.",
  ],
  [
    "03",
    "Lembretes automáticos",
    "Mensagens em horários estratégicos, sem trabalho manual. Tudo automático.",
  ],
  [
    "04",
    "Você domina o painel",
    "Faturamento, ocupação, planos, equipe e análises em um só lugar.",
  ],
] as const;

const featureCards = [
  ["WhatsApp Integrado", "Agendamentos e confirmações no seu WhatsApp."],
  ["Agendamento Online 24h", "Seu link de agendamento sempre disponível."],
  ["Dashboard Inteligente", "Uma visão clara da operação do negócio."],
  ["Clube de Assinaturas (MRR)", "Planos recorrentes para fidelizar clientes."],
  ["Relatórios e Simulador", "Dados para apoiar suas decisões."],
  ["Gestão de Equipe", "Profissionais, comissões e agenda conectados."],
  ["Catálogo de Serviços", "Seus serviços organizados em um catálogo."],
  ["Migração de Dados", "Traga seus dados do sistema anterior."],
  ["Suporte Ultra Rápido", "Atendimento direto com a nossa equipe."],
  ["Feriados e Bloqueios", "Controle a disponibilidade da agenda."],
  ["Tema Claro/Escuro", "Escolha o visual que funciona para você."],
  ["Multi-idioma nativo", "Idiomas disponíveis dentro do software."],
] as const;

const CALLOUT_TITLE =
  "Enquanto outros sistemas resolvem um pedaço do problema, o Groom entrega a solução completa.";
const CALLOUT_DESC =
  "Agendamento, WhatsApp, assinaturas, dados e gestão — tudo no mesmo lugar.";

describe("Groom — Problemas e soluções (RN-036-1: copy enxuta)", () => {
  it("6 cards mantêm o título e exibem exatamente a descrição enxuta (copy literal — dossier §4)", () => {
    renderWithProviders(<Groom />);
    for (const [title, desc] of painCards) {
      const card = screen
        .getByText(title)
        .closest('[class*="rounded-[12px]"]');
      expect(card).not.toBeNull();
      const cardEl = card as HTMLElement;
      expect(within(cardEl).getByText(title)).toBeInTheDocument();
      // Asserção de igualdade exata (não contains): o <p> da descrição tem o string exato.
      expect(within(cardEl).getByText(desc)).toBeInTheDocument();
    }
  });

  it("label e título de seção preservados (regressão) e storytelling removido (ausências literal)", () => {
    renderWithProviders(<Groom />);

    expect(screen.getByText("CONTROLE TOTAL")).toBeInTheDocument();
    expect(
      screen.getByText("Você reconhece esses problemas na sua gestão?")
    ).toBeInTheDocument();

    const bodyText = document.body.textContent ?? "";
    expect(bodyText).not.toContain("drasticamente");
    expect(bodyText).not.toContain("promoções relâmpago");
    expect(bodyText).not.toContain("promoções automáticas em aniversários");
    expect(bodyText).not.toContain("Você tem dias e horários mortos");
    expect(bodyText).not.toContain("Ele vinha todo mês");
  });
});

describe("Groom — Como o Groom Funciona (RN-036-2: copy enxuta)", () => {
  it("4 steps mantêm número e título e exibem exatamente a descrição enxuta (copy literal — dossier §5)", () => {
    renderWithProviders(<Groom />);
    for (const [num, title, desc] of steps) {
      const card = screen.getByText(num).closest('[class*="rounded-[12px]"]');
      expect(card).not.toBeNull();
      const cardEl = card as HTMLElement;
      expect(within(cardEl).getByText(title)).toBeInTheDocument();
      expect(within(cardEl).getByText(desc)).toBeInTheDocument();
    }
  });

  it('label e título preservados; "80%", promessa e "análise preditiva/simulações" removidos (RN-023)', () => {
    renderWithProviders(<Groom />);

    expect(screen.getByText("SIMPLICIDADE MÁXIMA")).toBeInTheDocument();
    expect(screen.getByText("Como o Groom Funciona")).toBeInTheDocument();

    const bodyText = document.body.textContent ?? "";
    expect(bodyText).not.toContain("80%");
    expect(bodyText).not.toContain("análise preditiva");
    expect(bodyText).not.toContain("simulações");
    expect(bodyText).not.toContain("cancelamentos de última hora");
    expect(bodyText).not.toContain("link do estabelecimento granular");
  });
});

describe("Groom — Funcionalidades (RN-036-3: copy enxuta)", () => {
  it("12 cards mantêm o título e exibem exatamente a descrição curta (copy literal — dossier §6)", () => {
    renderWithProviders(<Groom />);
    for (const [title, desc] of featureCards) {
      const card = screen
        .getByText(title)
        .closest('[class*="rounded-[12px]"]');
      expect(card).not.toBeNull();
      const cardEl = card as HTMLElement;
      expect(within(cardEl).getByText(title)).toBeInTheDocument();
      expect(within(cardEl).getByText(desc)).toBeInTheDocument();
    }
  });

  it("callout escuro dividido em título e descrição como elementos separados com a copy exata", () => {
    renderWithProviders(<Groom />);

    const title = screen.getByText(CALLOUT_TITLE);
    const desc = screen.getByText(CALLOUT_DESC);

    // Elementos distintos: nenhum elemento carrega os 2 textos juntos
    // (o <p> único pré-RN-036 teria ambos). Match exato já descarta isso;
    // reforçamos a separação: título sem a descrição dentro dele.
    expect(title).not.toBe(desc);
    expect(title.textContent).not.toContain("tudo no mesmo lugar");
    expect(desc.textContent).not.toContain("pedaço do problema");
    // Ambos no mesmo card escuro do callout.
    expect(title.closest('[class*="bg-[#161b22]"]')).not.toBeNull();
    expect(
      title.closest('[class*="bg-[#161b22]"]')?.contains(desc)
    ).toBe(true);
  });

  it('label RECURSOS COMPLETOS preservado e título da seção com ponto final ("...plataforma." — delta dossier §6)', () => {
    renderWithProviders(<Groom />);

    expect(screen.getByText("RECURSOS COMPLETOS")).toBeInTheDocument();
    // String com ponto final — a versão sem ponto não fecha o match exato.
    expect(
      screen.getByText("Tudo que você precisa em uma única plataforma.")
    ).toBeInTheDocument();
  });

  it("copy detalhada antiga removida (Migração/Suporte/Feriados)", () => {
    renderWithProviders(<Groom />);

    const bodyText = document.body.textContent ?? "";
    expect(bodyText).not.toContain("negociamos a melhor solução");
    expect(bodyText).not.toContain("respondem em poucos minutos");
    expect(bodyText).not.toContain("Importe todos os feriados do ano");
  });
});

describe("Groom — linha 🔒-criptografia (divergência do split — AC RN-036-4)", () => {
  // Feature irmã RN-014 (Diferenciais/Planos) aplicou a remoção do bloco
  // [Groom.tsx:621 pré-RN-014] nesta branch — it.todo transformado em
  // asserção ativa; sem skip/todo restante no lote.
  it("frase '100% protegidos com criptografia de ponta a ponta.' ausente da página (removida pelo lote RN-014)", () => {
    renderWithProviders(<Groom />);

    const bodyText = document.body.textContent ?? "";
    expect(bodyText).not.toContain("criptografia de ponta a ponta");
    expect(bodyText).not.toContain("100% protegidos");
    expect(bodyText).not.toContain("Sem taxa de configuração");
  });
});

describe("Groom — regressão (RN-036-4): preços RN-014 e demais seções intactos", () => {
  it("pricing mantém preços, riscados e limites exatos — nada muda nesta feature", () => {
    renderWithProviders(<Groom />);

    expect(screen.getByText("R$ 29,90")).toBeInTheDocument();
    expect(screen.getByText("R$ 49,90")).toBeInTheDocument();
    expect(screen.getByText("R$ 89,90")).toBeInTheDocument();
    expect(screen.getByText("De R$ 49,90")).toBeInTheDocument();
    expect(screen.getByText("De R$ 89,90")).toBeInTheDocument();
    expect(screen.getByText("De R$ 149,90")).toBeInTheDocument();
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
  });

  it("seções fora do escopo não regrediram (hero, strip, FAQ, convite, rodapé) e RN-014 nos diferenciais", () => {
    renderWithProviders(<Groom />);

    // Hero (RN-033-2) e strip (RN-033-3) intocados.
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "Enquanto você organiza agenda no papel, seu concorrente está faturando com o Groom."
    );
    const strip = screen.getByTestId("groom-segment-strip");
    expect(strip).toHaveTextContent("Barbearias");
    expect(strip).toHaveTextContent("Salões de beleza");
    expect(strip).toHaveTextContent("Estúdios de tatuagem");
    expect(strip).toHaveTextContent("Clínicas de estética");
    // Diferenciais no estado RN-014 (feature irmã integrada): benefícios
    // curtos substituem as perguntas retóricas, VibeCut com gating "Em breve".
    expect(screen.getByText("Essenciais sem surpresa")).toBeInTheDocument();
    // Trás da página íntegro.
    expect(screen.getByText("Perguntas frequentes")).toBeInTheDocument();
    expect(
      screen.getByText("Pronto para profissionalizar seu negócio?")
    ).toBeInTheDocument();
    // Identificação empresarial removida (14/10) — © unificada permanece (PEND-013)
    expect(screen.queryByText(/CNPJ: 69\.184\.592/)).not.toBeInTheDocument();
  });
});

describe("Groom — títulos byte a byte no fonte (regressão de conteúdo RN-036)", () => {
  it("títulos dos 6 cards, 4 steps e 12 features preservados literalmente no código", () => {
    const source = readFileSync(groomTsxPath, "utf-8");
    for (const [title] of painCards) {
      expect(source).toContain(`>${title}</p>`);
    }
    for (const [, title] of steps) {
      expect(source).toContain(`title: "${title}"`);
    }
    for (const [title] of featureCards) {
      expect(source).toContain(`title: "${title}"`);
    }
  });
});
