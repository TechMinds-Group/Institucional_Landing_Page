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
    contactsTitle: string;
    contacts: {
      careers: string;
      support: string;
      compliance: string;
    };
    copyHint: string;
    copied: string;
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
      contactsTitle: 'Contatos por área',
      contacts: {
        careers: 'Carreiras',
        support: 'Suporte',
        compliance: 'Privacidade e conformidade'
      },
      copyHint: 'Clique para copiar',
      copied: 'Copiado!',
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
      contactsTitle: 'Contacts by area',
      contacts: {
        careers: 'Careers',
        support: 'Support',
        compliance: 'Privacy and conformity'
      },
      copyHint: 'Click to copy',
      copied: 'Copied!',
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
      contactsTitle: 'Contactos por área',
      contacts: {
        careers: 'Carreras',
        support: 'Soporte',
        compliance: 'Privacidad y conformidad'
      },
      copyHint: 'Haz clic para copiar',
      copied: '¡Copiado!',
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