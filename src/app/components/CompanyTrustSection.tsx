import { ExternalLink } from "lucide-react";
import { Logo } from "./Logo";
import { CopyContact } from "./CopyContact";
import { useI18n } from "../i18n/I18nContext";
import { SECTION_IDS } from "../constants/anchors";
import {
  buildWhatsAppUrl,
  EMAILS_BY_AREA,
  PHONE_DISPLAY,
  WHATSAPP_HERO_MESSAGE,
} from "../constants/contacts";

/**
 * Seção "Company and trust" do design B (RN-024-2 — frame #111:12609,
 * fundo #FFFFFF, id `empresa`): header verdadeiro (sem inventar prova
 * social — RN-003/RN-023) e trust panel com a marca + statement, o canal
 * comercial (e-mail e telefone copiáveis + CTA "Conversar no WhatsApp")
 * e os contatos por área (Carreiras/Suporte/Compliance) copiáveis com
 * descrição do propósito.
 *
 * Cópia (RN-003): Clipboard API com fallback execCommand e feedback
 * "Copiado!" 2s por campo — via CopyContact (timers independentes).
 * CTA WhatsApp: deep-link wa.me com mensagem pré-preenchida comercial
 * em nova aba (padrão RN-002; mensagem do Hero reutilizada).
 * Desktop-first (frame B mobile inexistente): padding adaptado em telas
 * menores conforme RN-011 (tap targets ≥44px, sem overflow-x).
 */
export function CompanyTrustSection() {
  const { t } = useI18n();
  const { companyTrust } = t;

  return (
    <section
      id={SECTION_IDS.empresa}
      data-testid="company-trust-section"
      className="bg-white py-[88px] px-6 md:px-12 lg:px-24"
    >
      {/* Header — verdadeiro por design (sem depoimentos/números fictícios) */}
      <div className="motion-safe max-w-2xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4B5563] mb-4">
          {companyTrust.eyebrow}
        </p>
        <h2
          className="font-bold text-[#1F3A5F] leading-tight mb-4"
          style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
        >
          {companyTrust.title}
        </h2>
        <p className="text-[#4B5563] leading-relaxed">
          {companyTrust.support}
        </p>
      </div>

      {/* Trust panel — border #D9DDE3, raio 20px, padding 40px */}
      <div
        data-testid="trust-panel"
        className="motion-safe max-w-5xl mx-auto border border-[#D9DDE3] rounded-[20px] p-6 md:p-10"
      >
        {/* Marca + statement */}
        <div className="flex items-center gap-3 mb-2">
          <Logo className="w-8 h-8" />
          <span className="text-xl font-bold text-[#1F3A5F]">TechMinds</span>
        </div>
        <p className="text-[#4B5563] mb-10">{companyTrust.statement}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Canal comercial */}
          <div className="md:border-r md:border-[#D9DDE3] md:pr-10">
            <h3 className="font-semibold text-[#1F3A5F] text-lg mb-1">
              {companyTrust.commercial.title}
            </h3>
            <p className="text-[#4B5563] text-sm leading-relaxed mb-6">
              {companyTrust.commercial.description}
            </p>

            <div className="flex flex-col items-start gap-4">
              <CopyContact
                value={EMAILS_BY_AREA.business}
                copiedLabel={companyTrust.copied}
                hint={companyTrust.copyHint}
                className="text-[#1F3A5F]"
                testId="company-trust-commercial-email"
              />
              <CopyContact
                value={PHONE_DISPLAY}
                copiedLabel={companyTrust.copied}
                hint={companyTrust.copyHint}
                className="text-[#1F3A5F]"
                testId="company-trust-commercial-phone"
              />

              <a
                href={buildWhatsAppUrl(WHATSAPP_HERO_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="company-trust-whatsapp-cta"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-7 py-3 rounded-full bg-[#1F3A5F] text-white font-semibold hover:bg-[#16304f] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1F3A5F] focus:ring-offset-2 mt-2"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                {companyTrust.commercial.ctaWhatsApp}
              </a>
            </div>
          </div>

          {/* Contatos por área — descrição do propósito de cada canal */}
          <div>
            <h3 className="font-semibold text-[#1F3A5F] text-lg mb-1">
              {companyTrust.areas.title}
            </h3>
            <p className="text-[#4B5563] text-sm leading-relaxed mb-6">
              {companyTrust.areas.description}
            </p>

            <ul className="flex flex-col gap-5">
              <li>
                <CopyContact
                  value={EMAILS_BY_AREA.careers}
                  copiedLabel={companyTrust.copied}
                  hint={companyTrust.copyHint}
                  className="text-[#1F3A5F]"
                  testId="company-trust-area-careers"
                />
                <p className="text-[#4B5563] text-sm leading-snug mt-1">
                  {companyTrust.areas.careers}
                </p>
              </li>
              <li>
                <CopyContact
                  value={EMAILS_BY_AREA.support}
                  copiedLabel={companyTrust.copied}
                  hint={companyTrust.copyHint}
                  className="text-[#1F3A5F]"
                  testId="company-trust-area-support"
                />
                <p className="text-[#4B5563] text-sm leading-snug mt-1">
                  {companyTrust.areas.support}
                </p>
              </li>
              <li>
                <CopyContact
                  value={EMAILS_BY_AREA.compliance}
                  copiedLabel={companyTrust.copied}
                  hint={companyTrust.copyHint}
                  className="text-[#1F3A5F]"
                  testId="company-trust-area-compliance"
                />
                <p className="text-[#4B5563] text-sm leading-snug mt-1">
                  {companyTrust.areas.compliance}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
