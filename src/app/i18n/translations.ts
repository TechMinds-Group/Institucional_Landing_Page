export type Language = 'pt' | 'en' | 'es';

/** Texto de um produto do catálogo B resolvido em um idioma (RN-019-1). */
export interface CatalogProductText {
  segmento: string;
  headline: string;
  beneficios: string[];
}

// ── Landings de produto (RN-025) — namespaces novos, trilíngues ────
// Copy literal do dossiê g1 seções FAQ; EN/ES são tradução nova
// (disclaimers traduzidos fielmente). Estrutura visual/mocks ficam nas
// pages; este namespace carrega só texto.
export interface VibecutLanding {
  nav: { links: string[]; cta: string };
  footer: {
    statement: string;
    tagline: string;
    exploreTitle: string;
    exploreLinks: string[];
    documentsTitle: string;
    terms: string;
    privacy: string;
    copyright: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    highlight: string;
    paragraph: string;
    ctaHow: string;
    ctaStyles: string;
    status: string;
    statusNote: string;
    miniProps: string[];
    previewTitle: string;
    refLabel: string;
    previewLabel: string;
    previewDisclaimer: string;
    modeBadge: string;
    textureTitle: string;
    textureText: string;
  };
  benefits: { eyebrow: string; title: string; cards: { title: string; description: string }[] };
  howItWorks: {
    eyebrow: string;
    title: string;
    support: string;
    steps: { title: string; description: string }[];
    note: string;
  };
  modes: {
    eyebrow: string;
    title: string;
    disclaimer: string;
    cards: { badge: string; line: string; example: string }[];
  };
  analysis: {
    eyebrow: string;
    title: string;
    factors: { title: string; description: string }[];
    panelTitle: string;
    attributes: { label: string; value: string }[];
    disclaimer: string;
  };
  suggestions: {
    eyebrow: string;
    title: string;
    mockBadge: string;
    selectedTitle: string;
    selectedDescription: string;
    selectedTag: string;
    altTitle: string;
    altDescription: string;
    noHistory: string;
    previewDisclaimer: string;
  };
  privacy: {
    eyebrow: string;
    title: string;
    deviceCode: string;
    gemini: string;
    consentRecord: string;
    panelTitle: string;
    termsDoc: string;
    privacyDoc: string;
    readDoc: string;
    instruction: string;
    panelNote: string;
    cards: { title: string; description: string }[];
  };
  availability: {
    eyebrow: string;
    title: string;
    cardTitle: string;
    cardTag: string;
    rows: { label: string; value: string }[];
    note: string;
  };
  faq: { eyebrow: string; title: string; support: string; items: { q: string; a: string }[] };
  invite: { eyebrow: string; title: string; text: string; ctaStyles: string; ctaTests: string };
}

export interface LumenLanding {
  nav: { links: string[]; cta: string; ctaPending: string };
  footer: {
    statement: string;
    tagline: string;
    exploreTitle: string;
    exploreLinks: string[];
    productFeaturesTitle: string;
    productFeatures: string[];
    copyright: string;
  };
  hero: {
    statusChip: string;
    eyebrow: string;
    headline: string;
    paragraph: string;
    ctaExplore: string;
    ctaHow: string;
    cardCaption: string;
    cardLine: string;
  };
  stats: { items: { value: string; label: string }[]; disclaimer: string };
  acervo: {
    eyebrow: string;
    title: string;
    chip: string;
    cards: { name: string; era: string; dates: string; workLabel: string; work: string; workYear: string }[];
    ctaCatalog: string;
    catalogPending: string;
    disclaimer: string;
  };
  howItWorks: { title: string; steps: { title: string; description: string }[] };
  busca: {
    eyebrow: string;
    title: string;
    blocks: { title: string; description: string }[];
    mockTitle: string;
    mockQuery: string;
    mockResult: string;
    mockAuthor: string;
    mockStatus: string;
    mockRecord: string;
    mockDownload: string;
    mockProfileCta: string;
    mockDisclaimer: string;
  };
  perfil: {
    eyebrow: string;
    title: string;
    radarLabel: string;
    radarTags: string[];
    axesTitle: string;
    axes: string[];
    disclaimer: string;
    states: { title: string; description: string }[];
    visualNote: string;
  };
  diversificacao: {
    eyebrow: string;
    title: string;
    intro: string;
    counts: string;
    rule: string;
    cards: { name: string; work: string; era: string }[];
    insufficient: string;
  };
  excel: {
    eyebrow: string;
    title: string;
    scopes: string[];
    tableTitle: string;
    rows: string[];
    footer: string;
    expl: string;
  };
  privacidade: {
    eyebrow: string;
    title: string;
    highlight: string;
    blocks: { title: string; description: string }[];
    note: string;
  };
  faq: { eyebrow: string; title: string; support: string; items: { q: string; a: string }[] };
  invite: { eyebrow: string; title: string; text: string; ctaExplore: string; note: string };
}

export interface FasToLanding {
  nav: { links: string[]; cta: string };
  footer: {
    statement: string;
    tagline: string;
    companyStatement: string;
    exploreTitle: string;
    exploreLinks: string[];
    techmindsTitle: string;
    knowCompany: string;
    requestPresentation: string;
    copyright: string;
  };
  hero: {
    statusChip: string;
    eyebrow: string;
    headline: string;
    paragraph: string;
    ctaPresentation: string;
    microcopy: string;
    agendaTitle: string;
    agendaDays: string[];
    agendaSelectedDay: string;
    appointments: { name: string; service: string; duration: string; pro: string; status: string }[];
    statusLabels: { confirmed: string; pending: string };
    agendaHint: string;
    agendaNote: string;
    segments: string[];
  };
  problemas: {
    eyebrow: string;
    title: string;
    cards: { problem: string; solution: string }[];
  };
  comoFunciona: {
    eyebrow: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  recursos: {
    eyebrow: string;
    title: string;
    cards: { title: string; description: string }[];
    accessBanner: string;
  };
  clube: {
    eyebrow: string;
    title: string;
    rules: { title: string; description: string }[];
    disclaimer: string;
    panelTitle: string;
    panelItems: string[];
    panelTotal: string;
    panelNote: string;
  };
  whatsapp: {
    eyebrow: string;
    title: string;
    triggers: { title: string; description: string }[];
    chatHeader: string;
    chatMessages: string[];
    chatConfirm: string;
    chatCancel: string;
    providerNote: string;
    scopeNote: string;
  };
  assinaturas: {
    eyebrow: string;
    title: string;
    saas: { label: string; title: string; points: string[] };
    club: { label: string; title: string; points: string[] };
    distinction: string;
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  invite: {
    title: string;
    text: string;
    ctaPresentation: string;
    note: string;
  };
}


export interface Translations {
  nav: {
    home: string;
    products: string;
    segments: string;
    about: string;
    customers: string;
    contact: string;
    getStarted: string;
  };
  navB: {
    solutions: string;
    howWeWork: string;
    pilares: string;
    company: string;
    contact: string;
  };
  heroB: {
    eyebrow: string;
    headline: string;
    supportLine1: string;
    supportLine2: string;
    ctaWhatsApp: string;
    microcopy: string;
    hook: string;
    imageAlt: string;
  };
  problemB: {
    title: string;
    cards: {
      title: string;
      description: string;
    }[];
    hook: string;
  };
  catalogB: {
    eyebrow: string;
    title: string;
    activeStatement: string;
    developingStatement: string;
    carouselTitle: string;
    carouselSubtitle: string;
    carouselPrev: string;
    carouselNext: string;
    paginationLabel: string;
    badgeActive: string;
    badgeDeveloping: string;
    ctaLabels: {
      'conhecer-groom': string;
      'conhecer-fasto': string;
      'conhecer-lumen': string;
      'conhecer-vibecut': string;
      'conhecer-escola-conectada': string;
    };
    products: {
      groom: CatalogProductText;
      fasto: CatalogProductText;
      lumen: CatalogProductText;
      vibecut: CatalogProductText;
      'escola-conectada': CatalogProductText;
    };
    custom: {
      eyebrow: string;
      title: string;
      description: string;
      ctaWhatsApp: string;
      microcopy: string;
    };
    hook: string;
  };
  howItWorksB: {
    eyebrow: string;
    title: string;
    support: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
    /** Etapa 01 — chips de opções do catálogo (ilustração HTML/CSS). */
    stepChips: string[];
    /** Etapa 02 — itens com check (ilustração HTML/CSS). */
    stepChecklist: string[];
    /** Etapa 03 — painel "rotina conectada" (ilustração HTML/CSS). */
    stepPanelTitle: string;
    stepPanelRows: string[];
    note: string;
    hook: string;
  };
  pillarsB: {
    eyebrow: string;
    title: string;
    support: string;
    items: {
      title: string;
      description: string;
    }[];
    hook: string;
  };
  socialProofB: {
    eyebrow: string;
    title: string;
    support: string;
    pendingTag: string;
    resultLabel: string;
    /** Estrutura pronta para receber conteúdo autorizado sem refactor (RN-023). */
    cards: {
      segment: string;
      testimonial: string;
      result: string;
      logo: string;
      name: string;
      roleCompany: string;
    }[];
    note: string;
    hook: string;
  };
  companyTrust: {
    eyebrow: string;
    title: string;
    support: string;
    statement: string;
    commercial: {
      title: string;
      description: string;
      ctaWhatsApp: string;
    };
    areas: {
      title: string;
      description: string;
      careers: string;
      support: string;
      compliance: string;
    };
    copyHint: string;
    copied: string;
  };
  footerB: {
    statement: string;
    nav: {
      systemsTitle: string;
      companyTitle: string;
      legalTitle: string;
      about: string;
      contact: string;
      terms: string;
      privacy: string;
    };
    legalName: string;
    cnpj: string;
    copyright: string;
  };
  legal: {
    termsTitle: string;
    termsSubtitle: string;
    privacyTitle: string;
    privacySubtitle: string;
    inPreparation: string;
    comingSoon: string;
    onThisPage: string;
    backToTop: string;
    seeAlso: string;
    crossLinkToPrivacy: string;
    crossLinkToTerms: string;
  };
  /** Landings de produto (RN-025 — append-only, dossiê g1). */
  vibecut: VibecutLanding;
  lumen: LumenLanding;
  fasto: FasToLanding;
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: 'Início',
      products: 'Produtos',
      segments: 'Segmentos',
      about: 'Sobre',
      customers: 'Clientes',
      contact: 'Contato',
      getStarted: 'Ver soluções'
    },
    navB: {
      solutions: 'Catálogo',
      howWeWork: 'Como funciona',
      pilares: 'Pilares',
      company: 'Empresa',
      contact: 'Contato'
    },
    heroB: {
      eyebrow: 'Tecnologia para negócios que crescem',
      headline: 'Menos rotina dispersa. Mais controle para crescer.',
      supportLine1: 'Sistemas prontos, em evolução constante e moldados à sua operação — com manutenção e suporte incluídos.',
      supportLine2: 'Você conversa com a gente, e a tecnologia acompanha o crescimento do seu negócio.',
      ctaWhatsApp: 'Conversar no WhatsApp',
      microcopy: 'Escopo, suporte e condições acordados com você.',
      hook: 'Veja qual solução faz sentido para sua rotina.',
      imageAlt: 'Ilustração de um hub orbital noturno conectando os sistemas TechMinds'
    },
    problemB: {
      title: 'O problema da rotina dispersa',
      cards: [
        {
          title: 'Pedidos espalhados no WhatsApp',
          description: 'Conversas simultâneas, anotações manuais e informações importantes perdidas no meio das mensagens.'
        },
        {
          title: 'Agenda difícil de acompanhar',
          description: 'Horários combinados por mensagem, com remarcações e conflitos que escapam do controle.'
        },
        {
          title: 'Dados separados para decidir',
          description: 'Cada informação em um lugar diferente — e nenhuma visão completa do negócio na hora de decidir.'
        }
      ],
      hook: 'O próximo passo é reunir o que importa. Encontre seu caminho no catálogo.'
    },
    catalogB: {
      eyebrow: 'Encontre o seu caminho',
      title: 'Qual parte da sua rotina pode ficar mais clara?',
      activeStatement: 'Cinco produtos no catálogo. Groom, FasTo e Lumen estão ativos.',
      developingStatement: 'VibeCut e Escola Conectada estão em desenvolvimento.',
      carouselTitle: 'Explore as soluções',
      carouselSubtitle: 'Cinco produtos, organizados em um fluxo visual mais compacto e fácil de navegar.',
      carouselPrev: 'Cartão anterior',
      carouselNext: 'Próximo cartão',
      paginationLabel: 'Ir para o cartão',
      badgeActive: '● Ativo',
      badgeDeveloping: 'Em desenvolvimento',
      ctaLabels: {
        'conhecer-groom': 'Conhecer Groom',
        'conhecer-fasto': 'Conhecer FasTo',
        'conhecer-lumen': 'Conhecer Lumen',
        'conhecer-vibecut': 'Conhecer VibeCut',
        'conhecer-escola-conectada': 'Conhecer Escola Conectada'
      },
      products: {
        groom: {
          segmento: 'Para barbearias',
          headline: 'Sua agenda e suas contas na mesma direção.',
          beneficios: [
            'Agendamento via WhatsApp',
            'Controle financeiro e fila de espera',
            'Relatórios para acompanhar a operação'
          ]
        },
        fasto: {
          segmento: 'Para estética e beleza',
          headline: 'Cuide dos clientes. Organize o que vem depois.',
          beneficios: [
            'Agenda online e manual, com catálogo',
            'Clube de assinaturas',
            'Lembretes e cobranças via WhatsApp'
          ]
        },
        lumen: {
          segmento: 'Para educação e filosofia',
          headline: 'Mais contexto para explorar ideias.',
          beneficios: [
            'Pensadores e obras em perspectiva',
            'Exploração em 9 eixos analíticos',
            'Uma ferramenta para educação e filosofia'
          ]
        },
        vibecut: {
          segmento: 'Para barbearias e salões',
          headline: 'Uma referência pessoal antes de escolher o corte.',
          beneficios: [
            'Sugestões personalizadas de cortes',
            'Possibilidades para barbearias e salões'
          ]
        },
        'escola-conectada': {
          segmento: 'Para instituições de ensino',
          headline: 'Uma visão compartilhada da vida escolar.',
          beneficios: [
            'Matrículas, frequência e notas',
            'Comunicação e relatórios',
            'Customizável por instituição'
          ]
        }
      },
      custom: {
        eyebrow: 'Seu negócio tem outra dinâmica?',
        title: 'O sistema pode partir da sua operação.',
        description: 'Para necessidades fora do catálogo, desenvolvemos sob medida, com escopo e customização acordados.',
        ctaWhatsApp: 'Conversar no WhatsApp',
        microcopy: 'Conte sua rotina na mesma conversa comercial.'
      },
      hook: 'Produto ou sob medida: veja como saímos da escolha para a operação.'
    },
    howItWorksB: {
      eyebrow: 'Como trabalhamos',
      title: 'O que acontece depois da primeira conversa?',
      support: 'Três passos simples, com decisões claras em cada etapa.',
      steps: [
        {
          number: '01',
          title: 'Escolher',
          description: 'Conte sua rotina e identifique um produto ativo ou um projeto sob medida.'
        },
        {
          number: '02',
          title: 'Contratar',
          description: 'Alinhe escopo, suporte, customização e condições antes de começar.'
        },
        {
          number: '03',
          title: 'Operar',
          description: 'Inicie a operação conforme a disponibilidade e o que foi acordado.'
        }
      ],
      stepChips: ['Groom', 'FasTo', 'Lumen'],
      stepChecklist: ['Escopo definido', 'Suporte acordado', 'Condições alinhadas'],
      stepPanelTitle: 'Sua rotina, conectada',
      stepPanelRows: ['Agendamento confirmado', 'Caixa fechado', 'Relatório enviado'],
      note: 'VibeCut e Escola Conectada permanecem em desenvolvimento. A conversa não implica acesso imediato.',
      hook: 'E depois da entrega? A continuidade também precisa estar combinada.'
    },
    pillarsB: {
      eyebrow: 'Continuidade com clareza',
      title: 'Seu sistema não termina na entrega.',
      support: 'Manutenção, evolução e performance orientam a entrega. A cobertura de cada pilar é definida no contrato.',
      items: [
        {
          title: 'Manutenção',
          description: 'Correções, estabilidade e segurança conforme contrato.'
        },
        {
          title: 'Evolução',
          description: 'Melhorias e novas versões com escopo e condições acordados.'
        },
        {
          title: 'Performance',
          description: 'Estrutura e desempenho definidos para cada solução, conforme contrato.'
        }
      ],
      hook: 'Quer avaliar esse caminho para o seu negócio? Comece com uma conversa direta.'
    },
    socialProofB: {
      eyebrow: 'Experiências de clientes',
      title: 'Resultados merecem contexto. E evidência.',
      support: 'Espaços reservados para casos e depoimentos reais. Publicação após validação e autorização dos clientes.',
      pendingTag: 'CONTEÚDO PENDENTE',
      resultLabel: 'Resultado verificado',
      cards: [
        {
          segment: 'Barbearias',
          testimonial: '[Depoimento aprovado a inserir]',
          result: '[Resultado e contexto a validar]',
          logo: '[Logo]',
          name: '[Nome]',
          roleCompany: '[Cargo] · [Empresa]'
        },
        {
          segment: 'Estética e beleza',
          testimonial: '[Depoimento aprovado a inserir]',
          result: '[Resultado e contexto a validar]',
          logo: '[Logo]',
          name: '[Nome]',
          roleCompany: '[Cargo] · [Empresa]'
        }
      ],
      note: 'Depoimentos, logos e resultados ainda não confirmados. Nenhum número comercial é apresentado como prova.',
      hook: 'Enquanto os casos são preparados, você pode conhecer a proposta diretamente.'
    },
    companyTrust: {
      eyebrow: 'Empresa e confiança',
      title: 'Informações verdadeiras e canais diretos.',
      support: 'A TechMinds não usa depoimentos inventados, números fictícios ou pressão comercial. Aqui você encontra a identificação empresarial exata e os canais de contato disponíveis.',
      statement: 'Sistemas que evoluem. Negócios que crescem.',
      commercial: {
        title: 'Fale com a equipe comercial',
        description: 'Para novos projetos, parcerias e vendas.',
        ctaWhatsApp: 'Conversar no WhatsApp'
      },
      areas: {
        title: 'Contatos por área',
        description: 'Escolha o canal certo para sua necessidade',
        careers: 'Carreiras · oportunidades profissionais',
        support: 'Suporte · ajuda com os produtos',
        compliance: 'Compliance · privacidade e conformidade'
      },
      copyHint: 'Clique para copiar',
      copied: 'Copiado!'
    },
    footerB: {
      statement: 'Sistemas que evoluem. Negócios que crescem.',
      nav: {
        systemsTitle: 'Sistemas',
        companyTitle: 'Empresa',
        legalTitle: 'Legal',
        about: 'Sobre nós',
        contact: 'Contato',
        terms: 'Termos de uso',
        privacy: 'Privacidade'
      },
      legalName: 'Nome Empresarial: 69.184.592 MICHEL LEMOS BITTENCOURT',
      cnpj: 'CNPJ: 69.184.592/0001-45 | Guaíba - RS',
      copyright: '© 2026 TechMinds. Todos os direitos reservados.'
    },
    legal: {
      termsTitle: 'Termos e Condições de Uso',
      termsSubtitle: 'Selecione o produto para visualizar os termos correspondentes.',
      privacyTitle: 'Política de Privacidade',
      privacySubtitle: 'Selecione o produto para visualizar a política de privacidade correspondente.',
      inPreparation: 'em elaboração',
      comingSoon: 'Em breve',
      onThisPage: 'Nesta página',
      backToTop: 'Voltar ao topo',
      seeAlso: 'Ver também:',
      crossLinkToPrivacy: 'Política de Privacidade do',
      crossLinkToTerms: 'Termos e Condições do'
    },
    // ── RN-025 — Landing VibeCut (dossiê g1 §2–§3) ──────────────────
    vibecut: {
      nav: {
        links: ['Como funciona', 'Estilos', 'Privacidade', 'FAQ'],
        cta: 'Sobre os testes'
      },
      footer: {
        statement: 'Recomendações de cabelo e barba com IA. Uma nova perspectiva para o seu próximo visual.',
        tagline: 'Um produto TechMinds',
        exploreTitle: 'Explore',
        exploreLinks: ['Como funciona', 'Estilos', 'Sobre os testes', 'FAQ'],
        documentsTitle: 'Documentos',
        terms: 'Termos de Uso',
        privacy: 'Política de Privacidade',
        copyright: '© 2026 TechMinds. Todos os direitos reservados.'
      },
      hero: {
        eyebrow: 'IA PARA O SEU PRÓXIMO VISUAL',
        headline: 'Seu próximo visual começa com você.',
        highlight: 'Explore antes de mudar.',
        paragraph: 'Descubra cortes de cabelo e estilos de barba a partir da sua foto. A IA analisa suas características, sugere possibilidades e cria uma prévia para inspirar sua escolha.',
        ctaHow: 'Conheça como funciona',
        ctaStyles: 'Explore os estilos',
        status: 'Android em testes internos · v1.0.6',
        statusNote: 'Ainda não publicado em lojas.',
        miniProps: ['Análise das suas características', 'Três modos de explorar', 'Sem login ou cadastro'],
        previewTitle: 'Sua prévia de estilo',
        refLabel: 'REFERÊNCIA',
        previewLabel: 'PRÉVIA ILUSTRATIVA',
        previewDisclaimer: 'Comparação ilustrativa · não é resultado real',
        modeBadge: 'CABELO + BARBA',
        textureTitle: 'Textura & definição',
        textureText: 'Topo texturizado com degradê baixo e barba curta desenhada. Uma direção para conversar com seu profissional.'
      },
      benefits: {
        eyebrow: 'MAIS REPERTÓRIO, MENOS ACHISMO',
        title: 'Não é sobre seguir um padrão. É sobre encontrar possibilidades.',
        cards: [
          {
            title: 'Parta da sua foto',
            description: 'A proposta parte das suas características — não de um padrão.'
          },
          {
            title: 'Descubra novas direções',
            description: 'Veja possibilidades de corte e barba à altura do seu momento.'
          },
          {
            title: 'Visualize a ideia',
            description: 'Conserve a direção que mais combina para conversar com seu profissional.'
          }
        ]
      },
      howItWorks: {
        eyebrow: 'COMO FUNCIONA',
        title: 'Da sua foto a uma nova possibilidade.',
        support: 'Um percurso guiado, sem login, e-mail ou cadastro.',
        steps: [
          {
            title: 'Aceite os documentos',
            description: 'Leia e aceite os Termos de Uso e a Política de Privacidade separadamente.'
          },
          {
            title: 'Envie sua foto',
            description: 'Uma imagem nítida, com o rosto visível, dá partida à exploração.'
          },
          {
            title: 'Conheça a análise',
            description: 'A IA interpreta suas características sem encaixá-las num padrão.'
          },
          {
            title: 'Explore as sugestões',
            description: 'Direções de estilo organizadas por modo de exploração.'
          },
          {
            title: 'Gere sua prévia',
            description: 'Receba uma prévia ilustrativa para inspirar sua escolha.'
          }
        ],
        note: 'JPEG, PNG ou WEBP, até 10 MB. Na experiência web, o envio é por upload; a câmera é exclusiva do Android instalado. Análise e prévia exigem internet.'
      },
      modes: {
        eyebrow: 'EXPLORE OS ESTILOS',
        title: 'Uma mudança de cada vez. Ou uma nova combinação.',
        cards: [
          { badge: 'SÓ CABELO', line: 'Mude o corte.', example: 'Crop texturizado' },
          { badge: 'SÓ BARBA', line: 'Redefina os contornos.', example: 'Barba curta desenhada' },
          { badge: 'CABELO + BARBA', line: 'Pense no conjunto.', example: 'Quiff + barba curta' }
        ],
        disclaimer: 'Retratos e sugestões editoriais ilustrativos. Não são recomendações personalizadas reais, resultados de usuários ou garantia de resultado físico.'
      },
      analysis: {
        eyebrow: 'UM OLHAR PARA SUAS CARACTERÍSTICAS',
        title: 'A sua foto é o ponto de partida. Não um padrão a seguir.',
        factors: [
          {
            title: 'Formato do rosto',
            description: 'Contornos e proporções orientam os cortes compatíveis.'
          },
          {
            title: 'Cabelo e barba',
            description: 'Volume, comprimento e desenho delimitam as direções possíveis.'
          },
          {
            title: 'Textura de pele',
            description: 'Ondulações e densidade influenciam o acabamento do estilo.'
          }
        ],
        panelTitle: 'Leitura da foto · EXEMPLO',
        attributes: [
          { label: 'Cabelo', value: 'Ondulado' },
          { label: 'Barba', value: 'Curta' },
          { label: 'Rosto', value: 'Oval' },
          { label: 'Pele', value: 'Textura natural' }
        ],
        disclaimer: 'Dados fictícios para demonstrar a interface. Não é uma análise real da pessoa retratada.'
      },
      suggestions: {
        eyebrow: 'DO ESTILO À PRÉVIA',
        title: 'Uma ideia ganha forma quando você consegue imaginá-la.',
        mockBadge: 'EXEMPLO · CABELO + BARBA',
        selectedTitle: 'Quiff + barba curta',
        selectedDescription: 'Volume no topo e contornos definidos.',
        selectedTag: 'Selecionado para demonstrar a prévia',
        altTitle: 'Degradê + barba natural',
        altDescription: 'Laterais suaves e volume discreto no rosto.',
        noHistory: 'Análises e prévias são geradas sob demanda. Não há histórico de looks anteriores.',
        previewDisclaimer: 'A prévia é ilustrativa e não garante o resultado físico. Consulte um profissional antes de mudar.'
      },
      privacy: {
        eyebrow: 'PRIVACIDADE COM CLAREZA',
        title: 'Sem cadastro. Com transparência sobre os dados.',
        deviceCode: 'Um código anônimo identifica o dispositivo — sem nome, e-mail ou conta.',
        gemini: 'A foto é processada pelo serviço externo Google Gemini, sujeito à disponibilidade e às políticas do próprio serviço.',
        consentRecord: 'O aceite registra data e hora em UTC, a versão dos documentos, a plataforma, o IP quando disponível e a informação do navegador.',
        panelTitle: 'Antes de enviar sua foto',
        termsDoc: 'Termos de Uso',
        privacyDoc: 'Política de Privacidade',
        readDoc: 'Ler documento',
        instruction: 'Aceite os dois documentos para continuar',
        panelNote: 'Exemplo visual da etapa de aceite. Esta landing não recebe fotos nem registra consentimento.',
        cards: [
          {
            title: 'Documentos atualizados',
            description: 'Uma nova versão dos documentos exige novo aceite na próxima abertura.'
          },
          {
            title: 'Se a conexão falhar',
            description: 'O registro do aceite fica em fila para reenvio automático.'
          },
          {
            title: 'Dados do dispositivo',
            description: 'Apagar os dados do dispositivo exige aceitar os documentos novamente.'
          }
        ]
      },
      availability: {
        eyebrow: 'EM DESENVOLVIMENTO',
        title: 'Uma nova experiência. Ainda em testes internos.',
        cardTitle: 'VibeCut para Android',
        cardTag: 'TESTES INTERNOS · V1.0.6',
        rows: [
          { label: 'Lojas', value: 'Ainda não publicado' },
          { label: 'Acesso público', value: 'Não disponível' },
          { label: 'Lançamento', value: 'Sem data anunciada' }
        ],
        note: 'A demonstração de upload na web descreve o funcionamento; não indica disponibilidade pública da experiência web.'
      },
      faq: {
        eyebrow: 'ANTES DE COMEÇAR',
        title: 'O que vale saber sobre o VibeCut.',
        support: 'Possibilidades reais de exploração. Limites explicados sem letras miúdas.',
        items: [
          {
            q: 'Já posso baixar ou usar o VibeCut?',
            a: 'Ainda não há acesso público. O Android está em testes internos na versão 1.0.6 e não foi publicado em lojas. Não há data de lançamento anunciada.'
          },
          {
            q: 'Preciso criar uma conta?',
            a: 'Não. O uso não exige login, e-mail ou cadastro. O dispositivo recebe um código anônimo. A foto é processada e os aceites têm registros próprios; ausência de conta não significa ausência de tratamento de dados.'
          },
          {
            q: 'Qual foto posso enviar?',
            a: 'JPEG, PNG ou WEBP de até 10 MB. Prefira uma imagem nítida, com o rosto visível. Na experiência web, o envio é por upload. A câmera funciona somente no Android instalado.'
          },
          {
            q: 'O resultado será igual à prévia?',
            a: 'Não há essa garantia. A prévia é ilustrativa e a qualidade da IA pode variar. Textura, comprimento e trabalho do profissional influenciam o resultado físico. Use como referência e consulte um profissional.'
          },
          {
            q: 'Funciona sem internet? Meus looks ficam salvos?',
            a: 'Análises e prévias exigem internet e o serviço externo Google Gemini, sujeito à disponibilidade. São geradas sob demanda, sem histórico de looks anteriores. Se o registro de aceite falhar, ele fica em fila para reenvio automático.'
          },
          {
            q: 'Quando preciso aceitar os documentos de novo?',
            a: 'Termos de Uso e Política de Privacidade têm aceites separados e por versão. Uma atualização exige novo aceite na próxima abertura. Apagar os dados do dispositivo também exige aceitar novamente.'
          }
        ]
      },
      invite: {
        eyebrow: 'SEU ESTILO, EM PERSPECTIVA',
        title: 'Antes de mudar o visual, amplie suas possibilidades.',
        text: 'Conheça a proposta do VibeCut e explore as ideias de cabelo e barba desta página.',
        ctaStyles: 'Explore os estilos',
        ctaTests: 'Sobre os testes'
      }
    },
    // ── RN-025 — Landing Lumen (dossiê g1 §4–§4.5) ──────────────────
    lumen: {
      nav: {
        links: ['Acervo', 'Como funciona', 'Seu perfil', 'FAQ'],
        cta: 'Explorar o Lumen',
        ctaPending: 'O acesso ao painel Lumen ainda não foi publicado. O destino do produto está em definição pela TechMinds.'
      },
      footer: {
        statement: 'Mapa Multidimensional do Pensamento Político. Exploração histórica e filosófica, com abertura para diferentes perspectivas.',
        tagline: 'Um produto do portfólio TechMinds',
        exploreTitle: 'Explore o Lumen',
        exploreLinks: ['Acervo', 'Como funciona', 'Seu perfil', 'Perguntas frequentes'],
        productFeaturesTitle: 'Do seu jeito',
        productFeatures: ['Português (BR) · Idioma do produto', 'Claro / Escuro · Tema do produto'],
        copyright: '© 2026 Lumen · TechMinds.'
      },
      hero: {
        statusChip: 'Painel educacional em operação · Um produto TechMinds',
        eyebrow: 'IDEIAS ATRAVESSAM O TEMPO',
        headline: 'Amplie seu repertório. Ilumine suas leituras.',
        paragraph: 'Explore a história e a filosofia do pensamento político ocidental. Conecte pensadores, registre leituras e compreenda as tendências do seu percurso — sem reduzir ideias a uma única direção.',
        ctaExplore: 'Explorar o Lumen',
        ctaHow: 'Como funciona',
        cardCaption: 'Muitas perspectivas. Um novo ponto de partida.',
        cardLine: 'Da Antiguidade aos debates contemporâneos.'
      },
      stats: {
        items: [
          { value: '55', label: 'Pensadores' },
          { value: '7', label: 'Eras históricas' },
          { value: '158', label: 'Obras catalogadas' },
          { value: '9', label: 'Eixos analíticos' }
        ],
        disclaimer: 'Dimensões do catálogo, não números de usuários. Obras catalogadas não equivalem a downloads disponíveis.'
      },
      acervo: {
        eyebrow: 'O acervo',
        title: 'Ideias de outros tempos. Perguntas que continuam vivas.',
        chip: 'História, filosofia e política em perspectiva.',
        cards: [
          {
            name: 'Platão',
            era: 'Antiguidade',
            dates: 'c. 428–348 a.C.',
            workLabel: 'OBRA EM PERSPECTIVA',
            work: 'A República',
            workYear: 'c. 380 a.C.'
          },
          {
            name: 'Nicolau Maquiavel',
            era: 'Renascimento',
            dates: '1469–1527',
            workLabel: 'OBRA EM PERSPECTIVA',
            work: 'O Príncipe',
            workYear: '1532'
          },
          {
            name: 'Hannah Arendt',
            era: 'Século XX',
            dates: '1906–1975',
            workLabel: 'OBRA EM PERSPECTIVA',
            work: 'A condição humana',
            workYear: '1958'
          }
        ],
        ctaCatalog: 'Explore o catálogo completo',
        catalogPending: 'O destino do catálogo completo ainda não está definido.',
        disclaimer: 'Recorte editorial ilustrativo. Retratos são representações artísticas, não fotografias.'
      },
      howItWorks: {
        title: 'Uma leitura abre a próxima pergunta.',
        steps: [
          { title: 'Explore', description: 'Navegue o acervo por pensadores, eras e eixos analíticos.' },
          {
            title: 'Marque suas leituras',
            description: 'Um clique registra uma obra lida. Você pode desmarcá-la quando quiser.'
          },
          { title: 'Observe seu perfil', description: 'Acompanhe as tendências que emergem das suas leituras.' },
          {
            title: 'Diversifique',
            description: 'Com 5 obras lidas, e havendo lacunas, o Lumen sugere próximos passos.'
          }
        ]
      },
      busca: {
        eyebrow: 'Explore com contexto',
        title: 'Menos ruído. Mais caminhos pelo acervo.',
        blocks: [
          {
            title: 'Encontre além do nome',
            description: 'A busca funciona sem acentos e ignora maiúsculas e minúsculas.'
          },
          {
            title: 'Combine perspectivas',
            description: 'A opção Todos neutraliza um eixo. Re-selecionar o mesmo valor limpa aquele filtro.'
          },
          {
            title: 'Organize o que já leu',
            description: 'Ative Apenas lidos e acompanhe selos de escopo, como Antropologia.'
          }
        ],
        mockTitle: 'Explorar acervo — Demonstração ilustrativa',
        mockQuery: 'republica',
        mockResult: 'A República',
        mockAuthor: 'Platão — Antiguidade · Filosofia política',
        mockStatus: 'Lida · clique para desmarcar',
        mockRecord: 'Registro de exemplo · 10/10/2026, 14:32',
        mockDownload: 'Download: Indisponível · exemplo',
        mockProfileCta: 'Ver Perfil',
        mockDisclaimer: 'Catálogo não é sinônimo de biblioteca de downloads: só há download quando existe um link.'
      },
      perfil: {
        eyebrow: 'Seu perfil de leitura',
        title: 'Um mapa do seu percurso. Não um rótulo sobre você.',
        radarLabel: 'Radar político — tendências das suas leituras',
        radarTags: ['Filosofia política', 'História das ideias', 'Economia política', 'Antropologia', 'Ética'],
        axesTitle: 'Eixos metodológicos',
        axes: ['Lentes históricas', 'Conceitos-chave', 'Contexto das obras'],
        disclaimer: 'Uma ferramenta educacional para refletir e explorar. Não é teste psicológico nem definição de identidade política.',
        states: [
          {
            title: 'Sem leituras',
            description: 'O Ver Perfil ainda não aparece até haver ao menos uma obra lida.'
          },
          {
            title: 'Com ao menos uma obra lida',
            description: 'O Ver Perfil passa a aparecer. Sem tendência definida, o resultado é Equilibrado.'
          }
        ],
        visualNote: 'Exemplo visual · não são dados reais. Sem pontuações reais.'
      },
      diversificacao: {
        eyebrow: 'Amplie o horizonte',
        title: 'O próximo livro pode mudar a pergunta.',
        intro: 'A partir de 5 obras lidas, o Lumen identifica polos pouco explorados e sugere até 5 pensadores compatíveis com as lacunas.',
        counts: 'Até 3 lacunas · Até 5 pensadores sugeridos',
        rule: 'Diversificar, não repetir: a prioridade é a aderência às lacunas, depois as obras nunca lidas, depois a ordem alfabética — leituras já registradas não voltam.',
        cards: [
          { name: 'Aristóteles', work: 'Política', era: 'Antiguidade' },
          { name: 'John Locke', work: 'Segundo tratado sobre o governo', era: 'Século XVII' },
          { name: 'Mary Wollstonecraft', work: 'Reivindicação dos direitos da mulher', era: 'Século XVIII' }
        ],
        insufficient: 'Menos de 5 obras lidas: Dados insuficientes.'
      },
      excel: {
        eyebrow: 'Leve o mapa com você',
        title: 'Do acervo à sua mesa de estudo.',
        scopes: ['Acervo completo', 'Lidas', 'Pendentes'],
        tableTitle: 'Obras em perspectiva (exemplo)',
        rows: ['Platão — A República', 'Maquiavel — O Príncipe', 'Hannah Arendt — A condição humana'],
        footer: '158 obras no acervo completo',
        expl: 'Em cada escopo: três abas, percentuais e total geral. O resumo agrupa por pensador; o progresso, por era.'
      },
      privacidade: {
        eyebrow: 'Privacidade com clareza',
        title: 'Seu percurso fica perto de você.',
        highlight: 'Local, não na nuvem.',
        blocks: [
          {
            title: 'Leituras no seu dispositivo',
            description: 'O registro é local, com data e hora. Não há contas, backup em nuvem ou sincronização.'
          },
          {
            title: 'A busca não guarda o termo',
            description: 'O Lumen registra apenas o tamanho e o momento da busca.'
          },
          {
            title: 'Consentimento, se houver anúncios',
            description: 'Anúncios estão desativados. Se forem ativados, o consentimento é explícito, com recusa persistente.'
          }
        ],
        note: 'Fechar o navegador não apaga as leituras. Limpar os dados do navegador apaga — e você pode limpá-las também no Lumen.'
      },
      faq: {
        eyebrow: 'Antes de começar',
        title: 'Clareza também faz parte da exploração.',
        support: 'O que o Lumen faz — e o que ele não promete.',
        items: [
          {
            q: 'Todas as obras têm download?',
            a: 'Não. O Lumen é um catálogo educacional, não uma biblioteca com todos os livros gratuitos. A maioria das obras ainda pode estar indisponível. Só há download quando existe um link; caso contrário, aparece Indisponível. Novos links entram após publicação de uma atualização do catálogo.'
          },
          {
            q: 'O diagnóstico define minha posição política?',
            a: 'Não. Ele descreve tendências das obras marcadas como lidas, e não uma verdade definitiva sobre você. Não é teste psicológico. Sem leituras, há um estado inicial; sem tendência definida, o resultado é Equilibrado.'
          },
          {
            q: 'Quando aparecem as recomendações?',
            a: 'A partir de 5 obras lidas, quando há polos pouco explorados. Podem aparecer até 3 lacunas e até 5 pensadores sugeridos. Com menos de 5 obras, há dados insuficientes. Na barra lateral, também é preciso haver ao menos uma lacuna.'
          },
          {
            q: 'Vou perder meu histórico ao fechar o navegador?',
            a: 'Não. As leituras ficam salvas no dispositivo, com data e hora. Limpar os dados do navegador apaga esse histórico, e você pode limpá-lo no Lumen. Não existem contas próprias, backup em nuvem ou sincronização entre dispositivos.'
          },
          {
            q: 'Posso mudar o tema e o idioma?',
            a: 'Sim. Há temas claro e escuro, com preferência salva. O Lumen está em português do Brasil, inglês e espanhol. Para o idioma, usa primeiro sua preferência salva, depois o navegador e, se necessário, português brasileiro.'
          },
          {
            q: 'Posso compartilhar o Lumen?',
            a: 'Sim. O compartilhamento social inclui uma prévia rica, com apresentação do produto. Compartilhar o Lumen não substitui a exportação em Excel: para organizar seu estudo fora do painel, escolha acervo completo, lidas ou pendentes.'
          }
        ]
      },
      invite: {
        eyebrow: 'A curiosidade é o ponto de partida',
        title: 'Há mais de uma maneira de olhar o mundo.',
        text: 'Comece pelo acervo. Registre o que leu. Descubra o que ainda vale a pena perguntar.',
        ctaExplore: 'Explorar o Lumen',
        note: '55 pensadores. Muitas perspectivas. Um percurso que é seu.'
      }
    },
    // ── RN-025 — Landing FasTo (dossiê g1 §5–§5.5) ──────────────────
    fasto: {
      nav: {
        links: ['Como funciona', 'Recursos', 'Clube', 'FAQ'],
        cta: 'Conhecer o FasTo'
      },
      footer: {
        statement: 'Agendamento e gestão para estabelecimentos de estética e beleza.',
        tagline: 'Um projeto da TechMinds',
        companyStatement: 'Sistemas que evoluem. Negócios que crescem.',
        exploreTitle: 'Explore o FasTo',
        exploreLinks: ['Como funciona', 'Recursos', 'Clube de assinaturas', 'Perguntas frequentes'],
        techmindsTitle: 'TechMinds',
        knowCompany: 'Conheça a empresa',
        requestPresentation: 'Solicitar apresentação',
        copyright: '© 2026 FasTo · TechMinds.'
      },
      hero: {
        statusChip: 'Ativo · por TechMinds',
        eyebrow: 'AGENDAMENTO PARA ESTÉTICA E BELEZA',
        headline: 'Mais cuidado com seus clientes. Mais clareza na sua agenda.',
        paragraph: 'Com o FasTo, seus clientes agendam por um link e sua equipe acompanha serviços, profissionais e horários em um só lugar.',
        ctaPresentation: 'Solicitar apresentação',
        microcopy: 'Conheça a proposta e converse com a TechMinds sobre as necessidades do seu estabelecimento.',
        agendaTitle: 'Sua agenda — Quarta, 23 de setembro',
        agendaDays: ['21', '22', '23', '24', '25'],
        agendaSelectedDay: '23',
        appointments: [
          { name: 'Mariana Costa', service: 'Limpeza de pele', duration: '60 min', pro: 'Prof: Ana', status: 'Confirmado' },
          { name: 'Beatriz Lima', service: 'Design de sobrancelhas', duration: '30 min', pro: 'Prof: Luiza', status: 'Pendente' },
          { name: 'Camila Souza', service: 'Massagem facial', duration: '45 min', pro: 'Prof: Ana', status: 'Confirmado' }
        ],
        statusLabels: { confirmed: 'Confirmado', pending: 'Pendente' },
        agendaHint: 'Um link para agendar — Serviço → profissional → horário',
        agendaNote: 'Demonstração ilustrativa. Dados e interface de exemplo.',
        segments: ['Clínicas de estética', 'Salões de beleza', 'Estúdios de beleza', 'Profissionais de cuidados pessoais']
      },
      problemas: {
        eyebrow: 'MENOS INFORMAÇÃO DISPERSA',
        title: 'Uma rotina de beleza não precisa de uma agenda confusa.',
        cards: [
          {
            problem: 'Pedidos espalhados em conversas?',
            solution: 'Um link público reúne serviço, profissional e horário em um só lugar.'
          },
          {
            problem: 'Difícil saber quem está disponível?',
            solution: 'Disponibilidade por profissional, com bloqueio de períodos.'
          },
          {
            problem: 'Histórico difícil de encontrar?',
            solution: 'Cadastros e agendamentos organizados, com histórico ao alcance.'
          }
        ]
      },
      comoFunciona: {
        eyebrow: 'DO LINK AO ATENDIMENTO',
        title: 'Seu cliente escolhe. Sua equipe organiza.',
        steps: [
          {
            title: 'Prepare seu espaço',
            description: 'Cadastre serviços, preços, durações, profissionais e horários.'
          },
          {
            title: 'Compartilhe seu link',
            description: 'O pedido entra como pendente para a equipe decidir.'
          },
          {
            title: 'Sua equipe decide',
            description: 'Confirme ou recuse. A decisão avisa o cliente automaticamente por WhatsApp.'
          },
          {
            title: 'Acompanhe a rotina',
            description: 'Registros feitos pela equipe já entram confirmados.'
          }
        ]
      },
      recursos: {
        eyebrow: 'RECURSOS PARA O DIA A DIA',
        title: 'A operação do seu estabelecimento, conectada.',
        cards: [
          {
            title: 'Agenda por profissional',
            description: 'Cada profissional acompanha a própria agenda, com horários e status.'
          },
          {
            title: 'Catálogo de serviços',
            description: 'Serviços, durações e valores organizados no seu espaço.'
          },
          {
            title: 'Clientes e histórico',
            description: 'Nome, e-mail, celular e agendamentos anteriores ao alcance.'
          },
          {
            title: 'Acessos da equipe',
            description: 'O administrador acompanha todos os agendamentos. Cada profissional visualiza apenas os próprios.'
          },
          {
            title: 'Atualizações em tempo real',
            description: 'Confirmações e mudanças aparecem para a equipe conforme acontecem.'
          },
          {
            title: 'Seu espaço, seu link',
            description: 'O link público do estabelecimento é a porta de entrada dos clientes.'
          }
        ],
        accessBanner: 'Um acesso simples para o cliente — e-mail e senha OU conta Google.'
      },
      clube: {
        eyebrow: 'CLUBE DO SEU ESTABELECIMENTO',
        title: 'Uma nova forma de cuidar de quem volta.',
        rules: [
          {
            title: 'Sem cobrança adicional',
            description: 'Serviços cobertos pelos benefícios podem ser agendados sem cobrança adicional.'
          },
          {
            title: 'Tempo reservado = soma das durações',
            description: 'O tempo reservado é a soma da duração dos serviços do benefício.'
          },
          {
            title: 'Validade do link: 1–365 dias',
            description: 'O link do assinante fica válido pelo prazo escolhido e pode ser revogado.'
          }
        ],
        disclaimer: 'O clube é vendido pelo seu estabelecimento aos clientes finais. Não é a assinatura de uso do FasTo.',
        panelTitle: 'Assinatura ativa — Seu próximo cuidado',
        panelItems: ['Limpeza de pele · 60 min', 'Massagem facial · 30 min'],
        panelTotal: 'Tempo reservado: 90 min',
        panelNote: 'Sem cobrança adicional nos serviços cobertos. Exemplo ilustrativo. Não representa um plano comercial.'
      },
      whatsapp: {
        eyebrow: 'WHATSAPP NO FLUXO DA AGENDA',
        title: 'Informações importantes, perto do cliente.',
        triggers: [
          {
            title: 'Confirmação ou recusa',
            description: 'A decisão da equipe dispara um aviso automático para o cliente.'
          },
          {
            title: 'Lembretes antes do horário',
            description: 'Um dia e quatro horas antes, dentro do expediente. Fora dele, o envio é adiado.'
          },
          {
            title: 'Confirmação do cliente',
            description: 'Após duas horas pendente, o lembrete traz botões Confirmar/Cancelar. Após quatro horas sem confirmação, o agendamento é cancelado.'
          }
        ],
        chatHeader: 'Lembrete do FasTo',
        chatMessages: [
          'Olá, Mariana! Vamos confirmar seu horário?',
          'Limpeza de pele com Ana',
          'Quarta, 23/09, às 09:00'
        ],
        chatConfirm: 'Confirmar',
        chatCancel: 'Cancelar',
        providerNote: 'O envio depende do provedor externo Evolution API. Uma falha de envio não impede criar o agendamento.',
        scopeNote: 'A automação tem escopo claro: a conversa assistida por bot está no escopo do projeto; o fluxo completo ainda precisa ser detalhado. O FasTo não é apresentado como um bot de atendimento completo.'
      },
      assinaturas: {
        eyebrow: 'SEM CONFUNDIR AS ASSINATURAS',
        title: 'Uma plataforma para você. Um clube para seus clientes.',
        saas: {
          label: 'ESTABELECIMENTO → FASTO',
          title: 'Assinatura da plataforma',
          points: [
            'Cobrança via Mercado Pago.',
            'Limite de clientes cadastrados bloqueia novos cadastros.',
            'Vencida há mais de dez dias, o acesso entra em modo somente leitura.',
            'Planos e condições comerciais serão tratados na apresentação.'
          ]
        },
        club: {
          label: 'CLIENTE → ESTABELECIMENTO',
          title: 'Clube de assinaturas',
          points: [
            'O clube é vendido pelo estabelecimento aos seus clientes finais.',
            'Os benefícios dependem de uma assinatura ativa e dos serviços cobertos.'
          ]
        },
        distinction: 'São relações diferentes: o clube não substitui a assinatura SaaS.'
      },
      faq: {
        eyebrow: 'PARA CONHECER MELHOR',
        title: 'Perguntas frequentes',
        items: [
          {
            q: 'O FasTo já está disponível para começar a usar?',
            a: 'O FasTo é um projeto interno da TechMinds, implementado e em desenvolvimento ativo. Ainda há validações antes de produção. A apresentação é uma conversa sobre os recursos e as necessidades do estabelecimento, não uma ativação imediata.'
          },
          {
            q: 'Como o cliente agenda e como a equipe confirma?',
            a: 'Pelo link público, o cliente escolhe serviço, profissional e horário. O pedido entra pendente. A equipe confirma ou recusa e o cliente recebe um aviso por WhatsApp. Agendamentos registrados pela equipe já entram confirmados.'
          },
          {
            q: 'Cada profissional vê a agenda inteira?',
            a: 'Não. O administrador do estabelecimento visualiza todos os agendamentos e cada profissional vê apenas os próprios. Os níveis de acesso da equipe são fixos.'
          },
          {
            q: 'O clube de assinaturas é um plano do FasTo?',
            a: 'Não. O clube é vendido pelo estabelecimento aos seus clientes finais. A assinatura SaaS é o acesso do estabelecimento à plataforma. Os benefícios do clube dependem de uma assinatura ativa e dos serviços cobertos.'
          },
          {
            q: 'O que acontece se uma mensagem não for enviada?',
            a: 'O envio de WhatsApp depende da Evolution API e da disponibilidade do serviço externo. Uma falha de envio não impede a criação do agendamento. Os lembretes respeitam o expediente; fora dele, o envio é adiado.'
          },
          {
            q: 'Quais são os preços e as condições de contratação?',
            a: 'Não há planos comerciais, preços ou período gratuito aprovados para divulgação. Converse com a TechMinds para conhecer a proposta. A cobrança da assinatura SaaS depende do Mercado Pago; limites de clientes e situação da assinatura influenciam o acesso.'
          }
        ]
      },
      invite: {
        title: 'Vamos conversar sobre a agenda do seu estabelecimento?',
        text: 'Conheça o FasTo e compartilhe com a TechMinds como sua equipe trabalha hoje.',
        ctaPresentation: 'Solicitar apresentação',
        note: 'Apresentação do projeto, sem checkout ou ativação imediata.'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      segments: 'Segments',
      about: 'About',
      customers: 'Customers',
      contact: 'Contact',
      getStarted: 'Get started'
    },
    navB: {
      solutions: 'Catalog',
      howWeWork: 'How it works',
      pilares: 'Pillars',
      company: 'Company',
      contact: 'Contact'
    },
    heroB: {
      eyebrow: 'Technology for growing businesses',
      headline: 'Less scattered routine. More control to grow.',
      supportLine1: 'Ready-made systems, constantly evolving and shaped to your operation — with maintenance and support included.',
      supportLine2: 'You talk to us, and the technology keeps up with your business growth.',
      ctaWhatsApp: 'Chat on WhatsApp',
      microcopy: 'Scope, support and conditions agreed with you.',
      hook: 'See which solution makes sense for your routine.',
      imageAlt: 'Illustration of a nighttime orbital hub connecting TechMinds systems'
    },
    problemB: {
      title: 'The problem of the scattered routine',
      cards: [
        {
          title: 'Orders scattered across WhatsApp',
          description: 'Simultaneous chats, manual notes and important information lost in the middle of messages.'
        },
        {
          title: 'A schedule that is hard to follow',
          description: 'Appointments arranged by message, with reschedules and conflicts slipping out of control.'
        },
        {
          title: 'Data separated when deciding',
          description: 'Each piece of information in a different place — and no complete view of the business when making decisions.'
        }
      ],
      hook: 'The next step is bringing what matters together. Find your path in the catalog.'
    },
    catalogB: {
      eyebrow: 'Find your path',
      title: 'Which part of your routine could be clearer?',
      activeStatement: 'Five products in the catalog. Groom, FasTo and Lumen are active.',
      developingStatement: 'VibeCut and Escola Conectada are under development.',
      carouselTitle: 'Explore the solutions',
      carouselSubtitle: 'Five products, organized in a more compact visual flow that is easier to browse.',
      carouselPrev: 'Previous card',
      carouselNext: 'Next card',
      paginationLabel: 'Go to card',
      badgeActive: '● Active',
      badgeDeveloping: 'In development',
      ctaLabels: {
        'conhecer-groom': 'Discover Groom',
        'conhecer-fasto': 'Discover FasTo',
        'conhecer-lumen': 'Discover Lumen',
        'conhecer-vibecut': 'Discover VibeCut',
        'conhecer-escola-conectada': 'Discover Escola Conectada'
      },
      products: {
        groom: {
          segmento: 'For barbershops',
          headline: 'Your schedule and your finances moving in the same direction.',
          beneficios: [
            'Booking via WhatsApp',
            'Financial control and waiting list',
            'Reports to keep track of your operation'
          ]
        },
        fasto: {
          segmento: 'For beauty and aesthetics',
          headline: 'Take care of your clients. Organize what comes next.',
          beneficios: [
            'Online and manual booking, with a service catalog',
            'Membership club',
            'Reminders and charges via WhatsApp'
          ]
        },
        lumen: {
          segmento: 'For education and philosophy',
          headline: 'More context to explore ideas.',
          beneficios: [
            'Thinkers and works in perspective',
            'Exploration across 9 analytical axes',
            'A tool for education and philosophy'
          ]
        },
        vibecut: {
          segmento: 'For barbershops and hair salons',
          headline: 'A personal reference before choosing the haircut.',
          beneficios: [
            'Personalized haircut suggestions',
            'Possibilities for barbershops and salons'
          ]
        },
        'escola-conectada': {
          segmento: 'For educational institutions',
          headline: 'A shared view of school life.',
          beneficios: [
            'Enrollments, attendance and grades',
            'Communication and reports',
            'Customizable per institution'
          ]
        }
      },
      custom: {
        eyebrow: 'Does your business run differently?',
        title: 'The system can start from your operation.',
        description: 'For needs outside the catalog, we develop custom solutions, with scope and customization agreed upon.',
        ctaWhatsApp: 'Chat on WhatsApp',
        microcopy: 'Tell us about your routine in the same sales conversation.'
      },
      hook: 'Product or custom-built: see how we go from choosing to operating.'
    },
    howItWorksB: {
      eyebrow: 'How we work',
      title: 'What happens after the first conversation?',
      support: 'Three simple steps, with clear decisions at each stage.',
      steps: [
        {
          number: '01',
          title: 'Choose',
          description: 'Tell us about your routine and identify an active product or a custom project.'
        },
        {
          number: '02',
          title: 'Hire',
          description: 'Align scope, support, customization and conditions before starting.'
        },
        {
          number: '03',
          title: 'Operate',
          description: 'Start the operation according to availability and what was agreed.'
        }
      ],
      stepChips: ['Groom', 'FasTo', 'Lumen'],
      stepChecklist: ['Scope defined', 'Support agreed', 'Conditions aligned'],
      stepPanelTitle: 'Your routine, connected',
      stepPanelRows: ['Booking confirmed', 'Cash closed', 'Report sent'],
      note: 'VibeCut and Escola Conectada remain in development. The conversation does not imply immediate access.',
      hook: 'And after delivery? Continuity also needs to be agreed.'
    },
    pillarsB: {
      eyebrow: 'Continuity with clarity',
      title: 'Your system does not end at delivery.',
      support: 'Maintenance, evolution and performance guide the delivery. The coverage of each pillar is defined in the contract.',
      items: [
        {
          title: 'Maintenance',
          description: 'Fixes, stability and security as per contract.'
        },
        {
          title: 'Evolution',
          description: 'Improvements and new versions with agreed scope and conditions.'
        },
        {
          title: 'Performance',
          description: 'Structure and performance defined for each solution, as per contract.'
        }
      ],
      hook: 'Want to evaluate this path for your business? Start with a direct conversation.'
    },
    socialProofB: {
      eyebrow: 'Client experiences',
      title: 'Results deserve context. And evidence.',
      support: 'Reserved spaces for real cases and testimonials. Publication after client validation and authorization.',
      pendingTag: 'CONTENT PENDING',
      resultLabel: 'Verified result',
      cards: [
        {
          segment: 'Barbershops',
          testimonial: '[Approved testimonial to be inserted]',
          result: '[Result and context to be validated]',
          logo: '[Logo]',
          name: '[Name]',
          roleCompany: '[Role] · [Company]'
        },
        {
          segment: 'Beauty and aesthetics',
          testimonial: '[Approved testimonial to be inserted]',
          result: '[Result and context to be validated]',
          logo: '[Logo]',
          name: '[Name]',
          roleCompany: '[Role] · [Company]'
        }
      ],
      note: 'Testimonials, logos and results not yet confirmed. No commercial numbers are presented as proof.',
      hook: 'While the cases are being prepared, you can get to know the proposal directly.'
    },
    companyTrust: {
      eyebrow: 'Company and trust',
      title: 'Truthful information and direct channels.',
      support: "TechMinds does not use invented testimonials, made-up numbers or sales pressure. Here you'll find the exact business identification and the available contact channels.",
      statement: 'Systems that evolve. Businesses that grow.',
      commercial: {
        title: 'Talk to our commercial team',
        description: 'For new projects, partnerships and sales.',
        ctaWhatsApp: 'Chat on WhatsApp'
      },
      areas: {
        title: 'Contacts by area',
        description: 'Choose the right channel for your need',
        careers: 'Careers · professional opportunities',
        support: 'Support · help with our products',
        compliance: 'Compliance · privacy and conformity'
      },
      copyHint: 'Click to copy',
      copied: 'Copied!'
    },
    footerB: {
      statement: 'Systems that evolve. Businesses that grow.',
      nav: {
        systemsTitle: 'Systems',
        companyTitle: 'Company',
        legalTitle: 'Legal',
        about: 'About us',
        contact: 'Contact',
        terms: 'Terms of use',
        privacy: 'Privacy'
      },
      legalName: 'Legal Name: 69.184.592 MICHEL LEMOS BITTENCOURT',
      cnpj: 'CNPJ: 69.184.592/0001-45 | Guaíba - RS',
      copyright: '© 2026 TechMinds. All rights reserved.'
    },
    legal: {
      termsTitle: 'Terms of Use',
      termsSubtitle: 'Read the terms of use to understand your rights and responsibilities when using our services.',
      privacyTitle: 'Privacy Policy',
      privacySubtitle: 'Learn how we collect, use, and protect your personal data.',
      selectProduct: 'Select a product',
      inPreparation: 'In preparation',
      comingSoon: 'Coming soon',
      onThisPage: 'On this page',
      backToTop: 'Back to top',
      seeAlso: 'See also',
      crossLinkToPrivacy: 'Go to Privacy Policy',
      crossLinkToTerms: 'Go to Terms of Use'
    },
    // ── RN-025 — VibeCut landing (dossier g1 §2–§3) ─────────────────
    vibecut: {
      nav: {
        links: ['How it works', 'Styles', 'Privacy', 'FAQ'],
        cta: 'About the tests'
      },
      footer: {
        statement: 'AI-powered hair and beard recommendations. A new perspective for your next look.',
        tagline: 'A TechMinds product',
        exploreTitle: 'Explore',
        exploreLinks: ['How it works', 'Styles', 'About the tests', 'FAQ'],
        documentsTitle: 'Documents',
        terms: 'Terms of Use',
        privacy: 'Privacy Policy',
        copyright: '© 2026 TechMinds. All rights reserved.'
      },
      hero: {
        eyebrow: 'AI FOR YOUR NEXT LOOK',
        headline: 'Your next look starts with you.',
        highlight: 'Explore before you change.',
        paragraph: 'Discover haircuts and beard styles from your own photo. The AI analyzes your features, suggests possibilities and creates a preview to inspire your choice.',
        ctaHow: 'See how it works',
        ctaStyles: 'Explore the styles',
        status: 'Android in internal testing · v1.0.6',
        statusNote: 'Not yet published in stores.',
        miniProps: ['Analysis of your features', 'Three ways to explore', 'No login or sign-up'],
        previewTitle: 'Your style preview',
        refLabel: 'REFERENCE',
        previewLabel: 'ILLUSTRATIVE PREVIEW',
        previewDisclaimer: 'Illustrative comparison · not a real result',
        modeBadge: 'HAIR + BEARD',
        textureTitle: 'Texture & definition',
        textureText: 'Textured top with a low fade and a shaped short beard. A direction to talk through with your professional.'
      },
      benefits: {
        eyebrow: 'MORE REPERTOIRE, LESS GUESSWORK',
        title: 'It is not about following a pattern. It is about finding possibilities.',
        cards: [
          {
            title: 'Start from your photo',
            description: 'The proposal starts from your features — not from a pattern.'
          },
          {
            title: 'Discover new directions',
            description: 'See haircut and beard possibilities matched to your moment.'
          },
          {
            title: 'Visualize the idea',
            description: 'Keep the direction that fits you best to talk through with your professional.'
          }
        ]
      },
      howItWorks: {
        eyebrow: 'HOW IT WORKS',
        title: 'From your photo to a new possibility.',
        support: 'A guided path, with no login, e-mail or sign-up.',
        steps: [
          {
            title: 'Accept the documents',
            description: 'Read and accept the Terms of Use and the Privacy Policy separately.'
          },
          {
            title: 'Send your photo',
            description: 'A sharp image, with your face visible, kicks off the exploration.'
          },
          {
            title: 'See the analysis',
            description: 'The AI interprets your features without forcing them into a pattern.'
          },
          {
            title: 'Explore the suggestions',
            description: 'Style directions organized by exploration mode.'
          },
          {
            title: 'Generate your preview',
            description: 'Receive an illustrative preview to inspire your choice.'
          }
        ],
        note: 'JPEG, PNG or WEBP, up to 10 MB. On the web experience, sending works by upload; the camera is exclusive to the installed Android app. Analysis and preview require internet.'
      },
      modes: {
        eyebrow: 'EXPLORE THE STYLES',
        title: 'One change at a time. Or a new combination.',
        cards: [
          { badge: 'HAIR ONLY', line: 'Change the cut.', example: 'Textured crop' },
          { badge: 'BEARD ONLY', line: 'Redefine the contours.', example: 'Shaped short beard' },
          { badge: 'HAIR + BEARD', line: 'Think of the whole picture.', example: 'Quiff + short beard' }
        ],
        disclaimer: 'Illustrative editorial portraits and suggestions. Not real personalized recommendations, user results, or a guarantee of physical outcome.'
      },
      analysis: {
        eyebrow: 'A LOOK AT YOUR FEATURES',
        title: 'Your photo is the starting point. Not a pattern to follow.',
        factors: [
          {
            title: 'Face shape',
            description: 'Contours and proportions guide the compatible cuts.'
          },
          {
            title: 'Hair and beard',
            description: 'Volume, length and shaping bound the possible directions.'
          },
          {
            title: 'Skin texture',
            description: 'Waves and density influence the finishing of the style.'
          }
        ],
        panelTitle: 'Photo reading · EXAMPLE',
        attributes: [
          { label: 'Hair', value: 'Wavy' },
          { label: 'Beard', value: 'Short' },
          { label: 'Face', value: 'Oval' },
          { label: 'Skin', value: 'Natural texture' }
        ],
        disclaimer: 'Fictional data to demonstrate the interface. Not a real analysis of the person portrayed.'
      },
      suggestions: {
        eyebrow: 'FROM STYLE TO PREVIEW',
        title: 'An idea takes shape when you can picture it.',
        mockBadge: 'EXAMPLE · HAIR + BEARD',
        selectedTitle: 'Quiff + short beard',
        selectedDescription: 'Volume on top and defined contours.',
        selectedTag: 'Selected to demonstrate the preview',
        altTitle: 'Fade + natural beard',
        altDescription: 'Soft sides and discreet volume on the face.',
        noHistory: 'Analyses and previews are generated on demand. There is no history of previous looks.',
        previewDisclaimer: 'The preview is illustrative and does not guarantee the physical result. Consult a professional before changing.'
      },
      privacy: {
        eyebrow: 'PRIVACY WITH CLARITY',
        title: 'No sign-up. With transparency about the data.',
        deviceCode: 'An anonymous code identifies the device — no name, e-mail or account.',
        gemini: 'The photo is processed by the external service Google Gemini, subject to its own availability and policies.',
        consentRecord: 'Acceptance records the UTC date and time, the version of the documents, the platform, the IP when available and the browser information.',
        panelTitle: 'Before sending your photo',
        termsDoc: 'Terms of Use',
        privacyDoc: 'Privacy Policy',
        readDoc: 'Read document',
        instruction: 'Accept both documents to continue',
        panelNote: 'Visual example of the acceptance step. This landing page does not receive photos and does not record consent.',
        cards: [
          {
            title: 'Updated documents',
            description: 'A new version of the documents requires new acceptance on the next opening.'
          },
          {
            title: 'If the connection fails',
            description: 'The acceptance record stays queued for automatic re-sending.'
          },
          {
            title: 'Device data',
            description: 'Deleting device data requires accepting the documents again.'
          }
        ]
      },
      availability: {
        eyebrow: 'IN DEVELOPMENT',
        title: 'A new experience. Still in internal testing.',
        cardTitle: 'VibeCut for Android',
        cardTag: 'INTERNAL TESTING · V1.0.6',
        rows: [
          { label: 'Stores', value: 'Not yet published' },
          { label: 'Public access', value: 'Not available' },
          { label: 'Launch', value: 'No date announced' }
        ],
        note: 'The upload demonstration on the web describes how it works; it does not indicate public availability of the web experience.'
      },
      faq: {
        eyebrow: 'BEFORE YOU START',
        title: 'What is worth knowing about VibeCut.',
        support: 'Real possibilities to explore. Limits explained without fine print.',
        items: [
          {
            q: 'Can I download or use VibeCut already?',
            a: 'There is no public access yet. Android is in internal testing on version 1.0.6 and has not been published in stores. There is no announced launch date.'
          },
          {
            q: 'Do I need to create an account?',
            a: 'No. Usage requires no login, e-mail or sign-up. The device receives an anonymous code. The photo is processed and acceptances have their own records; having no account does not mean no data processing.'
          },
          {
            q: 'Which photo can I send?',
            a: 'JPEG, PNG or WEBP up to 10 MB. Prefer a sharp image with the face visible. On the web experience, sending works by upload. The camera works only in the installed Android app.'
          },
          {
            q: 'Will the result match the preview?',
            a: 'There is no such guarantee. The preview is illustrative and AI quality may vary. Texture, length and the work of the professional influence the physical result. Use it as a reference and consult a professional.'
          },
          {
            q: 'Does it work offline? Are my looks saved?',
            a: 'Analyses and previews require internet and the external service Google Gemini, subject to availability. They are generated on demand, with no history of previous looks. If the acceptance record fails, it stays queued for automatic re-sending.'
          },
          {
            q: 'When do I need to accept the documents again?',
            a: 'Terms of Use and Privacy Policy have separate acceptances, per version. An update requires new acceptance on the next opening. Deleting device data also requires accepting again.'
          }
        ]
      },
      invite: {
        eyebrow: 'YOUR STYLE, IN PERSPECTIVE',
        title: 'Before changing your look, expand your possibilities.',
        text: 'Get to know the VibeCut proposal and explore the hair and beard ideas on this page.',
        ctaStyles: 'Explore the styles',
        ctaTests: 'About the tests'
      }
    },
    // ── RN-025 — Lumen landing (dossier g1 §4–§4.5) ─────────────────
    lumen: {
      nav: {
        links: ['The collection', 'How it works', 'Your profile', 'FAQ'],
        cta: 'Explore the Lumen',
        ctaPending: 'Access to the Lumen panel has not been published yet. The product destination is still being defined by TechMinds.'
      },
      footer: {
        statement: 'Multidimensional Map of Political Thought. Historical and philosophical exploration, open to different perspectives.',
        tagline: 'A product of the TechMinds portfolio',
        exploreTitle: 'Explore the Lumen',
        exploreLinks: ['The collection', 'How it works', 'Your profile', 'Frequently asked questions'],
        productFeaturesTitle: 'Your way',
        productFeatures: ['Portuguese (BR) · Product language', 'Light / Dark · Product theme'],
        copyright: '© 2026 Lumen · TechMinds.'
      },
      hero: {
        statusChip: 'Educational panel in operation · A TechMinds product',
        eyebrow: 'IDEAS CROSS THROUGH TIME',
        headline: 'Broaden your repertoire. Illuminate your readings.',
        paragraph: 'Explore the history and philosophy of Western political thought. Connect thinkers, log your readings and understand the trends of your path — without reducing ideas to a single direction.',
        ctaExplore: 'Explore the Lumen',
        ctaHow: 'How it works',
        cardCaption: 'Many perspectives. A new starting point.',
        cardLine: 'From Antiquity to contemporary debates.'
      },
      stats: {
        items: [
          { value: '55', label: 'Thinkers' },
          { value: '7', label: 'Historical eras' },
          { value: '158', label: 'Works cataloged' },
          { value: '9', label: 'Analytical axes' }
        ],
        disclaimer: 'Catalog dimensions, not user numbers. Works cataloged do not equal downloads available.'
      },
      acervo: {
        eyebrow: 'The collection',
        title: 'Ideas from other times. Questions still alive.',
        chip: 'History, philosophy and politics in perspective.',
        cards: [
          {
            name: 'Plato',
            era: 'Antiquity',
            dates: 'c. 428–348 BC',
            workLabel: 'WORK IN PERSPECTIVE',
            work: 'The Republic',
            workYear: 'c. 380 BC'
          },
          {
            name: 'Niccolò Machiavelli',
            era: 'Renaissance',
            dates: '1469–1527',
            workLabel: 'WORK IN PERSPECTIVE',
            work: 'The Prince',
            workYear: '1532'
          },
          {
            name: 'Hannah Arendt',
            era: '20th century',
            dates: '1906–1975',
            workLabel: 'WORK IN PERSPECTIVE',
            work: 'The Human Condition',
            workYear: '1958'
          }
        ],
        ctaCatalog: 'Explore the complete catalog',
        catalogPending: 'The destination of the complete catalog is still being defined.',
        disclaimer: 'Illustrative editorial selection. Portraits are artistic representations, not photographs.'
      },
      howItWorks: {
        title: 'One reading opens the next question.',
        steps: [
          { title: 'Explore', description: 'Browse the collection by thinkers, eras and analytical axes.' },
          {
            title: 'Mark your readings',
            description: 'One click records a work as read. You can unmark it whenever you like.'
          },
          { title: 'Observe your profile', description: 'Follow the trends that emerge from your readings.' },
          {
            title: 'Diversify',
            description: 'With 5 works read, and with gaps, the Lumen suggests next steps.'
          }
        ]
      },
      busca: {
        eyebrow: 'Explore with context',
        title: 'Less noise. More paths through the collection.',
        blocks: [
          {
            title: 'Find beyond the name',
            description: 'Search works without accents and ignores upper and lower case.'
          },
          {
            title: 'Combine perspectives',
            description: 'The All option neutralizes an axis. Re-selecting the same value clears that filter.'
          },
          {
            title: 'Organize what you have read',
            description: 'Turn on Only read and follow scope badges, such as Anthropology.'
          }
        ],
        mockTitle: 'Explore collection — Illustrative demonstration',
        mockQuery: 'republica',
        mockResult: 'The Republic',
        mockAuthor: 'Plato — Antiquity · Political philosophy',
        mockStatus: 'Read · click to unmark',
        mockRecord: 'Example record · 10/10/2026, 14:32',
        mockDownload: 'Download: Unavailable · example',
        mockProfileCta: 'View Profile',
        mockDisclaimer: 'A catalog is not a synonym for a download library: downloads exist only when there is a link.'
      },
      perfil: {
        eyebrow: 'Your reading profile',
        title: 'A map of your path. Not a label about you.',
        radarLabel: 'Political radar — trends of your readings',
        radarTags: ['Political philosophy', 'History of ideas', 'Political economy', 'Anthropology', 'Ethics'],
        axesTitle: 'Methodological axes',
        axes: ['Historical lenses', 'Key concepts', 'Context of the works'],
        disclaimer: 'An educational tool for reflection and exploration. Not a psychological test nor a definition of political identity.',
        states: [
          {
            title: 'Without readings',
            description: 'View Profile does not appear yet until there is at least one work read.'
          },
          {
            title: 'With at least one work read',
            description: 'View Profile starts to appear. Without a defined trend, the result is Balanced.'
          }
        ],
        visualNote: 'Visual example · not real data. No real scores.'
      },
      diversificacao: {
        eyebrow: 'Broaden the horizon',
        title: 'The next book can change the question.',
        intro: 'From 5 works read, the Lumen identifies hardly explored poles and suggests up to 5 thinkers compatible with the gaps.',
        counts: 'Up to 3 gaps · Up to 5 suggested thinkers',
        rule: 'Diversify, do not repeat: priority goes to alignment with the gaps, then to works never read, then to alphabetical order — already logged readings do not come back.',
        cards: [
          { name: 'Aristotle', work: 'Politics', era: 'Antiquity' },
          { name: 'John Locke', work: 'Second Treatise of Government', era: '17th century' },
          { name: 'Mary Wollstonecraft', work: 'A Vindication of the Rights of Woman', era: '18th century' }
        ],
        insufficient: 'Fewer than 5 works read: Insufficient data.'
      },
      excel: {
        eyebrow: 'Take your map with you',
        title: 'From the collection to your study desk.',
        scopes: ['Complete collection', 'Read', 'Pending'],
        tableTitle: 'Works in perspective (example)',
        rows: ['Plato — The Republic', 'Machiavelli — The Prince', 'Hannah Arendt — The Human Condition'],
        footer: '158 works in the complete collection',
        expl: 'In each scope: three tabs, percentages and a grand total. The summary groups by thinker; the progress, by era.'
      },
      privacidade: {
        eyebrow: 'Privacy with clarity',
        title: 'Your path stays close to you.',
        highlight: 'Local, not in the cloud.',
        blocks: [
          {
            title: 'Readings on your device',
            description: 'The record is local, with date and time. There are no accounts, cloud backup or synchronization.'
          },
          {
            title: 'The search does not keep the term',
            description: 'The Lumen records only the size and the moment of the search.'
          },
          {
            title: 'Consent, if there are ads',
            description: 'Ads are disabled. If enabled, consent is explicit, with persistent refusal.'
          }
        ],
        note: 'Closing the browser does not erase the readings. Clearing browser data does — and you can also clear them in the Lumen.'
      },
      faq: {
        eyebrow: 'Before you start',
        title: 'Clarity is also part of the exploration.',
        support: 'What the Lumen does — and what it does not promise.',
        items: [
          {
            q: 'Do all works have a download?',
            a: 'No. The Lumen is an educational catalog, not a library with all books for free. Most works may still be unavailable. A download exists only when there is a link; otherwise, Unavailable appears. New links arrive after publication of a catalog update.'
          },
          {
            q: 'Does the diagnostic define my political position?',
            a: 'No. It describes trends of the works marked as read, not a definitive truth about you. It is not a psychological test. Without readings, there is an initial state; without a defined trend, the result is Balanced.'
          },
          {
            q: 'When do recommendations appear?',
            a: 'From 5 works read, when there are hardly explored poles. Up to 3 gaps and up to 5 suggested thinkers may appear. With fewer than 5 works, data is insufficient. In the sidebar, there must also be at least one gap.'
          },
          {
            q: 'Will I lose my history when closing the browser?',
            a: 'No. Readings stay saved on the device, with date and time. Clearing browser data erases this history, and you can clear it in the Lumen. There are no accounts, cloud backup or synchronization between devices.'
          },
          {
            q: 'Can I change the theme and the language?',
            a: 'Yes. There are light and dark themes, with a saved preference. The Lumen is available in Brazilian Portuguese, English and Spanish. For the language, it uses your saved preference first, then the browser and, if needed, Brazilian Portuguese.'
          },
          {
            q: 'Can I share the Lumen?',
            a: 'Yes. Social sharing includes a rich preview with the product presentation. Sharing the Lumen does not replace the Excel export: to organize your study outside the panel, choose the complete collection, read or pending.'
          }
        ]
      },
      invite: {
        eyebrow: 'Curiosity is the starting point',
        title: 'There is more than one way of looking at the world.',
        text: 'Start with the collection. Log what you read. Discover what is still worth asking.',
        ctaExplore: 'Explore the Lumen',
        note: '55 thinkers. Many perspectives. A path that is yours.'
      }
    },
    // ── RN-025 — FasTo landing (dossier g1 §5–§5.5) ─────────────────
    fasto: {
      nav: {
        links: ['How it works', 'Features', 'Club', 'FAQ'],
        cta: 'Get to know FasTo'
      },
      footer: {
        statement: 'Scheduling and management for beauty and aesthetics establishments.',
        tagline: 'A TechMinds project',
        companyStatement: 'Systems that evolve. Businesses that grow.',
        exploreTitle: 'Explore FasTo',
        exploreLinks: ['How it works', 'Features', 'Membership club', 'Frequently asked questions'],
        techmindsTitle: 'TechMinds',
        knowCompany: 'Get to know the company',
        requestPresentation: 'Request a presentation',
        copyright: '© 2026 FasTo · TechMinds.'
      },
      hero: {
        statusChip: 'Active · by TechMinds',
        eyebrow: 'SCHEDULING FOR BEAUTY AND AESTHETICS',
        headline: 'More care for your clients. More clarity in your schedule.',
        paragraph: 'With FasTo, your clients book through a link and your team tracks services, professionals and hours in one place.',
        ctaPresentation: 'Request a presentation',
        microcopy: 'Get to know the proposal and talk to TechMinds about the needs of your establishment.',
        agendaTitle: 'Your schedule — Wednesday, September 23',
        agendaDays: ['21', '22', '23', '24', '25'],
        agendaSelectedDay: '23',
        appointments: [
          { name: 'Mariana Costa', service: 'Facial cleansing', duration: '60 min', pro: 'Pro: Ana', status: 'Confirmed' },
          { name: 'Beatriz Lima', service: 'Eyebrow design', duration: '30 min', pro: 'Pro: Luiza', status: 'Pending' },
          { name: 'Camila Souza', service: 'Facial massage', duration: '45 min', pro: 'Pro: Ana', status: 'Confirmed' }
        ],
        statusLabels: { confirmed: 'Confirmed', pending: 'Pending' },
        agendaHint: 'One link to book — Service → professional → time',
        agendaNote: 'Illustrative demonstration. Sample data and interface.',
        segments: ['Aesthetic clinics', 'Beauty salons', 'Beauty studios', 'Personal care professionals']
      },
      problemas: {
        eyebrow: 'LESS SCATTERED INFORMATION',
        title: 'A beauty routine does not need a confusing schedule.',
        cards: [
          {
            problem: 'Requests scattered across chats?',
            solution: 'A public link brings service, professional and time together in one place.'
          },
          {
            problem: 'Hard to know who is available?',
            solution: 'Availability per professional, with blocked periods.'
          },
          {
            problem: 'History hard to find?',
            solution: 'Registrations and appointments organized, with history within reach.'
          }
        ]
      },
      comoFunciona: {
        eyebrow: 'FROM LINK TO SERVICE',
        title: 'Your client chooses. Your team organizes.',
        steps: [
          {
            title: 'Prepare your space',
            description: 'Register services, prices, durations, professionals and hours.'
          },
          {
            title: 'Share your link',
            description: 'The request comes in as pending for the team to decide.'
          },
          {
            title: 'Your team decides',
            description: 'Confirm or decline. The decision notifies the client automatically via WhatsApp.'
          },
          {
            title: 'Track the routine',
            description: 'Records made by the team already come in confirmed.'
          }
        ]
      },
      recursos: {
        eyebrow: 'FEATURES FOR THE DAY TO DAY',
        title: 'The operation of your establishment, connected.',
        cards: [
          {
            title: 'Schedule per professional',
            description: 'Each professional follows their own schedule, with hours and status.'
          },
          {
            title: 'Service catalog',
            description: 'Services, durations and values organized in your space.'
          },
          {
            title: 'Clients and history',
            description: 'Name, e-mail, mobile and previous appointments within reach.'
          },
          {
            title: 'Team access levels',
            description: 'The administrator tracks all appointments. Each professional sees only their own.'
          },
          {
            title: 'Real-time updates',
            description: 'Confirmations and changes appear to the team as they happen.'
          },
          {
            title: 'Your space, your link',
            description: 'The public link of the establishment is the gateway for clients.'
          }
        ],
        accessBanner: 'A simple access for the client — e-mail and password OR Google account.'
      },
      clube: {
        eyebrow: 'YOUR ESTABLISHMENT CLUB',
        title: 'A new way to care for those who return.',
        rules: [
          {
            title: 'No extra charge',
            description: 'Services covered by the benefits can be booked with no extra charge.'
          },
          {
            title: 'Reserved time = sum of durations',
            description: 'The reserved time is the sum of the durations of the benefit services.'
          },
          {
            title: 'Link validity: 1–365 days',
            description: 'The subscriber link stays valid for the chosen period and can be revoked.'
          }
        ],
        disclaimer: 'The club is sold by your establishment to its end clients. It is not the FasTo usage subscription.',
        panelTitle: 'Active subscription — Your next care',
        panelItems: ['Facial cleansing · 60 min', 'Facial massage · 30 min'],
        panelTotal: 'Reserved time: 90 min',
        panelNote: 'No extra charge for covered services. Illustrative example. Not a commercial plan.'
      },
      whatsapp: {
        eyebrow: 'WHATSAPP IN THE SCHEDULE FLOW',
        title: 'Important information, close to the client.',
        triggers: [
          {
            title: 'Confirmation or decline',
            description: 'The team decision triggers an automatic notice to the client.'
          },
          {
            title: 'Reminders before the time',
            description: 'One day and four hours before, within business hours. Outside them, sending is postponed.'
          },
          {
            title: 'Client confirmation',
            description: 'After two hours pending, the reminder carries Confirm/Cancel buttons. After four hours without confirmation, the appointment is canceled.'
          }
        ],
        chatHeader: 'FasTo reminder',
        chatMessages: [
          'Hello, Mariana! Shall we confirm your time?',
          'Facial cleansing with Ana',
          'Wednesday, 09/23, at 09:00'
        ],
        chatConfirm: 'Confirm',
        chatCancel: 'Cancel',
        providerNote: 'Sending depends on the external provider Evolution API. A sending failure does not prevent creating the appointment.',
        scopeNote: 'The automation has a clear scope: the bot-assisted conversation is in the project scope; the full flow still needs to be detailed. FasTo is not presented as a full customer-service bot.'
      },
      assinaturas: {
        eyebrow: 'WITHOUT CONFUSING THE SUBSCRIPTIONS',
        title: 'A platform for you. A club for your clients.',
        saas: {
          label: 'ESTABLISHMENT → FASTO',
          title: 'Platform subscription',
          points: [
            'Charged via Mercado Pago.',
            'Registered client limit blocks new registrations.',
            'Overdue for more than ten days, access goes into read-only mode.',
            'Commercial plans and conditions will be discussed in the presentation.'
          ]
        },
        club: {
          label: 'CLIENT → ESTABLISHMENT',
          title: 'Membership club',
          points: [
            'The club is sold by the establishment to its end clients.',
            'The benefits depend on an active subscription and the covered services.'
          ]
        },
        distinction: 'They are different relationships: the club does not replace the SaaS subscription.'
      },
      faq: {
        eyebrow: 'TO GET TO KNOW IT BETTER',
        title: 'Frequently asked questions',
        items: [
          {
            q: 'Is FasTo already available to start using?',
            a: 'FasTo is an internal TechMinds project, implemented and in active development. Validations are still pending before production. The presentation is a conversation about features and the needs of the establishment, not an immediate activation.'
          },
          {
            q: 'How does the client book and how does the team confirm?',
            a: 'Through the public link, the client chooses service, professional and time. The request comes in pending. The team confirms or declines and the client receives a WhatsApp notice. Appointments registered by the team already come in confirmed.'
          },
          {
            q: 'Does every professional see the whole schedule?',
            a: 'No. The establishment administrator sees all appointments and each professional sees only their own. Team access levels are fixed.'
          },
          {
            q: 'Is the membership club a FasTo plan?',
            a: 'No. The club is sold by the establishment to its end clients. The SaaS subscription is the access of the establishment to the platform. Club benefits depend on an active subscription and the covered services.'
          },
          {
            q: 'What happens if a message fails to send?',
            a: 'WhatsApp sending depends on the Evolution API and the availability of the external service. A sending failure does not prevent creating the appointment. Reminders respect business hours; outside them, sending is postponed.'
          },
          {
            q: 'What are the prices and contracting conditions?',
            a: 'No commercial plans, prices or free period are approved for publication. Talk to TechMinds to get to know the proposal. SaaS subscription billing depends on Mercado Pago; client limits and subscription status influence access.'
          }
        ]
      },
      invite: {
        title: 'Shall we talk about the schedule of your establishment?',
        text: 'Get to know FasTo and share with TechMinds how your team works today.',
        ctaPresentation: 'Request a presentation',
        note: 'Project presentation, with no checkout or immediate activation.'
      }
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      products: 'Productos',
      segments: 'Segmentos',
      about: 'Acerca',
      customers: 'Clientes',
      contact: 'Contacto',
      getStarted: 'Comenzar ahora'
    },
    navB: {
      solutions: 'Catálogo',
      howWeWork: 'Cómo funciona',
      pilares: 'Pilares',
      company: 'Empresa',
      contact: 'Contacto'
    },
    heroB: {
      eyebrow: 'Tecnología para negocios que crecen',
      headline: 'Menos rutina dispersa. Más control para crecer.',
      supportLine1: 'Sistemas listos, en evolución constante y moldeados a tu operación — con mantenimiento y soporte incluidos.',
      supportLine2: 'Tú conversas con nosotros, y la tecnología acompaña el crecimiento de tu negocio.',
      ctaWhatsApp: 'Conversar por WhatsApp',
      microcopy: 'Alcance, soporte y condiciones acordados contigo.',
      hook: 'Mira qué solución tiene sentido para tu rutina.',
      imageAlt: 'Ilustración de un hub orbital nocturno conectando los sistemas de TechMinds'
    },
    problemB: {
      title: 'El problema de la rutina dispersa',
      cards: [
        {
          title: 'Pedidos dispersos en WhatsApp',
          description: 'Conversas simultáneas, anotaciones manuales e información importante perdida entre los mensajes.'
        },
        {
          title: 'Agenda difícil de seguir',
          description: 'Horarios combinados por mensaje, con reprogramaciones y conflictos que se escapan del control.'
        },
        {
          title: 'Datos separados al decidir',
          description: 'Cada información en un lugar distinto — y ninguna visión completa del negocio al momento de decidir.'
        }
      ],
      hook: 'El próximo paso es reunir lo que importa. Encuentra tu camino en el catálogo.'
    },
    catalogB: {
      eyebrow: 'Encuentra tu camino',
      title: '¿Qué parte de tu rutina puede quedar más clara?',
      activeStatement: 'Cinco productos en el catálogo. Groom, FasTo y Lumen están activos.',
      developingStatement: 'VibeCut y Escola Conectada están en desarrollo.',
      carouselTitle: 'Explora las soluciones',
      carouselSubtitle: 'Cinco productos, organizados en un flujo visual más compacto y fácil de navegar.',
      carouselPrev: 'Tarjeta anterior',
      carouselNext: 'Siguiente tarjeta',
      paginationLabel: 'Ir a la tarjeta',
      badgeActive: '● Activo',
      badgeDeveloping: 'En desarrollo',
      ctaLabels: {
        'conhecer-groom': 'Conocer Groom',
        'conhecer-fasto': 'Conocer FasTo',
        'conhecer-lumen': 'Conocer Lumen',
        'conhecer-vibecut': 'Conocer VibeCut',
        'conhecer-escola-conectada': 'Conocer Escola Conectada'
      },
      products: {
        groom: {
          segmento: 'Para barberías',
          headline: 'Tu agenda y tus cuentas en la misma dirección.',
          beneficios: [
            'Agendamiento por WhatsApp',
            'Control financiero y lista de espera',
            'Informes para acompañar la operación'
          ]
        },
        fasto: {
          segmento: 'Para estética y belleza',
          headline: 'Cuide a los clientes. Organice lo que viene después.',
          beneficios: [
            'Agenda online y manual, con catálogo',
            'Club de suscripciones',
            'Recordatorios y cobros por WhatsApp'
          ]
        },
        lumen: {
          segmento: 'Para educación y filosofía',
          headline: 'Más contexto para explorar ideas.',
          beneficios: [
            'Pensadores y obras en perspectiva',
            'Exploración en 9 ejes analíticos',
            'Una herramienta para educación y filosofía'
          ]
        },
        vibecut: {
          segmento: 'Para barberías y salones',
          headline: 'Una referencia personal antes de elegir el corte.',
          beneficios: [
            'Sugerencias personalizadas de cortes',
            'Posibilidades para barberías y salones'
          ]
        },
        'escola-conectada': {
          segmento: 'Para instituciones de enseñanza',
          headline: 'Una visión compartida de la vida escolar.',
          beneficios: [
            'Matrículas, asistencia y notas',
            'Comunicación e informes',
            'Personalizable por institución'
          ]
        }
      },
      custom: {
        eyebrow: '¿Tu negocio tiene otra dinámica?',
        title: 'El sistema puede partir de tu operación.',
        description: 'Para necesidades fuera del catálogo, desarrollamos a medida, con alcance y personalización acordados.',
        ctaWhatsApp: 'Conversar por WhatsApp',
        microcopy: 'Cuéntanos tu rutina en la misma conversación comercial.'
      },
      hook: 'Producto o a medida: vea cómo pasamos de la elección a la operación.'
    },
    howItWorksB: {
      eyebrow: 'Cómo trabajamos',
      title: '¿Qué sucede después de la primera conversación?',
      support: 'Tres pasos simples, con decisiones claras en cada etapa.',
      steps: [
        {
          number: '01',
          title: 'Elegir',
          description: 'Cuéntanos tu rutina e identifica un producto activo o un proyecto a medida.'
        },
        {
          number: '02',
          title: 'Contratar',
          description: 'Alinea alcance, soporte, personalización y condiciones antes de empezar.'
        },
        {
          number: '03',
          title: 'Operar',
          description: 'Inicia la operación conforme la disponibilidad y lo acordado.'
        }
      ],
      stepChips: ['Groom', 'FasTo', 'Lumen'],
      stepChecklist: ['Alcance definido', 'Soporte acordado', 'Condiciones alineadas'],
      stepPanelTitle: 'Tu rutina, conectada',
      stepPanelRows: ['Reserva confirmada', 'Caja cerrada', 'Informe enviado'],
      note: 'VibeCut y Escola Conectada permanecen en desarrollo. La conversación no implica acceso inmediato.',
      hook: '¿Y después de la entrega? La continuidad también necesita estar acordada.'
    },
    pillarsB: {
      eyebrow: 'Continuidad con claridad',
      title: 'Tu sistema no termina en la entrega.',
      support: 'Mantenimiento, evolución y performance orientan la entrega. La cobertura de cada pilar se define en el contrato.',
      items: [
        {
          title: 'Mantenimiento',
          description: 'Correcciones, estabilidad y seguridad según contrato.'
        },
        {
          title: 'Evolución',
          description: 'Mejoras y nuevas versiones con alcance y condiciones acordados.'
        },
        {
          title: 'Performance',
          description: 'Estructura y desempeño definidos para cada solución, según contrato.'
        }
      ],
      hook: '¿Quieres evaluar este camino para tu negocio? Empieza con una conversa directa.'
    },
    socialProofB: {
      eyebrow: 'Experiencias de clientes',
      title: 'Los resultados merecen contexto. Y evidencia.',
      support: 'Espacios reservados para casos y testimonios reales. Publicación tras validación y autorización de los clientes.',
      pendingTag: 'CONTENIDO PENDIENTE',
      resultLabel: 'Resultado verificado',
      cards: [
        {
          segment: 'Barberías',
          testimonial: '[Testimonio aprobado a insertar]',
          result: '[Resultado y contexto por validar]',
          logo: '[Logo]',
          name: '[Nombre]',
          roleCompany: '[Cargo] · [Empresa]'
        },
        {
          segment: 'Estética y belleza',
          testimonial: '[Testimonio aprobado a insertar]',
          result: '[Resultado y contexto por validar]',
          logo: '[Logo]',
          name: '[Nombre]',
          roleCompany: '[Cargo] · [Empresa]'
        }
      ],
      note: 'Testimonios, logos y resultados aún no confirmados. Ningún número comercial se presenta como prueba.',
      hook: 'Mientras se preparan los casos, puedes conocer la propuesta directamente.'
    },
    companyTrust: {
      eyebrow: 'Empresa y confianza',
      title: 'Información verdadera y canales directos.',
      support: 'TechMinds no usa testimonios inventados, números ficticios ni presión comercial. Aquí encontrarás la identificación empresarial exacta y los canales de contacto disponibles.',
      statement: 'Sistemas que evolucionan. Negocios que crecen.',
      commercial: {
        title: 'Habla con el equipo comercial',
        description: 'Para nuevos proyectos, alianzas y ventas.',
        ctaWhatsApp: 'Conversar por WhatsApp'
      },
      areas: {
        title: 'Contactos por área',
        description: 'Elige el canal adecuado para tu necesidad',
        careers: 'Carreras · oportunidades profesionales',
        support: 'Soporte · ayuda con los productos',
        compliance: 'Compliance · privacidad y conformidad'
      },
      copyHint: 'Haz clic para copiar',
      copied: '¡Copiado!'
    },
    footerB: {
      statement: 'Sistemas que evolucionan. Negocios que crecen.',
      nav: {
        systemsTitle: 'Sistemas',
        companyTitle: 'Empresa',
        legalTitle: 'Legal',
        about: 'Sobre nosotros',
        contact: 'Contacto',
        terms: 'Términos de uso',
        privacy: 'Privacidad'
      },
      legalName: 'Nombre Empresarial: 69.184.592 MICHEL LEMOS BITTENCOURT',
      cnpj: 'CNPJ: 69.184.592/0001-45 | Guaíba - RS',
      copyright: '© 2026 TechMinds. Todos los derechos reservados.'
    },
    legal: {
      termsTitle: 'Términos y Condiciones de Uso',
      termsSubtitle: 'Selecione el producto para visualizar los términos correspondientes.',
      privacyTitle: 'Política de Privacidad',
      privacySubtitle: 'Selecione el producto para visualizar la política de privacidad correspondente.',
      inPreparation: 'en elaboración',
      comingSoon: 'Próximamente',
      onThisPage: 'En esta página',
      backToTop: 'Volver al principio',
      seeAlso: 'Ver también:',
      crossLinkToPrivacy: 'Política de Privacidad del',
      crossLinkToTerms: 'Términos y Condiciones del'
    },
    // ── RN-025 — Landing VibeCut (dossier g1 §2–§3) ─────────────────
    vibecut: {
      nav: {
        links: ['Cómo funciona', 'Estilos', 'Privacidad', 'FAQ'],
        cta: 'Sobre las pruebas'
      },
      footer: {
        statement: 'Recomendaciones de cabello y barba con IA. Una nueva perspectiva para tu próximo look.',
        tagline: 'Un producto TechMinds',
        exploreTitle: 'Explora',
        exploreLinks: ['Cómo funciona', 'Estilos', 'Sobre las pruebas', 'FAQ'],
        documentsTitle: 'Documentos',
        terms: 'Términos de Uso',
        privacy: 'Política de Privacidad',
        copyright: '© 2026 TechMinds. Todos los derechos reservados.'
      },
      hero: {
        eyebrow: 'IA PARA TU PRÓXIMO LOOK',
        headline: 'Tu próximo look empieza contigo.',
        highlight: 'Explora antes de cambiar.',
        paragraph: 'Descubre cortes de cabello y estilos de barba a partir de tu foto. La IA analiza tus características, sugiere posibilidades y crea una previsualización para inspirar tu elección.',
        ctaHow: 'Conoce cómo funciona',
        ctaStyles: 'Explora los estilos',
        status: 'Android en pruebas internas · v1.0.6',
        statusNote: 'Aún no publicado en tiendas.',
        miniProps: ['Análisis de tus características', 'Tres modos de explorar', 'Sin login ni registro'],
        previewTitle: 'Tu previsualización de estilo',
        refLabel: 'REFERENCIA',
        previewLabel: 'PREVISUALIZACIÓN ILUSTRATIVA',
        previewDisclaimer: 'Comparación ilustrativa · no es un resultado real',
        modeBadge: 'CABELLO + BARBA',
        textureTitle: 'Textura y definición',
        textureText: 'Parte superior texturizada con degradado bajo y barba corta perfilada. Una dirección para conversar con tu profesional.'
      },
      benefits: {
        eyebrow: 'MÁS REPERTORIO, MENOS ADIVINANZA',
        title: 'No se trata de seguir un patrón. Se trata de encontrar posibilidades.',
        cards: [
          {
            title: 'Parte de tu foto',
            description: 'La propuesta parte de tus características — no de un patrón.'
          },
          {
            title: 'Descubre nuevas direcciones',
            description: 'Ve posibilidades de corte y barba a la altura de tu momento.'
          },
          {
            title: 'Visualiza la idea',
            description: 'Conserva la dirección que mejor te acomode para conversar con tu profesional.'
          }
        ]
      },
      howItWorks: {
        eyebrow: 'CÓMO FUNCIONA',
        title: 'De tu foto a una nueva posibilidad.',
        support: 'Un recorrido guiado, sin login, correo electrónico ni registro.',
        steps: [
          {
            title: 'Acepta los documentos',
            description: 'Lee y acepta los Términos de Uso y la Política de Privacidad por separado.'
          },
          {
            title: 'Envía tu foto',
            description: 'Una imagen nítida, con el rostro visible, da inicio a la exploración.'
          },
          {
            title: 'Conoce el análisis',
            description: 'La IA interpreta tus características sin encerrarlas en un patrón.'
          },
          {
            title: 'Explora las sugerencias',
            description: 'Direcciones de estilo organizadas por modo de exploración.'
          },
          {
            title: 'Genera tu previsualización',
            description: 'Recibe una previsualización ilustrativa para inspirar tu elección.'
          }
        ],
        note: 'JPEG, PNG o WEBP, hasta 10 MB. En la experiencia web, el envío es por carga; la cámara es exclusiva del Android instalado. El análisis y la previsualización requieren internet.'
      },
      modes: {
        eyebrow: 'EXPLORA LOS ESTILOS',
        title: 'Un cambio a la vez. O una nueva combinación.',
        cards: [
          { badge: 'SOLO CABELLO', line: 'Cambia el corte.', example: 'Crop texturizado' },
          { badge: 'SOLO BARBA', line: 'Redefine los contornos.', example: 'Barba corta perfilada' },
          { badge: 'CABELLO + BARBA', line: 'Piensa en el conjunto.', example: 'Quiff + barba corta' }
        ],
        disclaimer: 'Retratos y sugerencias editoriales ilustrativos. No son recomendaciones personalizadas reales, resultados de usuarios ni garantía de resultado físico.'
      },
      analysis: {
        eyebrow: 'UNA MIRADA A TUS CARACTERÍSTICAS',
        title: 'Tu foto es el punto de partida. No un patrón a seguir.',
        factors: [
          {
            title: 'Forma del rostro',
            description: 'Contornos y proporciones orientan los cortes compatibles.'
          },
          {
            title: 'Cabello y barba',
            description: 'Volumen, longitud y delineado delimitan las direcciones posibles.'
          },
          {
            title: 'Textura de piel',
            description: 'Ondulaciones y densidad influyen en el acabado del estilo.'
          }
        ],
        panelTitle: 'Lectura de la foto · EJEMPLO',
        attributes: [
          { label: 'Cabello', value: 'Ondulado' },
          { label: 'Barba', value: 'Corta' },
          { label: 'Rostro', value: 'Ovalado' },
          { label: 'Piel', value: 'Textura natural' }
        ],
        disclaimer: 'Datos ficticios para demostrar la interfaz. No es un análisis real de la persona retratada.'
      },
      suggestions: {
        eyebrow: 'DEL ESTILO A LA PREVISUALIZACIÓN',
        title: 'Una idea toma forma cuando logras imaginarla.',
        mockBadge: 'EJEMPLO · CABELLO + BARBA',
        selectedTitle: 'Quiff + barba corta',
        selectedDescription: 'Volumen en la parte superior y contornos definidos.',
        selectedTag: 'Seleccionado para demostrar la previsualización',
        altTitle: 'Degradado + barba natural',
        altDescription: 'Laterales suaves y volumen discreto en el rostro.',
        noHistory: 'Los análisis y las previsualizaciones se generan bajo demanda. No hay historial de looks anteriores.',
        previewDisclaimer: 'La previsualización es ilustrativa y no garantiza el resultado físico. Consulta a un profesional antes de cambiar.'
      },
      privacy: {
        eyebrow: 'PRIVACIDAD CON CLARIDAD',
        title: 'Sin registro. Con transparencia sobre los datos.',
        deviceCode: 'Un código anónimo identifica el dispositivo — sin nombre, correo electrónico ni cuenta.',
        gemini: 'La foto es procesada por el servicio externo Google Gemini, sujeto a la disponibilidad y a las políticas del propio servicio.',
        consentRecord: 'La aceptación registra fecha y hora en UTC, la versión de los documentos, la plataforma, la IP cuando está disponible y la información del navegador.',
        panelTitle: 'Antes de enviar tu foto',
        termsDoc: 'Términos de Uso',
        privacyDoc: 'Política de Privacidad',
        readDoc: 'Leer documento',
        instruction: 'Acepta los dos documentos para continuar',
        panelNote: 'Ejemplo visual de la etapa de aceptación. Esta landing no recibe fotos ni registra consentimiento.',
        cards: [
          {
            title: 'Documentos actualizados',
            description: 'Una nueva versión de los documentos exige una nueva aceptación en la próxima apertura.'
          },
          {
            title: 'Si la conexión falla',
            description: 'El registro de la aceptación queda en cola para reenvío automático.'
          },
          {
            title: 'Datos del dispositivo',
            description: 'Borrar los datos del dispositivo exige aceptar los documentos nuevamente.'
          }
        ]
      },
      availability: {
        eyebrow: 'EN DESARROLLO',
        title: 'Una nueva experiencia. Aún en pruebas internas.',
        cardTitle: 'VibeCut para Android',
        cardTag: 'PRUEBAS INTERNAS · V1.0.6',
        rows: [
          { label: 'Tiendas', value: 'Aún no publicado' },
          { label: 'Acceso público', value: 'No disponible' },
          { label: 'Lanzamiento', value: 'Sin fecha anunciada' }
        ],
        note: 'La demostración de carga en la web describe el funcionamiento; no indica disponibilidad pública de la experiencia web.'
      },
      faq: {
        eyebrow: 'ANTES DE EMPEZAR',
        title: 'Lo que vale la pena saber sobre VibeCut.',
        support: 'Posibilidades reales de exploración. Límites explicados sin letra pequeña.',
        items: [
          {
            q: '¿Ya puedo descargar o usar VibeCut?',
            a: 'Todavía no hay acceso público. Android está en pruebas internas en la versión 1.0.6 y no fue publicado en tiendas. No hay fecha de lanzamiento anunciada.'
          },
          {
            q: '¿Necesito crear una cuenta?',
            a: 'No. El uso no exige login, correo electrónico ni registro. El dispositivo recibe un código anónimo. La foto es procesada y las aceptaciones tienen registros propios; la ausencia de cuenta no significa ausencia de tratamiento de datos.'
          },
          {
            q: '¿Qué foto puedo enviar?',
            a: 'JPEG, PNG o WEBP de hasta 10 MB. Prefiere una imagen nítida, con el rostro visible. En la experiencia web, el envío es por carga. La cámara funciona solamente en el Android instalado.'
          },
          {
            q: '¿El resultado será igual a la previsualización?',
            a: 'No hay esa garantía. La previsualización es ilustrativa y la calidad de la IA puede variar. La textura, la longitud y el trabajo del profesional influyen en el resultado físico. Úsala como referencia y consulta a un profesional.'
          },
          {
            q: '¿Funciona sin internet? ¿Mis looks quedan guardados?',
            a: 'Los análisis y las previsualizaciones exigen internet y el servicio externo Google Gemini, sujeto a la disponibilidad. Se generan bajo demanda, sin historial de looks anteriores. Si el registro de aceptación falla, queda en cola para reenvío automático.'
          },
          {
            q: '¿Cuándo necesito aceptar los documentos de nuevo?',
            a: 'Términos de Uso y Política de Privacidad tienen aceptaciones separadas y por versión. Una actualización exige una nueva aceptación en la próxima apertura. Borrar los datos del dispositivo también exige aceptar nuevamente.'
          }
        ]
      },
      invite: {
        eyebrow: 'TU ESTILO, EN PERSPECTIVA',
        title: 'Antes de cambiar tu look, amplía tus posibilidades.',
        text: 'Conoce la propuesta de VibeCut y explora las ideas de cabello y barba de esta página.',
        ctaStyles: 'Explora los estilos',
        ctaTests: 'Sobre las pruebas'
      }
    },
    // ── RN-025 — Landing Lumen (dossier g1 §4–§4.5) ─────────────────
    lumen: {
      nav: {
        links: ['El acervo', 'Cómo funciona', 'Tu perfil', 'FAQ'],
        cta: 'Explorar el Lumen',
        ctaPending: 'El acceso al panel Lumen aún no fue publicado. El destino del producto sigue en definición por TechMinds.'
      },
      footer: {
        statement: 'Mapa Multidimensional del Pensamiento Político. Exploración histórica y filosófica, con apertura a diferentes perspectivas.',
        tagline: 'Un producto del portafolio TechMinds',
        exploreTitle: 'Explora el Lumen',
        exploreLinks: ['El acervo', 'Cómo funciona', 'Tu perfil', 'Preguntas frecuentes'],
        productFeaturesTitle: 'A tu manera',
        productFeatures: ['Portugués (BR) · Idioma del producto', 'Claro / Oscuro · Tema del producto'],
        copyright: '© 2026 Lumen · TechMinds.'
      },
      hero: {
        statusChip: 'Panel educacional en operación · Un producto TechMinds',
        eyebrow: 'LAS IDEAS ATRAVIESAN EL TIEMPO',
        headline: 'Amplía tu repertorio. Ilumina tus lecturas.',
        paragraph: 'Explora la historia y la filosofía del pensamiento político occidental. Conecta pensadores, registra lecturas y comprende las tendencias de tu recorrido — sin reducir las ideas a una única dirección.',
        ctaExplore: 'Explorar el Lumen',
        ctaHow: 'Cómo funciona',
        cardCaption: 'Muchas perspectivas. Un nuevo punto de partida.',
        cardLine: 'De la Antigüedad a los debates contemporáneos.'
      },
      stats: {
        items: [
          { value: '55', label: 'Pensadores' },
          { value: '7', label: 'Eras históricas' },
          { value: '158', label: 'Obras catalogadas' },
          { value: '9', label: 'Ejes analíticos' }
        ],
        disclaimer: 'Dimensiones del catálogo, no números de usuarios. Obras catalogadas no equivalen a descargas disponibles.'
      },
      acervo: {
        eyebrow: 'El acervo',
        title: 'Ideas de otros tiempos. Preguntas que siguen vivas.',
        chip: 'Historia, filosofía y política en perspectiva.',
        cards: [
          {
            name: 'Platón',
            era: 'Antigüedad',
            dates: 'c. 428–348 a. C.',
            workLabel: 'OBRA EN PERSPECTIVA',
            work: 'La República',
            workYear: 'c. 380 a. C.'
          },
          {
            name: 'Nicolás Maquiavelo',
            era: 'Renacimiento',
            dates: '1469–1527',
            workLabel: 'OBRA EN PERSPECTIVA',
            work: 'El Príncipe',
            workYear: '1532'
          },
          {
            name: 'Hannah Arendt',
            era: 'Siglo XX',
            dates: '1906–1975',
            workLabel: 'OBRA EN PERSPECTIVA',
            work: 'La condición humana',
            workYear: '1958'
          }
        ],
        ctaCatalog: 'Explora el catálogo completo',
        catalogPending: 'El destino del catálogo completo aún no está definido.',
        disclaimer: 'Recorte editorial ilustrativo. Los retratos son representaciones artísticas, no fotografías.'
      },
      howItWorks: {
        title: 'Una lectura abre la siguiente pregunta.',
        steps: [
          { title: 'Explora', description: 'Navega el acervo por pensadores, eras y ejes analíticos.' },
          {
            title: 'Marca tus lecturas',
            description: 'Un clic registra una obra leída. Puedes desmarcarla cuando quieras.'
          },
          { title: 'Observa tu perfil', description: 'Acompaña las tendencias que emergen de tus lecturas.' },
          {
            title: 'Diversifica',
            description: 'Con 5 obras leídas, y habiendo lagunas, el Lumen sugiere próximos pasos.'
          }
        ]
      },
      busca: {
        eyebrow: 'Explora con contexto',
        title: 'Menos ruido. Más caminos por el acervo.',
        blocks: [
          {
            title: 'Encuentra más allá del nombre',
            description: 'La búsqueda funciona sin tildes e ignora mayúsculas y minúsculas.'
          },
          {
            title: 'Combina perspectivas',
            description: 'La opción Todos neutraliza un eje. Re-seleccionar el mismo valor limpia ese filtro.'
          },
          {
            title: 'Organiza lo que ya leíste',
            description: 'Activa Solo leídas y acompaña sellos de alcance, como Antropología.'
          }
        ],
        mockTitle: 'Explorar acervo — Demostración ilustrativa',
        mockQuery: 'republica',
        mockResult: 'La República',
        mockAuthor: 'Platón — Antigüedad · Filosofía política',
        mockStatus: 'Leída · clic para desmarcar',
        mockRecord: 'Registro de ejemplo · 10/10/2026, 14:32',
        mockDownload: 'Descarga: No disponible · ejemplo',
        mockProfileCta: 'Ver Perfil',
        mockDisclaimer: 'Catálogo no es sinónimo de biblioteca de descargas: solo hay descarga cuando existe un enlace.'
      },
      perfil: {
        eyebrow: 'Tu perfil de lectura',
        title: 'Un mapa de tu recorrido. No una etiqueta sobre ti.',
        radarLabel: 'Radar político — tendencias de tus lecturas',
        radarTags: ['Filosofía política', 'Historia de las ideas', 'Economía política', 'Antropología', 'Ética'],
        axesTitle: 'Ejes metodológicos',
        axes: ['Lentes históricas', 'Conceptos clave', 'Contexto de las obras'],
        disclaimer: 'Una herramienta educacional para reflexionar y explorar. No es un test psicológico ni una definición de identidad política.',
        states: [
          {
            title: 'Sin lecturas',
            description: 'El Ver Perfil aún no aparece hasta que haya al menos una obra leída.'
          },
          {
            title: 'Con al menos una obra leída',
            description: 'El Ver Perfil pasa a aparecer. Sin tendencia definida, el resultado es Equilibrado.'
          }
        ],
        visualNote: 'Ejemplo visual · no son datos reales. Sin puntuaciones reales.'
      },
      diversificacao: {
        eyebrow: 'Amplía el horizonte',
        title: 'El próximo libro puede cambiar la pregunta.',
        intro: 'A partir de 5 obras leídas, el Lumen identifica polos poco explorados y sugiere hasta 5 pensadores compatibles con las lagunas.',
        counts: 'Hasta 3 lagunas · Hasta 5 pensadores sugeridos',
        rule: 'Diversificar, no repetir: la prioridad es la adherencia a las lagunas, luego las obras nunca leídas, luego el orden alfabético — las lecturas ya registradas no vuelven.',
        cards: [
          { name: 'Aristóteles', work: 'Política', era: 'Antigüedad' },
          { name: 'John Locke', work: 'Segundo tratado sobre el gobierno', era: 'Siglo XVII' },
          { name: 'Mary Wollstonecraft', work: 'Reivindicación de los derechos de la mujer', era: 'Siglo XVIII' }
        ],
        insufficient: 'Menos de 5 obras leídas: Datos insuficientes.'
      },
      excel: {
        eyebrow: 'Lleva el mapa contigo',
        title: 'Del acervo a tu mesa de estudio.',
        scopes: ['Acervo completo', 'Leídas', 'Pendientes'],
        tableTitle: 'Obras en perspectiva (ejemplo)',
        rows: ['Platón — La República', 'Maquiavelo — El Príncipe', 'Hannah Arendt — La condición humana'],
        footer: '158 obras en el acervo completo',
        expl: 'En cada alcance: tres pestañas, porcentajes y total general. El resumen agrupa por pensador; el progreso, por era.'
      },
      privacidade: {
        eyebrow: 'Privacidad con claridad',
        title: 'Tu recorrido queda cerca de ti.',
        highlight: 'Local, no en la nube.',
        blocks: [
          {
            title: 'Lecturas en tu dispositivo',
            description: 'El registro es local, con fecha y hora. No hay cuentas, respaldo en la nube ni sincronización.'
          },
          {
            title: 'La búsqueda no guarda el término',
            description: 'El Lumen registra solo el tamaño y el momento de la búsqueda.'
          },
          {
            title: 'Consentimiento, si hay anuncios',
            description: 'Los anuncios están desactivados. Si se activan, el consentimiento es explícito, con rechazo persistente.'
          }
        ],
        note: 'Cerrar el navegador no borra las lecturas. Limpiar los datos del navegador las borra — y también puedes limpiarlas en el Lumen.'
      },
      faq: {
        eyebrow: 'Antes de empezar',
        title: 'La claridad también es parte de la exploración.',
        support: 'Lo que el Lumen hace — y lo que no promete.',
        items: [
          {
            q: '¿Todas las obras tienen descarga?',
            a: 'No. El Lumen es un catálogo educacional, no una biblioteca con todos los libros gratuitos. La mayoría de las obras aún puede estar no disponible. Solo hay descarga cuando existe un enlace; de lo contrario, aparece No disponible. Los nuevos enlaces entran tras la publicación de una actualización del catálogo.'
          },
          {
            q: '¿El diagnóstico define mi posición política?',
            a: 'No. Describe tendencias de las obras marcadas como leídas, no una verdad definitiva sobre ti. No es un test psicológico. Sin lecturas, hay un estado inicial; sin tendencia definida, el resultado es Equilibrado.'
          },
          {
            q: '¿Cuándo aparecen las recomendaciones?',
            a: 'A partir de 5 obras leídas, cuando hay polos poco explorados. Pueden aparecer hasta 3 lagunas y hasta 5 pensadores sugeridos. Con menos de 5 obras, hay datos insuficientes. En la barra lateral, también debe haber al menos una laguna.'
          },
          {
            q: '¿Perderé mi historial al cerrar el navegador?',
            a: 'No. Las lecturas quedan guardadas en el dispositivo, con fecha y hora. Limpiar los datos del navegador borra ese historial, y puedes limpiarlo en el Lumen. No existen cuentas propias, respaldo en la nube ni sincronización entre dispositivos.'
          },
          {
            q: '¿Puedo cambiar el tema y el idioma?',
            a: 'Sí. Hay temas claro y oscuro, con preferencia guardada. El Lumen está en portugués de Brasil, inglés y español. Para el idioma, usa primero tu preferencia guardada, luego el navegador y, si es necesario, portugués brasileño.'
          },
          {
            q: '¿Puedo compartir el Lumen?',
            a: 'Sí. El uso compartido en redes sociales incluye una vista previa rica, con presentación del producto. Compartir el Lumen no reemplaza la exportación en Excel: para organizar tu estudio fuera del panel, elige acervo completo, leídas o pendientes.'
          }
        ]
      },
      invite: {
        eyebrow: 'La curiosidad es el punto de partida',
        title: 'Hay más de una manera de mirar el mundo.',
        text: 'Empieza por el acervo. Registra lo que leíste. Descubre qué vale la pena preguntar aún.',
        ctaExplore: 'Explorar el Lumen',
        note: '55 pensadores. Muchas perspectivas. Un recorrido que es tuyo.'
      }
    },
    // ── RN-025 — Landing FasTo (dossier g1 §5–§5.5) ─────────────────
    fasto: {
      nav: {
        links: ['Cómo funciona', 'Recursos', 'Club', 'FAQ'],
        cta: 'Conocer FasTo'
      },
      footer: {
        statement: 'Agendamiento y gestión para establecimientos de estética y belleza.',
        tagline: 'Un proyecto de TechMinds',
        companyStatement: 'Sistemas que evolucionan. Negocios que crecen.',
        exploreTitle: 'Explora FasTo',
        exploreLinks: ['Cómo funciona', 'Recursos', 'Club de suscripciones', 'Preguntas frecuentes'],
        techmindsTitle: 'TechMinds',
        knowCompany: 'Conoce la empresa',
        requestPresentation: 'Solicitar presentación',
        copyright: '© 2026 FasTo · TechMinds.'
      },
      hero: {
        statusChip: 'Activo · por TechMinds',
        eyebrow: 'AGENDAMIENTO PARA ESTÉTICA Y BELLEZA',
        headline: 'Más cuidado para tus clientes. Más claridad en tu agenda.',
        paragraph: 'Con FasTo, tus clientes agendan por un enlace y tu equipo acompaña servicios, profesionales y horarios en un solo lugar.',
        ctaPresentation: 'Solicitar presentación',
        microcopy: 'Conoce la propuesta y conversa con TechMinds sobre las necesidades de tu establecimiento.',
        agendaTitle: 'Tu agenda — Miércoles, 23 de septiembre',
        agendaDays: ['21', '22', '23', '24', '25'],
        agendaSelectedDay: '23',
        appointments: [
          { name: 'Mariana Costa', service: 'Limpieza de piel', duration: '60 min', pro: 'Prof: Ana', status: 'Confirmado' },
          { name: 'Beatriz Lima', service: 'Diseño de cejas', duration: '30 min', pro: 'Prof: Luiza', status: 'Pendiente' },
          { name: 'Camila Souza', service: 'Masaje facial', duration: '45 min', pro: 'Prof: Ana', status: 'Confirmado' }
        ],
        statusLabels: { confirmed: 'Confirmado', pending: 'Pendiente' },
        agendaHint: 'Un enlace para agendar — Servicio → profesional → horario',
        agendaNote: 'Demostración ilustrativa. Datos e interfaz de ejemplo.',
        segments: ['Clínicas de estética', 'Salones de belleza', 'Estudios de belleza', 'Profesionales de cuidados personales']
      },
      problemas: {
        eyebrow: 'MENOS INFORMACIÓN DISPERSA',
        title: 'Una rutina de belleza no necesita una agenda confusa.',
        cards: [
          {
            problem: '¿Pedidos dispersos en conversas?',
            solution: 'Un enlace público reúne servicio, profesional y horario en un solo lugar.'
          },
          {
            problem: '¿Difícil saber quién está disponible?',
            solution: 'Disponibilidad por profesional, con bloqueo de períodos.'
          },
          {
            problem: '¿Historial difícil de encontrar?',
            solution: 'Registros y agendamientos organizados, con historial al alcance.'
          }
        ]
      },
      comoFunciona: {
        eyebrow: 'DEL ENLACE AL ATENDIMIENTO',
        title: 'Tu cliente elige. Tu equipo organiza.',
        steps: [
          {
            title: 'Prepara tu espacio',
            description: 'Registra servicios, precios, duraciones, profesionales y horarios.'
          },
          {
            title: 'Comparte tu enlace',
            description: 'El pedido entra como pendiente para que el equipo decida.'
          },
          {
            title: 'Tu equipo decide',
            description: 'Confirma o rechaza. La decisión avisa al cliente automáticamente por WhatsApp.'
          },
          {
            title: 'Acompaña la rutina',
            description: 'Los registros hechos por el equipo ya entran confirmados.'
          }
        ]
      },
      recursos: {
        eyebrow: 'RECURSOS PARA EL DÍA A DÍA',
        title: 'La operación de tu establecimiento, conectada.',
        cards: [
          {
            title: 'Agenda por profesional',
            description: 'Cada profesional acompaña la propia agenda, con horarios y estado.'
          },
          {
            title: 'Catálogo de servicios',
            description: 'Servicios, duraciones y valores organizados en tu espacio.'
          },
          {
            title: 'Clientes e historial',
            description: 'Nombre, correo, celular y agendamientos anteriores al alcance.'
          },
          {
            title: 'Accesos del equipo',
            description: 'El administrador acompaña todos los agendamientos. Cada profesional ve solo los propios.'
          },
          {
            title: 'Actualizaciones en tiempo real',
            description: 'Confirmaciones y cambios aparecen para el equipo conforme ocurren.'
          },
          {
            title: 'Tu espacio, tu enlace',
            description: 'El enlace público del establecimiento es la puerta de entrada de los clientes.'
          }
        ],
        accessBanner: 'Un acceso simple para el cliente — correo y contraseña O cuenta de Google.'
      },
      clube: {
        eyebrow: 'CLUB DE TU ESTABLECIMIENTO',
        title: 'Una nueva forma de cuidar a quien vuelve.',
        rules: [
          {
            title: 'Sin cobro adicional',
            description: 'Los servicios cubiertos por los beneficios pueden agendarse sin cobro adicional.'
          },
          {
            title: 'Tiempo reservado = suma de las duraciones',
            description: 'El tiempo reservado es la suma de la duración de los servicios del beneficio.'
          },
          {
            title: 'Validez del enlace: 1–365 días',
            description: 'El enlace del suscriptor queda válido por el plazo elegido y puede ser revocado.'
          }
        ],
        disclaimer: 'El club es vendido por tu establecimiento a los clientes finales. No es la suscripción de uso del FasTo.',
        panelTitle: 'Suscripción activa — Tu próximo cuidado',
        panelItems: ['Limpieza de piel · 60 min', 'Masaje facial · 30 min'],
        panelTotal: 'Tiempo reservado: 90 min',
        panelNote: 'Sin cobro adicional en los servicios cubiertos. Ejemplo ilustrativo. No representa un plan comercial.'
      },
      whatsapp: {
        eyebrow: 'WHATSAPP EN EL FLUJO DE LA AGENDA',
        title: 'Informaciones importantes, cerca del cliente.',
        triggers: [
          {
            title: 'Confirmación o rechazo',
            description: 'La decisión del equipo dispara un aviso automático para el cliente.'
          },
          {
            title: 'Recordatorios antes del horario',
            description: 'Un día y cuatro horas antes, dentro del horario de atención. Fuera de él, el envío se pospone.'
          },
          {
            title: 'Confirmación del cliente',
            description: 'Tras dos horas pendiente, el recordatorio trae botones Confirmar/Cancelar. Tras cuatro horas sin confirmación, el agendamiento es cancelado.'
          }
        ],
        chatHeader: 'Recordatorio del FasTo',
        chatMessages: [
          'Hola, Mariana. Confirmamos tu horario?',
          'Limpieza de piel con Ana',
          'Miércoles, 23/09, a las 09:00'
        ],
        chatConfirm: 'Confirmar',
        chatCancel: 'Cancelar',
        providerNote: 'El envío depende del proveedor externo Evolution API. Una falla de envío no impide crear el agendamiento.',
        scopeNote: 'La automatización tiene alcance claro: la conversación asistida por bot está en el alcance del proyecto; el flujo completo aún debe detallarse. El FasTo no se presenta como un bot de atendimento completo.'
      },
      assinaturas: {
        eyebrow: 'SIN CONFUNDIR LAS SUSCRIPCIONES',
        title: 'Una plataforma para ti. Un club para tus clientes.',
        saas: {
          label: 'ESTABLECIMIENTO → FASTO',
          title: 'Suscripción de la plataforma',
          points: [
            'Cobranza vía Mercado Pago.',
            'Límite de clientes registrados bloquea nuevos registros.',
            'Vencida hace más de diez días, el acceso entra en modo solo lectura.',
            'Planes y condiciones comerciales serán tratados en la presentación.'
          ]
        },
        club: {
          label: 'CLIENTE → ESTABLECIMIENTO',
          title: 'Club de suscripciones',
          points: [
            'El club es vendido por el establecimiento a sus clientes finales.',
            'Los beneficios dependen de una suscripción activa y de los servicios cubiertos.'
          ]
        },
        distinction: 'Son relaciones diferentes: el club no reemplaza la suscripción SaaS.'
      },
      faq: {
        eyebrow: 'PARA CONOCERLO MEJOR',
        title: 'Preguntas frecuentes',
        items: [
          {
            q: '¿El FasTo ya está disponible para empezar a usar?',
            a: 'El FasTo es un proyecto interno de TechMinds, implementado y en desarrollo activo. Aún hay validaciones antes de producción. La presentación es una conversación sobre los recursos y las necesidades del establecimiento, no una activación inmediata.'
          },
          {
            q: '¿Cómo agenda el cliente y cómo confirma el equipo?',
            a: 'Por el enlace público, el cliente elige servicio, profesional y horario. El pedido entra pendiente. El equipo confirma o rechaza y el cliente recibe un aviso por WhatsApp. Los agendamientos registrados por el equipo ya entran confirmados.'
          },
          {
            q: '¿Cada profesional ve la agenda completa?',
            a: 'No. El administrador del establecimiento visualiza todos los agendamientos y cada profesional ve solo los propios. Los niveles de acceso del equipo son fijos.'
          },
          {
            q: '¿El club de suscripciones es un plan del FasTo?',
            a: 'No. El club es vendido por el establecimiento a sus clientes finales. La suscripción SaaS es el acceso del establecimiento a la plataforma. Los beneficios del club dependen de una suscripción activa y de los servicios cubiertos.'
          },
          {
            q: '¿Qué pasa si un mensaje no se envía?',
            a: 'El envío de WhatsApp depende de la Evolution API y de la disponibilidad del servicio externo. Una falla de envío no impide la creación del agendamiento. Los recordatorios respetan el horario de atención; fuera de él, el envío se pospone.'
          },
          {
            q: '¿Cuáles son los precios y las condiciones de contratación?',
            a: 'No hay planes comerciales, precios ni período gratuito aprobados para divulgación. Habla con TechMinds para conocer la propuesta. La cobranza de la suscripción SaaS depende del Mercado Pago; los límites de clientes y la situación de la suscripción influyen en el acceso.'
          }
        ]
      },
      invite: {
        title: '¿Vamos a conversar sobre la agenda de tu establecimiento?',
        text: 'Conoce el FasTo y comparte con TechMinds cómo trabaja tu equipo hoy.',
        ctaPresentation: 'Solicitar presentación',
        note: 'Presentación del proyecto, sin checkout ni activación inmediata.'
      }
    }
  }
};

export const languageNames: Record<Language, string> = {
  pt: '🇧🇷 Português',
  en: '🇺🇸 English',
  es: '🇪🇸 Español'
};

export const languageCodes: Record<Language, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES'
};

export const languageHtmlCodes: Record<Language, string> = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es'
};