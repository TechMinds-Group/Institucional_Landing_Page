import { Link } from "react-router";
import { Logo } from "../Logo";
import { mailtoHref } from "./ctaLinks";
import { LandingFooterConfig, LandingTheme } from "./types";
import { smoothScrollTo } from "../../utils/scroll";
import { useI18n } from "../../i18n/I18nContext";

// ── Rodapé TechMinds de produto (RN-025 — dossiê g1 P-1/P-7) ───────
// Estrutura B padrão (CR-005/RN-024) com colunas variáveis por
// produto: statement do produto + selo ("Um produto TechMinds" etc.)
// + colunas próprias + identidade empresarial real (ADR-005 —
// reutilizada de footerB em translations.ts) + © por produto.
// FasTo: coluna TechMinds inclui mailto comercial (RN-030/DEBT-003 —
// contacts.ts como fonte única). Nenhum wa.me em landings.

interface ProductFooterProps {
  theme: LandingTheme;
  footer: LandingFooterConfig;
  testId?: string;
}

export function ProductFooter({ theme, footer, testId = "landing-footer" }: ProductFooterProps) {
  const { t } = useI18n();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
  };

  const renderLink = (
    link: LandingFooterConfig["columns"][number]["links"][number],
    index: number
  ) => {
    if (link.kind === "text") {
      return (
        <span
          key={`${link.label}-${index}`}
          className={theme.footerMuted}
          style={{ lineHeight: "36px" }}
        >
          {link.label}
        </span>
      );
    }
    if (link.kind === "route") {
      return (
        <Link
          key={`${link.label}-${index}`}
          to={link.target as string}
          className={`${theme.footerMuted} ${theme.footerHover} transition-colors duration-150 text-[15px]`}
          style={{ lineHeight: "36px" }}
        >
          {link.label}
        </Link>
      );
    }
    if (link.kind === "mailto") {
      return (
        <a
          key={`${link.label}-${index}`}
          href={mailtoHref((link.target as string) || "")}
          className={`${theme.footerMuted} ${theme.footerHover} transition-colors duration-150 text-[15px]`}
          style={{ lineHeight: "36px" }}
        >
          {link.label}
        </a>
      );
    }
    // anchor — seção local
    return (
      <a
        key={`${link.label}-${index}`}
        href={`#${link.target}`}
        onClick={(e) => handleAnchorClick(e, link.target as string)}
        className={`${theme.footerMuted} ${theme.footerHover} transition-colors duration-150 text-[15px]`}
        style={{ lineHeight: "36px" }}
      >
        {link.label}
      </a>
    );
  };

  return (
    <footer
      id={`${testId}-anchor`}
      data-testid={testId}
      className={`${theme.footerBg} py-14 px-6 md:px-12 lg:px-24`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Topo: marca + statement do produto + selo */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Logo className="w-8 h-8" />
              <span className={`text-xl font-bold ${theme.footerTitle}`}>TechMinds</span>
            </div>
            <p className={`${theme.footerMuted} max-w-sm leading-relaxed`}>{footer.statement}</p>
            <p className={`mt-3 text-sm font-semibold ${theme.footerTitle}`}>{footer.tagline}</p>
            {footer.companyStatement && (
              <p className={`${theme.footerMuted} text-sm mt-1`}>{footer.companyStatement}</p>
            )}
          </div>

          {/* Colunas variáveis por produto */}
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {footer.columns.map((column) => (
              <div key={column.title} data-testid={`${testId}-column`}>
                <h3
                  className={`${theme.footerTitle} font-semibold text-sm uppercase tracking-widest mb-4`}
                >
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, index) => (
                    <li key={`${link.label}-${index}`} style={{ lineHeight: "36px" }}>
                      {renderLink(link, index)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Divisor */}
        <div className={`border-t ${theme.footerDivider} pt-6`} />

        {/* Identificação empresarial real (ADR-005) — dados de footerB */}
        <div
          data-testid={`${testId}-legal-id`}
          className={`text-center py-6 ${theme.footerMuted} text-sm`}
        >
          <p className={`font-semibold ${theme.footerIdentityStrong} mb-1.5`}>{t.footerB.legalName}</p>
          <p className="mb-1.5">{t.footerB.cnpj}</p>
          <p className={`${theme.footerMuted} text-xs mt-3`}>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
