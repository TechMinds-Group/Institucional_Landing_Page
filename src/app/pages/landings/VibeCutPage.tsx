import { Link } from "react-router";
import { FileText, ShieldCheck, Sparkles, CircleCheck } from "lucide-react";
import { LandingPageLayout } from "../../components/landing/LandingPageLayout";
import { LandingCta } from "../../components/landing/LandingCta";
import { LandingFaq } from "../../components/landing/LandingFaq";
import { BreakpointImage } from "../../components/landing/BreakpointImage";
import { LandingTheme } from "../../components/landing/types";
import { useI18n } from "../../i18n/I18nContext";
import { LANDING_SECTION_IDS } from "../../constants/anchors";
import heroComparacaoDesk from "../../../imports/landings/vibecut-hero-comparacao-desk.png";
import heroComparacaoMob from "../../../imports/landings/vibecut-hero-comparacao-mob.png";
import soCabeloDesk from "../../../imports/landings/vibecut-so-cabelo-desk.png";
import soCabeloMob from "../../../imports/landings/vibecut-so-cabelo-mob.png";
import soBarbaDesk from "../../../imports/landings/vibecut-so-barba-desk.png";
import soBarbaMob from "../../../imports/landings/vibecut-so-barba-mob.png";
import cabeloBarbaDesk from "../../../imports/landings/vibecut-cabelo-barba-desk.png";
import cabeloBarbaMob from "../../../imports/landings/vibecut-cabelo-barba-mob.png";
import leituraFotoDesk from "../../../imports/landings/vibecut-leitura-foto-desk.png";
import leituraFotoMob from "../../../imports/landings/vibecut-leitura-foto-mob.png";
import previaDesk from "../../../imports/landings/vibecut-previa-desk.png";
import previaMob from "../../../imports/landings/vibecut-previa-mob.png";

// ── Landing VibeCut (/vibecut) — RN-025-2 (UI_SPEC §2.5, 11 seções) ─
// Copy 1:1 do dossiê g1 §2–§3 · tema dark navy + âmbar · CTAs todos
// internos (âncoras §02/§03/§07 e páginas legais RN-007) · landing
// NÃO recebe fotos nem registra consentimento (RN-028) · comparação
// REFERÊNCIA/PRÉVIA ILUSTRATIVA · FAQ accordion (RN-035).

const S = LANDING_SECTION_IDS.vibecut;

const THEME: LandingTheme = {
  pageBg: "bg-[#0B1020]",
  titleFont: "",
  navbarBg: "bg-[#0B1020]/90",
  brandText: "text-[#F8FAFC]",
  productChip: "border-[#F5B942]/40 text-[#F5B942] bg-[#F5B942]/10",
  navLink: "text-[#B7C2D4]",
  navLinkHover: "hover:text-[#F8FAFC]",
  navDivider: "border-[#232A3E]",
  accentBg: "bg-[#F5B942]",
  accentText: "text-[#0B1020]",
  footerBg: "bg-[#070B16]",
  footerTitle: "text-[#F8FAFC]",
  footerMuted: "text-[#818BA1]",
  footerHover: "hover:text-[#F5B942]",
  footerDivider: "border-[#232A3E]",
  footerIdentityStrong: "text-[#D1D5DB]",
};

/** Eyebrow numerado do design ("01 / TEMA"). */
function NumberedEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <p className="text-xs font-bold tracking-[0.2em] text-[#F5B942] uppercase">
      <span className="text-[#5A6B8C]">{number}</span> / {label}
    </p>
  );
}

export function VibeCutPage() {
  const { t } = useI18n();
  const c = t.vibecut;

  const heroPreview = (
    <div
      data-testid="vibecut-preview-card"
      className="rounded-2xl border border-[#232A3E] bg-[#101730] p-5 md:p-6"
    >
      <p className="text-sm font-semibold text-[#F8FAFC] mb-3">{c.hero.previewTitle}</p>
      <BreakpointImage
        desk={heroComparacaoDesk}
        mob={heroComparacaoMob}
        alt={`${c.hero.refLabel} · ${c.hero.previewLabel}`}
        testId="vibecut-hero-comparacao"
        className="w-full h-auto rounded-lg object-cover"
      />
      <div className="flex items-center justify-between gap-2 mt-3 text-[11px] font-bold tracking-widest">
        <span className="text-[#B7C2D4]">{c.hero.refLabel}</span>
        <span className="text-[#F5B942]">{c.hero.previewLabel}</span>
      </div>
      <p className="mt-2 text-xs text-[#818BA1]">{c.hero.previewDisclaimer}</p>
      <div className="mt-4 rounded-lg border border-[#232A3E] p-3">
        <span className="text-[10px] font-bold tracking-widest text-[#F5B942]">{c.hero.modeBadge}</span>
        <p className="mt-1 text-sm font-semibold text-[#F8FAFC]">{c.hero.textureTitle}</p>
        <p className="mt-1 text-xs text-[#818BA1] leading-relaxed">{c.hero.textureText}</p>
      </div>
    </div>
  );

  const modeImgs = [
    { desk: soCabeloDesk, mob: soCabeloMob },
    { desk: soBarbaDesk, mob: soBarbaMob },
    { desk: cabeloBarbaDesk, mob: cabeloBarbaMob },
  ];

  return (
    <LandingPageLayout
      productName="VibeCut"
      theme={THEME}
      nav={{
        links: [
          { label: c.nav.links[0], sectionId: S.comoFunciona },
          { label: c.nav.links[1], sectionId: S.estilos },
          { label: c.nav.links[2], sectionId: S.privacidade },
          { label: c.nav.links[3], sectionId: S.faq },
        ],
        cta: { label: c.nav.cta, kind: "anchor", target: S.testes },
      }}
      footer={{
        statement: c.footer.statement,
        tagline: c.footer.tagline,
        columns: [
          {
            title: c.footer.exploreTitle,
            links: [
              { label: c.footer.exploreLinks[0], kind: "anchor", target: S.comoFunciona },
              { label: c.footer.exploreLinks[1], kind: "anchor", target: S.estilos },
              { label: c.footer.exploreLinks[2], kind: "anchor", target: S.testes },
              { label: c.footer.exploreLinks[3], kind: "anchor", target: S.faq },
            ],
          },
          {
            title: c.footer.documentsTitle,
            links: [
              { label: c.footer.terms, kind: "route", target: "/terms-of-use/vibecut" },
              { label: c.footer.privacy, kind: "route", target: "/privacy/vibecut" },
            ],
          },
        ],
        copyright: c.footer.copyright,
      }}
      navCtaTestId="vibecut-nav-cta"
    >
      {/* Apresentação — hero */}
      <section className="px-5 md:px-8 lg:px-12 pt-10 md:pt-16 pb-14">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-5 items-start">
            <p className="text-xs font-bold tracking-[0.2em] text-[#F5B942] uppercase">{c.hero.eyebrow}</p>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] leading-tight ${THEME.titleFont}`}>
              {c.hero.headline}
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-[#F5B942]">
              {c.hero.highlight}
            </p>
            <p className="text-[#B7C2D4] leading-relaxed max-w-xl">{c.hero.paragraph}</p>
            <div className="flex flex-wrap gap-3" data-testid="vibecut-hero-ctas">
              <LandingCta
                cta={{ label: c.hero.ctaHow, kind: "anchor", target: S.comoFunciona }}
                testId="vibecut-hero-cta-how"
                className={`${THEME.accentBg} ${THEME.accentText} rounded-lg px-6 py-3 text-sm font-bold`}
              />
              <LandingCta
                cta={{ label: c.hero.ctaStyles, kind: "anchor", target: S.estilos }}
                testId="vibecut-hero-cta-styles"
                className="rounded-lg px-6 py-3 text-sm font-bold border border-[#F5B942] text-[#F5B942]"
              />
            </div>
            <div data-testid="vibecut-status" className="flex flex-col gap-1">
              <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border border-[#F5B942]/40 bg-[#F5B942]/10 text-[#F5B942] max-w-max">
                {c.hero.status}
              </span>
              <span className="text-xs text-[#818BA1]">{c.hero.statusNote}</span>
            </div>
            <ul className="grid gap-2 mt-2" data-testid="vibecut-miniprops">
              {c.hero.miniProps.map((prop) => (
                <li key={prop} className="flex items-center gap-2 text-sm text-[#B7C2D4]">
                  <CircleCheck size={16} className="text-[#F5B942]" />
                  {prop}
                </li>
              ))}
            </ul>
          </div>
          {heroPreview}
        </div>
      </section>

      {/* 01 Benefícios */}
      <section className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#151B2E]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <NumberedEyebrow number="01" label={c.benefits.eyebrow} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] max-w-2xl">
            {c.benefits.title}
          </h2>
          <div className="grid gap-5 md:grid-cols-3" data-testid="vibecut-benefits">
            {c.benefits.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-[#232A3E] bg-[#101730] p-6"
              >
                <Sparkles size={20} className="text-[#F5B942]" />
                <h3 className="mt-3 text-lg font-bold text-[#F8FAFC]">{card.title}</h3>
                <p className="mt-2 text-sm text-[#818BA1] leading-relaxed">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 02 Como funciona */}
      <section id={S.comoFunciona} className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#151B2E]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <NumberedEyebrow number="02" label={c.howItWorks.eyebrow} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] max-w-2xl">
            {c.howItWorks.title}
          </h2>
          <p className="text-[#B7C2D4]">{c.howItWorks.support}</p>
          <ol className="grid gap-5 md:grid-cols-5" data-testid="vibecut-steps">
            {c.howItWorks.steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-[#232A3E] bg-[#101730] p-6 flex flex-col gap-2"
              >
                <span className="text-xs font-bold text-[#F5B942] tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-[#F8FAFC]">{step.title}</h3>
                <p className="text-sm text-[#818BA1] leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
          <p className="text-xs text-[#818BA1] max-w-2xl">{c.howItWorks.note}</p>
        </div>
      </section>

      {/* 03 Três modos */}
      <section id={S.estilos} className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#151B2E]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <NumberedEyebrow number="03" label={c.modes.eyebrow} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] max-w-2xl">
            {c.modes.title}
          </h2>
          <div className="grid gap-5 md:grid-cols-3" data-testid="vibecut-modes">
            {c.modes.cards.map((mode, index) => (
              <article
                key={mode.badge}
                className="rounded-2xl overflow-hidden border border-[#232A3E] bg-[#101730] flex flex-col"
              >
                <div className="relative">
                  <BreakpointImage
                    desk={modeImgs[index].desk}
                    mob={modeImgs[index].mob}
                    alt={`${mode.badge} — ${mode.line} (${mode.example})`}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#0B1020]/85 text-[#F5B942] border border-[#F5B942]/40">
                    {mode.badge}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-1">
                  <p className="text-lg font-bold text-[#F8FAFC]">{mode.line}</p>
                  <p className="text-sm italic text-[#818BA1]">{mode.example}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="text-xs text-[#818BA1] max-w-3xl" data-testid="vibecut-modes-disclaimer">
            {c.modes.disclaimer}
          </p>
        </div>
      </section>

      {/* 04 Análise facial */}
      <section className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#151B2E]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <NumberedEyebrow number="04" label={c.analysis.eyebrow} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] max-w-2xl">
            {c.analysis.title}
          </h2>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="grid gap-5" data-testid="vibecut-factors">
              {c.analysis.factors.map((factor) => (
                <article key={factor.title} className="rounded-2xl border border-[#232A3E] bg-[#101730] p-6">
                  <h3 className="text-lg font-bold text-[#F8FAFC]">{factor.title}</h3>
                  <p className="mt-2 text-sm text-[#818BA1] leading-relaxed">{factor.description}</p>
                </article>
              ))}
            </div>
            <div
              data-testid="vibecut-reading-panel"
              className="rounded-2xl border border-[#232A3E] bg-[#101730] p-6 flex flex-col gap-4"
            >
              <BreakpointImage
                desk={leituraFotoDesk}
                mob={leituraFotoMob}
                alt={c.analysis.panelTitle}
                className="w-full h-auto rounded-lg object-cover"
              />
              <p className="text-sm font-bold text-[#F8FAFC]">{c.analysis.panelTitle}</p>
              <div className="grid gap-2">
                {c.analysis.attributes.map((attr) => (
                  <div key={attr.label} className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-[#818BA1]">{attr.label}</span>
                    <span className="px-2.5 py-1 rounded-full border border-[#232A3E] text-[#B7C2D4]">
                      {attr.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#F5B942]/90 leading-relaxed" data-testid="vibecut-reading-disclaimer">
                {c.analysis.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Sugestões e comparação */}
      <section className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#151B2E]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <NumberedEyebrow number="05" label={c.suggestions.eyebrow} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] max-w-2xl">
            {c.suggestions.title}
          </h2>
          <div
            data-testid="vibecut-suggestions-mock"
            className="rounded-2xl border border-[#232A3E] bg-[#101730] p-6 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
          >
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-widest text-[#F5B942]">{c.suggestions.mockBadge}</span>
              <BreakpointImage
                desk={previaDesk}
                mob={previaMob}
                alt={`${c.suggestions.selectedTitle} — ${c.suggestions.selectedDescription}`}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <article className="rounded-xl border border-[#F5B942]/40 p-4">
                <p className="text-sm font-bold text-[#F8FAFC]">{c.suggestions.selectedTitle}</p>
                <p className="mt-1 text-sm text-[#B7C2D4]">{c.suggestions.selectedDescription}</p>
                <p className="mt-2 text-xs text-[#F5B942]">{c.suggestions.selectedTag}</p>
              </article>
              <article className="rounded-xl border border-[#232A3E] p-4">
                <p className="text-sm font-bold text-[#F8FAFC]">{c.suggestions.altTitle}</p>
                <p className="mt-1 text-sm text-[#818BA1]">{c.suggestions.altDescription}</p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 max-w-2xl">
            <p className="text-sm text-[#B7C2D4]" data-testid="vibecut-no-history">{c.suggestions.noHistory}</p>
            <p className="text-xs text-[#818BA1]" data-testid="vibecut-previa-disclaimer">
              {c.suggestions.previewDisclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* 06 Privacidade e aceite */}
      <section id={S.privacidade} className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#151B2E]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <NumberedEyebrow number="06" label={c.privacy.eyebrow} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] max-w-2xl">
            {c.privacy.title}
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-[#232A3E] bg-[#101730] p-6">
              <ShieldCheck size={20} className="text-[#F5B942]" />
              <p className="mt-3 text-sm text-[#B7C2D4]">{c.privacy.deviceCode}</p>
            </article>
            <article className="rounded-2xl border border-[#232A3E] bg-[#101730] p-6">
              <FileText size={20} className="text-[#F5B942]" />
              <p className="mt-3 text-sm text-[#B7C2D4]" data-testid="vibecut-gemini-note">{c.privacy.gemini}</p>
            </article>
            <article className="rounded-2xl border border-[#232A3E] bg-[#101730] p-6">
              <CircleCheck size={20} className="text-[#F5B942]" />
              <p className="mt-3 text-sm text-[#B7C2D4]">{c.privacy.consentRecord}</p>
            </article>
          </div>
          <div
            data-testid="vibecut-accept-panel"
            className="rounded-2xl border border-[#F5B942]/40 bg-[#101730] p-6 flex flex-col gap-4"
          >
            <h3 className="text-lg font-bold text-[#F8FAFC]">{c.privacy.panelTitle}</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-[#232A3E] p-4 flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[#F8FAFC]">{c.privacy.termsDoc}</span>
                <Link
                  to="/terms-of-use/vibecut"
                  data-testid="vibecut-ler-terms"
                  className={`${THEME.accentBg} ${THEME.accentText} rounded-lg px-4 py-2 text-xs font-bold inline-flex items-center gap-1.5`}
                >
                  {c.privacy.readDoc} ↗
                </Link>
              </div>
              <div className="rounded-xl border border-[#232A3E] p-4 flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[#F8FAFC]">{c.privacy.privacyDoc}</span>
                <Link
                  to="/privacy/vibecut"
                  data-testid="vibecut-ler-privacy"
                  className={`${THEME.accentBg} ${THEME.accentText} rounded-lg px-4 py-2 text-xs font-bold inline-flex items-center gap-1.5`}
                >
                  {c.privacy.readDoc} ↗
                </Link>
              </div>
            </div>
            <p className="text-sm text-[#B7C2D4]">{c.privacy.instruction}</p>
            <p className="text-xs text-[#F5B942]" data-testid="vibecut-landing-note">{c.privacy.panelNote}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {c.privacy.cards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-[#232A3E] p-6">
                <h3 className="text-base font-bold text-[#F8FAFC]">{card.title}</h3>
                <p className="mt-2 text-sm text-[#818BA1] leading-relaxed">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Testes e disponibilidade */}
      <section id={S.testes} className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#151B2E]">
        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-3">
            <NumberedEyebrow number="07" label={c.availability.eyebrow} />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] max-w-xl">
              {c.availability.title}
            </h2>
            <p className="text-sm text-[#818BA1] max-w-xl">{c.availability.note}</p>
          </div>
          <div
            data-testid="vibecut-availability-card"
            className="rounded-2xl border border-[#232A3E] bg-[#101730] p-6 flex flex-col gap-4"
          >
            <p className="text-lg font-bold text-[#F8FAFC]">{c.availability.cardTitle}</p>
            <span className="text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full bg-[#F5B942]/10 border border-[#F5B942]/40 text-[#F5B942] max-w-max">
              {c.availability.cardTag}
            </span>
            <div className="grid gap-2 text-sm">
              {c.availability.rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4">
                  <span className="text-[#818BA1]">{row.label}</span>
                  <span className="text-[#F8FAFC] font-semibold">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 FAQ */}
      <section id={S.faq} className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#151B2E]">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <NumberedEyebrow number="08" label={c.faq.eyebrow} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] max-w-2xl">
            {c.faq.title}
          </h2>
          <p className="text-[#B7C2D4] max-w-2xl">{c.faq.support}</p>
          <LandingFaq
            items={c.faq.items}
            testId="vibecut-faq"
            itemVariants="border-[#232A3E] bg-[#101730]"
            questionVariants="text-[#F8FAFC] text-base"
            answerVariants="text-[#818BA1] text-sm"
            iconVariants="text-[#F5B942]"
          />
        </div>
      </section>

      {/* Convite à descoberta */}
      <section className="px-5 md:px-8 lg:px-12 py-16 border-t border-[#151B2E]">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-5 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-[#F5B942] uppercase">{c.invite.eyebrow}</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] max-w-2xl">
            {c.invite.title}
          </h2>
          <p className="text-[#B7C2D4] max-w-2xl">{c.invite.text}</p>
          <div className="flex flex-wrap justify-center gap-3" data-testid="vibecut-invite-ctas">
            <LandingCta
              cta={{ label: c.invite.ctaStyles, kind: "anchor", target: S.estilos }}
              testId="vibecut-invite-cta-styles"
              className={`${THEME.accentBg} ${THEME.accentText} rounded-lg px-6 py-3 text-sm font-bold`}
            />
            <LandingCta
              cta={{ label: c.invite.ctaTests, kind: "anchor", target: S.testes }}
              testId="vibecut-invite-cta-tests"
              className="rounded-lg px-6 py-3 text-sm font-bold border border-[#F5B942] text-[#F5B942]"
            />
          </div>
          <p className="text-xs text-[#818BA1]">
            {c.hero.status} · {c.hero.statusNote}
          </p>
        </div>
      </section>
    </LandingPageLayout>
  );
}
