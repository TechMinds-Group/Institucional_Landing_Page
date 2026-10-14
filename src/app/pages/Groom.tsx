import { Sprout, Bot, Flame, Scissors, MessageCircle, CalendarCheck, ChartNoAxesCombined, ArrowRight, BadgeCheck, UserRoundSearch, ScanFace, Repeat, DatabaseBackup, ChevronDown, Minus } from "lucide-react";
import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Logo } from "../components/Logo";
// DEBT-003 (RN-024-1): Deep-links do WhatsApp vêm do módulo único de contatos
// — substituição mecânica dos literais codificados diretamente no código (sem mudança de copy).
import {
  buildWhatsAppUrl,
  WHATSAPP_GROOM_TRIAL_MESSAGE,
  WHATSAPP_GROOM_PLAN_ESSENCIAL_MESSAGE,
  WHATSAPP_GROOM_PLAN_PROFISSIONAL_MESSAGE,
  WHATSAPP_GROOM_FLOATING_MESSAGE,
} from "../constants/contacts";

const svgPaths = {
  p12fd63e0: "M2 22C2 17.5 5.5 14 10 14C11.5 14 12.8 14.4 14 15",
  p13053670: "M3.46591 13.8471C3.62617 13.9477 3.81168 14.0008 4.0009 14.0001H11.0001C11.1618 13.9996 11.3213 14.0383 11.4648 14.113C11.6083 14.1876 11.7315 14.296 11.8239 14.4287C11.9163 14.5615 11.9752 14.7147 11.9954 14.8752C12.0156 15.0357 11.9966 15.1987 11.94 15.3502L10.0202 21.3706C9.99015 21.4799 9.99814 21.5963 10.0429 21.7005C10.0876 21.8047 10.1665 21.8906 10.2665 21.9441C10.3665 21.9976 10.4817 22.0155 10.5932 21.9949C10.7047 21.9742 10.8059 21.9163 10.8801 21.8306L20.779 11.63C20.8982 11.483 20.9733 11.3052 20.9955 11.1173C21.0177 10.9294 20.9861 10.739 20.9045 10.5683C20.8228 10.3976 20.6943 10.2535 20.5341 10.1529C20.3738 10.0523 20.1883 9.99924 19.9991 9.99988H12.9999C12.8382 10.0004 12.6787 9.96169 12.5352 9.88703C12.3917 9.81239 12.2685 9.70404 12.1761 9.57128C12.0837 9.43853 12.0248 9.28533 12.0046 9.12484C11.9844 8.96434 12.0034 8.80133 12.06 8.6498L13.9798 2.62944C14.0099 2.52008 14.0019 2.40375 13.9571 2.29953C13.9124 2.19531 13.8335 2.10941 13.7335 2.05591C13.6335 2.00242 13.5183 1.98451 13.4068 2.00514C13.2953 2.02576 13.1941 2.08369 13.1199 2.16941L3.22099 12.37C3.10178 12.517 3.02671 12.6948 3.00451 12.8827C2.98231 13.0707 3.01387 13.261 3.09555 13.4317C3.17722 13.6025 3.30565 13.7465 3.46591 13.8471Z",
  p14571d48: "M18.1669 8.33351C18.5475 10.2013 18.2762 12.143 17.3984 13.835C16.5206 15.527 15.0893 16.8669 13.3431 17.6313C11.597 18.3957 9.64157 18.5383 7.80296 18.0355C5.96436 17.5326 4.35371 16.4147 3.23961 14.868C2.12552 13.3214 1.57532 11.4395 1.68077 9.53633C1.78622 7.63312 2.54095 5.82358 3.81909 4.40948C5.09723 2.99538 6.82153 2.0622 8.70444 1.76555C10.5873 1.4689 12.515 1.82672 14.166 2.77934M7.49971 9.16644L9.99971 11.6664L18.333 3.33311",
  p163a41e0: "M22.0008 12C22.0008 17.5233 17.5233 22.0008 12 22.0008M22.0008 12C22.0008 6.47671 17.5233 1.9992 12 1.9992M22.0008 12H1.9992M12 22.0008C6.47671 22.0008 1.9992 17.5233 1.9992 12M12 22.0008C9.43203 19.3044 7.99968 15.7236 7.99968 12C7.99968 8.27644 9.43203 4.69557 12 1.9992M12 22.0008C14.568 19.3044 16.0003 15.7236 16.0003 12C16.0003 8.27644 14.568 4.69557 12 1.9992M12 1.9992C6.47671 1.9992 1.9992 6.47671 1.9992 12",
  p16656200: "M12 0C6.48 0 2 4.48 2 10C2 12.17 2.69 14.17 3.86 15.81L2.29 20L6.59 18.46C8.15 19.44 10.01 20 12 20C17.52 20 22 15.52 22 10C22 4.48 17.52 0 12 0ZM16.36 13.17C16.13 13.8 15.1 14.36 14.6 14.42C13.63 14.55 12.85 14.2 11.5 13.54C9.36 12.47 7.96 10.27 7.83 10.1C7.7 9.93 6.8 8.72 6.8 7.47C6.8 6.22 7.42 5.62 7.65 5.36C7.88 5.1 8.15 5.03 8.32 5.03C8.49 5.03 8.65 5.03 8.79 5.04C8.95 5.05 9.16 4.97 9.37 5.45C9.58 5.93 10.09 7.18 10.15 7.31C10.21 7.44 10.25 7.59 10.17 7.76C9.77 8.56 9.3 8.5 9.53 8.9C10.47 10.45 11.35 10.93 12.7 11.6C12.95 11.73 13.1 11.7 13.23 11.54C13.36 11.38 13.84 10.81 14 10.56C14.16 10.31 14.32 10.35 14.54 10.43C14.76 10.51 16 11.12 16.25 11.25C16.5 11.38 16.66 11.44 16.72 11.54C16.78 11.64 16.78 12.12 16.55 12.68L16.36 13.17Z",
  p19e35a00: "M8 1.9992V5.99952M16 1.9992V5.99952M3 9.99984H21M14 14.0002L10 18.0005M10 14.0002L14 18.0005M5 3.99936H19C20.1046 3.99936 21 4.89486 21 5.99952V20.0006C21 21.1053 20.1046 22.0008 19 22.0008H5C3.89543 22.0008 3 21.1053 3 20.0006V5.99952C3 4.89486 3.89543 3.99936 5 3.99936Z",
  p221839c0: "M13.3328 4L6.0002 11.3328L2.6672 7.99971",
  p23bc3600: "M10.2668 21.0008C10.4423 21.3048 10.6948 21.5573 10.9988 21.7329C11.3028 21.9084 11.6477 22.0008 11.9988 22.0008C12.3499 22.0008 12.6947 21.9084 12.9988 21.7329C13.3028 21.5573 13.5553 21.3048 13.7308 21.0008M3.26127 15.3263C3.13064 15.4695 3.04442 15.6476 3.01313 15.8389C2.98183 16.0302 3.00679 16.2264 3.08498 16.4038C3.16317 16.5812 3.29121 16.732 3.45353 16.8379C3.61586 16.9439 3.80546 17.0003 3.99929 17.0005H19.9996C20.1934 17.0005 20.3831 16.9443 20.5455 16.8386C20.7079 16.7328 20.8361 16.5822 20.9145 16.4049C20.9929 16.2277 21.0181 16.0315 20.9871 15.8402C20.956 15.6488 20.8701 15.4707 20.7396 15.3273C19.4096 13.9562 17.9996 12.4991 17.9996 7.99971C17.9996 6.40827 17.3674 4.88202 16.2422 3.75671C15.1169 2.63139 13.5908 1.9992 11.9995 1.9992C10.4081 1.9992 8.88197 2.63139 7.75673 3.75671C6.63149 4.88202 5.99933 6.40827 5.99933 7.99971C5.99933 12.4991 4.5883 13.9562 3.26127 15.3263Z",
  p26837680: "M4.9992 21V15M12 21V9M19.0008 21V3",
  p26add900: "M9.08961 8.99935C9.32473 8.33097 9.78882 7.76736 10.3997 7.40836C11.0105 7.04936 11.7287 6.91812 12.4271 7.03791C13.1254 7.15769 13.7588 7.52076 14.2151 8.06281C14.6714 8.60485 14.9211 9.2909 14.9201 9.99943C14.9201 11.9996 11.9198 12.9997 11.9198 12.9997M12 17.0004H12.01M22.0008 12C22.0008 17.5233 17.5233 22.0008 12 22.0008C6.47671 22.0008 1.9992 17.5233 1.9992 12C1.9992 6.47671 6.47671 1.9992 12 1.9992C17.5233 1.9992 22.0008 6.47671 22.0008 12Z",
  p28682900: "M14.4919 16.6298C14.2714 16.6849 14.0387 16.6632 13.8321 16.5684C11.0543 15.2051 8.80643 12.9599 7.43964 10.1839C7.33841 9.97621 7.31219 9.73993 7.36542 9.51515C7.41865 9.29037 7.54806 9.09094 7.73166 8.95076L8.1997 8.59973C8.44811 8.41342 8.64973 8.17183 8.7886 7.8941C8.92746 7.61637 8.99976 7.31011 8.99976 6.9996V3.99936C8.99976 3.46888 8.78903 2.96014 8.41393 2.58503C8.03882 2.20993 7.53008 1.9992 6.9996 1.9992H3.99936C3.46888 1.9992 2.96014 2.20993 2.58503 2.58503C2.20993 2.96014 1.9992 3.46888 1.9992 3.99936C1.9992 8.77364 3.89578 13.3524 7.2717 16.7283C10.6476 20.1042 15.2264 22.0008 20.0006 22.0008C20.5311 22.0008 21.0399 21.7901 21.415 21.415C21.7901 21.0399 22.0008 20.5311 22.0008 20.0006V17.0004C22.0008 16.4699 21.7901 15.9612 21.415 15.5861C21.0399 15.211 20.5311 15.0002 20.0006 15.0002H17.0004C16.6899 15.0002 16.3836 15.0725 16.1059 15.2114C15.8282 15.3503 15.5866 15.5519 15.4003 15.8003L15.0452 16.2653C14.9076 16.4462 14.7124 16.5747 14.4919 16.6298Z",
  p2df9a900: "M4.166 10H15.834M10 15.834L15.834 10L10 4.166",
  p377ff800: "M8.12012 8.12012L12.0001 12.0001M20.0001 4L8.12012 15.88M14.7998 14.7998L19.9998 19.9998M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6ZM9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18Z",
  p394a7400: "M3.7494 9H14.2506M9 14.2506L14.2506 9L9 3.7494",
  p3b2f3cc0: "M13.9998 1.9992H6.0006C5.47022 1.9992 4.96156 2.20993 4.58653 2.58504C4.21149 2.96014 4.0008 3.46889 4.0008 3.99936V20.0006C4.0008 20.5311 4.21149 21.0399 4.58653 21.415C4.96156 21.7901 5.47022 22.0008 6.0006 22.0008H17.9994C18.5298 22.0008 19.0384 21.7901 19.4135 21.415C19.7885 21.0399 19.9992 20.5311 19.9992 20.0006V7.99968M13.9998 1.9992C14.3163 1.99869 14.6298 2.06081 14.9222 2.18199C15.2147 2.30316 15.4802 2.481 15.7036 2.70526L19.2913 6.29355C19.5161 6.51707 19.6944 6.78293 19.8159 7.07577C19.9374 7.36861 19.9997 7.68263 19.9992 7.99968M13.9998 1.9992V6.9996C13.9998 7.26484 14.1051 7.51921 14.2927 7.70676C14.4802 7.89431 14.7345 7.99968 14.9997 7.99968L19.9992 7.99968M9.0003 15.0002H14.9997",
  p95db000: "M7.50025 9.9996L9.16675 11.6663L12.4997 8.33288M16.666 10.8333C16.666 15.0001 13.7496 17.0835 10.2833 18.2919C10.1018 18.3534 9.90462 18.3505 9.72503 18.2836C6.25038 17.0835 3.334 15.0001 3.334 10.8333V4.99982C3.334 4.7788 3.42179 4.56683 3.57805 4.41054C3.73432 4.25426 3.94626 4.16646 4.16725 4.16646C5.83375 4.16646 7.91687 3.16642 9.36673 1.89972C9.54326 1.74888 9.76782 1.666 10 1.666C10.2322 1.666 10.4567 1.74888 10.6333 1.89972C12.0915 3.17476 14.1662 4.16646 15.8327 4.16646C16.0537 4.16646 16.2657 4.25426 16.4219 4.41054C16.5782 4.56683 16.666 4.7788 16.666 4.99982V10.8333Z",
  pa8388c0: "M10.9999 20.001H1.9992M19.0006 20.0012L12.242 21.6903C12.0946 21.727 11.9408 21.7297 11.7922 21.6982C11.6436 21.6666 11.5042 21.6016 11.3844 21.5081C11.2647 21.4146 11.1679 21.2951 11.1012 21.1586C11.0346 21.0221 11 20.8722 10.9999 20.7203V4.56294C11.0001 4.25911 11.0695 3.95833 11.2029 3.68533C11.3363 3.41234 11.5301 3.17332 11.7696 2.98642C12.0092 2.79952 12.2882 2.66964 12.5854 2.60665C12.8827 2.54366 13.1903 2.54922 13.4851 2.6229L17.4854 3.62292C17.9182 3.73107 18.3023 3.98075 18.5768 4.33226C18.8513 4.68378 19.0005 5.11696 19.0006 5.56296V20.0012ZM19.0006 20.0012L22.0008 20.001M10.9999 4.00073H7.99968C7.4692 4.00073 6.96046 4.21145 6.58535 4.58653C6.21025 4.96161 5.99952 5.47032 5.99952 6.00077V20.001M14.0002 12.0009H14.0102",
};

// RN-033-2/RN-034 — "Rede de módulos" (frame #194:580 — delta 13/10):
// barramento de sincronização à esquerda + 3 módulos empilhados com fluxo
// âmbar — WhatsApp (IN, destaque âmbar) → Agenda (SYNC) → Gestão (OUT).
// 0 assets raster; textos PT fixos (RN-018); tags/descrições em mono
// (IBM Plex Mono no frame — font-mono nativo).
const MODULE_NODES = [
  { id: "whatsapp", tag: "IN", name: "WhatsApp", desc: "Confirma e lembra o cliente", icon: MessageCircle, highlight: true },
  { id: "agenda", tag: "SYNC", name: "Agenda", desc: "Reserva o horário escolhido", icon: CalendarCheck, highlight: false },
  { id: "gestao", tag: "OUT", name: "Gestão", desc: "Reúne serviços e faturamento", icon: ChartNoAxesCombined, highlight: false },
] as const;

function HeroEcosystem() {
  return (
    <div data-testid="groom-ecosystem" data-name="module-network" className="relative mx-auto w-full max-w-[420px] pl-14">
      {/* Barramento de sincronização + ponto de conexão */}
      <span aria-hidden className="absolute bottom-10 left-4 top-10 w-[1.5px] bg-[#303342]" />
      <span aria-hidden className="absolute left-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-[#f1c75c]" />
      <div className="flex flex-col">
        {MODULE_NODES.map((module, index) => (
          <Fragment key={module.id}>
            {index > 0 && (
              <span
                aria-hidden
                data-testid={`eco-flow-${index}`}
                className="mx-auto h-6 w-[1.5px] bg-[#f1c75c]"
              />
            )}
            <div
              data-testid={`eco-node-${module.id}`}
              className={`flex flex-col justify-center gap-2.5 rounded-lg border p-4 ${
                module.highlight
                  ? "border-[#f1c75c] bg-[#f1c75c] text-[#0b0f1a]"
                  : "border-[#303342] bg-[#171c22]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <module.icon
                    size={20}
                    aria-hidden
                    className={module.highlight ? "text-[#0b0f1a]" : "text-[#f7f8fc]"}
                  />
                  <span className={`text-xl font-bold ${module.highlight ? "text-[#0b0f1a]" : "text-[#f7f8fc]"}`}>
                    {module.name}
                  </span>
                </span>
                <span className={`font-mono text-[10px] ${module.highlight ? "text-[#0b0f1a]" : "text-[#b3bacb]"}`}>
                  {module.tag}
                </span>
              </div>
              <p className={`font-mono text-[11px] leading-[1.5] ${module.highlight ? "text-[#0b0f1a]" : "text-[#b3bacb]"}`}>
                {module.desc}
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

// RN-033-3 — Strip "Service segments" no fim do bloco Hero (antes de
// "Problemas e soluções"): copy literal do dossier g2 §3, sem links/CTAs.
function ServiceSegmentsStrip() {
  const segments = ["Barbearias", "Salões de beleza", "Estúdios de tatuagem", "Clínicas de estética"];
  return (
    <div data-testid="groom-segment-strip" data-name="service-segments" className="w-full border-t border-[#1f2937]/70 pt-8">
      <ul className="flex flex-wrap items-center justify-center gap-x-[14px] gap-y-[10px]">
        {segments.map((segment, index) => (
          <li key={segment} className="flex items-center gap-[14px]">
            {index > 0 && <span aria-hidden className="size-[4px] rounded-full bg-[#f1c75c]/60" />}
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold whitespace-nowrap text-[#b3bacb] text-[13px] lg:text-[14px]">{segment}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
];

/**
 * Navbar do Groom — alinhada ao padrão ProductNavbar das landings
 * (RN-026/CR-010): header sticky com bg + border-b + backdrop-blur,
 * h-16 md:h-20, marca text-lg + pill do produto (accent #f1c75c),
 * 5 âncoras desktop (gap-7 text-sm) e CTA TESTAR GRÁTIS no desktop
 * E no mobile — sem hamburger/drawer (PEND-012: menu mobile só quando
 * decidido; paridade com VibeCut/Lumen).
 */
function GroomNavbar() {
  const navigate = useNavigate();

  return (
    <header
      data-testid="groom-nav"
      className="sticky top-0 z-40 w-full bg-[#0b0f1a]/90 backdrop-blur border-b border-[#1f2937]/70"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-5 md:px-8 lg:px-12">
        {/* Bloco de marca — padrão de identidade (CR-010): Logo TechMinds + pill do produto */}
        <div
          data-testid="groom-brand"
          className="flex items-center gap-2 min-w-0 cursor-pointer"
          onClick={() => navigate("/")}
          title="Voltar à página inicial"
        >
          <Logo className="w-7 h-7" />
          <span className="text-lg font-bold text-[#f8fafc] whitespace-nowrap">TechMinds</span>
          <span data-testid="groom-brand-chip" className="text-sm font-semibold px-2.5 py-1 rounded-full border border-[#f1c75c]/40 text-[#f1c75c] bg-[#f1c75c]/10">Groom</span>
        </div>

        {/* Âncoras locais — desktop (some no mobile, padrão das landings) */}
        <nav data-testid="groom-nav-links" className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#b3bacb]">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="relative hover:text-[#f8fafc] transition-colors">{link.label}</a>
          ))}
        </nav>

        {/* CTA — desktop (deep-link WhatsApp — DEBT-003/ADR-010) */}
        <div className="hidden md:block">
          <a data-testid="groom-nav-trial-cta" href={buildWhatsAppUrl(WHATSAPP_GROOM_TRIAL_MESSAGE)} target="_blank" rel="noopener noreferrer" className="bg-[#f1c75c] flex items-center gap-2 px-5 py-2.5 rounded-lg hover:bg-[#f2cb69] transition-colors">
            <p className="font-bold text-[#0f172a] text-sm whitespace-nowrap">TESTAR GRÁTIS</p>
            <ArrowRight size={16} color="#0F172A" className="shrink-0" />
          </a>
        </div>
        {/* Mobile: mantém o CTA (conversão) — sem menu/nav */}
        <a data-testid="groom-nav-trial-cta" href={buildWhatsAppUrl(WHATSAPP_GROOM_TRIAL_MESSAGE)} target="_blank" rel="noopener noreferrer" className="md:hidden bg-[#f1c75c] flex items-center gap-[6px] px-4 py-2 rounded-lg">
          <p className="font-bold text-[#0f172a] text-xs whitespace-nowrap">TESTAR GRÁTIS</p>
          <ArrowRight size={13} color="#0F172A" className="shrink-0" />
        </a>
      </div>
    </header>
  );
}

function SectionHero() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0b0f1a] gap-8 lg:gap-[64px] items-center pb-10 lg:pb-[100px] pt-10 lg:pt-[64px] px-5 md:px-12 lg:px-[120px] relative shrink-0 to-[#1a2233] w-full" data-name="section-hero">
      {/* Hero body */}
      <div data-testid="groom-hero" className="max-w-7xl content-stretch flex flex-col lg:flex-row gap-[48px] items-center relative shrink-0 w-full">
        {/* Hero left */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative w-full">

          {/* Eyebrow novo (âmbar) + H1 único, sem span — deltas deste bloco (dossier g2 §3) */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full">
            <p data-testid="groom-hero-eyebrow" className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#f1c75c] text-[12px] uppercase tracking-[0.08em]">SUA AGENDA ORGANIZADA. SEU NEGÓCIO NO CONTROLE.</p>
            <h1 className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.15] relative text-[#f8fafc] text-3xl lg:text-[44px]">Enquanto você organiza agenda no papel, seu concorrente está faturando com o Groom.</h1>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#b3bacb] text-[16px] w-[min-content]">O Groom é o sistema mais completo de agendamento e gestão para barbearias, salões de beleza, estúdios de tatuagem e clínicas de estética. O cliente agenda online, você recebe no WhatsApp, ninguém perde horário e seu faturamento escala.</p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <a data-testid="groom-hero-cta" href={buildWhatsAppUrl(WHATSAPP_GROOM_TRIAL_MESSAGE)} target="_blank" rel="noopener noreferrer" className="bg-[#f1c75c] content-stretch flex gap-[10px] items-center w-full md:w-auto px-[32px] py-4 md:py-[16px] relative rounded-[8px] shrink-0 justify-center md:justify-start hover:bg-[#f2cb69] transition-colors">
              <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[15px] text-center">QUERO TESTAR GRÁTIS POR 15 DIAS</p>
              <svg className="relative shrink-0" fill="none" height="18" viewBox="0 0 18 18" width="18">
                <path d={svgPaths.p394a7400} stroke="#0F172A" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </a>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px]">Sem cartão de crédito. Sem compromisso. Configuração em 5 minutos.</p>
          </div>
        </div>
        {/* Ecosystem orbital — composição vetorial (0 raster, RN-034) */}
        <div className="relative flex-1 min-w-0 w-full">
          <HeroEcosystem />
        </div>
      </div>
      {/* Service segments — fim do bloco Hero, antes de "Problemas e soluções" (RN-033-3) */}
      <div className="max-w-7xl w-full">
        <ServiceSegmentsStrip />
      </div>
    </div>
  );
}

function SectionPainSolution() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col gap-8 lg:gap-[64px] items-center [&>*]:max-w-7xl px-5 md:px-12 lg:px-[120px] py-14 lg:py-[96px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
        <div className="bg-[rgba(13,110,253,0.08)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0">
          <div aria-hidden className="absolute border border-[#0d6efd] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d6efd] text-[12px] uppercase whitespace-nowrap">CONTROLE TOTAL</p>
        </div>
        <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#0f172a] text-2xl md:text-3xl lg:text-[36px] text-center w-[min-content]">Você reconhece esses problemas na sua gestão?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative shrink-0 w-full">
        {/* Pain Card 1 */}
        <div className="content-stretch flex flex-col gap-[20px] h-auto items-start p-[24px] relative rounded-[12px] shrink-0 w-full">
          <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(15,23,42,0.02)]" />
          <div className="bg-[rgba(13,110,253,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
              <path d={svgPaths.p19e35a00} stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#0f172a] w-full">
            <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Cliente marcou e simplesmente não apareceu?</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[14px] w-full">Lembretes automáticos pelo WhatsApp ajudam a reduzir as faltas.</p>
          </div>
        </div>
        {/* Pain Card 2 */}
        <div className="content-stretch flex flex-col gap-[20px] h-auto items-start p-[24px] relative rounded-[12px] shrink-0 w-full">
          <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(15,23,42,0.02)]" />
          <div className="bg-[rgba(13,110,253,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
              <path d={svgPaths.p3b2f3cc0} stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#0f172a] w-full">
            <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Anotou no papel e perdeu o agendamento?</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[14px] w-full">Sua agenda digital fica organizada e segura na nuvem.</p>
          </div>
        </div>
        {/* Pain Card 3 */}
        <div className="content-stretch flex flex-col gap-[20px] h-auto items-start p-[24px] relative rounded-[12px] shrink-0 w-full">
          <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(15,23,42,0.02)]" />
          <div className="bg-[rgba(13,110,253,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
              <path d={svgPaths.pa8388c0} stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#0f172a] w-full">
            <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Planos de assinatura e serviços avulsos</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[14px] w-full">Perfil, validade e serviços separados para simplificar a gestão.</p>
          </div>
        </div>
        {/* Pain Card 4 */}
        <div className="content-stretch flex flex-col gap-[20px] h-auto items-start p-[24px] relative rounded-[12px] shrink-0 w-full">
          <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(15,23,42,0.02)]" />
          <div className="bg-[rgba(13,110,253,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
              <path d={svgPaths.p26add900} stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#0f172a] w-full">
            <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Seu barbeiro chegou e não sabia a agenda do dia?</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[14px] w-full">Cada profissional acompanha a agenda em tempo real pelo celular.</p>
          </div>
        </div>
        {/* Pain Card 5 */}
        <div className="border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[20px] h-auto items-start overflow-clip p-[24px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(15,23,42,0.02)] shrink-0 w-full">
          <div className="bg-[rgba(13,110,253,0.06)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
              <g>
                <g><mask fill="white" id="pb1"><rect height="8" rx="1" width="4" x="3" y="14" /></mask><rect height="8" mask="url(#pb1)" rx="1" stroke="#0D6EFD" strokeWidth="4" width="4" x="3" y="14" /></g>
                <g><mask fill="white" id="pb2"><rect height="14" rx="1" width="4" x="10" y="8" /></mask><rect height="14" mask="url(#pb2)" rx="1" stroke="#0D6EFD" strokeWidth="4" width="4" x="10" y="8" /></g>
                <g><mask fill="white" id="pb3"><rect height="10" rx="1" width="4" x="17" y="12" /></mask><rect height="10" mask="url(#pb3)" rx="1" stroke="#0D6EFD" strokeWidth="4" width="4" x="17" y="12" /></g>
                <line stroke="#0D6EFD" strokeWidth="2" x1="2" x2="22" y1="21" y2="21" />
              </g>
            </svg>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 text-[#0f172a] w-full">
            <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Terça-feira vazia e você nem percebeu o padrão?</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] w-full">Identifique horários vazios e encontre oportunidades para promoções.</p>
          </div>
        </div>
        {/* Pain Card 6 */}
        <div className="border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[20px] h-auto items-start overflow-clip p-[24px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(15,23,42,0.02)] shrink-0 w-full">
          <div className="bg-[rgba(13,110,253,0.06)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
              <circle cx="9" cy="6" r="3" stroke="#0D6EFD" strokeWidth="2" />
              <path d={svgPaths.p12fd63e0} stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
              <circle cx="18" cy="18" r="3" stroke="#0D6EFD" strokeWidth="2" />
              <line stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" x1="19" x2="19" y1="19" y2="20" />
            </svg>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 text-[#0f172a] w-full">
            <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Cliente sumiu e você nem notou?</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] w-full">Acompanhe a frequência dos clientes e lembre os aniversários.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHowItWorks() {
  const steps = [
    { num: "01", icon: <path d={svgPaths.p163a41e0} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />, title: "Cliente agenda em segundos", desc: "Pelo seu link exclusivo ou WhatsApp, o cliente escolhe profissional, serviço e horário." },
    { num: "02", icon: <path d={svgPaths.p28682900} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />, title: "WhatsApp notifica", desc: "O profissional confirma ou recusa o agendamento e o cliente é notificado." },
    { num: "03", icon: <path d={svgPaths.p23bc3600} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />, title: "Lembretes automáticos", desc: "Mensagens em horários estratégicos, sem trabalho manual. Tudo automático." },
    { num: "04", icon: <path d={svgPaths.p26837680} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />, title: "Você domina o painel", desc: "Faturamento, ocupação, planos, equipe e análises em um só lugar." },
  ];
  return (
    <div id="como-funciona" className="bg-[#1a2233] content-stretch flex flex-col gap-8 lg:gap-[64px] items-center [&>*]:max-w-7xl px-5 md:px-12 lg:px-[120px] py-14 lg:py-[96px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
        <div className="bg-[rgba(241,199,92,0.08)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0">
          <div aria-hidden className="absolute border border-[#f1c75c] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f1c75c] text-[12px] uppercase whitespace-nowrap">SIMPLICIDADE MÁXIMA</p>
        </div>
        <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#f8fafc] text-2xl md:text-3xl lg:text-[36px] text-center w-[min-content]">Como o Groom Funciona</p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-6 relative shrink-0 w-full">
        {steps.map((s) => (
          <div key={s.num} className="bg-[#161b22] content-stretch flex flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px] self-stretch">
            <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#f1c75c] text-[32px] whitespace-nowrap">{s.num}</p>
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24">{s.icon}</svg>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[18px] w-full">{s.title}</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] w-full">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckIcon({ color = "#F1C75C" }: { color?: string }) {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
      <g clipPath="url(#cc)">
        <path d={svgPaths.p14571d48} stroke={color} strokeLinecap="round" strokeWidth="2" />
      </g>
      <defs><clipPath id="cc"><rect fill="white" height="20" width="20" /></clipPath></defs>
    </svg>
  );
}

function CheckSmIcon({ color = "#0D6EFD" }: { color?: string }) {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d={svgPaths.p221839c0} stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function SectionFeatures() {
  const features = [
    { title: "WhatsApp Integrado", desc: "Agendamentos e confirmações no seu WhatsApp." },
    { title: "Agendamento Online 24h", desc: "Seu link de agendamento sempre disponível." },
    { title: "Dashboard Inteligente", desc: "Uma visão clara da operação do negócio." },
    { title: "Clube de Assinaturas (MRR)", desc: "Planos recorrentes para fidelizar clientes." },
    { title: "Relatórios e Simulador", desc: "Dados para apoiar suas decisões." },
    { title: "Gestão de Equipe", desc: "Profissionais, comissões e agenda conectados." },
    { title: "Catálogo de Serviços", desc: "Seus serviços organizados em um catálogo." },
    { title: "Migração de Dados", desc: "Traga seus dados do sistema anterior." },
    { title: "Suporte Ultra Rápido", desc: "Atendimento direto com a nossa equipe." },
    { title: "Feriados e Bloqueios", desc: "Controle a disponibilidade da agenda." },
    { title: "Tema Claro/Escuro", desc: "Escolha o visual que funciona para você." },
    { title: "Multi-idioma nativo", desc: "Idiomas disponíveis dentro do software." },
  ];
  return (
    <div id="funcionalidades" className="bg-[#f8fafc] content-stretch flex flex-col gap-8 lg:gap-[56px] items-center [&>*]:max-w-7xl px-5 md:px-12 lg:px-[120px] py-14 lg:py-[96px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
        <div className="bg-[rgba(13,110,253,0.08)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0">
          <div aria-hidden className="absolute border border-[#0d6efd] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d6efd] text-[12px] uppercase whitespace-nowrap">RECURSOS COMPLETOS</p>
        </div>
        <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#0f172a] text-2xl md:text-3xl lg:text-[36px] text-center w-[min-content]">Tudo que você precisa em uma única plataforma.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative shrink-0 w-full">
        {features.map((f) => (
          <div key={f.title} className="content-stretch flex flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px]">
            <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]"><CheckIcon /></div>
              <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[16px]">{f.title}</p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-[min-content]">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#161b22] content-stretch flex gap-[20px] items-center p-[32px] relative rounded-[12px] shrink-0 w-full">
        <div aria-hidden className="absolute border border-[#f1c75c] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="bg-[rgba(241,199,92,0.13)] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]">
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
            <path d={svgPaths.p13053670} stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
        {/* Callout — copy dividida em título (bold) + descrição (dossier g2 §6, RN-036-3) */}
        <div className="[word-break:break-word] flex-[1_0_0] flex flex-col gap-[6px] min-w-px relative">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative text-[#f8fafc] text-[15px]">Enquanto outros sistemas resolvem um pedaço do problema, o Groom entrega a solução completa.</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative text-[#cbd5e1] text-[14px]">Agendamento, WhatsApp, assinaturas, dados e gestão — tudo no mesmo lugar.</p>
        </div>
      </div>
    </div>
  );
}

function SectionBenefits() {
  // RN-036/RN-014-1 — títulos trocam perguntas retóricas por benefícios curtos
  // (copy EXATA do dossier g2 §7); ícones lucide identificados no frame mobile
  // (dossier g2 §0): badge-check, bot, user-round-search, scan-face, repeat,
  // database-backup.
  const cards = [
    {
      icon: <BadgeCheck size={22} color="#f1c75c" />,
      title: "Essenciais sem surpresa",
      desc: "Recursos essenciais sem cobranças surpresa.",
    },
    {
      icon: <Bot size={22} color="#f1c75c" />,
      title: "Seu robô no WhatsApp 24h",
      desc: "Atende, agenda e confirma enquanto você cuida do negócio.",
    },
    {
      icon: <UserRoundSearch size={22} color="#f1c75c" />,
      title: "Recupere clientes inativos",
      desc: "Acompanhe a frequência e identifique quem deixou de voltar.",
    },
    {
      // RN-023-style gating (CR-007/CR-001/ADR-012): card estático — "Em breve"
      // já está na copy aprovada; sem link, sem data e sem promessa de
      // disponibilidade em outra linha.
      icon: <ScanFace size={22} color="#f1c75c" />,
      title: "VibeCut: visagismo com IA",
      desc: "Integração futura no plano Elite. Em breve, sugestões visuais de cortes para seus clientes.",
    },
    {
      icon: <Repeat size={22} color="#f1c75c" />,
      title: "Receita mais previsível",
      desc: "Clube de assinaturas para fidelizar clientes e organizar a receita recorrente.",
    },
    {
      icon: <DatabaseBackup size={22} color="#f1c75c" />,
      title: "Migração sem complicação",
      desc: "Do Tua Agenda, automática. De outros sistemas, assistida pela nossa equipe.",
    },
  ];

  return (
    <div id="diferenciais" className="bg-[#0b0f1a] content-stretch flex flex-col gap-8 lg:gap-[64px] items-center [&>*]:max-w-7xl px-5 md:px-12 lg:px-[120px] py-14 lg:py-[96px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
        <div className="bg-[rgba(241,199,92,0.08)] content-stretch flex items-center gap-[8px] px-[16px] py-[6px] relative rounded-[100px] shrink-0">
          <div aria-hidden className="absolute border border-[#f1c75c] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <Flame size={13} color="#f1c75c" className="shrink-0" />
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f1c75c] text-[12px] uppercase whitespace-nowrap">POR QUE O GROOM É DIFERENTE?</p>
        </div>
        <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[1.2] min-w-full relative shrink-0 text-[#f8fafc] text-2xl md:text-3xl lg:text-[40px] text-center w-[min-content]">O que o Groom faz pelo seu negócio que nenhum outro sistema faz</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative shrink-0 w-full">
        {cards.map((card) => (
          <div key={card.title} data-testid="groom-benefit-card" className="bg-[#161b22] content-stretch flex flex-col gap-[20px] items-start p-[32px] relative rounded-[12px]">
            <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
              {/* Ícones vetoriais 44×44 (0 assets raster — dossier g2 §7) */}
              <div className="bg-[rgba(241,199,92,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[44px]">
                {card.icon}
              </div>
              <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#f8fafc] text-[18px] flex-1 min-w-0">{card.title}</p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-full">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionPricing() {
  return (
    <div id="precos" className="bg-[#f8fafc] content-stretch flex flex-col gap-8 lg:gap-[56px] items-center [&>*]:max-w-7xl px-5 md:px-12 lg:px-[120px] py-14 lg:py-[96px] relative shrink-0 w-full">
      {/* Header */}
      <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0">
          <div aria-hidden className="absolute border border-[#0d6efd] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d6efd] text-[12px] uppercase whitespace-nowrap">PLANOS PARA O SEU MOMENTO</p>
        </div>
        <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[1.2] min-w-full relative shrink-0 text-[#0f172a] text-2xl md:text-3xl lg:text-[40px] text-center w-[min-content]">Escolha o plano ideal para automatizar seu atendimento e aumentar seu faturamento.</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[15px] text-center">Teste por 15 dias sem pagar nada. Cancele quando quiser, sem taxas e sem fidelidade.</p>
        <div className="w-[32px] h-[2px] bg-[#f1c75c] rounded-full" />
      </div>

      {/* Plans */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch relative shrink-0 w-full">

        {/* RN-014-2 — plano Essencial: nome UPPERCASE; limites EXATOS em fw600
        antes do divisor (dossier g2 §8); CTA WhatsApp deep-link (DEBT-003). */}
        <div data-testid="groom-plan-essencial" className="bg-white content-stretch flex flex-1 flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[16px]">
          <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="content-stretch flex items-center gap-[5px] px-[12px] py-[4px] relative rounded-[100px] shrink-0">
            <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[100px]" />
            <Sprout size={11} color="#64748b" className="shrink-0" />
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] uppercase whitespace-nowrap">OPERACIONAL BÁSICO</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#0f172a] text-[28px]">ESSENCIAL</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal italic leading-[1.4] not-italic relative shrink-0 text-[#64748b] text-[13px]">Para quem quer parar de perder tempo com agenda de papel e furos de horário.</p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal line-through not-italic relative shrink-0 text-[#94a3b8] text-[13px]">De R$ 49,90</p>
            <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0">
              <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#0f172a] text-[40px]">R$ 29,90</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#64748b] text-[14px]">/mês</p>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#64748b] text-[12px]">nos 3 primeiros meses</p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            {[
              "Agenda Inteligente Sem Furos — Diga adeus a horários duplicados e esquecimentos.",
              "Robô no WhatsApp 24h — Atende, agenda e confirma seus clientes automaticamente.",
              "Gestão Simplificada — Clientes, equipe, comissões e catálogo de serviços em um só lugar.",
            ].map((item) => (
              <div key={item} className="flex gap-[10px] items-start w-full">
                <svg className="shrink-0 mt-[2px]" fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d={svgPaths.p221839c0} stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
                </svg>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic text-[#0f172a] text-[13px] min-w-0">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-auto content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            {/* Limites EXATOS (RN-014), destacados fw600, antes do divisor */}
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 text-[#0f172a] text-[13px]">Inclui até 3 profissionais e 500 clientes.</p>
            <div aria-hidden className="relative w-full border-t border-[#e2e8f0] border-solid" />
            <a href={buildWhatsAppUrl(WHATSAPP_GROOM_PLAN_ESSENCIAL_MESSAGE)} target="_blank" rel="noreferrer" className="content-stretch flex items-center justify-center py-[14px] relative rounded-[8px] shrink-0 w-full">
              <div aria-hidden className="absolute border border-[#0f172a] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] tracking-wide whitespace-nowrap">COMEÇAR 15 DIAS GRÁTIS</p>
            </a>
          </div>
        </div>

        {/* Plan 2: Profissional (featured) */}
        <div data-testid="groom-plan-profissional" className="bg-[#0f172a] content-stretch drop-shadow-[0px_8px_24px_rgba(241,199,92,0.12)] flex flex-1 flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[16px]">
          <div aria-hidden className="absolute border-2 border-[#f1c75c] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="bg-[rgba(241,199,92,0.1)] content-stretch flex items-center gap-[6px] px-[12px] py-[4px] relative rounded-[100px] shrink-0">
            <div aria-hidden className="absolute border border-[#f1c75c] border-solid inset-0 pointer-events-none rounded-[100px]" />
            <Flame size={13} color="#f1c75c" className="shrink-0" />
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f1c75c] text-[11px] uppercase whitespace-nowrap">CAMPEÃO DE VENDAS</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#f8fafc] text-[28px]">PROFISSIONAL</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#94a3b8] text-[13px]">Para quem quer fidelizar clientes, gerar receita recorrente e crescer no automático.</p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal line-through not-italic relative shrink-0 text-[#475569] text-[13px]">De R$ 89,90</p>
            <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0">
              <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#f1c75c] text-[40px]">R$ 49,90</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#94a3b8] text-[14px]">/mês</p>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#94a3b8] text-[12px]">nos 3 primeiros meses</p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            {[
              "Tudo do Plano Essencial +",
              "Clube de Assinaturas Recorrente — Venda pacotes mensais e garanta dinheiro caindo na sua conta todo mês no automático.",
              "Site Próprio de Agendamento 24h — Seu cliente faz login e agenda sozinho pelo seu link.",
              "WhatsApp Turbinado — Seu cliente agenda, consulta planos e fala com a equipe enquanto você foca no que importa.",
            ].map((item) => (
              <div key={item} className="flex gap-[10px] items-start w-full">
                <svg className="shrink-0 mt-[2px]" fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d={svgPaths.p221839c0} stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
                </svg>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic text-[#cbd5e1] text-[13px] min-w-0">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-auto content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            {/* Limites EXATOS (RN-014), destacados fw600, antes do divisor */}
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 text-[#f8fafc] text-[13px]">Inclui até 5 profissionais e 1.000 clientes.</p>
            <div aria-hidden className="relative w-full border-t border-[#1f2937] border-solid" />
            <a href={buildWhatsAppUrl(WHATSAPP_GROOM_PLAN_PROFISSIONAL_MESSAGE)} target="_blank" rel="noreferrer" className="bg-[#f1c75c] content-stretch flex items-center justify-center py-[14px] relative rounded-[8px] shrink-0 w-full">
              <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] tracking-wide text-center">QUERO O PLANO PROFISSIONAL GRÁTIS</p>
            </a>
          </div>
        </div>

        {/* Plan 3: Elite — RN-015/CR-007: badge "Em breve" junto ao título e CTA
        desabilitado (sem href/handler); tokens neutros — ícone de coroa e paleta
        indigo do código pré-RN-014 removidos (dossier g2 §8). */}
        <div data-testid="groom-plan-elite" className="bg-white content-stretch flex flex-1 flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[16px]">
          <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="content-stretch flex items-center gap-[5px] px-[12px] py-[4px] relative rounded-[100px] shrink-0">
            <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[100px]" />
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[11px] uppercase whitespace-nowrap">MAIS COMPLETO — IA INTEGRADA</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="flex items-center gap-[12px] flex-wrap relative shrink-0">
              <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#0f172a] text-[28px]">ELITE</p>
              {/* Badge de disponibilidade (padrão RN-005/CR-002 — âmbar com dot) */}
              <span data-testid="groom-elite-badge" className="inline-flex items-center gap-[6px] rounded-full bg-[rgba(241,199,92,0.1)] border border-[#f1c75c] px-[10px] py-[3px] text-[12px] font-semibold text-[#745617] whitespace-nowrap">
                <span aria-hidden className="block size-[6px] rounded-full bg-[#f1c75c]" />
                Em breve
              </span>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#64748b] text-[13px]">Para estabelecimentos que querem lucrar mais com tecnologia de ponta.</p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal line-through not-italic relative shrink-0 text-[#94a3b8] text-[13px]">De R$ 149,90</p>
            <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0">
              <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#0f172a] text-[40px]">R$ 89,90</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#64748b] text-[14px]">/mês</p>
            </div>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#0f172a] text-[12px]">Por menos de R$ 3 por dia, tenha IA trabalhando pelo seu negócio!</p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            {[
              { emoji: false, text: "Tudo do Plano Profissional +" },
              { emoji: true, text: "VibeCut (App de Visagismo) — Fotografe o cliente e mostre na tela como ele ficaria com diferentes cortes e estilos." },
              { emoji: false, text: "IA de Negócios — Consultor inteligente que analisa seus dados, recupera clientes inativos e sugere ações para faturar mais." },
              { emoji: false, text: "Acesso Total — Todas as ferramentas e novidades do Groom liberadas primeiro para você." },
            ].map((item) => (
              <div key={item.text} className="flex gap-[10px] items-start w-full">
                {item.emoji
                  ? <span className="text-[14px] shrink-0 mt-[1px]">🤖</span>
                  : <svg className="shrink-0 mt-[2px]" fill="none" height="16" viewBox="0 0 16 16" width="16"><path d={svgPaths.p221839c0} stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" /></svg>
                }
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic text-[#0f172a] text-[13px] min-w-0">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-auto content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            {/* Limites EXATOS (RN-014), destacados fw600, antes do divisor */}
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 text-[#0f172a] text-[13px]">Inclui até 15 profissionais e 5.000 clientes.</p>
            <div aria-hidden className="relative w-full border-t border-[#e2e8f0] border-solid" />
            {/* RN-015 — sem CTA ativo: botão desabilitado (sem href/handler) */}
            <button disabled data-testid="groom-elite-cta" className="bg-[#e2e8f0] content-stretch flex items-center justify-center py-[14px] relative rounded-[8px] shrink-0 w-full cursor-not-allowed">
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[13px] tracking-wide whitespace-nowrap">DISPONÍVEL EM BREVE</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



function SectionFaq() {
  // RN-035 — accordion vertical (dossier g2 §9): uma pergunta aberta por vez
  // (padrão do design: 1 item expandido ao carregar); desktop chevron rotaciona,
  // mobile ícone `minus` no item aberto. Copy das Q&A 100% idêntica ao código
  // [Groom.tsx:557-564 pré-RN-014] — sem reescrita.
  const faqs = [
    { q: "Preciso de cartão de crédito para testar?", a: "Não. Oferecemos 15 dias totalmente grátis para você testar sem precisar cadastrar cartão ou qualquer compromisso financeiro inicial." },
    { q: "E se eu já uso outro sistema de agendamento?", a: "Vem do Tua Agenda? Importação automática em poucos cliques. Usa outro sistema? Fala com a gente que nosso time analisa e cuida de toda a migração dos seus dados pra você." },
    { q: "O Groom funciona para qualquer tipo de estabelecimento?", a: "Sim! O Groom foi feito para barbearias, salões de beleza, estúdios de tatuagem, clínicas de estética e qualquer negócio que trabalhe com agendamento de serviços e gestão de equipe." },
    { q: "Precisa instalar algum aplicativo?", a: "Nenhuma instalação é necessária. Tudo roda na nuvem direto do navegador e integrado ao seu WhatsApp corporativo. Configuração completa em apenas 5 minutos." },
    { q: "Tem suporte para me ajudar?", a: "Claro! Nosso time atende diretamente via WhatsApp de verdade. Sem respostas automáticas padrão, atendimento feito por pessoas prontas para te ajudar." },
    { q: "Posso cancelar quando quiser?", a: "Sim. Sem contratos ou multas. Você pode exportar seus dados a qualquer momento e solicitar o cancelamento da sua assinatura com 1 clique." },
  ];
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div id="faq" className="bg-[#0d1117] content-stretch flex flex-col gap-8 lg:gap-[56px] items-center [&>*]:max-w-7xl px-5 md:px-12 lg:px-[120px] py-14 lg:py-[96px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0">
          <div aria-hidden className="absolute border border-[#0d6efd] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d6efd] text-[12px] uppercase whitespace-nowrap">FAQ</p>
        </div>
        {/* Título lowercase — delta de copy g2 §9 */}
        <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#f8fafc] text-2xl md:text-3xl lg:text-[40px] text-center w-[min-content]">Perguntas frequentes</p>
      </div>
      <div data-testid="groom-faq" className="flex flex-col gap-[12px] relative shrink-0 w-full">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <div key={faq.q} data-testid="groom-faq-item" className="bg-[#161b22] content-stretch min-w-px relative rounded-[12px]">
              <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <button
                id={`groom-faq-button-${index}`}
                aria-expanded={open}
                aria-controls={`groom-faq-panel-${index}`}
                data-testid={`groom-faq-trigger-${index}`}
                onClick={() => setOpenIndex((curr) => (curr === index ? null : index))}
                className="relative w-full flex items-center justify-between gap-[12px] text-left px-[24px] py-[20px] cursor-pointer"
              >
                <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope:Bold',sans-serif] font-bold leading-[1.3] min-w-px relative text-[#f8fafc] text-[16px]">{faq.q}</p>
                {/* Desktop: chevron rotacionando · Mobile: `minus` no item aberto */}
                <ChevronDown
                  size={20}
                  color="#f1c75c"
                  aria-hidden
                  className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180 hidden lg:block" : ""}`}
                />
                <Minus
                  size={20}
                  color="#f1c75c"
                  aria-hidden
                  className={`lg:hidden shrink-0 ${open ? "" : "hidden"}`}
                />
              </button>
              <div
                id={`groom-faq-panel-${index}`}
                role="region"
                aria-labelledby={`groom-faq-button-${index}`}
                data-testid={`groom-faq-panel-${index}`}
                hidden={!open}
                className="relative px-[24px] pb-[20px]"
              >
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative text-[#94a3b8] text-[14px] w-full">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SectionFinalCta() {
  return (
    <div className="bg-[#0b0f1a] content-stretch flex flex-col gap-[40px] items-center [&>*]:max-w-7xl px-5 md:px-12 lg:px-[120px] py-[100px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
        <div className="bg-[rgba(241,199,92,0.08)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0">
          <div aria-hidden className="absolute border border-[#f1c75c] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f1c75c] text-[12px] uppercase whitespace-nowrap">APROVEITE A OPORTUNIDADE</p>
        </div>
        <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#f8fafc] text-2xl md:text-3xl lg:text-[40px] text-center w-[min-content]">Pronto para profissionalizar seu negócio?</p>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
        <a href={buildWhatsAppUrl(WHATSAPP_GROOM_TRIAL_MESSAGE)} target="_blank" rel="noreferrer" className="bg-[#f1c75c] content-stretch flex gap-[12px] items-center w-full md:w-auto px-[48px] py-[20px] relative rounded-[8px] shrink-0 justify-center">
          <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center">COMEÇAR GRÁTIS POR 15 DIAS</p>
          <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
            <path d={svgPaths.p2df9a900} stroke="#0F172A" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </a>
        {/* Convite — copy idêntica ao código, SEM ⚡ (delta dossier g2 §10) */}
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#cbd5e1] text-[13px] text-center">Sem cartão de crédito. Configuração em 5 minutos. Cancele quando quiser.</p>
      </div>
    </div>
  );
}

function SectionFooter() {
  // Âncoras do próprio Groom (dossier g2 §11) — "Planos e Preços" → "Preços".
  const footerNav = [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Preços", href: "#precos" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <div className="bg-[#0b0f1a] content-stretch flex flex-col gap-[48px] items-start [&>*]:max-w-7xl pb-[48px] pt-[64px] px-5 md:px-12 lg:px-[120px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#1f2937] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col lg:flex-row items-start justify-between gap-10 relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full lg:w-[360px]">
          {/* Marca scissors + wordmark (dossier g2 §11 — sem raster) */}
          <div className="flex gap-[10px] items-center relative shrink-0">
            <Scissors size={36} className="text-[#f1c75c]" aria-hidden />
            <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#f8fafc] text-[20px] whitespace-nowrap">Groom</p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[13px] w-[min-content]">Sistema completo de gestão e agendamento para barbearias, salões de beleza, estúdios de tatuagem e clínicas de estética.</p>
        </div>
        <div className="content-stretch flex flex-wrap gap-8 lg:gap-[64px] items-start relative shrink-0">
          <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] relative shrink-0">
            <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#f8fafc] text-[14px]">Navegação</p>
            <nav data-testid="groom-footer-nav" className="flex flex-col gap-[16px] items-start">
              {footerNav.map((link) => (
                <a key={link.href} href={link.href} className="font-['Inter:Regular',sans-serif] font-normal not-italic relative text-[#94a3b8] text-[13px] hover:text-[#f8fafc] transition-colors cursor-pointer">{link.label}</a>
              ))}
            </nav>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
            <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#f8fafc] text-[14px]">Desenvolvimento</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[13px]">Feito por TechMinds Group</p>
            <a className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f1c75c] text-[13px]" href="https://portal.techminds.net.br" target="_blank" rel="noreferrer">
              <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">portal.techminds.net.br</p>
            </a>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between pt-[24px] relative shrink-0 w-full">
        <div aria-hidden className="absolute border-[#1f2937] border-solid border-t inset-0 pointer-events-none" />
        {/* © unificada conforme frame (dossier g2 §11) — PEND-013 em aberto
        ("© 2026 Groom" × "© TechMinds"); revisitar se o operador fechar diferente. */}
        <p data-testid="groom-copyright" className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px]">© 2026 Groom — Todos os direitos reservados.</p>
      </div>
      {/* Identificação empresarial — dado real de faturamento (ADR-005/SEC-001);
      texto EXATO, nunca alterar ou remover. Sem © secundária (dupla © removida —
      © unificada acima; PEND-013). */}
      <footer style={{ textAlign: "center", padding: "24px", fontSize: "14px", color: "#6b7280", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p style={{ marginBottom: "6px", fontWeight: 600, color: "#d1d5db" }}>
          Nome Empresarial: 69.184.592 MICHEL LEMOS BITTENCOURT
        </p>
        <p style={{ marginBottom: "6px" }}>
          CNPJ: 69.184.592/0001-45 | Guaíba - RS
        </p>
      </footer>
    </div>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("groom-scroll-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    const sentinel = document.getElementById("groom-scroll-sentinel");
    sentinel?.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[96px] right-[32px] z-50 bg-[#1f2937] hover:bg-[#374151] cursor-pointer text-[#f8fafc] rounded-full size-[44px] flex items-center justify-center shadow-[0px_4px_16px_0px_rgba(0,0,0,0.3)] transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      aria-label="Voltar ao topo"
    >
      <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
        <path d="M9 13.5V4.5M4.5 9L9 4.5L13.5 9" stroke="#F8FAFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </button>
  );
}

function FloatingWhatsappCta() {
  const handleClick = () => {
    // DEBT-003 (RN-024-1): deep-link vem do módulo único de contatos.
    window.open(buildWhatsAppUrl(WHATSAPP_GROOM_FLOATING_MESSAGE), "_blank", "noopener,noreferrer");
  };
  return (
    <button
      onClick={handleClick}
      className="fixed bg-[#22c55e] bottom-[32px] content-stretch cursor-pointer flex gap-[10px] items-center justify-center overflow-clip pl-[20px] pr-[24px] py-[14px] right-[32px] rounded-[50px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.3)] z-50"
    >
      <svg fill="none" height="20" viewBox="0 0 24 20" width="24">
        <path d={svgPaths.p16656200} fill="white" />
      </svg>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Fale conosco e teste grátis</p>
    </button>
  );
}



export function Groom() {
  return (
    <div className="bg-[#0b0f1a] content-stretch flex flex-col items-start relative w-full overflow-x-clip">
      <div id="groom-scroll-sentinel" className="absolute top-0 h-px w-px pointer-events-none" />
      <GroomNavbar />
      <SectionHero />
      <SectionPainSolution />
      <SectionHowItWorks />
      <SectionFeatures />
      <SectionBenefits />
      <SectionPricing />
      <SectionFaq />
      <SectionFinalCta />
      <SectionFooter />
      <FloatingWhatsappCta />
      <ScrollToTopButton />
    </div>
  );
}
