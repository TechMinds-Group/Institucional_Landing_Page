import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// RN-019-4 (CR-005/ADR-013): o grid `Products` legado sai da MainPage.
// RN-024-4: ProductModal/productDetails saem — o Footer legado era o último
// consumidor do modal e também foi removido (CR-005).

const here = dirname(fileURLToPath(import.meta.url));
const componentsDir = resolve(here, "..");
const mainPagePath = resolve(componentsDir, "..", "pages", "MainPage.tsx");
const productsPath = resolve(componentsDir, "Products.tsx");
const productModalPath = resolve(componentsDir, "ProductModal.tsx");
const footerPath = resolve(componentsDir, "Footer.tsx");
const finalCtaPath = resolve(componentsDir, "FinalCTA.tsx");

describe("Remoção do grid Products legado (RN-019-4)", () => {
  it("arquivo Products.tsx não existe mais", () => {
    expect(existsSync(productsPath)).toBe(false);
  });

  it("MainPage não importa nem renderiza o grid Products", () => {
    const source = readFileSync(mainPagePath, "utf-8");

    expect(source).not.toMatch(/from ["'].*components\/Products["']/);
    expect(source).not.toContain("<Products");
  });

  it("MainPage renderiza a CatalogSection do design B", () => {
    const source = readFileSync(mainPagePath, "utf-8");

    expect(source).toContain("../components/CatalogSection");
    expect(source).toContain("<CatalogSection");
  });
});

describe("Remoção do legado de contato (RN-024-4 — CR-005/ADR-013)", () => {
  it("ProductModal.tsx, Footer.tsx e FinalCTA.tsx não existem mais", () => {
    expect(existsSync(productModalPath)).toBe(false);
    expect(existsSync(footerPath)).toBe(false);
    expect(existsSync(finalCtaPath)).toBe(false);
  });

  it("MainPage não importa nem renderiza FinalCTA, Footer, ProductModal nem detalhe de produto embutido", () => {
    const source = readFileSync(mainPagePath, "utf-8");

    expect(source).not.toMatch(/from ["'].*components\/(FinalCTA|Footer|ProductModal)["']/);
    // Boundary após o nome: <FooterB é válido (Rodapé B — RN-024-3)
    expect(source).not.toMatch(/<(FinalCTA|Footer|ProductModal)[\s/>]/);
    expect(source).not.toContain("productDetails");
    expect(source).not.toContain("onProductClick");
  });
});
