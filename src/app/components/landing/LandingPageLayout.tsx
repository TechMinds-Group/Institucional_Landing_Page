import { ReactNode, useEffect } from "react";
import { ProductNavbar } from "./ProductNavbar";
import { ProductFooter } from "./ProductFooter";
import { LandingFooterConfig, LandingNavConfig, LandingTheme } from "./types";
import { smoothScrollTo } from "../../utils/scroll";

// ── Plataforma comum das landings de produto (RN-025-1) ────────────
// Navbar de produto (RN-026) + main + Rodapé TechMinds de produto.
// Tema/props por produto (skin própria — dossiê g1 §1/§6; exceção
// deliberada: NÃO herda paleta da Main B). Flutuantes (voltar-ao-topo/
// WhatsApp) e ganchos RN-022 não entram nas landings (dossiê g1 §7).

interface LandingPageLayoutProps {
  productName: string;
  theme: LandingTheme;
  nav: LandingNavConfig;
  footer: LandingFooterConfig;
  /** Testid do CTA da navbar (único por landing). */
  navCtaTestId: string;
  children: ReactNode;
}

export function LandingPageLayout({
  productName,
  theme,
  nav,
  footer,
  navCtaTestId,
  children,
}: LandingPageLayoutProps) {
  // Hash na URL processado no mount (padrão MainPage — RN-011)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace("#", "");
      const timer = setTimeout(() => smoothScrollTo(sectionId), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className={`min-h-screen ${theme.pageBg} font-['Inter',sans-serif]`}>
      <ProductNavbar productName={productName} theme={theme} nav={nav} ctaTestId={navCtaTestId} />
      <main data-testid="landing-main">{children}</main>
      <ProductFooter theme={theme} footer={footer} />
    </div>
  );
}
