import { useI18n } from "../i18n/I18nContext";

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <section className="bg-[#111318] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-bold text-center mb-16"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          <span className="text-white">{t.howItWorks.title} </span>
          <span className="bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] bg-clip-text text-transparent">
            {t.howItWorks.titleHighlight}
          </span>
        </h2>

        {/* ── Desktop: horizontal row with dashed top line ─── */}
        <div className="relative hidden md:block">
          <div className="absolute top-24 left-0 right-0 h-px">
            <div
              className="max-w-4xl mx-auto h-full opacity-30"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, #7B5EA7 0, #7B5EA7 5px, transparent 5px, transparent 10px)",
              }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#7B5EA7] to-[#5BC8C0] flex items-center justify-center shadow-lg shadow-[#7B5EA7]/30">
                  <span className="text-2xl font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical stack with left dashed line ──── */}
        <div className="relative md:hidden">
          {/* Left vertical dashed line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, #7B5EA7 0, #7B5EA7 6px, transparent 6px, transparent 12px)",
              opacity: 0.4,
            }}
          />

          <div className="space-y-10">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 items-start pl-2">
                {/* Number badge — sits on the left line */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#7B5EA7] to-[#5BC8C0] flex items-center justify-center shadow-lg shadow-[#7B5EA7]/30 relative z-10"
                >
                  <span
                    className="font-bold bg-gradient-to-r from-[#7B5EA7] to-[#5BC8C0] bg-clip-text text-transparent"
                    style={{ fontSize: "32px" }}
                  >
                    {index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
