// Contatos centralizados da TechMinds — DEBT-003 (ADR-010 — RN-024-1).
// Fonte: UI_SPEC §2.1 (Company and trust / rodapé) e RN-002 (WhatsApp).
// FONTE ÚNICA de WhatsApp/e-mails/telefone: nenhum consumidor deve
// hardcodar esses valores (verificação: __tests__/contacts-contract.test.ts).

export const WHATSAPP_NUMBER = '5551997066347';

/** Telefone comercial formatado para exibição (frame #111:12609). */
export const PHONE_DISPLAY = '+55 (51) 99706-6347';

const EMAIL_DOMAIN = '@techminds.net.br';

/**
 * E-mails por área — canal comercial + contatos por área do frame B
 * (trust panel "Company and trust" e rodapé — RN-024-2/RN-024-3).
 */
export const EMAILS_BY_AREA = {
  business: `business${EMAIL_DOMAIN}`,
  careers: `careers${EMAIL_DOMAIN}`,
  support: `support${EMAIL_DOMAIN}`,
  compliance: `compliance${EMAIL_DOMAIN}`,
} as const;

export type ContactArea = keyof typeof EMAILS_BY_AREA;

/**
 * Monta o deep-link do WhatsApp com mensagem pré-preenchida (RN-002).
 * Abertura em nova aba é responsabilidade do chamador
 * (target="_blank" rel="noopener noreferrer").
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Mensagem pré-preenchida do contexto Hero (RN-022-2) — reutilizada pelo
// canal comercial do trust panel "Company and trust" (RN-024-2).
export const WHATSAPP_HERO_MESSAGE =
  'Olá! Gostaria de conversar sobre as soluções da TechMinds para a minha rotina.';

// Mensagem pré-preenchida do bloco "Desenvolvimento sob medida" (RN-020) —
// contexto próprio do bloco, distinto dos demais CTAs.
export const WHATSAPP_CUSTOM_DEV_MESSAGE =
  'Olá! Tenho uma necessidade fora do catálogo e gostaria de falar sobre um desenvolvimento sob medida com a TechMinds.';

// Mensagem do botão flutuante da Main — migração DEBT-003 (RN-024-1);
// copy pré-existente preservada (substituição mecânica).
export const WHATSAPP_MAIN_FLOATING_MESSAGE =
  'Ola, tudo bem? Gostaria de conhecer melhor os produtos e solucoes da TechMinds. Podem me ajudar?';

// Mensagens pré-preenchidas da landing Groom — migração DEBT-003
// (RN-024-1); copies pré-existentes preservadas (substituição mecânica).

/** CTA "TESTAR GRÁTIS" (header, hero e CTA final da landing Groom). */
export const WHATSAPP_GROOM_TRIAL_MESSAGE =
  'Olá, equipe Groom! Tudo bem por aí? Fiquei super interessado e gostaria de aproveitar o teste gratuito de 15 dias. Podem me ajudar a dar os primeiros passos?';

/** CTA do Plano Essencial (pricing da landing Groom). */
export const WHATSAPP_GROOM_PLAN_ESSENCIAL_MESSAGE =
  'Olá! Adorei a proposta do Plano Essencial e gostaria de começar a usar o teste grátis de 15 dias no meu estabelecimento. Como podemos iniciar?';

/** CTA do Plano Profissional (pricing da landing Groom). */
export const WHATSAPP_GROOM_PLAN_PROFISSIONAL_MESSAGE =
  'Olá, tudo bem? Fiquei muito impressionado com os recursos do Plano Profissional! Quero experimentar os 15 dias gratuitos para ver tudo na prática. Como faço para ativar?';

/** Botão flutuante da landing Groom. */
export const WHATSAPP_GROOM_FLOATING_MESSAGE =
  'Olá, tudo bem? Vi o site do Groom e adorei a proposta. Gostaria muito de conversar com vocês para conhecer melhor o sistema e entender como ele pode me ajudar.';
