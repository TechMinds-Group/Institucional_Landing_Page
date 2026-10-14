import { describe, it, expect } from "vitest";
import { translations } from "../../i18n/translations";
import {
  getCatalogProducts,
  type CatalogProduct,
} from "../catalog";

// Canônico do catálogo (CR-001 — REQUIREMENTS §6 / ADR-012):
// 5 produtos; Groom, FasTo e Lumen Ativos; VibeCut e Escola Conectada
// Em desenvolvimento. Gate de CTA por landing própria (CR-004): só Groom.

const pt = getCatalogProducts(translations.pt.catalogB);

function byId(products: CatalogProduct[], id: string) {
  const product = products.find((p) => p.id === id);
  expect(product, `produto ${id} deve existir no catálogo`).toBeDefined();
  return product as CatalogProduct;
}

describe("Modelo de conteúdo do catálogo B (RN-019-1 — CR-001)", () => {
  it("contém exatamente 5 produtos na ordem do carrossel", () => {
    expect(pt.map((p) => p.id)).toEqual([
      "groom",
      "fasto",
      "lumen",
      "vibecut",
      "escola-conectada",
    ]);
  });

  it("status refletem o canônico CR-001 (VibeCut rebaixado — ADR-012)", () => {
    expect(byId(pt, "groom").status).toBe("ativo");
    expect(byId(pt, "fasto").status).toBe("ativo");
    expect(byId(pt, "lumen").status).toBe("ativo");
    expect(byId(pt, "vibecut").status).toBe("em-desenvolvimento");
    expect(byId(pt, "escola-conectada").status).toBe("em-desenvolvimento");
  });

  it("gate de CTA: landings próprias habilitadas; FasTo oculto (CR-012) e Escola aguardam landing", () => {
    const expected: Record<string, string | null> = {
      groom: "/groom",
      fasto: null,
      lumen: "/lumen",
      vibecut: "/vibecut",
      "escola-conectada": null,
    };
    for (const product of pt) {
      const href = expected[product.id];
      if (href) {
        expect(product.cta.enabled, product.id).toBe(true);
        expect(product.cta.href, product.id).toBe(href);
      } else {
        expect(product.cta.enabled, product.id).toBe(false);
        expect(product.cta.href, product.id).toBeNull();
      }
    }
  });

  it("produtos não expõem campo mockup (removido na revisão 11/10/2026)", () => {
    for (const product of pt) {
      expect("mockup" in product, product.id).toBe(false);
    }
  });

  it("conteúdo de cada produto é resolvido nos 3 idiomas (RN-004)", () => {
    for (const language of ["pt", "en", "es"] as const) {
      const products = getCatalogProducts(translations[language].catalogB);
      expect(products).toHaveLength(5);
      for (const product of products) {
        expect(product.segmento.trim(), `${language}/${product.id}`).toBeTruthy();
        expect(product.headline.trim(), `${language}/${product.id}`).toBeTruthy();
        expect(
          product.beneficios.length,
          `${language}/${product.id}`
        ).toBeGreaterThan(0);
        for (const beneficio of product.beneficios) {
          expect(beneficio.trim(), `${language}/${product.id}`).toBeTruthy();
        }
      }
    }
  });

  it("conteúdo PT do Groom casa com o frame (segmento/headline/benefícios)", () => {
    const groom = byId(pt, "groom");
    expect(groom.segmento).toBe("Para barbearias");
    expect(groom.headline).toBe("Sua agenda e suas contas na mesma direção.");
    expect(groom.beneficios).toEqual([
      "Agendamento via WhatsApp",
      "Controle financeiro e fila de espera",
      "Relatórios para acompanhar a operação",
    ]);
  });
});
