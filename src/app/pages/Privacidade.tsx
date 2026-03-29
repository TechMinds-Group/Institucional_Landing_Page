import { useState, useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { I18nProvider, useI18n } from "../i18n/I18nContext";
import { Language } from "../i18n/translations";
import { privacySections, legalProductMeta, crossLinkLabels } from "../i18n/legalContent";
import { ArrowUp } from "lucide-react";
import { useNavigate, useParams } from "react-router";

type ProductId = "vibecut" | "groom" | "zonemap" | "escola-conectada";

// ─── Outer wrapper — single source of truth for I18nProvider ─────────────────
export function Privacidade() {
  return (
    <I18nProvider>
      <PrivacidadeContent />
    </I18nProvider>
  );
}

// ─── Inner content component — consumes the single I18nProvider above ─────────
function PrivacidadeContent() {
  const { product: productParam } = useParams<{ product: ProductId }>();
  const navigate = useNavigate();
  // language comes from the ONE I18nProvider above — Navigation also lives in
  // that same provider tree, so setLanguage() propagates here automatically.
  const { language, t } = useI18n();

  const validLangs: Language[] = ["pt", "en", "es"];
  const safeLang: Language = validLangs.includes(language) ? language : "pt";

  const meta = legalProductMeta[safeLang];

  const products = [
    { id: "vibecut" as ProductId,          name: "VibeCut",          tag: meta.vibecutTag,        lastUpdated: meta.vibecutLastUpdated, disabled: false },
    { id: "groom" as ProductId,            name: "Groom",            tag: meta.groomTag,          lastUpdated: t.legal.comingSoon,      disabled: true  },
    { id: "zonemap" as ProductId,          name: "ZoneMap",          tag: meta.zonemapTag,        lastUpdated: t.legal.comingSoon,      disabled: true  },
    { id: "escola-conectada" as ProductId, name: "Escola Conectada", tag: meta.escolaConectadaTag,lastUpdated: t.legal.comingSoon,      disabled: true  },
  ];

  const defaultProduct = "vibecut";
  const initialProduct =
    productParam && products.find((p) => p.id === productParam && !p.disabled)
      ? productParam
      : defaultProduct;

  const [selectedProduct, setSelectedProduct] = useState<ProductId>(initialProduct);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [contentVisible, setContentVisible] = useState(true);

  // ── PART A + B: language changes from Navigation flow here via React state ──
  useEffect(() => {
    setContentVisible(false);
    const timeout = setTimeout(() => setContentVisible(true), 150);
    return () => clearTimeout(timeout);
  }, [language]);

  const sections = privacySections[safeLang];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSectionClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleProductClick = (productId: ProductId) => {
    const product = products.find((p) => p.id === productId);
    if (product && !product.disabled) {
      setContentVisible(false);
      navigate(`/privacy/${productId}`);
      setTimeout(() => {
        setSelectedProduct(productId);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setContentVisible(true);
      }, 200);
    }
  };

  const handleFooterProductClick = () => navigate("/#section-produtos");

  const selectedProductName = products.find((p) => p.id === selectedProduct)?.name ?? "";
  const crossLink = crossLinkLabels[safeLang];

  return (
    // ── NO second <I18nProvider> here. ────────────────────────────────────────
    <div className="min-h-screen bg-[#0D0D0D] font-['Inter',sans-serif]">
      <Navigation />

      {/* Hero Header */}
      <header
        id="legal-hero"
        className="bg-[#0D0D0D] pt-[80px] pb-[48px] border-b border-transparent relative"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-[#5BC8C0] text-[13px] uppercase tracking-[0.1em] mb-3 font-semibold">
            Legal
          </div>
          <h1
            id="legal-hero-title"
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] text-transparent bg-clip-text"
          >
            {t.legal.privacyTitle}
          </h1>
          <p id="legal-hero-subtitle" className="text-gray-400 text-[15px]">
            {t.legal.privacySubtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7B5EA7] via-[#5BC8C0] to-transparent opacity-30" />
      </header>

      {/* Product Selector Cards */}
      <div className="max-w-[900px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              disabled={product.disabled}
              className={`
                relative p-5 rounded-xl transition-all duration-200 text-left
                ${
                  product.disabled
                    ? "opacity-40 cursor-not-allowed bg-[#111318] border border-gray-800"
                    : selectedProduct === product.id
                    ? "bg-[#1A1A2E] border border-[#5BC8C0] shadow-[0_0_16px_rgba(91,200,192,0.15)]"
                    : "bg-[#111318] border border-gray-800 hover:border-gray-700 cursor-pointer"
                }
              `}
            >
              {/* Product Tag */}
              <div className="mb-3">
                <span className="inline-block px-2.5 py-1 rounded-md bg-gradient-to-r from-[#7B5EA7]/20 to-[#5BC8C0]/20 border border-[#5BC8C0]/30 text-[11px] font-semibold text-[#5BC8C0] uppercase tracking-wider">
                  {product.tag}
                </span>
              </div>

              {/* Product Name */}
              <h3
                className={`text-[16px] font-semibold mb-2 ${
                  selectedProduct === product.id && !product.disabled
                    ? "bg-gradient-to-r from-[#7B5EA7] to-[#5BC8C0] text-transparent bg-clip-text"
                    : "text-white"
                }`}
              >
                {product.name}
              </h3>

              {/* Last Updated */}
              <p className="text-[12px] text-gray-400">{product.lastUpdated}</p>

              {/* Disabled Badge */}
              {product.disabled && (
                <div className="mt-2 text-[11px] text-gray-500 text-center">
                  {meta.policyInPrep}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-12 relative">
        <div className="flex gap-12 justify-center">
          {/* Table of Contents — Desktop Only */}
          <aside className="hidden xl:block w-[200px] sticky top-[100px] self-start shrink-0">
            <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
              {t.legal.onThisPage}
            </p>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`text-left text-[13px] w-full px-3 py-2 rounded transition-all duration-150 cursor-pointer ${
                    activeSection === section.id
                      ? "text-[#5BC8C0] border-l-2 border-[#5BC8C0] pl-[10px]"
                      : "text-gray-400 hover:text-[#5BC8C0] border-l-2 border-transparent"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content Area */}
          <main
            className={`max-w-[780px] w-full transition-opacity duration-200 ${
              contentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* ── PART D: safety-checked renderContent equivalent ────────────── */}
            {selectedProduct === "vibecut" && <VibeCutPrivacyPolicy language={safeLang} />}

            {/* Cross-linking */}
            <div className="mt-16 pt-8 border-t border-white/5">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-[14px]">{t.legal.seeAlso}</span>
                <a
                  href={`/terms-of-use/${selectedProduct}`}
                  className="text-[14px] text-gray-400 hover:text-[#5BC8C0] transition-colors duration-150 cursor-pointer"
                >
                  {crossLink.toTerms} {selectedProductName} →
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={handleBackToTop}
        title={t.legal.backToTop}
        className={`fixed bottom-6 right-6 w-[44px] h-[44px] rounded-full bg-[#1A1A2E] border border-[#5BC8C0] flex items-center justify-center text-white hover:bg-[#5BC8C0]/10 transition-all duration-200 z-50 cursor-pointer ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      <Footer onProductClick={handleFooterProductClick} />
    </div>
  );
}

// ─── VibeCut Privacy Policy — language router ─────────────────────────────────
// PART D: validate lang before rendering; fall back to PT if key is missing.
function VibeCutPrivacyPolicy({ language }: { language: Language }) {
  if (language === "en") return <VibeCutPrivacyEN />;
  if (language === "es") return <VibeCutPrivacyES />;
  return <VibeCutPrivacyPT />;
}

// ─── PT ───────────────────────────────────────────────────────────────────────
function VibeCutPrivacyPT() {
  return (
    <>
      <div className="mb-12">
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Bem-vindo ao <strong className="text-white font-semibold">VibeCut</strong>. A sua
          privacidade e a proteção dos seus dados são prioridades fundamentais para nós. Esta
          Política de Privacidade descreve, de forma transparente e objetiva, como coletamos,
          usamos, armazenamos e protegemos as suas informações ao utilizar o nosso aplicativo móvel.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Ao utilizar o VibeCut, você concorda com as práticas descritas nesta política.
        </p>
      </div>

      <section id="section-1" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          1. Informações que Coletamos
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-6">
          Para oferecer a funcionalidade principal do VibeCut (análise facial e sugestão de cortes
          de cabelo), coletamos tipos específicos de dados:
        </p>

        <h3 className="text-[15px] font-semibold text-white mb-3 mt-6">
          1.1. Dados Fornecidos Diretamente por Você
        </h3>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Imagens Faciais:</strong> Coletamos a imagem do seu
              rosto estritamente para realizar a análise de visagismo e sugerir cortes de cabelo.
            </span>
          </li>
        </ul>

        <div className="bg-[rgba(91,200,192,0.06)] border-l-2 border-[#5BC8C0] rounded-r-lg p-3 my-3">
          <p className="text-[16px] leading-[1.8] text-gray-300">
            <strong className="text-white">Atenção:</strong>{" "}
            <strong className="text-white">
              Nós não armazenamos a sua imagem facial em nossos servidores de forma permanente.
            </strong>{" "}
            A imagem é processada instantaneamente pela nossa Inteligência Artificial e descartada
            logo após a apresentação do resultado.
          </p>
        </div>

        <h3 className="text-[15px] font-semibold text-white mb-3 mt-6">
          1.2. Dados Coletados Automaticamente
        </h3>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Endereço IP e Dados do Dispositivo:</strong> Coletamos
              automaticamente informações técnicas, como seu endereço IP, modelo do aparelho, versão
              do sistema operacional e identificadores únicos de publicidade (Advertising ID).
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Logs de Uso:</strong> Registros de falhas (crash logs)
              e dados de desempenho para garantir a estabilidade do aplicativo.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          2. Permissões do Dispositivo
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Para que o VibeCut funcione corretamente, solicitamos as seguintes permissões no seu
          dispositivo:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Câmera:</strong> Necessária para capturar a foto do
              seu rosto em tempo real para a análise de corte.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Galeria (Fotos/Mídia):</strong> Necessária caso você
              opte por carregar uma foto já existente no seu dispositivo para análise.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Você pode revogar essas permissões a qualquer momento nas configurações do seu sistema
          operacional, mas isso impedirá o funcionamento das principais ferramentas do app.
        </p>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          3. Uso de Inteligência Artificial e Biometria
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          O VibeCut utiliza algoritmos de Inteligência Artificial (IA) para analisar a geometria do
          seu rosto.
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Natureza do Dado:</strong> A análise da geometria
              facial é considerada um dado biométrico (dado pessoal sensível). Tratamos este dado
              com o máximo rigor.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Finalidade:</strong> A análise é feita exclusivamente
              para categorizar o formato do rosto e recomendar estilos de corte de cabelo
              compatíveis.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Não-Rastreamento:</strong> Não utilizamos essa
              tecnologia para identificação pessoal, vigilância ou criação de banco de dados
              biométrico persistente. A análise é funcional e efêmera (temporária).
            </span>
          </li>
        </ul>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          4. Publicidade e Terceiros
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          O VibeCut é oferecido gratuitamente e sustentado por anúncios. Para isso, utilizamos
          serviços de terceiros:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Google AdMob:</strong> Utilizamos o Google AdMob para
              exibir anúncios. O Google pode usar o identificador de publicidade do seu dispositivo
              e cookies para exibir anúncios personalizados com base nos seus interesses.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Consentimento Granular (Opt-Out):</strong> Você não é
              obrigado a receber publicidade personalizada. Você pode optar por não receber anúncios
              baseados em interesses (<em>Opt-out</em>) através das configurações do seu dispositivo
              móvel ou das configurações de anúncios do Google.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Classificação Etária dos Anúncios:</strong>{" "}
              Comprometemo-nos a exibir apenas anúncios adequados à classificação etária do
              aplicativo, garantindo que o VibeCut seja seguro e siga as políticas das lojas de
              aplicativos.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Para saber mais sobre como o Google trata seus dados, visite:{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5BC8C0] hover:underline transition-all duration-150"
          >
            Política de Privacidade do Google
          </a>
          .
        </p>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          5. Finalidade e Base Legal do Tratamento
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Tratamos os seus dados para as seguintes finalidades, amparados pelas respectivas bases
          legais da LGPD:
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Prestação do Serviço (Análise Facial):</strong>{" "}
              Processar sua imagem para entregar a sugestão de corte.{" "}
              <strong className="text-white">Base Legal: Consentimento</strong>.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Melhoria e Segurança:</strong> Monitorar o uso do app
              para corrigir erros e prevenir fraudes.{" "}
              <strong className="text-white">Base Legal: Legítimo Interesse</strong>.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Publicidade:</strong> Exibir anúncios relevantes e
              seguros através do Google AdMob.{" "}
              <strong className="text-white">Base Legal: Legítimo Interesse ou Consentimento</strong>.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          6. Compartilhamento de Dados
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Não vendemos suas fotos ou dados pessoais para terceiros. O compartilhamento ocorre apenas
          nas seguintes situações:
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Provedores de Serviço:</strong> Com parceiros
              tecnológicos (como serviços de nuvem) estritamente necessários para a operação do app.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Parceiros de Publicidade:</strong> Dados técnicos e de
              identificação de publicidade são compartilhados com o Google AdMob.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Obrigação Legal:</strong> Caso sejamos intimados por
              autoridades judiciais ou governamentais competentes.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          7. Retenção e Segurança dos Dados
        </h2>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Imagens:</strong> As imagens faciais são processadas e
              excluídas imediatamente após a análise. Não mantemos um banco de dados com fotos de
              usuários.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Logs e IP:</strong> Dados de logs podem ser mantidos
              pelo período mínimo exigido por lei (Marco Civil da Internet) ou enquanto forem
              necessários para fins de segurança e auditoria.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Adotamos medidas de segurança técnicas e administrativas (como criptografia em trânsito)
          para proteger seus dados contra acessos não autorizados.
        </p>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          8. Seus Direitos (LGPD)
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-6">
          Como titular dos dados, a Lei Geral de Proteção de Dados (LGPD) garante a você os
          seguintes direitos, que podem ser exercidos a qualquer momento:
        </p>

        <div className="space-y-2 mb-4">
          <div className="bg-[#111318] border border-gray-800 rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.8]">
              <strong className="text-white">Confirmação e Acesso:</strong>{" "}
              <span className="text-gray-300">
                Saber se tratamos seus dados e ter acesso a eles.
              </span>
            </p>
          </div>
          <div className="bg-[#111318] border border-gray-800 rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.8]">
              <strong className="text-white">Correção:</strong>{" "}
              <span className="text-gray-300">
                Solicitar a correção de dados incompletos, inexatos ou desatualizados.
              </span>
            </p>
          </div>
          <div className="bg-[#111318] border border-gray-800 rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.8]">
              <strong className="text-white">Anonimização, Bloqueio ou Eliminação:</strong>{" "}
              <span className="text-gray-300">
                Solicitar a exclusão de dados desnecessários ou tratados em desconformidade com a
                lei.
              </span>
            </p>
          </div>
          <div className="bg-[#111318] border border-gray-800 rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.8]">
              <strong className="text-white">Revogação do Consentimento:</strong>{" "}
              <span className="text-gray-300">
                Retirar o consentimento para o uso de dados, ciente de que isso pode inviabilizar o
                uso do app.
              </span>
            </p>
          </div>
        </div>

        <p className="text-[16px] leading-[1.8] text-gray-300">
          Para exercer seus direitos, entre em contato conosco através do e-mail fornecido no final
          desta política.
        </p>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          9. Privacidade de Crianças e Adolescentes
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          O VibeCut não é direcionado intencionalmente a{" "}
          <strong className="text-white">
            crianças (pessoas com até 12 anos de idade incompletos, conforme o ECA)
          </strong>
          . Não coletamos intencionalmente dados pessoais de crianças. Caso identifiquemos que
          coletamos dados de uma criança sem o consentimento verificado dos responsáveis, tomaremos
          medidas para excluir essas informações o mais rápido possível.
        </p>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          10. Transferência Internacional de Dados
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Alguns de nossos parceiros (como Google e servidores de processamento de IA) podem estar
          localizados fora do Brasil. Nesses casos, garantimos que a transferência ocorra para
          países com grau de proteção de dados adequado ou mediante cláusulas contratuais padrão que
          garantam a segurança da informação.
        </p>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          11. Alterações nesta Política
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em
          nossos serviços ou na legislação. Recomendamos que você revise este documento
          regularmente. A data da última atualização constará sempre no topo da página.
        </p>
      </section>

      <section id="section-12" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          12. Contato
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Se você tiver alguma dúvida sobre esta Política ou sobre como tratamos seus dados, entre
          em contato:
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">E-mail:</strong>{" "}
          <a
            href="mailto:compliance@techminds.net.br"
            className="text-[#5BC8C0] hover:underline transition-all duration-150"
          >
            compliance@techminds.net.br
          </a>
        </p>
      </section>
    </>
  );
}

// ─── EN ───────────────────────────────────────────────────────────────────────
function VibeCutPrivacyEN() {
  return (
    <>
      <div className="mb-12">
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Welcome to <strong className="text-white font-semibold">VibeCut</strong>. Your privacy and
          the protection of your data are fundamental priorities for us. This Privacy Policy
          transparently describes how we collect, use, store, and protect your information when you
          use our mobile application.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          By using VibeCut, you agree to the practices described in this policy.
        </p>
      </div>

      <section id="section-1" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          1. Information We Collect
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-6">
          To deliver VibeCut's core functionality (facial analysis and haircut suggestions), we
          collect specific types of data:
        </p>

        <h3 className="text-[15px] font-semibold text-white mb-3 mt-6">
          1.1. Data You Provide Directly
        </h3>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Facial Images:</strong> We collect an image of your
              face solely to perform the face-shape analysis and suggest haircuts.
            </span>
          </li>
        </ul>

        <div className="bg-[rgba(91,200,192,0.06)] border-l-2 border-[#5BC8C0] rounded-r-lg p-3 my-3">
          <p className="text-[16px] leading-[1.8] text-gray-300">
            <strong className="text-white">Important:</strong>{" "}
            <strong className="text-white">
              We do not permanently store your facial image on our servers.
            </strong>{" "}
            The image is processed instantly by our AI and discarded immediately after the result is
            delivered.
          </p>
        </div>

        <h3 className="text-[15px] font-semibold text-white mb-3 mt-6">
          1.2. Automatically Collected Data
        </h3>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">IP Address and Device Data:</strong> We automatically
              collect technical information such as your IP address, device model, operating system
              version, and unique advertising identifiers (Advertising ID).
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Usage Logs:</strong> Crash logs and performance data to
              ensure application stability.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          2. Device Permissions
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          For VibeCut to work correctly, we request the following permissions on your device:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Camera:</strong> Required to capture a real-time photo
              of your face for the haircut analysis.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Gallery (Photos/Media):</strong> Required if you choose
              to upload an existing photo from your device for analysis.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          You may revoke these permissions at any time in your operating system settings, but doing
          so will prevent the app's core features from functioning.
        </p>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          3. AI and Biometric Data Use
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          VibeCut uses Artificial Intelligence (AI) algorithms to analyze the geometry of your face.
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Nature of the Data:</strong> Facial geometry analysis
              is considered biometric data (sensitive personal data). We treat this data with the
              utmost care.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Purpose:</strong> The analysis is performed solely to
              categorize your face shape and recommend compatible haircut styles.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">No Tracking:</strong> We do not use this technology for
              personal identification, surveillance, or the creation of a persistent biometric
              database. The analysis is functional and ephemeral (temporary).
            </span>
          </li>
        </ul>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          4. Advertising and Third Parties
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          VibeCut is offered free of charge and sustained by advertising. To do this, we use
          third-party services:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Google AdMob:</strong> We use Google AdMob to display
              ads. Google may use your device's advertising identifier and cookies to show
              personalized ads based on your interests.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Opt-Out:</strong> You are not required to receive
              personalized advertising. You can opt out of interest-based ads through your mobile
              device settings or Google's ad settings.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Age-Appropriate Ads:</strong> We are committed to
              displaying only ads appropriate for the app's age rating, ensuring VibeCut remains
              safe and compliant with app store content policies.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          To learn more about how Google handles your data, visit:{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5BC8C0] hover:underline transition-all duration-150"
          >
            Google's Privacy Policy
          </a>
          .
        </p>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          5. Purpose and Legal Basis
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          We process your data for the following purposes, supported by the respective legal bases
          under LGPD (Brazil's General Data Protection Law):
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Service Delivery (Facial Analysis):</strong> Processing
              your image to deliver the haircut suggestion.{" "}
              <strong className="text-white">Legal basis: Consent</strong>.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Improvement and Security:</strong> Monitoring app usage
              to fix errors and prevent fraud.{" "}
              <strong className="text-white">Legal basis: Legitimate Interest</strong>.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Advertising:</strong> Displaying relevant and safe ads
              via Google AdMob.{" "}
              <strong className="text-white">
                Legal basis: Legitimate Interest or Consent
              </strong>{" "}
              (depending on your device settings).
            </span>
          </li>
        </ul>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          6. Data Sharing
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          We do not sell your photos or personal data to third parties. Sharing occurs only in the
          following situations:
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Service Providers:</strong> With technology partners
              (such as cloud services) strictly necessary for app operation.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Advertising Partners:</strong> Technical and advertising
              identification data are shared with Google AdMob.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Legal Obligation:</strong> When required by competent
              judicial or governmental authorities.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          7. Retention and Security
        </h2>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Images:</strong> Facial images are processed and
              deleted immediately after analysis. We do not maintain a database of user photos.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Logs and IP:</strong> Log data may be retained for the
              minimum period required by law or as long as necessary for security and audit purposes.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          We adopt technical and administrative security measures (such as encryption in transit) to
          protect your data against unauthorized access.
        </p>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          8. Your Rights (LGPD)
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-6">
          As a data subject, Brazil's General Data Protection Law (LGPD) grants you the following
          rights, exercisable at any time:
        </p>

        <div className="space-y-2 mb-4">
          <div className="bg-[#111318] border border-gray-800 rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.8]">
              <strong className="text-white">Confirmation and Access:</strong>{" "}
              <span className="text-gray-300">
                To know whether we process your data and to access it.
              </span>
            </p>
          </div>
          <div className="bg-[#111318] border border-gray-800 rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.8]">
              <strong className="text-white">Correction:</strong>{" "}
              <span className="text-gray-300">
                To request correction of incomplete, inaccurate, or outdated data.
              </span>
            </p>
          </div>
          <div className="bg-[#111318] border border-gray-800 rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.8]">
              <strong className="text-white">Anonymization, Blocking, or Deletion:</strong>{" "}
              <span className="text-gray-300">
                To request deletion of unnecessary data or data processed in non-compliance with
                the law.
              </span>
            </p>
          </div>
          <div className="bg-[#111318] border border-gray-800 rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.8]">
              <strong className="text-white">Consent Withdrawal:</strong>{" "}
              <span className="text-gray-300">
                To withdraw consent for data use, understanding that this may prevent use of the
                app's facial analysis feature.
              </span>
            </p>
          </div>
        </div>

        <p className="text-[16px] leading-[1.8] text-gray-300">
          To exercise your rights, contact us at the email address provided at the end of this
          policy.
        </p>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          9. Children's Privacy
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          VibeCut is not intentionally directed at{" "}
          <strong className="text-white">children under 13 years of age</strong>. We do not
          knowingly collect personal data from children. If we identify that we have inadvertently
          collected data from a child without verified parental consent, we will take steps to
          delete that information as quickly as possible.
        </p>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          10. International Data Transfer
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Some of our partners (such as Google and AI processing servers) may be located outside
          Brazil. In such cases, we ensure that transfers occur to countries with an adequate level
          of data protection or through standard contractual clauses that guarantee information
          security.
        </p>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          11. Changes to This Policy
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          We may periodically update this Privacy Policy to reflect changes in our services or
          applicable law. We recommend you review this document regularly. The date of the latest
          update will always appear at the top of the page.
        </p>
      </section>

      <section id="section-12" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          12. Contact
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          If you have any questions about this Policy or how we handle your data, please contact us:
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">Email:</strong>{" "}
          <a
            href="mailto:compliance@techminds.net.br"
            className="text-[#5BC8C0] hover:underline transition-all duration-150"
          >
            compliance@techminds.net.br
          </a>
        </p>
      </section>
    </>
  );
}

// ─── ES ───────────────────────────────────────────────────────────────────────
function VibeCutPrivacyES() {
  return (
    <>
      <div className="mb-12">
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Bienvenido a <strong className="text-white font-semibold">VibeCut</strong>. Su privacidad
          y la protección de sus datos son prioridades fundamentales para nosotros. Esta Política de
          Privacidad describe, de forma transparente y objetiva, cómo recopilamos, usamos,
          almacenamos y protegemos su información al utilizar nuestra aplicación móvil.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Al utilizar VibeCut, usted acepta las prácticas descritas en esta política.
        </p>
      </div>

      <section id="section-1" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          1. Información que Recopilamos
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-6">
          Para ofrecer la funcionalidad principal de VibeCut (análisis facial y sugerencia de cortes
          de cabello), recopilamos tipos específicos de datos:
        </p>

        <h3 className="text-[15px] font-semibold text-white mb-3 mt-6">
          1.1. Datos que Usted Proporciona Directamente
        </h3>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Imágenes Faciales:</strong> Recopilamos la imagen de
              su rostro estrictamente para realizar el análisis de visagismo y sugerir cortes de
              cabello.
            </span>
          </li>
        </ul>

        <div className="bg-[rgba(91,200,192,0.06)] border-l-2 border-[#5BC8C0] rounded-r-lg p-3 my-3">
          <p className="text-[16px] leading-[1.8] text-gray-300">
            <strong className="text-white">Atención:</strong>{" "}
            <strong className="text-white">
              No almacenamos su imagen facial en nuestros servidores de forma permanente.
            </strong>{" "}
            La imagen es procesada instantáneamente por nuestra Inteligencia Artificial y descartada
            inmediatamente después de presentar el resultado.
          </p>
        </div>

        <h3 className="text-[15px] font-semibold text-white mb-3 mt-6">
          1.2. Datos Recopilados Automáticamente
        </h3>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Dirección IP y Datos del Dispositivo:</strong>{" "}
              Recopilamos automáticamente información técnica como su dirección IP, modelo del
              dispositivo, versión del sistema operativo e identificadores únicos de publicidad
              (Advertising ID).
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Registros de Uso:</strong> Registros de fallos (crash
              logs) y datos de rendimiento para garantizar la estabilidad de la aplicación.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          2. Permisos del Dispositivo
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Para que VibeCut funcione correctamente, solicitamos los siguientes permisos en su
          dispositivo:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Cámara:</strong> Necesaria para capturar una foto de
              su rostro en tiempo real para el análisis de corte.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Galería (Fotos/Medios):</strong> Necesaria si elige
              cargar una foto existente de su dispositivo para el análisis.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Puede revocar estos permisos en cualquier momento desde la configuración del sistema
          operativo, pero esto impedirá el funcionamiento de las principales funciones de la app.
        </p>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          3. Uso de IA y Biometría
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          VibeCut utiliza algoritmos de Inteligencia Artificial (IA) para analizar la geometría de
          su rostro.
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Naturaleza del Dato:</strong> El análisis de la
              geometría facial se considera un dato biométrico (dato personal sensible). Tratamos
              este dato con el máximo rigor.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Finalidad:</strong> El análisis se realiza
              exclusivamente para categorizar la forma del rostro y recomendar estilos de corte de
              cabello compatibles.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Sin Seguimiento:</strong> No utilizamos esta tecnología
              para identificación personal, vigilancia o creación de una base de datos biométrica
              persistente. El análisis es funcional y efímero (temporal).
            </span>
          </li>
        </ul>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          4. Publicidad y Terceros
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          VibeCut se ofrece de forma gratuita y se sustenta por anuncios. Para ello, utilizamos
          servicios de terceros:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Google AdMob:</strong> Utilizamos Google AdMob para
              mostrar anuncios. Google puede usar el identificador de publicidad de su dispositivo y
              cookies para mostrar anuncios personalizados basados en sus intereses.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Opt-Out:</strong> No está obligado a recibir
              publicidad personalizada. Puede optar por no recibir anuncios basados en intereses a
              través de la configuración de su dispositivo móvil o de la configuración de anuncios
              de Google.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Anuncios Apropiados por Edad:</strong> Nos
              comprometemos a mostrar únicamente anuncios adecuados a la clasificación por edad de
              la aplicación, garantizando que VibeCut sea seguro y cumpla con las políticas de
              contenido de las tiendas de aplicaciones.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Para saber más sobre cómo Google trata sus datos, visite:{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5BC8C0] hover:underline transition-all duration-150"
          >
            Política de Privacidad de Google
          </a>
          .
        </p>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          5. Finalidad y Base Legal
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Tratamos sus datos para las siguientes finalidades, amparados en las bases legales
          correspondientes de la LGPD:
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Prestación del Servicio (Análisis Facial):</strong>{" "}
              Procesar su imagen para entregar la sugerencia de corte.{" "}
              <strong className="text-white">Base legal: Consentimiento</strong>.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Mejora y Seguridad:</strong> Monitorear el uso de la
              app para corregir errores y prevenir fraudes.{" "}
              <strong className="text-white">Base legal: Interés Legítimo</strong>.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Publicidad:</strong> Mostrar anuncios relevantes y
              seguros a través de Google AdMob.{" "}
              <strong className="text-white">
                Base legal: Interés Legítimo o Consentimiento
              </strong>{" "}
              (según la configuración de su dispositivo).
            </span>
          </li>
        </ul>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          6. Compartición de Datos
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          No vendemos sus fotos ni datos personales a terceros. El intercambio ocurre únicamente en
          las siguientes situaciones:
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Proveedores de Servicios:</strong> Con socios
              tecnológicos (como servicios en la nube) estrictamente necesarios para la operación
              de la app.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Socios Publicitarios:</strong> Datos técnicos e
              identificadores de publicidad se comparten con Google AdMob.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Obligación Legal:</strong> Cuando sea requerido por
              autoridades judiciales o gubernamentales competentes.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          7. Retención y Seguridad
        </h2>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Imágenes:</strong> Las imágenes faciales se procesan y
              eliminan inmediatamente después del análisis. No mantenemos una base de datos con
              fotos de usuarios.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Logs e IP:</strong> Los datos de registros pueden
              conservarse durante el período mínimo exigido por la ley o mientras sean necesarios
              para fines de seguridad y auditoría.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Adoptamos medidas de seguridad técnicas y administrativas (como el cifrado en tránsito)
          para proteger sus datos contra accesos no autorizados.
        </p>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          8. Tus Derechos (LGPD)
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-6">
          Como titular de los datos, la Ley General de Protección de Datos de Brasil (LGPD) le
          garantiza los siguientes derechos, ejercibles en cualquier momento:
        </p>

        <div className="space-y-2 mb-4">
          <div className="bg-[#111318] border border-gray-800 rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.8]">
              <strong className="text-white">Confirmación y Acceso:</strong>{" "}
              <span className="text-gray-300">
                Saber si tratamos sus datos y acceder a ellos.
              </span>
            </p>
          </div>
          <div className="bg-[#111318] border border-gray-800 rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.8]">
              <strong className="text-white">Corrección:</strong>{" "}
              <span className="text-gray-300">
                Solicitar la corrección de datos incompletos, inexactos o desactualizados.
              </span>
            </p>
          </div>
          <div className="bg-[#111318] border border-gray-800 rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.8]">
              <strong className="text-white">Anonimización, Bloqueo o Eliminación:</strong>{" "}
              <span className="text-gray-300">
                Solicitar la eliminación de datos innecesarios o tratados en incumplimiento de la
                ley.
              </span>
            </p>
          </div>
          <div className="bg-[#111318] border border-gray-800 rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.8]">
              <strong className="text-white">Revocación del Consentimiento:</strong>{" "}
              <span className="text-gray-300">
                Retirar el consentimiento para el uso de datos, entendiendo que esto puede
                imposibilitar el uso del análisis facial de la app.
              </span>
            </p>
          </div>
        </div>

        <p className="text-[16px] leading-[1.8] text-gray-300">
          Para ejercer sus derechos, contáctenos a través del correo electrónico que se indica al
          final de esta política.
        </p>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          9. Privacidad de Menores
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          VibeCut no está dirigido intencionalmente a{" "}
          <strong className="text-white">menores de 13 años</strong>. No recopilamos
          intencionalmente datos personales de menores. Si detectamos que hemos recopilado datos de
          un menor sin el consentimiento verificado de sus tutores, tomaremos medidas para eliminar
          esa información lo antes posible.
        </p>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          10. Transferencia Internacional
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Algunos de nuestros socios (como Google y servidores de procesamiento de IA) pueden estar
          ubicados fuera de Brasil. En tales casos, garantizamos que la transferencia se realice a
          países con un nivel adecuado de protección de datos o mediante cláusulas contractuales
          estándar que garanticen la seguridad de la información.
        </p>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          11. Cambios en esta Política
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en
          nuestros servicios o en la legislación aplicable. Le recomendamos revisar este documento
          regularmente. La fecha de la última actualización siempre aparecerá en la parte superior
          de la página.
        </p>
      </section>

      <section id="section-12" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          12. Contacto
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Si tiene alguna pregunta sobre esta Política o sobre cómo tratamos sus datos, contáctenos:
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">Correo electrónico:</strong>{" "}
          <a
            href="mailto:compliance@techminds.net.br"
            className="text-[#5BC8C0] hover:underline transition-all duration-150"
          >
            compliance@techminds.net.br
          </a>
        </p>
      </section>
    </>
  );
}
