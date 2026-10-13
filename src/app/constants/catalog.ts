import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  GraduationCap,
  Orbit,
  ScanFace,
  Scissors,
} from "lucide-react";
import type { Translations } from "../i18n/translations";

// ── Modelo de conteúdo do catálogo B (RN-019-1) ────────────────────
// Fonte única dos 5 produtos do canônico CR-001 (ADR-012): Groom, FasTo
// e Lumen Ativos; VibeCut e Escola Conectada Em desenvolvimento.
// A estrutura (status/ícone/CTA gate) mora aqui; os textos por
// idioma (segmento/headline/benefícios) moram em translations.ts
// (catalogB.products) — i18n RN-004 preservada.

export type CatalogProductId = keyof Translations["catalogB"]["products"];

export type CatalogCtaLabelKey = keyof Translations["catalogB"]["ctaLabels"];

/** Status canônico do CR-001 — alimenta os badges da RN-005/CR-002. */
export type CatalogProductStatus = "ativo" | "em-desenvolvimento";

/** Produto resolvido em um idioma — contrato da Análise Técnica RN-019. */
export interface CatalogProduct {
  id: CatalogProductId;
  /** Nome de exibição (marca — não traduz). */
  nome: string;
  status: CatalogProductStatus;
  icon: LucideIcon;
  segmento: string;
  headline: string;
  beneficios: string[];
  /** Gate de CTA por landing própria (CR-004/CR-008 — rotas do CR-006). Escola Conectada aguarda landing. */
  cta: {
    labelKey: CatalogCtaLabelKey;
    href: CatalogCtaHref;
    enabled: boolean;
  };
}

interface CatalogProductStatic {
  id: CatalogProductId;
  nome: string;
  status: CatalogProductStatus;
  icon: LucideIcon;
  cta: CatalogProduct["cta"];
}

/**
 * Gate de CTA por landing própria. Rotas ativas (CR-006): /groom,
 * /vibecut e /lumen — **FasTo oculto (CR-012)**: rota removida e CTA
 * desabilitado até a reativação. Escola Conectada aguarda landing
 * (RN-032/CR-008).
 */
export type CatalogCtaHref =
  | "/groom"
  | "/vibecut"
  | "/lumen"
  | null;

const CATALOG_STRUCTURE: CatalogProductStatic[] = [
  {
    id: "groom",
    nome: "Groom",
    status: "ativo",
    icon: Scissors,
    cta: { labelKey: "conhecer-groom", href: "/groom", enabled: true },
  },
  {
    id: "fasto",
    nome: "FasTo",
    status: "ativo",
    icon: CalendarDays,
    cta: { labelKey: "conhecer-fasto", href: null, enabled: false },
  },
  {
    id: "lumen",
    nome: "Lumen",
    status: "ativo",
    icon: Orbit,
    cta: { labelKey: "conhecer-lumen", href: "/lumen", enabled: true },
  },
  {
    id: "vibecut",
    nome: "VibeCut",
    status: "em-desenvolvimento",
    icon: ScanFace,
    cta: { labelKey: "conhecer-vibecut", href: "/vibecut", enabled: true },
  },
  {
    id: "escola-conectada",
    nome: "Escola Conectada",
    status: "em-desenvolvimento",
    icon: GraduationCap,
    cta: { labelKey: "conhecer-escola-conectada", href: null, enabled: false },
  },
];

/**
 * Catálogo do design B na ordem do carrossel, com os textos do idioma
 * ativo resolvidos (translations.catalogB). A ordem da estrutura é
 * canônica: os textos são casados por id.
 */
export function getCatalogProducts(
  catalog: Translations["catalogB"]
): CatalogProduct[] {
  return CATALOG_STRUCTURE.map((staticProduct) => ({
    ...staticProduct,
    ...catalog.products[staticProduct.id],
  }));
}
