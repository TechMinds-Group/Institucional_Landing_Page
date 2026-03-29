import { useState, useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { I18nProvider, useI18n } from "../i18n/I18nContext";
import { Language } from "../i18n/translations";
import { termsSections, legalProductMeta, crossLinkLabels } from "../i18n/legalContent";
import { ArrowUp } from "lucide-react";
import { useNavigate, useParams } from "react-router";

type ProductId = "vibecut" | "groom" | "zonemap" | "escola-conectada";

// ─── Outer wrapper — single source of truth for I18nProvider ─────────────────
export function TermosDeUso() {
  return (
    <I18nProvider>
      <TermosDeUsoContent />
    </I18nProvider>
  );
}

// ─── Inner content component — consumes the single I18nProvider above ─────────
function TermosDeUsoContent() {
  const params = useParams();
  const navigate = useNavigate();
  // language comes from the ONE I18nProvider above — Navigation also lives in
  // that same provider tree, so setLanguage() updates this component too.
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

  const productParam = params.product as ProductId | null;
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
  // When the user clicks a language option in Navigation, setLanguage() is called
  // on the shared I18nProvider → `language` updates here → this effect fires.
  useEffect(() => {
    setContentVisible(false);
    const timeout = setTimeout(() => setContentVisible(true), 150);
    return () => clearTimeout(timeout);
  }, [language]);

  // ── PART C: on mount, derive language from the I18nProvider (which already
  //    reads localStorage) — nothing extra needed in React's model. ────────────

  const sections = termsSections[safeLang];

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
      navigate(`/terms-of-use/${productId}`);
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
    // ── NO second <I18nProvider> here — that was the bug. ─────────────────────
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
            {t.legal.termsTitle}
          </h1>
          <p id="legal-hero-subtitle" className="text-gray-400 text-[15px]">
            {t.legal.termsSubtitle}
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
                  {meta.termsInPrep}
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
            {selectedProduct === "vibecut" && <VibeCutTerms language={safeLang} />}

            {/* Cross-linking */}
            <div className="mt-16 pt-8 border-t border-white/5">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-[14px]">{t.legal.seeAlso}</span>
                <a
                  href={`/privacy/${selectedProduct}`}
                  className="text-[14px] text-gray-400 hover:text-[#5BC8C0] transition-colors duration-150 cursor-pointer"
                >
                  {crossLink.toPrivacy} {selectedProductName} →
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

// ─── VibeCut Terms — language router ─────────────────────────────────────────
// PART D: validate lang before rendering; fall back to PT if key is missing.
function VibeCutTerms({ language }: { language: Language }) {
  if (language === "en") return <VibeCutTermsEN />;
  if (language === "es") return <VibeCutTermsES />;
  return <VibeCutTermsPT />;
}

// ─── PT ───────────────────────────────────────────────────────────────────────
function VibeCutTermsPT() {
  return (
    <>
      <div className="mb-12">
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Bem-vindo ao <strong className="text-white font-semibold">VibeCut</strong>.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Por favor, leia estes Termos e Condições ("Termos", "Contrato") cuidadosamente antes de
          baixar, acessar ou usar o aplicativo móvel VibeCut ("Serviço", "Aplicativo"), operado e
          desenvolvido pela <strong className="text-white font-semibold">TechMinds</strong> ("nós",
          "nosso" ou "Empresa").
        </p>
      </div>

      <section id="section-1" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          1. ACEITAÇÃO DOS TERMOS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Ao baixar, acessar ou utilizar o aplicativo, você confirma que leu, compreendeu e
          concorda expressamente em ficar vinculado a estes Termos. Se você não concordar com
          qualquer parte destes termos, você deve interromper o uso do Serviço e desinstalar o
          aplicativo imediatamente.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">Capacidade Civil:</strong> Para utilizar o VibeCut, você
          declara ser maior de 18 anos ou possuir autorização legal dos pais ou responsáveis para o
          uso, concordando com todas as disposições aqui presentes. O uso por menores de idade deve
          ser supervisionado pelos responsáveis.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          A <strong className="text-white font-semibold">TechMinds</strong> detém a propriedade
          intelectual do aplicativo. Você não tem permissão para copiar, modificar, tentar extrair o
          código-fonte, traduzir ou criar obras derivadas do aplicativo ou de nossas marcas
          registradas. Todos os direitos de propriedade intelectual relacionados ao aplicativo
          permanecem pertencendo à{" "}
          <strong className="text-white font-semibold">TechMinds</strong>.
        </p>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          2. MODIFICAÇÕES E ENCARGOS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          A TechMinds compromete-se a garantir que o aplicativo seja o mais útil e eficiente
          possível. Por esse motivo, reservamo-nos o direito de fazer alterações, correções ou
          atualizações no aplicativo a qualquer momento.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Atualmente, o VibeCut é oferecido gratuitamente, sustentado por publicidade (conforme
          Seção 8). Reservamo-nos o direito de cobrar por recursos futuros, mas nunca cobraremos
          sem deixar claro para você exatamente o que está sendo pago e obter seu consentimento
          prévio para a compra.
        </p>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          3. SEGURANÇA E INTEGRIDADE DO DISPOSITIVO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          O aplicativo VibeCut processa dados para prestar nosso Serviço. É sua responsabilidade
          manter a segurança do seu dispositivo. Recomendamos expressamente que você não faça{" "}
          <em>jailbreak</em> ou <em>root</em> no seu telefone (remoção de restrições do sistema
          operacional). Isso pode tornar seu dispositivo vulnerável a malwares, comprometer recursos
          de segurança e fazer com que o VibeCut não funcione corretamente. A TechMinds não se
          responsabiliza por falhas decorrentes de modificações não autorizadas no sistema
          operacional do usuário.
        </p>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          4. CONECTIVIDADE E DADOS MÓVEIS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Certas funções do aplicativo exigirão uma conexão ativa com a internet (Wi-Fi ou dados
          móveis). A TechMinds não assume responsabilidade se o aplicativo não funcionar com total
          funcionalidade caso você não tenha acesso à internet ou se sua cota de dados tiver acabado.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Se você usar o aplicativo fora de uma área com Wi-Fi, esteja ciente de que os termos do
          contrato com seu provedor de rede móvel se aplicam. Você é responsável por quaisquer
          cobranças de dados, incluindo roaming, incorridas durante o uso do aplicativo.
        </p>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          5. LIMITAÇÃO DE RESPONSABILIDADE
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          A TechMinds envida seus melhores esforços para manter o aplicativo operacional e livre de
          erros, mas o fornece "no estado em que se encontra" ("as-is") e "conforme disponível".
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-2">
          <strong className="text-white">Limites legais:</strong> Na máxima extensão permitida pela
          legislação brasileira (Código de Defesa do Consumidor), a TechMinds não se responsabiliza
          por:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Danos indiretos, incidentais ou lucros cessantes decorrentes do uso do aplicativo.
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Falhas técnicas de terceiros, interrupções de internet ou incompatibilidade de hardware.
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Decisões estéticas tomadas pelo usuário com base nas sugestões do aplicativo.
          </li>
        </ol>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          6. TECNOLOGIA DE INTELIGÊNCIA ARTIFICIAL E ANÁLISE FACIAL (SIMULAÇÃO)
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          O VibeCut utiliza algoritmos de Inteligência Artificial (IA) para análise facial e
          sugestão de cortes. Ao utilizar este recurso, você compreende e concorda que:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300">
            <strong className="text-white">Ferramenta de Simulação e Entretenimento:</strong> O
            VibeCut é uma ferramenta de referência visual e entretenimento. As sugestões{" "}
            <strong className="text-white">NÃO</strong> constituem aconselhamento profissional de
            visagismo ou estética.
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            <strong className="text-white">Isenção de Garantia de Resultado:</strong> O resultado
            real de um corte de cabelo depende da habilidade do profissional
            (cabeleireiro/barbeiro), da textura real do cabelo e de outros fatores físicos que uma
            foto não captura. A TechMinds não garante que o resultado físico será idêntico à
            simulação digital.
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            <strong className="text-white">Responsabilidade do Usuário:</strong> A decisão final de
            alterar sua aparência é exclusivamente sua. A TechMinds não se responsabiliza por
            insatisfação estética, danos ao cabelo ou arrependimento após realizar um corte sugerido
            pelo aplicativo. Consulte sempre um profissional de confiança.
          </li>
        </ol>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          7. PRIVACIDADE, DADOS E PROPRIEDADE INTELECTUAL DO USUÁRIO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Para o funcionamento da análise, solicitamos acesso à câmera e galeria.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-2">
          <strong className="text-white">Tratamento de Dados (LGPD):</strong>
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Finalidade:</strong> As imagens do seu rosto são
              processadas exclusivamente para gerar a análise de formato e sugestão de corte.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Ciclo de Vida dos Dados:</strong> As imagens enviadas
              para análise são processadas e, após a entrega do resultado (sugestão do corte), não
              são armazenadas permanentemente em nossos servidores para fins de identificação
              pessoal.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Segurança:</strong> Adotamos medidas técnicas adequadas
              para proteger os dados durante o trânsito e processamento.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">Licença de Uso de Imagem:</strong> Você mantém todos os
          direitos autorais e de propriedade sobre suas fotos. Ao enviar uma foto, você concede à
          TechMinds uma licença limitada, não exclusiva e revogável apenas para processar a imagem
          dentro do aplicativo e devolver o resultado a você. Nós{" "}
          <strong className="text-white">não</strong> vendemos suas fotos para terceiros.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">Conteúdo Proibido:</strong> Você concorda em não enviar
          conteúdo ilegal, ofensivo, pornográfico ou que viole direitos de terceiros.
        </p>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          8. PUBLICIDADE E SERVIÇOS DE TERCEIROS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Para manter o VibeCut gratuito, utilizamos serviços de publicidade de terceiros, como o{" "}
          <strong className="text-white font-semibold">Google AdMob</strong>.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Ao usar o aplicativo, você consente com a exibição de anúncios. A TechMinds não controla
          o conteúdo destes anúncios e não endossa os produtos ou serviços neles ofertados. Qualquer
          transação realizada com anunciantes é de inteira responsabilidade do usuário e do terceiro
          anunciante.
        </p>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          9. ATUALIZAÇÕES E ENCERRAMENTO DO SERVIÇO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Podemos atualizar o aplicativo para corrigir bugs ou adicionar recursos. Você concorda em
          baixar as atualizações para continuar usando o serviço. A TechMinds pode encerrar a
          disponibilização do aplicativo a qualquer momento, sem aviso prévio. Em caso de
          encerramento, as licenças aqui concedidas serão revogadas.
        </p>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          10. ALTERAÇÕES A ESTES TERMOS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Podemos atualizar nossos Termos periodicamente para refletir mudanças na lei ou em nossos
          serviços. A versão mais atual estará sempre disponível no aplicativo. O uso contínuo do
          Serviço após a publicação das alterações constitui aceitação dos novos termos.
        </p>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          11. LEGISLAÇÃO APLICÁVEL E FORO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Estes Termos serão regidos e interpretados de acordo com as leis da{" "}
          <strong className="text-white">República Federativa do Brasil</strong>.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Fica eleito o foro da comarca da sede da empresa (ou o foro do domicílio do usuário,
          conforme garantido pelo Código de Defesa do Consumidor) para dirimir quaisquer litígios
          oriundos destes Termos, renunciando-se a qualquer outro, por mais privilegiado que seja.
        </p>
      </section>

      <section id="section-12" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          12. CONTATO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Se você tiver alguma dúvida sobre nossos Termos e Condições ou sobre como tratamos seus
          dados, entre em contato:
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
function VibeCutTermsEN() {
  return (
    <>
      <div className="mb-12">
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Welcome to <strong className="text-white font-semibold">VibeCut</strong>.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Please read these Terms and Conditions ("Terms", "Agreement") carefully before
          downloading, accessing, or using the VibeCut mobile application ("Service",
          "Application"), operated and developed by{" "}
          <strong className="text-white font-semibold">TechMinds</strong> ("we", "our", or
          "Company").
        </p>
      </div>

      <section id="section-1" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          1. ACCEPTANCE OF TERMS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          By downloading, accessing, or using the application, you confirm that you have read,
          understood, and expressly agree to be bound by these Terms. If you disagree with any part
          of these Terms, you must cease using the Service and uninstall the application
          immediately.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">Legal Capacity:</strong> To use VibeCut, you declare that
          you are 18 years of age or older, or that you have legal authorization from a parent or
          guardian to use it, agreeing to all provisions set forth herein. Use by minors must be
          supervised by their legal guardians.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white font-semibold">TechMinds</strong> holds all intellectual
          property rights over the application. You are not permitted to copy, modify, attempt to
          extract the source code, translate, or create derivative works of the application or our
          registered trademarks. All intellectual property rights related to the application remain
          the property of <strong className="text-white font-semibold">TechMinds</strong>.
        </p>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          2. MODIFICATIONS AND FEES
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          TechMinds is committed to ensuring the application is as useful and efficient as possible.
          For this reason, we reserve the right to make changes, corrections, or updates to the
          application at any time.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          VibeCut is currently offered free of charge, sustained by advertising (as per Section 8).
          We reserve the right to charge for future features, but we will never charge without
          clearly informing you of exactly what is being paid for and obtaining your prior consent.
        </p>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          3. DEVICE SECURITY AND INTEGRITY
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          The VibeCut application processes data to provide our Service. It is your responsibility
          to maintain the security of your device. We strongly recommend that you do not{" "}
          <em>jailbreak</em> or <em>root</em> your phone (removal of operating system restrictions).
          This may make your device vulnerable to malware, compromise security features, and cause
          VibeCut to malfunction. TechMinds is not responsible for failures resulting from
          unauthorized modifications to the user's operating system.
        </p>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          4. CONNECTIVITY AND MOBILE DATA
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Certain features of the application require an active internet connection (Wi-Fi or mobile
          data). TechMinds assumes no responsibility if the application does not function fully when
          you lack internet access or your data quota has been exhausted.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          If you use the application outside a Wi-Fi area, be aware that your mobile network
          provider's terms apply. You are responsible for any data charges, including roaming,
          incurred during use of the application.
        </p>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          5. LIMITATION OF LIABILITY
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          TechMinds makes its best efforts to keep the application operational and error-free, but
          provides it "as-is" and "as available".
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-2">
          <strong className="text-white">Legal Limits:</strong> To the maximum extent permitted by
          Brazilian law (Consumer Protection Code), TechMinds is not liable for:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Indirect, incidental damages or loss of profits arising from the use of the application.
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Technical failures from third parties, internet outages, or hardware incompatibility.
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Aesthetic decisions made by the user based on the application's suggestions.
          </li>
        </ol>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          6. AI TECHNOLOGY AND FACIAL ANALYSIS (SIMULATION)
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          VibeCut uses Artificial Intelligence (AI) algorithms for facial analysis and haircut
          suggestions. By using this feature, you understand and agree that:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300">
            <strong className="text-white">Simulation and Entertainment Tool:</strong> VibeCut is a
            visual reference and entertainment tool. Suggestions do{" "}
            <strong className="text-white">NOT</strong> constitute professional physiognomy or
            aesthetic advice.
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            <strong className="text-white">No Guarantee of Result:</strong> The actual outcome of a
            haircut depends on the skill of the professional (hairdresser/barber), actual hair
            texture, and other physical factors that a photo cannot capture. TechMinds does not
            guarantee that the physical result will be identical to the digital simulation.
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            <strong className="text-white">User Responsibility:</strong> The final decision to
            change your appearance is entirely yours. TechMinds is not responsible for aesthetic
            dissatisfaction, hair damage, or regret after performing a cut suggested by the
            application. Always consult a trusted professional.
          </li>
        </ol>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          7. PRIVACY, DATA AND USER INTELLECTUAL PROPERTY
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          To operate the analysis feature, we request access to your camera and gallery.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-2">
          <strong className="text-white">Data Processing (LGPD):</strong>
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Purpose:</strong> Images of your face are processed
              exclusively to generate the face-shape analysis and haircut suggestion.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Data Lifecycle:</strong> Images submitted for analysis
              are processed and, once the result (haircut suggestion) is delivered, are not
              permanently stored on our servers for personal identification purposes.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Security:</strong> We adopt adequate technical measures
              to protect data during transit and processing.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">Image License:</strong> You retain all copyright and
          ownership rights over your photos. By submitting a photo, you grant TechMinds a limited,
          non-exclusive, and revocable license solely to process the image within the application
          and return the result to you. We do <strong className="text-white">not</strong> sell your
          photos to third parties.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">Prohibited Content:</strong> You agree not to submit
          illegal, offensive, pornographic, or content that violates third-party rights.
        </p>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          8. ADVERTISING AND THIRD-PARTY SERVICES
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          To keep VibeCut free, we use third-party advertising services such as{" "}
          <strong className="text-white font-semibold">Google AdMob</strong>.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          By using the application, you consent to the display of advertisements. TechMinds does
          not control the content of these ads and does not endorse the products or services
          advertised. Any transaction with advertisers is entirely the responsibility of the user
          and the third-party advertiser.
        </p>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          9. UPDATES AND SERVICE TERMINATION
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          We may update the application to fix bugs or add features. You agree to download updates
          to continue using the Service. TechMinds may terminate the availability of the application
          at any time without prior notice. Upon termination, all licenses granted herein will be
          revoked.
        </p>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          10. CHANGES TO THESE TERMS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          We may periodically update these Terms to reflect changes in law or in our services. The
          most current version will always be available in the application. Continued use of the
          Service after publication of changes constitutes acceptance of the new terms.
        </p>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          11. APPLICABLE LAW AND JURISDICTION
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          These Terms shall be governed by and construed in accordance with the laws of the{" "}
          <strong className="text-white">Federative Republic of Brazil</strong>.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          The courts of the company's registered seat (or the user's domicile, as guaranteed by the
          Consumer Protection Code) are elected to settle any disputes arising from these Terms,
          waiving any other jurisdiction, however privileged.
        </p>
      </section>

      <section id="section-12" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          12. CONTACT
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          If you have any questions about our Terms and Conditions or about how we handle your data,
          please contact us:
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
function VibeCutTermsES() {
  return (
    <>
      <div className="mb-12">
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Bienvenido a <strong className="text-white font-semibold">VibeCut</strong>.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Por favor, lea estos Términos y Condiciones ("Términos", "Acuerdo") cuidadosamente antes
          de descargar, acceder o utilizar la aplicación móvil VibeCut ("Servicio", "Aplicación"),
          operada y desarrollada por{" "}
          <strong className="text-white font-semibold">TechMinds</strong> ("nosotros", "nuestro" o
          "Empresa").
        </p>
      </div>

      <section id="section-1" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          1. ACEPTACIÓN DE LOS TÉRMINOS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Al descargar, acceder o utilizar la aplicación, usted confirma que ha leído, comprendido y
          acepta expresamente quedar vinculado a estos Términos. Si no está de acuerdo con alguna
          parte de estos Términos, debe dejar de usar el Servicio y desinstalar la aplicación de
          inmediato.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">Capacidad Legal:</strong> Para utilizar VibeCut, usted
          declara ser mayor de 18 años o contar con autorización legal de sus padres o tutores,
          aceptando todas las disposiciones aquí presentes. El uso por menores debe estar
          supervisado por sus responsables legales.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white font-semibold">TechMinds</strong> posee todos los derechos
          de propiedad intelectual sobre la aplicación. No está permitido copiar, modificar,
          intentar extraer el código fuente, traducir o crear obras derivadas de la aplicación o de
          nuestras marcas registradas. Todos los derechos de propiedad intelectual relacionados con
          la aplicación permanecen siendo propiedad de{" "}
          <strong className="text-white font-semibold">TechMinds</strong>.
        </p>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          2. MODIFICACIONES Y CARGOS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          TechMinds se compromete a garantizar que la aplicación sea lo más útil y eficiente
          posible. Por ello, nos reservamos el derecho de realizar cambios, correcciones o
          actualizaciones en la aplicación en cualquier momento.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Actualmente, VibeCut se ofrece de forma gratuita, sustentado por publicidad (conforme a
          la Sección 8). Nos reservamos el derecho de cobrar por funciones futuras, pero nunca lo
          haremos sin informarle claramente qué se está pagando y obtener su consentimiento previo.
        </p>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          3. SEGURIDAD E INTEGRIDAD DEL DISPOSITIVO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          La aplicación VibeCut procesa datos para prestar nuestro Servicio. Es su responsabilidad
          mantener la seguridad de su dispositivo. Recomendamos expresamente que no realice{" "}
          <em>jailbreak</em> ni <em>root</em> en su teléfono (eliminación de restricciones del
          sistema operativo). Esto puede hacer que su dispositivo sea vulnerable a malware,
          comprometer funciones de seguridad y causar que VibeCut no funcione correctamente.
          TechMinds no se responsabiliza por fallos derivados de modificaciones no autorizadas en el
          sistema operativo del usuario.
        </p>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          4. CONECTIVIDAD Y DATOS MÓVILES
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Ciertas funciones de la aplicación requieren una conexión activa a internet (Wi-Fi o datos
          móviles). TechMinds no asume responsabilidad si la aplicación no funciona completamente
          cuando no dispone de acceso a internet o su cuota de datos se ha agotado.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Si utiliza la aplicación fuera de una zona con Wi-Fi, tenga en cuenta que se aplican los
          términos de su proveedor de red móvil. Usted es responsable de cualquier cargo por datos,
          incluido el roaming, incurrido durante el uso de la aplicación.
        </p>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          5. LIMITACIÓN DE RESPONSABILIDAD
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          TechMinds pone su mejor esfuerzo en mantener la aplicación operativa y libre de errores,
          pero la proporciona "tal como está" ("as-is") y "según disponibilidad".
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-2">
          <strong className="text-white">Límites legales:</strong> En la máxima medida permitida por
          la legislación brasileña (Código de Defensa del Consumidor), TechMinds no se
          responsabiliza por:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Daños indirectos, incidentales o lucro cesante derivados del uso de la aplicación.
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Fallas técnicas de terceros, interrupciones de internet o incompatibilidad de hardware.
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Decisiones estéticas tomadas por el usuario basadas en las sugerencias de la aplicación.
          </li>
        </ol>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          6. TECNOLOGÍA DE IA Y ANÁLISIS FACIAL (SIMULACIÓN)
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          VibeCut utiliza algoritmos de Inteligencia Artificial (IA) para el análisis facial y la
          sugerencia de cortes. Al utilizar esta función, usted comprende y acepta que:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300">
            <strong className="text-white">Herramienta de Simulación y Entretenimiento:</strong>{" "}
            VibeCut es una herramienta de referencia visual y entretenimiento. Las sugerencias{" "}
            <strong className="text-white">NO</strong> constituyen asesoramiento profesional de
            visagismo o estética.
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            <strong className="text-white">Sin Garantía de Resultado:</strong> El resultado real de
            un corte de cabello depende de la habilidad del profesional (peluquero/barbero), la
            textura real del cabello y otros factores físicos que una foto no puede capturar.
            TechMinds no garantiza que el resultado físico sea idéntico a la simulación digital.
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            <strong className="text-white">Responsabilidad del Usuario:</strong> La decisión final
            de cambiar su apariencia es exclusivamente suya. TechMinds no se responsabiliza por
            insatisfacción estética, daños al cabello o arrepentimiento tras realizar un corte
            sugerido por la aplicación. Consulte siempre a un profesional de confianza.
          </li>
        </ol>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          7. PRIVACIDAD, DATOS Y PROPIEDAD INTELECTUAL DEL USUARIO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Para el funcionamiento del análisis, solicitamos acceso a la cámara y galería.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-2">
          <strong className="text-white">Tratamiento de Datos (LGPD):</strong>
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Finalidad:</strong> Las imágenes de su rostro se
              procesan exclusivamente para generar el análisis de formato y la sugerencia de corte.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Ciclo de Vida de los Datos:</strong> Las imágenes
              enviadas para análisis se procesan y, una vez entregado el resultado (sugerencia de
              corte), no se almacenan permanentemente en nuestros servidores con fines de
              identificación personal.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0]">·</span>
            <span>
              <strong className="text-white">Seguridad:</strong> Adoptamos medidas técnicas
              adecuadas para proteger los datos durante el tránsito y el procesamiento.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">Licencia de Uso de Imagen:</strong> Usted conserva todos
          los derechos de autor y de propiedad sobre sus fotos. Al enviar una foto, otorga a
          TechMinds una licencia limitada, no exclusiva y revocable únicamente para procesar la
          imagen dentro de la aplicación y devolverle el resultado. Nosotros{" "}
          <strong className="text-white">no</strong> vendemos sus fotos a terceros.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">Contenido Prohibido:</strong> Usted acepta no enviar
          contenido ilegal, ofensivo, pornográfico o que viole los derechos de terceros.
        </p>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          8. PUBLICIDAD Y SERVICIOS DE TERCEROS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Para mantener VibeCut gratuito, utilizamos servicios de publicidad de terceros, como{" "}
          <strong className="text-white font-semibold">Google AdMob</strong>.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Al usar la aplicación, usted consiente la visualización de anuncios. TechMinds no
          controla el contenido de estos anuncios y no respalda los productos o servicios
          anunciados. Cualquier transacción realizada con anunciantes es responsabilidad exclusiva
          del usuario y del tercero anunciante.
        </p>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          9. ACTUALIZACIONES Y CIERRE DEL SERVICIO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Podemos actualizar la aplicación para corregir errores o agregar funciones. Usted acepta
          descargar las actualizaciones para continuar usando el servicio. TechMinds puede cesar la
          disponibilidad de la aplicación en cualquier momento sin previo aviso. En caso de cierre,
          las licencias aquí otorgadas quedarán revocadas.
        </p>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          10. CAMBIOS EN ESTOS TÉRMINOS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Podemos actualizar estos Términos periódicamente para reflejar cambios en la ley o en
          nuestros servicios. La versión más actualizada siempre estará disponible en la aplicación.
          El uso continuo del Servicio tras la publicación de cambios constituye la aceptación de
          los nuevos términos.
        </p>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          11. LEGISLACIÓN APLICABLE Y JURISDICCIÓN
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Estos Términos se regirán e interpretarán de conformidad con las leyes de la{" "}
          <strong className="text-white">República Federativa de Brasil</strong>.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Se elige el fuero del domicilio de la empresa (o el del usuario, conforme al Código de
          Defensa del Consumidor) para resolver cualquier controversia derivada de estos Términos,
          renunciando a cualquier otro, por más privilegiado que sea.
        </p>
      </section>

      <section id="section-12" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          12. CONTACTO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Si tiene alguna pregunta sobre nuestros Términos y Condiciones o sobre cómo tratamos sus
          datos, contáctenos:
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
