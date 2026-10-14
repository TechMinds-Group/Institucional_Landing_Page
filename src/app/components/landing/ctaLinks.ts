import { EMAILS_BY_AREA } from "../../constants/contacts";

// ── Helpers de CTA externo das landings (RN-030/DEBT-003) ──────────
// O e-mail vem do módulo central de contatos (contacts.ts — fonte
// única DEBT-003). Contrato FasTo: mailto SEM body/subject
// (API_CONTRACTS — "abertura do cliente de e-mail do usuário").

/** Helper puro — desmonta apenas na formatação do mailto (RN-030). */
export function mailtoHref(email: string): string {
  return `mailto:${email}`;
}
