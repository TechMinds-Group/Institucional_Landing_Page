import { Language } from "../../i18n/translations";

export function LumenPrivacyPolicy({ language }: { language: Language }) {
  if (language === "en") return <LumenPrivacyPolicyEN />;
  return <LumenPrivacyPolicyPT />;
}

// ─── PT ───────────────────────────────────────────────────────────────────────
function LumenPrivacyPolicyPT() {
  return (
    <>
      <div className="mb-12">
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Bem-vindo ao{" "}
          <strong className="text-white font-semibold">
            Lumen — Mapa Multidimensional do Pensamento Político
          </strong>
          . A sua privacidade é uma prioridade fundamental para nós. Esta Política de Privacidade
          descreve, de forma transparente e objetiva, como coletamos, usamos, armazenamos e
          protegemos as suas informações ao utilizar nossa plataforma web.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Ao utilizar o Lumen, você concorda com as práticas descritas nesta política.
        </p>
      </div>

      <section id="section-1" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          1. INFORMAÇÕES QUE COLETAMOS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">1.1 Dados Armazenados Localmente no Seu Dispositivo</strong>
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          O Lumen armazena as seguintes informações{" "}
          <strong className="text-white">exclusivamente no seu navegador</strong> (via{" "}
          <code className="text-[#5BC8C0] bg-white/5 px-1 rounded">localStorage</code>), sem
          qualquer envio a servidores próprios:
        </p>
        <ul className="space-y-2 mb-4 pl-2">
          {[
            { label: "Progresso de leitura:", desc: "obras que você marcou como lidas, incluindo o identificador do pensador, o título da obra e a data/hora do registro." },
            { label: "Preferência de idioma:", desc: "o idioma selecionado (Português, Inglês ou Espanhol)." },
            { label: "Preferência de tema:", desc: "sua escolha entre o modo claro e o modo escuro." },
            { label: "Status de consentimento de anúncios:", desc: "sua resposta ao banner de consentimento exibido na primeira visita (aceitar ou recusar)." },
            { label: "Dismissal de aviso:", desc: "registro de que você fechou o aviso sobre bloqueador de anúncios." },
          ].map(({ label, desc }) => (
            <li key={label} className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
              <span className="text-[#5BC8C0] shrink-0">·</span>
              <span>
                <strong className="text-white">{label}</strong> {desc}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Esses dados ficam sob seu controle total. Você pode apagá-los a qualquer momento
          acessando as configurações do seu navegador e limpando os dados armazenados pelo site.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">1.2 Dados Coletados Automaticamente</strong>
        </p>
        <ul className="space-y-2 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Eventos de uso (Vercel Analytics):</strong> utilizamos
              o Vercel Analytics para coletar eventos de interação anonimizados (pesquisas,
              filtros, obras marcadas como lidas, exportações, trocas de idioma e tema, navegação
              por eras históricas). Esses dados são utilizados exclusivamente para melhorar a
              experiência dos usuários.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Métricas de desempenho (Core Web Vitals):</strong>{" "}
              coletamos métricas técnicas de carregamento e interatividade (LCP, CLS, INP, FCP,
              TTFB) para monitorar e otimizar a performance da plataforma.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Dados técnicos de rede:</strong> provedores terceiros
              (Vercel e Google) podem registrar o endereço IP, o modelo do dispositivo e as
              informações do navegador como parte do funcionamento normal de suas infraestruturas.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          2. PERMISSÕES DO DISPOSITIVO
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          O Lumen é uma aplicação web e{" "}
          <strong className="text-white">não solicita nenhuma permissão de dispositivo</strong> —
          câmera, microfone, localização geográfica, galeria de fotos ou notificações. Nenhum
          recurso de hardware do seu dispositivo é acessado pela plataforma.
        </p>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          3. PUBLICIDADE E SERVIÇOS DE TERCEIROS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          O Lumen é gratuito e mantido financeiramente por exibição de anúncios. Utilizamos os
          seguintes serviços de terceiros:
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-2">
          <strong className="text-white">Google AdSense</strong>
        </p>
        <ul className="space-y-2 mb-4 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              Utilizamos o <strong className="text-white">Google AdSense</strong> para exibir
              anúncios contextuais na plataforma.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              O script do AdSense é{" "}
              <strong className="text-white">
                carregado somente após o seu consentimento explícito
              </strong>{" "}
              por meio do banner de consentimento exibido na primeira visita. Antes da aceitação,
              nenhum código de publicidade é executado.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              Caso você <strong className="text-white">recuse</strong> o consentimento, nenhum
              anúncio é exibido e nenhum script de publicidade é carregado durante a sua sessão.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              Exibimos apenas anúncios compatíveis com o caráter educacional da plataforma.
              Categorias como conteúdo adulto, jogos de azar, sensacionalismo e conteúdo político
              partidário são bloqueadas manualmente.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              Para mais informações:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5BC8C0] hover:underline"
              >
                Política de Privacidade do Google
              </a>
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-2">
          <strong className="text-white">Vercel Analytics</strong>
        </p>
        <ul className="space-y-2 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              Utilizamos o <strong className="text-white">Vercel Analytics</strong> para coletar
              dados de uso anonimizados e métricas de desempenho.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              Nenhum identificador pessoal — como nome, e-mail ou IP diretamente visível ao Lumen
              — é armazenado ou vinculado aos eventos coletados.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              Para mais informações:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5BC8C0] hover:underline"
              >
                Política de Privacidade da Vercel
              </a>
            </span>
          </li>
        </ul>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          4. FINALIDADE E BASE LEGAL DO TRATAMENTO (LGPD)
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Em conformidade com a{" "}
          <strong className="text-white">
            Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD)
          </strong>
          , apresentamos abaixo a finalidade e a base legal aplicável a cada tipo de dado tratado:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-[14px] text-gray-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-3 text-white font-semibold">Dado Tratado</th>
                <th className="text-left py-2 pr-3 text-white font-semibold">Finalidade</th>
                <th className="text-left py-2 text-white font-semibold">Base Legal (LGPD)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-3">Progresso de leitura e preferências (localStorage)</td>
                <td className="py-3 pr-3">Fornecer as funcionalidades principais: rastreamento, idioma e tema</td>
                <td className="py-3">Legítimo Interesse (art. 7º, V e IX)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-3">Eventos de uso — Vercel Analytics</td>
                <td className="py-3 pr-3">Aprimorar a experiência e funcionalidades da plataforma</td>
                <td className="py-3">Legítimo Interesse (art. 7º, IX)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-3">Métricas de desempenho — Web Vitals</td>
                <td className="py-3 pr-3">Monitorar e otimizar a performance técnica</td>
                <td className="py-3">Legítimo Interesse (art. 7º, IX)</td>
              </tr>
              <tr>
                <td className="py-3 pr-3">Dados para publicidade — Google AdSense</td>
                <td className="py-3 pr-3">Financiar o serviço gratuito por meio de anúncios contextuais</td>
                <td className="py-3 font-semibold text-white">Consentimento (art. 7º, I)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <p className="text-[15px] leading-[1.8] text-gray-300">
            <strong className="text-white">Revogação do consentimento:</strong> o consentimento
            para publicidade pode ser revogado a qualquer momento. Para isso, recuse o banner de
            consentimento na próxima visita ou limpe o dado{" "}
            <code className="text-[#5BC8C0] bg-white/5 px-1 rounded">lumen_consent</code> do
            armazenamento local do seu navegador. A revogação não compromete o acesso às
            funcionalidades da plataforma.
          </p>
        </div>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          5. COMPARTILHAMENTO DE DADOS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">Não vendemos dados pessoais de nossos usuários.</strong>
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          O compartilhamento de informações com terceiros ocorre apenas nos seguintes cenários:
        </p>
        <ul className="space-y-3 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Provedor de infraestrutura e analytics:</strong> a{" "}
              <strong className="text-white">Vercel Inc.</strong> é responsável pela hospedagem e
              pela coleta de analytics. Como provedor de infraestrutura, a Vercel pode ter acesso
              a dados técnicos de acesso (IP, dados de requisição HTTP) como parte do
              funcionamento normal do serviço.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Parceiro de publicidade:</strong> o{" "}
              <strong className="text-white">Google LLC</strong>, por meio do AdSense, recebe
              dados de sessão para servir anúncios{" "}
              <strong className="text-white">
                exclusivamente após o consentimento explícito do usuário
              </strong>
              . Caso o usuário recuse o consentimento, nenhum dado é compartilhado com o Google
              para fins publicitários.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Obrigação legal:</strong> poderemos divulgar
              informações quando exigido por lei, ordem judicial ou autoridade regulatória
              competente.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          6. RETENÇÃO E SEGURANÇA DOS DADOS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">Dados Locais (localStorage)</strong>
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Os dados armazenados localmente — progresso de leitura, preferências de idioma e tema,
          status de consentimento — residem exclusivamente no dispositivo do usuário. O Lumen não
          tem acesso a esses dados fora da sessão ativa no navegador. O usuário pode excluí-los a
          qualquer momento pelas configurações do navegador.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">Dados de Analytics (Vercel Analytics)</strong>
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Os dados de eventos de uso coletados pelo Vercel Analytics são retidos conforme a
          política interna da Vercel. Para informações detalhadas, consulte a{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5BC8C0] hover:underline"
          >
            Política de Privacidade da Vercel
          </a>
          .
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">Dados de Publicidade (Google AdSense)</strong>
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Os dados processados pelo Google via AdSense são retidos conforme a{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5BC8C0] hover:underline"
          >
            Política de Privacidade do Google
          </a>{" "}
          e as configurações de retenção da conta da TechMinds no AdSense.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">Segurança das Comunicações</strong>
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Toda a comunicação entre o seu navegador e nossos servidores é protegida por{" "}
          <strong className="text-white">criptografia TLS/HTTPS</strong>. Adotamos boas práticas
          de segurança para proteger a integridade e a disponibilidade da plataforma, em
          conformidade com o{" "}
          <strong className="text-white">Marco Civil da Internet (Lei nº 12.965/2014)</strong>.
        </p>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          7. SEUS DIREITOS (LGPD)
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Nos termos da{" "}
          <strong className="text-white">
            Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
          </strong>
          , você possui os seguintes direitos em relação aos seus dados pessoais:
        </p>
        <ul className="space-y-2 pl-2">
          {[
            { label: "Confirmação e acesso:", desc: "confirmar a existência de tratamento de dados seus e acessar as informações que mantemos." },
            { label: "Correção:", desc: "solicitar a correção de dados incompletos, inexatos ou desatualizados." },
            { label: "Anonimização, bloqueio ou eliminação:", desc: "solicitar a anonimização ou eliminação de dados desnecessários ou tratados em desconformidade com a LGPD." },
            { label: "Portabilidade:", desc: "solicitar a portabilidade dos seus dados pessoais a outro fornecedor de serviço." },
            { label: "Eliminação dos dados tratados com consentimento:", desc: "solicitar a exclusão dos dados pessoais tratados com base no seu consentimento." },
            { label: "Informação sobre compartilhamento:", desc: "obter informações sobre as entidades com as quais compartilhamos seus dados." },
            { label: "Revogação do consentimento:", desc: "revogar o consentimento para tratamento de dados a qualquer momento, sem prejuízo à legalidade do tratamento realizado anteriormente." },
          ].map(({ label, desc }) => (
            <li key={label} className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
              <span className="text-[#5BC8C0] shrink-0">·</span>
              <span>
                <strong className="text-white">{label}</strong> {desc}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mt-4">
          Para exercer qualquer um desses direitos, entre em contato com nosso Encarregado (DPO)
          pelo e-mail:{" "}
          <a
            href="mailto:compliance@techminds.net.br"
            className="text-[#5BC8C0] hover:underline"
          >
            compliance@techminds.net.br
          </a>
        </p>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          8. PRIVACIDADE DE CRIANÇAS E ADOLESCENTES
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          O Lumen possui classificação etária <strong className="text-white">Livre</strong>, sendo
          acessível a todos os públicos. Por abordar conteúdo educacional sobre filosofia política
          e história do pensamento, a plataforma é mais adequada para jovens e adultos com
          maturidade intelectual para esse tipo de conteúdo.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Em conformidade com o{" "}
          <strong className="text-white">
            Estatuto da Criança e do Adolescente (ECA — Lei nº 8.069/1990)
          </strong>{" "}
          e com a <strong className="text-white">LGPD</strong>, não coletamos intencionalmente
          dados pessoais de crianças (menores de 12 anos). O tratamento de dados pessoais de
          crianças, quando aplicável, é realizado apenas com consentimento específico e em destaque
          fornecido por pelo menos um dos pais ou responsável legal.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Caso identifiquemos que dados pessoais de uma criança foram coletados inadvertidamente,
          tomaremos providências imediatas para excluí-los.
        </p>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          9. TRANSFERÊNCIA INTERNACIONAL DE DADOS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          O Lumen utiliza serviços de parceiros tecnológicos que operam e armazenam dados fora do
          Brasil:
        </p>
        <ul className="space-y-2 pl-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Vercel Inc.</strong> (Estados Unidos) — responsável
              pela hospedagem da plataforma e pela coleta de dados de analytics.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Google LLC</strong> (Estados Unidos) — responsável
              pela veiculação de anúncios via AdSense.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Essas transferências internacionais são realizadas em conformidade com o{" "}
          <strong className="text-white">art. 33 da LGPD</strong>, com base em{" "}
          <strong className="text-white">cláusulas contratuais padrão</strong> e mecanismos de
          proteção reconhecidos internacionalmente, assegurando nível de proteção equivalente ao
          previsto na legislação brasileira.
        </p>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          10. ALTERAÇÕES NESTA POLÍTICA
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em
          nossas práticas, em funcionalidades da plataforma ou em requisitos legais. A data de
          última atualização constará sempre no topo deste documento. Recomendamos que você revise
          esta política periodicamente. O uso continuado da plataforma após a publicação de
          alterações constitui sua aceitação das condições atualizadas. Em caso de alterações
          relevantes, poderemos exibir um aviso na própria plataforma.
        </p>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          11. CONTATE-NOS (ENCARREGADO/DPO)
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Para dúvidas, solicitações de exercício de direitos ou quaisquer questões relacionadas a
          esta Política de Privacidade, entre em contato com nosso Encarregado de Proteção de
          Dados:
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
              <strong className="text-white">E-mail:</strong>{" "}
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
          Responderemos às solicitações dentro do prazo previsto na legislação aplicável.
        </p>
      </section>
    </>
  );
}

// ─── EN ───────────────────────────────────────────────────────────────────────
function LumenPrivacyPolicyEN() {
  return (
    <>
      <div className="mb-12">
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Welcome to{" "}
          <strong className="text-white font-semibold">
            Lumen — Multidimensional Map of Political Thought
          </strong>
          . Your privacy is a fundamental priority for us. This Privacy Policy transparently and
          objectively describes how we collect, use, store, and protect your information when you
          use our web platform.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          By using Lumen, you agree to the practices described in this policy.
        </p>
      </div>

      <section id="section-1" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          1. INFORMATION WE COLLECT
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">1.1. Data Stored Locally on Your Device</strong>
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          Lumen stores the following information{" "}
          <strong className="text-white">exclusively in your browser</strong> (via{" "}
          <code className="text-[#5BC8C0] bg-white/5 px-1 rounded">localStorage</code>), without
          transmitting it to our own servers:
        </p>
        <ul className="space-y-2 mb-4 pl-2">
          {[
            { label: "Reading progress:", desc: "works you have marked as read, including the thinker identifier, the work title, and a timestamp." },
            { label: "Language preference:", desc: "your selected language (English, Portuguese, or Spanish)." },
            { label: "Theme preference:", desc: "your choice between light and dark mode." },
            { label: "Advertising consent status:", desc: "your response to the consent banner displayed on your first visit (accepted or refused)." },
            { label: "Notice dismissal:", desc: "a record that you closed the ad blocker notice." },
          ].map(({ label, desc }) => (
            <li key={label} className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
              <span className="text-[#5BC8C0] shrink-0">·</span>
              <span>
                <strong className="text-white">{label}</strong> {desc}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          This data is entirely under your control. You can delete it at any time by clearing the
          site data in your browser settings.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">1.2. Automatically Collected Data</strong>
        </p>
        <ul className="space-y-2 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Usage events (Vercel Analytics):</strong> we use
              Vercel Analytics to collect anonymized interaction events (searches performed, filters
              applied, works marked as read, exports initiated, language and theme changes,
              navigation through historical eras). This data is used solely to understand how the
              platform is used and to improve the user experience.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Performance metrics (Core Web Vitals):</strong> we
              collect technical loading and interactivity metrics (LCP, CLS, INP, FCP, TTFB) to
              monitor and optimize platform performance.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Technical network data:</strong> third-party providers
              (Vercel and Google) may log your IP address, device model, and browser information as
              part of their normal hosting and advertising infrastructure operations.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          2. DEVICE PERMISSIONS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          Lumen is a web application and{" "}
          <strong className="text-white">does not request any device permissions</strong> — no
          camera, microphone, location, photo library, or notifications. No hardware on your device
          is accessed by the platform.
        </p>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          3. ADVERTISING AND THIRD-PARTY SERVICES
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Lumen is free to use and financially supported by advertising. We use the following
          third-party services:
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-2">
          <strong className="text-white">Google AdSense</strong>
        </p>
        <ul className="space-y-2 mb-4 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              We use <strong className="text-white">Google AdSense</strong> to display contextual
              advertisements on the platform.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              The AdSense script is{" "}
              <strong className="text-white">
                only loaded after your explicit consent
              </strong>{" "}
              through the consent banner displayed on your first visit. No advertising code is
              executed before your acceptance.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              If you <strong className="text-white">decline</strong> consent, no ads are displayed
              and no advertising scripts are loaded or executed during your session.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              We display only ads appropriate to the educational nature of the platform. Categories
              such as adult content, gambling, clickbait, and partisan political content are
              manually blocked in our AdSense account.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              For more information:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5BC8C0] hover:underline"
              >
                Google Privacy Policy
              </a>
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-2">
          <strong className="text-white">Vercel Analytics</strong>
        </p>
        <ul className="space-y-2 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              We use <strong className="text-white">Vercel Analytics</strong> to collect anonymized
              usage data and performance metrics.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              No personal identifier — such as name, email, or IP address directly visible to Lumen
              — is stored or linked to the usage events collected.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              For more information:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5BC8C0] hover:underline"
              >
                Vercel Privacy Policy
              </a>
            </span>
          </li>
        </ul>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          4. LEGAL BASIS FOR PROCESSING
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          We process data in accordance with the{" "}
          <strong className="text-white">
            General Data Protection Regulation (GDPR)
          </strong>{" "}
          and, where applicable, the{" "}
          <strong className="text-white">
            California Consumer Privacy Act (CCPA)
          </strong>
          . The table below outlines the purpose and legal basis for each type of data processed:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-[14px] text-gray-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-3 text-white font-semibold">Data Processed</th>
                <th className="text-left py-2 pr-3 text-white font-semibold">Purpose</th>
                <th className="text-left py-2 text-white font-semibold">Legal Basis (GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-3">Reading progress and preferences (localStorage)</td>
                <td className="py-3 pr-3">Provide core functionality: reading tracking, language and theme personalization</td>
                <td className="py-3">Contract Performance / Legitimate Interests (Art. 6(1)(b) and (f))</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-3">Usage events — Vercel Analytics</td>
                <td className="py-3 pr-3">Understand usage patterns to improve platform experience</td>
                <td className="py-3">Legitimate Interests (Art. 6(1)(f))</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-3">Performance metrics — Web Vitals</td>
                <td className="py-3 pr-3">Monitor and optimize the platform's technical performance</td>
                <td className="py-3">Legitimate Interests (Art. 6(1)(f))</td>
              </tr>
              <tr>
                <td className="py-3 pr-3">Advertising data — Google AdSense</td>
                <td className="py-3 pr-3">Fund the free service through contextual advertising</td>
                <td className="py-3 font-semibold text-white">Consent (Art. 6(1)(a))</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <p className="text-[15px] leading-[1.8] text-gray-300">
            <strong className="text-white">Withdrawing consent:</strong> advertising consent may be
            withdrawn at any time by declining the consent banner on your next visit or by clearing
            the{" "}
            <code className="text-[#5BC8C0] bg-white/5 px-1 rounded">lumen_consent</code> key from
            your browser's local storage. Withdrawal does not affect your access to any platform
            features — all functionality remains available without ads.
          </p>
          <p className="text-[15px] leading-[1.8] text-gray-300 mt-3">
            <strong className="text-white">CCPA note:</strong> Lumen does not sell personal
            information as defined under the California Consumer Privacy Act. Sharing data with
            Google AdSense for advertising purposes — which occurs only after explicit user consent
            — may be considered "sharing" under the CCPA. You may opt out at any time by declining
            or withdrawing your consent via the consent banner.
          </p>
        </div>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          5. DATA SHARING
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          <strong className="text-white">We do not sell personal data.</strong>
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          Information is shared with third parties only in the following circumstances:
        </p>
        <ul className="space-y-3 pl-2">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Infrastructure and analytics provider:</strong>{" "}
              <strong className="text-white">Vercel Inc.</strong> is responsible for hosting the
              platform and collecting analytics data. As an infrastructure provider, Vercel may have
              access to technical access data (IP address, HTTP request data) as part of normal
              service operation.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Advertising partner:</strong>{" "}
              <strong className="text-white">Google LLC</strong>, through AdSense, receives session
              data to serve ads —{" "}
              <strong className="text-white">
                exclusively after the user's explicit consent
              </strong>
              . If the user declines consent, no data is shared with Google for advertising
              purposes.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Legal obligation:</strong> we may disclose information
              when required by law, court order, or competent regulatory authority.
            </span>
          </li>
        </ul>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          6. DATA RETENTION AND SECURITY
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">Local Data (localStorage)</strong>
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Data stored locally — reading progress, language and theme preferences, consent status —
          resides exclusively on the user's device. Lumen does not have access to this data outside
          the active browser session. Users can delete it at any time through their browser
          settings.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">Analytics Data (Vercel Analytics)</strong>
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Usage event data collected by Vercel Analytics is retained in accordance with Vercel's
          internal policies. For detailed retention information, please refer to the{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5BC8C0] hover:underline"
          >
            Vercel Privacy Policy
          </a>
          .
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">Advertising Data (Google AdSense)</strong>
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Data processed by Google through AdSense is retained in accordance with the{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5BC8C0] hover:underline"
          >
            Google Privacy Policy
          </a>{" "}
          and the advertiser account's retention settings.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">Communication Security</strong>
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          All communication between your browser and our servers is protected by{" "}
          <strong className="text-white">TLS/HTTPS encryption</strong>. We follow security best
          practices to protect the integrity and availability of the platform.
        </p>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          7. YOUR RIGHTS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">GDPR Rights (EU/EEA Users)</strong>
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          Under the{" "}
          <strong className="text-white">General Data Protection Regulation (GDPR)</strong>, you
          have the following rights regarding your personal data:
        </p>
        <ul className="space-y-2 mb-4 pl-2">
          {[
            { label: "Right of access:", desc: "confirm whether we process data about you and obtain a copy of the information we hold." },
            { label: "Right to rectification:", desc: "request correction of inaccurate or incomplete personal data." },
            { label: "Right to erasure:", desc: 'request deletion of your personal data where there is no legitimate reason for its continued processing.' },
            { label: "Right to data portability:", desc: "receive your personal data in a structured, commonly used, machine-readable format." },
            { label: "Right to restriction of processing:", desc: "request that we limit the processing of your data in certain circumstances." },
            { label: "Right to object:", desc: "object to processing based on legitimate interests at any time on grounds relating to your particular situation." },
            { label: "Right to withdraw consent:", desc: "withdraw advertising consent at any time without affecting the lawfulness of prior processing or your access to the platform." },
          ].map(({ label, desc }) => (
            <li key={label} className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
              <span className="text-[#5BC8C0] shrink-0">·</span>
              <span>
                <strong className="text-white">{label}</strong> {desc}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-3">
          <strong className="text-white">CCPA Rights (California Users)</strong>
        </p>
        <ul className="space-y-2 mb-4 pl-2">
          {[
            { label: "Right to know:", desc: "be informed about what personal information is collected, used, disclosed, or sold." },
            { label: "Right to delete:", desc: "request deletion of your personal information, subject to certain exceptions." },
            { label: "Right to opt out of sale/sharing:", desc: "opt out of the sale or sharing of personal information (applicable to AdSense personalization — decline or withdraw consent via the banner)." },
            { label: "Right to non-discrimination:", desc: "not be discriminated against for exercising your privacy rights." },
          ].map(({ label, desc }) => (
            <li key={label} className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
              <span className="text-[#5BC8C0] shrink-0">·</span>
              <span>
                <strong className="text-white">{label}</strong> {desc}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          To exercise any of these rights, contact our Data Protection Officer at:{" "}
          <a
            href="mailto:compliance@techminds.net.br"
            className="text-[#5BC8C0] hover:underline"
          >
            compliance@techminds.net.br
          </a>
        </p>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          8. CHILDREN'S PRIVACY
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Lumen is rated <strong className="text-white">General Audiences</strong> — suitable for
          all ages. However, as it covers educational content on political philosophy and the history
          of thought, it is best suited for young people and adults with the intellectual maturity
          to engage with such content.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          In compliance with the{" "}
          <strong className="text-white">
            Children's Online Privacy Protection Act (COPPA)
          </strong>
          , we do not knowingly collect personal information from children under the age of 13. If
          we become aware that personal information from a child under 13 has been inadvertently
          collected, we will take immediate steps to delete it.
        </p>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          If you are a parent or guardian and believe that your child has provided us with personal
          information, please contact us at{" "}
          <a
            href="mailto:compliance@techminds.net.br"
            className="text-[#5BC8C0] hover:underline"
          >
            compliance@techminds.net.br
          </a>{" "}
          so we can take appropriate action.
        </p>
      </section>

      <section id="section-9" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          9. INTERNATIONAL DATA TRANSFERS
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          Lumen uses services from technology partners that operate and store data outside Brazil
          and, where applicable, outside the European Economic Area (EEA):
        </p>
        <ul className="space-y-2 pl-2 mb-4">
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Vercel Inc.</strong> (United States) — responsible
              for hosting the platform and collecting analytics data.
            </span>
          </li>
          <li className="text-[16px] leading-[1.8] text-gray-300 flex gap-2">
            <span className="text-[#5BC8C0] shrink-0">·</span>
            <span>
              <strong className="text-white">Google LLC</strong> (United States) — responsible
              for serving ads via AdSense.
            </span>
          </li>
        </ul>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          These international data transfers are carried out in compliance with applicable data
          protection law, including on the basis of{" "}
          <strong className="text-white">Standard Contractual Clauses (SCCs)</strong> and other
          internationally recognized safeguards, ensuring an adequate level of protection equivalent
          to that required under applicable legislation.
        </p>
      </section>

      <section id="section-10" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#5BC8C0]">
          10. CHANGES TO THIS POLICY
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300">
          We may update this Privacy Policy periodically to reflect changes in our practices,
          platform features, or legal requirements. The last-updated date will always appear at the
          top of this document. We encourage you to review this policy regularly. Continued use of
          the platform following the publication of changes constitutes your acceptance of the
          updated terms. For significant changes, we may display a notice within the platform.
        </p>
      </section>

      <section id="section-11" className="mb-12">
        <h2 className="text-[18px] font-semibold text-white mb-4 pl-3 border-l-2 border-[#7B5EA7]">
          11. CONTACT US
        </h2>
        <p className="text-[16px] leading-[1.8] text-gray-300 mb-4">
          For questions, requests to exercise your rights, or any other matters related to this
          Privacy Policy, please contact our Data Protection Officer:
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
              <strong className="text-white">Email:</strong>{" "}
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
          We will respond to requests within the timeframe required by applicable law.
        </p>
      </section>
    </>
  );
}
