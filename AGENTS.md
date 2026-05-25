# Agents - cssnr-vue (cssnr.github.io)

Vue 3 SPA — GitHub Pages org site showcasing CSSNR projects.

Production Site: https://cssnr.github.io/

## Commands

| Command                  | Action                             |
| ------------------------ | ---------------------------------- |
| `npm run dev`            | Dev server at localhost:5173       |
| `npm run tsc`            | TypeScript check `vue-tsc --build` |
| `npm run build`          | `tsc` then `vite-ssg build`        |
| `npm run lint`           | ESLint Write `--cache --fix`       |
| `npm run lint:check`     | ESLint Check                       |
| `npm run prettier`       | Prettier Write                     |
| `npm run prettier:check` | Prettier Check                     |

Run `lint` before `tsc` before `build`. No test framework exists.

## Config & formatting

- ESLint: flat config at `eslint.config.ts` (ESLint 10)
- Prettier: `.prettierrc.json` — no semis, single quotes, `.vue` printWidth 120, `.js` tabWidth 4
- Lint CI checks: `lint:check` + `prettier:check` + yamllint + actionlint
- Path alias `@/` → `src/`

| Script     | Command                               |
| ---------- | ------------------------------------- |
| yamllint   | `yamllint -c .github/yamllint.yaml .` |
| actionlint | `actionlint`                          |

## Architecture

- `src/config/apps.ts` — list of apps
- `src/router/index.ts` — vue router

## Environment

Copy `.env` from the template (not committed). Vars are `VITE_TITLE`, `VITE_*_URL`, etc. Injected via `%VITE_TITLE%` in `index.html` and `import.meta.env.VITE_*` in code.

## CI

Workflows in: `.github/workflows`

- `pages.yaml`: push to `master` → npm build → deploy to GitHub Pages
- `preview.yaml`: push non-master → npm build → deploy to `https://dev-static.cssnr.com/`
- `lint.yaml`: push/PR to master → lint check

## Notes

- Node: `^20.19.0 || >=22.12.0`, package manager: npm
- `src/config/**` marked `linguist-vendored` in `.gitattributes`
- `vite.config.ts` sets `server.allowedHosts: true` and `base` is unset (default `/` for GitHub Pages)
