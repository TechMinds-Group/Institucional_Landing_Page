import { Shield, Sliders, Cpu } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";

export function Features() {
  const { t } = useI18n();

  const icons = [Shield, Sliders, Cpu];

  return (
    <section className="bg-[#0D0D0D] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-white">{t.features.title} </span>
          <span className="bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] bg-clip-text text-transparent">
            {t.features.titleHighlight}
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {t.features.cards.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group relative bg-[#1A1A2E] p-8 rounded-lg border border-transparent hover:border-[#7B5EA7]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#7B5EA7]/20"
                style={{
                  backgroundImage: "linear-gradient(#1A1A2E, #1A1A2E), linear-gradient(135deg, #7B5EA7, #6B8DC4, #5BC8C0)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box"
                }}
              >
                <div className="mb-6 w-12 h-12 rounded-lg bg-gradient-to-br from-[#7B5EA7] to-[#5BC8C0] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}