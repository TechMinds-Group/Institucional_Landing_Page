import { getCatalogProducts, type CatalogProductId } from "../constants/catalog";
import type { LegalProductMeta } from "../i18n/legalContent";
import type { Translations } from "../i18n/translations";

// ─── Tabs das páginas legais (RN-007 — nota CR-001 de 11/10/2026) ────────────
// Fonte única do catálogo: src/app/constants/catalog.ts (canônico CR-001,
// ordem Groom, FasTo, Lumen, VibeCut, Escola Conectada). A ordem das tabs
// acompanha a estrutura do catálogo — sem array duplicado por página
// (duplicação local causou o desalinhamento — dossier g3-legais §3).

/**
 * Disponibilidade legal ≠ status comercial do catálogo (ADR-014):
 * FasTo é "Ativo" no canônico porém sem documento legal publicado —
 * aparece "Em breve" nas tabs. Ativos = documento publicado (vibecut,
 * lumen); desabilitados = "Em breve", sem navegação.
 */
const LEGAL_DOCUMENT_PUBLISHED: ReadonlySet<CatalogProductId> = new Set([
  "vibecut",
  "lumen",
]);

/** Produto legal padrão — fallback RN-007 para parâmetro inválido/desabilitado. */
export const DEFAULT_LEGAL_PRODUCT: CatalogProductId = "vibecut";

export interface LegalProductTab {
  /** Slug da rota `/:legal/:product` — id do canônico CR-001. */
  id: CatalogProductId;
  /** Nome de exibição (marca — não traduz; vem do catálogo). */
  name: string;
  /** Tag de segmento (legalProductMeta). */
  tag: string;
  /** Vigência do documento ou "Em breve" (t.legal.comingSoon). */
  lastUpdated: string;
  /** Sem documento publicado → atenuada com "Em breve", sem navegação. */
  disabled: boolean;
}

/**
 * Tabs de produto das páginas legais na ordem do canônico CR-001:
 * 5 posições (groom, fasto, lumen, vibecut, escola-conectada),
 * ZoneMap fora do canônico.
 */
export function getLegalProductTabs(
  catalog: Translations["catalogB"],
  meta: LegalProductMeta,
  comingSoon: string
): LegalProductTab[] {
  const metaById: Record<
    CatalogProductId,
    { tag: string; lastUpdated: string }
  > = {
    vibecut: { tag: meta.vibecutTag, lastUpdated: meta.vibecutLastUpdated },
    lumen: { tag: meta.lumenTag, lastUpdated: meta.lumenLastUpdated },
    fasto: { tag: meta.fastoTag, lastUpdated: meta.fastoLastUpdated },
    groom: { tag: meta.groomTag, lastUpdated: comingSoon },
    "escola-conectada": {
      tag: meta.escolaConectadaTag,
      lastUpdated: comingSoon,
    },
  };

  return getCatalogProducts(catalog).map(({ id, nome }) => ({
    id,
    name: nome,
    tag: metaById[id].tag,
    lastUpdated: metaById[id].lastUpdated,
    disabled: !LEGAL_DOCUMENT_PUBLISHED.has(id),
  }));
}
