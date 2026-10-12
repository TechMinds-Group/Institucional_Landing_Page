import { NavbarB } from "../components/NavbarB";
import { HeroB } from "../components/HeroB";
import { ProblemSection } from "../components/ProblemSection";
import { CatalogSection } from "../components/CatalogSection";
import { HowItWorksB } from "../components/HowItWorksB";
import { PillarsSection } from "../components/PillarsSection";
// RN-023: a prova social fica fora da composição por ora — ver
// comentário no local da renderização.
// RN-024: fechamento do design B — trust panel "Company and trust" (RN-024-2)
// e Rodapé B (RN-024-3). Seções legadas FinalCTA/Footer removidas (RN-024-4);
// o modal de produto e os detalhes embutidos nele saem junto (CR-005/ADR-013
// — o footer legado era o último consumidor do modal).
import { CompanyTrustSection } from "../components/CompanyTrustSection";
import { FooterB } from "../components/FooterB";
import { useEffect, useState } from "react";
import { smoothScrollTo } from "../utils/scroll";
// DEBT-003 (RN-024-1): deep-link do botão flutuante vem do módulo único de
// contatos — substituição mecânica do literal hardcoded (copy preservada).
import { buildWhatsAppUrl, WHATSAPP_MAIN_FLOATING_MESSAGE } from "../constants/contacts";

export function MainPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("main-scroll-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowScrollTop(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Handle hash navigation on mount and when location changes
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace('#', '');
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        smoothScrollTo(sectionId);
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] font-['Inter',sans-serif]">
      <div id="main-scroll-sentinel" className="absolute top-0 h-px w-px pointer-events-none" />
      <NavbarB />
      <HeroB />
      <ProblemSection />
      {/* Catálogo do design B (RN-019) + bloco sob medida (RN-020). */}
      <CatalogSection />
      {/* Main B (RN-021): Como funciona → Pilares de entrega.
          A prova social (RN-023) fica oculta — comentário abaixo. */}
      <HowItWorksB />
      <PillarsSection />
      {/* RN-023 — Prova social oculta por ora (decisão 11/10/2026, operador):
          reativar após validação/autorização dos cases. */}
      {/* RN-024 (fechamento do design B): trust panel "Company and trust" +
          Rodapé B substituem FinalCTA/Footer; sem modal (CR-005/ADR-013). */}
      <CompanyTrustSection />
      <FooterB />

      {/* Scroll to top button */}
      <button
        onClick={() => {
          document.getElementById("main-scroll-sentinel")?.scrollIntoView({ behavior: "smooth" });
          window.scrollTo({ top: 0, behavior: "smooth" });
          document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={`fixed bottom-[96px] right-8 z-50 bg-[#1f2937] hover:bg-[#374151] cursor-pointer text-white rounded-full size-[44px] flex items-center justify-center shadow-lg transition-all duration-300 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        aria-label="Voltar ao topo"
      >
        <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
          <path d="M9 13.5V4.5M4.5 9L9 4.5L13.5 9" stroke="#F8FAFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>

      {/* Floating WhatsApp button */}
      <button
        onClick={() => window.open(buildWhatsAppUrl(WHATSAPP_MAIN_FLOATING_MESSAGE), "_blank", "noopener,noreferrer")}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold text-sm px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Fale conosco
      </button>
    </div>
  );
}