import { CircleCheck } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { SectionHook } from "./SectionHook";
import { SECTION_IDS } from "../constants/anchors";

/**
 * Seção "Como funciona" do design B (RN-021-1): três etapas ilustradas em
 * cartões brancos raio 20px — 01 Escolher (chips de opções do catálogo) →
 * 02 Contratar (itens com check) → 03 Operar (painel "rotina conectada") —
 * seguidas da nota de expectativa (VibeCut e Escola Conectada em
 * desenvolvimento) e do gancho para a próxima seção (RN-022). Entrada com
 * .motion-safe (styles/motion.css — sem animação com prefers-reduced-motion).
 */
export function HowItWorksB() {
  const { t } = useI18n();

  return (
    <section id={SECTION_IDS.comoFunciona} className="bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="motion-safe max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4B5563] mb-4">
            {t.howItWorksB.eyebrow}
          </p>
          <h2
            className="font-bold text-[#1F3A5F] leading-tight mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
          >
            {t.howItWorksB.title}
          </h2>
          <p className="text-[#4B5563] leading-relaxed">
            {t.howItWorksB.support}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.howItWorksB.steps.map((step, i) => (
            <article
              key={step.number}
              data-testid="step-card"
              className={`motion-safe motion-safe-delay-${i + 1} bg-white border border-[#D9DDE3] rounded-[20px] p-6 flex flex-col`}
            >
              {/* Ilustração HTML/CSS da etapa (postura ADR-009 — sem assets) */}
              <div className="rounded-xl bg-[#F7F8FC] border border-[#EEF1F6] p-4 min-h-[128px] flex flex-col justify-center mb-6">
                {i === 0 && (
                  <div
                    data-testid="step-illustration-chips"
                    className="flex flex-wrap gap-2"
                  >
                    {t.howItWorksB.stepChips.map((chip) => (
                      <span
                        key={chip}
                        className="px-3 py-1.5 rounded-full bg-white border border-[#D9DDE3] text-sm font-medium text-[#1F3A5F]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
                {i === 1 && (
                  <ul
                    data-testid="step-illustration-checklist"
                    className="space-y-2"
                  >
                    {t.howItWorksB.stepChecklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-[#1F3A5F]"
                      >
                        <CircleCheck
                          className="w-4 h-4 shrink-0 text-[#132D24]"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {i === 2 && (
                  <div
                    data-testid="step-illustration-panel"
                    className="bg-white border border-[#D9DDE3] rounded-lg p-3"
                  >
                    <p className="text-xs font-semibold text-[#1F3A5F] mb-2">
                      {t.howItWorksB.stepPanelTitle}
                    </p>
                    <div className="space-y-1.5">
                      {t.howItWorksB.stepPanelRows.map((row) => (
                        <div
                          key={row}
                          className="flex items-center gap-2 text-[11px] text-[#4B5563]"
                        >
                          <span
                            className="size-1.5 rounded-full bg-[#1F3A5F]/40 shrink-0"
                            aria-hidden="true"
                          />
                          {row}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <p className="text-sm font-bold text-[#1F3A5F]/60 mb-1">
                {step.number}
              </p>
              <h3 className="font-semibold text-[#1F3A5F] text-xl mb-2">
                {step.title}
              </h3>
              <p className="text-[#4B5563] leading-relaxed text-sm">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <p
          data-testid="how-it-works-note"
          className="motion-safe text-sm text-[#4B5563] text-center max-w-2xl mx-auto mb-10"
        >
          {t.howItWorksB.note}
        </p>

        <SectionHook
          text={t.howItWorksB.hook}
          targetId={SECTION_IDS.empresa}
        />
      </div>
    </section>
  );
}
