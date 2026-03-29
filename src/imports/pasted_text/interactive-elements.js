Keep the existing design, layout, colors, and content exactly as they 
are. Implement interactivity only — no visual or content changes.

---

SMOOTH SCROLL BEHAVIOR:
- Enable smooth scrolling globally on the page:
  html { scroll-behavior: smooth; }
- All scroll actions below must use smooth scroll with an offset 
  of 80px from the top to account for the sticky navbar height.

---

NAVBAR LINKS:
Map each link to its corresponding section via anchor scroll:
- "Produtos"   → #section-produtos
- "Segmentos"  → #section-segmentos (if not present, scroll to 
                 #section-produtos as fallback)
- "Sobre"      → #section-sobre
- "Clientes"   → #section-clientes (testimonials section)
- "Contato"    → #section-contato (final CTA / form section)

Assign the corresponding id attributes to each section if not 
already present.

---

NAVBAR — "Ver soluções" BUTTON:
- On click: smooth scroll to #section-produtos.

---

HERO — "Conhecer os produtos" BUTTON:
- On click: smooth scroll to #section-produtos.

---

HERO — "Falar com um especialista" BUTTON:
- On click: smooth scroll to #section-contato.

---

PRODUCT CARDS — "Saiba mais" BUTTONS:
Each button opens a modal with details specific to that product. 
Implement one modal component reused across all four products, 
populated dynamically with each product's data.

MODAL BEHAVIOR:
- Opens with a fade-in + slight scale-up animation 
  (transform: scale(0.95) → scale(1), opacity 0 → 1, 
  duration 200ms ease-out).
- Closes when: clicking the X button, clicking the backdrop, 
  or pressing the Escape key.
- Background scroll is locked while modal is open 
  (overflow: hidden on body).
- On close: reverse fade-out animation (150ms ease-in).

MODAL DESIGN:
- Dark background: #1A1A2E.
- 1px border with the existing purple-to-cyan gradient.
- Border radius: 16px.
- Max width: 680px, centered horizontally and vertically.
- Semi-transparent dark backdrop: rgba(0, 0, 0, 0.75) with 
  backdrop-filter: blur(4px).
- X close button top-right, styled consistently with the 
  existing design system.
- Scrollable content inside if it overflows vertically.

MODAL CONTENT STRUCTURE (in this order):
1. Product tag badge (top-left, same style as product cards).
2. Product name as modal headline (gradient text, same style 
   as existing section headlines).
3. Full description paragraph.
4. Illustration placeholder: a dark rounded rect (#0D0D0D) 
   with a centered label "Ilustração do sistema" in muted 
   text — to be replaced with real screenshots later.
5. "Funcionalidades" section heading.
6. Feature list: each item as a row with a small cyan checkmark 
   icon on the left and the feature text on the right.

MODAL DATA PER PRODUCT:

- BarberOS:
  Tag: Gestão & Automação
  Status: Em desenvolvimento
  Description: Sistema completo de gestão para barbearias, 
  desenvolvido para automatizar a operação do dia a dia e 
  eliminar processos manuais. Integração nativa com WhatsApp 
  para agendamentos automáticos, sem precisar de aplicativos 
  de terceiros.
  Features:
  · Agendamento automático via WhatsApp
  · Controle de caixa e fechamento diário
  · Gestão de fila de espera em tempo real
  · Relatórios gerenciais e histórico de clientes
  · Painel administrativo para múltiplos profissionais

- VibeCut:
  Tag: Inteligência Artificial
  Status: Disponível
  Description: Sistema com IA que analisa o formato do rosto 
  do cliente e gera sugestões visuais de cortes de cabelo 
  personalizados. Aumenta o engajamento no atendimento e 
  reduz a indecisão na cadeira.
  Features:
  · Análise facial por IA em segundos
  · Geração de sugestões visuais de corte personalizadas
  · Histórico de estilos por cliente
  · Interface intuitiva para uso no salão ou pelo próprio cliente
  · Customizável com o catálogo de cortes da sua barbearia

- ZoneMap:
  Tag: Mapas Interativos
  Status: Disponível
  Description: Plataforma de mapas interativos com design 
  clean, moderno e flat para espaços extensos como zoológicos, 
  jardins botânicos, parques e eventos. Permite que visitantes 
  explorem o local, encontrem pontos de interesse e acompanhem 
  eventos em tempo real.
  Features:
  · Mapa interativo com design flat e moderno
  · Cadastro e exibição de pontos de interesse customizados
  · Eventos em tempo real com localização no mapa
  · Navegação intuitiva por categorias e filtros
  · Totalmente customizável para qualquer tipo de espaço

- Escola Conectada:
  Tag: Gestão Educacional
  Status: Disponível
  Description: Sistema de gestão escolar completo que 
  centraliza matrículas, frequência, notas, comunicação com 
  responsáveis e relatórios pedagógicos em uma única 
  plataforma. Customizável para se adequar à grade e aos 
  processos de cada instituição.
  Features:
  · Gestão de matrículas e cadastro de alunos
  · Controle de frequência e notas por turma
  · Comunicação direta com pais e responsáveis
  · Relatórios pedagógicos e administrativos
  · Customização sob medida para cada instituição

---

FINAL CTA SECTION:
- The email input + "Quero conhecer os sistemas" button should 
  NOT submit a form yet — no backend is connected.
- On click: validate that the email field is not empty and 
  follows a valid email format.
  · If invalid: show an inline error message below the field — 
    "Por favor, insira um e-mail válido." — in red/coral, 
    consistent with the design system.
  · If valid: replace the button with a success message — 
    "Recebemos seu contato! Em breve nossa equipe 
    entrará em touch." — in cyan, with a soft fade-in.

---

GENERAL INTERACTION POLISH:
- All buttons must have a clear hover state: slight brightness 
  increase or glow consistent with the existing gradient style.
- All clickable elements must use cursor: pointer.
- Navbar links must have a subtle underline or opacity change 
  on hover to confirm they are interactive.
- Focus states must be visible for accessibility 
  (outline using the cyan accent color).