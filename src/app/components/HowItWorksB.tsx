import { CircleCheck, CalendarDays, Orbit, Scissors } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { SECTION_IDS } from "../constants/anchors";

/**
 * Seção "Como funciona" — frame #111:13082 (atualizado 13/10):
 * intro alinhada à esquerda (eyebrow + H2 + support), 3 cartões de etapa
 * com ilustrações HTML/CSS e heading combinado "01 / Ouvir você" —
 * nota de expectativa e gancho REMOVIDOS no frame (13/10).
 * Entrada com .motion-safe (styles/motion.css — sem animação com
 * prefers-reduced-motion).
 */

/** Ícones das chips de escolha — ordem do frame (#111:13090–99): scissors · calendar-days · orbit */
const CHIP_ICONS = [Scissors, CalendarDays, Orbit];

export function HowItWorksB() {
  const { t } = useI18n();

  return (
    <section id={SECTION_IDS.comoFunciona} className="bg-[#E3EAF7]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Introdução — alinhada à esquerda conforme frame */}
        <div className="motion-safe flex flex-col gap-4 mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.0333em] text-[#1F3A5F]">
            {t.howItWorksB.eyebrow}
          </p>
          <h2
            className="font-bold text-[#1F3A5F] leading-[1.15] tracking-[-0.02em] max-w-2xl"
            style={{ fontSize: "clamp(28px, 2.8vw, 40px)" }}
          >
            {t.howItWorksB.title}
          </h2>
          <p className="text-[#4B5563] leading-[1.65] max-w-2xl">
            {t.howItWorksB.support}
          </p>
        </div>

        {/* Escolher → contratar → operar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.howItWorksB.steps.map((step, i) => (
            <article
              key={step.number}
              data-testid="step-card"
              className={`motion-safe motion-safe-delay-${i + 1} bg-white rounded-[20px] p-6 flex flex-col gap-5`}
            >
              {/* Ilustração da etapa (HTML/CSS — postura ADR-009, sem assets) */}
              <div className="rounded-xl bg-[rgba(31,58,95,0.08)] p-5 min-h-[178px] flex flex-col justify-center">
                {i === 0 && (
                  <div
                    data-testid="step-illustration-chips"
                    className="flex flex-wrap gap-2.5"
                  >
                    {t.howItWorksB.stepChips.map((chip, ci) => {
                      const ChipIcon = CHIP_ICONS[ci] ?? Scissors;
                      return (
                        <span
                          key={chip}
                          className={`flex-1 basis-0 h-auto min-h-[116px] rounded-[10px] flex flex-col items-center justify-center gap-3.5 py-3 bg-white ${
                            ci === 0
                              ? "border-2 border-[#1F3A5F]"
                              : "border border-[#D9DDE3]"
                          }`}
                        >
                          <ChipIcon className="w-6 h-6 text-[#1F3A5F]" aria-hidden="true" />
                          <span className="px-2 text-xs font-semibold text-[#1F3A5F] text-center">
                            {chip}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                )}
                {i === 1 && (
                  <div
                    data-testid="step-illustration-checklist"
                    className="bg-white rounded-[10px] p-[18px] space-y-3"
                  >
                    {t.howItWorksB.stepChecklist.map((item) => (
                      <p
                        key={item}
                        className="flex items-center gap-3 text-xs text-[#1F3A5F]"
                      >
                        <CircleCheck
                          className="w-4 h-4 shrink-0 text-[#1F3A5F]"
                          aria-hidden="true"
                        />
                        {item}
                      </p>
                    ))}
                  </div>
                )}
                {i === 2 && (
                  <div
                    data-testid="step-illustration-panel"
                    className="bg-white rounded-[10px] p-[18px]"
                  >
                    <p className="flex items-center gap-3 text-[13px] font-semibold text-[#1F3A5F] mb-2">
                      <span
                        className="inline-block size-5 shrink-0 rounded bg-[#1F3A5F]-/10"
                        aria-hidden="true"
                      />
                      {t.howItWorksB.stepPanelTitle}
                    </p>
                    <div className="space-y-1.5">
                      {t.howItWorksB.stepPanelRows.map((row) => (
                        <span
                          key={row}
                          className="block h-[42px] rounded-md bg-[rgba(31,58,95,0.08)]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <div
                      className="mt-2 h-1.5 rounded bg-[#D9DDE3]"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>

              {/* Título combinado da etapa — "01 / Ouvir você" (frame 13/10) */}
              <h3 className="text-2xl font-bold text-[#1F3A5F] leading-[1.2]">
                {step.number} / {step.title}
              </h3>
              <p className="text-[#4B5563] leading-[1.65]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
