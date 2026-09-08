# brzrk site — design tokens & claims boundary

Design reference for the public company site. Tokens are implemented in `src/index.css`; this document is the source of intent.

## Typography

| Token | Value | Use |
|-------|-------|-----|
| `--font-sans` | IBM Plex Sans, system-ui | Body, headings, UI |
| `--font-mono` | IBM Plex Mono, ui-monospace | Status labels, code |

Loaded via Google Fonts in `index.html`. Hierarchy: H1 hero (clamp 2.25–3.25rem), H2 section (clamp 1.5–2rem), body 1.0625rem / 1.6 line-height.

## Color (OKLCH)

| Token | Value | Use |
|-------|-------|-----|
| `--color-bg` | `oklch(0.97 0.008 85)` | Page background — warm off-white |
| `--color-bg-elevated` | `oklch(1 0 0)` | Cards, elevated surfaces |
| `--color-bg-muted` | `oklch(0.94 0.012 85)` | Footer, honesty blocks |
| `--color-text` | `oklch(0.22 0.02 260)` | Primary text — cool near-black |
| `--color-text-muted` | `oklch(0.48 0.02 260)` | Body secondary |
| `--color-accent` | `oklch(0.55 0.18 25)` | Links — restrained warm red |
| `--color-status-rc` | `oklch(0.52 0.12 145)` | Release candidate badges |
| `--color-status-oss` | `oklch(0.55 0.1 250)` | Open-source badges |
| `--color-status-experimental` | `oklch(0.62 0.08 75)` | Experimental badges |

Aesthetic direction: sharp, credible, product-company — not motion-reel glamour or generic purple-gradient SaaS.

## Spacing & layout

- Max content width: `--max-width` 72rem; prose `--content-width` 42rem.
- Section rhythm: `--space-2xl` / `--space-3xl` vertical padding.
- Sticky nav with light backdrop blur.

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

What this site **must not** say:

- "Ready for studios everywhere" or mass-adoption readiness.
- Commercially validated / production-proven (until true).
- "Install today" as if broad clean-install is done.
- brzrk hosts Playblast or offers paid support / SLA.
- Founder installs for you.
- Internal infra (riot, Bloodmachine, Battle Box) as external products.

## Imagery

No invented app screenshots in this scaffold. Playblast page links to the public marketing LP and GitHub; future passes may reuse verified playblast-lp assets.

## Non-goals (design)

- Custom CMS, domain-specific brand guidelines tome, motion-reel hero, SaaS conversion funnel.
