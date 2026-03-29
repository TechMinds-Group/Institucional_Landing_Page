import { useI18n } from "../i18n/I18nContext";

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <section className="bg-[#111318] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-white">{t.howItWorks.title} </span>
          <span className="bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] bg-clip-text text-transparent">
            {t.howItWorks.titleHighlight}
          </span>
        </h2>

        <div className="relative">
          {/* Dashed connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px">
            <div className="max-w-4xl mx-auto h-full bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] opacity-30" style={{ backgroundSize: "10px 1px", backgroundImage: "repeating-linear-gradient(90deg, currentColor 0, currentColor 5px, transparent 5px, transparent 10px)" }} />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Number badge */}
                <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#7B5EA7] to-[#5BC8C0] flex items-center justify-center shadow-lg shadow-[#7B5EA7]/30">
                  <span className="text-2xl font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}