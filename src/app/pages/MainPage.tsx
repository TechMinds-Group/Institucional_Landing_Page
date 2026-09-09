import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { SocialProof } from "../components/SocialProof";
import { ProblemSolution } from "../components/ProblemSolution";
import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { Products } from "../components/Products";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { ProductModal, ProductData } from "../components/ProductModal";
import { useState, useEffect, useRef } from "react";
import { useI18n } from "../i18n/I18nContext";
import { smoothScrollTo } from "../utils/scroll";

export function MainPage() {
  const { t } = useI18n();
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const productDetails: Record<string, ProductData> = {
    'Groom': {
      name: 'Groom',
      tag: 'Gestão & Automação',
      status: t.products.items[0].status,
      description: 'Sistema completo de gestão para barbearias, desenvolvido para automatizar a operação do dia a dia e eliminar processos manuais. Integração nativa com WhatsApp para agendamentos automáticos, sem precisar de aplicativos de terceiros.',
      features: [
        'Agendamento automático via WhatsApp',
        'Controle de caixa e fechamento diário',
        'Gestão de fila de espera em tempo real',
        'Relatórios gerenciais e histórico de clientes',
        'Painel administrativo para múltiplos profissionais'
      ]
    },
    'VibeCut': {
      name: 'VibeCut',
      tag: 'Inteligência Artificial',
      status: t.products.items[1].status,
      description: 'Sistema com IA que analisa o formato do rosto do cliente e gera sugestões visuais de cortes de cabelo personalizados. Aumenta o engajamento no atendimento e reduz a indecisão na cadeira.',
      features: [
        'Análise facial por IA em segundos',
        'Geração de sugestões visuais de corte personalizadas',
        'Interface intuitiva para uso no salão ou pelo próprio cliente',
        'Customizável com o catálogo de cortes da sua barbearia'
      ]
    },
    'ZoneMap': {
      name: 'ZoneMap',
      tag: 'Mapas Interativos',
      status: t.products.items[2].status,
      description: 'Plataforma de mapas interativos com design clean, moderno e flat para espaços extensos como zoológicos, jardins botânicos, parques e eventos. Permite que visitantes explorem o local, encontrem pontos de interesse e acompanhem eventos em tempo real.',
      features: [
        'Mapa interativo com design flat e moderno',
        'Cadastro e exibição de pontos de interesse customizados',
        'Eventos em tempo real com localização no mapa',
        'Navegação intuitiva por categorias e filtros',
        'Totalmente customizável para qualquer tipo de espaço'
      ]
    },
    'Escola Conectada': {
      name: 'Escola Conectada',
      tag: 'Gestão Educacional',
      status: t.products.items[3].status,
      description: 'Sistema de gestão escolar completo que centraliza matrículas, frequência, notas, comunicação com responsáveis e relatórios pedagógicos em uma única plataforma. Customizável para se adequar à grade e aos processos de cada instituição.',
      features: [
        'Gestão de matrículas e cadastro de alunos',
        'Controle de frequência e notas por turma',
        'Comunicação direta com pais e responsáveis',
        'Relatórios pedagógicos e administrativos',
        'Customização sob medida para cada instituição'
      ]
    }
  };

  const handleProductClick = (productName: string) => {
    setSelectedProduct(productDetails[productName]);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] font-['Inter',sans-serif]">
      <div id="main-scroll-sentinel" className="absolute top-0 h-px w-px pointer-events-none" />
      <Navigation />
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Products />
      <FinalCTA />
      <Footer onProductClick={handleProductClick} />
      
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />

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
        onClick={() => window.open("https://wa.me/5551997066347?text=Ola%2C%20tudo%20bem%3F%20Gostaria%20de%20conhecer%20melhor%20os%20produtos%20e%20solucoes%20da%20TechMinds.%20Podem%20me%20ajudar%3F", "_blank", "noopener,noreferrer")}
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