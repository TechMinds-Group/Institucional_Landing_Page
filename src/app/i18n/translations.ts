export type Language = 'pt' | 'en' | 'es';

/** Texto de um produto do catálogo B resolvido em um idioma (RN-019-1). */
export interface CatalogProductText {
  segmento: string;
  headline: string;
  beneficios: string[];
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
    vibecutThumbAlt: string;
    demoBarVibecut: string;
    demoBarEscola: string;
    demoEscolaTabs: string[];
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
  hero: {
    headline: string;
    subheadline: string;
    requestDemo: string;
    seeHowItWorks: string;
  };
  socialProof: {
    label: string;
    title: string;
    titleHighlight: string;
    sectors: {
      name: string;
      description: string;
    }[];
  };
  problemSolution: {
    title: string;
    titleHighlight: string;
    problems: string[];
    solutions: string[];
  };
  features: {
    title: string;
    titleHighlight: string;
    cards: {
      title: string;
      description: string;
    }[];
  };
  products: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: {
      name: string;
      tag: string;
      status: string;
      description: string;
      highlight: string;
      cta: string;
    }[];
  };
  howItWorks: {
    title: string;
    titleHighlight: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    title: string;
    titleHighlight: string;
    items: {
      quote: string;
      name: string;
      role: string;
      company: string;
    }[];
  };
  finalCTA: {
    title: string;
    subtitle: string;
    emailPlaceholder: string;
    button: string;
    disclaimer: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    productsTitle: string;
    productLinks: string[];
    companyTitle: string;
    companyLinks: string[];
    legalTitle: string;
    legalLinks: string[];
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
      solutions: 'Soluções',
      howWeWork: 'Como trabalhamos',
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
      vibecutThumbAlt: 'Prévia ilustrativa da interface do VibeCut',
      demoBarVibecut: 'VibeCut · DEMO ILUSTRATIVA',
      demoBarEscola: 'Escola Conectada · DEMO PENDENTE',
      demoEscolaTabs: ['Matrículas', 'Frequência', 'Notas'],
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
      hook: 'Veja como é trabalhar com a TechMinds.'
    },
    hero: {
      headline: 'Softwares prontos, em evolução constante e moldados para o seu negócio.',
      subheadline: 'A TechMinds desenvolve sistemas de alto desempenho e disponibiliza acesso via contrato — com manutenção contínua incluída, suporte especializado e customização sob medida quando você precisar.',
      requestDemo: 'Conhecer os produtos',
      seeHowItWorks: 'Falar com um especialista'
    },
    socialProof: {
      label: 'Áreas de atuação e especialização.'
    },
    problemSolution: {
      title: 'Tecnologia que cresce com você,',
      titleHighlight: 'sem o peso de desenvolvê-la do zero.',
      problems: [
        'Desenvolver software próprio é caro, demorado e arriscado.',
        'Ferramentas genéricas não acompanham as particularidades do seu negócio.',
        'Sistemas legados travam sua operação e encarecem a escala.'
      ],
      solutions: [
        'Acesse sistemas prontos e robustos, com manutenção contínua incluída — sem custo de desenvolvimento.',
        'Customização disponível conforme contrato, para adaptar cada sistema à sua realidade.',
        'Arquitetura moderna e foco em performance para garantir o melhor custo-benefício na sua operação.'
      ]
    },
    features: {
      title: 'O que está por trás de',
      titleHighlight: 'cada solução TechMinds.',
      cards: [
        {
          title: 'Manutenção incluída',
          description: 'Correções, estabilidade e segurança fazem parte do contrato. Seus sistemas ficam sempre saudáveis, sem que você precise se preocupar com isso.'
        },
        {
          title: 'Evolução sob demanda',
          description: 'Melhorias funcionais e novas versões são oferecidas conforme sua necessidade, com escopo e condições definidos em contrato.'
        },
        {
          title: 'Performance e arquitetura',
          description: 'Desenvolvemos com foco em eficiência técnica para entregar sistemas rápidos, estáveis e com o melhor custo-benefício do mercado.'
        }
      ]
    },
    products: {
      title: 'Nossos',
      titleHighlight: 'sistemas',
      subtitle: 'Soluções desenvolvidas pela TechMinds, disponíveis via contrato, em constante evolução.',
      items: [
        {
          name: 'Groom',
          tag: 'Gestão & Automação',
          status: 'Disponível',
          description: 'Sistema completo de gestão para barbearias com agendamento automático via WhatsApp, controle de caixa, fila de espera e relatórios gerenciais.',
          highlight: 'Integração nativa com WhatsApp.',
          cta: 'Saiba mais'
        },
        {
          name: 'VibeCut',
          tag: 'Inteligência Artificial',
          status: 'Disponível',
          description: 'Sistema com IA que gera sugestões de cortes de cabelo personalizadas para cada cliente com base no formato do rosto. Ideal para barbearias e salões.',
          highlight: 'Sugestões geradas em segundos com IA.',
          cta: 'Saiba mais'
        },
        {
          name: 'Escola Conectada',
          tag: 'Gestão Educacional',
          status: 'Disponível',
          description: 'Sistema de gestão escolar completo: matrículas, frequência, notas, comunicação com responsáveis e relatórios pedagógicos — customizável para se adequar à realidade de cada instituição.',
          highlight: 'Customização sob medida para cada escola.',
          cta: 'Saiba mais'
        },
        {
          name: 'Lumen',
          tag: 'Educação & Filosofia',
          status: 'Disponível',
          description: 'Dashboard educacional interativo para exploração histórica e filosófica do pensamento político ocidental, mapeando pensadores através de nove eixos analíticos.',
          highlight: 'Taxonomia multidimensional com 9 eixos analíticos.',
          cta: 'Saiba mais'
        }
      ]
    },
    howItWorks: {
      title: 'Do contrato ao resultado,',
      titleHighlight: 'sem complicação.',
      steps: [
        {
          title: 'Escolha seu sistema',
          description: 'Explore nosso catálogo e encontre a solução ideal para o seu segmento e necessidade.'
        },
        {
          title: 'Defina seu contrato',
          description: 'Acordamos juntos o plano de acesso, o nível de customização e o suporte incluído.'
        },
        {
          title: 'Use, evolua e escale',
          description: 'Seu sistema entra em operação imediatamente, com manutenção contínua garantida e suporte da equipe TechMinds para evoluir conforme o seu negócio crescer.'
        }
      ]
    },
    testimonials: {
      title: 'O que',
      titleHighlight: 'nossos clientes dizem.',
      items: [
        {
          quote: 'O VibeCut virou o diferencial da nossa barbearia. Os clientes adoram ver as sugestões de corte antes de decidir. Aumentou muito nossa conversão.',
          name: 'Carlos Mendes',
          role: 'Proprietário',
          company: 'Barbearia StyleCut'
        },
        {
          quote: 'O ZoneMap transformou a experiência dos visitantes no nosso evento. Um mapa bonito, rápido e fácil de usar — exatamente o que precisávamos.',
          name: 'Fernanda Oliveira',
          role: 'Coordenadora de Eventos',
          company: 'ExpoSul'
        },
        {
          quote: 'O Escola Conectada foi personalizado para a nossa grade curricular e hoje centraliza tudo — da matrícula à comunicação com os pais. Não consigo imaginar sem ele.',
          name: 'Ricardo Souza',
          role: 'Diretor',
          company: 'Colégio Horizonte'
        }
      ]
    },
    finalCTA: {
      title: 'Pronto para ter um sistema que cresce com o seu negócio?',
      subtitle: 'Conheça nosso catálogo e vamos juntos definir o melhor contrato para a sua operação — com manutenção incluída e suporte para crescer.',
      emailPlaceholder: 'Seu melhor e-mail',
      button: 'Quero conhecer os sistemas',
      disclaimer: 'Não é necessário cartão de crédito. Comece seu teste gratuito hoje.'
    },
    footer: {
      tagline: 'Sistemas que evoluem. Negócios que crescem.',
      copyright: '© 2025 TechMinds. Todos os direitos reservados.',
      productsTitle: 'Sistemas',
      productLinks: ['Groom', 'VibeCut', 'Escola Conectada', 'Lumen'],
      companyTitle: 'Empresa',
      companyLinks: ['Sobre nós', 'Contato'],
      legalTitle: 'Legal',
      legalLinks: ['Termos de uso', 'Privacidade']
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
      solutions: 'Solutions',
      howWeWork: 'How we work',
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
      vibecutThumbAlt: 'Illustrative preview of the VibeCut interface',
      demoBarVibecut: 'VibeCut · ILLUSTRATIVE DEMO',
      demoBarEscola: 'Escola Conectada · PENDING DEMO',
      demoEscolaTabs: ['Enrollments', 'Attendance', 'Grades'],
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
      hook: 'See what it is like to work with TechMinds.'
    },
    hero: {
      headline: 'AI systems that transform your entire business.',
      subheadline: 'Automate processes, integrate systems, and scale with cutting-edge artificial intelligence — for businesses of any size.',
      requestDemo: 'Request a demo',
      seeHowItWorks: 'See how it works'
    },
    socialProof: {
      label: 'Business areas and specialization.'
    },
    problemSolution: {
      title: 'The complexity of modern systems',
      titleHighlight: "doesn't have to slow you down",
      problems: [
        "Disconnected systems that don't talk to each other.",
        'Manual processes wasting time and creating errors.',
        'Hard to scale without the right tech infrastructure.'
      ],
      solutions: [
        'Full system integration powered by AI.',
        'End-to-end process automation, from day one.',
        'Scalable architecture that grows with your business.'
      ]
    },
    features: {
      title: 'Everything your business needs,',
      titleHighlight: 'unified',
      cards: [
        {
          title: 'AI Automation',
          description: 'Automate entire workflows with intelligent, self-learning systems that adapt to your business needs.'
        },
        {
          title: 'Full System Integration',
          description: 'Connect all your tools and platforms into one unified ecosystem that works seamlessly together.'
        },
        {
          title: 'Real-time Insights',
          description: 'Get actionable data from across your operations, instantly. Make decisions based on live intelligence.'
        }
      ]
    },
    products: {
      title: 'Discover our',
      titleHighlight: 'products',
      subtitle: 'Solutions tailored for each segment.',
      items: [
        {
          name: 'Groom',
          tag: 'Management & Automation',
          status: 'Available',
          description: 'Complete management system for barber shops with automatic scheduling via WhatsApp, cash control, waiting queue, and reports.',
          highlight: 'Native integration with WhatsApp.',
          cta: 'Learn more'
        },
        {
          name: 'VibeCut',
          tag: 'Artificial Intelligence',
          status: 'In development',
          description: 'App that uses AI to suggest personalized haircuts based on the client\'s face. Ideal for barber shops and beauty salons.',
          highlight: 'Style generation in seconds.',
          cta: 'Learn more'
        },
        {
          name: 'Escola Conectada',
          tag: 'Educational Management',
          status: 'Available',
          description: 'Complete school management system: enrollments, attendance, grades, parent communication, and pedagogical reports in one place.',
          highlight: 'Integrated communication with parents.',
          cta: 'Learn more'
        },
        {
          name: 'Lumen',
          tag: 'Education & Philosophy',
          status: 'Available',
          description: 'Interactive educational dashboard for historical and philosophical exploration of Western political thought, mapping thinkers through nine analytical axes.',
          highlight: 'Multidimensional taxonomy with 9 analytical axes.',
          cta: 'Learn more'
        }
      ]
    },
    howItWorks: {
      title: '',
      titleHighlight: 'Simple as that.',
      steps: [
        {
          title: 'Choose your product',
          description: 'Explore our catalog and find the ideal solution for your business.'
        },
        {
          title: 'Subscribe and configure',
          description: 'In a few minutes, your tool is configured and ready to use.'
        },
        {
          title: 'Grow with technology',
          description: 'Use AI features, automations, and integrations to scale your business without effort.'
        }
      ]
    },
    testimonials: {
      title: 'What',
      titleHighlight: 'our customers say.',
      items: [
        {
          quote: 'Groom completely changed how I manage my barber shop. The WhatsApp scheduling alone pays for the investment.',
          name: 'Carlos Mendes',
          role: 'Owner',
          company: 'Barber Shop StyleCut'
        },
        {
          quote: 'ZoneMap helped us visualize our logistics operation in a way that no other tool could.',
          name: 'Fernanda Oliveira',
          role: 'Operations Director',
          company: 'LogFlow'
        },
        {
          quote: 'Escola Conectada simplified all communication with parents and reduced our administrative work by half.',
          name: 'Ricardo Souza',
          role: 'Director',
          company: 'Horizon School'
        }
      ]
    },
    finalCTA: {
      title: 'Ready to have cutting-edge technology in your business?',
      subtitle: 'Explore our catalog and find the ideal software for you.',
      emailPlaceholder: 'Your best email',
      button: 'Want to know the products',
      disclaimer: 'No credit card required. Start your free trial today.'
    },
    footer: {
      tagline: 'Technology that works for you.',
      copyright: '© 2025 TechMinds. All rights reserved.',
      productsTitle: 'Products',
      productLinks: ['Groom', 'VibeCut', 'Escola Conectada', 'Lumen'],
      companyTitle: 'Company',
      companyLinks: ['About us', 'Contact'],
      legalTitle: 'Legal',
      legalLinks: ['Terms of use', 'Privacy', 'Cookies']
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
      solutions: 'Soluciones',
      howWeWork: 'Cómo trabajamos',
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
      vibecutThumbAlt: 'Vista ilustrativa de la interfaz de VibeCut',
      demoBarVibecut: 'VibeCut · DEMO ILUSTRATIVA',
      demoBarEscola: 'Escola Conectada · DEMO PENDIENTE',
      demoEscolaTabs: ['Matrículas', 'Asistencia', 'Notas'],
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
      hook: 'Vea cómo es trabajar con TechMinds.'
    },
    hero: {
      headline: 'Sistemas de IA que transforman todo tu negocio.',
      subheadline: 'Automatiza procesos, integra sistemas y escala con inteligencia artificial de vanguardia — para empresas de cualquier tamaño.',
      requestDemo: 'Solicitar una demo',
      seeHowItWorks: 'Ver cómo funciona'
    },
    socialProof: {
      label: 'Áreas de actuación y especialización.'
    },
    problemSolution: {
      title: 'La complejidad de los sistemas modernos',
      titleHighlight: 'no tiene que frenar tu crecimiento',
      problems: [
        'Sistemas desconectados que no se comunican.',
        'Procesos manuales que generan errores y pérdida de tiempo.',
        'Dificultad para escalar sin la infraestructura adecuada.'
      ],
      solutions: [
        'Integración total de sistemas con IA.',
        'Automatización de extremo a extremo desde el primer día.',
        'Arquitectura escalable que crece con tu negocio.'
      ]
    },
    features: {
      title: 'Todo lo que tu negocio necesita,',
      titleHighlight: 'unificado',
      cards: [
        {
          title: 'Automatización con IA',
          description: 'Automatiza flujos de trabajo completos con sistemas inteligentes que aprenden y se adaptan a las necesidades de tu negocio.'
        },
        {
          title: 'Integración de Sistemas',
          description: 'Conecta todas tus herramientas y plataformas en un ecosistema unificado que funciona perfectamente en conjunto.'
        },
        {
          title: 'Información en Tiempo Real',
          description: 'Obtén datos accionables de todas tus operaciones, al instante. Toma decisiones basadas en inteligencia en vivo.'
        }
      ]
    },
    products: {
      title: 'Conoce nuestros',
      titleHighlight: 'productos',
      subtitle: 'Soluciones personalizadas para cada segmento.',
      items: [
        {
          name: 'Groom',
          tag: 'Gestión & Automatización',
          status: 'Disponible',
          description: 'Sistema completo de gestión para barberías con agendamiento automático via WhatsApp, control de caja, fila de espera y reportes.',
          highlight: 'Integración nativa con WhatsApp.',
          cta: 'Más información'
        },
        {
          name: 'VibeCut',
          tag: 'Inteligencia Artificial',
          status: 'En desarrollo',
          description: 'App que usa IA para sugerir cortes de cabello personalizados basados en el rostro del cliente. Ideal para barberías y salones de belleza.',
          highlight: 'Generación de estilos en segundos.',
          cta: 'Más información'
        },
        {
          name: 'Escola Conectada',
          tag: 'Gestión Educativa',
          status: 'Disponible',
          description: 'Sistema de gestión escolar completo: matrículas, asistencia, calificaciones, comunicación con responsables y reportes pedagógicos en un solo lugar.',
          highlight: 'Comunicación integrada con responsables.',
          cta: 'Más información'
        },
        {
          name: 'Lumen',
          tag: 'Educación & Filosofía',
          status: 'Disponible',
          description: 'Dashboard educacional interactivo para exploración histórica y filosófica del pensamiento político occidental, mapeando pensadores a través de nueve ejes analíticos.',
          highlight: 'Taxonomía multidimensional con 9 ejes analíticos.',
          cta: 'Más información'
        }
      ]
    },
    howItWorks: {
      title: '',
      titleHighlight: 'Simple así.',
      steps: [
        {
          title: 'Elige tu producto',
          description: 'Explora nuestro catálogo y encuentra la solución ideal para tu negocio.'
        },
        {
          title: 'Suscríbete y configura',
          description: 'En pocos minutos, tu herramienta está configurada y lista para usar.'
        },
        {
          title: 'Crecer con tecnología',
          description: 'Usa recursos de IA, automatizaciones e integraciones para escalar tu negocio sin esfuerzo.'
        }
      ]
    },
    testimonials: {
      title: 'Lo que',
      titleHighlight: 'dicen nuestros clientes.',
      items: [
        {
          quote: 'Groom cambió completamente cómo gestiono mi barbería. El agendamiento por WhatsApp solo ya paga la inversión.',
          name: 'Carlos Mendes',
          role: 'Propietario',
          company: 'Barbería StyleCut'
        },
        {
          quote: 'ZoneMap nos ayudó a visualizar nuestra operación de logística de una manera que ninguna otra herramienta pudo.',
          name: 'Fernanda Oliveira',
          role: 'Directora de Operaciones',
          company: 'LogFlow'
        },
        {
          quote: 'Escola Conectada simplificó toda la comunicación con los padres y redujo nuestro trabajo administrativo a la mitad.',
          name: 'Ricardo Souza',
          role: 'Director',
          company: 'Colegio Horizonte'
        }
      ]
    },
    finalCTA: {
      title: '¿Listo para tener tecnología de vanguardia en tu negocio?',
      subtitle: 'Explora nuestro catálogo y encuentra el software ideal para ti.',
      emailPlaceholder: 'Tu mejor correo electrónico',
      button: 'Quiero conocer los productos',
      disclaimer: 'No se requiere tarjeta de crédito. Comienza tu prueba gratuita hoy.'
    },
    footer: {
      tagline: 'Tecnología que trabaja por ti.',
      copyright: '© 2025 TechMinds. Todos los derechos reservados.',
      productsTitle: 'Productos',
      productLinks: ['Groom', 'VibeCut', 'Escola Conectada', 'Lumen'],
      companyTitle: 'Empresa',
      companyLinks: ['Sobre nosotros', 'Contacto'],
      legalTitle: 'Legal',
      legalLinks: ['Términos de uso', 'Privacidade']
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