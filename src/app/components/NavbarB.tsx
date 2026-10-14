import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X, ChevronRight, ArrowUpRight, Globe, Check } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { Language, languageCodes } from "../i18n/translations";
import { smoothScrollTo } from "../utils/scroll";
import { useLocation, useNavigate } from "react-router";
import { SECTION_IDS } from "../constants/anchors";

/**
 * Navbar do design B (frame #111:12609 — RN-022-1): barra fixa de 80px
 * com marca, links âncora e pills de idioma PT/EN/ES com ativo destacado.
 *
 * Contrato de IDs de âncora (constants/anchors.ts) — destinos decididos
 * em 11/10/2026: Soluções → #catalogo · Como trabalhamos → #como-funciona ·
 * Empresa → #empresa · Contato → #contato. As seções de destino são
 * entregues pelas features irmãs (RN-019/RN-021/RN-024); até lá o clique
 * é no-op seguro (smoothScrollTo ignora ID inexistente).
 *
 * i18n (RN-004): pills chamam o I18nContext existente — persistência em
 * localStorage['techminds-language'] e <html lang> garantidas pelo contexto.
 *
 * Drawer mobile (RN-012): permanece com a mesma estrutura, com os links
 * atualizados para o contrato de âncoras do design B (RN-024) — hero,
 * empresa (Company and trust), catalogo e contato (rodapé).
 */

const NAV_LINKS = [
  { key: "solutions", targetId: SECTION_IDS.catalogo },
  { key: "howWeWork", targetId: SECTION_IDS.comoFunciona },
  { key: "pilares", targetId: SECTION_IDS.pilares },
  { key: "company", targetId: SECTION_IDS.empresa },
] as const;

type NavLinkKey = (typeof NAV_LINKS)[number]["key"];

export function NavbarB() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === "/";

  // Lock body scroll when drawer is open (RN-012 — comportamento inalterado)
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const labels: Record<NavLinkKey, string> = {
    solutions: t.navB.solutions,
    howWeWork: t.navB.howWeWork,
    pilares: t.navB.pilares,
    company: t.navB.company,
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    if (!isMainPage) {
      navigate(`/#${sectionId}`);
      return;
    }
    smoothScrollTo(sectionId);
  };

  const handleLogoClick = () => {
    if (!isMainPage) {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Sidebar mobile (RN-012 — frame #59:3, redesign 14/10): painel
  // full-screen branco do design B — marca + X, navegação institucional
  // (contrato de âncoras: Soluções/Como trabalhamos/Empresa/Contato),
  // seletor de idioma PT/EN/ES com check, documentos legais e CTA.
  const sidebarLinks = [
    { label: t.navB.sidebarSolutions, sectionId: SECTION_IDS.catalogo },
    { label: t.navB.sidebarHowWeWork, sectionId: SECTION_IDS.comoFunciona },
    { label: t.navB.sidebarCompany, sectionId: SECTION_IDS.empresa },
    { label: t.navB.sidebarContact, sectionId: SECTION_IDS.contato },
  ];

  const handleDrawerNavClick = (sectionId: string) => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      if (!isMainPage) {
        navigate(`/#${sectionId}`);
      } else {
        smoothScrollTo(sectionId);
      }
    }, 250);
  };

  const handleDrawerLogoClick = () => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      if (!isMainPage) {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 250);
  };

  /** Documentos legais da sidebar → rotas internas (destino padrão vibecut). */
  const handleDrawerDocClick = (route: string) => {
    setIsDrawerOpen(false);
    setTimeout(() => navigate(route), 250);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-[#F7F8FC]/95 backdrop-blur-md border-b border-[#D9DDE3]">
        <div className="max-w-7xl mx-auto h-full px-6">
          <div className="flex h-full items-center justify-between">
            {/* Marca */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={handleLogoClick}
            >
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold text-[#1F3A5F]">TechMinds</span>
            </div>

            {/* Links âncora (desktop ≥ md — design B é desktop-first) */}
            <div className="hidden md:flex items-center gap-8" data-testid="navb-links">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={`#${link.targetId}`}
                  onClick={(e) => handleAnchorClick(e, link.targetId)}
                  className="text-[#4B5563] hover:text-[#1F3A5F] transition-colors cursor-pointer"
                >
                  {labels[link.key]}
                </a>
              ))}
            </div>

            {/* Pills de idioma (desktop) + hamburger (mobile) */}
            <div className="flex items-center">
              <div
                className="hidden md:flex items-center gap-1 rounded-full border border-[#D9DDE3] bg-white p-1"
                data-testid="navb-language-pills"
                role="group"
                aria-label="Language"
              >
                {(["pt", "en", "es"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    aria-pressed={language === lang}
                    className={`h-8 px-3 rounded-full text-sm font-semibold transition-colors cursor-pointer focus:outline-none ${
                      language === lang
                        ? "bg-[#1F3A5F] text-white"
                        : "text-[#4B5563] hover:text-[#1F3A5F]"
                    }`}
                  >
                    {languageCodes[lang]}
                  </button>
                ))}
              </div>

              {/* Mobile: hamburger — abre o drawer RN-012 (inalterado) */}
              <button
                className="md:hidden flex items-center justify-center w-11 h-11 text-[#1F3A5F] cursor-pointer focus:outline-none"
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar mobile (RN-012 — frame #59:3): backdrop + painel full-screen */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden bg-[#111318]/60"
          onClick={() => setIsDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className="fixed inset-0 z-[70] md:hidden flex flex-col bg-white border-r border-[#D9DDE3]"
        style={{
          transform: isDrawerOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 250ms ease-out",
          WebkitOverflowScrolling: "touch",
        }}
        data-testid="sidebar-mobile"
      >
        {/* Sidebar header (frame #59:27) */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-[#D9DDE3] shrink-0">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleDrawerLogoClick}
          >
            <Logo className="w-8 h-8" />
            <span className="text-xl font-bold text-[#1F3A5F]">TechMinds</span>
          </div>
          <button
            className="flex items-center justify-center w-11 h-11 rounded-[10px] border border-[#D9DDE3] text-[#1F3A5F] cursor-pointer focus:outline-none transition-colors hover:border-[#1F3A5F]"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-[22px] h-[22px]" />
          </button>
        </div>

        {/* Menu content (frame #59:35 — padding 28px 24px, gap 24) */}
        <div className="flex-1 overflow-y-auto px-6 pt-7 pb-2 flex flex-col gap-6">
          {/* Navegação institucional */}
          <div className="flex flex-col gap-3" data-testid="sidebar-nav">
            <p className="text-[13px] font-bold text-[#4B5563]">
              {t.navB.sidebarNavLabel}
            </p>
            <div className="flex flex-col">
              {sidebarLinks.map((link) => (
                <button
                  key={link.sectionId}
                  data-testid={`sidebar-link-${link.sectionId}`}
                  onClick={() => handleDrawerNavClick(link.sectionId)}
                  className="h-14 w-full flex items-center justify-between border-b border-[#D9DDE3] cursor-pointer focus:outline-none"
                >
                  <span className="text-[16px] font-semibold text-[#1F3A5F]">
                    {link.label}
                  </span>
                  <ChevronRight className="w-[18px] h-[18px] text-[#1F3A5F] shrink-0" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>

          {/* Seleção de idioma (frame #59:51) */}
          <div
            className="rounded-2xl border border-[#D9DDE3] bg-[#F3F5F7] p-4 flex flex-col gap-3"
            data-testid="sidebar-language"
            role="group"
            aria-label="Language"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-[18px] h-[18px] text-[#1F3A5F]" aria-hidden="true" />
              <span className="text-[13px] font-bold text-[#1F3A5F]">
                {t.navB.sidebarLangLabel}
              </span>
            </div>
            <div className="flex gap-2">
              {(["pt", "en", "es"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  aria-pressed={language === lang}
                  className={`flex-1 h-11 rounded-[10px] inline-flex items-center justify-center gap-1.5 text-sm font-semibold transition-colors cursor-pointer focus:outline-none ${
                    language === lang
                      ? "bg-[#1F3A5F] text-white"
                      : "bg-white border border-[#D9DDE3] text-[#4B5563] hover:border-[#1F3A5F]"
                  }`}
                >
                  {languageCodes[lang]}
                  {language === lang && <Check className="w-3.5 h-3.5" aria-hidden="true" />}
                </button>
              ))}
            </div>
          </div>

          {/* Documentos legais (frame #59:63) */}
          <div className="flex flex-col gap-2" data-testid="sidebar-docs">
            <p className="text-[13px] font-bold text-[#4B5563]">
              {t.navB.sidebarDocsLabel}
            </p>
            <div className="flex flex-col">
              <button
                data-testid="sidebar-doc-terms"
                onClick={() => handleDrawerDocClick("/terms-of-use")}
                className="h-11 w-full flex items-center justify-between cursor-pointer focus:outline-none"
              >
                <span className="text-sm text-[#4B5563]">
                  {t.footerB.nav.terms}
                </span>
                <ArrowUpRight className="w-[18px] h-[18px] text-[#4B5563] shrink-0" aria-hidden="true" />
              </button>
              <button
                data-testid="sidebar-doc-privacy"
                onClick={() => handleDrawerDocClick("/privacy")}
                className="h-11 w-full flex items-center justify-between cursor-pointer focus:outline-none"
              >
                <span className="text-sm text-[#4B5563]">
                  {t.footerB.nav.privacy}
                </span>
                <ArrowUpRight className="w-[18px] h-[18px] text-[#4B5563] shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar action (frame #59:72) — CTA primária */}
        <div className="px-6 pt-4 pb-10 shrink-0">
          <button
            onClick={() => handleDrawerNavClick(SECTION_IDS.catalogo)}
            data-testid="sidebar-cta"
            className="w-full h-12 rounded-[10px] bg-[#1F3A5F] text-white text-sm font-bold inline-flex items-center justify-center gap-2.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1F3A5F] focus:ring-offset-2 transition-colors hover:bg-[#16304f]"
          >
            {t.heroB.ctaAid}
            <ArrowUpRight className="w-[18px] h-[18px]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}
