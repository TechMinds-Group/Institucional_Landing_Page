// ── Contratos das landings de produto (RN-025) ─────────────────────
// Layout comum com tema/props por produto (RNs RN-025/RN-026/RN-032).
// Os textos vêm dos namespaces `vibecut`/`lumen`/`fasto` de
// translations.ts; aqui ficam apenas a estrutura e as classes
// Tailwind (strings literais — Tailwind JIT escaneia o fonte).

import type { ComponentType } from "react";

/** Idade/estado de um CTA de landing (RN-032 — gate de CTAs). */
export type LandingCtaKind = "anchor" | "route" | "mailto" | "external" | "disabled";

export interface LandingCtaConfig {
  label: string;
  kind: LandingCtaKind;
  /** Destino obey obrigatório quando kind != "disabled" (RN-032). */
  target?: string;
  /** Motivo da desabilitação — exigido quando kind === "disabled". */
  reason?: string;
}

export interface LandingTheme {
  /** Cor de fundo da página (classe completa, ex.: "bg-[#0B1020]"). */
  pageBg: string;
  /** Fonte dos títulos do produto ("font-serif" no Lumen, "" nos demais). */
  titleFont: string;
  navbarBg: string;
  brandText: string;
  productChip: string;
  navLink: string;
  navLinkHover: string;
  navDivider: string;
  /** Botão sólido de destaque (navbar e CTAs de página quando não passado). */
  accentBg: string;
  accentText: string;
  footerBg: string;
  footerTitle: string;
  footerMuted: string;
  footerHover: string;
  footerDivider: string;
  footerIdentityStrong: string;
}

export interface LandingNavConfig {
  /** 4 links âncora do produto (RN-026) — labels já traduzidos. */
  links: { label: string; sectionId: string }[];
  cta: LandingCtaConfig;
}

export interface LandingFooterLink {
  label: string;
  kind: "anchor" | "route" | "mailto" | "text";
  target?: string;
}

export interface LandingFooterConfig {
  /** Linha editorial do produto sob a marca. */
  statement: string;
  /** Selo do produto ("Um produto TechMinds" etc.). */
  tagline: string;
  /** Statement corporativo opcional (FasTo — jornada da TechMinds). */
  companyStatement?: string;
  /**
   * Marca de produto opcional (Lumen): quando presente, substitui o
   * Logo TechMinds genérico por emblema circular + wordmark do produto.
   * VibeCut/FasTo sem a prop mantêm o visual atual (mudança aditiva).
   */
  productName?: string;
  /** Ícone do emblema do produto (ex.: Sun do Lumen) — exige productName. */
  productIcon?: ComponentType<{ size?: number | string; className?: string }>;
  columns: { title: string; links: LandingFooterLink[] }[];
  copyright: string;
}

export interface LandingFaqItem {
  q: string;
  a: string;
}
