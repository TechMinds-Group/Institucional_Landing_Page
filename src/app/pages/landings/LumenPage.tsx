import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Eye,
  HardDrive,
  Info,
  ListChecks,
  Search,
  SearchCheck,
  ShieldCheck,
  Shuffle,
  SlidersHorizontal,
  Bookmark,
  Table2,
} from "lucide-react";
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
// Alinhada ao frame desktop #101:13380 / mobile #101:13874: hero e
// seções alternando navy #0F1E35 / ivory #F2EEE2 / off-white #FBF9F3,
// dourado #C9A84C, Playfair Display nos títulos, eyebrow editorial com
// traço. Copy 1:1 do dossiê g1 §4–§4.5 (RN-004/RN-029/RN-031) · CTAs
// "Explorar o Lumen" e "Explore o catálogo completo" DESABILITADOS
// (PEND-011/RN-032 — o frame mostra botão ativo, mas o gate vence) ·
// mocks ilustrativos com dados fictícios marcados (RN-029) · stats
// 55/7/158/9 com disclaimer obrigatório · FAQ accordion (RN-035).

const S = LANDING_SECTION_IDS.lumen;

const THEME: LandingTheme = {
  pageBg: "bg-[#F2EEE2]",
  titleFont: "font-['Playfair_Display',Georgia,serif]",
  navbarBg: "bg-[#0F1E35]/95",
  brandText: "text-[#F2EEE2]",
  productChip: "border-[#C9A84C]/55 text-[#C9A84C] bg-[#212429]",
  navLink: "text-[#F2EEE2]",
  navLinkHover: "hover:text-[#C9A84C]",
  navDivider: "border-[#34435A]",
  accentBg: "bg-[#C9A84C]",
  accentText: "text-[#0F1E35]",
  footerBg: "bg-[#0F1E35]",
  footerTitle: "text-[#F2EEE2]",
  footerMuted: "text-[#8A9BB8]",
  footerHover: "hover:text-[#C9A84C]",
  footerDivider: "border-[#34435A]",
  footerIdentityStrong: "text-[#F2EEE2]",
};

// Botões do frame: raio 8, padding 14×22, Inter 14 semibold.
const BTN_GOLD =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-[#C9A84C] px-[22px] py-3.5 text-sm font-semibold text-[#0F1E35]";
const BTN_NAVY_OUTLINE =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-[#34435A] px-[22px] py-3.5 text-sm font-semibold text-[#F2EEE2]";
const BTN_LIGHT_OUTLINE =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-[#D7D3C8] px-[22px] py-3.5 text-sm font-semibold text-[#0F1E35]";

/** Padding vertical do frame: 48px mobile → 88px desktop. */
const SECTION = "px-5 py-12 md:px-8 md:py-16 lg:px-12 lg:py-[88px]";

/** Eyebrow editorial do frame: traço 24×1 dourado + 11px uppercase. */
function Eyebrow({ label, tone }: { label: string; tone: "gold" | "navy" }) {
  return (
    <p className="flex items-center gap-3">
      <span aria-hidden className="h-px w-6 shrink-0 bg-[#C9A84C]" />
      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.1455em] ${
          tone === "gold" ? "text-[#C9A84C]" : "text-[#0F1E35]"
        }`}
      >
        {label}
      </span>
    </p>
  );
}

/** Intro padrão de seção: eyebrow + H2 Playfair 44/1.15 + suporte. */
function SectionHeading({
  eyebrow,
  title,
  support,
  tone,
}: {
  eyebrow?: string;
  title: string;
  support?: string;
  tone: "gold" | "navy";
}) {
  const onNavy = tone === "gold";
  return (
    <div className="flex flex-col gap-4">
      {eyebrow && <Eyebrow tone={tone} label={eyebrow} />}
      <h2
        className={`${THEME.titleFont} max-w-2xl text-3xl leading-[1.15] tracking-[-0.0136em] md:text-4xl lg:text-[44px] ${
          onNavy ? "text-[#F2EEE2]" : "text-[#0F1E35]"
        }`}
      >
        {title}
      </h2>
      {support && (
        <p className={`max-w-2xl leading-relaxed ${onNavy ? "text-[#8A9BB8]" : "text-[#48566B]"}`}>
          {support}
        </p>
      )}
    </div>
  );
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
    <figure data-testid="lumen-radar" className="flex flex-col items-center gap-3">
      <svg viewBox="0 0 220 220" className="h-56 w-56" role="img" aria-label={label}>
        {levels.flatMap((level) =>
          Array.from({ length: ringCount }).map((_, i) => {
            const angle = (Math.PI * 2 * i) / ringCount - Math.PI / 2;
            const x = center + radius * level * Math.cos(angle);
            const y = center + radius * level * Math.sin(angle);
            return <circle key={`${level}-${i}`} cx={x} cy={y} r={1.6} fill="#C9A84C" />;
          })
        )}
        {Array.from({ length: ringCount }).map((_, i) => {
          const angle = (Math.PI * 2 * i) / ringCount - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="#34435A" strokeWidth={1} />;
        })}
        <polygon points={points} fill="rgba(201,168,76,0.28)" stroke="#C9A84C" strokeWidth={2} />
      </svg>
      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-[#34435A] px-2.5 py-1 text-xs text-[#8A9BB8]">
            {tag}
          </span>
        ))}
      </div>
      <figcaption className="text-center text-xs text-[#8A9BB8]">
        {label} · {note}
      </figcaption>
    </figure>
  );
}

const STEP_ICONS = [Search, Bookmark, Eye, Shuffle];
const BUSCA_ICONS = [Search, SlidersHorizontal, ListChecks];
const PRIV_ICONS = [HardDrive, SearchCheck, ShieldCheck];

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
      {/* Apresentação — hero navy (frame: "Apresentação do Lumen") */}
      <section className="bg-[#0F1E35]">
        <div className="max-w-7xl mx-auto grid gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:py-20">
          <div className="flex flex-col items-start gap-6">
            <Eyebrow tone="gold" label={c.hero.eyebrow} />
            <h1
              className={`${THEME.titleFont} text-4xl leading-[1.08] tracking-[-0.0197em] text-[#F2EEE2] md:text-5xl lg:text-[64px]`}
            >
              {c.hero.headline}
            </h1>
            <p className="max-w-xl leading-relaxed text-[#8A9BB8]">{c.hero.paragraph}</p>
            <div className="flex flex-col items-start gap-2.5" data-testid="lumen-hero-ctas">
              <div className="flex flex-wrap items-center gap-3">
                <LandingCta
                  cta={{ label: c.hero.ctaExplore, kind: "disabled", reason: c.nav.ctaPending }}
                  microcopy={c.nav.ctaPending}
                  microcopyId="lumen-hero-cta-pending"
                  microcopyHidden
                  testId="lumen-hero-cta-explore"
                  className={BTN_GOLD}
                >
                  <ArrowUpRight size={18} aria-hidden />
                </LandingCta>
                <LandingCta
                  cta={{ label: c.hero.ctaHow, kind: "anchor", target: S.comoFunciona }}
                  testId="lumen-hero-cta-how"
                  className={BTN_NAVY_OUTLINE}
                >
                  <ArrowDown size={18} aria-hidden />
                </LandingCta>
              </div>
              {/* Microcopy do gate (RN-032) sob a linha de botões — frame #101:13395 */}
              <p
                id="lumen-hero-cta-pending"
                data-testid="lumen-hero-cta-explore-microcopy"
                className="max-w-md text-xs leading-relaxed text-[#8A9BB8]"
              >
                {c.nav.ctaPending}
              </p>
            </div>
            {/* "Natureza do produto" do frame (mobile #101:13897) */}
            <p
              data-testid="lumen-status"
              className="flex items-center gap-2 text-[13px] leading-relaxed text-[#8A9BB8]"
            >
              <BookOpen size={16} aria-hidden className="shrink-0 text-[#C9A84C]" />
              {c.hero.statusChip}
            </p>
          </div>
          <figure className="overflow-hidden rounded-xl border border-[#34435A]">
            <BreakpointImage
              desk={esculturaDesk}
              mob={esculturaMob}
              alt={c.hero.cardCaption}
              className="h-64 w-full object-cover md:h-80 lg:h-[420px]"
            />
            <figcaption className="flex flex-col gap-2 border-t border-[#34435A] bg-[#182A43] p-6">
              <p className={`${THEME.titleFont} text-xl text-[#F2EEE2] md:text-2xl`}>{c.hero.cardCaption}</p>
              <p className="text-sm text-[#8A9BB8]">{c.hero.cardLine}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 1 Dimensões do acervo — strip ivory (frame #101:13422) */}
      <section className="border-b border-[#D7D3C8] bg-[#F2EEE2] px-5 py-10 md:px-8 lg:px-12">
        <div
          data-testid="lumen-stats"
          className="max-w-7xl mx-auto grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4"
        >
          {c.stats.items.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <span className={`${THEME.titleFont} text-4xl text-[#0F1E35] md:text-5xl`}>{stat.value}</span>
              <span className="text-sm font-medium text-[#48566B]">{stat.label}</span>
            </div>
          ))}
          <p
            className="col-span-2 max-w-2xl text-xs leading-relaxed text-[#48566B] md:col-span-4"
            data-testid="lumen-stats-disclaimer"
          >
            {c.stats.disclaimer}
          </p>
        </div>
      </section>

      {/* 2 Um acervo para explorar — off-white (frame #101:13438) */}
      <section id={S.acervo} className={`bg-[#FBF9F3] ${SECTION}`}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_245px] lg:items-end lg:gap-8">
            <SectionHeading eyebrow={c.acervo.eyebrow} title={c.acervo.title} tone="navy" />
            <p className={`${THEME.titleFont} text-xl italic leading-[1.5] text-[#48566B] lg:justify-self-end`}>
              {c.acervo.chip}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3" data-testid="lumen-pensadores">
            {c.acervo.cards.map((card, index) => (
              <article
                key={card.name}
                className="flex flex-col overflow-hidden rounded-xl border border-[#D7D3C8] bg-[#FBF9F3] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <BreakpointImage
                  desk={fichaImgs[index].desk}
                  mob={fichaImgs[index].mob}
                  alt={card.name}
                  className="h-44 w-full object-cover md:h-[250px]"
                />
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#C9A84C]">
                    {card.era} · {card.dates}
                  </p>
                  <p className={`${THEME.titleFont} text-2xl text-[#0F1E35]`}>{card.name}</p>
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-bold tracking-widest text-[#48566B]">{card.workLabel}</p>
                    <p className="text-sm font-semibold text-[#0F1E35]">
                      {card.work} · {card.workYear}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
            <p className="max-w-2xl text-sm leading-relaxed text-[#48566B]">{c.acervo.disclaimer}</p>
            <LandingCta
              cta={{ label: c.acervo.ctaCatalog, kind: "disabled", reason: c.acervo.catalogPending }}
              microcopy={c.acervo.catalogPending}
              microcopyId="lumen-catalog-pending"
              testId="lumen-cta-catalog"
              className={BTN_LIGHT_OUTLINE}
            >
              <ArrowRight size={18} aria-hidden />
            </LandingCta>
          </div>
        </div>
      </section>

      {/* 3 Como funciona — navy (frame #101:13499, etapas sem cards) */}
      <section id={S.comoFunciona} className={`bg-[#0F1E35] ${SECTION}`}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
          <SectionHeading title={c.howItWorks.title} tone="gold" />
          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" data-testid="lumen-steps">
            {c.howItWorks.steps.map((step, index) => {
              const Icon = STEP_ICONS[index];
              return (
                <li key={step.title} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className={`${THEME.titleFont} text-3xl text-[#C9A84C]`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden className="h-px flex-1 bg-[#34435A]" />
                    {Icon && <Icon size={22} aria-hidden className="shrink-0 text-[#C9A84C]" />}
                  </div>
                  <h3 className="text-xl font-semibold text-[#F2EEE2]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8A9BB8]">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 4 Busca e organização — ivory (frame #101:13534, mock 550px) */}
      <section className={`bg-[#F2EEE2] ${SECTION}`}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,550px)] lg:items-center lg:gap-16">
            <div className="flex flex-col gap-7">
              <SectionHeading eyebrow={c.busca.eyebrow} title={c.busca.title} tone="navy" />
              <div className="flex flex-col gap-6">
                {c.busca.blocks.map((block, index) => {
                  const Icon = BUSCA_ICONS[index];
                  return (
                    <article key={block.title} className="flex gap-4">
                      {Icon && <Icon size={18} aria-hidden className="mt-0.5 shrink-0 text-[#C9A84C]" />}
                      <div className="flex flex-col gap-1">
                        <h3 className="text-base font-semibold text-[#0F1E35]">{block.title}</h3>
                        <p className="text-sm leading-relaxed text-[#48566B]">{block.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            {/* Mock ilustrativo — dados de exemplo marcados */}
            <div
              data-testid="lumen-search-mock"
              className="flex flex-col gap-5 rounded-xl border border-[#D7D3C8] bg-[#FBF9F3] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] md:p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm font-bold text-[#0F1E35]">{c.busca.mockTitle}</p>
                <span className="rounded bg-[#E9DFC1] px-2.5 py-1.5 text-[11px] font-semibold text-[#0F1E35]">
                  {c.perfil.visualNote.split("·")[0]}
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-[#D7D3C8] px-3.5 py-3">
                <Search size={16} aria-hidden className="shrink-0 text-[#48566B]" />
                <span className="text-sm text-[#0F1E35]" data-testid="lumen-mock-query">
                  {c.busca.mockQuery}
                </span>
              </div>
              <div className="flex flex-col gap-4 rounded-lg bg-[#F2EEE2] p-5">
                <div className="flex flex-col gap-1">
                  <p className={`${THEME.titleFont} text-lg text-[#0F1E35]`}>{c.busca.mockResult}</p>
                  <p className="text-xs text-[#48566B]">{c.busca.mockAuthor}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span
                    className="rounded-full border border-[#C9A84C] px-2.5 py-1 text-xs font-semibold text-[#8A6D1F]"
                    data-testid="lumen-mock-status"
                  >
                    {c.busca.mockStatus}
                  </span>
                  <span className="text-xs text-[#48566B]" data-testid="lumen-mock-record">
                    {c.busca.mockRecord}
                  </span>
                  <span
                    className="rounded-lg border border-[#D7D3C8] px-3 py-1.5 text-xs text-[#48566B]"
                    data-testid="lumen-mock-download"
                  >
                    {c.busca.mockDownload}
                  </span>
                  <span className="rounded-lg bg-[#C9A84C] px-3 py-1.5 text-xs font-bold text-[#0F1E35]">
                    {c.busca.mockProfileCta}
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#48566B]">{c.busca.mockDisclaimer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Perfil político-filosófico — navy (frame #101:13601, card 182A43) */}
      <section id={S.seuPerfil} className={`bg-[#0F1E35] ${SECTION}`}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,550px)] lg:items-center lg:gap-16">
            <div className="flex flex-col gap-7">
              <SectionHeading eyebrow={c.perfil.eyebrow} title={c.perfil.title} tone="gold" />
              <p
                className="max-w-xl leading-relaxed text-[#8A9BB8]"
                data-testid="lumen-perfil-disclaimer"
              >
                {c.perfil.disclaimer}
              </p>
            </div>
            <div className="flex flex-col gap-5 rounded-xl border border-[#34435A] bg-[#182A43] p-6 md:p-7">
              <RadarMock tags={c.perfil.radarTags} label={c.perfil.radarLabel} note={c.perfil.visualNote} />
              <div aria-hidden className="h-px bg-[#34435A]" />
              <div className="flex flex-col gap-3" data-testid="lumen-axes">
                <p className="text-sm font-semibold text-[#F2EEE2]">{c.perfil.axesTitle}</p>
                {c.perfil.axes.map((axis, index) => (
                  <div key={axis} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-[#F2EEE2]">{axis}</span>
                      <span className="text-xs text-[#8A9BB8]">{[42, 68, 25][index]}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#34435A]">
                      <div
                        className="h-full rounded-full bg-[#C9A84C]"
                        style={{ width: `${[42, 68, 25][index]}%` }}
                      />
                    </div>
                  </div>
                ))}
                <span className="text-xs text-[#8A9BB8]">{c.perfil.visualNote}</span>
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {c.perfil.states.map((state) => (
              <article key={state.title} className="flex flex-col gap-2 rounded-lg border border-[#34435A] p-5">
                <h3 className="text-base font-semibold text-[#F2EEE2]">{state.title}</h3>
                <p className="text-sm leading-relaxed text-[#8A9BB8]">{state.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Diversificação de leituras — off-white (frame #101:13655) */}
      <section className={`bg-[#FBF9F3] ${SECTION}`}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,550px)] lg:items-center lg:gap-16">
            <div className="flex flex-col gap-6">
              <SectionHeading eyebrow={c.diversificacao.eyebrow} title={c.diversificacao.title} tone="navy" />
              <p className="max-w-2xl leading-relaxed text-[#48566B]" data-testid="lumen-diversificacao-intro">
                {c.diversificacao.intro}
              </p>
              <p className="text-sm font-bold text-[#0F1E35]">{c.diversificacao.counts}</p>
              <p className="max-w-2xl text-sm leading-relaxed text-[#48566B]">{c.diversificacao.rule}</p>
              <p className="text-sm font-semibold text-[#0F1E35]" data-testid="lumen-diversificacao-insufficient">
                {c.diversificacao.insufficient}
              </p>
            </div>
            <div
              className="flex flex-col gap-4 rounded-xl border border-[#D7D3C8] bg-[#F2EEE2] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] md:p-7"
              data-testid="lumen-diversificacao-cards"
            >
              {c.diversificacao.cards.map((card) => (
                <article
                  key={card.name}
                  className="flex flex-col gap-1 rounded-lg border border-[#D7D3C8] bg-[#FBF9F3] p-4"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#48566B]">
                    {card.era}
                  </span>
                  <p className="text-base font-semibold text-[#0F1E35]">{card.name}</p>
                  <p className="text-sm italic text-[#48566B]">{card.work}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 Exportação em Excel — ivory (frame #101:13709, prévia 550px) */}
      <section className={`bg-[#F2EEE2] ${SECTION}`}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,550px)] lg:items-center lg:gap-16">
            <div className="flex flex-col gap-7">
              <SectionHeading eyebrow={c.excel.eyebrow} title={c.excel.title} tone="navy" />
              <div className="flex flex-col gap-3" data-testid="lumen-excel-scopes">
                {c.excel.scopes.map((scope) => (
                  <div
                    key={scope}
                    className="flex items-center gap-3 rounded-lg border border-[#D7D3C8] bg-[#FBF9F3] px-4 py-3"
                  >
                    <Table2 size={18} aria-hidden className="shrink-0 text-[#C9A84C]" />
                    <p className="text-sm font-semibold text-[#0F1E35]">{scope}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              data-testid="lumen-excel-mock"
              className="flex flex-col overflow-hidden rounded-xl border border-[#D7D3C8] bg-[#FBF9F3] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 bg-[#0F1E35] px-5 py-4">
                <Table2 size={18} aria-hidden className="shrink-0 text-[#C9A84C]" />
                <p className="text-sm font-semibold text-[#F2EEE2]">{c.excel.tableTitle}</p>
              </div>
              <div className="flex gap-2 border-b border-[#D7D3C8] px-5 py-4">
                {c.excel.scopes.map((scope, index) => (
                  <span
                    key={scope}
                    className={
                      index === 0
                        ? "rounded bg-[#E9DFC1] px-2.5 py-1 text-xs font-semibold text-[#0F1E35]"
                        : "px-2.5 py-1 text-xs text-[#48566B]"
                    }
                  >
                    {scope}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 px-5 pb-5 pt-4">
                <ul className="grid gap-2 text-sm text-[#0F1E35]">
                  {c.excel.rows.map((row) => (
                    <li key={row} className="rounded-lg border border-[#D7D3C8] px-3 py-2">
                      {row}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#48566B]">{c.excel.footer}</p>
                <p className="text-sm leading-relaxed text-[#48566B]">{c.excel.expl}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Privacidade e dados locais — navy (frame #101:13764) */}
      <section className={`bg-[#0F1E35] ${SECTION}`}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-10">
            <div className="flex-1">
              <SectionHeading eyebrow={c.privacidade.eyebrow} title={c.privacidade.title} tone="gold" />
            </div>
            <p
              className={`${THEME.titleFont} text-xl italic text-[#C9A84C] md:text-2xl lg:max-w-[270px]`}
              data-testid="lumen-privacidade-highlight"
            >
              {c.privacidade.highlight}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {c.privacidade.blocks.map((block, index) => {
              const Icon = PRIV_ICONS[index];
              return (
                <article
                  key={block.title}
                  className="flex flex-col gap-5 rounded-xl border border-[#34435A] bg-[#182A43] p-6"
                >
                  {Icon && <Icon size={22} aria-hidden className="text-[#C9A84C]" />}
                  <h3 className="text-[19px] font-semibold leading-[1.3] text-[#F2EEE2]">{block.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8A9BB8]">{block.description}</p>
                </article>
              );
            })}
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-[#34435A] p-4">
            <Info size={18} aria-hidden className="mt-0.5 shrink-0 text-[#8A9BB8]" />
            <p className="text-sm leading-relaxed text-[#8A9BB8]">{c.privacidade.note}</p>
          </div>
        </div>
      </section>

      {/* 9 FAQ — off-white (frame #101:13789; accordion RN-035) */}
      <section id={S.faq} className={`bg-[#FBF9F3] ${SECTION}`}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
          <SectionHeading eyebrow={c.faq.eyebrow} title={c.faq.title} support={c.faq.support} tone="navy" />
          <LandingFaq
            items={c.faq.items}
            testId="lumen-faq"
            itemVariants="border-[#D7D3C8] bg-[#F2EEE2]"
            questionVariants="text-[#0F1E35] text-base"
            answerVariants="text-sm text-[#48566B]"
            iconVariants="text-[#C9A84C]"
          />
        </div>
      </section>

      {/* Convite à exploração — ivory com card navy (frame #101:13830) */}
      <section className={`bg-[#F2EEE2] ${SECTION}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 rounded-xl border-t-2 border-[#C9A84C] bg-[#0F1E35] p-8 md:p-12 lg:grid-cols-[minmax(0,1fr)_265px] lg:items-center lg:gap-10 lg:p-14">
            <div className="flex flex-col gap-5">
              <Eyebrow tone="gold" label={c.invite.eyebrow} />
              <h2
                className={`${THEME.titleFont} text-3xl leading-[1.15] text-[#F2EEE2] md:text-4xl lg:text-[48px]`}
              >
                {c.invite.title}
              </h2>
              <p className="max-w-2xl leading-relaxed text-[#8A9BB8]">{c.invite.text}</p>
            </div>
            <div className="flex flex-col items-stretch gap-4">
              <LandingCta
                cta={{ label: c.invite.ctaExplore, kind: "disabled", reason: c.nav.ctaPending }}
                microcopy={c.nav.ctaPending}
                microcopyId="lumen-invite-pending"
                testId="lumen-invite-cta-explore"
                className={BTN_GOLD}
              />
              <p className="text-center text-[13px] leading-relaxed text-[#8A9BB8]">{c.invite.note}</p>
            </div>
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
}
