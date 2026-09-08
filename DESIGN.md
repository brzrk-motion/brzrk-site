# brzrk site — design tokens & claims boundary

Design reference for the public company site. Tokens are implemented in `src/index.css`; this document is the source of intent.

## Typography

| Token | Value | Use |
|-------|-------|-----|
| `--font-sans` | IBM Plex Sans, system-ui | Body, headings, UI |
| `--font-mono` | IBM Plex Mono, ui-monospace | Status labels, eyebrows, code |

Loaded via Google Fonts in `index.html`. Hierarchy: H1 hero (clamp 2.5–3.75rem), H2 section (clamp 1.5–2rem), body 1.0625rem / 1.6 line-height.

## Color (OKLCH) — dark palette

| Token | Value | Use |
|-------|-------|-----|
| `--color-bg` | `oklch(0.08 0.006 260)` | Page background — near black |
| `--color-bg-elevated` | `oklch(0.12 0.008 260)` | Cards, elevated surfaces |
| `--color-bg-muted` | `oklch(0.10 0.007 260)` | Footer, honesty blocks |
| `--color-surface` | `oklch(0.14 0.01 260)` | Hover states, subtle elevation |
| `--color-text` | `oklch(0.96 0.005 85)` | Primary text — white |
| `--color-text-muted` | `oklch(0.68 0.012 260)` | Body secondary — grey |
| `--color-text-subtle` | `oklch(0.52 0.01 260)` | Tertiary, notes |
| `--color-accent` | `oklch(0.68 0.18 45)` | Links, CTAs, chips — orange (accent only) |
| `--color-accent-hover` | `oklch(0.74 0.20 45)` | Hover state for accent |
| `--color-status-rc` | `oklch(0.68 0.14 145)` | Release candidate badges |

Aesthetic direction: dark, sharp, product-company — black base with grey, white, and restrained orange accents. Not motion-reel glamour or generic purple-gradient SaaS.

## Spacing & layout

- Max content width: `--max-width` 72rem; prose `--content-width` 42rem.
- Section rhythm: `--space-2xl` / `--space-3xl` vertical padding.
- Sticky nav with dark backdrop blur.
- Asymmetric hero: copy left, vgpu abstract shader full-bleed behind with left gradient scrim for legibility.

## Hero shader (vgpu)

- Package: [`vgpu`](https://github.com/vercel-labs/vgpu) with `hero-abstract.wgsl`
- Distinct from sibling `playblast-lp` shader: abstract ribbon fields, noise, soft volumetric orange/grey on black — not monitor/timeline motifs
- **Single layout-level instance** in `Layout.tsx` — fixed full-viewport background shared across all pages (one GPU context, persists across routing)
- Home: asymmetric left scrim (`layout--home`); inner pages: stronger vertical scrim (`layout--page`) for long-form readability while motion remains visible
- No WebGPU: CSS gradient fallback (`hero-shader-fallback`) matching palette
- Vite: `@vgpu/wgsl/loader-vite` plugin for `.wgsl` imports
- Respects `prefers-reduced-motion`: static frame when set

## Portfolio scope

**Playblast-only for now.** Nightshift, Banshee Voice, and Owner Operator are not shown on the public site. Nav: Home · Playblast · About · Contact. `/products` redirects to `/playblast`.

## Deployment base path

GitHub Pages project site: **`/brzrk-site/`**

Configured in:
- `vite.config.ts` → `base: '/brzrk-site/'`
- `src/main.tsx` → `BrowserRouter basename="/brzrk-site"`

Live URL (after deploy): `https://brzrk-motion.github.io/brzrk-site/`

## Claims boundary

What this site **may** say:

- brzrk is an **independent product company** building focused tools.
- Playblast is a **self-hosted MVP release candidate** — core workflow exists; adoption checks in progress.
- Products are **free / open source / self-hosted** where stated; status labels must match reality.
- Donations/sponsorships fund maintenance; they do **not** buy support, SLA, or roadmap control.
- Founder craft background informs product judgment; company is **not** positioned as a motion studio.
- Contact email: **brzrk@brzrk-motion.com** (never hello@brzrk.dev).

What this site **must not** say:

- "Ready for studios everywhere" or mass-adoption readiness.
- Commercially validated / production-proven (until true).
- "Install today" as if broad clean-install is done.
- brzrk hosts Playblast or offers paid support / SLA.
- Founder installs for you.
- Internal infra (riot, Bloodmachine, Battle Box) as external products.

## Imagery

No invented app screenshots. Playblast page links to the public marketing LP and GitHub. Hero uses procedural vgpu shader — no stock 3D assets.

## Non-goals (design)

- Custom CMS, domain-specific brand guidelines tome, motion-reel hero, SaaS conversion funnel.
- Showing products beyond Playblast until they are ready for public positioning.
