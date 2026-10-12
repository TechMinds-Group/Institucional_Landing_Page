import { useI18n } from "../i18n/I18nContext";
import { SectionHook } from "./SectionHook";
import { buildWhatsAppUrl, WHATSAPP_HERO_MESSAGE } from "../constants/contacts";
import { SECTION_IDS } from "../constants/anchors";
import hubOrbitalNoturno from "../../imports/hub-orbital-noturno.png";

/**
 * Hero do design B "Navegação e promessa" (frame #111:12609 — RN-022-2):
 * eyebrow, H1, 2 linhas de apoio, CTA "Conversar no WhatsApp" (deep-link
 * wa.me nova aba com mensagem pré-preenchida — RN-002), microcopy, gancho
 * para a seção Problema (decisão 11/10/2026 — narrativa promessa →
 * problema → catálogo) e imagem "Hub orbital noturno" responsiva (RN-011).
 * Sem CTA de rolagem "Conhecer os produtos" (RN-001 superseded — CR-003).
 * Entrada fade/slide-in via classe utilitária .motion-safe
 * (styles/motion.css), desativada com prefers-reduced-motion: reduce.
 */
export function HeroB() {
  const { t } = useI18n();

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative overflow-hidden bg-[#EAF0F7]"
      style={{ paddingTop: "80px" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div className="motion-safe flex flex-col items-center md:items-start text-center md:text-left max-w-xl mx-auto md:mx-0">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4B5563] mb-4">
              {t.heroB.eyebrow}
            </p>
            <h1
              className="font-bold text-[#1F3A5F] leading-tight mb-5"
              style={{ fontSize: "clamp(32px, 4.2vw, 54px)" }}
            >
              {t.heroB.headline}
            </h1>
            <p
              className="text-[#4B5563] leading-relaxed mb-2"
              style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}
            >
              {t.heroB.supportLine1}
            </p>
            <p
              className="text-[#4B5563] leading-relaxed"
              style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}
            >
              {t.heroB.supportLine2}
            </p>

            <div className="mt-8 flex flex-col items-center md:items-start">
              <a
                href={buildWhatsAppUrl(WHATSAPP_HERO_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-cta"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1F3A5F] text-white font-semibold hover:bg-[#1F3A5F]/90 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1F3A5F] focus:ring-offset-2"
              >
                {t.heroB.ctaWhatsApp}
              </a>
              <p className="mt-3 text-sm text-[#4B5563]/80">{t.heroB.microcopy}</p>
            </div>

            <SectionHook
              text={t.heroB.hook}
              targetId={SECTION_IDS.problema}
              className="mt-10"
            />
          </div>

          {/* Imagem "Hub orbital noturno" — responsiva (RN-011) */}
          <div className="motion-safe motion-safe-delay-1">
            <img
              src={hubOrbitalNoturno}
              alt={t.heroB.imageAlt}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
