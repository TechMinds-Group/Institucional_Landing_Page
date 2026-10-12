import { Link, useLocation, useNavigate } from "react-router";
import { Logo } from "./Logo";
import { useI18n } from "../i18n/I18nContext";
import { smoothScrollTo } from "../utils/scroll";
import { SECTION_IDS } from "../constants/anchors";

/**
 * Nav "Sistemas" do rodapé — os 5 produtos do canônico CR-001/ADR-012.
 * Gate por landing própria (CR-004/CR-008 — rotas do CR-006): os 4
 * produtos com página navegam para ela; Escola Conectada (sem landing)
 * aponta para a âncora do Catálogo (RN-019). Nomes de produto são marca —
 * não traduzem (mesma convenção de constants/catalog.ts).
 */
const SYSTEMS_LINKS: ReadonlyArray<
  { name: string; href: "/groom" | "/vibecut" | "/lumen" | "/fasto" } | { name: string; targetId: string }
> = [
  { name: "Groom", href: "/groom" },
  { name: "VibeCut", href: "/vibecut" },
  { name: "FasTo", href: "/fasto" },
  { name: "Lumen", href: "/lumen" },
  // Escola Conectada: sem landing própria — mantém a âncora do Catálogo (RN-032/CR-008).
  { name: "Escola Conectada", targetId: SECTION_IDS.catalogo },
];

/**
 * Rodapé do design B (RN-024-3 — frame #111:12609, fundo #111318, id
 * `contato`): marca + statement; navegação em 3 grupos — Sistemas (gate por
 * landing), Empresa (âncoras da Main) e Legal (páginas próprias, destino
 * padrão vibecut — fallback RN-007; **sem modal** — CR-005/ADR-013); divisor
 * #303342; identificação empresarial (CNPJ real — ADR-005) + © 2026.
 *
 * A linha "Contatos por área" foi removida na revisão de 11/10/2026
 * (duplicava os contatos do Company Trust). Redes sociais ausentes no
 * design B — não criar links (gap confirmado). Desktop-first (frame B
 * mobile inexistente): padding adaptado em telas menores conforme RN-011
 * (tap targets ≥44px, sem overflow-x).
 */
export function FooterB() {
  const { t } = useI18n();
  const { footerB } = t;
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === "/";

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

  return (
    <footer
      id={SECTION_IDS.contato}
      data-testid="footerb"
      className="bg-[#111318] py-14 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Topo: marca + statement · nav em 3 grupos */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-10 mb-10">
          {/* Marca + statement */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold text-white">TechMinds</span>
            </div>
            <p className="text-[#818BA1] max-w-sm leading-relaxed">
              {footerB.statement}
            </p>
          </div>

          {/* Navegação — Sistemas · Empresa · Legal */}
          <nav
            className="grid grid-cols-2 sm:grid-cols-3 gap-8"
          >
            {/* Sistemas — gate por landing própria */}
            <div data-testid="footerb-nav-systems">
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                {footerB.nav.systemsTitle}
              </h3>
              <ul className="space-y-3">
                {SYSTEMS_LINKS.map((system) => (
                  <li key={system.name} style={{ lineHeight: "36px" }}>
                    {"href" in system ? (
                      <Link
                        to={system.href}
                        data-testid={`footerb-link-${system.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-[#818BA1] hover:text-[#39B9B5] transition-colors duration-150 cursor-pointer text-[15px]"
                      >
                        {system.name}
                      </Link>
                    ) : (
                      <a
                        href={`#${system.targetId}`}
                        onClick={(e) => handleAnchorClick(e, system.targetId)}
                        data-testid={`footerb-link-${system.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-[#818BA1] hover:text-[#39B9B5] transition-colors duration-150 cursor-pointer text-[15px]"
                      >
                        {system.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa — âncoras das seções da Main */}
            <div data-testid="footerb-nav-company">
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                {footerB.nav.companyTitle}
              </h3>
              <ul className="space-y-3">
                <li style={{ lineHeight: "36px" }}>
                  <a
                    href={`#${SECTION_IDS.empresa}`}
                    onClick={(e) => handleAnchorClick(e, SECTION_IDS.empresa)}
                    className="text-[#818BA1] hover:text-[#39B9B5] transition-colors duration-150 cursor-pointer text-[15px]"
                  >
                    {footerB.nav.about}
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal — páginas próprias, sem modal (CR-005/ADR-013) */}
            <div data-testid="footerb-nav-legal">
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                {footerB.nav.legalTitle}
              </h3>
              <ul className="space-y-3">
                <li style={{ lineHeight: "36px" }}>
                  <Link
                    to="/terms-of-use/vibecut"
                    data-testid="footerb-link-terms"
                    className="text-[#818BA1] hover:text-[#39B9B5] transition-colors duration-150 cursor-pointer text-[15px]"
                  >
                    {footerB.nav.terms}
                  </Link>
                </li>
                <li style={{ lineHeight: "36px" }}>
                  <Link
                    to="/privacy/vibecut"
                    data-testid="footerb-link-privacy"
                    className="text-[#818BA1] hover:text-[#39B9B5] transition-colors duration-150 cursor-pointer text-[15px]"
                  >
                    {footerB.nav.privacy}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Divisor */}
        <div className="border-t border-[#303342] pt-6" />

        {/* Identificação empresarial — CNPJ real validado (ADR-005) */}
        <div
          data-testid="footerb-legal-id"
          className="text-center py-6 text-[#818BA1] text-sm"
        >
          <p className="font-semibold text-[#d1d5db] mb-1.5">
            {footerB.legalName}
          </p>
          <p className="mb-1.5">{footerB.cnpj}</p>
          <p className="text-[#818BA1] text-xs mt-3">{footerB.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
