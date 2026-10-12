import { useRef, useState } from "react";
import { Link } from "react-router";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { getCatalogProducts, type CatalogProduct } from "../constants/catalog";
import { SECTION_IDS } from "../constants/anchors";
import { SectionHook } from "./SectionHook";
import { CustomDevelopmentBlock } from "./CustomDevelopmentBlock";

/** Largura do slide do carrossel (cartão de 400px do design B). */
const CARD_WIDTH = 400;

/**
 * Seção "Catálogo de soluções" do design B (RN-019): intro com estados
 * textuais do canônico CR-001, índice de chips (um por produto), carrossel
 * horizontal de cartões 400px com paginação numerada 1–5 + setas prev/next,
 * bloco "Desenvolvimento sob medida" (RN-020) e gancho final para a
 * próxima seção (RN-022).
 *
 * Decisões de implementação (design não define): pontas do carrossel com
 * STOP (setas desabilitam em 1 e 5 — sem wrap) e deslocamento por scroll
 * nativo do viewport (clamp automático no fim da faixa), suave exceto com
 * prefers-reduced-motion (RN-022).
 */
export function CatalogSection() {
  const { t } = useI18n();
  const products = getCatalogProducts(t.catalogB);
  const [index, setIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const lastIndex = products.length - 1;

  const goTo = (i: number) => {
    setIndex(i);
    const viewport = viewportRef.current;
    if (viewport && typeof viewport.scrollTo === "function") {
      const reduceMotion =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      viewport.scrollTo({
        left: i * CARD_WIDTH,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <section
      id={SECTION_IDS.catalogo}
      data-testid="catalog-section"
      className="bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Intro com estados textuais (RN-019) */}
        <div className="motion-safe max-w-2xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4B5563] mb-4">
            {t.catalogB.eyebrow}
          </p>
          <h2
            className="font-bold text-[#1F3A5F] leading-tight mb-6"
            style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
          >
            {t.catalogB.title}
          </h2>
          <p className="text-[#4B5563] leading-relaxed">
            {t.catalogB.activeStatement}
          </p>
          <p className="text-[#4B5563] leading-relaxed">
            {t.catalogB.developingStatement}
          </p>
        </div>

        {/* Índice de chips — compartilha o estado de posição com o carrossel */}
        <div
          data-testid="catalog-chips"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {products.map((product, i) => (
            <button
              key={product.id}
              type="button"
              onClick={() => goTo(i)}
              aria-current={i === index ? "true" : undefined}
              data-testid="catalog-chip"
              className={`min-h-[44px] px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-[#1F3A5F] ${
                i === index
                  ? "bg-[#1F3A5F] text-white border-[#1F3A5F]"
                  : "bg-white text-[#1F3A5F] border-[#D9DDE3] hover:border-[#1F3A5F]"
              }`}
            >
              {product.nome}
            </button>
          ))}
        </div>

        {/* Carrossel */}
        <div data-testid="catalog-carousel">
          <div className="motion-safe text-center mb-8">
            <h3
              className="font-bold text-[#1F3A5F] leading-tight mb-2"
              style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
            >
              {t.catalogB.carouselTitle}
            </h3>
            <p className="text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
              {t.catalogB.carouselSubtitle}
            </p>
          </div>

          {/* Viewport clipa a faixa — sem overflow-x de página (RN-011);
              scroll programático alinha por cartão com clamp nas pontas */}
          <div
            ref={viewportRef}
            className="overflow-x-hidden"
            data-testid="carousel-viewport"
          >
            <div data-testid="carousel-track" className="flex">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Setas + paginação numerada — tap targets ≥44px (RN-011) */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              aria-label={t.catalogB.carouselPrev}
              data-testid="carousel-prev"
              className="size-11 inline-flex items-center justify-center rounded-full border border-[#D9DDE3] text-[#1F3A5F] hover:border-[#1F3A5F] transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-[#1F3A5F]"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            {products.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${t.catalogB.paginationLabel} ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                data-testid="carousel-page"
                className={`size-11 inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors cursor-pointer motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-[#1F3A5F] ${
                  i === index
                    ? "bg-[#1F3A5F] text-white"
                    : "bg-white text-[#1F3A5F] border border-[#D9DDE3] hover:border-[#1F3A5F]"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={index === lastIndex}
              aria-label={t.catalogB.carouselNext}
              data-testid="carousel-next"
              className="size-11 inline-flex items-center justify-center rounded-full border border-[#D9DDE3] text-[#1F3A5F] hover:border-[#1F3A5F] transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-[#1F3A5F]"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Bloco "Desenvolvimento sob medida" (RN-020) */}
        <div className="mt-16">
          <CustomDevelopmentBlock />
        </div>

        <SectionHook
          text={t.catalogB.hook}
          targetId={SECTION_IDS.comoFunciona}
          className="mt-12"
        />
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: CatalogProduct }) {
  const { t } = useI18n();
  const ativo = product.status === "ativo";
  const Icon = product.icon;

  return (
    <article
      data-testid="product-card"
      data-product-id={product.id}
      className="w-[400px] max-w-[85vw] shrink-0 px-3"
    >
      <div className="h-full bg-white border border-[#D9DDE3] rounded-2xl p-6 flex flex-col">
        {/* Identidade: ícone + nome + badge de disponibilidade (RN-005/CR-002) */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="size-11 shrink-0 inline-flex items-center justify-center rounded-full bg-[#EAF0F7] text-[#1F3A5F]">
            <Icon className="w-5 h-5" aria-hidden="true" />
          </span>
          <h4 className="text-xl font-bold text-[#1F3A5F]">{product.nome}</h4>
          <span
            data-testid="product-badge"
            data-status={product.status}
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              ativo
                ? "bg-[rgba(19,45,36,0.05)] text-[#132D24]"
                : "bg-[#EAF1FB] text-[#24538F]"
            }`}
          >
            {ativo ? t.catalogB.badgeActive : t.catalogB.badgeDeveloping}
          </span>
        </div>

        {/* Segmento (eyebrow) + headline (promessa) */}
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4B5563] mb-2">
          {product.segmento}
        </p>
        <p className="font-semibold text-[#1F3A5F] leading-snug mb-4">
          {product.headline}
        </p>

        {/* Benefícios com check */}
        <ul className="space-y-2 mb-4">
          {product.beneficios.map((beneficio) => (
            <li key={beneficio} className="flex items-start gap-2">
              <Check
                className="w-4 h-4 mt-0.5 shrink-0 text-[#132D24]"
                aria-hidden="true"
              />
              <span className="text-sm text-[#4B5563] leading-relaxed">
                {beneficio}
              </span>
            </li>
          ))}
        </ul>

        {/* Mockup de demonstração (regra 5: produto sem demo nunca vazio) */}
        {product.mockup.tipo === "demo-ilustrativo" && product.mockup.asset && (
          <div
            data-testid="mockup-vibecut"
            className="rounded-xl overflow-hidden border border-[#D9DDE3] mb-4"
          >
            <div className="bg-[#111318] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-2">
              {t.catalogB.demoBarVibecut}
            </div>
            <img
              src={product.mockup.asset}
              alt={t.catalogB.vibecutThumbAlt}
              className="w-full h-auto"
            />
          </div>
        )}
        {product.mockup.tipo === "placeholder-demo-pendente" && (
          <div
            data-testid="mockup-escola"
            className="rounded-xl overflow-hidden border border-[#D9DDE3] mb-4"
          >
            <div className="bg-[#111318] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-2">
              {t.catalogB.demoBarEscola}
            </div>
            <div className="bg-[#F7F8FC] p-3">
              <div className="flex gap-1.5 mb-3">
                {t.catalogB.demoEscolaTabs.map((tab) => (
                  <span
                    key={tab}
                    className="px-2 py-1 rounded bg-white border border-[#D9DDE3] text-[11px] text-[#4B5563]"
                  >
                    {tab}
                  </span>
                ))}
              </div>
              <div className="h-16 rounded bg-white border border-dashed border-[#D9DDE3]" />
            </div>
          </div>
        )}

        {/* CTA "Conhecer X" — gate por landing própria (RN-006/CR-004) */}
        {product.cta.enabled && product.cta.href ? (
          <Link
            to={product.cta.href}
            data-testid="product-cta"
            className="mt-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1F3A5F] text-white font-semibold hover:bg-[#1F3A5F]/90 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1F3A5F] focus:ring-offset-2 min-h-[44px]"
          >
            {t.catalogB.ctaLabels[product.cta.labelKey]}
          </Link>
        ) : (
          <button
            type="button"
            disabled
            aria-disabled="true"
            data-testid="product-cta"
            className="mt-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#E5E9F0] text-[#8A93A3] font-semibold cursor-not-allowed min-h-[44px]"
          >
            {t.catalogB.ctaLabels[product.cta.labelKey]}
          </button>
        )}
      </div>
    </article>
  );
}
