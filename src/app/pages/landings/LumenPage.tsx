import { BookOpenText, Search, Table2 } from "lucide-react";
import { LandingPageLayout } from "../../components/landing/LandingPageLayout";
import { LandingCta } from "../../components/landing/LandingCta";
import { LandingFaq } from "../../components/landing/LandingFaq";
import { BreakpointImage } from "../../components/landing/BreakpointImage";
import { LandingTheme } from "../../components/landing/types";
import { useI18n } from "../../i18n/I18nContext";
import { LANDING_SECTION_IDS } from "../../constants/anchors";
import esculturaDesk from "../../../imports/landings/lumen-escultura-livros-desk.png";
import esculturaMob from "../../../imports/landings/lumen-escultura-livros-mob.png";
import plataoDesk from "../../../imports/landings/lumen-retrato-platao-desk.png";
import plataoMob from "../../../imports/landings/lumen-retrato-platao-mob.png";
import maquiavelDesk from "../../../imports/landings/lumen-retrato-maquiavel-desk.png";
import maquiavelMob from "../../../imports/landings/lumen-retrato-maquiavel-mob.png";
import arendtDesk from "../../../imports/landings/lumen-retrato-arendt-desk.png";
import arendtMob from "../../../imports/landings/lumen-retrato-arendt-mob.png";

// ── Landing Lumen (/lumen) — RN-025-3 (UI_SPEC §2.6, 12 seções) ────
// Copy 1:1 do dossiê g1 §4–§4.5 · tema marfim/creme + navy/dourado,
// serif nos títulos · CTAs "Explorar o Lumen" e "Explore o catálogo
// completo" DESABILITADOS (PEND-011/RN-032 — microcopy) · mocks
// ilustrativos com dados fictícios marcados (RN-029) · stats 55/7/158/9
// com disclaimer obrigatório · FAQ accordion (RN-035).

const S = LANDING_SECTION_IDS.lumen;

const THEME: LandingTheme = {
  pageBg: "bg-[#FAF6EC]",
  titleFont: "font-serif",
  navbarBg: "bg-[#FAF6EC]/92",
  brandText: "text-[#1E2B4A]",
  productChip: "border-[#B08A2E]/50 text-[#1E2B4A] bg-[#B08A2E]/10",
  navLink: "text-[#3A4664]",
  navLinkHover: "hover:text-[#B08A2E]",
  navDivider: "border-[#E4DCC5]",
  accentBg: "bg-[#B08A2E]",
  accentText: "text-[#FAF6EC]",
  footerBg: "bg-[#1E2B4A]",
  footerTitle: "text-[#FAF6EC]",
  footerMuted: "text-[#A9B4CE]",
  footerHover: "hover:text-[#D9B23F]",
  footerDivider: "border-[#39466B]",
  footerIdentityStrong: "text-[#E8EDF8]",
};

function Eyebrow({ label }: { label: string }) {
  return <p className="text-xs font-bold tracking-[0.2em] text-[#B08A2E] uppercase">{label}</p>;
}

/** Radar político ilustrativo — dados FICTÍCIOS (RN-029/CNP mock). */
function RadarMock({ tags, label, note }: { tags: string[]; label: string; note: string }) {
  const center = 110;
  const radius = 80;
  const levels = [0.25, 0.5, 0.75, 1];
  const values = [0.72, 0.48, 0.34, 0.2, 0.1]; // pontuações de exemplo fixos
  const points = tags
    .map((_, i) => {
      const angle = (Math.PI * 2 * i) / tags.length - Math.PI / 2;
      const r = radius * values[i % values.length];
      return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
    })
    .join(" ");
  const ringCount = 5;
  return (
    <figure data-testid="lumen-radar" className="flex flex-col items-center gap-2">
      <svg viewBox="0 0 220 220" className="w-56 h-56" role="img" aria-label={label}>
        {levels.flatMap((level) =>
          Array.from({ length: ringCount }).map((_, i) => {
            const angle = (Math.PI * 2 * i) / ringCount - Math.PI / 2;
            const x = center + radius * level * Math.cos(angle);
            const y = center + radius * level * Math.sin(angle);
            return <circle key={`${level}-${i}`} cx={x} cy={y} r={1.6} fill="#C8B57B" />;
          })
        )}
        {Array.from({ length: ringCount }).map((_, i) => {
          const angle = (Math.PI * 2 * i) / ringCount - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="#E4DCC5" strokeWidth={1} />;
        })}
        <polygon points={points} fill="rgba(176,138,46,0.28)" stroke="#B08A2E" strokeWidth={2} />
      </svg>
      <figcaption className="text-xs text-[#7A6B3E]">{label} · {note}</figcaption>
    </figure>
  );
}

export function LumenPage() {
  const { t } = useI18n();
  const c = t.lumen;

  const fichaImgs = [
    { desk: plataoDesk, mob: plataoMob },
    { desk: maquiavelDesk, mob: maquiavelMob },
    { desk: arendtDesk, mob: arendtMob },
  ];

  return (
    <LandingPageLayout
      productName="Lumen"
      theme={THEME}
      nav={{
        links: [
          { label: c.nav.links[0], sectionId: S.acervo },
          { label: c.nav.links[1], sectionId: S.comoFunciona },
          { label: c.nav.links[2], sectionId: S.seuPerfil },
          { label: c.nav.links[3], sectionId: S.faq },
        ],
        cta: { label: c.nav.cta, kind: "disabled", reason: c.nav.ctaPending },
      }}
      footer={{
        statement: c.footer.statement,
        tagline: c.footer.tagline,
        columns: [
          {
            title: c.footer.exploreTitle,
            links: [
              { label: c.footer.exploreLinks[0], kind: "anchor", target: S.acervo },
              { label: c.footer.exploreLinks[1], kind: "anchor", target: S.comoFunciona },
              { label: c.footer.exploreLinks[2], kind: "anchor", target: S.seuPerfil },
              { label: c.footer.exploreLinks[3], kind: "anchor", target: S.faq },
            ],
          },
          {
            title: c.footer.productFeaturesTitle,
            links: c.footer.productFeatures.map((label) => ({ label, kind: "text" as const })),
          },
        ],
        copyright: c.footer.copyright,
      }}
      navCtaTestId="lumen-nav-cta"
    >
      {/* Apresentação — hero */}
      <section className="px-5 md:px-8 lg:px-12 pt-10 md:pt-16 pb-14">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-5 items-start">
            <span
              data-testid="lumen-status"
              className="text-xs font-bold px-3 py-1.5 rounded-full border border-[#B08A2E]/50 bg-[#B08A2E]/10 text-[#7A5C13] max-w-max"
            >
              {c.hero.statusChip}
            </span>
            <Eyebrow label={c.hero.eyebrow} />
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E2B4A] leading-tight ${THEME.titleFont}`}>
              {c.hero.headline}
            </h1>
            <p className="text-[#3A4664] leading-relaxed max-w-xl">{c.hero.paragraph}</p>
            <div className="flex flex-wrap gap-3" data-testid="lumen-hero-ctas">
              <LandingCta
                cta={{ label: c.hero.ctaExplore, kind: "disabled", reason: c.nav.ctaPending }}
                microcopy={c.nav.ctaPending}
                microcopyId="lumen-hero-cta-pending"
                testId="lumen-hero-cta-explore"
                className={`${THEME.accentBg} ${THEME.accentText} rounded-lg px-6 py-3 text-sm font-bold`}
              />
              <LandingCta
                cta={{ label: c.hero.ctaHow, kind: "anchor", target: S.comoFunciona }}
                testId="lumen-hero-cta-how"
                className="rounded-lg px-6 py-3 text-sm font-bold border border-[#1E2B4A]/30 text-[#1E2B4A]"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-[#E4DCC5] bg-white p-5 md:p-6">
            <BreakpointImage
              desk={esculturaDesk}
              mob={esculturaMob}
              alt={c.hero.cardCaption}
              className="w-full h-auto rounded-lg object-cover"
            />
            <p className="mt-3 text-base font-bold text-[#1E2B4A]">{c.hero.cardCaption}</p>
            <p className="mt-1 text-sm text-[#3A4664]">{c.hero.cardLine}</p>
          </div>
        </div>
      </section>

      {/* 1 Dimensões do acervo */}
      <section className="px-5 md:px-8 lg:px-12 py-12 border-t border-[#E4DCC5]">
        <div
          data-testid="lumen-stats"
          className="max-w-7xl mx-auto grid gap-6 grid-cols-2 md:grid-cols-4"
        >
          {c.stats.items.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className={`text-4xl md:text-5xl font-extrabold text-[#1E2B4A] ${THEME.titleFont}`}>
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-[#3A4664]">{stat.label}</span>
            </div>
          ))}
          <p className="col-span-2 md:col-span-4 text-xs text-[#7A6B3E] text-center max-w-2xl mx-auto" data-testid="lumen-stats-disclaimer">
            {c.stats.disclaimer}
          </p>
        </div>
      </section>

      {/* 2 Um acervo para explorar */}
      <section id={S.acervo} className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#E4DCC5]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Eyebrow label={c.acervo.eyebrow} />
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E2B4A] max-w-2xl ${THEME.titleFont}`}>
            {c.acervo.title}
          </h2>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#E4DCC5] text-[#3A4664] max-w-max">
            {c.acervo.chip}
          </span>
          <div className="grid gap-5 md:grid-cols-3" data-testid="lumen-pensadores">
            {c.acervo.cards.map((card, index) => (
              <article
                key={card.name}
                className="rounded-2xl border border-[#E4DCC5] bg-white overflow-hidden flex flex-col"
              >
                <BreakpointImage
                  desk={fichaImgs[index].desk}
                  mob={fichaImgs[index].mob}
                  alt={card.name}
                  className="w-full h-44 object-cover"
                />
                <div className="p-6 flex flex-col gap-1">
                  <p className="text-xs font-semibold text-[#B08A2E] uppercase tracking-wide">
                    {card.era} · {card.dates}
                  </p>
                  <p className="text-lg font-bold text-[#1E2B4A]">{card.name}</p>
                  <p className="mt-2 text-[10px] font-bold tracking-widest text-[#7A6B3E]">{card.workLabel}</p>
                  <p className="text-sm font-semibold text-[#1E2B4A]">
                    {card.work} · {card.workYear}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="flex flex-col items-start gap-1.5">
            <LandingCta
              cta={{ label: c.acervo.ctaCatalog, kind: "disabled", reason: c.acervo.catalogPending }}
              microcopy={c.acervo.catalogPending}
              microcopyId="lumen-catalog-pending"
              testId="lumen-cta-catalog"
              className="rounded-lg px-6 py-3 text-sm font-bold border border-[#1E2B4A]/30 text-[#1E2B4A]"
            />
          </div>
          <p className="text-xs text-[#7A6B3E] max-w-2xl">{c.acervo.disclaimer}</p>
        </div>
      </section>

      {/* 3 Como funciona */}
      <section id={S.comoFunciona} className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#E4DCC5]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E2B4A] max-w-2xl ${THEME.titleFont}`}>
            {c.howItWorks.title}
          </h2>
          <ol className="grid gap-5 md:grid-cols-4" data-testid="lumen-steps">
            {c.howItWorks.steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-[#E4DCC5] bg-white p-6 flex flex-col gap-2">
                <span className="text-xs font-bold text-[#B08A2E] tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-[#1E2B4A]">{step.title}</h3>
                <p className="text-sm text-[#3A4664] leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4 Busca e organização */}
      <section className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#E4DCC5]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Eyebrow label={c.busca.eyebrow} />
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E2B4A] max-w-2xl ${THEME.titleFont}`}>
            {c.busca.title}
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {c.busca.blocks.map((block) => (
              <article key={block.title} className="rounded-2xl border border-[#E4DCC5] bg-white p-6">
                <Search size={18} className="text-[#B08A2E]" />
                <h3 className="mt-3 text-base font-bold text-[#1E2B4A]">{block.title}</h3>
                <p className="mt-2 text-sm text-[#3A4664] leading-relaxed">{block.description}</p>
              </article>
            ))}
          </div>
          {/* Mock ilustrativo — dados de exemplo marcados */}
          <div
            data-testid="lumen-search-mock"
            className="rounded-2xl border border-[#E4DCC5] bg-white p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-sm font-bold text-[#1E2B4A]">{c.busca.mockTitle}</p>
              <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#FAF6EC] border border-[#E4DCC5] text-[#7A6B3E]">
                {c.perfil.visualNote.split("·")[0]}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-[#E4DCC5] px-3 py-2 flex-1 max-w-md bg-[#FAF6EC]">
                <Search size={14} className="text-[#7A6B3E]" />
                <span className="text-sm text-[#3A4664]" data-testid="lumen-mock-query">
                  {c.busca.mockQuery}
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-[#E4DCC5] p-4 flex flex-col gap-2">
              <p className="text-base font-bold text-[#1E2B4A]">{c.busca.mockResult}</p>
              <p className="text-xs text-[#3A4664]">{c.busca.mockAuthor}</p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full border border-[#B08A2E]/50 text-[#B08A2E]" data-testid="lumen-mock-status">
                  {c.busca.mockStatus}
                </span>
                <span className="text-xs text-[#7A6B3E]" data-testid="lumen-mock-record">{c.busca.mockRecord}</span>
                <span className="text-xs border border-[#E4DCC5] rounded-lg px-3 py-1.5 text-[#7A6B3E]" data-testid="lumen-mock-download">
                  {c.busca.mockDownload}
                </span>
                <span className="text-xs font-bold text-[#FAF6EC] bg-[#B08A2E] rounded-lg px-3 py-1.5">{c.busca.mockProfileCta}</span>
              </div>
            </div>
            <p className="text-xs text-[#7A6B3E]">{c.busca.mockDisclaimer}</p>
          </div>
        </div>
      </section>

      {/* 5 Perfil político-filosófico */}
      <section id={S.seuPerfil} className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#E4DCC5]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Eyebrow label={c.perfil.eyebrow} />
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E2B4A] max-w-2xl ${THEME.titleFont}`}>
            {c.perfil.title}
          </h2>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="rounded-2xl border border-[#E4DCC5] bg-white p-6 flex flex-col gap-4">
              <RadarMock tags={c.perfil.radarTags} label={c.perfil.radarLabel} note={c.perfil.visualNote} />
              <div className="flex flex-wrap gap-2">
                {c.perfil.radarTags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-[#E4DCC5] text-[#3A4664]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[#E4DCC5] bg-white p-6 flex flex-col gap-4" data-testid="lumen-axes">
              <p className="text-sm font-bold text-[#1E2B4A]">{c.perfil.axesTitle}</p>
              {c.perfil.axes.map((axis, index) => (
                <div key={axis} className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-[#3A4664]">{axis}</span>
                    <span className="text-xs text-[#7A6B3E]">{[42, 68, 25][index]}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#FAF6EC] border border-[#E4DCC5]">
                    <div
                      className="h-full rounded-full bg-[#B08A2E]/70"
                      style={{ width: `${[42, 68, 25][index]}%` }}
                    />
                  </div>
                </div>
              ))}
              <span className="text-xs text-[#7A6B3E]">{c.perfil.visualNote}</span>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {c.perfil.states.map((state) => (
              <article key={state.title} className="rounded-2xl border border-[#E4DCC5] bg-[#FAF6EC] p-5">
                <h3 className="text-sm font-bold text-[#1E2B4A]">{state.title}</h3>
                <p className="mt-1 text-sm text-[#3A4664] leading-relaxed">{state.description}</p>
              </article>
            ))}
          </div>
          <p className="text-sm font-semibold text-[#1E2B4A] max-w-2xl" data-testid="lumen-perfil-disclaimer">
            {c.perfil.disclaimer}
          </p>
        </div>
      </section>

      {/* 6 Diversificação de leituras */}
      <section className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#E4DCC5]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Eyebrow label={c.diversificacao.eyebrow} />
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E2B4A] max-w-2xl ${THEME.titleFont}`}>
            {c.diversificacao.title}
          </h2>
          <div className="flex flex-col gap-1.5 max-w-2xl">
            <p className="text-sm text-[#3A4664] leading-relaxed" data-testid="lumen-diversificacao-intro">
              {c.diversificacao.intro}
            </p>
            <p className="text-xs font-bold text-[#B08A2E]">{c.diversificacao.counts}</p>
            <p className="text-xs text-[#3A4664]">{c.diversificacao.rule}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3" data-testid="lumen-diversificacao-cards">
            {c.diversificacao.cards.map((card) => (
              <article key={card.name} className="rounded-2xl border border-[#E4DCC5] bg-white p-6 flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest text-[#7A6B3E] uppercase">{card.era}</span>
                <p className="text-base font-bold text-[#1E2B4A]">{card.name}</p>
                <p className="text-sm italic text-[#3A4664]">{card.work}</p>
              </article>
            ))}
          </div>
          <p className="text-xs text-[#7A6B3E]" data-testid="lumen-diversificacao-insufficient">
            {c.diversificacao.insufficient}
          </p>
        </div>
      </section>

      {/* 7 Exportação em Excel */}
      <section className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#E4DCC5]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Eyebrow label={c.excel.eyebrow} />
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E2B4A] max-w-2xl ${THEME.titleFont}`}>
            {c.excel.title}
          </h2>
          <div className="grid gap-4 md:grid-cols-3" data-testid="lumen-excel-scopes">
            {c.excel.scopes.map((scope) => (
              <div
                key={scope}
                className="rounded-2xl border border-[#E4DCC5] bg-white p-5 flex items-center gap-3"
              >
                <Table2 size={18} className="text-[#B08A2E]" />
                <p className="text-sm font-bold text-[#1E2B4A]">{scope}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#E4DCC5] bg-white p-6 flex flex-col gap-3" data-testid="lumen-excel-mock">
            <div className="flex items-center gap-2 text-xs text-[#7A6B3E]">
              <span className="px-2 py-1 rounded-t-md bg-[#B08A2E]/15 border border-[#E4DCC5] font-semibold text-[#7A6B3E]">
                {c.excel.scopes[0]}
              </span>
              <span className="px-2 py-1">{c.excel.scopes[1]}</span>
              <span className="px-2 py-1">{c.excel.scopes[2]}</span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#B08A2E]">{c.excel.tableTitle}</p>
            <ul className="grid gap-2 text-sm text-[#1E2B4A]">
              {c.excel.rows.map((row) => (
                <li key={row} className="border border-[#E4DCC5] rounded-lg px-3 py-2">
                  {row}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#7A6B3E]">{c.excel.footer}</p>
            <p className="text-xs text-[#3A4664]">{c.excel.expl}</p>
          </div>
        </div>
      </section>

      {/* 8 Privacidade e dados locais */}
      <section className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#E4DCC5]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Eyebrow label={c.privacidade.eyebrow} />
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E2B4A] max-w-2xl ${THEME.titleFont}`}>
            {c.privacidade.title}
          </h2>
          <p className="text-xl md:text-2xl font-bold text-[#B08A2E]" data-testid="lumen-privacidade-highlight">
            {c.privacidade.highlight}
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {c.privacidade.blocks.map((block) => (
              <article key={block.title} className="rounded-2xl border border-[#E4DCC5] bg-white p-6">
                <BookOpenText size={18} className="text-[#B08A2E]" />
                <h3 className="mt-3 text-base font-bold text-[#1E2B4A]">{block.title}</h3>
                <p className="mt-2 text-sm text-[#3A4664] leading-relaxed">{block.description}</p>
              </article>
            ))}
          </div>
          <p className="text-xs text-[#7A6B3E] max-w-2xl">{c.privacidade.note}</p>
        </div>
      </section>

      {/* 9 FAQ */}
      <section id={S.faq} className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#E4DCC5]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Eyebrow label={c.faq.eyebrow} />
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E2B4A] max-w-2xl ${THEME.titleFont}`}>
            {c.faq.title}
          </h2>
          <p className="text-[#3A4664] max-w-2xl">{c.faq.support}</p>
          <LandingFaq
            items={c.faq.items}
            testId="lumen-faq"
            itemVariants="border-[#E4DCC5] bg-white"
            questionVariants="text-[#1E2B4A] text-base"
            answerVariants="text-[#3A4664] text-sm"
            iconVariants="text-[#B08A2E]"
          />
        </div>
      </section>

      {/* Convite à exploração */}
      <section className="px-5 md:px-8 lg:px-12 py-16 border-t border-[#E4DCC5]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 text-center">
          <Eyebrow label={c.invite.eyebrow} />
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E2B4A] max-w-2xl ${THEME.titleFont}`}>
            {c.invite.title}
          </h2>
          <p className="text-[#3A4664] max-w-2xl">{c.invite.text}</p>
          <LandingCta
            cta={{ label: c.invite.ctaExplore, kind: "disabled", reason: c.nav.ctaPending }}
            microcopy={c.nav.ctaPending}
            microcopyId="lumen-invite-pending"
            testId="lumen-invite-cta-explore"
            className={`${THEME.accentBg} ${THEME.accentText} rounded-lg px-6 py-3 text-sm font-bold`}
          />
          <p className="text-xs text-[#7A6B3E]">{c.invite.note}</p>
        </div>
      </section>
    </LandingPageLayout>
  );
}
