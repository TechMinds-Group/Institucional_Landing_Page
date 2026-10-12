import { GitBranch, Gauge, ShieldCheck } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { SectionHook } from "./SectionHook";
import { SECTION_IDS } from "../constants/anchors";

/** Ícone de cada pilar na ordem do design: Manutenção · Evolução · Performance. */
const PILLAR_ICONS = [ShieldCheck, GitBranch, Gauge];

/**
 * Seção "Pilares de entrega" do design B (RN-021-2): três pilares —
 * Manutenção, Evolução e Performance — com ícone lucide em quadrado
 * rgba(31,58,95,.08) e cobertura apresentada como "definida em contrato"
 * (sem promessa de escopo/prazo/SLA além do acordado — RN-021). Fecha com
 * gancho para a prova social (RN-022). Entrada .motion-safe (sem animação
 * com prefers-reduced-motion).
 */
export function PillarsSection() {
  const { t } = useI18n();

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="motion-safe max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4B5563] mb-4">
            {t.pillarsB.eyebrow}
          </p>
          <h2
            className="font-bold text-[#1F3A5F] leading-tight mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
          >
            {t.pillarsB.title}
          </h2>
          <p className="text-[#4B5563] leading-relaxed">
            {t.pillarsB.support}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.pillarsB.items.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i];
            return (
              <article
                key={pillar.title}
                data-testid="pillar-card"
                className={`motion-safe motion-safe-delay-${i + 1} bg-white border border-[#D9DDE3] rounded-[20px] p-8`}
              >
                <span
                  data-testid="pillar-icon"
                  className="size-12 mb-6 inline-flex items-center justify-center rounded-xl bg-[rgba(31,58,95,0.08)] text-[#1F3A5F]"
                >
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-[#1F3A5F] text-xl mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[#4B5563] leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>

        <SectionHook text={t.pillarsB.hook} targetId={SECTION_IDS.empresa} />
      </div>
    </section>
  );
}
