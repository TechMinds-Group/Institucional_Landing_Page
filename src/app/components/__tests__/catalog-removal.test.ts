import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// RN-019-4 (CR-005/ADR-013): o grid `Products` legado sai da MainPage e o
// arquivo é removido. ProductModal e productDetails permanecem APENAS porque
// o Footer legado ainda dispara o modal — remoção final no escopo da RN-024.

const here = dirname(fileURLToPath(import.meta.url));
const componentsDir = resolve(here, "..");
const mainPagePath = resolve(componentsDir, "..", "pages", "MainPage.tsx");
const productsPath = resolve(componentsDir, "Products.tsx");

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

  it("estado legado documentado: ProductModal/productDetails permanecem até RN-024 (Footer)", () => {
    const source = readFileSync(mainPagePath, "utf-8");

    // O Footer legado recebe onProductClick → modal; remoção é da RN-024
    expect(source).toContain("onProductClick={handleProductClick}");
    expect(source).toContain("<ProductModal");
  });
});
