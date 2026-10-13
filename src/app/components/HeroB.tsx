import { useI18n } from "../i18n/I18nContext";
import { ConstellationCanvas } from "./ConstellationCanvas";
import { smoothScrollTo } from "../utils/scroll";
import { SECTION_IDS } from "../constants/anchors";
import { ArrowUpRight } from "lucide-react";

/**
 * Hero do design B (frame #111:12628 — RN-022-2, revisão Figma
 * 13/10/2026): H1 48px, body de suporte e CTA único "Veja como podemos
 * ajudar" — âncora interna para o Catálogo (#catalogo via
 * smoothScrollTo). O deep-link WhatsApp da hero saiu (RN-024-2 passa a
 * centralizar o canal comercial no trust panel) e eyebrow/gancho/microlines
 * foram removidos do frame. À direita, "Canvas" 620×500 com partículas
 * vivas (ConstellationCanvas — restaurado do legado) em wrapper
 * aria-hidden decorativo; no mobile empilha abaixo da coluna.
 * Entrada fade/slide-in via .motion-safe (styles/motion.css), desativada
 * com prefers-reduced-motion: reduce (RN-022) — inclusive o canvas.
 */
export function HeroB() {
  const { t } = useI18n();

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative overflow-hidden bg-[#E3EAF7] pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-14 md:px-12 lg:px-24 lg:py-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Texto — coluna esquerda 520px (frame): H1 · body · CTA único */}
          <div className="motion-safe flex flex-col items-center md:items-start text-center md:text-left gap-6 md:max-w-[640px] lg:max-w-[520px] mx-auto md:mx-0">
            <h1
              className="font-bold text-[#1F3A5F] text-[34px] md:text-[42px] lg:text-[48px] leading-[1.15] tracking-[-0.0313em]"
            >
              {t.heroB.headline}
            </h1>
            <p className="text-[16px] leading-[165%] text-[#4B5563]">
              {t.heroB.body}
            </p>
            <a
              href={`#${SECTION_IDS.catalogo}`}
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo(SECTION_IDS.catalogo);
              }}
              data-testid="hero-cta-catalogo"
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-[14px] rounded-[10px] bg-[#1F3A5F] text-white text-[14px] font-semibold hover:bg-[#1F3A5F]/90 transition-colors motion-reduce:transition-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1F3A5F] focus:ring-offset-2"
            >
              {t.heroB.ctaAid}
              <ArrowUpRight
                className="w-[18px] h-[18px] shrink-0"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Canvas de partículas (620×500, largura fluida; decorativo) */}
          <div
            aria-hidden="true"
            data-testid="hero-canvas"
            className="motion-safe motion-safe-delay-1 relative w-full max-w-[620px] h-[360px] lg:h-[500px] mx-auto lg:mx-0 lg:justify-self-end"
          >
            <ConstellationCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
