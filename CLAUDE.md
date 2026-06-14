# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page React + Vite portal ("Museo Scientifico Virtuale") that links out to
independent, externally-hosted science experiences (each hosted on its own GitHub
Pages site). This repo contains only the landing page — not the experiences
themselves. The previous immersive Three.js prototype lives in the `museo-3d`
branch, not on `main`.

## Commands

```bash
npm ci          # install (Node.js 24)
npm run dev     # Vite dev server
npm run lint    # ESLint
npm run build   # production build to dist/
npm run preview # serve the built dist/

make test       # runs lint + build (the closest thing to a test suite)
```

There is no unit test framework. `make test` (lint + build) is the full
verification gate; the CI workflow only runs `npm ci && npm run build`.

Docker (serves the built site via nginx): `make build && make up` →
http://localhost:8080. Override the port with `make up PORT=3000`.

## Architecture

The entire app is three source files:

- `src/data/exhibits.js` — **all content lives here**, as data. Exports
  `categories`, `exhibits` (published rooms), `upcoming` (planned rooms), and
  `learningProject` (the quiz section). `App.jsx` is purely presentational over
  this data.
- `src/App.jsx` — the single component tree, plus a `copy` object holding all UI
  chrome strings for both languages.
- `src/styles.css` — all styling, theme-driven via `[data-theme]` on the root.

### Bilingual content convention

Content is bilingual (`it`/`en`). Any localizable field is an object
`{ it: '...', en: '...' }`, resolved at render time by the `localize(value, language)`
helper in `App.jsx` (it passes strings through unchanged). When adding a field to
an exhibit, follow this `{ it, en }` shape. Italian (`it`) is the default language.

### Theme

Theme defaults to the browser's `prefers-color-scheme` and live-follows OS changes
via a `matchMedia` listener (`App.jsx` ~line 177). The user toggle and the OS
listener both just call `setTheme`; the active theme is written to `data-theme` on
the document root, which drives the CSS variables in `styles.css`.

### Asset base path

`vite.config.js` sets `base` to `/MuseoScientificoVirtuale/` only under
`GITHUB_ACTIONS`, and `/` otherwise. Because of this, **never hardcode `/images/...`
paths** — build asset URLs with `import.meta.env.BASE_URL` (see `ExhibitCard` in
`App.jsx`). Images live in `public/images/exhibits/` as `.webp`.

## Adding content

Edit `src/data/exhibits.js` only:

- **Published room** → add an object to `exhibits` (`id`, `number`, `category`,
  bilingual `eyebrow`/`title`/`description`, `url`, `image`, `accent`). The
  `category` must match an `id` in the `categories` array (which powers the filter
  UI), or add a new category there too.
- **Planned room** → add to `upcoming`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which builds and
publishes to GitHub Pages at https://manzolo.github.io/MuseoScientificoVirtuale/.
The CI pins npm to `11.6.1` for reproducibility — match that if changing the
toolchain (the Dockerfile pins it too).

## Project intent

This is an open learning project by a developer without a formal science
background. Prefer simplicity, accessibility, and mobile-friendliness; scientific
accuracy of content matters and is welcome for correction.
