// Contatos centralizados da TechMinds — DEBT-003 (antecipado pela RN-022).
// Fonte: UI_SPEC §2.1 (Company and trust / rodapé) e RN-002 (WhatsApp).
// As features RN-019/RN-021/RN-024 reusam este módulo; a migração dos
// números legados (hardcoded em 8+ locais) acontece em RN-024-1.

export const WHATSAPP_NUMBER = '5551997066347';

export const WHATSAPP_DISPLAY = '+55 51 99706-6347';

const EMAIL_DOMAIN = '@techminds.net.br';

export const BUSINESS_EMAIL = `business${EMAIL_DOMAIN}`;

export const CAREERS_EMAIL = `careers${EMAIL_DOMAIN}`;

export const SUPPORT_EMAIL = `support${EMAIL_DOMAIN}`;

export const COMPLIANCE_EMAIL = `compliance${EMAIL_DOMAIN}`;

/**
 * Monta o deep-link do WhatsApp com mensagem pré-preenchida (RN-002).
 * Abertura em nova aba é responsabilidade do chamador
 * (target="_blank" rel="noopener noreferrer").
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Mensagem pré-preenchida do contexto Hero (RN-022-2).
export const WHATSAPP_HERO_MESSAGE =
  'Olá! Gostaria de conversar sobre as soluções da TechMinds para a minha rotina.';

// Mensagem pré-preenchida do bloco "Desenvolvimento sob medida" (RN-020) —
// contexto próprio do bloco, distinto dos demais CTAs.
export const WHATSAPP_CUSTOM_DEV_MESSAGE =
  'Olá! Tenho uma necessidade fora do catálogo e gostaria de falar sobre um desenvolvimento sob medida com a TechMinds.';
