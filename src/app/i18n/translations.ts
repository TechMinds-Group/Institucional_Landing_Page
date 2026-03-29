export type Language = 'pt' | 'en' | 'es';

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
          status: 'Em desenvolvimento',
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
          name: 'ZoneMap',
          tag: 'Mapas Interativos',
          status: 'Em desenvolvimento',
          description: 'Plataforma de mapas interativos com design clean, moderno e flat para espaços extensos como zoológicos, jardins botânicos e eventos. Exibe pontos de interesse, eventos em tempo real e localização de atrações com navegação intuitiva.',
          highlight: 'Design flat e totalmente customizável.',
          cta: 'Saiba mais'
        },
        {
          name: 'Escola Conectada',
          tag: 'Gestão Educacional',
          status: 'Disponível',
          description: 'Sistema de gestão escolar completo: matrículas, frequência, notas, comunicação com responsáveis e relatórios pedagógicos — customizável para se adequar à realidade de cada instituição.',
          highlight: 'Customização sob medida para cada escola.',
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
      productLinks: ['Groom', 'VibeCut', 'ZoneMap', 'Escola Conectada'],
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
          name: 'ZoneMap',
          tag: 'Data Visualization',
          status: 'Available',
          description: 'Platform of interactive and customizable maps for businesses that need to visualize geographic data, routes, points of interest, or territories.',
          highlight: 'Fully customizable by segment.',
          cta: 'Learn more'
        },
        {
          name: 'Escola Conectada',
          tag: 'Educational Management',
          status: 'Available',
          description: 'Complete school management system: enrollments, attendance, grades, parent communication, and pedagogical reports in one place.',
          highlight: 'Integrated communication with parents.',
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
      productLinks: ['Groom', 'VibeCut', 'ZoneMap', 'Escola Conectada'],
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
          name: 'ZoneMap',
          tag: 'Visualización de Datos',
          status: 'Disponible',
          description: 'Plataforma de mapas interactivos y personalizables para negocios que necesitan visualizar datos geográficos, rutas, puntos de interés o territorios.',
          highlight: 'Totalmente personalizable por segmento.',
          cta: 'Más información'
        },
        {
          name: 'Escola Conectada',
          tag: 'Gestión Educativa',
          status: 'Disponible',
          description: 'Sistema de gestión escolar completo: matrículas, asistencia, calificaciones, comunicación con responsables y reportes pedagógicos en un solo lugar.',
          highlight: 'Comunicación integrada con responsables.',
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
      productLinks: ['Groom', 'VibeCut', 'ZoneMap', 'Escola Conectada'],
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