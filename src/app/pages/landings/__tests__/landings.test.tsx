import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { I18nProvider } from "../../../i18n/I18nContext";
import { MainPage } from "../../MainPage";
import { VibeCutPage } from "../VibeCutPage";
import { LumenPage } from "../LumenPage";
import { FasToPage } from "../FasToPage";
import { resetI18n } from "../../../../test/test-utils";
import { LANDING_SECTION_IDS } from "../../../constants/anchors";
import { EMAILS_BY_AREA } from "../../../constants/contacts";

// ── Testes das landings de produto (RN-025-5) ──────────────────────
// Cobertura: rotas registradas sem 404, navbar de produto, gates de
// CTA, i18n 3 idiomas, status de estágio, disclaimers-chave e copy
// 1:1 (RN-031). Padrão do exemplar mainpage-main-b.test.ts: a árvore
// completa não é navegada por data-router em jsdom (Request/AbortSignal
// cross-realm); as páginas são montadas via rotas declarativas espelho
// + asserção estrutural do routes.ts (fonte única real).

const here = dirname(fileURLToPath(import.meta.url));
const routesSource = readFileSync(resolve(here, "..", "..", "..", "routes.ts"), "utf-8");

const ROUTE_STUBS = (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/vibecut" element={<VibeCutPage />} />
    <Route path="/lumen" element={<LumenPage />} />
    <Route path="/fasto" element={<FasToPage />} />
  </Routes>
);

function renderAt(path: string): Promise<void> {
  return new Promise((resolveRender) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <I18nProvider>{ROUTE_STUBS}</I18nProvider>
      </MemoryRouter>
    );
    resolveRender();
  });
}

async function waitForNavbar() {
  await waitFor(() => {
    expect(screen.getByTestId("landing-navbar")).toBeInTheDocument();
  });
}

describe("routes.ts — registro das landings (RN-025/CR-006)", () => {
  it("declara as 3 rotas novas apontando para as páginas de landing", () => {
    for (const [path, component] of [
      ["/vibecut", "VibeCutPage"],
      ["/lumen", "LumenPage"],
      ["/fasto", "FasToPage"],
    ] as const) {
      const entry = routesSource.match(
        new RegExp(`path: "${path}",\\s*Component: ${component}`)
      );
      expect(entry, `rota ${path} → ${component}`).not.toBeNull();
    }
    // Padrão do /groom — createBrowserRouter, sem guards
    expect(routesSource).toContain("createBrowserRouter");
  });
});

describe("Landings — esqueleto e navbar de produto (RN-025/RN-026)", () => {
  beforeEach(() => resetI18n());

  it.each([
    ["/vibecut", "VibeCut"],
    ["/lumen", "Lumen"],
    ["/fasto", "FasTo"],
  ])("%s renderiza o esqueleto (navbar de produto + main + rodapé de produto)", async (path, expected) => {
    await renderAt(path);
    await waitForNavbar();
    expect(screen.getByTestId("landing-main")).toBeInTheDocument();
    expect(screen.getByTestId("landing-footer")).toBeInTheDocument();
    expect(screen.getByTestId("landing-product-name")).toHaveTextContent(expected);
    // Sem pills PT/EN/ES nem links globais — navbar de produto
    expect(screen.queryByTestId("navb-language-pills")).toBeNull();
  });

  it("clicar na marca TechMinds navega para a Main (RN-026)", async () => {
    await renderAt("/vibecut");
    await waitForNavbar();
    fireEvent.click(screen.getByTestId("landing-brand"));
    await waitFor(() => {
      // A rota "/" mounta a Main (NavbarB com pills de idioma)
      expect(screen.getByTestId("navb-language-pills")).toBeInTheDocument();
    });
  });

  it("navbar do VibeCut exibe 4 âncoras próprias e CTA 'Sobre os testes'", async () => {
    await renderAt("/vibecut");
    await waitForNavbar();
    const links = within(screen.getByTestId("landing-nav-links")).getAllByRole("link");
    expect(links).toHaveLength(4);
    expect(screen.getByTestId("vibecut-nav-cta")).toBeInTheDocument();
  });
});

describe("Status por estágio em cada hero (RN-027/CR-006)", () => {
  beforeEach(() => resetI18n());

  it("VibeCut: 'Android em testes internos · v1.0.6' + sem promessa de disponibilidade", async () => {
    await renderAt("/vibecut");
    const status = screen.getByTestId("vibecut-status");
    expect(status).toHaveTextContent("Android em testes internos · v1.0.6");
    expect(status).toHaveTextContent("Ainda não publicado em lojas.");
    // §07 — três estados, sem promessa de data
    const card = screen.getByTestId("vibecut-availability-card");
    expect(card).toHaveTextContent("Ainda não publicado");
    expect(card).toHaveTextContent("Não disponível");
    expect(card).toHaveTextContent("Sem data anunciada");
  });

  it("Lumen: 'Painel educacional em operação' (coerente com canônico Ativo)", async () => {
    await renderAt("/lumen");
    expect(screen.getByTestId("lumen-status")).toHaveTextContent("Painel educacional em operação");
  });

  it("FasTo: chip coerente com o canônico 'Ativo' (CR-006/ADR-014)", async () => {
    await renderAt("/fasto");
    expect(screen.getByTestId("fasto-status-chip")).toHaveTextContent("Ativo");
  });
});

describe("Gates de CTA nas landings (RN-032/PEND-011)", () => {
  beforeEach(() => resetI18n());

  it("Lumen: os 3 CTAs 'Explorar o Lumen' estão desabilitados com microcopy", async () => {
    await renderAt("/lumen");
    for (const testId of [
      "lumen-nav-cta-button",
      "lumen-hero-cta-explore-button",
      "lumen-invite-cta-explore-button",
    ]) {
      expect(screen.getByTestId(testId)).toBeDisabled();
    }
    expect(screen.getByTestId("lumen-hero-cta-explore-microcopy")).toBeInTheDocument();
  });

  it("Lumen: 'Explore o catálogo completo' desabilitado com microcopy (PEND-011)", async () => {
    await renderAt("/lumen");
    expect(screen.getByTestId("lumen-cta-catalog-button")).toBeDisabled();
    expect(screen.getByTestId("lumen-cta-catalog-microcopy")).toBeInTheDocument();
  });

  it("FasTo: 'Solicitar apresentação' abre mailto comercial; nenhum wa.me", async () => {
    await renderAt("/fasto");
    expect(screen.getByTestId("fasto-hero-cta-button")).toHaveAttribute(
      "href",
      `mailto:${EMAILS_BY_AREA.business}`
    );
    expect(screen.getByTestId("fasto-invite-cta-button")).toHaveAttribute(
      "href",
      `mailto:${EMAILS_BY_AREA.business}`
    );
    const html = document.body.innerHTML.toLowerCase();
    expect(html.includes("wa.me")).toBe(false);
  });

  it("FasTo: navbar CTA 'Conhecer o FasTo' leva à âncora Como funciona (decisão RN-032)", async () => {
    await renderAt("/fasto");
    expect(screen.getByTestId("fasto-nav-cta")).toHaveAttribute(
      "href",
      `#${LANDING_SECTION_IDS.fasto.comoFunciona}`
    );
  });

  it("VibeCut: 'Ler documento' aponta para as páginas legais internas (RN-007)", async () => {
    await renderAt("/vibecut");
    expect(screen.getByTestId("vibecut-ler-terms")).toHaveAttribute("href", "/terms-of-use/vibecut");
    expect(screen.getByTestId("vibecut-ler-privacy")).toHaveAttribute("href", "/privacy/vibecut");
  });
});

describe("i18n 3 idiomas nas landings (RN-004)", () => {
  beforeEach(() => resetI18n());

  it("EN: hero e status do VibeCut vêm do namespace vibecut", async () => {
    localStorage.setItem("techminds-language", "en");
    await renderAt("/vibecut");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Your next look starts with you."
    );
    expect(screen.getByTestId("vibecut-status")).toHaveTextContent(
      "Android in internal testing · v1.0.6"
    );
  });

  it("ES: stats e disclaimers do Lumen vêm do namespace lumen", async () => {
    localStorage.setItem("techminds-language", "es");
    await renderAt("/lumen");
    const stats = screen.getByTestId("lumen-stats");
    expect(stats).toHaveTextContent("Pensadores");
    expect(stats).toHaveTextContent("Dimensiones del catálogo, no números de usuarios.");
  });

  it("ES: FAQ do FasTo traduzida (sem preços aprovados para divulgação)", async () => {
    localStorage.setItem("techminds-language", "es");
    await renderAt("/fasto");
    // Item 6 (preços) abre no accordion antes da asserção
    fireEvent.click(screen.getAllByTestId("fasto-faq-toggle")[5]);
    expect(screen.getByTestId("fasto-faq-answer")).toHaveTextContent(
      "No hay planes comerciales, precios ni período gratuito aprobados para divulgación."
    );
  });
});

describe("VibeCut — sem upload, sem consentimento, dados fictícios marcados (RN-028)", () => {
  beforeEach(() => resetI18n());

  it("não existe nenhum input/envio no DOM da landing", async () => {
    await renderAt("/vibecut");
    expect(document.querySelectorAll("input")).toHaveLength(0);
  });

  it("disclaimers obrigatórios presentes (leitura fictícia + landing não coleta)", async () => {
    await renderAt("/vibecut");
    expect(screen.getByTestId("vibecut-reading-disclaimer")).toHaveTextContent(
      "Dados fictícios para demonstrar a interface."
    );
    expect(screen.getByTestId("vibecut-landing-note")).toHaveTextContent(
      "Esta landing não recebe fotos nem registra consentimento."
    );
    expect(screen.getByTestId("vibecut-gemini-note")).toHaveTextContent("Google Gemini");
  });
});

describe("Lumen — dimensões do acervo e mocks marcados (RN-029)", () => {
  beforeEach(() => resetI18n());

  it("stats 55/7/158/9 com o disclaimer obrigatório de números", async () => {
    await renderAt("/lumen");
    const stats = screen.getByTestId("lumen-stats");
    for (const value of ["55", "7", "158", "9"]) {
      expect(stats).toHaveTextContent(value);
    }
    expect(screen.getByTestId("lumen-stats-disclaimer")).toHaveTextContent(
      "Dimensões do catálogo, não números de usuários."
    );
  });

  it("mock de busca reproduz os estados ilustrativos marcados", async () => {
    await renderAt("/lumen");
    expect(screen.getByTestId("lumen-search-mock")).toBeInTheDocument();
    expect(screen.getByTestId("lumen-mock-query")).toHaveTextContent("republica");
    expect(screen.getByTestId("lumen-mock-status")).toHaveTextContent("Lida · clique para desmarcar");
    expect(screen.getByTestId("lumen-mock-record")).toHaveTextContent("Registro de exemplo");
    expect(screen.getByTestId("lumen-mock-download")).toHaveTextContent("Download: Indisponível");
  });

  it("radar/eixos ilustrativos com disclaimer de não-teste psicológico", async () => {
    await renderAt("/lumen");
    expect(screen.getByTestId("lumen-radar")).toBeInTheDocument();
    expect(screen.getByTestId("lumen-perfil-disclaimer")).toHaveTextContent(
      "Não é teste psicológico nem definição de identidade política."
    );
  });

  it("exportação em Excel: 3 escopos + explicação de abas", async () => {
    await renderAt("/lumen");
    expect(screen.getByTestId("lumen-excel-scopes").textContent).toContain("Acervo completo");
    expect(screen.getByTestId("lumen-excel-mock")).toHaveTextContent("158 obras no acervo completo");
    expect(screen.getByTestId("lumen-excel-mock")).toHaveTextContent("três abas, percentuais e total geral");
  });
});

describe("FasTo — recursos, clube, WhatsApp, assinaturas (RN-030)", () => {
  beforeEach(() => resetI18n());

  it("recursos incluem acessos por papel (admin vê todos, profissional os próprios)", async () => {
    await renderAt("/fasto");
    const recursos = screen.getByTestId("fasto-recursos");
    expect(recursos).toHaveTextContent("Acessos da equipe");
    expect(recursos).toHaveTextContent("O administrador acompanha todos os agendamentos.");
  });

  it("clube de assinaturas tem a distinção de relações", async () => {
    await renderAt("/fasto");
    expect(screen.getByTestId("fasto-clube-disclaimer")).toHaveTextContent(
      "O clube é vendido pelo seu estabelecimento aos clientes finais."
    );
    expect(screen.getByTestId("fasto-assinaturas-distinction")).toHaveTextContent(
      "São relações diferentes: o clube não substitui a assinatura SaaS."
    );
  });

  it("WhatsApp: gatilhos 2h (botões) / 4h (cancelamento) + Evolution API", async () => {
    await renderAt("/fasto");
    expect(screen.getByTestId("fasto-whatsapp-triggers")).toHaveTextContent(
      "Após duas horas pendente, o lembrete traz botões Confirmar/Cancelar."
    );
    expect(screen.getByTestId("fasto-provider-note")).toHaveTextContent("Evolution API");
  });

  it("FAQ responde preços: 'Não há planos comerciais, preços ou período gratuito aprovados para divulgação'", async () => {
    await renderAt("/fasto");
    fireEvent.click(screen.getAllByTestId("fasto-faq-toggle")[5]);
    expect(screen.getByTestId("fasto-faq-answer")).toHaveTextContent(
      "Não há planos comerciais, preços ou período gratuito aprovados para divulgação"
    );
  });
});

describe("Responsividade — copy 1:1 e seções-chave (RN-031)", () => {
  beforeEach(() => resetI18n());

  it("VibeCut: seções ancoradas presentes (mesma copy em 390/1440)", async () => {
    await renderAt("/vibecut");
    for (const sectionId of Object.values(LANDING_SECTION_IDS.vibecut)) {
      expect(document.getElementById(sectionId)).not.toBeNull();
    }
    // Grades 3 colunas → 1 coluna (classes responsivas do mesmo DOM)
    const html = document.body.innerHTML;
    expect(html).toContain("md:grid-cols-3");
  });

  it("Lumen: seções ancoradas presentes (mesma copy em 390/1440)", async () => {
    await renderAt("/lumen");
    for (const sectionId of Object.values(LANDING_SECTION_IDS.lumen)) {
      expect(document.getElementById(sectionId)).not.toBeNull();
    }
    expect(screen.getByTestId("lumen-pensadores").children.length).toBe(3);
  });

  it("FasTo: seções ancoradas presentes (mesma copy em 390/1440)", async () => {
    await renderAt("/fasto");
    for (const sectionId of Object.values(LANDING_SECTION_IDS.fasto)) {
      expect(document.getElementById(sectionId)).not.toBeNull();
    }
    expect(screen.getByTestId("fasto-agenda-card")).toBeInTheDocument();
    expect(screen.getByTestId("fasto-segments").children.length).toBe(4);
  });
});
