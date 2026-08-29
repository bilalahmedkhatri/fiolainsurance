# A & J Fiola Insurance Agency

Bilingual (English / Français) website and client portal for **A & J Fiola Insurance Agency Ltd.** — a family insurance brokerage in Ste. Anne, Manitoba, serving the community since 1972.

## What it is

A marketing + self-service site presenting the agency's insurance services, partner links, hours/location, and contact details, with a bilingual client portal for policy-change requests, commercial certificate requests, and claim guidance.

- **Auto & Vehicle** — Official MPI Autopac agent (registration, licensing, vehicle coverage)
- **Residential & Property** — Homeowner, tenant/condo, new construction, contractor packages
- **Travel Health** — Emergency medical, multi-trip, trip cancellation, Visitors to Canada / Super Visa
- **Commercial** — Contractor packages and liability coverage

## Tech stack

- React 19 + TypeScript
- Vite 6 (dev server / build)
- Tailwind CSS v4
- lucide-react icons
- Google Fonts (Space Grotesk, Plus Jakarta Sans, JetBrains Mono)

This is a client-side SPA (no backend). Forms are front-end demos and do not transmit data.

## Getting started

```bash
npm install      # or: bun install
npm run dev      # http://localhost:3000
```

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server on port 3000 |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Preview the built `dist/` locally |
| `npm run lint` | Type-check with `tsc --noEmit` |
| `npm run clean` | Remove `dist/` (build output) |

## Project structure

```
src/
├── App.tsx              # Routing, language + modal state
├── main.tsx             # React entry point
├── index.css            # Tailwind + base theme
├── types.ts             # Shared TypeScript types
├── data/
│   └── insuranceData.ts # All agency content (single source of truth)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── QuoteModal.tsx
└── pages/
    ├── HomePage.tsx
    ├── ServicesPage.tsx
    ├── ClientPortalPage.tsx
    ├── LinksPage.tsx
    ├── HoursLocationPage.tsx
    └── ContactPage.tsx
```

## Notes

- Content (address, phone, hours, services) lives in `src/data/insuranceData.ts`.
- The site is bilingual; copy is switched inline via a `language` prop (`en` / `fr`).
- `GEMINI_API_KEY` / `APP_URL` env vars are injected at runtime by AI Studio and are not required for local dev.
- See `agents.md` for a detailed guide for working in this codebase.
