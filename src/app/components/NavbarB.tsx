import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
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

  // Drawer mobile (RN-012) — links atualizados para o contrato de âncoras
  // do design B (constants/anchors.ts): Início → hero · Sobre → empresa
  // (Company and trust) · Produtos → catálogo · Contato → rodapé.
  const drawerLinks = [
    { label: t.nav.home, sectionId: SECTION_IDS.hero },
    { label: t.nav.about, sectionId: SECTION_IDS.empresa },
    { label: t.nav.products, sectionId: SECTION_IDS.catalogo },
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

      {/* Mobile Drawer Overlay (RN-012 — inalterado) */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer (RN-012 — inalterado) */}
      <div
        className="fixed top-0 right-0 h-full z-[70] md:hidden flex flex-col bg-[#111318]"
        style={{
          width: "min(80vw, 300px)",
          borderLeft: "1px solid rgba(91,200,192,0.2)",
          transform: isDrawerOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 250ms ease-out",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleDrawerLogoClick}
          >
            <Logo className="w-8 h-8" />
            <span className="text-xl font-bold text-white">TechMinds</span>
          </div>
          <button
            className="flex items-center justify-center w-11 h-11 text-white cursor-pointer focus:outline-none"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto">
          {drawerLinks.map((link, i) => (
            <button
              key={i}
              data-testid={`drawer-link-${link.sectionId}`}
              onClick={() => handleDrawerNavClick(link.sectionId)}
              className="w-full text-left px-6 text-gray-200 cursor-pointer transition-colors hover:text-[#5BC8C0] hover:bg-white/5"
              style={{
                height: "48px",
                fontSize: "16px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Bottom section: language + CTA */}
        <div className="px-5 py-6 border-t border-white/5 space-y-4">
          {/* Language Pills */}
          <div className="flex gap-2 justify-center">
            {(["pt", "en", "es"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`flex-1 cursor-pointer rounded-full transition-all duration-150 focus:outline-none`}
                style={{
                  height: "32px",
                  fontSize: "14px",
                  fontWeight: 600,
                  background:
                    language === lang
                      ? "linear-gradient(90deg, #7B5EA7, #5BC8C0)"
                      : "transparent",
                  border:
                    language === lang
                      ? "1px solid transparent"
                      : "1px solid rgba(91,200,192,0.35)",
                  color: language === lang ? "#fff" : "rgba(255,255,255,0.7)",
                }}
              >
                {languageCodes[lang]}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleDrawerNavClick(SECTION_IDS.catalogo)}
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] text-white font-semibold cursor-pointer focus:outline-none shadow-[0_4px_18px_rgba(123,94,167,0.55)]"
            style={{ fontSize: "15px" }}
          >
            {t.nav.getStarted}
          </button>
        </div>
      </div>
    </>
  );
}
