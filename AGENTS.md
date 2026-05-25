# cssnr-vue (cssnr.github.io)

Vue 3 SPA — GitHub Pages org site showcasing CSSNR projects.

## Commands

| Command                  | Action                                  |
| ------------------------ | --------------------------------------- |
| `npm run dev`            | Dev server at localhost:5173            |
| `npm run tsc`            | Typecheck via `vue-tsc --build`         |
| `npm run build`          | `tsc` then `vite build` (prebuild hook) |
| `npm run lint`           | ESLint 10 with `--cache --fix`          |
| `npm run lint:check`     | ESLint read-only                        |
| `npm run prettier`       | `npx prettier --write .`                |
| `npm run prettier:check` | Prettier read-only                      |

Run `lint` before `tsc` before `build`. No test framework exists.

## Config & formatting

- ESLint: flat config at `eslint.config.ts` (ESLint 10)
- Prettier: `.prettierrc.json` — no semis, single quotes, `.vue` printWidth 120, `.js` tabWidth 4
- Lint CI checks: `lint:check` + `prettier:check` + yamllint + actionlint
- Path alias `@/` → `src/`

## Architecture

- **No state management (Pinia/Vuex)** — all data is static, imported from `src/config/`
- `src/config/apps.ts` (~1068 lines) defines 9 categories of ~80+ projects — the site's core data
- `src/router/index.ts` — 3 routes: `/` (Home), `/about` (lazy), catch-all redirects to `/`
- Theme: `public/theme.js` (blocking `<script>` in `index.html`) applies `data-bs-theme` on `<html>` before Vue mounts; Vue's `ThemeSwitch.vue` toggles it
- 404.html stores `location.href` in `sessionStorage.redirect`; `index.html` replays it (GitHub Pages SPA workaround)

## Environment

Copy `.env` from the template (not committed). Vars are `VITE_TITLE`, `VITE_*_URL`, etc. Injected via `%VITE_TITLE%` in `index.html` and `import.meta.env.VITE_*` in code.

## CI

- `pages.yaml`: push to `master` → npm build → deploy to GitHub Pages + optional Cloudflare purge + Algolia crawl
- `preview.yaml`: push non-master → npm build → deploy to `https://dev-static.cssnr.com/`
- `lint.yaml`: push/PR to master → lint check

## Notes

- Node: `^20.19.0 || >=22.12.0`, package manager: npm
- `src/config/**` marked `linguist-vendored` in `.gitattributes`
- `vite.config.ts` sets `server.allowedHosts: true` and `base` is unset (default `/` for GitHub Pages)
