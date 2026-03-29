import { useI18n } from "../i18n/I18nContext";

export function SocialProof() {
  const { t } = useI18n();
  
  const companies = [
    { name: "Quantum Corp" },
    { name: "NexTech" },
    { name: "DataFlow" },
    { name: "CloudScale" },
    { name: "SynergyAI" },
    { name: "FutureWorks" }
  ];

  return (
    <section id="section-clientes" className="bg-[#0D0D0D] py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p
          className="text-center text-gray-400 uppercase tracking-wider mb-8"
          style={{ fontSize: "clamp(13px, 1.5vw, 14px)" }}
        >
          {t.socialProof.label}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity"
            >
              <span className="text-xl font-bold text-white">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}