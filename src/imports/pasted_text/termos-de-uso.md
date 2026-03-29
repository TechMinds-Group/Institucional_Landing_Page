Create a new standalone page at the route /termos-de-uso to replace 
the current placeholder page. Keep the exact same dark design system 
as the main landing page (colors, typography, navbar, footer).

This page displays the Terms and Conditions for each TechMinds 
product. The user selects a product via cards at the top, and the 
corresponding terms content loads below without a page reload.

---

NAVBAR & FOOTER:
- Identical to the main landing page.
- All existing interactions fully functional.

---

HERO HEADER:
- Dark background: #0D0D0D.
- Centered content:
  · Small label: "Legal" — muted cyan (#5BC8C0), 
    13px, letter-spacing 0.1em, uppercase.
  · Page title: "Termos e Condições de Uso" — gradient 
    text (purple #7B5EA7 → cyan #5BC8C0).
  · Subtitle: "Selecione o produto para visualizar 
    os termos correspondentes." — muted text, 15px.
- Padding: 80px top, 48px bottom.
- Thin horizontal gradient divider below (purple → cyan 
  → transparent).

---

PRODUCT SELECTOR — CARDS:
- Display 4 product cards in a responsive horizontal row 
  below the hero header, centered on the page.
- Max-width: 900px, centered.
- Card style (inactive state):
  · Background: #111318.
  · 1px border: var(--color-border-tertiary).
  · Border radius: 12px.
  · Padding: 20px 24px.
  · Product tag badge (top, small — same style as product 
    cards on main page).
  · Product name: font-size 16px, font-weight 600, 
    color: white.
  · Last updated date: font-size 12px, muted text below 
    the name.
  · cursor: pointer.
  · Transition: 200ms ease on border and background.

- Card style (active/selected state):
  · Background: #1A1A2E.
  · 1px border with purple-to-cyan gradient accent.
  · Product name color: gradient text (#7B5EA7 → #5BC8C0).
  · Subtle cyan glow: box-shadow 0 0 16px rgba(91,200,192,0.15).

- On click: update the active card and replace the content 
  area below with the selected product's terms, with a 
  smooth fade transition (opacity 0 → 1, 200ms).

- Default selected product on page load: VibeCut 
  (first card, pre-selected).

PRODUCT CARDS DATA:
  · VibeCut
    Tag: Inteligência Artificial
    Last updated: 11 de fevereiro de 2026

  · Groom
    Tag: Gestão & Automação
    Last updated: Em breve
    State: disabled — card is visible but not clickable.
    Style: opacity 0.4, cursor: not-allowed.
    Badge overlay: "Termos em elaboração" in muted text,
    font-size 11px, centered below the product name.

  · ZoneMap
    Tag: Mapas Interativos
    Last updated: Em breve
    State: disabled — same treatment as Groom above.

  · Escola Conectada
    Tag: Gestão Educacional
    Last updated: Em breve
    State: disabled — same treatment as Groom above.

---

CONTENT AREA:
- Rendered below the product cards, separated by 48px margin.
- Max-width: 780px, centered horizontally.
- Background: #0D0D0D.
- Padding: 48px horizontal on desktop, 24px on mobile.

TYPOGRAPHY RULES:
- Section numbers + titles (e.g. "1. ACEITAÇÃO DOS TERMOS"):
  · font-size: 18px, font-weight: 600, color: white.
  · Margin-top: 48px, margin-bottom: 16px.
  · 2px left border in purple-to-cyan gradient, 
    12px left padding.

- Body paragraphs:
  · font-size: 16px, line-height: 1.8.
  · Color: var(--color-text-secondary).
  · Margin-bottom: 16px.

- Bold text: render as <strong>, color: white.

- Numbered sub-lists: <ol> decimal, left padding 24px,
  16px font-size, line-height 1.8, margin-bottom 8px per item.

- Bullet sub-lists: <ul> list-style none, each item prefixed 
  with a cyan (·) dot (color: #5BC8C0).

- "VibeCut" and "TechMinds" always rendered white, 
  font-weight 600.

- Contact email at the end of each section 12:
  · Replace "techminds.dev@gmail.com" with 
    "compliance@techminds.net.br".
  · Render as a clickable mailto link, color: #5BC8C0, 
    hover underline.

---

VIBECUT TERMS CONTENT:
Render the full content of the provided Terms and Conditions 
document exactly as written, in section order (introduction 
+ sections 1 through 12), applying the typography rules above.
Replace all occurrences of "techminds.dev@gmail.com" with 
"compliance@techminds.net.br".

GROOM, ZONEMAP, ESCOLA CONECTADA TERMS CONTENT:
These products are disabled — no content rendering needed 
for them at this stage.

---

TABLE OF CONTENTS (sticky sidebar — desktop only):
- Visible only on screens wider than 1100px.
- Sticky sidebar on the left of the content area, 
  width: 200px, top: 100px.
- Jump links to each of the 12 sections.
- font-size: 13px, muted text, hover color: cyan.
- Active section highlighted: cyan + 2px left border.
- Sidebar updates automatically when the product changes 
  — re-renders jump links based on the active product's 
  section titles.
- Hidden on screens below 1100px.

---

URL BEHAVIOR:
- Each product selection updates the URL query param:
  /termos-de-uso?produto=vibecut
  /termos-de-uso?produto=groom (disabled, not reachable)
- On page load, read the query param and pre-select the 
  corresponding product card if valid. Default to VibeCut 
  if param is absent or invalid.
- This allows direct linking to a specific product's terms.

---

BACK TO TOP BUTTON:
- Fixed, bottom-right, 24px from edges.
- Dark circular button (#1A1A2E), 1px cyan border, 44px.
- Arrow up icon, white, 16px.
- Visible only after 300px scroll.
- Smooth scroll to top on click.
- Fade in/out 200ms.