import { describe, it, expect, beforeEach, afterEach, beforeAll, vi } from "vitest";
import { screen, fireEvent, createEvent } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { HeroB } from "../HeroB";
import { renderWithProviders, resetI18n } from "../../../test/test-utils";
import { smoothScrollTo } from "../../utils/scroll";
import { SECTION_IDS } from "../../constants/anchors";
import { translations } from "../../i18n/translations";

// smoothScrollTo mockado: nas unidades de UI, a prova é a CHAMADA com o
// destino da âncora (não a rolagem real — jsdom não rola).
vi.mock("../../utils/scroll", () => ({
  smoothScrollTo: vi.fn(),
}));

// Fontes lidas direto para scans estruturais (vitest não expõe CSS via ?raw).
const here = dirname(fileURLToPath(import.meta.url));
const motionCss = readFileSync(
  resolve(here, "../../../styles/motion.css"),
  "utf-8"
);
const heroBSource = readFileSync(resolve(here, "../HeroB.tsx"), "utf-8");
const canvasSource = readFileSync(
  resolve(here, "../ConstellationCanvas.tsx"),
  "utf-8"
);

describe("HeroB (RN-022-2 — frame #111:12628)", () => {
  beforeAll(() => {
    // jsdom emite "Not implemented: getContext (without installing the
    // canvas npm package)" para cada getContext. Nos testes o canvas é
    // decorativo: substituição muda devolve null (guards do componente
    // tratam) e o ruído de stderr some. Não precisa restore — o jsdom é
    // recriado por arquivo de teste.
    HTMLCanvasElement.prototype.getContext =
      (() => null) as typeof HTMLCanvasElement.prototype.getContext;
  });

  beforeEach(() => {
    resetI18n();
    vi.mocked(smoothScrollTo).mockClear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("exibe H1, body e CTA único em PT conforme o frame", () => {
    renderWithProviders(<HeroB />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      translations.pt.heroB.headline
    );
    expect(screen.getByText(translations.pt.heroB.body)).toBeInTheDocument();

    const cta = screen.getByTestId("hero-cta-catalogo");
    expect(cta).toHaveTextContent("Veja como podemos ajudar");
    // Só um CTA na hero (sem botão WhatsApp adicional)
    expect(
      screen.queryByTestId("hero-whatsapp-cta")
    ).not.toBeInTheDocument();
  });

  it("CTA é âncora interna para #catalogo: preventDefault + smoothScrollTo (não é WhatsApp)", () => {
    renderWithProviders(<HeroB />);

    const cta = screen.getByTestId("hero-cta-catalogo");
    expect(cta.getAttribute("href")).toBe(`#${SECTION_IDS.catalogo}`);

    const event = createEvent.click(cta);
    const preventDefaultSpy = vi.spyOn(event, "preventDefault");
    fireEvent(cta, event);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(smoothScrollTo).toHaveBeenCalledWith(SECTION_IDS.catalogo);

    // Zero deep-links wa.me na hero (o canal ficou no trust panel — RN-024-2)
    const links = screen
      .getByTestId("hero-cta-catalogo")
      .closest("section")
      ?.querySelectorAll('a[href^="https://wa.me"]');
    expect(links).toHaveLength(0);
  });

  it("removeu eyebrow, microcopy e gancho do frame (legado fora da hero)", () => {
    renderWithProviders(<HeroB />);

    expect(
      screen.queryByText(/Tecnologia para negócios que crescem/)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Escopo, suporte e condições/)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Veja qual solução faz sentido/)
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("section-hook")).not.toBeInTheDocument();
    // Headline legado fora também
    expect(
      screen.queryByText(/Menos rotina dispersa/)
    ).not.toBeInTheDocument();
  });

  it("canvas de partículas presente (hero-canvas) e sem <img> do hub orbital noturno", () => {
    renderWithProviders(<HeroB />);

    const canvasWrapper = screen.getByTestId("hero-canvas");
    expect(canvasWrapper).toHaveAttribute("aria-hidden", "true");
    expect(canvasWrapper.querySelector("canvas")).not.toBeNull();

    expect(
      screen.queryByAltText(/hub orbital noturno/i)
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("source-scan: HeroB sem tokens legados (7B5EA7/wa.me/hub-orbital) e canvas sem 7B5EA7", () => {
    expect(heroBSource).not.toMatch(/7B5EA7|wa\.me|hub-orbital/i);
    expect(canvasSource).not.toMatch(/7B5EA7/i);
  });

  it("conteúdo usa a classe utilitária motion-safe (fade/slide-in)", () => {
    renderWithProviders(<HeroB />);

    expect(
      screen.getByRole("heading", { level: 1 }).closest(".motion-safe")
    ).not.toBeNull();
    expect(
      screen.getByTestId("hero-canvas").classList.contains("motion-safe")
    ).toBe(true);
  });

  it("motion.css desativa a animação sob prefers-reduced-motion: reduce (RN-022)", () => {
    const mediaIndex = motionCss.indexOf("@media (prefers-reduced-motion: reduce)");
    expect(mediaIndex).toBeGreaterThan(-1);

    const reducedBlock = motionCss.slice(mediaIndex);
    expect(reducedBlock).toContain(".motion-safe");
    expect(reducedBlock).toContain("animation: none");
  });

  it("reduced-motion: canvas renderiza estático — nenhum frame RAF agendado (RN-022)", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
    } as unknown as MediaQueryList);
    const rafSpy = vi.spyOn(window, "requestAnimationFrame");

    const { unmount } = renderWithProviders(<HeroB />);
    unmount();

    expect(rafSpy).not.toHaveBeenCalled();
  });

  it("canvas vivo: sem redução, o loop RAF é agendado", () => {
    const rafSpy = vi.spyOn(window, "requestAnimationFrame");

    const { unmount } = renderWithProviders(<HeroB />);
    unmount();

    expect(rafSpy.mock.calls.length).toBeGreaterThan(0);
  });

  it("renderiza H1/body/CTA em EN quando o idioma persistido é en (RN-004)", () => {
    renderWithProviders(<HeroB />, { language: "en" });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Your business needs to be seen. Your routine needs to work. We help with both."
    );
    expect(
      screen.getByText(
        "We build customized websites to boost your business, bespoke systems to simplify beauty-industry management, and solutions to automate WhatsApp service. Everything designed to make your routine easier and bring you closer to your customers."
      )
    ).toBeInTheDocument();
    expect(screen.getByTestId("hero-cta-catalogo")).toHaveTextContent(
      "See how we can help"
    );
  });

  it("renderiza H1/body/CTA em ES quando o idioma persistido é es (RN-004)", () => {
    renderWithProviders(<HeroB />, { language: "es" });

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Tu negocio necesita aparecer. Tu rutina necesita funcionar. Nosotros te ayudamos con ambos."
    );
    expect(
      screen.getByText(
        "Creamos sitios personalizados para valorar tu negocio, sistemas propios para simplificar la gestión en el área de la belleza y soluciones para automatizar la atención por WhatsApp. Todo pensado para facilitar tu rutina y acercarte a tus clientes."
      )
    ).toBeInTheDocument();
    expect(screen.getByTestId("hero-cta-catalogo")).toHaveTextContent(
      "Mira cómo podemos ayudarte"
    );
  });

  it("dicionário heroB contém apenas headline/body/ctaAid nos 3 idiomas (substituição)", () => {
    for (const lang of ["pt", "en", "es"] as const) {
      expect(Object.keys(translations[lang].heroB).sort()).toEqual([
        "body",
        "ctaAid",
        "headline",
      ]);
    }
  });
});
