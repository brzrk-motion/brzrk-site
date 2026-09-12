---
name: brzrk site
description: Editorial-industrial design system for the brzrk public marketing site
colors:
  ink-deep: "oklch(0.075 0.004 255)"
  ink: "oklch(0.105 0.006 255)"
  graphite: "oklch(0.145 0.007 255)"
  steel: "oklch(0.205 0.009 255)"
  rule: "oklch(0.47 0.011 255)"
  rule-strong: "oklch(0.58 0.012 255)"
  paper: "oklch(0.955 0.012 85)"
  paper-muted: "oklch(0.78 0.012 80)"
  paper-subtle: "oklch(0.68 0.012 80)"
  signal: "oklch(0.72 0.19 48)"
  signal-hot: "oklch(0.79 0.17 54)"
typography:
  display:
    fontFamily: '"IBM Plex Sans", system-ui, -apple-system, sans-serif'
    fontSize: "clamp(2.8rem, 8vw, 6.8rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: '"IBM Plex Sans", system-ui, -apple-system, sans-serif'
    fontSize: "clamp(2rem, 4vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"IBM Plex Sans", system-ui, -apple-system, sans-serif'
    fontSize: "clamp(1.1rem, 2vw, 1.35rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  body:
    fontFamily: '"IBM Plex Sans", system-ui, -apple-system, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: '"IBM Plex Mono", ui-monospace, monospace'
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.06em"
  meta:
    fontFamily: '"IBM Plex Mono", ui-monospace, monospace'
    fontSize: "0.62rem"
    fontWeight: 600
  meta-sm:
    fontSize: "0.65rem"
  meta-md:
    fontSize: "0.66rem"
  meta-lg:
    fontSize: "0.68rem"
  caption:
    fontSize: "0.72rem"
  ui:
    fontSize: "0.75rem"
  note:
    fontSize: "0.76rem"
  control:
    fontSize: "0.78rem"
  nav-sm:
    fontSize: "0.69rem"
  nav:
    fontSize: "0.82rem"
  lead:
    fontSize: "0.84rem"
  body-sm:
    fontSize: "0.88rem"
  body-md:
    fontSize: "0.9rem"
  subhead:
    fontSize: "1.05rem"
  subhead-lg:
    fontSize: "1.12rem"
  section:
    fontSize: "1.2rem"
  display-md:
    fontSize: "1.25rem"
  small:
    fontSize: "0.8rem"
  title-sm:
    fontSize: "1.1rem"
  quote:
    fontSize: "1.4rem"
  emphasis-lg:
    fontSize: "1.35rem"
  hero-shared:
    fontSize: "clamp(2.8rem, 7vw, 6rem)"
  hero-product:
    fontSize: "clamp(3.2rem, 7vw, 5.9rem)"
  hero-about:
    fontSize: "clamp(3rem, 7.2vw, 5.9rem)"
  hero-contact:
    fontSize: "clamp(3rem, 6vw, 4.8rem)"
  intro:
    fontSize: "clamp(1.08rem, 2vw, 1.35rem)"
  intro-wide:
    fontSize: "clamp(1.1rem, 2vw, 1.35rem)"
  intro-about:
    fontSize: "clamp(1.15rem, 2vw, 1.45rem)"
  section-title-sm:
    fontSize: "clamp(2.4rem, 5vw, 4.6rem)"
  section-title-md:
    fontSize: "clamp(2.5rem, 5vw, 4.6rem)"
  section-title:
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
  section-title-lg:
    fontSize: "clamp(2.5rem, 5vw, 4.8rem)"
  pullquote:
    fontSize: "clamp(1.35rem, 2.4vw, 2rem)"
  body-lead:
    fontSize: "clamp(1.05rem, 2vw, 1.3rem)"
  body-lead-sm:
    fontSize: "clamp(1.05rem, 2vw, 1.32rem)"
rounded:
  none: "0"
spacing:
  space-1: "0.5rem"
  space-2: "0.75rem"
  space-3: "1rem"
  space-4: "1.5rem"
  space-5: "2rem"
  space-6: "3rem"
  space-7: "4.5rem"
  space-8: "7rem"
  gutter: "clamp(1rem, 4vw, 3rem)"
  max-width: "78rem"
  content-width: "44rem"
components:
  button-default:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 0.9rem"
    height: "44px"
  button-default-hover:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.paper}"
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 0.9rem"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.signal-hot}"
    textColor: "{colors.ink-deep}"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.signal-hot}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 0.15rem"
---

# Design System: brzrk site

This document defines the visual system and public claims boundary for the brzrk company site. Tokens are implemented in `src/index.css` and `src/styles/tokens.stylex.ts`; shared composition lives in `src/styles/shared.stylex.ts`.

## Overview

**Creative North Star: "The Editorial-Industrial Index"**

A near-black editorial canvas with graphite and steel surfaces, warm-white type, and orange used only as signal. The site should feel authored, technical, and direct—not like a glassy SaaS template. Asymmetric grids and indexed elements organize the page. Large hierarchy stops short of swallowing the viewport.

**Key Characteristics:**

- Hard rules, square geometry, minimal radius, no decorative glow or gradient.
- Orange is signal, not a decorative fill system.
- Structural borders remain visible at all times.
- Motion is brief and structural; reduced-motion preferences disable it.
- Shipped UI captures only—no invented screenshots or fake metrics.

## Colors

A cool near-black field with warm paper type and a single orange accent reserved for action and status.

### Primary

- **Signal Orange** (oklch(0.72 0.19 48)): Active navigation, primary buttons, indices, status markers, and selection highlight. Used sparingly—its rarity is the point.

### Neutral

- **Ink Deep** (oklch(0.075 0.004 255)): Page canvas and deepest background.
- **Ink** (oklch(0.105 0.006 255)): Primary content field on inner pages.
- **Graphite** (oklch(0.145 0.007 255)): Raised surfaces, honesty blocks, evidence frames.
- **Steel** (oklch(0.205 0.009 255)): Hover fills on secondary controls and scrollbar thumb.
- **Rule** (oklch(0.47 0.011 255)): Standard structural borders and dividers. Lightened to meet 3:1 non-text contrast on ink-deep.
- **Rule Strong** (oklch(0.58 0.012 255)): Section breaks, frame chrome, button borders.
- **Paper** (oklch(0.955 0.012 85)): Primary type on dark surfaces.
- **Paper Muted** (oklch(0.78 0.012 80)): Body copy and secondary prose.
- **Paper Subtle** (oklch(0.68 0.012 80)): Kickers, meta, footer descriptors.

### Named Rules

**The One Voice Rule.** Signal orange appears on ≤10% of any given screen. It marks action, index, or status—not decoration.

**The Visible Rule Rule.** Structural borders (`--rule`, `--rule-strong`) must remain visible. Do not soften the grid into borderless cards.

## Typography

**Display Font:** IBM Plex Sans (with system-ui fallback)
**Body Font:** IBM Plex Sans (with system-ui fallback)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace fallback)

**Character:** Editorial sans for hierarchy; mono for indices, labels, status lines, and buttons. Tight negative tracking on headlines; uppercase mono labels with wide letter-spacing.

### Hierarchy

- **Display** (600, clamp(2.8rem, 8vw, 6.8rem), 1.02): Hero headlines; max impact without swallowing the viewport.
- **Headline** (600, clamp(2rem, 4vw, 3.75rem), 1.02): Section titles and page headers.
- **Title** (600, clamp(1.1rem, 2vw, 1.35rem), 1.02): Subsection headings.
- **Body** (400, 1rem, 1.65): Prose and descriptions; intro text may scale to clamp(1.08rem, 2vw, 1.35rem).
- **Label** (600, 0.7–0.78rem, uppercase, 0.06em tracking): Index numbers, kickers, button text, status lines, frame chrome.
- **Meta scale:** 0.62rem (chrome), 0.65–0.68rem (indices, status), 0.72rem (captions), 0.76–0.84rem (notes, controls, nav), 0.88–1.25rem (body emphasis through display-md), 1.35–1.4rem (emphasis and quote).
- **Fluid clamps (tokens in `tokens.stylex.ts`):** `fontHeroShared`, `fontHeroProduct`, `fontHeroAbout`, `fontHeroContact`, `fontIntro`, `fontIntroWide`, `fontIntroAbout`, `fontSectionTitleSm` through `fontSectionTitleLg`, `fontPullquote`, `fontBodyLead`, `fontBodyLeadSm`.

### Named Rules

**The Index Label Rule.** Section and page kickers use mono uppercase with an orange index prefix (`00`, `01`, …) where applicable.

## Layout

- **Container:** `min(100%, calc(78rem + 2 × gutter))` centered with `clamp(1rem, 4vw, 3rem)` inline padding.
- **Prose width:** `--content-width: 44rem` for body copy; intro blocks may extend to ~42rem.
- **Section rhythm:** Vertical padding uses `--space-7` (4.5rem) and `--space-8` (7rem); sections separated by 1px `--rule-strong` top borders.
- **Grids:** Asymmetric two-column splits for section headings and page intros; collapse to single column at 720px and below.
- **Full-bleed hero:** Home hero spans `100vw` with negative margin breakout; content band capped at ~67rem.
- **Breakpoints:** 1050px (nav numbers hide), 800px (contact grid), 720px (nav stack, column collapse), 400px (full-width buttons).
- **Overflow:** No horizontal scroll from 320px upward; `overflow-x: clip` on page shells.

## Elevation & Depth

Flat-by-default. Depth comes from tonal layering (ink-deep → ink → graphite → steel), not shadows. No box-shadow vocabulary. Hover states shift background to steel or signal; active nav fills with signal orange.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Depth is conveyed through surface color steps and visible rules, never glow or gradient fills.

## Shapes

- **Corner radius:** 0 everywhere—buttons, inputs, frames, cards. Square geometry is non-negotiable.
- **Borders:** 1px solid rules on all interactive and container elements; honesty blocks use 4px left accent in signal.
- **Evidence frames:** Bordered graphite containers with mono uppercase chrome bar and figcaption strip.

## Components

### Buttons

- **Shape:** Square (0 radius), 1px `--rule-strong` border, min-height 44px.
- **Default:** Transparent background, paper text, mono 0.78rem/600; hover fills steel.
- **Primary:** Signal fill with ink-deep text; hover shifts to signal-hot.
- **Text/Ghost:** Transparent border, signal-hot text; hover returns to paper without fill.
- **Layout:** CTA groups flex-wrap with `--space-3` gap; stack full-width below 400px.

### Navigation

- **Header:** Sticky bar with semi-transparent ink-deep backdrop; logo left, indexed links right.
- **Links:** 7.25rem cells with mono index numbers (hidden below 1050px); active state inverts to signal fill with ink-deep text.
- **Mobile:** Five-column grid at 720px; links shrink to 44px min-height.

### Cards / Containers

- **Honesty block:** Graphite fill, rule-strong border, 4px signal left accent, mono uppercase label.
- **Evidence frame:** Graphite background, rule-strong outer border, rule dividers on chrome and caption bars.
- **Problem list:** Rule-bordered rows with em-dash signal prefix.

### Inputs / Fields

- **Style:** Full-width, 48px min-height, 0 radius, 1px rule-strong border, ink-deep background, paper text.
- **Focus:** 3px signal-hot outline with 3px offset (global `:focus-visible`).
- **Textarea:** Min-height 11rem, vertical resize only.

### Signature: Screenshot Carousel

One carousel on `/playblast` leads with CRM and invoice UI (`clients.png`, `invoices.png`), then review (`review.png`, `compare.png`). Ban invented UI, fake metrics, and fake logos in screenshots.

## Do's and Don'ts

### Do:

- **Do** use shipped Playblast captures only (`clients.png`, `invoices.png`, `review.png`, `compare.png`).
- **Do** keep interactive targets at least 44px where space allows.
- **Do** declare screenshot intrinsic dimensions (1440×900) and lazy-load below-fold images.
- **Do** allow the vgpu shader as a restrained atmospheric layer on page heroes when WebGPU is available and reduced motion is not requested, with flat graphite fallback otherwise.

### Don't:

- **Don't** use decorative glow, gradient fills, or glassy SaaS patterns.
- **Don't** invent testimonials, customer counts, adoption numbers, or performance claims.
- **Don't** show $0 fund metrics, empty activity dashboards, or supporter theater on `/fund`.
- **Don't** use a separate clients/invoices media block outside the Playblast carousel.

## Interaction and accessibility

- `:focus-visible` uses a 3px orange outline with offset.
- Semantic headings, lists, nav landmarks, figures, and form labels are required.
- Layouts must not horizontally overflow at 320, 375, 768, or 1440px.
- Motion is brief and structural (140ms ease transitions, 500ms reveal); `prefers-reduced-motion` disables it and skips the WebGPU hero shader.

## Shader

The existing vgpu shader may appear as a restrained atmospheric layer on page heroes across the site when WebGPU is available and reduced motion is not requested. Content and structural rules remain dominant. The fallback is a flat graphite field rather than a decorative CSS gradient.

## Portfolio scope

Playblast only. Nightshift, Banshee Voice, Owner Operator, and internal infrastructure are not public products. Navigation: Index · Playblast · Fund · About · Contact. `/products` redirects to `/playblast`.

## Development fund

The fund is explicitly pre-launch and not yet open. Do not show $0 metrics, empty activity dashboards, or supporter theater. Keep the planned recognition tiers and full disclaimer visible. GitHub Sponsors links lead to `SPONSORS.md`; there is no fake checkout.

## Deployment

GitHub Pages uses the `/brzrk-site/` base path, configured by its deployment workflow and consumed by the router. Root-domain deployments such as Cloudflare Pages use `/`. Set `VITE_SITE_URL` at build time so canonical and Open Graph URLs match the deployment origin. GitHub Pages live URL: `https://brzrk-motion.github.io/brzrk-site/`.

## Claims boundary

May say:

- brzrk is an independent product company building focused tools.
- Playblast is a self-hosted MVP release candidate; the core workflow exists and adoption checks continue.
- Products are free/open source/self-hosted only where stated.
- Sponsorship funds maintenance and development; it does not buy support, SLA, hosting, installation, roadmap control, or priority treatment.
- Founder craft experience informs product judgment; brzrk is not positioned as a motion studio.
- Contact is `brzrk@brzrkmotion.com`.

Must not say:

- Ready for studios everywhere, commercially validated, or production-proven.
- "Install today" as if broad clean-install validation is complete.
- brzrk hosts Playblast or provides paid support, SLA, managed operations, or founder installation.
- Internal infrastructure is an external product.

No invented screenshots, testimonials, customer counts, adoption numbers, or performance claims. Use shipped UI captures only (`clients.png`, `invoices.png`, `review.png`, `compare.png`).
