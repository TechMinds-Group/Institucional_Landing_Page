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
  empresa: 'empresa',
  contato: 'contato',
} as const;
