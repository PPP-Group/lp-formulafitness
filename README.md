# Formula Fitness — Website

Faithful rebuild of [formulafitness.co](https://formulafitness.co/) as a modern React + Vite single-page application. Formula Fitness is a personal training studio in Los Alamitos, California.

## Stack

- **React 18** + **Vite 5**
- **React Router v6** (code-split per route)
- Plain CSS with design tokens (no UI framework)
- ESLint + Prettier

## Setup

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
npm install
```

### Development

```bash
npm start      # or: npm run dev
```

Opens at http://localhost:3000

### Production build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── index.jsx              # Entry point
├── App.jsx                # Routes (lazy-loaded)
├── styles/                # Design tokens + global CSS + keyframes
├── components/
│   ├── layout/            # Header, Footer, Layout, ScrollToTop
│   ├── ui/                # Reusable UI (Modal, Accordion, BMICalculator, etc.)
│   └── sections/          # Home page sections (Hero, Programs, Reviews, …)
├── pages/                 # Routed pages (Home + subpages)
├── hooks/                 # Custom hooks (scroll, media query, reveal)
├── utils/                 # constants, bmiCalculator
└── data/                  # Static content (navigation, services, reviews, …)
```

## Design system

All visual tokens (colors, typography, spacing, shadows) live in
[`src/styles/variables.css`](src/styles/variables.css) and mirror the
specification in `prompts/DESIGN_SYSTEM.md`.

## Deploy

Static build output lands in `dist/`. SPA routing fallbacks are pre-configured for:

- **Vercel** — `vercel.json`
- **Netlify** — `netlify.toml` / `public/_redirects`
- Any static host (point it at `dist/` with an SPA fallback to `index.html`)
```bash
npm run build
vercel --prod        # or: netlify deploy --prod
```

## Notes

This is **Phase 1** — a faithful replica of the existing site. Section content,
structure, and ordering mirror the live WordPress site; animations are CSS-only.
Phase 2 (scroll reveals, parallax, animated counters) is scoped in
`prompts/INTERACTIONS.md`.
