// Contrato de IDs de âncora do design B (MainPage — frame #111:12609).
// Destinos decididos em 11/10/2026 (UI_SPEC §2.1):
//   Soluções → Catálogo · Como trabalhamos → Como funciona ·
//   Empresa → Company and trust · Contato → Rodapé (contatos por área).
// As seções de destino são entregues pelas features irmãs:
//   RN-019 (Catálogo) · RN-021 (Como funciona) · RN-024 (Company/Rodapé).
// Até lá, clique em âncora ainda não entregue é no-op seguro
// (smoothScrollTo ignora ID inexistente — utils/scroll.ts).

export const SECTION_IDS = {
  hero: 'hero',
  problema: 'problema',
  catalogo: 'catalogo',
  comoFunciona: 'como-funciona',
  pilares: 'pilares',
  empresa: 'empresa',
  contato: 'contato',
} as const;

// ── Landings de produto (RN-025) ──────────────────────────────────
// IDs de âncora por landing (navbar RN-026 — dossiê g1 / UI_SPEC §1):
// VibeCut "Como funciona · Estilos · Privacidade · FAQ" (+ Testes p/
// CTA) · Lumen "Acervo · Como funciona · Seu perfil · FAQ" ·
// FasTo "Como funciona · Recursos · Clube · FAQ". Prefixo por produto
// evita colisão entre landings. A regra global `section[id] {
// scroll-margin-top: 100px }` (styles/index.css) cobre essas seções.
export const LANDING_SECTION_IDS = {
  vibecut: {
    comoFunciona: 'vibecut-como-funciona',
    estilos: 'vibecut-estilos',
    privacidade: 'vibecut-privacidade',
    faq: 'vibecut-faq',
    testes: 'vibecut-testes',
  },
  lumen: {
    acervo: 'lumen-acervo',
    comoFunciona: 'lumen-como-funciona',
    seuPerfil: 'lumen-seu-perfil',
    faq: 'lumen-faq',
  },
  fasto: {
    comoFunciona: 'fasto-como-funciona',
    recursos: 'fasto-recursos',
    clube: 'fasto-clube',
    faq: 'fasto-faq',
  },
} as const;
