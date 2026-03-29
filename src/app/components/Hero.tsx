import { useI18n } from "../i18n/I18nContext";
import { smoothScrollTo } from "../utils/scroll";
import { ConstellationCanvas } from "./ConstellationCanvas";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      className="relative bg-[#0D0D0D] overflow-hidden"
      style={{
        paddingTop: "80px",
        paddingBottom: "64px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#7B5EA7] blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#5BC8C0] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Mobile: single column / Desktop: two-column grid ── */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-center mt-8">

          {/* Left: Text Content */}
          <div
            className="w-full text-center md:text-left flex flex-col justify-center items-center md:items-start"
          >
            <h1
              className="hero-headline font-bold mb-5 leading-tight"
              style={{ fontSize: "clamp(30px, 4.8vw, 52px)" }}
            >
              <span className="bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] bg-clip-text text-transparent">
                {t.hero.headline}
              </span>
            </h1>

            <p
              className="hero-subheadline text-gray-300 mb-7 leading-relaxed"
              style={{ fontSize: "clamp(14px, 1.7vw, 19px)" }}
            >
              {t.hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
              style={{ marginTop: "24px", flexShrink: 0 }}
            >
              <button
                onClick={() => smoothScrollTo("section-produtos")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] text-white font-semibold hover:shadow-xl hover:shadow-[#7B5EA7]/40 transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5BC8C0] shadow-[0_4px_20px_rgba(123,94,167,0.6)]"
              >
                {t.hero.requestDemo}
              </button>
              <button
                onClick={() => smoothScrollTo("section-contato")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border-2 border-[#5BC8C0] text-[#5BC8C0] font-semibold hover:bg-[#5BC8C0]/10 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5BC8C0]"
              >
                {t.hero.seeHowItWorks}
              </button>
            </div>
          </div>

          {/* Right: Constellation Canvas — hidden on mobile */}
          <div
            className="hidden md:block relative overflow-hidden"
            style={{ height: "clamp(300px, 38vw, 500px)" }}
          >
            <ConstellationCanvas />
          </div>
        </div>
      </div>

      {/* Viewport-height safety: shorter desktop/laptop screens */}
      <style>{`
        @media (max-height: 700px) and (min-width: 768px) {
          .hero-section {
            padding-top: 60px !important;
            padding-bottom: 40px !important;
          }
          .hero-headline {
            font-size: clamp(28px, 4vw, 48px) !important;
          }
          .hero-subheadline {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}