import { Sparkles, ArrowRight } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { ProductModal, ProductData } from "./ProductModal";
import { useState } from "react";

export function Products() {
  const { t } = useI18n();
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productDetails: Record<string, ProductData> = {
    Groom: {
      name: "Groom",
      tag: "Gestão & Automação",
      status: t.products.items[0].status,
      description:
        "Sistema completo de gestão para barbearias, desenvolvido para automatizar a operação do dia a dia e eliminar processos manuais. Integração nativa com WhatsApp para agendamentos automáticos, sem precisar de aplicativos de terceiros.",
      features: [
        "Agendamento automático via WhatsApp",
        "Controle de caixa e fechamento diário",
        "Gestão de fila de espera em tempo real",
        "Relatórios gerenciais e histórico de clientes",
        "Painel administrativo para múltiplos profissionais",
      ],
    },
    VibeCut: {
      name: "VibeCut",
      tag: "Inteligência Artificial",
      status: t.products.items[1].status,
      description:
        "Sistema com IA que analisa o formato do rosto do cliente e gera sugestões visuais de cortes de cabelo personalizados. Aumenta o engajamento no atendimento e reduz a indecisão na cadeira.",
      features: [
        "Análise facial por IA em segundos",
        "Geração de sugestões visuais de corte personalizadas",
        "Interface intuitiva para uso no salão ou pelo próprio cliente",
        "Customizável com o catálogo de cortes da sua barbearia",
      ],
    },
    ZoneMap: {
      name: "ZoneMap",
      tag: "Mapas Interativos",
      status: t.products.items[2].status,
      description:
        "Plataforma de mapas interativos com design clean, moderno e flat para espaços extensos como zoológicos, jardins botânicos, parques e eventos. Permite que visitantes explorem o local, encontrem pontos de interesse e acompanhem eventos em tempo real.",
      features: [
        "Mapa interativo com design flat e moderno",
        "Cadastro e exibição de pontos de interesse customizados",
        "Eventos em tempo real com localização no mapa",
        "Navegação intuitiva por categorias e filtros",
        "Totalmente customizável para qualquer tipo de espaço",
      ],
    },
    "Escola Conectada": {
      name: "Escola Conectada",
      tag: "Gestão Educacional",
      status: t.products.items[3].status,
      description:
        "Sistema de gestão escolar completo que centraliza matrículas, frequência, notas, comunicação com responsáveis e relatórios pedagógicos em uma única plataforma. Customizável para se adequar à grade e aos processos de cada instituição.",
      features: [
        "Gestão de matrículas e cadastro de alunos",
        "Controle de frequência e notas por turma",
        "Comunicação direta com pais e responsáveis",
        "Relatórios pedagógicos e administrativos",
        "Customização sob medida para cada instituição",
      ],
    },
  };

  const handleProductClick = (productName: string) => {
    setSelectedProduct(productDetails[productName]);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="section-produtos" className="bg-[#111318] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-center mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            <span className="text-white">{t.products.title} </span>
            <span className="bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] bg-clip-text text-transparent">
              {t.products.titleHighlight}
            </span>
          </h2>

          <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
            {t.products.subtitle}
          </p>

          {/* 1 col mobile → 2 col sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {t.products.items.map((product, index) => (
              <div
                key={index}
                className="group relative bg-[#1A1A2E] p-8 rounded-lg border border-transparent hover:border-[#7B5EA7]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#7B5EA7]/20"
                style={{
                  backgroundImage:
                    "linear-gradient(#1A1A2E, #1A1A2E), linear-gradient(135deg, #7B5EA7, #6B8DC4, #5BC8C0)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                {/* Tag and Status */}
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#7B5EA7]/20 to-[#5BC8C0]/20 border border-[#7B5EA7]/30">
                    <Sparkles className="w-3 h-3 text-[#5BC8C0]" />
                    <span className="text-xs font-semibold text-[#5BC8C0] uppercase tracking-wide">
                      {product.tag}
                    </span>
                  </div>

                  <div
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      product.status === "Disponível" ||
                      product.status === "Available" ||
                      product.status === "Disponible"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    }`}
                  >
                    {product.status}
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="text-3xl font-bold text-white mb-3">{product.name}</h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-4">{product.description}</p>

                {/* Highlight */}
                <div className="flex items-start gap-2 pt-4 mb-6 border-t border-white/10">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#7B5EA7] to-[#5BC8C0] mt-2" />
                  <p className="text-sm text-white/80 font-semibold">{product.highlight}</p>
                </div>

                {/* CTA Button — full width on mobile */}
                <button
                  onClick={() => handleProductClick(product.name)}
                  className="group/btn w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#7B5EA7] to-[#5BC8C0] text-white font-semibold hover:shadow-lg hover:shadow-[#7B5EA7]/30 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5BC8C0]"
                >
                  {product.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#7B5EA7]/0 via-[#6B8DC4]/0 to-[#5BC8C0]/0 group-hover:from-[#7B5EA7]/5 group-hover:via-[#6B8DC4]/5 group-hover:to-[#5BC8C0]/5 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </>
  );
}
