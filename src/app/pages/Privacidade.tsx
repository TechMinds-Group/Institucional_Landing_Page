import { useState, useEffect } from "react";
import { FooterB } from "../components/FooterB";
import { LegalShell } from "../components/legal/LegalShell";
import { I18nProvider, useI18n } from "../i18n/I18nContext";
import { Language } from "../i18n/translations";
import { privacySections, lumenPrivacySections, legalProductMeta, crossLinkLabels } from "../i18n/legalContent";
import { LumenPrivacyPolicy } from "../components/legal/LumenPrivacyPolicy";
import { useNavigate, useParams } from "react-router";
import { DEFAULT_LEGAL_PRODUCT, getLegalProductTabs, type CatalogProductId } from "./legalTabs";

// Slugs legais = ids do canônico CR-001 (fonte única constants/catalog.ts — RN-007).
type ProductId = CatalogProductId;

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

  // Tabs derivam do canônico CR-001 via legalTabs.ts — ordem do canônico,
  // ZoneMap-fora e disponibilidade legal ≠ status comercial (RN-007/CR-001).
  const products = getLegalProductTabs(t.catalogB, meta, t.legal.comingSoon);

  const initialProduct =
    productParam && products.find((p) => p.id === productParam && !p.disabled)
      ? productParam
      : DEFAULT_LEGAL_PRODUCT;

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

  const sections = selectedProduct === "lumen" ? lumenPrivacySections[safeLang] : privacySections[safeLang];

  useEffect(() => {
    const getScrollTop = () =>
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const handleScroll = () => {
      setShowBackToTop(getScrollTop() > 300);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    // capture:true catches scroll from any element (window, div, iframe body, etc.)
    document.addEventListener("scroll", handleScroll, true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
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

  const selectedProductTab = products.find((p) => p.id === selectedProduct);
  const selectedProductName = selectedProductTab?.name ?? "";
  const crossLink = crossLinkLabels[safeLang];

  // Design B (frame #3:31384) — chrome 100% no LegalShell compartilhado;
  // aqui ficam apenas o estado (tabs/scroll-spy/fade) e o corpo por idioma.
  return (
    <LegalShell
      title={t.legal.privacyTitle}
      subtitle={t.legal.privacySubtitle}
      onThisPage={t.legal.onThisPage}
      backToTopTitle={t.legal.backToTop}
      tabs={products}
      selectedTabId={selectedProduct}
      onSelectTab={handleProductClick}
      availableLabel={meta.availableLabel}
      sections={sections}
      activeSection={activeSection}
      onSectionClick={handleSectionClick}
      docTitle={selectedProductName}
      docLastUpdated={`${meta.lastUpdatedLabel} ${selectedProductTab?.lastUpdated ?? ""}`}
      contentVisible={contentVisible}
      crossLinkPrefix={t.legal.seeAlso}
      crossLinkText={`${crossLink.toTerms} ${selectedProductName} →`}
      crossLinkHref={`/terms-of-use/${selectedProduct}`}
      onBackToTop={handleBackToTop}
      showBackToTop={showBackToTop}
      footer={<FooterB />}
    >
      {/* ── PART D: safety-checked renderContent equivalent ────────────── */}
      {selectedProduct === "vibecut" && <VibeCutPrivacyPolicy language={safeLang} />}
      {selectedProduct === "lumen" && <LumenPrivacyPolicy language={safeLang} />}
    </LegalShell>
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
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          Bem-vindo ao <strong className="text-[#1F3A5F] font-semibold">VibeCut</strong>. A sua
          privacidade e a proteção dos seus dados são prioridades fundamentais para nós. Esta
          Política de Privacidade descreve, de forma transparente e objetiva, como coletamos,
          usamos, armazenamos e protegemos as suas informações ao utilizar o nosso aplicativo móvel.
        </p>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Ao utilizar o VibeCut, você concorda com as práticas descritas nesta política.
        </p>
      </div>

      <section id="section-1" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          1. Informações que Coletamos
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-6">
          Para oferecer a funcionalidade principal do VibeCut (análise facial e sugestão de cortes
          de cabelo), coletamos tipos específicos de dados:
        </p>

        <h3 className="text-[15px] font-semibold text-[#1F3A5F] mb-3 mt-6">
          1.1. Dados Fornecidos Diretamente por Você
        </h3>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Imagens Faciais:</strong> Coletamos a imagem do seu
              rosto estritamente para realizar a análise de visagismo e sugerir cortes de cabelo.
            </span>
          </li>
        </ul>

        <div className="bg-[rgba(19,45,36,0.05)] border-l-2 border-[#1F3A5F] rounded-r-lg p-3 my-3">
          <p className="text-[16px] leading-[1.65] text-[#4B5563]">
            <strong className="text-[#1F3A5F]">Atenção:</strong>{" "}
            <strong className="text-[#1F3A5F]">
              Nós não armazenamos a sua imagem facial em nossos servidores de forma permanente.
            </strong>{" "}
            A imagem é processada instantaneamente pela nossa Inteligência Artificial e descartada
            logo após a apresentação do resultado.
          </p>
        </div>

        <h3 className="text-[15px] font-semibold text-[#1F3A5F] mb-3 mt-6">
          1.2. Dados Coletados Automaticamente
        </h3>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Endereço IP e Dados do Dispositivo:</strong> Coletamos
              automaticamente informações técnicas, como seu endereço IP, modelo do aparelho, versão
              do sistema operacional e identificadores únicos de publicidade (Advertising ID).
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Logs de Uso:</strong> Registros de falhas (crash logs)
              e dados de desempenho para garantir a estabilidade do aplicativo.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          2. Permissões do Dispositivo
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          Para que o VibeCut funcione corretamente, solicitamos as seguintes permissões no seu
          dispositivo:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Câmera:</strong> Necessária para capturar a foto do
              seu rosto em tempo real para a análise de corte.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Galeria (Fotos/Mídia):</strong> Necessária caso você
              opte por carregar uma foto já existente no seu dispositivo para análise.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Você pode revogar essas permissões a qualquer momento nas configurações do seu sistema
          operacional, mas isso impedirá o funcionamento das principais ferramentas do app.
        </p>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          3. Uso de Inteligência Artificial e Biometria
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          O VibeCut utiliza algoritmos de Inteligência Artificial (IA) para analisar a geometria do
          seu rosto.
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Natureza do Dado:</strong> A análise da geometria
              facial é considerada um dado biométrico (dado pessoal sensível). Tratamos este dado
              com o máximo rigor.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Finalidade:</strong> A análise é feita exclusivamente
              para categorizar o formato do rosto e recomendar estilos de corte de cabelo
              compatíveis.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Não-Rastreamento:</strong> Não utilizamos essa
              tecnologia para identificação pessoal, vigilância ou criação de banco de dados
              biométrico persistente. A análise é funcional e efêmera (temporária).
            </span>
          </li>
        </ul>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          4. Publicidade e Terceiros
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          O VibeCut é oferecido gratuitamente e sustentado por anúncios. Para isso, utilizamos
          serviços de terceiros:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Google AdMob:</strong> Utilizamos o Google AdMob para
              exibir anúncios. O Google pode usar o identificador de publicidade do seu dispositivo
              e cookies para exibir anúncios personalizados com base nos seus interesses.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Consentimento Granular (Opt-Out):</strong> Você não é
              obrigado a receber publicidade personalizada. Você pode optar por não receber anúncios
              baseados em interesses (<em>Opt-out</em>) através das configurações do seu dispositivo
              móvel ou das configurações de anúncios do Google.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Classificação Etária dos Anúncios:</strong>{" "}
              Comprometemo-nos a exibir apenas anúncios adequados à classificação etária do
              aplicativo, garantindo que o VibeCut seja seguro e siga as políticas das lojas de
              aplicativos.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Para saber mais sobre como o Google trata seus dados, visite:{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1F3A5F] hover:underline transition-all duration-150"
          >
            Política de Privacidade do Google
          </a>
          .
        </p>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          5. Finalidade e Base Legal do Tratamento
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          Tratamos os seus dados para as seguintes finalidades, amparados pelas respectivas bases
          legais da LGPD:
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Prestação do Serviço (Análise Facial):</strong>{" "}
              Processar sua imagem para entregar a sugestão de corte.{" "}
              <strong className="text-[#1F3A5F]">Base Legal: Consentimento</strong>.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Melhoria e Segurança:</strong> Monitorar o uso do app
              para corrigir erros e prevenir fraudes.{" "}
              <strong className="text-[#1F3A5F]">Base Legal: Legítimo Interesse</strong>.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Publicidade:</strong> Exibir anúncios relevantes e
              seguros através do Google AdMob.{" "}
              <strong className="text-[#1F3A5F]">Base Legal: Legítimo Interesse ou Consentimento</strong>.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          6. Compartilhamento de Dados
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          Não vendemos suas fotos ou dados pessoais para terceiros. O compartilhamento ocorre apenas
          nas seguintes situações:
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Provedores de Serviço:</strong> Com parceiros
              tecnológicos (como serviços de nuvem) estritamente necessários para a operação do app.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Parceiros de Publicidade:</strong> Dados técnicos e de
              identificação de publicidade são compartilhados com o Google AdMob.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Obrigação Legal:</strong> Caso sejamos intimados por
              autoridades judiciais ou governamentais competentes.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          7. Retenção e Segurança dos Dados
        </h2>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Imagens:</strong> As imagens faciais são processadas e
              excluídas imediatamente após a análise. Não mantemos um banco de dados com fotos de
              usuários.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Logs e IP:</strong> Dados de logs podem ser mantidos
              pelo período mínimo exigido por lei (Marco Civil da Internet) ou enquanto forem
              necessários para fins de segurança e auditoria.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Adotamos medidas de segurança técnicas e administrativas (como criptografia em trânsito)
          para proteger seus dados contra acessos não autorizados.
        </p>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          8. Seus Direitos (LGPD)
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-6">
          Como titular dos dados, a Lei Geral de Proteção de Dados (LGPD) garante a você os
          seguintes direitos, que podem ser exercidos a qualquer momento:
        </p>

        <div className="space-y-2 mb-4">
          <div className="bg-[#F3F5F7] border border-[#D9DDE3] rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.65]">
              <strong className="text-[#1F3A5F]">Confirmação e Acesso:</strong>{" "}
              <span className="text-[#4B5563]">
                Saber se tratamos seus dados e ter acesso a eles.
              </span>
            </p>
          </div>
          <div className="bg-[#F3F5F7] border border-[#D9DDE3] rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.65]">
              <strong className="text-[#1F3A5F]">Correção:</strong>{" "}
              <span className="text-[#4B5563]">
                Solicitar a correção de dados incompletos, inexatos ou desatualizados.
              </span>
            </p>
          </div>
          <div className="bg-[#F3F5F7] border border-[#D9DDE3] rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.65]">
              <strong className="text-[#1F3A5F]">Anonimização, Bloqueio ou Eliminação:</strong>{" "}
              <span className="text-[#4B5563]">
                Solicitar a exclusão de dados desnecessários ou tratados em desconformidade com a
                lei.
              </span>
            </p>
          </div>
          <div className="bg-[#F3F5F7] border border-[#D9DDE3] rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.65]">
              <strong className="text-[#1F3A5F]">Revogação do Consentimento:</strong>{" "}
              <span className="text-[#4B5563]">
                Retirar o consentimento para o uso de dados, ciente de que isso pode inviabilizar o
                uso do app.
              </span>
            </p>
          </div>
        </div>

        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Para exercer seus direitos, entre em contato conosco através do e-mail fornecido no final
          desta política.
        </p>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          9. Privacidade de Crianças e Adolescentes
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          O VibeCut não é direcionado intencionalmente a{" "}
          <strong className="text-[#1F3A5F]">
            crianças (pessoas com até 12 anos de idade incompletos, conforme o ECA)
          </strong>
          . Não coletamos intencionalmente dados pessoais de crianças. Caso identifiquemos que
          coletamos dados de uma criança sem o consentimento verificado dos responsáveis, tomaremos
          medidas para excluir essas informações o mais rápido possível.
        </p>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          10. Transferência Internacional de Dados
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Alguns de nossos parceiros (como Google e servidores de processamento de IA) podem estar
          localizados fora do Brasil. Nesses casos, garantimos que a transferência ocorra para
          países com grau de proteção de dados adequado ou mediante cláusulas contratuais padrão que
          garantam a segurança da informação.
        </p>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          11. Alterações nesta Política
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em
          nossos serviços ou na legislação. Recomendamos que você revise este documento
          regularmente. A data da última atualização constará sempre no topo da página.
        </p>
      </section>

      <section id="section-12" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          12. Contato
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          Se você tiver alguma dúvida sobre esta Política ou sobre como tratamos seus dados, entre
          em contato:
        </p>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          <strong className="text-[#1F3A5F]">E-mail:</strong>{" "}
          <a
            href="mailto:compliance@techminds.net.br"
            className="text-[#1F3A5F] hover:underline transition-all duration-150"
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
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          Welcome to <strong className="text-[#1F3A5F] font-semibold">VibeCut</strong>. Your privacy and
          the protection of your data are fundamental priorities for us. This Privacy Policy
          transparently describes how we collect, use, store, and protect your information when you
          use our mobile application.
        </p>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          By using VibeCut, you agree to the practices described in this policy.
        </p>
      </div>

      <section id="section-1" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          1. Information We Collect
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-6">
          To deliver VibeCut's core functionality (facial analysis and haircut suggestions), we
          collect specific types of data:
        </p>

        <h3 className="text-[15px] font-semibold text-[#1F3A5F] mb-3 mt-6">
          1.1. Data You Provide Directly
        </h3>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Facial Images:</strong> We collect an image of your
              face solely to perform the face-shape analysis and suggest haircuts.
            </span>
          </li>
        </ul>

        <div className="bg-[rgba(19,45,36,0.05)] border-l-2 border-[#1F3A5F] rounded-r-lg p-3 my-3">
          <p className="text-[16px] leading-[1.65] text-[#4B5563]">
            <strong className="text-[#1F3A5F]">Important:</strong>{" "}
            <strong className="text-[#1F3A5F]">
              We do not permanently store your facial image on our servers.
            </strong>{" "}
            The image is processed instantly by our AI and discarded immediately after the result is
            delivered.
          </p>
        </div>

        <h3 className="text-[15px] font-semibold text-[#1F3A5F] mb-3 mt-6">
          1.2. Automatically Collected Data
        </h3>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">IP Address and Device Data:</strong> We automatically
              collect technical information such as your IP address, device model, operating system
              version, and unique advertising identifiers (Advertising ID).
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Usage Logs:</strong> Crash logs and performance data to
              ensure application stability.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          2. Device Permissions
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          For VibeCut to work correctly, we request the following permissions on your device:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Camera:</strong> Required to capture a real-time photo
              of your face for the haircut analysis.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Gallery (Photos/Media):</strong> Required if you choose
              to upload an existing photo from your device for analysis.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          You may revoke these permissions at any time in your operating system settings, but doing
          so will prevent the app's core features from functioning.
        </p>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          3. AI and Biometric Data Use
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          VibeCut uses Artificial Intelligence (AI) algorithms to analyze the geometry of your face.
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Nature of the Data:</strong> Facial geometry analysis
              is considered biometric data (sensitive personal data). We treat this data with the
              utmost care.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Purpose:</strong> The analysis is performed solely to
              categorize your face shape and recommend compatible haircut styles.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">No Tracking:</strong> We do not use this technology for
              personal identification, surveillance, or the creation of a persistent biometric
              database. The analysis is functional and ephemeral (temporary).
            </span>
          </li>
        </ul>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          4. Advertising and Third Parties
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          VibeCut is offered free of charge and sustained by advertising. To do this, we use
          third-party services:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Google AdMob:</strong> We use Google AdMob to display
              ads. Google may use your device's advertising identifier and cookies to show
              personalized ads based on your interests.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Opt-Out:</strong> You are not required to receive
              personalized advertising. You can opt out of interest-based ads through your mobile
              device settings or Google's ad settings.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Age-Appropriate Ads:</strong> We are committed to
              displaying only ads appropriate for the app's age rating, ensuring VibeCut remains
              safe and compliant with app store content policies.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          To learn more about how Google handles your data, visit:{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1F3A5F] hover:underline transition-all duration-150"
          >
            Google's Privacy Policy
          </a>
          .
        </p>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          5. Purpose and Legal Basis
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          We process your data for the following purposes, supported by the respective legal bases
          under LGPD (Brazil's General Data Protection Law):
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Service Delivery (Facial Analysis):</strong> Processing
              your image to deliver the haircut suggestion.{" "}
              <strong className="text-[#1F3A5F]">Legal basis: Consent</strong>.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Improvement and Security:</strong> Monitoring app usage
              to fix errors and prevent fraud.{" "}
              <strong className="text-[#1F3A5F]">Legal basis: Legitimate Interest</strong>.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Advertising:</strong> Displaying relevant and safe ads
              via Google AdMob.{" "}
              <strong className="text-[#1F3A5F]">
                Legal basis: Legitimate Interest or Consent
              </strong>{" "}
              (depending on your device settings).
            </span>
          </li>
        </ul>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          6. Data Sharing
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          We do not sell your photos or personal data to third parties. Sharing occurs only in the
          following situations:
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Service Providers:</strong> With technology partners
              (such as cloud services) strictly necessary for app operation.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Advertising Partners:</strong> Technical and advertising
              identification data are shared with Google AdMob.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Legal Obligation:</strong> When required by competent
              judicial or governmental authorities.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          7. Retention and Security
        </h2>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Images:</strong> Facial images are processed and
              deleted immediately after analysis. We do not maintain a database of user photos.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Logs and IP:</strong> Log data may be retained for the
              minimum period required by law or as long as necessary for security and audit purposes.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          We adopt technical and administrative security measures (such as encryption in transit) to
          protect your data against unauthorized access.
        </p>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          8. Your Rights (LGPD)
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-6">
          As a data subject, Brazil's General Data Protection Law (LGPD) grants you the following
          rights, exercisable at any time:
        </p>

        <div className="space-y-2 mb-4">
          <div className="bg-[#F3F5F7] border border-[#D9DDE3] rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.65]">
              <strong className="text-[#1F3A5F]">Confirmation and Access:</strong>{" "}
              <span className="text-[#4B5563]">
                To know whether we process your data and to access it.
              </span>
            </p>
          </div>
          <div className="bg-[#F3F5F7] border border-[#D9DDE3] rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.65]">
              <strong className="text-[#1F3A5F]">Correction:</strong>{" "}
              <span className="text-[#4B5563]">
                To request correction of incomplete, inaccurate, or outdated data.
              </span>
            </p>
          </div>
          <div className="bg-[#F3F5F7] border border-[#D9DDE3] rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.65]">
              <strong className="text-[#1F3A5F]">Anonymization, Blocking, or Deletion:</strong>{" "}
              <span className="text-[#4B5563]">
                To request deletion of unnecessary data or data processed in non-compliance with
                the law.
              </span>
            </p>
          </div>
          <div className="bg-[#F3F5F7] border border-[#D9DDE3] rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.65]">
              <strong className="text-[#1F3A5F]">Consent Withdrawal:</strong>{" "}
              <span className="text-[#4B5563]">
                To withdraw consent for data use, understanding that this may prevent use of the
                app's facial analysis feature.
              </span>
            </p>
          </div>
        </div>

        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          To exercise your rights, contact us at the email address provided at the end of this
          policy.
        </p>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          9. Children's Privacy
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          VibeCut is not intentionally directed at{" "}
          <strong className="text-[#1F3A5F]">children under 13 years of age</strong>. We do not
          knowingly collect personal data from children. If we identify that we have inadvertently
          collected data from a child without verified parental consent, we will take steps to
          delete that information as quickly as possible.
        </p>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          10. International Data Transfer
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Some of our partners (such as Google and AI processing servers) may be located outside
          Brazil. In such cases, we ensure that transfers occur to countries with an adequate level
          of data protection or through standard contractual clauses that guarantee information
          security.
        </p>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          11. Changes to This Policy
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          We may periodically update this Privacy Policy to reflect changes in our services or
          applicable law. We recommend you review this document regularly. The date of the latest
          update will always appear at the top of the page.
        </p>
      </section>

      <section id="section-12" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          12. Contact
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          If you have any questions about this Policy or how we handle your data, please contact us:
        </p>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          <strong className="text-[#1F3A5F]">Email:</strong>{" "}
          <a
            href="mailto:compliance@techminds.net.br"
            className="text-[#1F3A5F] hover:underline transition-all duration-150"
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
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          Bienvenido a <strong className="text-[#1F3A5F] font-semibold">VibeCut</strong>. Su privacidad
          y la protección de sus datos son prioridades fundamentales para nosotros. Esta Política de
          Privacidad describe, de forma transparente y objetiva, cómo recopilamos, usamos,
          almacenamos y protegemos su información al utilizar nuestra aplicación móvil.
        </p>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Al utilizar VibeCut, usted acepta las prácticas descritas en esta política.
        </p>
      </div>

      <section id="section-1" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          1. Información que Recopilamos
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-6">
          Para ofrecer la funcionalidad principal de VibeCut (análisis facial y sugerencia de cortes
          de cabello), recopilamos tipos específicos de datos:
        </p>

        <h3 className="text-[15px] font-semibold text-[#1F3A5F] mb-3 mt-6">
          1.1. Datos que Usted Proporciona Directamente
        </h3>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Imágenes Faciales:</strong> Recopilamos la imagen de
              su rostro estrictamente para realizar el análisis de visagismo y sugerir cortes de
              cabello.
            </span>
          </li>
        </ul>

        <div className="bg-[rgba(19,45,36,0.05)] border-l-2 border-[#1F3A5F] rounded-r-lg p-3 my-3">
          <p className="text-[16px] leading-[1.65] text-[#4B5563]">
            <strong className="text-[#1F3A5F]">Atención:</strong>{" "}
            <strong className="text-[#1F3A5F]">
              No almacenamos su imagen facial en nuestros servidores de forma permanente.
            </strong>{" "}
            La imagen es procesada instantáneamente por nuestra Inteligencia Artificial y descartada
            inmediatamente después de presentar el resultado.
          </p>
        </div>

        <h3 className="text-[15px] font-semibold text-[#1F3A5F] mb-3 mt-6">
          1.2. Datos Recopilados Automáticamente
        </h3>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Dirección IP y Datos del Dispositivo:</strong>{" "}
              Recopilamos automáticamente información técnica como su dirección IP, modelo del
              dispositivo, versión del sistema operativo e identificadores únicos de publicidad
              (Advertising ID).
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Registros de Uso:</strong> Registros de fallos (crash
              logs) y datos de rendimiento para garantizar la estabilidad de la aplicación.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          2. Permisos del Dispositivo
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          Para que VibeCut funcione correctamente, solicitamos los siguientes permisos en su
          dispositivo:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Cámara:</strong> Necesaria para capturar una foto de
              su rostro en tiempo real para el análisis de corte.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Galería (Fotos/Medios):</strong> Necesaria si elige
              cargar una foto existente de su dispositivo para el análisis.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Puede revocar estos permisos en cualquier momento desde la configuración del sistema
          operativo, pero esto impedirá el funcionamiento de las principales funciones de la app.
        </p>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          3. Uso de IA y Biometría
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          VibeCut utiliza algoritmos de Inteligencia Artificial (IA) para analizar la geometría de
          su rostro.
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Naturaleza del Dato:</strong> El análisis de la
              geometría facial se considera un dato biométrico (dato personal sensible). Tratamos
              este dato con el máximo rigor.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Finalidad:</strong> El análisis se realiza
              exclusivamente para categorizar la forma del rostro y recomendar estilos de corte de
              cabello compatibles.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Sin Seguimiento:</strong> No utilizamos esta tecnología
              para identificación personal, vigilancia o creación de una base de datos biométrica
              persistente. El análisis es funcional y efímero (temporal).
            </span>
          </li>
        </ul>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          4. Publicidad y Terceros
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          VibeCut se ofrece de forma gratuita y se sustenta por anuncios. Para ello, utilizamos
          servicios de terceros:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Google AdMob:</strong> Utilizamos Google AdMob para
              mostrar anuncios. Google puede usar el identificador de publicidad de su dispositivo y
              cookies para mostrar anuncios personalizados basados en sus intereses.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Opt-Out:</strong> No está obligado a recibir
              publicidad personalizada. Puede optar por no recibir anuncios basados en intereses a
              través de la configuración de su dispositivo móvil o de la configuración de anuncios
              de Google.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Anuncios Apropiados por Edad:</strong> Nos
              comprometemos a mostrar únicamente anuncios adecuados a la clasificación por edad de
              la aplicación, garantizando que VibeCut sea seguro y cumpla con las políticas de
              contenido de las tiendas de aplicaciones.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Para saber más sobre cómo Google trata sus datos, visite:{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1F3A5F] hover:underline transition-all duration-150"
          >
            Política de Privacidad de Google
          </a>
          .
        </p>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          5. Finalidad y Base Legal
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          Tratamos sus datos para las siguientes finalidades, amparados en las bases legales
          correspondientes de la LGPD:
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Prestación del Servicio (Análisis Facial):</strong>{" "}
              Procesar su imagen para entregar la sugerencia de corte.{" "}
              <strong className="text-[#1F3A5F]">Base legal: Consentimiento</strong>.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Mejora y Seguridad:</strong> Monitorear el uso de la
              app para corregir errores y prevenir fraudes.{" "}
              <strong className="text-[#1F3A5F]">Base legal: Interés Legítimo</strong>.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Publicidad:</strong> Mostrar anuncios relevantes y
              seguros a través de Google AdMob.{" "}
              <strong className="text-[#1F3A5F]">
                Base legal: Interés Legítimo o Consentimiento
              </strong>{" "}
              (según la configuración de su dispositivo).
            </span>
          </li>
        </ul>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          6. Compartición de Datos
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          No vendemos sus fotos ni datos personales a terceros. El intercambio ocurre únicamente en
          las siguientes situaciones:
        </p>
        <ul className="space-y-2">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Proveedores de Servicios:</strong> Con socios
              tecnológicos (como servicios en la nube) estrictamente necesarios para la operación
              de la app.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Socios Publicitarios:</strong> Datos técnicos e
              identificadores de publicidad se comparten con Google AdMob.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Obligación Legal:</strong> Cuando sea requerido por
              autoridades judiciales o gubernamentales competentes.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          7. Retención y Seguridad
        </h2>
        <ul className="space-y-2 mb-4">
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Imágenes:</strong> Las imágenes faciales se procesan y
              eliminan inmediatamente después del análisis. No mantenemos una base de datos con
              fotos de usuarios.
            </span>
          </li>
          <li className="text-[16px] leading-[1.65] text-[#4B5563] flex gap-2">
            <span className="text-[#1F3A5F]">·</span>
            <span>
              <strong className="text-[#1F3A5F]">Logs e IP:</strong> Los datos de registros pueden
              conservarse durante el período mínimo exigido por la ley o mientras sean necesarios
              para fines de seguridad y auditoría.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Adoptamos medidas de seguridad técnicas y administrativas (como el cifrado en tránsito)
          para proteger sus datos contra accesos no autorizados.
        </p>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          8. Tus Derechos (LGPD)
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-6">
          Como titular de los datos, la Ley General de Protección de Datos de Brasil (LGPD) le
          garantiza los siguientes derechos, ejercibles en cualquier momento:
        </p>

        <div className="space-y-2 mb-4">
          <div className="bg-[#F3F5F7] border border-[#D9DDE3] rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.65]">
              <strong className="text-[#1F3A5F]">Confirmación y Acceso:</strong>{" "}
              <span className="text-[#4B5563]">
                Saber si tratamos sus datos y acceder a ellos.
              </span>
            </p>
          </div>
          <div className="bg-[#F3F5F7] border border-[#D9DDE3] rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.65]">
              <strong className="text-[#1F3A5F]">Corrección:</strong>{" "}
              <span className="text-[#4B5563]">
                Solicitar la corrección de datos incompletos, inexactos o desactualizados.
              </span>
            </p>
          </div>
          <div className="bg-[#F3F5F7] border border-[#D9DDE3] rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.65]">
              <strong className="text-[#1F3A5F]">Anonimización, Bloqueo o Eliminación:</strong>{" "}
              <span className="text-[#4B5563]">
                Solicitar la eliminación de datos innecesarios o tratados en incumplimiento de la
                ley.
              </span>
            </p>
          </div>
          <div className="bg-[#F3F5F7] border border-[#D9DDE3] rounded-lg p-3.5">
            <p className="text-[16px] leading-[1.65]">
              <strong className="text-[#1F3A5F]">Revocación del Consentimiento:</strong>{" "}
              <span className="text-[#4B5563]">
                Retirar el consentimiento para el uso de datos, entendiendo que esto puede
                imposibilitar el uso del análisis facial de la app.
              </span>
            </p>
          </div>
        </div>

        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Para ejercer sus derechos, contáctenos a través del correo electrónico que se indica al
          final de esta política.
        </p>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          9. Privacidad de Menores
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          VibeCut no está dirigido intencionalmente a{" "}
          <strong className="text-[#1F3A5F]">menores de 13 años</strong>. No recopilamos
          intencionalmente datos personales de menores. Si detectamos que hemos recopilado datos de
          un menor sin el consentimiento verificado de sus tutores, tomaremos medidas para eliminar
          esa información lo antes posible.
        </p>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          10. Transferencia Internacional
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Algunos de nuestros socios (como Google y servidores de procesamiento de IA) pueden estar
          ubicados fuera de Brasil. En tales casos, garantizamos que la transferencia se realice a
          países con un nivel adecuado de protección de datos o mediante cláusulas contractuales
          estándar que garanticen la seguridad de la información.
        </p>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          11. Cambios en esta Política
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en
          nuestros servicios o en la legislación aplicable. Le recomendamos revisar este documento
          regularmente. La fecha de la última actualización siempre aparecerá en la parte superior
          de la página.
        </p>
      </section>

      <section id="section-12" className="mb-12">
        <h2 className="text-[20px] font-bold text-[#1F3A5F] mb-4 pl-3 border-l-2 border-[#1F3A5F]">
          12. Contacto
        </h2>
        <p className="text-[16px] leading-[1.65] text-[#4B5563] mb-4">
          Si tiene alguna pregunta sobre esta Política o sobre cómo tratamos sus datos, contáctenos:
        </p>
        <p className="text-[16px] leading-[1.65] text-[#4B5563]">
          <strong className="text-[#1F3A5F]">Correo electrónico:</strong>{" "}
          <a
            href="mailto:compliance@techminds.net.br"
            className="text-[#1F3A5F] hover:underline transition-all duration-150"
          >
            compliance@techminds.net.br
          </a>
        </p>
      </section>
    </>
  );
}
