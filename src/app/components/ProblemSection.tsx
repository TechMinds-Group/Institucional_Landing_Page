import { CalendarClock, Files, MessagesSquare } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { SectionHook } from "./SectionHook";
import { SECTION_IDS } from "../constants/anchors";

/** Ícones das situações — ordem do frame (#111:12708): messages-square · calendar-clock · files */
const SITUATION_ICONS = [MessagesSquare, CalendarClock, Files];

/**
 * Seção "O problema da rotina dispersa" — frame #111:12708 (atualizado
 * 13/10): layout de 2 colunas — introdução (eyebrow + H2 + body) à esquerda
 * e lista de situações (cards-row com ícone) à direita — + gancho final
 * conduzindo ao Catálogo (RN-019). Entrada em cascata (.motion-safe).
 */
export function ProblemSection() {
  const { t } = useI18n();

  return (
    <section id={SECTION_IDS.problema} className="bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-[72px]">
        <div className="motion-safe flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Introdução — coluna esquerda */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.0333em] text-[#1F3A5F] mb-4">
              {t.problemB.eyebrow}
            </p>
            <div className="flex flex-col gap-4">
              <h2
                className="font-bold text-[#1F3A5F] leading-[1.15] tracking-[-0.02em]"
                style={{ fontSize: "clamp(28px, 2.8vw, 40px)" }}
              >
                {t.problemB.title}
              </h2>
              <p className="text-[#4B5563] leading-[1.65]">{t.problemB.body}</p>
            </div>
          </div>

          {/* Situações — coluna direita (cards-row com ícone) */}
          <div className="flex-1 min-w-0 w-full lg:max-w-[520px] flex flex-col gap-3">
            {t.problemB.situations.map((situation, i) => {
              const Icon = SITUATION_ICONS[i] ?? MessagesSquare;
              return (
                <div
                  key={situation.title}
                  data-testid="problem-card"
                  className={`motion-safe motion-safe-delay-${(i % 3) + 1} bg-white rounded-xl p-4 flex items-center gap-4`}
                >
                  <Icon
                    className="w-[22px] h-[22px] shrink-0 text-[#1F3A5F]"
                    aria-hidden="true"
                  />
                  <p className="text-base font-medium text-[#1F3A5F]">
                    {situation.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <SectionHook
          text={t.problemB.hook}
          targetId={SECTION_IDS.catalogo}
          className="mt-8"
        />
      </div>
    </section>
  );
}
