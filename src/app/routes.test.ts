import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { router } from "./routes";

// Tipos mínimos de rotas do react-router (introspecção do data router).
type RouteEntry = {
  path?: string;
  children?: RouteEntry[];
  Component?: unknown;
};

const EXPECTED_PATHS = [
  "/",
  "/terms-of-use",
  "/terms-of-use/:product",
  "/privacy",
  "/privacy/:product",
  "/groom",
  "/vibecut",
  "/lumen",
  // /fasto oculto permanentemente até reativação (CR-012)
];

describe("routes (CR-009 — layout com ScrollRestoration)", () => {
  const root = router.routes[0] as unknown as RouteEntry;
  const children = root.children ?? [];
  const paths = children.map((c) => c.path);

  it("envolve todas as rotas em um layout único (root com children)", () => {
    expect(!root.path).toBe(true);
    expect(children).toHaveLength(EXPECTED_PATHS.length);
    expect(paths).toEqual(EXPECTED_PATHS);
  });

  it("renderiza ScrollRestoration na raiz (reset no PUSH, restauração no POP)", () => {
    const source = readFileSync(
      path.resolve(__dirname, "routes.tsx"),
      "utf-8",
    );
    expect(source).toContain("ScrollRestoration");
    expect(source).toContain("function RootLayout");
  });

  it("rota /fasto oculta — não pode existir no arquivo real (CR-012)", () => {
    const source = readFileSync(path.resolve(__dirname, "routes.tsx"), "utf-8");
    expect(source).not.toMatch(/path: "\/fasto"/);
  });

  it("redirecionamentos legais preservados (from /terms-of-use e /privacy)", () => {
    const terso = children.find((c) => c.path === "/terms-of-use");
    const privacidade = children.find((c) => c.path === "/privacy");
    expect(terso?.children).toBeUndefined();
    expect(privacidade?.children).toBeUndefined();
  });
});
