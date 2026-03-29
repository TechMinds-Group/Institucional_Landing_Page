import { useI18n } from "../i18n/I18nContext";
import { smoothScrollTo } from "../utils/scroll";
import { ConstellationCanvas } from "./ConstellationCanvas";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative bg-[#0D0D0D] pt-32 pb-24 px-6 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#7B5EA7] blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#5BC8C0] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] bg-clip-text text-transparent">
                {t.hero.headline}
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => smoothScrollTo('section-produtos')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] text-white font-semibold hover:shadow-xl hover:shadow-[#7B5EA7]/40 transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5BC8C0]"
              >
                {t.hero.requestDemo}
              </button>
              <button 
                onClick={() => smoothScrollTo('section-contato')}
                className="px-8 py-4 rounded-full border-2 border-[#5BC8C0] text-[#5BC8C0] font-semibold hover:bg-[#5BC8C0]/10 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5BC8C0]"
              >
                {t.hero.seeHowItWorks}
              </button>
            </div>
          </div>

          {/* Right: Living Constellation Canvas */}
          <div className="relative h-[420px] md:h-[520px]">
            <ConstellationCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}