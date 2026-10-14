import { useI18n } from "../i18n/I18nContext";
import {
  buildWhatsAppUrl,
  WHATSAPP_CUSTOM_DEV_MESSAGE,
} from "../constants/contacts";

/**
 * Bloco "Desenvolvimento sob medida" do design B (RN-020): fundo
 * #1F3A5F, eyebrow + H2 + texto de escopo acordado (sem promessa de
 * prazo/preço) e CTA branco abrindo o WhatsApp comercial em nova aba
 * com mensagem pré-preenchida própria do bloco (RN-002).
 */
export function CustomDevelopmentBlock() {
  const { t } = useI18n();

  return (
    <div
      data-testid="custom-dev-block"
      className="motion-safe bg-[#1F3A5F] rounded-2xl px-6 py-12 md:px-12 text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-4">
        {t.catalogB.custom.eyebrow}
      </p>
      <h2
        className="font-bold text-white leading-tight mb-4"
        style={{ fontSize: "clamp(24px, 2.6vw, 34px)" }}
      >
        {t.catalogB.custom.title}
      </h2>
      <p
        className="text-white/80 leading-relaxed max-w-2xl mx-auto mb-8"
        style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}
      >
        {t.catalogB.custom.description}
      </p>

      <div className="flex flex-col items-center">
        <a
          href={buildWhatsAppUrl(WHATSAPP_CUSTOM_DEV_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="custom-dev-whatsapp-cta"
          className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-[#1F3A5F] font-semibold hover:bg-white/90 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F3A5F] min-h-[44px]"
        >
          {t.catalogB.custom.ctaWhatsApp}
        </a>
        <p className="mt-3 text-sm text-white/70">{t.catalogB.custom.microcopy}</p>
      </div>
    </div>
  );
}
