import { X, ArrowRight } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";

export function ProblemSolution() {
  const { t } = useI18n();

  return (
    <section id="section-sobre" className="bg-[#111318] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-bold text-center mb-16 text-white"
          style={{ fontSize: "clamp(24px, 4vw, 48px)" }}
        >
          {t.problemSolution.title}
          <br />
          <span className="bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] bg-clip-text text-transparent">
            {t.problemSolution.titleHighlight}
          </span>
        </h2>

        {/* Mobile: single column stack; md+: 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
          {/* Pain Points */}
          <div className="space-y-8">
            {t.problemSolution.problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mt-1">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-lg text-gray-300">{problem}</p>
              </div>
            ))}
          </div>

          {/* Divider — vertical on desktop, horizontal on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] opacity-30" />
          <div className="md:hidden h-px my-4 bg-gradient-to-r from-transparent via-[#7B5EA7] to-transparent opacity-40" />

          {/* Solutions */}
          <div className="space-y-8">
            {t.problemSolution.solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#7B5EA7] to-[#5BC8C0] flex items-center justify-center mt-1">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg text-white font-semibold">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
