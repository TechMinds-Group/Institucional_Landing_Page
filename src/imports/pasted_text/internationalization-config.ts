Add full internationalization (i18n) support to the existing TechMinds 
landing page, covering three languages: Portuguese (default), English, 
and Spanish.

DEFAULT LANGUAGE:
- Portuguese (pt-BR) must load automatically on first visit.
- No automatic browser detection — the user always starts in Portuguese.

LANGUAGE SWITCHER:
- Add a flag dropdown menu to the navbar, positioned to the left of 
  the "Get started" CTA button.
- Dropdown style: dark background (#1A1A2E), 1px cyan border (#5BC8C0), 
  8px border radius — consistent with the existing design system.
- Each option shows a country flag emoji + language name:
  🇧🇷 Português
  🇺🇸 English
  🇪🇸 Español
- Selected language is highlighted with the purple-to-cyan gradient 
  accent. No flags on the collapsed button — show only the language 
  code (PT / EN / ES) to keep the navbar clean.
- On mobile: the switcher moves inside the hamburger menu, listed 
  at the bottom of the nav links.

TRANSLATION SCOPE:
- Translate all visible text on the page: navbar links, headlines, 
  subheadlines, body copy, button labels, form placeholders, 
  footer links, and copyright line.
- Do NOT translate: the company name "TechMinds", the logo, 
  email addresses, and URLs.
- Translation approach: direct translation only — no cultural 
  adaptation or regional tone changes. Keep the same bold, 
  forward-thinking voice across all three languages.

TRANSLATIONS BY SECTION:

NAVBAR LINKS:
  PT: Produto | Soluções | Sobre | Clientes | Contato
  EN: Product | Solutions | About | Customers | Contact
  ES: Producto | Soluciones | Acerca | Clientes | Contacto

CTA BUTTON:
  PT: Começar agora
  EN: Get started
  ES: Comenzar ahora

HERO HEADLINE:
  PT: Sistemas de IA que transformam seu negócio inteiro.
  EN: AI systems that transform your entire business.
  ES: Sistemas de IA que transforman todo tu negocio.

HERO SUBHEADLINE:
  PT: Automatize processos, integre sistemas e escale com 
      inteligência artificial de ponta — para empresas de 
      qualquer tamanho.
  EN: Automate processes, integrate systems, and scale with 
      cutting-edge artificial intelligence — for businesses 
      of any size.
  ES: Automatiza procesos, integra sistemas y escala con 
      inteligencia artificial de vanguardia — para empresas 
      de cualquier tamaño.

HERO CTAs:
  PT: Agendar uma demo | Veja como funciona
  EN: Request a demo  | See how it works
  ES: Solicitar una demo | Ver cómo funciona

SOCIAL PROOF BAR:
  PT: Confiado por empresas de todos os tamanhos.
  EN: Trusted by companies of all sizes.
  ES: Con la confianza de empresas de todos los tamaños.

PROBLEM → SOLUTION TITLE:
  PT: A complexidade dos sistemas modernos não precisa 
      travar o seu crescimento.
  EN: The complexity of modern systems doesn't have to 
      slow you down.
  ES: La complejidad de los sistemas modernos no tiene 
      que frenar tu crecimiento.

PAIN POINTS:
  PT: Sistemas desconectados que não se comunicam. | 
      Processos manuais que geram erros e perda de tempo. | 
      Dificuldade de escalar sem a infraestrutura certa.
  EN: Disconnected systems that don't talk to each other. | 
      Manual processes wasting time and creating errors. | 
      Hard to scale without the right tech infrastructure.
  ES: Sistemas desconectados que no se comunican. | 
      Procesos manuales que generan errores y pérdida de tiempo. | 
      Dificultad para escalar sin la infraestructura adecuada.

SOLUTIONS:
  PT: Integração total de sistemas com IA. | 
      Automação de ponta a ponta desde o primeiro dia. | 
      Arquitetura escalável que cresce com o seu negócio.
  EN: Full system integration powered by AI. | 
      End-to-end process automation, from day one. | 
      Scalable architecture that grows with your business.
  ES: Integración total de sistemas con IA. | 
      Automatización de extremo a extremo desde el primer día. | 
      Arquitectura escalable que crece con tu negocio.

FEATURES SECTION TITLE:
  PT: Tudo o que seu negócio precisa, unificado.
  EN: Everything your business needs, unified.
  ES: Todo lo que tu negocio necesita, unificado.

FEATURE CARDS:
  PT: Automação com IA | Integração de Sistemas | 
      Insights em Tempo Real
  EN: AI Automation | Full System Integration | 
      Real-time Insights
  ES: Automatización con IA | Integración de Sistemas | 
      Información en Tiempo Real

HOW IT WORKS TITLE:
  PT: Pronto para usar em três etapas.
  EN: Up and running in three steps.
  ES: Listo para usar en tres pasos.

STEPS:
  PT: Mapear seus sistemas | Implantar IA | 
      Escalar com confiança
  EN: Map your systems | Deploy AI | 
      Scale with confidence
  ES: Mapear tus sistemas | Implementar IA | 
      Escalar con confianza

TESTIMONIALS TITLE:
  PT: O que nossos clientes dizem.
  EN: What our customers say.
  ES: Lo que dicen nuestros clientes.

FINAL CTA:
  PT: Pronto para transformar a forma como seu negócio opera?
  EN: Ready to transform how your business runs?
  ES: ¿Listo para transformar cómo opera tu negocio?

EMAIL PLACEHOLDER:
  PT: Seu e-mail corporativo
  EN: Your work email
  ES: Tu correo corporativo

FOOTER COPYRIGHT:
  PT: © 2025 TechMinds. Todos os direitos reservados.
  EN: © 2025 TechMinds. All rights reserved.
  ES: © 2025 TechMinds. Todos los derechos reservados.

TECHNICAL IMPLEMENTATION NOTES:
- Store all strings in a JSON i18n object with keys pt, en, es.
- On language switch, update all text nodes via JavaScript 
  without reloading the page.
- Persist the selected language in localStorage so it is 
  remembered on return visits.
- Update the HTML lang attribute on <html> dynamically: 
  pt-BR / en / es.
- Ensure text expansion is handled gracefully — Spanish and 
  Portuguese strings can be 20–30% longer than English; 
  buttons and cards must not break layout on any language.
- All animations and interactions remain unchanged across 
  language switches.