import { useCallback, useEffect, useRef, useState } from "react";
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
 * Contagem de páginas a partir das medidas do viewport do carrossel
 * (fonte da verdade da paginação — reflete a quantidade real de
 * conteúdo em qualquer largura de tela):
 * - 0/indefinido ou sem overflow → 1 página;
 * - caso contrário, cartões completos além do viewport + 1
 *   (`Math.round((scrollWidth - clientWidth) / advance) + 1`) — o round
 *   casa com o modelo de posição (`round(scrollLeft / advance)`) usado
 *   na navegação; ceil contaria uma página extra com transbordo < 0,5
 *   cartão (ex.: últimos 5px do cartão 5 no mobile).
 */
export function computePageCount(
  scrollWidth: number,
  clientWidth: number,
  advance: number = CARD_WIDTH
): number {
  if (!Number.isFinite(scrollWidth) || !Number.isFinite(clientWidth)) return 1;
  if (scrollWidth <= 0 || clientWidth <= 0) return 1;
  if (scrollWidth <= clientWidth) return 1;
  return Math.round((scrollWidth - clientWidth) / advance) + 1;
}

/**
 * Janela de silêncio do guard programático: libera o scroll programático
 * após `scrollend` nativo (quando suportado) ou ~150 ms sem novos scroll
 * events — o que ocorrer primeiro. Cada evento durante o guard rearma a
 * janela, então a liberação acontece só quando o scroll assentar.
 */
const PROGRAMMATIC_GUARD_MS = 150;

/**
 * Seção "Catálogo de soluções" do design B (RN-019): intro com estados
 * textuais do canônico CR-001, índice de chips (um por produto), carrossel
 * horizontal de cartões 400px com paginação numerada dinâmica (contagem por
 * posições de scroll do viewport — mount + resize) + setas prev/next,
 * bloco "Desenvolvimento sob medida" (RN-020) e gancho final para a
 * próxima seção (RN-022).
 *
 * Decisões de implementação (design não define): pontas do carrossel com
 * STOP (setas desabilitam na primeira e na última posição de scroll — sem
 * wrap), deslocamento por scroll nativo do viewport (clamp automático no
 * fim da faixa), suave exceto com prefers-reduced-motion (RN-022).
 *
 * Posição vs seleção (RN-019 — correção da seleção dos chips): o scroll DO
 * VIEWPORT é a fonte da verdade da posição (onScroll re-sincroniza para o
 * primeiro card inteiro visível). Os chips selecionam o produto clicado
 * SEM forçá-lo a uma posição de scroll: rolam até min(índice·400px,
 * maxScroll) — clamp nativo da faixa. Com 5 cards de 400px e viewport
 * ~1248px, mais de um card fica visível: para os DOIS ÚLTIMOS produtos
 * (VibeCut, Escola Conectada) o scroll encosta no fim da faixa e o card
 * entra visível parcialmente à direita — o chip FICA selecionado; uma
 * rolagem manual depois re-sincroniza a seleção para o first-visible
 * (consequência honesta, não é bug).
 *
 * Scroll PROGRAMÁTICO (chips, paginação, setas) não re-sincroniza: guard
 * ref `programmatic` ativo libera por `scrollend` nativo (quando suportado)
 * ou debounce de ~150 ms sem novos scroll events; liberado, o scroll
 * manual volta a seguir a viewport.
 */
export function CatalogSection() {
  const { t } = useI18n();
  const products = getCatalogProducts(t.catalogB);
  // Dois estados que NÃO colapsam (RN-019):
  // - position: posição de scroll do viewport em páginas (0..pageCount-1) —
  //   fonte do highlight da paginação numerada e do STOP das setas;
  // - selected: produto selecionado (0..products.length-1) — fonte do
  //   aria-current dos chips. Podem divergir quando um chip aponta além da
  //   última posição de scroll (documentado acima).
  const [position, setPosition] = useState(0);
  const [selected, setSelected] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  /** Avanço real por cartão (mobile: 85vw — medido; desktop/jsdom: 400). */
  const [cardAdvance, setCardAdvance] = useState(CARD_WIDTH);
  const programmaticRef = useRef(false);
  const settleTimerRef = useRef<number | undefined>(undefined);

  /** Libera o guard programático e desfaz listener/timer pendentes. */
  const settleProgrammaticScroll = useCallback(() => {
    programmaticRef.current = false;
    if (settleTimerRef.current !== undefined) {
      clearTimeout(settleTimerRef.current);
      settleTimerRef.current = undefined;
    }
    viewportRef.current?.removeEventListener(
      "scrollend",
      settleProgrammaticScroll
    );
  }, []);

  /** (Re)arma a liberação por silêncio de scroll (fallback do scrollend). */
  const restartSettleTimer = useCallback(() => {
    if (settleTimerRef.current !== undefined) {
      clearTimeout(settleTimerRef.current);
    }
    settleTimerRef.current = window.setTimeout(
      settleProgrammaticScroll,
      PROGRAMMATIC_GUARD_MS
    );
  }, [settleProgrammaticScroll]);

  /** Marca scroll programático em andamento: enquanto o guard estiver
   *  ativo, onScroll não sobrescreve posição/seleção. O listener
   *  `scrollend` é adicionado sempre — só dispara em suporte real. */
  const startProgrammaticScroll = useCallback(() => {
    programmaticRef.current = true;
    viewportRef.current?.addEventListener(
      "scrollend",
      settleProgrammaticScroll
    );
    restartSettleTimer();
  }, [settleProgrammaticScroll, restartSettleTimer]);

  // Limpeza no unmount: listener scrollend + timer pendente.
  useEffect(() => () => settleProgrammaticScroll(), [settleProgrammaticScroll]);

  // Paginação dinâmica: mede o viewport no mount e a cada resize — a
  // quantidade de páginas reflete a quantidade real de conteúdo. Em
  // ambientes sem medição (jsdom), fallback de 1 página. Cleanup remove o
  // listener; clamp mantém a posição dentro dos limites ao reduzir páginas.
  // O AVANÇO por cartão é medido da faixa real (no mobile o cartão vale
  // 85vw, não os 400px fixos — sem isso scroll/paginação desalinham).
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const measure = () => {
      const firstCard = trackRef.current?.firstElementChild as HTMLElement | null;
      const measured = firstCard?.offsetWidth ?? 0;
      setCardAdvance(measured > 0 ? measured : CARD_WIDTH);
      setPageCount(
        computePageCount(
          viewport.scrollWidth,
          viewport.clientWidth,
          measured > 0 ? measured : CARD_WIDTH
        )
      );
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Redução de páginas clampa apenas a POSIÇÃO (a seleção de chip não
  // depende de pageCount — products é estático).
  useEffect(() => {
    setPosition((current) => Math.max(0, Math.min(current, pageCount - 1)));
  }, [pageCount]);

  /** Rola a faixa programaticamente (o clamp final é nativo do scroll —
   *  pela largura da faixa real, não por páginas). */
  const programmaticScrollTo = (left: number) => {
    const viewport = viewportRef.current;
    if (!viewport || typeof viewport.scrollTo !== "function") return;
    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    viewport.scrollTo({
      left,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  /** Chips: selecionam o produto clicado SEM depender da posição de scroll.
   *  A rolagem usa clamp pela faixa (maxScroll), então o card do produto
   *  entra visível na viewport — mesmo sem ficar no canto esquerdo quando
   *  o fim da faixa é alcançado (ex.: os DOIS ÚLTIMOS produtos com viewport
   *  ~1248px — consequência honesta documentada no cabeçalho). */
  const goToProduct = (productIndex: number) => {
    const viewport = viewportRef.current;
    const maxScroll = viewport
      ? Math.max(0, viewport.scrollWidth - viewport.clientWidth)
      : 0;
    const left = Math.min(productIndex * cardAdvance, maxScroll);
    setSelected(productIndex);
    setPosition(
      Math.max(0, Math.min(Math.round(left / cardAdvance), pageCount - 1))
    );
    startProgrammaticScroll();
    programmaticScrollTo(left);
  };

  /** Paginação/setas: navegam POR POSIÇÃO (clamp nas pontas de pageCount) e
   *  selecionam o chip do first-visible (clamp ao último produto). */
  const goToPage = (page: number) => {
    const clamped = Math.max(0, Math.min(page, pageCount - 1));
    setPosition(clamped);
    setSelected(Math.max(0, Math.min(clamped, products.length - 1)));
    startProgrammaticScroll();
    programmaticScrollTo(clamped * cardAdvance);
  };

  // Fonte da verdade da posição: scroll MANUAL (arraste, trackpad, teclado)
  // re-sincroniza posição e seleção com a viewport real. Durante o guard
  // programático os eventos são ignorados (apenas rearma a janela de
  // silêncio — sem sobrescrever a seleção).
  const handleViewportScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (programmaticRef.current) {
      restartSettleTimer();
      return;
    }
    const firstVisible = Math.round(e.currentTarget.scrollLeft / cardAdvance);
    setPosition(Math.max(0, Math.min(firstVisible, pageCount - 1)));
    setSelected(Math.max(0, Math.min(firstVisible, products.length - 1)));
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
              onClick={() => goToProduct(i)}
              aria-current={i === selected ? "true" : undefined}
              data-testid="catalog-chip"
              className={`min-h-[44px] px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-[#1F3A5F] ${
                i === selected
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
            <p className="hidden md:block text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
              {t.catalogB.carouselSubtitle}
            </p>
          </div>

          {/* Viewport clipa a faixa — sem overflow-x de página (RN-011);
              scroll programático alinha por cartão com clamp nas pontas */}
          <div
            ref={viewportRef}
            className="overflow-x-hidden"
            data-testid="carousel-viewport"
            onScroll={handleViewportScroll}
          >
            <div ref={trackRef} data-testid="carousel-track" className="flex">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Setas + paginação numerada — tap targets ≥44px (RN-011) */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              type="button"
              onClick={() => goToPage(position - 1)}
              disabled={position === 0}
              aria-label={t.catalogB.carouselPrev}
              data-testid="carousel-prev"
              className="size-11 inline-flex items-center justify-center rounded-full border border-[#D9DDE3] text-[#1F3A5F] hover:border-[#1F3A5F] transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-[#1F3A5F]"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToPage(i)}
                aria-label={`${t.catalogB.paginationLabel} ${i + 1}`}
                aria-current={i === position ? "true" : undefined}
                data-testid="carousel-page"
                className={`size-11 inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors cursor-pointer motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-[#1F3A5F] ${
                  i === position
                    ? "bg-[#1F3A5F] text-white"
                    : "bg-white text-[#1F3A5F] border border-[#D9DDE3] hover:border-[#1F3A5F]"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              type="button"
              onClick={() => goToPage(position + 1)}
              disabled={position === pageCount - 1}
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
