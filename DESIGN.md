---
name: Crystal Salt Company
description: Bilingual (Arabic/English) credibility site for an Egyptian bulk salt manufacturer and exporter.
colors:
  assay-blue: "#026CE8"
  assay-blue-pressed: "#0156BD"
  brine-cyan: "#00BFFF"
  brine-cyan-light: "#1AD1FF"
  seal-gold: "#E59819"
  whatsapp-green: "#12823F"
  paper-white: "#FFFFFF"
  ice-wash: "#F4F9FD"
  ice-tint: "#EAF3FB"
  ice-rule: "#D8E8F7"
  ink-navy: "#0F1E36"
  ink-slate: "#1E2E4A"
  body-slate: "#334466"
  muted-slate: "#4B5E7E"
  caption-slate: "#566987"
  faint-slate: "#5E7090"
  hairline: "#CBD7E8"
  divider: "#E2ECF7"
  mist: "#F1F6FB"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.4rem, 4.4vw, 3.8rem)"
    fontWeight: 800
    lineHeight: 1.14
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 2.7rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 800
    lineHeight: 1.3
  body:
    fontFamily: "Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "0.08em"
  arabic:
    fontFamily: "Cairo, Plus Jakarta Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
rounded:
  sm: "8px"
  md: "14px"
  lg: "20px"
  xl: "28px"
  full: "9999px"
spacing:
  section: "90px"
  container-gutter: "20px"
  card: "28px"
  card-lg: "34px"
  grid-gap: "24px"
components:
  button-primary:
    backgroundColor: "{colors.assay-blue}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.full}"
    padding: "11px 22px"
  button-outline:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.assay-blue}"
    rounded: "{rounded.full}"
    padding: "11px 22px"
  button-outline-hover:
    backgroundColor: "{colors.assay-blue}"
    textColor: "{colors.paper-white}"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.full}"
    padding: "11px 22px"
  input:
    backgroundColor: "{colors.ice-wash}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.md}"
    padding: "13px 18px"
  input-focus:
    backgroundColor: "{colors.paper-white}"
  card:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.body-slate}"
    rounded: "{rounded.lg}"
    padding: "28px"
  nav-link:
    textColor: "{colors.body-slate}"
    rounded: "{rounded.md}"
    padding: "8px 14px"
  nav-link-active:
    backgroundColor: "{colors.ice-tint}"
    textColor: "{colors.assay-blue}"
  section-tag:
    textColor: "{colors.assay-blue}"
    typography: "{typography.label}"
---

# Design System: Crystal Salt Company

## 1. Overview

**Creative North Star: "The Assay Certificate"**

The site should read like a laboratory analysis certificate: clean white paper, exact figures set in blue ink, and every claim backed by a number. A buyer who has never heard of Crystal Salt opens it on a phone and, within a minute, sees purity percentages, grain sizes, packaging weights and loading ports laid out as clearly as a stamped lab sheet. The design's confidence comes from that precision, not from decoration.

The surface is overwhelmingly white and ice-pale, with one confident blue carrying all the meaning (links, figures, actions, the active state). Warmth comes from shape rather than color: pill-shaped buttons, softly rounded cards, gentle blue-tinted shadows that lift content off the page, and real photographs of the refinery, stockpiles and ports. The result should feel friendly to touch and exact to read.

This system explicitly rejects the three looks named in PRODUCT.md: the **cheap Alibaba-style supplier page** (clutter, badges, stock photos, "best price!!" energy), the **over-designed or flashy site** (effects that compete with the facts), and the **cold corporate site** (faceless, no story, no people). Arabic (RTL, Cairo) and English (LTR, Plus Jakarta Sans) are equal citizens of the same system.

**Key Characteristics:**
- White paper, blue ink: near-monochrome surfaces with a single strong blue for meaning.
- Figures are the heroes: specifications, percentages and tonnage get the strongest visual weight.
- Friendly, tactile controls: pill buttons, 14 to 28px radii, soft lift on hover.
- Soft, blue-tinted elevation; never grey or black shadows.
- Real photography of real places; no stock imagery.
- Bilingual by construction: every component mirrors cleanly between RTL and LTR.

## 2. Colors: The Certificate Palette

White paper and slate-navy ink, with a single assay blue as the voice and a cyan partner used only inside gradients and small highlights.

### Primary
- **Assay Blue** (#026CE8): The ink of the certificate. Primary buttons, links, section tags, active navigation, key figures in spec tables, focus rings. It is the only saturated color that carries meaning.
- **Assay Blue Pressed** (#0156BD): Hover and pressed state for blue text and solid blue surfaces.

### Secondary
- **Brine Cyan** (#00BFFF): Faint radial glows in the hero background only. It is too light to carry white text, so it is no longer part of the button or stats-band gradient (those now run from #0077CC to Assay Blue, keeping white text at 4.7:1 or better).
- **Brine Cyan Light** (#1AD1FF): Small icon accents on dark surfaces (map header pin, footer brochure icons).

### Tertiary
- **Seal Gold** (#E59819): Reserved for rare certification or award marks, like the gold seal on a certificate. Currently almost unused; keep it that way.
- **WhatsApp Green** (#12823F): Functional only, for WhatsApp buttons, the floating chat button and the mobile contact bar. Deliberately darker than the WhatsApp brand green (#25D366) so white labels pass WCAG AA (4.9:1). Never used decoratively.

### Neutral
- **Paper White** (#FFFFFF): Default page and card surface.
- **Ice Wash** (#F4F9FD): Alternate section background, footer, resting input fill.
- **Ice Tint** (#EAF3FB): Hover and active background for navigation links and dropdown items.
- **Ice Rule** (#D8E8F7): Light rules and tinted fills inside cards.
- **Ink Navy** (#0F1E36): Headings, page titles, strong figures.
- **Ink Slate** (#1E2E4A): Form labels and emphasized secondary text.
- **Body Slate** (#334466): Default body text.
- **Muted Slate** (#4B5E7E): Section subtitles and supporting paragraphs.
- **Caption Slate** (#566987): Captions, metadata, the brand sub-line.
- **Faint Slate** (#5E7090): Footer bio, brochure notes and other quiet text; the lightest grey allowed for readable text (4.7:1 on Ice Wash).
- **Hairline** (#CBD7E8): Outline-button borders on light sections and stronger dividers.
- **Divider** (#E2ECF7): The default 1px border on cards, inputs, sections and the header.
- **Mist** (#F1F6FB): Faint fills behind spec rows.

### Named Rules
**The One Ink Rule.** Assay Blue is the only color that means something. If a second saturated color appears outside WhatsApp buttons or a rare gold seal, it must justify itself or go.

**The Paper Rule.** Surfaces stay white or ice-pale. Dark navy panels are the exception (the product-page quote box, the map header), never the rhythm of the page.

**The Defined Token Rule.** Only use variables that exist in `:root`. The inline styles currently reference `--navy-900`, `--navy-950`, `--blue-600`, `--white` and `--gray-50`, none of which are defined, so those elements silently lose their color. Map them to Ink Navy, Assay Blue, Paper White and Ice Wash, or define them as aliases.

## 3. Typography

**Display Font:** Plus Jakarta Sans (with -apple-system, Segoe UI, Roboto, sans-serif)
**Body Font:** Plus Jakarta Sans (same stack)
**Arabic Font:** Cairo (with Plus Jakarta Sans, sans-serif), applied through `body.lang-ar`

**Character:** One friendly geometric sans for everything in English, paired with Cairo for Arabic because the two share the same open, rounded proportions. Hierarchy comes from weight (800 for headings versus 400 for body) and a clear size scale, not from a second typeface.

### Hierarchy
- **Display** (800, clamp(2.4rem, 4.4vw, 3.8rem), 1.14, -0.03em): The hero headline only.
- **Headline** (800, clamp(2rem, 3.2vw, 2.7rem), 1.2, -0.02em): Section titles and page-banner titles (the banner uses clamp(2.2rem, 3.8vw, 3.2rem)).
- **Title** (800, 1.35rem): Product names, card headings, split-section headings (2.1rem in split layouts).
- **Body** (400, 1rem, 1.65): Running text. Subtitles use 1.05 to 1.12rem at 1.7 line height in Muted Slate. Cap line length at about 65 to 75ch; the hero description is already held to 620px.
- **Label** (800, 0.82rem, 0.08em, uppercase): Section tags above headlines, product badges (0.72rem). English only; see the rule below.

### Named Rules
**The Figures-First Rule.** Numbers that prove quality (purity percentages, grain sizes, tonnage, ppm) are set bolder and larger than the words around them, often in Assay Blue. On the certificate, the result column is what you read first.

**The No-Tracking-in-Arabic Rule.** Letter-spacing and uppercase are forbidden on Arabic text: tracking breaks the joins between Arabic letters. `body.lang-ar` resets `letter-spacing` to 0 everywhere.

**The Readable-Order Rule.** Phone numbers, emails, and figures like "≥ 98.5% – 99.2%" must keep their left-to-right order inside Arabic pages. Wrap them in `<bdi dir="ltr">` or use `unicode-bidi: plaintext` so the ≥ and ≤ signs never mirror.

## 4. Elevation

This is a soft, lifted system. Cards, the header, the hero highlight card and form panels float slightly above the white page on diffuse shadows tinted with navy (rgba(10, 37, 64, …)), never grey or black. Elevation grows on interaction: cards rise a few pixels and their shadow deepens on hover, the way a certificate lifts when you pick it up. Borders stay on alongside the shadows (1px Divider), so edges remain crisp on low-contrast screens.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 2px 8px rgba(10, 37, 64, 0.04)`): Default for cards, inputs, badges, outline buttons.
- **Raised** (`box-shadow: 0 8px 24px rgba(10, 37, 64, 0.07)`): Stats band, dropdown menus.
- **Floating** (`box-shadow: 0 16px 40px rgba(10, 37, 64, 0.09)`): Hovered contact and pillar cards.
- **Lifted** (`box-shadow: 0 24px 60px rgba(10, 37, 64, 0.12)`): Hero highlight card, hovered product cards, map panel.
- **Blue Glow** (`box-shadow: 0 4px 18px rgba(2, 108, 232, 0.28)`, hover `0 8px 25px rgba(2, 108, 232, 0.4)`): Primary buttons only.
- **Focus Halo** (`box-shadow: 0 0 0 3px rgba(2, 108, 232, 0.12)`): Focused inputs.

### Named Rules
**The Navy-Tint Rule.** Every shadow is tinted with navy (10, 37, 64) or Assay Blue. A neutral grey or black shadow makes the page look dirty, which is the opposite of salt.

**The Lift-on-Touch Rule.** Hover lifts are small and fast: a translateY of -2px for buttons and -6px for product cards, with the 0.28s `cubic-bezier(0.2, 0.8, 0.2, 1)` ease. No bounce, no scaling of whole sections.

## 5. Components

### Buttons
Friendly and tactile: fully rounded pills that lift slightly when touched.
- **Shape:** Pill (9999px radius). Default padding 11px 22px at 0.9rem, weight 700; small 7px 16px at 0.82rem; large 14px 30px at 1rem. Icon and label sit 8px apart.
- **Primary:** #0077CC to Assay Blue gradient (135deg), Paper White text, Blue Glow shadow. Hover lifts -2px and deepens the glow.
- **Outline:** Paper White fill, Assay Blue text and 1.5px Assay Blue border, Rest shadow. Hover fills solid Assay Blue with white text and lifts -2px. On light sections inside content, the border may soften to Hairline with Ink Navy text.
- **WhatsApp:** WhatsApp Green fill, white text, soft green glow. Used for every "chat" or "send via WhatsApp" action and nothing else.
- **Language switch:** Small white pill with a 1.5px Hairline border, a flag and the language name ("عربي" / "English").

### Chips / Badges
- **Product badge:** White pill with a 1px Assay Blue border and blue uppercase label (0.72rem, 800), placed over the product photo's top corner (top-right in English, top-left in Arabic).
- **Filter buttons (gallery):** Pill toggles; the active filter is filled Assay Blue.

### Cards / Containers
- **Corner Style:** Gently rounded: 20px for product, pillar and contact cards; 28px for the hero highlight card and quote panels; 14px for gallery tiles and accordion items.
- **Background:** Paper White on white or Ice Wash sections.
- **Shadow Strategy:** Rest at rest, Floating or Lifted on hover (see Elevation).
- **Border:** 1px Divider; product cards switch the border to Assay Blue on hover.
- **Internal Padding:** 28px (pillar), 30px (contact), 34px (hero card), 26px (spec panels).

### Inputs / Fields
- **Style:** Ice Wash fill, 1.5px Divider stroke, 14px radius, 13px 18px padding, Ink Navy text at 0.95rem. Labels above in Ink Slate, 0.85rem, 700.
- **Focus:** Fill turns Paper White, border turns Assay Blue, Focus Halo appears.
- **Error / Disabled:** Not yet designed. Errors should use a full border and a text message, never color alone.

### Navigation
- **Top bar:** Thin Mist/Ice strip with location, phone and email on one side and legal links plus social icons on the other, 0.82rem.
- **Header:** Sticky, 94% white with an 18px backdrop blur and a hairline blue bottom border; the shadow deepens once the page scrolls. The logo tile and "CRYSTAL SALT" wordmark (the second word in Assay Blue) on one side; the menu, language switch, PDF and quote buttons on the other.
- **Links:** Body Slate, 0.92rem, 600, 14px-radius hit area; hover and active states fill Ice Tint with Assay Blue text.
- **Desktop (≥1280px):** Full menu; the brochure button is icon-only and the brand sub-line is hidden so everything fits the 1200px content width on one line. Nothing in the header may shrink or wrap.
- **Tablet and phone (<1280px):** The menu and header buttons collapse into a hamburger that opens a 320px side drawer (sliding from the right in English, from the left in Arabic) with "Call Sales Desk" and WhatsApp buttons at the bottom. Below 480px the logo tile is hidden and the text wordmark carries the name.
- **Phone (≤768px):** A fixed bottom bar with two equal buttons, Call Sales Desk (Assay Blue) and WhatsApp, replaces the floating chat bubble. It is the primary action on phones.

### Specification Panel (signature component)
The heart of "The Assay Certificate." A pale Mist or Ice Wash panel titled with a vial icon, holding a grid of small cells: the parameter name in Muted Slate above and the value in bold, with the headline figure (NaCl purity) larger and in Assay Blue. On product cards the same data appears as compact label/value rows. Values keep left-to-right reading order in Arabic.

## 6. Do's and Don'ts

### Do:
- **Do** lead every product and section with its proof: a purity figure, a spec table, a lab certificate photo or a real shipment. Evidence over claims.
- **Do** keep surfaces Paper White (#FFFFFF) or Ice Wash (#F4F9FD), and let Assay Blue (#026CE8) be the only color that carries meaning.
- **Do** use real photographs of the refinery, stockpiles, packaging lines and ports.
- **Do** use pill buttons (9999px) and 14 to 28px card radii, with navy-tinted shadows and small hover lifts (-2px buttons, -6px cards).
- **Do** design every component in both Arabic (RTL, Cairo) and English (LTR, Plus Jakarta Sans), and check both before shipping.
- **Do** keep numbers, units, phone numbers and emails in left-to-right order inside Arabic text (`<bdi dir="ltr">` or `unicode-bidi: plaintext`).
- **Do** keep pages light for slow mobile connections: compress and lazy-load images, and never make content depend on the hero video.
- **Do** meet WCAG AA contrast; body text is Body Slate (#334466) or darker on white.

### Don't:
- **Don't** make it look like a **cheap Alibaba-style supplier page**: no clutter, no walls of badges or logos, no stock photography, no pop-ups, no "best price!!" energy.
- **Don't** make it **over-designed or flashy**: no heavy animation, parallax, particle effects or decoration that competes with the product facts or slows the page.
- **Don't** make it a **cold corporate site**: no faceless stock images or empty mission-statement prose; show the factory, the ports and the people who answer the phone.
- **Don't** use gradient text (`background-clip: text`). The hero's `.text-gradient` line is a known deviation to replace with solid Assay Blue.
- **Don't** add more big-number stat bands ("24+ / 10,000+ / 999+"). Put figures in context, next to the product or shipment they prove.
- **Don't** repeat identical icon-heading-text card grids. Vary layout by content (spec panel, photo-led story, certificate image).
- **Don't** use `border-left` or `border-right` wider than 1px as a colored accent stripe.
- **Don't** use grey or black shadows, or any shadow without the navy or blue tint.
- **Don't** apply letter-spacing or uppercase to Arabic text.
- **Don't** reference CSS variables that aren't defined in `:root` (currently `--navy-900`, `--navy-950`, `--blue-600`, `--white`, `--gray-50`).
- **Don't** use em dashes in interface copy; use commas, colons or periods.
