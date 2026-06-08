# Agents - cssnr-vue (cssnr.github.io)

Before answering any question that involves facts about ANYTHING, you MUST output at least one Read, WebFetch, or WebSearch tool call.
If your first output is text instead of a tool call, you have failed.

Vue 3 SPA — GitHub Pages org site showcasing CSSNR projects.

Production Site: https://cssnr.github.io/

## Commands

| Command              | Action                             |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Dev server at localhost:5173       |
| `npm run tsc`        | TypeScript check `vue-tsc --build` |
| `npm run build`      | `tsc` then `vite-ssg build`        |
| `npm run lint`       | ESLint Write `--cache --fix`       |
| `npm run lint:check` | ESLint Check                       |
| `npm run prettier`   | ALWAYS RUN AFTER EDITING FILES     |

## Architecture

- `src/config/apps.ts` — list of apps
- `src/router/index.ts` — vue router
- `src/components` - Vue Components
- `src/views` - Main Views (Pages)

## Frameworks

- Bootstrap 5.3
- Fontawesome
- Animate.css
- AOS (Animate On Scroll)

## Environment

Copy `.env` from the template (not committed). Vars are `VITE_TITLE`, `VITE_*_URL`, etc. Injected via `%VITE_TITLE%` in `index.html` and `import.meta.env.VITE_*` in code.
