import { useI18n } from "../i18n/I18nContext";
import { smoothScrollTo } from "../utils/scroll";
import { ConstellationCanvas } from "./ConstellationCanvas";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative bg-[#0D0D0D] overflow-hidden"
      style={{ paddingTop: "128px", paddingBottom: "96px", paddingLeft: "24px", paddingRight: "24px" }}
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#7B5EA7] blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#5BC8C0] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Mobile: single column ─────────────────────────── */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="w-full text-center md:text-left">
            <h1
              className="font-bold mb-6 leading-tight"
              style={{ fontSize: "clamp(32px, 6vw, 56px)" }}
            >
              <span className="bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] bg-clip-text text-transparent">
                {t.hero.headline}
              </span>
            </h1>

            <p
              className="text-gray-300 mb-8 leading-relaxed"
              style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
            >
              {t.hero.subheadline}
            </p>

            {/* CTA Buttons — stacked full-width on mobile, inline on md+ */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => smoothScrollTo("section-produtos")}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] text-white font-semibold hover:shadow-xl hover:shadow-[#7B5EA7]/40 transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5BC8C0]"
              >
                {t.hero.requestDemo}
              </button>
              <button
                onClick={() => smoothScrollTo("section-contato")}
                className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-[#5BC8C0] text-[#5BC8C0] font-semibold hover:bg-[#5BC8C0]/10 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5BC8C0]"
              >
                {t.hero.seeHowItWorks}
              </button>
            </div>
          </div>

          {/* Constellation Canvas — hidden on mobile, 40% on tablet, 50% on desktop */}
          <div
            className="hidden md:block relative"
            style={{ height: "clamp(320px, 40vw, 520px)" }}
          >
            <ConstellationCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
