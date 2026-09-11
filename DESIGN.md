# brzrk site — editorial-industrial design system

This document defines the visual system and public claims boundary for the brzrk company site. Tokens are implemented in `src/index.css`; page composition is in `src/App.css`.

## Direction

A near-black editorial canvas with graphite and steel surfaces, warm-white type, and orange used only as signal: active navigation, actions, indices, and status markers. The site should feel authored, technical, and direct—not like a glassy SaaS template.

- Hard rules, square geometry, minimal radius, no decorative glow or gradient.
- Asymmetric grids and indexed elements organize the page.
- Large hierarchy stops short of swallowing the viewport.
- One screenshot carousel on `/playblast` leads with CRM and invoice UI (`clients.png`, `invoices.png`), then review (`review.png`, `compare.png`).
- Ban invented UI, fake metrics, and fake logos in screenshots.
- Prefer shipped captures over generic `projects.png`; do not use a separate clients/invoices media block outside the carousel.

## Tokens

- Canvas: `--ink-deep`; primary field: `--ink`; surface: `--graphite`; raised steel: `--steel`.
- Type: `--paper`; muted text: `--paper-muted`; subtle text: `--paper-subtle`. All intended body text meets WCAG AA contrast on its surface.
- Signal: `--signal` orange. It is not a decorative fill system.
- Rules: `--rule` and `--rule-strong`; structural borders must remain visible.
- Type: IBM Plex Sans for editorial display/body; IBM Plex Mono for indices, labels, and status.
- Width: `--max-width: 78rem`; prose: `--content-width: 44rem`.

## Interaction and accessibility

- Interactive targets are at least 44px where space allows.
- `:focus-visible` uses a 3px orange outline with offset.
- Semantic headings, lists, nav landmarks, figures, and form labels are required.
- Screenshots declare their intrinsic 1440×900 dimensions; below-fold images lazy-load and decode asynchronously.
- Layouts must not horizontally overflow at 320, 375, 768, or 1440px.
- Motion is brief and structural; `prefers-reduced-motion` disables it.

## Shader

The existing vgpu shader may appear as a restrained atmospheric layer on the home hero only. Content and structural rules remain dominant. The fallback is a flat graphite field rather than a decorative CSS gradient.

## Portfolio scope

Playblast only. Nightshift, Banshee Voice, Owner Operator, and internal infrastructure are not public products. Navigation: Index · Playblast · Fund · About · Contact. `/products` redirects to `/playblast`.

## Development fund

The fund is explicitly pre-launch and not yet open. Do not show $0 metrics, empty activity dashboards, or supporter theater. Keep the planned recognition tiers and full disclaimer visible. GitHub Sponsors links lead to `SPONSORS.md`; there is no fake checkout.

## Deployment

GitHub Pages uses the `/brzrk-site/` base path, configured by its deployment workflow and consumed by the router. Root-domain deployments such as Cloudflare Pages use `/`. GitHub Pages live URL: `https://brzrk-motion.github.io/brzrk-site/`.

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
- “Install today” as if broad clean-install validation is complete.
- brzrk hosts Playblast or provides paid support, SLA, managed operations, or founder installation.
- Internal infrastructure is an external product.

No invented screenshots, testimonials, customer counts, adoption numbers, or performance claims. Use shipped UI captures only (`clients.png`, `invoices.png`, `review.png`, `compare.png`).
