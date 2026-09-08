# brzrk site

Public company site for **brzrk** — repositioned as an independent product company (not a motion-graphics studio).

**Live (after deploy):** https://brzrk-motion.github.io/brzrk-site/

## Stack

- Vite + React + TypeScript
- React Router (client-side routes)
- GitHub Pages via Actions (project site, base path `/brzrk-site/`)

## Development

```bash
npm install
npm run dev      # local dev at /
npm run build    # production build to dist/
npm run preview  # preview production build
```

For local dev, Vite serves at `/`. Production build uses base path `/brzrk-site/` for GitHub Pages.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — product-company positioning |
| `/products` | Portfolio with honest status labels |
| `/playblast` | Primary product story, soft-RC CTAs |
| `/about` | Company stance |
| `/contact` | Interest / feedback mailto paths |

See [DESIGN.md](./DESIGN.md) for tokens and claims boundary.

## Deploy

Push to `main` triggers `.github/workflows/deploy-pages.yml`. Configure the repo for **GitHub Pages from Actions** (Settings → Pages → Source: GitHub Actions).
