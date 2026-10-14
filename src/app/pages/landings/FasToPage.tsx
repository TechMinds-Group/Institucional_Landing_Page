import { CalendarDays, Mail, Sparkles, MessageCircle } from "lucide-react";
import { LandingPageLayout } from "../../components/landing/LandingPageLayout";
import { LandingCta } from "../../components/landing/LandingCta";
import { LandingFaq } from "../../components/landing/LandingFaq";
import { LandingTheme, LandingCtaConfig } from "../../components/landing/types";
import { mailtoHref } from "../../components/landing/ctaLinks";
import { EMAILS_BY_AREA } from "../../constants/contacts";
import { useI18n } from "../../i18n/I18nContext";
import { LANDING_SECTION_IDS } from "../../constants/anchors";

// â”€â”€ Landing FasTo (/fasto) â€” RN-025-4 (UI_SPEC Â§2.7, 10 seÃ§Ãµes) â”€â”€â”€â”€
// Copy 1:1 do dossiÃª g1 Â§5â€“Â§5.5 Â· tema claro branco/azul B2B Â· 0
// assets fotogrÃ¡ficos (mocks vetoriais em cÃ³digo) Â· SEM preÃ§os/plano/
// checkout em nenhuma seÃ§Ã£o (RN-027/RN-030) Â· conversÃ£o Ãºnica =
// mailto comercial da TechMinds (contato de contacts.ts — sem wa.me) · chip de status
// "Ativo" do canÃ´nico (CR-006/ADR-014 â€” o "Em desenvolvimento" do
// design Ã© aspiracional e nÃ£o Ã© publicado) Â· FAQ accordion (RN-035).

const S = LANDING_SECTION_IDS.fasto;

const THEME: LandingTheme = {
  pageBg: "bg-white",
  titleFont: "",
  navbarBg: "bg-white/92",
  brandText: "text-[#0F172A]",
  productChip: "border-[#2563EB]/40 text-[#2563EB] bg-[#2563EB]/10",
  navLink: "text-[#475569]",
  navLinkHover: "hover:text-[#2563EB]",
  navDivider: "border-[#E2E8F0]",
  accentBg: "bg-[#2563EB]",
  accentText: "text-white",
  footerBg: "bg-[#0F172A]",
  footerTitle: "text-[#F8FAFC]",
  footerMuted: "text-[#94A3B8]",
  footerHover: "hover:text-[#60A5FA]",
  footerDivider: "border-[#1E293B]",
  footerIdentityStrong: "text-[#E2E8F0]",
};

function Eyebrow({ label }: { label: string }) {
  return <p className="text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase">{label}</p>;
}

/** DemonstraÃ§Ã£o ilustrativa da agenda â€” dados ficcionalizados. */
function AgendaCard() {
  const { t } = useI18n();
  const c = t.fasto.hero;
  return (
    <div
      data-testid="fasto-agenda-card"
      className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 md:p-6 shadow-sm"
    >
      <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
        <p className="text-sm font-bold text-[#0F172A]">{c.agendaTitle}</p>
        <div className="flex gap-1.5">
          {c.agendaDays.map((day) => {
            const active = day === c.agendaSelectedDay;
            return (
              <span
                key={day}
                className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg ${
                  active
                    ? "bg-[#2563EB] text-white"
                    : "border border-[#E2E8F0] text-[#475569] bg-white"
                }`}
              >
                {day}
              </span>
            );
          })}
        </div>
      </div>
      <ul className="grid gap-2.5">
        {c.appointments.map((appt) => {
          const confirmed = appt.status === c.statusLabels.confirmed;
          return (
            <li
              key={appt.name}
              className="rounded-xl border border-[#E2E8F0] bg-white p-3.5 flex flex-col gap-1"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <p className="text-sm font-bold text-[#0F172A]">{appt.name}</p>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    confirmed
                      ? "bg-[#DCFCE7] text-[#166534]"
                      : "bg-[#FEF9C3] text-[#854D0E]"
                  }`}
                >
                  {appt.status}
                </span>
              </div>
              <p className="text-xs text-[#475569]">
                {appt.service} Â· {appt.duration} Â· {appt.pro}
              </p>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-xs font-semibold text-[#0F172A]">{c.agendaHint}</p>
      <p className="mt-1 text-xs text-[#94A3B8]" data-testid="fasto-agenda-note">{c.agendaNote}</p>
    </div>
  );
}

/** Mock da conversa WhatsApp (comportamento do PRODUTO â€” ilustrativo). */
function ChatMock() {
  const { t } = useI18n();
  const c = t.fasto.whatsapp;
  return (
    <div
      data-testid="fasto-chat-mock"
      className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 flex flex-col gap-3 max-w-md"
    >
      <p className="text-xs font-bold text-[#64748B] uppercase tracking-wide flex items-center gap-2">
        <MessageCircle size={14} /> {c.chatHeader}
      </p>
      <div className="flex flex-col gap-2">
        {c.chatMessages.map((message, index) => (
          <p
            key={message}
            className={`text-sm px-3.5 py-2.5 rounded-2xl max-w-fit ${
              index === 0
                ? "bg-[#DCFCE7] text-[#166534]"
                : "bg-white border border-[#E2E8F0] text-[#334155]"
            }`}
          >
            {message}
          </p>
        ))}
      </div>
      <div className="flex gap-2.5">
        <span className="text-xs font-bold bg-[#16A34A] text-white rounded-lg px-3.5 py-2">
          {c.chatConfirm}
        </span>
        <span className="text-xs font-bold border border-[#CBD5E1] text-[#475569] rounded-lg px-3.5 py-2">
          {c.chatCancel}
        </span>
      </div>
      <p className="text-[11px] text-[#94A3B8]">
        {t.fasto.hero.agendaNote}
      </p>
    </div>
  );
}

export function FasToPage() {
  const { t } = useI18n();
  const c = t.fasto;

  const presentationCta = (): LandingCtaConfig => ({
    label: c.hero.ctaPresentation,
    kind: "mailto",
    target: mailtoHref(EMAILS_BY_AREA.business),
  });

  return (
    <LandingPageLayout
      productName="FasTo"
      theme={THEME}
      nav={{
        links: [
          { label: c.nav.links[0], sectionId: S.comoFunciona },
          { label: c.nav.links[1], sectionId: S.recursos },
          { label: c.nav.links[2], sectionId: S.clube },
          { label: c.nav.links[3], sectionId: S.faq },
        ],
        // "Conhecer o FasTo" â€” destino nÃ£o explÃ­cito no design â†’
        // Ã¢ncora "Como funciona" (decisÃ£o RN-032 â€” dossiÃª g1 Â§5).
        cta: { label: c.nav.cta, kind: "anchor", target: S.comoFunciona },
      }}
      footer={{
        statement: c.footer.statement,
        tagline: c.footer.tagline,
        companyStatement: c.footer.companyStatement,
        columns: [
          {
            title: c.footer.exploreTitle,
            links: [
              { label: c.footer.exploreLinks[0], kind: "anchor", target: S.comoFunciona },
              { label: c.footer.exploreLinks[1], kind: "anchor", target: S.recursos },
              { label: c.footer.exploreLinks[2], kind: "anchor", target: S.clube },
              { label: c.footer.exploreLinks[3], kind: "anchor", target: S.faq },
            ],
          },
          {
            title: c.footer.techmindsTitle,
            links: [
              { label: c.footer.knowCompany, kind: "route", target: "/" },
              { label: c.footer.requestPresentation, kind: "mailto", target: EMAILS_BY_AREA.business },
              { label: EMAILS_BY_AREA.business, kind: "mailto", target: EMAILS_BY_AREA.business },
            ],
          },
        ],
        copyright: c.footer.copyright,
      }}
      navCtaTestId="fasto-nav-cta"
    >
      {/* ApresentaÃ§Ã£o â€” hero */}
      <section className="px-5 md:px-8 lg:px-12 pt-10 md:pt-16 pb-14">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-5 items-start">
            <span
              data-testid="fasto-status-chip"
              className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#DCFCE7] text-[#166534] max-w-max"
            >
              {c.hero.statusChip}
            </span>
            <Eyebrow label={c.hero.eyebrow} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight">
              {c.hero.headline}
            </h1>
            <p className="text-[#475569] leading-relaxed max-w-xl">{c.hero.paragraph}</p>
            <div className="flex flex-col items-start gap-2" data-testid="fasto-hero-cta">
              <LandingCta
                cta={presentationCta("fasto-hero-cta-button")}
                testId="fasto-hero-cta-button"
                className={`${THEME.accentBg} ${THEME.accentText} rounded-lg px-6 py-3 text-sm font-bold`}
              />
              <p className="text-xs text-[#94A3B8] max-w-md">{c.hero.microcopy}</p>
            </div>
          </div>
          <div className="grid gap-5">
            <AgendaCard />
            <div className="flex flex-wrap gap-2" data-testid="fasto-segments">
              {c.hero.segments.map((segment) => (
                <span
                  key={segment}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#E2E8F0] bg-white text-[#475569]"
                >
                  {segment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1 Problemas e soluÃ§Ãµes */}
      <section className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#F1F5F9]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Eyebrow label={c.problemas.eyebrow} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] max-w-2xl">
            {c.problemas.title}
          </h2>
          <div className="grid gap-5 md:grid-cols-3" data-testid="fasto-problemas">
            {c.problemas.cards.map((card) => (
              <article key={card.problem} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 flex flex-col gap-3">
                <p className="text-base font-bold text-[#0F172A]">{card.problem}</p>
                <p className="text-sm text-[#2563EB] font-semibold">â†’ {card.solution}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2 Como funciona */}
      <section id={S.comoFunciona} className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#F1F5F9]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Eyebrow label={c.comoFunciona.eyebrow} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] max-w-2xl">
            {c.comoFunciona.title}
          </h2>
          <ol className="grid gap-5 md:grid-cols-4" data-testid="fasto-steps">
            {c.comoFunciona.steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 flex flex-col gap-2">
                <span className="text-xs font-bold text-[#2563EB] tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-[#0F172A]">{step.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3 Recursos de gestÃ£o */}
      <section id={S.recursos} className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#F1F5F9]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Eyebrow label={c.recursos.eyebrow} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] max-w-2xl">
            {c.recursos.title}
          </h2>
          <div className="grid gap-5 md:grid-cols-3" data-testid="fasto-recursos">
            {c.recursos.cards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <Sparkles size={18} className="text-[#2563EB]" />
                <h3 className="mt-3 text-base font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{card.description}</p>
              </article>
            ))}
          </div>
          <div
            data-testid="fasto-access-banner"
            className="rounded-2xl border border-[#2563EB]/30 bg-[#EFF6FF] p-5 flex items-center gap-3"
          >
            <Mail size={18} className="text-[#2563EB]" />
            <p className="text-sm font-semibold text-[#0F172A]">{c.recursos.accessBanner}</p>
          </div>
        </div>
      </section>

      {/* 4 Clube de assinaturas */}
      <section id={S.clube} className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#F1F5F9]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Eyebrow label={c.clube.eyebrow} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] max-w-2xl">
            {c.clube.title}
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {c.clube.rules.map((rule) => (
              <article key={rule.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <h3 className="text-base font-bold text-[#0F172A]">{rule.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{rule.description}</p>
              </article>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <p className="text-sm font-bold text-[#0F172A] max-w-md" data-testid="fasto-clube-disclaimer">
              {c.clube.disclaimer}
            </p>
            <div
              data-testid="fasto-clube-panel"
              className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 flex flex-col gap-3"
            >
              <p className="text-sm font-bold text-[#0F172A]">{c.clube.panelTitle}</p>
              <ul className="grid gap-2 text-sm text-[#475569]">
                {c.clube.panelItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 border border-[#E2E8F0] rounded-lg px-3 py-2 bg-white">
                    <CalendarDays size={14} className="text-[#2563EB]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-bold text-[#2563EB]">{c.clube.panelTotal}</p>
              <p className="text-xs text-[#94A3B8]">{c.clube.panelNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 WhatsApp e lembretes */}
      <section className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#F1F5F9]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Eyebrow label={c.whatsapp.eyebrow} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] max-w-2xl">
            {c.whatsapp.title}
          </h2>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="grid gap-4" data-testid="fasto-whatsapp-triggers">
              {c.whatsapp.triggers.map((trigger) => (
                <article key={trigger.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                  <h3 className="text-base font-bold text-[#0F172A]">{trigger.title}</h3>
                  <p className="mt-2 text-sm text-[#475569] leading-relaxed">{trigger.description}</p>
                </article>
              ))}
              <p className="text-xs text-[#64748B] max-w-xl" data-testid="fasto-provider-note">
                {c.whatsapp.providerNote}
              </p>
              <p className="text-xs text-[#64748B] max-w-xl" data-testid="fasto-scope-note">
                {c.whatsapp.scopeNote}
              </p>
            </div>
            <ChatMock />
          </div>
        </div>
      </section>

      {/* 6 Duas assinaturas, papÃ©is diferentes */}
      <section className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#F1F5F9]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Eyebrow label={c.assinaturas.eyebrow} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] max-w-2xl">
            {c.assinaturas.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-2" data-testid="fasto-assinaturas">
            <article className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] max-w-max">
                {c.assinaturas.saas.label}
              </span>
              <h3 className="text-lg font-bold text-[#0F172A]">{c.assinaturas.saas.title}</h3>
              <ul className="grid gap-2 text-sm text-[#475569]">
                {c.assinaturas.saas.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-[#2563EB]">â€¢</span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] max-w-max">
                {c.assinaturas.club.label}
              </span>
              <h3 className="text-lg font-bold text-[#0F172A]">{c.assinaturas.club.title}</h3>
              <ul className="grid gap-2 text-sm text-[#475569]">
                {c.assinaturas.club.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-[#CA8A04]">â€¢</span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="text-sm font-semibold text-[#0F172A]" data-testid="fasto-assinaturas-distinction">
            {c.assinaturas.distinction}
          </p>
        </div>
      </section>

      {/* 7 FAQ */}
      <section id={S.faq} className="px-5 md:px-8 lg:px-12 py-14 border-t border-[#F1F5F9]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <Eyebrow label={c.faq.eyebrow} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] max-w-2xl">
            {c.faq.title}
          </h2>
          <LandingFaq
            items={c.faq.items}
            testId="fasto-faq"
            itemVariants="border-[#E2E8F0] bg-[#F8FAFC]"
            questionVariants="text-[#0F172A] text-base"
            answerVariants="text-[#475569] text-sm"
            iconVariants="text-[#2563EB]"
          />
        </div>
      </section>

      {/* Convite Ã  apresentaÃ§Ã£o */}
      <section className="px-5 md:px-8 lg:px-12 py-16 border-t border-[#F1F5F9]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 text-center">
          <span
            data-testid="fasto-invite-chip"
            className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#DCFCE7] text-[#166534] max-w-max"
          >
            {c.hero.statusChip}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] max-w-2xl">
            {c.invite.title}
          </h2>
          <p className="text-[#475569] max-w-2xl">{c.invite.text}</p>
          <div className="flex flex-col items-center gap-2" data-testid="fasto-invite-cta">
            <LandingCta
              cta={presentationCta("fasto-invite-cta-button")}
              testId="fasto-invite-cta-button"
              className={`${THEME.accentBg} ${THEME.accentText} rounded-lg px-6 py-3 text-sm font-bold`}
            />
            <p className="text-xs font-semibold text-[#0F172A]">{EMAILS_BY_AREA.business}</p>
            <p className="text-xs text-[#94A3B8]">{c.invite.note}</p>
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
}
