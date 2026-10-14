import { Logo } from "../Logo";
import { useNavigate } from "react-router";
import { LandingNavConfig, LandingTheme } from "./types";
import { LandingCta } from "./LandingCta";
import { smoothScrollTo } from "../../utils/scroll";

// ── Navbar de produto das landings (RN-026 — dossiê g1 P-2) ────────
// Marca TechMinds (retorno à Main "/") + nome do produto + 4 âncoras
// locais + CTA contextual. SEM pills PT/EN/ES e SEM links globais —
// idioma global da RN-004 continua valendo (a landing não repete o
// seletor). Mobile: nav simples — marca (+ CTA) apenas, sem menu
// (PEND-012 — drawner padrão RN-012 só quando decidido).

interface ProductNavbarProps {
  productName: string;
  theme: LandingTheme;
  nav: LandingNavConfig;
  ctaTestId: string;
}

export function ProductNavbar({ productName, theme, nav, ctaTestId }: ProductNavbarProps) {
  const navigate = useNavigate();

  const handleBrandClick = () => {
    // Retorno à Main (RN-026 — marca TechMinds "/");
    navigate("/");
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
  };

  return (
    <header
      data-testid="landing-navbar"
      className={`${theme.navbarBg} sticky top-0 z-40 border-b ${theme.navDivider} backdrop-blur`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 lg:px-12 h-16 md:h-20">
        {/* Bloco de marca: TechMinds (→ "/") + nome do produto */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={handleBrandClick}
            data-testid="landing-brand"
            className={`flex items-center gap-2 ${theme.brandText} cursor-pointer`}
          >
            <Logo className="w-7 h-7" />
            <span className="text-lg font-bold whitespace-nowrap">TechMinds</span>
          </button>
          <span
            data-testid="landing-product-name"
            className={`text-sm font-semibold px-2.5 py-1 rounded-full border ${theme.productChip}`}
          >
            {productName}
          </span>
        </div>

        {/* Âncoras locais — desktop (design: some no mobile, sem menu) */}
        <nav
          data-testid="landing-nav-links"
          className={`hidden md:flex items-center gap-7 text-sm font-semibold ${theme.navLink}`}
        >
          {nav.links.map((link) => (
            <a
              key={link.sectionId}
              href={`#${link.sectionId}`}
              onClick={(e) => handleAnchorClick(e, link.sectionId)}
              className={`${theme.navLinkHover} transition-colors`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA contextual (RN-032 — gate por destino; microcopy na navbar
            quebraria a altura fixa — tooltip/title cobre o motivo).
            Estilo do frame (EL-7e6a13b8): padding 14×22, gap 12, semibold + ícone. */}
        <div className="hidden md:block">
          <LandingCta
            cta={nav.cta}
            microcopyHidden
            testId={ctaTestId}
            className={`${theme.accentBg} ${theme.accentText} inline-flex items-center gap-3 rounded-[8px] px-[22px] py-3.5 text-sm font-semibold transition-opacity`}
          >
            {nav.ctaIcon}
          </LandingCta>
        </div>
        {/* Mobile: mantém o CTA (conversão) — sem menu/nav */}
        <div className="md:hidden">
          <LandingCta
            cta={nav.cta}
            microcopyHidden
            testId={`${ctaTestId}-mobile`}
            className={`${theme.accentBg} ${theme.accentText} inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-opacity`}
          >
            {nav.ctaIcon && <span aria-hidden className="[&>svg]:size-4">{nav.ctaIcon}</span>}
          </LandingCta>
        </div>
      </div>
    </header>
  );
}
