import { Language } from "../../i18n/translations";

export function LumenTerms({ language }: { language: Language }) {
  if (language === "en") return <LumenTermsEN />;
  return <LumenTermsPT />;
}

// ─── PT ───────────────────────────────────────────────────────────────────────
function LumenTermsPT() {
  return (
    <>
      <div className="mb-12">
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Estes Termos de Uso ("
          <strong className="text-white font-semibold">Termos</strong>") regulam o acesso e a
          utilização da plataforma <strong className="text-white font-semibold">Lumen</strong>{" "}
          ("Plataforma"), disponível em{" "}
          <a
            href="https://lumen.techminds.net.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5BC8C0] hover:underline"
          >
            https://lumen.techminds.net.br
          </a>
          , desenvolvida e operada pela{" "}
          <strong className="text-white font-semibold">TechMinds</strong> ("nós", "nosso" ou
          "Empresa"). Ao acessar ou utilizar a Plataforma, você ("usuário") manifesta sua
          concordância integral com estes Termos e com a{" "}
          <a
            href="/privacy/lumen"
            className="text-[#5BC8C0] hover:underline"
          >
            Política de Privacidade
          </a>
          , que integra estes Termos por referência.
        </p>
      </div>

      <section id="section-1" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          1. ACEITAÇÃO DOS TERMOS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">1.1 Capacidade civil.</strong> Ao utilizar a Plataforma,
          o usuário declara e garante que possui <strong className="text-white">capacidade civil</strong>{" "}
          plena para celebrar acordos vinculantes. Nos termos do{" "}
          <strong className="text-white">Código Civil Brasileiro (Lei nº 10.406/2002)</strong>, a
          capacidade civil plena é adquirida aos 18 (dezoito) anos de idade.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">1.2 Usuários menores de 18 anos.</strong> O uso da
          Plataforma por{" "}
          <strong className="text-white">menores de 18 anos</strong> é permitido, desde que
          realizado com o consentimento expresso e o acompanhamento de um dos pais ou responsável
          legal. Em relação a{" "}
          <strong className="text-white">crianças menores de 12 anos</strong>, exige-se
          consentimento específico de ao menos um dos pais ou responsável legal, em conformidade com
          o <strong className="text-white">art. 14, §1º, da LGPD (Lei nº 13.709/2018)</strong>.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">1.3 Propriedade intelectual da Empresa.</strong> Todo o
          conteúdo disponibilizado pela TechMinds na Plataforma — incluindo o design, identidade
          visual, código-fonte, logotipos, textos editoriais, a taxonomia proprietária de 9 eixos
          analíticos do pensamento político, os dados bibliográficos e o banco de dados de
          pensadores — é de <strong className="text-white">titularidade exclusiva da TechMinds</strong>{" "}
          ou de seus licenciantes, protegido pela{" "}
          <strong className="text-white">Lei de Direitos Autorais (Lei nº 9.610/1998)</strong> e
          pelo{" "}
          <strong className="text-white">Código de Propriedade Industrial (Lei nº 9.279/1996)</strong>.
          É vedada a reprodução, distribuição, modificação, engenharia reversa ou qualquer uso não
          autorizado desse conteúdo.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">1.4 Caráter educacional.</strong> O Lumen é uma ferramenta
          educacional de exploração histórica e filosófica do pensamento político ocidental. Todo o
          conteúdo apresentado possui fins estritamente informativos e culturais, não constituindo
          aconselhamento político, ideológico, filosófico, jurídico ou de qualquer natureza
          vinculante.
        </p>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          2. MODIFICAÇÕES E ENCARGOS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">2.1 Direito de modificação da Plataforma.</strong> A
          TechMinds reserva-se o direito de, a qualquer tempo e a seu exclusivo critério, modificar,
          aprimorar, suspender, descontinuar ou atualizar funcionalidades, conteúdos e interfaces da
          Plataforma, sem necessidade de aviso prévio, salvo quando exigido pela legislação vigente.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">2.2 Gratuidade atual.</strong> O acesso à Plataforma é,
          na data de vigência destes Termos,{" "}
          <strong className="text-white">integralmente gratuito</strong>. A TechMinds financia as
          operações por meio da exibição de anúncios contextuais, conforme detalhado na Seção 7.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">2.3 Possibilidade de cobrança futura.</strong> A
          TechMinds poderá, no futuro, introduzir planos pagos ou funcionalidades{" "}
          <strong className="text-white">premium</strong>. Caso isso ocorra, o usuário será
          notificado com antecedência mínima de{" "}
          <strong className="text-white">30 (trinta) dias corridos</strong> antes de qualquer
          encargo que afete funcionalidades anteriormente gratuitas.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">2.4 Ausência de cobrança automática.</strong> A TechMinds
          não realiza cobranças automáticas, recorrentes ou não autorizadas. Toda cobrança dependerá
          de consentimento expresso, livre e informado do usuário.
        </p>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          3. CONECTIVIDADE E DADOS MÓVEIS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">3.1 Dependência de conexão à internet.</strong> O Lumen é
          uma aplicação web que requer conexão ativa e estável à internet. A TechMinds não se
          responsabiliza por falhas, interrupções ou degradação de desempenho decorrentes de
          problemas de conectividade do usuário ou da infraestrutura de rede de terceiros.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">3.2 Custo de dados por operadora.</strong> O acesso por
          meio de redes de dados móveis (3G, 4G, 5G) ou redes sujeitas a franquia de dados poderá
          gerar cobranças pelo plano contratado junto à operadora. A TechMinds não tem
          responsabilidade por tais custos. Recomendamos o acesso preferencialmente por Wi-Fi.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">3.3 Persistência local dos dados.</strong> As preferências
          do usuário (idioma, tema) e o progresso de leitura são armazenados exclusivamente no
          navegador via{" "}
          <code className="text-[#5BC8C0] bg-white/5 px-1 rounded">localStorage</code>. Esses
          dados não são sincronizados entre dispositivos e poderão ser perdidos em caso de limpeza
          do navegador ou acesso por dispositivo diferente.
        </p>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          4. LIMITAÇÃO DE RESPONSABILIDADE
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">4.1 Fornecimento "no estado em que se encontra".</strong>{" "}
          A Plataforma é disponibilizada ao usuário{" "}
          <strong className="text-white">"no estado em que se encontra"</strong> (
          <em>as-is</em>) e{" "}
          <strong className="text-white">"conforme disponível"</strong> (<em>as-available</em>),
          sem garantias de disponibilidade ininterrupta, ausência de erros, precisão absoluta ou
          adequação a uma finalidade específica.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">4.2 Exclusões de responsabilidade.</strong> Nos termos do{" "}
          <strong className="text-white">Código de Defesa do Consumidor (Lei nº 8.078/1990)</strong>
          , a TechMinds exclui sua responsabilidade, na extensão máxima permitida pela lei, por:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Indisponibilidade ou interrupção decorrente de manutenção, falhas de provedores
            terceiros (incluindo Vercel Inc.) ou força maior;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Perda de dados armazenados localmente por limpeza do navegador, troca de dispositivo ou
            falha de hardware;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Imprecisões ou desatualizações em informações bibliográficas ou editoriais fornecidas
            para fins educacionais;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Conteúdo exibido pelos parceiros publicitários (Google AdSense), cuja responsabilidade
            editorial é dos anunciantes;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Acesso não autorizado ao dispositivo do usuário ou aos dados armazenados localmente;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Danos decorrentes do uso inadequado ou não autorizado da Plataforma.
          </li>
        </ol>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">4.3 Ausência de responsabilidade por decisões.</strong> O
          Lumen é uma ferramenta de exploração e diagnóstico educacional. O usuário é o único
          responsável por quaisquer decisões tomadas com fundamento nas informações ou diagnósticos
          fornecidos pela Plataforma.
        </p>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          5. ANÁLISE ALGORÍTMICA E DIAGNÓSTICO DE PERFIL POLÍTICO-FILOSÓFICO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">5.1 Natureza da análise automatizada.</strong> O Lumen
          disponibiliza funcionalidades de{" "}
          <strong className="text-white">análise algorítmica automatizada</strong> baseadas
          exclusivamente no histórico de leitura registrado pelo próprio usuário:
        </p>
        <ul className="space-y-3 mb-4 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Diagnóstico de perfil político-filosófico:</strong>{" "}
              o sistema calcula posicionamentos em{" "}
              <strong className="text-white">9 eixos analíticos</strong> — (i) Liberdade vs.
              Autoridade; (ii) Estado vs. Mercado vs. Comunidade; (iii) Tradição vs. Ruptura; (iv)
              Individual vs. Coletivo; (v) Epistemologia; (vi) Ontologia; (vii) Historicidade;
              (viii) Antropologia Filosófica; e (ix) Escopo de Aplicação — gerando um{" "}
              <strong className="text-white">radar chart</strong> em SVG e um diagnóstico textual
              automatizado.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Sistema de recomendações inteligentes:</strong> o
              algoritmo identifica desequilíbrios (<em>gaps</em>) no perfil de leitura — definidos
              como concentração superior a 55% ou 65% em um dos polos de qualquer eixo — e sugere
              obras e pensadores para diversificar o repertório.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">5.2 Caráter educacional e não determinístico.</strong> O
          diagnóstico gerado constitui uma{" "}
          <strong className="text-white">síntese educacional</strong> construída a partir das obras
          selecionadas pelo usuário. Tal diagnóstico{" "}
          <strong className="text-white">não constitui</strong> avaliação científica, psicológica,
          política ou profissional de qualquer natureza.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">5.3 Ausência de efeitos jurídicos externos.</strong> A
          análise algorítmica implementada não produz decisões com efeitos jurídicos que afetem
          direitos do usuário fora da Plataforma, razão pela qual não se sujeita às restrições do{" "}
          <strong className="text-white">art. 20 da LGPD</strong>. O usuário pode limpar
          integralmente seu histórico a qualquer momento pela interface da Plataforma.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">5.4 Transparência algorítmica.</strong> A lógica de
          cálculo é integralmente baseada em{" "}
          <strong className="text-white">regras determinísticas e transparentes</strong>, sem
          utilização de <em>machine learning</em>, redes neurais, IA generativa ou processamento
          estatístico opaco. Os critérios e limiares são descritos na interface da Plataforma e
          nestes Termos.
        </p>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          6. PRIVACIDADE, DADOS E PROPRIEDADE INTELECTUAL DO USUÁRIO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">6.1 Remissão à Política de Privacidade.</strong> O
          tratamento de dados pessoais é descrito na{" "}
          <a href="/privacy/lumen" className="text-[#5BC8C0] hover:underline">
            Política de Privacidade do Lumen
          </a>
          , que integra estes Termos por referência. Em caso de conflito em matéria de dados
          pessoais, prevalecerá a Política de Privacidade.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">6.2 Finalidade do tratamento (LGPD art. 6º).</strong> Os
          dados são tratados exclusivamente para:
        </p>
        <ul className="space-y-2 mb-4 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>Fornecer, manter e aprimorar as funcionalidades da Plataforma;</span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              Monitorar e analisar o uso de forma anonimizada, para melhoria contínua;
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              Exibir anúncios contextuais, condicionado ao{" "}
              <strong className="text-white">consentimento expresso</strong> do usuário, nos termos
              do <strong className="text-white">art. 7º, I, da LGPD</strong>.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">6.3 Armazenamento exclusivamente local.</strong> O
          progresso de leitura, as preferências e o status de consentimento de publicidade são
          armazenados{" "}
          <strong className="text-white">
            exclusivamente no{" "}
            <code className="text-[#5BC8C0] bg-white/5 px-1 rounded">localStorage</code> do
            navegador do usuário
          </strong>
          . A TechMinds não tem acesso a esses dados fora da sessão ativa.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">6.4 Ausência de conteúdo gerado pelo usuário.</strong> A
          Plataforma <strong className="text-white">não permite</strong> o envio, publicação ou
          compartilhamento de conteúdo textual, visual ou audiovisual pelo usuário. O Lumen não
          armazena, processa nem transmite imagens, vídeos ou arquivos do usuário.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">6.5 Condutas proibidas.</strong> É expressamente vedado ao
          usuário:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Praticar atos contrários à legislação brasileira ou ao direito internacional aplicável;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Tentar acessar sistemas não autorizados ou explorar vulnerabilidades da Plataforma;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Utilizar ferramentas automatizadas (bots, scrapers, crawlers) para extração de dados em
            massa sem autorização prévia e expressa da TechMinds;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Reproduzir, distribuir, sublicenciar ou comercializar o conteúdo da Plataforma sem
            autorização;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Praticar qualquer atividade que comprometa a disponibilidade, integridade ou segurança
            da Plataforma ou da TechMinds.
          </li>
        </ol>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          7. PUBLICIDADE E SERVIÇOS DE TERCEIROS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">7.1 Modelo de financiamento por publicidade.</strong> O
          Lumen é oferecido gratuitamente e financiado por{" "}
          <strong className="text-white">anúncios contextuais</strong> veiculados pelo{" "}
          <strong className="text-white">Google AdSense</strong> (Google LLC). A TechMinds bloqueia
          manualmente em sua conta do AdSense: conteúdo adulto, jogos de azar, apostas,
          sensacionalismo, conteúdo político partidário e categorias incompatíveis com o caráter
          educacional da Plataforma.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">7.2 Consentimento prévio obrigatório.</strong> Em
          conformidade com a{" "}
          <strong className="text-white">LGPD (art. 7º, I)</strong> e o{" "}
          <strong className="text-white">Marco Civil da Internet (Lei nº 12.965/2014)</strong>, o
          script do Google AdSense é{" "}
          <strong className="text-white">
            carregado exclusivamente após o consentimento expresso do usuário
          </strong>{" "}
          via banner de consentimento. Antes da aceitação, nenhum código de publicidade é
          executado. Caso o usuário{" "}
          <strong className="text-white">recuse</strong> o consentimento, nenhum anúncio é exibido.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">7.3 Revogação do consentimento.</strong> O consentimento
          pode ser revogado a qualquer momento, sem custo ou penalidade, por: (a) recusar o banner
          na próxima visita; ou (b) limpar a chave{" "}
          <code className="text-[#5BC8C0] bg-white/5 px-1 rounded">lumen_consent</code> do
          armazenamento local do navegador. A revogação não afeta nenhuma funcionalidade da
          Plataforma.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">7.4 Serviços de terceiros integrados.</strong>
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-[14px] text-gray-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-4 text-white font-semibold">Serviço</th>
                <th className="text-left py-2 pr-4 text-white font-semibold">Provedor</th>
                <th className="text-left py-2 pr-4 text-white font-semibold">Finalidade</th>
                <th className="text-left py-2 text-white font-semibold">Base Legal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 font-semibold text-white">Google AdSense</td>
                <td className="py-3 pr-4">Google LLC</td>
                <td className="py-3 pr-4">Exibição de anúncios contextuais</td>
                <td className="py-3">Consentimento (LGPD art. 7º, I)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-white">Vercel Analytics</td>
                <td className="py-3 pr-4">Vercel Inc.</td>
                <td className="py-3 pr-4">Analytics anonimizado; métricas de desempenho</td>
                <td className="py-3">Legítimo Interesse (LGPD art. 7º, IX)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">7.5 Políticas dos serviços de terceiros.</strong>
        </p>
        <ul className="space-y-1 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5BC8C0] hover:underline"
            >
              Política de Privacidade do Google
            </a>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5BC8C0] hover:underline"
            >
              Política de Privacidade da Vercel
            </a>
          </li>
        </ul>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          8. ATUALIZAÇÕES E ENCERRAMENTO DO SERVIÇO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">8.1 Atualizações da Plataforma.</strong> A TechMinds pode
          lançar atualizações, correções e novas funcionalidades a qualquer tempo. O uso continuado
          da Plataforma após uma atualização implica aceitação das alterações introduzidas.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">8.2 Manutenção programada.</strong> A TechMinds pode
          realizar manutenção programada com indisponibilidade temporária. Sempre que tecnicamente
          possível, comunicaremos previamente por aviso na interface da Plataforma.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">8.3 Encerramento do serviço.</strong> A TechMinds
          reserva-se o direito de encerrar a Plataforma, total ou parcialmente, mediante aviso
          prévio <strong className="text-white">mínimo de 30 (trinta) dias corridos</strong>.
          Durante o aviso, o usuário poderá exportar seus dados pela funcionalidade de exportação
          disponível na interface.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">8.4 Suspensão por conduta infratora.</strong> A TechMinds
          poderá suspender ou encerrar, imediatamente e sem aviso prévio, o acesso de usuário que
          viole estes Termos ou comprometa a segurança ou integridade da Plataforma.
        </p>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          9. ALTERAÇÕES A ESTES TERMOS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">9.1 Direito de revisão.</strong> A TechMinds pode revisar
          e atualizar estes Termos a qualquer momento, para refletir mudanças na legislação,
          funcionalidades da Plataforma ou práticas de negócio.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">9.2 Comunicação de alterações relevantes.</strong> Em caso
          de alterações que afetem materialmente direitos do usuário, a TechMinds notificará por
          meio de aviso destacado na interface e atualizará a data de "Última atualização" no
          cabeçalho deste documento.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">9.3 Aceitação tácita.</strong> O uso continuado da
          Plataforma após a publicação das alterações constitui{" "}
          <strong className="text-white">aceitação tácita</strong> das novas condições. Caso o
          usuário não concorde, deverá cessar o uso antes da data de vigência das novas disposições.
        </p>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          10. LEGISLAÇÃO APLICÁVEL E FORO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">10.1 Legislação aplicável.</strong> Estes Termos são
          regidos, interpretados e executados exclusivamente de acordo com as leis da{" "}
          <strong className="text-white">República Federativa do Brasil</strong>, com especial
          observância:
        </p>
        <ul className="space-y-1 pl-2 mb-4">
          {[
            "Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018)",
            "Código de Defesa do Consumidor — CDC (Lei nº 8.078/1990)",
            "Marco Civil da Internet (Lei nº 12.965/2014)",
            "Código Civil Brasileiro (Lei nº 10.406/2002)",
            "Lei de Direitos Autorais (Lei nº 9.610/1998)",
            "Código de Propriedade Industrial (Lei nº 9.279/1996)",
          ].map((law) => (
            <li key={law} className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
              <span className="text-[#5BC8C0] shrink-0">·</span>
              <span>{law}</span>
            </li>
          ))}
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">10.2 Foro competente.</strong> Fica eleito o foro de
          comarca do{" "}
          <strong className="text-white">Estado do Rio Grande do Sul, Brasil</strong>, para dirimir
          quaisquer controvérsias, sem prejuízo do direito assegurado ao consumidor de ajuizar ação
          no foro do seu próprio domicílio, nos termos do{" "}
          <strong className="text-white">art. 101, I, do CDC</strong>.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">10.3 Resolução amigável prévia.</strong> Antes de qualquer
          medida judicial, as partes comprometem-se a buscar, de boa-fé, a resolução amigável no
          prazo de{" "}
          <strong className="text-white">30 (trinta) dias corridos</strong> a contar da notificação
          formal da controvérsia.
        </p>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          11. CONTATO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Para dúvidas, solicitações, exercício de direitos de titular de dados, notificações
          legais ou qualquer questão relacionada a estes Termos de Uso, entre em contato com a
          TechMinds:
        </p>
        <ul className="space-y-2 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Empresa:</strong> TechMinds
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">E-mail (DPO / Encarregado de Dados):</strong>{" "}
              <a
                href="mailto:compliance@techminds.net.br"
                className="text-[#5BC8C0] hover:underline"
              >
                compliance@techminds.net.br
              </a>
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mt-4">
          A TechMinds responderá às solicitações no prazo de até{" "}
          <strong className="text-white">15 (quinze) dias úteis</strong> a partir do recebimento,
          em conformidade com o prazo estabelecido pela LGPD.
        </p>
      </section>
    </>
  );
}

// ─── EN ───────────────────────────────────────────────────────────────────────
function LumenTermsEN() {
  return (
    <>
      <div className="mb-12">
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          These Terms of Use ("
          <strong className="text-white font-semibold">Terms</strong>") govern your access to and
          use of the <strong className="text-white font-semibold">Lumen</strong> platform ("
          Platform"), available at{" "}
          <a
            href="https://lumen.techminds.net.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5BC8C0] hover:underline"
          >
            https://lumen.techminds.net.br
          </a>
          , developed and operated by{" "}
          <strong className="text-white font-semibold">TechMinds</strong> ("we," "our," or "
          Company"). By accessing or using the Platform, you ("user") agree to be fully bound by
          these Terms and by our{" "}
          <a href="/privacy/lumen" className="text-[#5BC8C0] hover:underline">
            Privacy Policy
          </a>
          , which is incorporated herein by reference.
        </p>
      </div>

      <section id="section-1" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          1. ACCEPTANCE OF TERMS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">1.1 Legal capacity.</strong> By using the Platform, you
          represent and warrant that you have the full{" "}
          <strong className="text-white">legal capacity</strong> to enter into binding agreements.
          Under the{" "}
          <strong className="text-white">Brazilian Civil Code (Law No. 10,406/2002)</strong>, full
          legal capacity is acquired at 18 (eighteen) years of age.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">1.2 Users under 18 years of age.</strong> Use by{" "}
          <strong className="text-white">minors under 18</strong> is permitted with the express
          consent and supervision of a parent or legal guardian. Regarding{" "}
          <strong className="text-white">children under 12</strong>, use requires specific and
          explicit consent of at least one parent or legal guardian, pursuant to{" "}
          <strong className="text-white">Article 14, §1, of Brazil's LGPD (Law No. 13,709/2018)</strong>.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">1.3 Company intellectual property.</strong> All content
          made available by TechMinds on the Platform — including the design, visual identity,
          source code, logos, editorial texts, the proprietary 9-axis analytical taxonomy of
          political thought, bibliographic data, and the thinker database — is the{" "}
          <strong className="text-white">exclusive property of TechMinds</strong> or its licensors,
          protected under{" "}
          <strong className="text-white">Brazil's Copyright Law (Law No. 9,610/1998)</strong> and
          the{" "}
          <strong className="text-white">Industrial Property Code (Law No. 9,279/1996)</strong>.
          Reproduction, distribution, modification, reverse engineering, or any unauthorized use of
          such content is strictly prohibited.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">1.4 Educational nature.</strong> Lumen is an educational
          tool for the historical and philosophical exploration of Western political thought. All
          content is strictly informational and cultural in nature, and does not constitute
          political, ideological, philosophical, legal, or professional advice of any kind.
        </p>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          2. MODIFICATIONS AND FEES
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">2.1 Right to modify the Platform.</strong> TechMinds
          reserves the right, at any time and at its sole discretion, to modify, enhance, suspend,
          discontinue, or update features, content, interfaces, and the availability of the
          Platform, without prior notice, except where required by applicable law.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">2.2 Current free access.</strong> Access to the Platform
          is, as of the effective date of these Terms,{" "}
          <strong className="text-white">entirely free of charge</strong>. TechMinds finances
          Platform operations through the display of contextual advertising, as detailed in Section
          7.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">2.3 Potential future fees.</strong> TechMinds may, in the
          future, introduce paid plans,{" "}
          <strong className="text-white">premium</strong> features, or other monetization
          mechanisms. Should this occur, users will be notified with at least{" "}
          <strong className="text-white">30 (thirty) calendar days' advance notice</strong> before
          any fees are charged for previously free features.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">2.4 No automatic charges.</strong> TechMinds does not
          impose automatic, recurring, or unauthorized charges. Any fees, if introduced, will
          require the user's prior, express, and informed consent.
        </p>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          3. CONNECTIVITY AND MOBILE DATA
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">3.1 Internet connection required.</strong> Lumen is a web
          application that requires an active and stable internet connection. TechMinds is not
          responsible for failures, outages, or performance degradation arising from issues with the
          user's internet connectivity or third-party network infrastructure.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">3.2 Mobile data costs.</strong> Accessing the Platform
          through mobile data networks (3G, 4G, 5G) or networks subject to data caps may result in
          charges by the user's mobile carrier. TechMinds bears no responsibility for such costs.
          Use over Wi-Fi is recommended.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">3.3 Local data persistence.</strong> User preferences
          (language, theme) and reading progress are stored exclusively in the user's browser via{" "}
          <code className="text-[#5BC8C0] bg-white/5 px-1 rounded">localStorage</code>. This data
          is not synchronized across devices and may be lost if browser data is cleared or a
          different browser is used.
        </p>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          4. LIMITATION OF LIABILITY
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">4.1 "As-is" and "as-available" basis.</strong> The
          Platform is provided{" "}
          <strong className="text-white">"as-is"</strong> and{" "}
          <strong className="text-white">"as-available"</strong>, without warranties of any kind,
          including warranties of uninterrupted availability, fitness for a particular purpose, or
          absolute accuracy of data.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">4.2 Exclusions of liability.</strong> To the maximum
          extent permitted by applicable law, consistent with{" "}
          <strong className="text-white">
            Brazil's Consumer Defense Code (CDC — Law No. 8,078/1990)
          </strong>
          , TechMinds excludes liability for:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Platform unavailability resulting from scheduled maintenance, failures of third-party
            infrastructure providers (including Vercel Inc.), or events of force majeure;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Loss of locally stored data due to browser data clearing, device change, or hardware
            failure;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Inaccuracies or outdated information in bibliographic, historical, or editorial content,
            which is provided for educational purposes without guarantee of absolute accuracy;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Content displayed by advertising partners (Google AdSense), for which editorial
            responsibility rests exclusively with the individual advertisers;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Unauthorized access by third parties to the user's device or locally stored data;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Damages arising from improper or unauthorized use of the Platform.
          </li>
        </ol>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">4.3 No liability for decisions based on Platform content.</strong>{" "}
          Lumen is a tool for educational exploration and diagnosis. The user is solely responsible
          for any decisions made based on the information, profile diagnosis, or recommendations
          provided by the Platform.
        </p>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          5. ALGORITHMIC ANALYSIS AND POLITICAL-PHILOSOPHICAL PROFILE DIAGNOSIS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">5.1 Nature of automated analysis.</strong> Lumen offers{" "}
          <strong className="text-white">automated algorithmic analysis</strong> features based
          exclusively on the reading history recorded by the user within the Platform:
        </p>
        <ul className="space-y-3 mb-4 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Political-philosophical profile diagnosis:</strong> the
              system processes works marked as read and deterministically calculates positions across{" "}
              <strong className="text-white">9 analytical axes</strong> — (i) Freedom vs. Authority;
              (ii) State vs. Market vs. Community; (iii) Tradition vs. Rupture; (iv) Individual vs.
              Collective; (v) Epistemology; (vi) Ontology; (vii) Historicity; (viii) Philosophical
              Anthropology; and (ix) Scope of Application — generating an{" "}
              <strong className="text-white">SVG radar chart</strong> and automated textual
              diagnosis.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Intelligent recommendation system:</strong> the
              algorithm identifies imbalances (<em>gaps</em>) in the user's reading profile —
              defined as a concentration exceeding 55% or 65% on one pole of any analytical axis —
              and suggests works and thinkers to diversify the reading repertoire.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">5.2 Educational and non-determinative character.</strong>{" "}
          The diagnosis generated constitutes an{" "}
          <strong className="text-white">educational synthesis</strong> constructed from the works
          selected by the user. It does{" "}
          <strong className="text-white">not constitute</strong> a scientific, psychological,
          political, sociological, or professional assessment of any kind.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">5.3 No legally significant external effects.</strong> The
          algorithmic analysis does not produce decisions with legal effects or decisions that
          significantly affect the user's rights outside the Platform, and accordingly is not
          subject to the restrictions of{" "}
          <strong className="text-white">Article 20 of the LGPD</strong> or{" "}
          <strong className="text-white">Article 22 of the GDPR</strong>. The user may clear their
          reading history at any time through the Platform interface.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">5.4 Algorithmic transparency.</strong> The underlying
          logic is entirely based on{" "}
          <strong className="text-white">deterministic, transparent rules</strong>, without the use
          of machine learning models, neural networks, generative AI, or any form of opaque
          statistical processing.
        </p>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          6. PRIVACY, DATA AND USER INTELLECTUAL PROPERTY
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">6.1 Incorporation of Privacy Policy.</strong> The
          processing of personal data is fully described in the{" "}
          <a href="/privacy/lumen" className="text-[#5BC8C0] hover:underline">
            Lumen Privacy Policy
          </a>
          , which is incorporated into these Terms by reference. In the event of any conflict
          regarding personal data processing, the Privacy Policy shall prevail.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">6.2 Purpose of data processing.</strong> Data is processed
          by TechMinds exclusively for:
        </p>
        <ul className="space-y-2 mb-4 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>Providing, maintaining, and improving the Platform's features;</span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              Monitoring and analyzing Platform usage in anonymized form for continuous improvement;
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              Displaying contextual advertising, contingent upon the user's{" "}
              <strong className="text-white">express consent</strong>, pursuant to{" "}
              <strong className="text-white">Article 7(I) of the LGPD</strong> and{" "}
              <strong className="text-white">Article 6(1)(a) of the GDPR</strong>.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">6.3 Exclusively local storage.</strong> Reading progress,
          language and theme preferences, and advertising consent status are stored{" "}
          <strong className="text-white">
            exclusively in the user's own browser{" "}
            <code className="text-[#5BC8C0] bg-white/5 px-1 rounded">localStorage</code>
          </strong>
          . TechMinds has no access to this data outside the active browser session.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">6.4 No user-generated content.</strong> The Platform{" "}
          <strong className="text-white">does not permit</strong> the upload, publication, or
          sharing of user-created content. Lumen does not store, process, or transmit images,
          videos, voice recordings, or any other user-generated media.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">6.5 Prohibited conduct.</strong> The user is expressly
          prohibited from:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Engaging in conduct that violates Brazilian law or applicable international law;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Attempting unauthorized access to systems or data, or exploiting Platform
            vulnerabilities;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Using automated tools — including bots, scrapers, or crawlers — for bulk data extraction
            without prior written authorization from TechMinds;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Reproducing, distributing, sublicensing, or commercializing Platform content without
            authorization;
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300">
            Engaging in any activity that seeks to compromise the availability, integrity, security,
            or reputation of the Platform or TechMinds.
          </li>
        </ol>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          7. ADVERTISING AND THIRD-PARTY SERVICES
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">7.1 Advertising-based financing model.</strong> Lumen is
          offered free of charge and financed through{" "}
          <strong className="text-white">contextual advertising</strong> served by{" "}
          <strong className="text-white">Google AdSense</strong> (Google LLC). TechMinds manually
          blocks the following ad categories: adult content, gambling, wagering, clickbait and
          sensationalism, partisan political content, and any categories incompatible with the
          Platform's educational mission.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">7.2 Mandatory prior consent for advertising.</strong> In
          compliance with the{" "}
          <strong className="text-white">LGPD (Art. 7, I)</strong>,{" "}
          <strong className="text-white">
            Brazil's Marco Civil da Internet (Law No. 12,965/2014, Art. 7, IX)
          </strong>
          , and{" "}
          <strong className="text-white">GDPR (Art. 6(1)(a))</strong> for applicable users, the{" "}
          <strong className="text-white">
            Google AdSense advertising script is loaded and executed exclusively after the user's
            express consent
          </strong>
          . Prior to acceptance, no advertising code is executed and no user data is shared with
          Google for advertising purposes. If the user{" "}
          <strong className="text-white">declines</strong> consent, no ads are displayed.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">7.3 Withdrawal of advertising consent.</strong> Consent
          may be withdrawn at any time, free of charge and without penalty, by: (a) declining the
          consent banner on the next visit; or (b) clearing the{" "}
          <code className="text-[#5BC8C0] bg-white/5 px-1 rounded">lumen_consent</code> key from
          the browser's local storage. Withdrawal does not affect access to any Platform feature.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">7.4 Integrated third-party services.</strong>
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-[14px] text-gray-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-4 text-white font-semibold">Service</th>
                <th className="text-left py-2 pr-4 text-white font-semibold">Provider</th>
                <th className="text-left py-2 pr-4 text-white font-semibold">Purpose</th>
                <th className="text-left py-2 text-white font-semibold">Legal Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 font-semibold text-white">Google AdSense</td>
                <td className="py-3 pr-4">Google LLC</td>
                <td className="py-3 pr-4">Display of contextual advertising</td>
                <td className="py-3">Consent (LGPD Art. 7, I; GDPR Art. 6(1)(a))</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-white">Vercel Analytics</td>
                <td className="py-3 pr-4">Vercel Inc.</td>
                <td className="py-3 pr-4">Anonymized usage analytics; Core Web Vitals metrics</td>
                <td className="py-3">Legitimate Interest (LGPD Art. 7, IX; GDPR Art. 6(1)(f))</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">7.5 Third-party policies.</strong>
        </p>
        <ul className="space-y-1 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5BC8C0] hover:underline"
            >
              Google Privacy Policy
            </a>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5BC8C0] hover:underline"
            >
              Vercel Privacy Policy
            </a>
          </li>
        </ul>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          8. UPDATES AND SERVICE TERMINATION
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">8.1 Platform updates.</strong> TechMinds may release
          updates, bug fixes, performance improvements, and new features at any time. Continued use
          of the Platform following any update constitutes acceptance of changes introduced.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">8.2 Scheduled maintenance.</strong> TechMinds may perform
          scheduled maintenance that results in temporary Platform unavailability. Whenever
          technically feasible, scheduled maintenance will be communicated in advance through a
          notice in the Platform interface.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">8.3 Service termination.</strong> TechMinds reserves the
          right to terminate the Platform, in whole or in part, at any time, upon a minimum of{" "}
          <strong className="text-white">30 (thirty) calendar days' prior notice</strong>. During
          the notice period, users will be able to export their reading data through the Platform's
          export feature.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">8.4 Suspension for non-compliant conduct.</strong>{" "}
          TechMinds may immediately and without prior notice suspend or terminate access for any
          user who violates these Terms or compromises the security or integrity of the Platform.
        </p>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          9. CHANGES TO THESE TERMS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">9.1 Right to revise.</strong> TechMinds may revise and
          update these Terms at any time to reflect changes in applicable law, Platform features,
          business practices, or for any other relevant reason.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">9.2 Notice of material changes.</strong> In the event of
          changes that materially affect users' rights, TechMinds will notify users through a
          prominent notice in the Platform interface and will update the "Last Updated" date in the
          header of this document.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">9.3 Continued use as acceptance.</strong> Continued use of
          the Platform after publication of any revised Terms will constitute{" "}
          <strong className="text-white">acceptance</strong> of the updated conditions. If the user
          does not agree with the revised Terms, they must cease using the Platform before the
          revised Terms take effect.
        </p>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          10. GOVERNING LAW AND JURISDICTION
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">10.1 Governing law.</strong> These Terms are governed,
          interpreted, and enforced exclusively in accordance with the laws of the{" "}
          <strong className="text-white">Federative Republic of Brazil</strong>, with particular
          reference to:
        </p>
        <ul className="space-y-1 pl-2 mb-4">
          {[
            "General Data Protection Law — LGPD (Law No. 13,709/2018)",
            "Consumer Defense Code — CDC (Law No. 8,078/1990)",
            "Marco Civil da Internet (Law No. 12,965/2014)",
            "Brazilian Civil Code (Law No. 10,406/2002)",
            "Copyright Law (Law No. 9,610/1998)",
            "Industrial Property Code (Law No. 9,279/1996)",
          ].map((law) => (
            <li key={law} className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
              <span className="text-[#5BC8C0] shrink-0">·</span>
              <span>{law}</span>
            </li>
          ))}
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">10.2 International users — GDPR.</strong> For users in the
          European Economic Area (EEA) or the United Kingdom, TechMinds processes personal data in
          accordance with the{" "}
          <strong className="text-white">
            General Data Protection Regulation (GDPR — Regulation (EU) 2016/679)
          </strong>
          . Users in these jurisdictions may exercise all rights set forth in Chapter III of the
          GDPR by contacting TechMinds at the address in Section 11.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">10.3 California residents — CCPA.</strong> TechMinds does
          not sell personal information. California residents may submit data rights requests by
          contacting TechMinds at the contact information in Section 11.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">10.4 Jurisdiction.</strong> The courts of the{" "}
          <strong className="text-white">State of Rio Grande do Sul, Brazil</strong> are designated
          as the competent venue for resolution of any disputes arising from these Terms, without
          prejudice to the right of consumers to file claims in the courts of their own domicile,
          pursuant to{" "}
          <strong className="text-white">Article 101, I, of Brazil's Consumer Defense Code</strong>.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          <strong className="text-white">10.5 Good-faith dispute resolution.</strong> Prior to any
          judicial proceeding, the parties agree to make a good-faith effort to resolve disputes
          amicably within{" "}
          <strong className="text-white">30 (thirty) calendar days</strong> from the date of formal
          notice of the dispute.
        </p>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          11. CONTACT
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          For questions, requests, exercise of data subject rights, legal notices, or any matter
          related to these Terms of Use, please contact TechMinds:
        </p>
        <ul className="space-y-2 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Company:</strong> TechMinds
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Email (DPO / Data Protection Officer):</strong>{" "}
              <a
                href="mailto:compliance@techminds.net.br"
                className="text-[#5BC8C0] hover:underline"
              >
                compliance@techminds.net.br
              </a>
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mt-4">
          TechMinds will respond to requests within{" "}
          <strong className="text-white">15 (fifteen) business days</strong> of receipt, in
          accordance with the response timeline established by the LGPD for data subject requests.
        </p>
      </section>
    </>
  );
}
