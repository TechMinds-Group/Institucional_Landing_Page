import { useI18n } from "../i18n/I18nContext";
import { SectionHook } from "./SectionHook";
import { SECTION_IDS } from "../constants/anchors";

/**
 * Seção "O problema da rotina dispersa" do design B (RN-022-3):
 * três situações em cards (pedidos no WhatsApp, agenda, dados separados)
 * com entrada em cascata fade/slide-in (.motion-safe + delays —
 * styles/motion.css, desativada com prefers-reduced-motion) e gancho
 * final conduzindo ao Catálogo (RN-019). Destino do gancho do Hero.
 */
export function ProblemSection() {
  const { t } = useI18n();

  return (
    <section id={SECTION_IDS.problema} className="bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="motion-safe max-w-2xl mx-auto text-center mb-12">
          <h2
            className="font-bold text-[#1F3A5F] leading-tight"
            style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
          >
            {t.problemB.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.problemB.cards.map((card, i) => (
            <div
              key={card.title}
              data-testid="problem-card"
              className={`motion-safe motion-safe-delay-${i + 1} bg-white border border-[#D9DDE3] rounded-2xl p-8 text-center md:text-left`}
            >
              <h3 className="font-semibold text-[#1F3A5F] text-lg mb-3">
                {card.title}
              </h3>
              <p className="text-[#4B5563] leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <SectionHook text={t.problemB.hook} targetId={SECTION_IDS.catalogo} />
      </div>
    </section>
  );
}
