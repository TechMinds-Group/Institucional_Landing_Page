import { useI18n } from "../i18n/I18nContext";
import { SectionHook } from "./SectionHook";
import { SECTION_IDS } from "../constants/anchors";

/**
 * Seção "Prova social e próximo passo" do design B (RN-021-3 / RN-023):
 * dois cards de caso (Barbearias / Estética e beleza) com placeholders
 * explícitos de depoimento, resultado/contexto, autoria e logo — publicação
 * real somente após validação e autorização dos clientes; nenhum número
 * comercial apresentado como prova. Estrutura de card pronta para receber
 * conteúdo autorizado sem refactor (campos do dicionário i18n). Gancho final
 * conduz à seção de empresa (RN-022).
 */
export function SocialProofSection() {
  const { t } = useI18n();

  return (
    <section className="bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="motion-safe max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4B5563] mb-4">
            {t.socialProofB.eyebrow}
          </p>
          <h2
            className="font-bold text-[#1F3A5F] leading-tight mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
          >
            {t.socialProofB.title}
          </h2>
          <p className="text-[#4B5563] leading-relaxed">
            {t.socialProofB.support}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {t.socialProofB.cards.map((card, i) => (
            <article
              key={card.segment}
              data-testid="case-card"
              className={`motion-safe motion-safe-delay-${i + 1} bg-white border border-[#D9DDE3] rounded-[20px] p-8 flex flex-col`}
            >
              {/* Segmento + tag de política de conteúdo */}
              <div className="flex items-center gap-2 flex-wrap mb-5">
                <span className="px-3 py-1 rounded-full bg-[#F7F8FC] border border-[#D9DDE3] text-xs font-medium text-[#1F3A5F]">
                  {card.segment}
                </span>
                <span
                  data-testid="case-pending-tag"
                  className="px-3 py-1 rounded-full bg-[#EEF1F6] text-[11px] font-semibold tracking-widest text-[#4B5563]"
                >
                  {t.socialProofB.pendingTag}
                </span>
              </div>

              {/* Depoimento placeholder — substituição futura sem refactor */}
              <p
                data-testid="case-testimonial"
                className="text-[#4B5563] leading-relaxed mb-5"
              >
                {card.testimonial}
              </p>

              {/* Resultado/contexto — bloco creme do design */}
              <div
                data-testid="case-result"
                className="bg-[#F5F2EA] rounded-xl p-4 mb-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6B5B3E] mb-1">
                  {t.socialProofB.resultLabel}
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {card.result}
                </p>
              </div>

              {/* Autoria: logo placeholder + nome + cargo/empresa */}
              <div className="mt-auto flex items-center gap-3">
                <span
                  data-testid="case-logo"
                  className="size-12 shrink-0 inline-flex items-center justify-center rounded-lg border border-dashed border-[#D9DDE3] text-[10px] text-[#8A93A3]"
                >
                  {card.logo}
                </span>
                <div>
                  <p className="font-semibold text-[#1F3A5F] text-sm">
                    {card.name}
                  </p>
                  <p className="text-sm text-[#4B5563]">{card.roleCompany}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p
          data-testid="social-proof-note"
          className="motion-safe text-sm text-[#4B5563] text-center max-w-2xl mx-auto mb-10"
        >
          {t.socialProofB.note}
        </p>

        <SectionHook
          text={t.socialProofB.hook}
          targetId={SECTION_IDS.empresa}
        />
      </div>
    </section>
  );
}
