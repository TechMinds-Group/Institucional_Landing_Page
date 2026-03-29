import { useI18n } from "../i18n/I18nContext";

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="bg-[#0D0D0D] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-white">{t.testimonials.title} </span>
          <span className="bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] bg-clip-text text-transparent">
            {t.testimonials.titleHighlight}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-[#1A1A2E] p-8 rounded-lg border border-white/5 hover:border-[#7B5EA7]/30 transition-all duration-300"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-[#7B5EA7] opacity-50 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <p className="text-gray-300 leading-relaxed italic">{testimonial.quote}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#7B5EA7] to-[#5BC8C0] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}