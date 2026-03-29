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
import { useState, useEffect } from "react";
import { useI18n } from "../i18n/I18nContext";
import { smoothScrollTo } from "../utils/scroll";

export function MainPage() {
  const { t } = useI18n();
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    </div>
  );
}