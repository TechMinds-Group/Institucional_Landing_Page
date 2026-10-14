import type { ReactNode } from "react";
import { ArrowUp, CircleCheck } from "lucide-react";
import { NavbarB } from "../NavbarB";

/**
 * LegalShell (design B — frame #3:31384, extraído 12/10/2026).
 *
 * Chrome compartilhado das páginas legais (`/terms-of-use/:product` e
 * `/privacy/:product`): wrapper claro `#F7F8FC`, NavbarB fixa (80px — offset
 * `pt-20` no wrapper), header "Legal", tabs de produto em cards, layout de
 * leitura (TOC + documento oficial) e voltar-ao-topo (RN-008).
 *
 * A lógica fica nas páginas: tabs derivam do canônico CR-001 via
 * `pages/legalTabs.ts` (RN-007), scroll-spy no `≤150px` (RN-008), handlers de
 * navegação e corpos legais por idioma (i18n RN-004 — textos nunca alterados
 * pelo shell). Tipos estruturais para não acoplar o shell ao catálogo.
 */

export interface LegalTab {
  id: string;
  name: string;
  tag: string;
  lastUpdated: string;
  disabled: boolean;
}

export interface LegalSection {
  id: string;
  title: string;
}

export interface LegalShellProps {
  /** H1 do header (t.legal.termsTitle / privacyTitle — i18n RN-004). */
  title: string;
  subtitle: string;
  /** "Nesta página" (t.legal.onThisPage). */
  onThisPage: string;
  /** "Voltar ao topo" (title do botão — t.legal.backToTop). */
  backToTopTitle: string;
  tabs: LegalTab[];
  selectedTabId: string;
  onSelectTab: (id: string) => void;
  /** Label do pill "Disponível" (legalProductMeta.availableLabel). */
  availableLabel: string;
  sections: LegalSection[];
  activeSection: string;
  onSectionClick: (id: string) => void;
  /** Título do documento oficial = nome do produto selecionado (32px). */
  docTitle: string;
  /** "Última atualização: <date>" — label de legalProductMeta + vigência. */
  docLastUpdated: string;
  /** Troca de conteúdo entre tabs/idioma (fade 200ms — estado da página). */
  contentVisible: boolean;
  /** Cross-link entre as duas páginas (BC-3) — prefixo "Ver também:". */
  crossLinkPrefix: string;
  crossLinkText: string;
  crossLinkHref: string;
  onBackToTop: () => void;
  showBackToTop: boolean;
  footer: ReactNode;
  children: ReactNode;
}

export function LegalShell({
  title,
  subtitle,
  onThisPage,
  backToTopTitle,
  tabs,
  selectedTabId,
  onSelectTab,
  availableLabel,
  sections,
  activeSection,
  onSectionClick,
  docTitle,
  docLastUpdated,
  contentVisible,
  crossLinkPrefix,
  crossLinkText,
  crossLinkHref,
  onBackToTop,
  showBackToTop,
  footer,
  children,
}: LegalShellProps) {
  return (
    <div className="min-h-screen bg-[#F7F8FC] font-['Inter',sans-serif] pt-20">
      <NavbarB />

      {/* Header "Legal heading" — 48px Bold #1F3A5F (clamp ~32-40px mobile) */}
      <header
        id="legal-hero"
        className="flex flex-col items-stretch gap-6 px-6 pt-16 pb-10 lg:px-24"
      >
        <p className="text-[12px] font-bold uppercase tracking-wider text-[#1F3A5F]">
          Legal
        </p>
        <h1
          id="legal-hero-title"
          className="text-[clamp(2rem,4.5vw,3rem)] font-bold text-[#1F3A5F]"
        >
          {title}
        </h1>
        <p id="legal-hero-subtitle" className="text-[16px] text-[#4B5563]">
          {subtitle}
        </p>
      </header>

      {/* Tabs de produto — cards brancos (1 por produto, gap-4, grid 5) */}
      <div className="px-6 pb-12 lg:px-24">
        <div
          data-testid="legal-tabs-grid"
          className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:items-stretch"
        >
          {tabs.map((product) => {
            const isDisabled = product.disabled;
            const isPublished = !isDisabled;
            const isSelected = product.id === selectedTabId && isPublished;
            return (
              <button
                key={product.id}
                type="button"
                onClick={() => onSelectTab(product.id)}
                disabled={isDisabled}
                data-testid={`legal-tab-${product.id}`}
                className={`mx-auto flex w-full max-w-[420px] flex-col gap-3 rounded-[20px] border bg-white p-5 text-left transition-all duration-200 lg:mx-0 lg:max-w-none ${
                  isDisabled
                    ? "cursor-not-allowed border-[#D9DDE3]"
                    : isSelected
                      ? "cursor-pointer border-[#1F3A5F]"
                      : "cursor-pointer border-[#D9DDE3] hover:border-[#1F3A5F]"
                }`}
              >
                {/* Pill de disponibilidade legal ≠ status comercial (ADR-014) */}
                <span
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-semibold ${
                    isPublished
                      ? "bg-[rgba(19,45,36,0.05)] text-[#21664A]"
                      : "bg-[#F3F5F7] text-[#4B5563]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-[5px] w-[5px] rounded-full ${
                      isPublished ? "bg-[#72DDA7]" : "bg-[#D9DDE3]"
                    }`}
                  />
                  {isPublished ? availableLabel : product.lastUpdated}
                </span>

                {/* Nome + check do estado ativo (frame #3:31384) */}
                <h3
                  className={`flex items-center gap-2 text-[16px] font-semibold ${
                    isDisabled ? "text-[#4B5563]" : "text-[#1F3A5F]"
                  }`}
                >
                  {isSelected && (
                    <CircleCheck
                      aria-hidden="true"
                      className="h-[18px] w-[18px] shrink-0 text-[#1F3A5F]"
                    />
                  )}
                  <span>{product.name}</span>
                </h3>

                {/* Vigência */}
                <p className="text-[12px] text-[#4B5563]">{product.lastUpdated}</p>

                {/* Segmento (legalProductMeta — em todas as tabs) */}
                <p className="text-[12px] text-[#4B5563]">{product.tag}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Reading layout — TOC + documento (row gap-10; pb-22 = 88px) */}
      <div className="flex flex-col gap-10 px-6 pb-22 lg:flex-row lg:px-24">
        {/* TOC "Nesta página" — empilha acima do documento no mobile */}
        <aside className="w-full shrink-0 lg:w-[270px] lg:self-start">
          <div className="flex flex-col gap-5 rounded-2xl border border-[#D9DDE3] bg-white p-5">
            <p className="text-[13px] font-bold text-[#1F3A5F]">{onThisPage}</p>
            <nav className="flex flex-col">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => onSectionClick(section.id)}
                  className={`cursor-pointer rounded-lg border-l-2 px-3 py-2.5 text-left text-[12px] leading-[24px] transition-colors duration-150 ${
                    activeSection === section.id
                      ? "border-[#1F3A5F] bg-[#F3F5F7] font-semibold text-[#1F3A5F]"
                      : "border-transparent text-[#4B5563] hover:bg-[#F3F5F7]/60"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Documento oficial — card branco p-10 gap-8 flex-1 */}
        <main
          className={`flex min-w-0 flex-1 flex-col gap-8 rounded-[20px] border border-[#D9DDE3] bg-white p-10 transition-opacity duration-200 ${
            contentVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            <h2 className="text-[32px] font-bold text-[#1F3A5F]">{docTitle}</h2>
            <p className="text-[12px] text-[#4B5563]">{docLastUpdated}</p>
          </div>

          <div aria-hidden="true" className="h-px w-full bg-[#E5E7EB]" />

          {children}

          {/* Rodapé do card — divider + cross-link (BC-3) */}
          <div aria-hidden="true" className="h-px w-full bg-[#E5E7EB]" />
          <div className="flex items-center gap-2 text-[16px] font-semibold text-[#1F3A5F]">
            <span>{crossLinkPrefix}</span>
            <a
              href={crossLinkHref}
              className="cursor-pointer text-[#1F3A5F] transition-colors duration-150 hover:underline"
            >
              {crossLinkText}
            </a>
          </div>
        </main>
      </div>

      {/* Voltar-ao-topo (RN-008 — 44px tap target, aparece >300px scroll) */}
      <button
        type="button"
        onClick={onBackToTop}
        title={backToTopTitle}
        aria-hidden={!showBackToTop}
        className={`fixed bottom-6 right-6 z-50 flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full border border-[#D9DDE3] bg-white text-[#1F3A5F] transition-all duration-200 hover:bg-[#EAF0F7] ${
          showBackToTop ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
        }`}
      >
        <ArrowUp className="h-4 w-4" aria-hidden="true" />
      </button>

      {footer}
    </div>
  );
}
