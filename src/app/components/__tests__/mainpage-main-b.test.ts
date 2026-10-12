import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { translations } from "../../i18n/translations";

// RN-021: as seções legadas SocialProof/Features/HowItWorks saem da MainPage
// e entram as seções B — Como funciona → Pilares de entrega → Prova social —
// após o Catálogo (ordem do design B). RN-024: o fechamento passa a ser
// Company and trust (RN-024-2) + Rodapé B (RN-024-3), sem FinalCTA/Footer.
// Verificação por fonte: MainPage não é montada nos testes (IntersectionObserver).

const here = dirname(fileURLToPath(import.meta.url));
const mainPagePath = resolve(here, "..", "..", "pages", "MainPage.tsx");
const source = readFileSync(mainPagePath, "utf-8");

describe("MainPage — composição Main B (RN-021)", () => {
  it("não importa nem renderiza as seções legadas SocialProof/Features/HowItWorks", () => {
    expect(source).not.toMatch(/from ["'].*components\/(SocialProof|Features|HowItWorks)["']/);
    // Boundary após o nome: <SocialProofSection/<HowItWorksB são válidos
    expect(source).not.toMatch(/<(SocialProof|Features|HowItWorks)[\s/>]/);
  });

  it("renderiza as três seções B (Como funciona, Pilares, Prova social)", () => {
    expect(source).toContain("../components/HowItWorksB");
    expect(source).toContain("<HowItWorksB");
    expect(source).toContain("../components/PillarsSection");
    expect(source).toContain("<PillarsSection");
    expect(source).toContain("../components/SocialProofSection");
    expect(source).toContain("<SocialProofSection");
  });

  it("ordem do design B: Catálogo → Como funciona → Pilares → Prova social → Company and trust → Rodapé B", () => {
    const positions = [
      source.indexOf("<CatalogSection"),
      source.indexOf("<HowItWorksB"),
      source.indexOf("<PillarsSection"),
      source.indexOf("<SocialProofSection"),
      source.indexOf("<CompanyTrustSection"),
      source.indexOf("<FooterB"),
    ];
    expect(positions.every((p) => p >= 0)).toBe(true);
    expect([...positions].sort((a, b) => a - b)).toEqual(positions);
  });

  it("estrutura B completa: NavbarB → HeroB → Problema → Catálogo → Como funciona → Pilares → Prova social → Company and trust → Rodapé B (RN-024)", () => {
    const positions = [
      source.indexOf("<NavbarB"),
      source.indexOf("<HeroB"),
      source.indexOf("<ProblemSection"),
      source.indexOf("<CatalogSection"),
      source.indexOf("<HowItWorksB"),
      source.indexOf("<PillarsSection"),
      source.indexOf("<SocialProofSection"),
      source.indexOf("<CompanyTrustSection"),
      source.indexOf("<FooterB"),
    ];
    expect(positions.every((p) => p >= 0)).toBe(true);
    expect([...positions].sort((a, b) => a - b)).toEqual(positions);
  });
});

describe("Dicionário i18n — chaves e copy canônica do frame (RN-021/RN-004)", () => {
  const languages = ["pt", "en", "es"] as const;

  it("as três seções novas existem nos 3 idiomas com estrutura completa", () => {
    for (const lang of languages) {
      const t = translations[lang];
      expect(t.howItWorksB.steps).toHaveLength(3);
      expect(t.howItWorksB.stepChips).toHaveLength(3);
      expect(t.howItWorksB.stepChecklist).toHaveLength(3);
      expect(t.howItWorksB.stepPanelRows.length).toBeGreaterThan(0);
      expect(t.howItWorksB.note).toBeTruthy();
      expect(t.pillarsB.items).toHaveLength(3);
      expect(t.socialProofB.cards).toHaveLength(2);
      expect(t.socialProofB.note).toBeTruthy();
    }
  });

  it("correção cruzada (F2): gancho do catálogo usa a copy do frame #111:12609 nos 3 idiomas", () => {
    expect(translations.pt.catalogB.hook).toBe(
      "Produto ou sob medida: veja como saímos da escolha para a operação."
    );
    expect(translations.en.catalogB.hook).toBe(
      "Product or custom-built: see how we go from choosing to operating."
    );
    expect(translations.es.catalogB.hook).toBe(
      "Producto o a medida: vea cómo pasamos de la elección a la operación."
    );
  });

  it("política RN-023: placeholders canônicos em PT e nenhum dígito nos placeholders", () => {
    for (const card of translations.pt.socialProofB.cards) {
      expect(card.testimonial).toBe("[Depoimento aprovado a inserir]");
      expect(card.result).toBe("[Resultado e contexto a validar]");
      expect(card.logo).toBe("[Logo]");
      expect(card.name).toBe("[Nome]");
      expect(card.roleCompany).toBe("[Cargo] · [Empresa]");
      expect(card.testimonial).not.toMatch(/\d/);
      expect(card.result).not.toMatch(/\d/);
    }
  });
});
