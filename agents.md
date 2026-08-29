# agents.md — A & J Fiola Insurance Agency Web App

A practical guide for AI agents (and humans) working in this codebase.

## 1. Project Overview

A bilingual (English / Français) marketing + self-service website for **A & J Fiola Insurance Agency Ltd.**, a family insurance brokerage in Ste. Anne, Manitoba (established 1972). It presents the agency's services (Autopac/MPI auto, residential, commercial, travel health), partner links, hours/location, contact info, and a "client portal" with mocked policy-change, certificate, and claim-guidance forms.

**Origin:** This is a [Google AI Studio](https://ai.studio) app, scaffolded from the `react-example` template (note `"name": "react-example"` in `package.json`). `metadata.json` declares `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API` and it is deployed on Cloud Run via AI Studio. Despite that declared capability, **no server-side Gemini code exists in this repo** — the app is a pure client-side SPA.

**Key reality check for agents:**
- All forms (quote, policy change, certificate, contact) are **cosmetic/mocked**. They simulate a submit with a `setTimeout(...)` and show a success state. No data is sent anywhere. There is no API endpoint, email, or backend route in this repo.
- `express` and `@google/genai` are declared dependencies but **not imported anywhere in `src/`**. They are likely reserved for AI Studio runtime injection or are dead weight. Do not assume a backend exists.

## 2. Technology Stack

| Concern | Choice |
|---|---|
| Language | TypeScript (ES2022 target), strict-ish, `jsx: react-jsx` |
| UI framework | React 19 (`react`, `react-dom`) |
| Build tool | Vite 6 (`vite`) |
| React plugin | `@vitejs/plugin-react` |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js`; configured through CSS `@import "tailwindcss"` and arbitrary values) |
| Icons | `lucide-react` |
| Animation | `motion` (declared in deps; verify usage before relying on it) |
| Package manager | `bun` (see `bun.lock`); `npm install` also works |
| Path alias | `@/*` → repo root (defined in `tsconfig.json` and `vite.config.ts`) |
| Fonts | Space Grotesk (display), Plus Jakarta Sans (body), JetBrains Mono (mono) — loaded via Google Fonts `<link>` in `index.html` |
| Server-side AI | `@google/genai` + `express` declared but unused in `src/` |
| Env loading | `dotenv` declared |

**No backend framework, no database, no test runner, no CI config files exist.**

## 3. Directory Structure

```
fiola-insurance-agency/
├── index.html               # SPA shell; loads /src/main.tsx; Google Fonts links
├── vite.config.ts           # Vite + React + Tailwind plugins; alias; HMR gating via DISABLE_HMR
├── tsconfig.json            # TS config; path alias @/* -> ./*
├── package.json             # Scripts + deps (name still "react-example")
├── bun.lock                 # Bun lockfile
├── metadata.json            # AI Studio app metadata (name, description, capabilities)
├── .env.example             # Documents GEMINI_API_KEY and APP_URL (AI Studio injects these)
├── .gitignore               # Ignores node_modules, dist, build, *.env
├── README.md                # Minimal AI Studio run instructions
├── assets/
│   └── .aistudio/.gitignore # (whitelists nothing; AI Studio internal)
└── src/
    ├── main.tsx             # React entry: createRoot -> <App/> in <StrictMode>
    ├── App.tsx             # Root component: page state, language state, quote-modal state, hash router
    ├── index.css           # Tailwind import + base theme (CSS vars) + grid patterns
    ├── types.ts            # Shared TS types: PageRoute, Language, ServiceCategory, PartnerLink, form data interfaces
    ├── data/
    │   └── insuranceData.ts# All static content: AGENCY_INFO, OFFICE_HOURS, SERVICE_CATEGORIES, PARTNER_LINKS, EMERGENCY_CLAIM_CONTACTS
    ├── components/
    │   ├── Navbar.tsx       # Sticky header, top contact bar, lang toggle, mobile drawer
    │   ├── Footer.tsx       # 4-column footer with hours, contacts, product links
    │   └── QuoteModal.tsx   # Global "Quick Quote" modal (mocked submit)
    └── pages/
        ├── HomePage.tsx          # Landing/hero + service highlights + CTA
        ├── ServicesPage.tsx      # Full service categories grid
        ├── ClientPortalPage.tsx  # Tabs: policy change / certificate / claim guidance (all mocked)
        ├── LinksPage.tsx         # Partner/external links
        ├── HoursLocationPage.tsx # Hours + map/address
        └── ContactPage.tsx       # Contact form (mocked) + details
```

**Most important files to touch:**
- `src/data/insuranceData.ts` — edit here for any agency content (address, phone, hours, services, partners, claims). This is the single source of truth for copy.
- `src/App.tsx` — routing, language state, global modal.
- `src/types.ts` — add types here when introducing new data shapes or pages.
- `src/index.css` — global styling tokens (CSS vars) and font wiring.

## 4. Build, Run, Test, Deploy

**Install dependencies**
```bash
npm install        # or: bun install
```

**Run locally (dev server)**
```bash
npm run dev         # vite --port=3000 --host=0.0.0.0
```
Then open http://localhost:3000.

**Type-check / lint**
```bash
npm run lint        # runs: tsc --noEmit  (this is the only "lint")
```
There is **no ESLint config and no test suite**. `npm run lint` is purely type-checking.

**Production build**
```bash
npm run build       # vite build -> outputs to dist/
npm run preview     # serve the built dist/ locally
```

**Clean**
```bash
npm run clean       # rm -rf dist server.js  (note: no server.js exists; harmless)
```

**Environment variables (AI Studio injected at runtime):**
- `GEMINI_API_KEY` — Gemini API key (required only if you wire up server-side AI).
- `APP_URL` — Cloud Run service URL, for self-links/OAuth/callbacks.
- `DISABLE_HMR` — when `"true"`, Vite disables HMR and file watching (`vite.config.ts` lines 17–19). Used by AI Studio to avoid flicker during agent edits. **Do not remove this logic.** Local dev normally leaves it unset.

**Secrets handling:** `.env*` is git-ignored (except `.env.example`). Never commit real keys. Only `.env.example` is tracked.

## 5. Architecture & Conventions

**Routing:** Hash-based, hand-rolled in `App.tsx` (no React Router). `PageRoute` type = `'home' | 'services' | 'client-portal' | 'links' | 'hours-location' | 'contact'`. Navigation sets `window.location.hash`; a `hashchange` listener syncs `currentPage`. To add a page: add the route to `PageRoute` in `types.ts`, create a page component, import it in `App.tsx`, render it in the `currentPage === '...'` block, and add a nav entry in `Navbar.tsx`/footer.

**Bilingual i18n:** No i18n library. `Language = 'en' | 'fr'` state lives in `App.tsx` and is passed down as a prop. Pages inline both strings and switch on `language === 'en' ? enText : frText`. New user-facing copy must follow this pattern (provide `X` and `XFr` or inline ternary). Static content in `insuranceData.ts` carries paired `...` / `...Fr` fields (e.g. `title` / `titleFr`).

**Styling:** Tailwind v4 with **hardcoded arbitrary color values** used pervasively, e.g. `bg-[#1A1A1A]`, `text-[#F7F7F5]`, `border-[#E5E5E1]`. The palette:
- `#1A1A1A` near-black (primary text / dark surfaces)
- `#F7F7F5` off-white (canvas background)
- `#73736E` / `#A3A39E` / `#8C8C88` greys (secondary text)
- `#E5E5E1` / `#2E2E2C` / `#383835` borders
Tailwind theme tokens are defined only as CSS variables in `index.css` (`:root`), but components mostly use arbitrary values directly. When editing styles, match these hex values for consistency rather than introducing new colors.

**State management:** Plain React `useState` + prop drilling. No Redux/Context/Zustand. `App.tsx` holds `currentPage`, `language`, `isQuoteModalOpen` and passes setters down.

**Forms:** All forms are controlled components with local `useState`. Submit handlers call `e.preventDefault()`, set a submitting flag, then `setTimeout` (~600ms) to flip a "submitted" success state. **No network call.** If you need real submission, you must add a backend (the `express` dep is available) or a third-party form endpoint.

**Icons:** import named icons from `lucide-react` (e.g. `Phone`, `Shield`, `Globe`). `iconName: 'car' | 'home' | 'globe'` in service data maps to these.

**Component shape:** Each component is a default-exported function taking a typed `Props` interface. Pages receive `language` (and sometimes `setCurrentPage`). Interactive elements carry stable `id="..."` attributes (e.g. `nav-link-home`, `quote-submit-btn`) — useful for tests/automation; preserve or extend them.

## 6. Common Tasks

**Edit agency info (phone, address, hours, email):**
→ `src/data/insuranceData.ts` → `AGENCY_INFO`, `OFFICE_HOURS`.

**Edit services / partner links / claims contacts:**
→ `src/data/insuranceData.ts` → `SERVICE_CATEGORIES`, `PARTNER_LINKS`, `EMERGENCY_CLAIM_CONTACTS`.

**Add a new page/route:**
1. Add value to `PageRoute` in `src/types.ts`.
2. Create `src/pages/NewPage.tsx` (accept `language: Language`).
3. Import + render in `src/App.tsx` (`validRoutes` array + conditional block).
4. Add nav entry in `src/components/Navbar.tsx` (`navLinks`) and/or `Footer.tsx`.

**Change colors / fonts:**
→ Global tokens in `src/index.css`; font `<link>` in `index.html`; otherwise replace arbitrary hex values in the component.

**Add a bilingual string:**
→ Inline ternary on `language` in the page, or add `X`/`XFr` pair in `insuranceData.ts` and update the relevant `types.ts` interface.

**Wire real form submission:**
→ Add an endpoint (express server or external API) and replace the `setTimeout` mock in `QuoteModal.tsx` / `ClientPortalPage.tsx` / `ContactPage.tsx`. Remember `GEMINI_API_KEY`/`APP_URL` are injected at runtime by AI Studio, not present locally.

## 7. Important Files & Roles

| File | Role |
|---|---|
| `src/data/insuranceData.ts` | Single source of all agency copy/content |
| `src/App.tsx` | App shell, routing, language + modal state |
| `src/types.ts` | Shared TypeScript contracts |
| `src/components/Navbar.tsx` | Primary navigation, language toggle, contact bar |
| `src/components/QuoteModal.tsx` | Global lead-capture modal (mocked) |
| `src/pages/ClientPortalPage.tsx` | Self-service forms (mocked); largest page |
| `vite.config.ts` | Build + HMR gating (`DISABLE_HMR`) |
| `metadata.json` | AI Studio deployment metadata |

## 8. Known Issues, Limitations & Cautions

- **Forms are non-functional.** Quote, policy-change, certificate, and contact forms do not transmit data. Treat them as UI demos until a backend is added.
- **Dead/unused dependencies.** `express`, `@google/genai`, `dotenv`, `motion` are declared but unused in `src/`. Don't rely on them without wiring code. `metadata.json` advertises a server-side Gemini capability that isn't implemented here.
- **No tests, no CI, no ESLint.** Quality gate is only `tsc --noEmit`. There is no automated verification of behavior or styling.
- **`package.json` name is `"react-example"`** — leftover template default; consider renaming to something like `fiola-insurance-agency`.
- **Hardcoded arbitrary colors** throughout (no real design-token system beyond CSS vars in `index.css`), making global rebranding tedious. Be consistent with existing hex values.
- **Hash routing, not a router library** — deep links work via `#route` but there is no server-side routing/SSR. `clean` script references a non-existent `server.js`.
- **Secrets:** `.env*` ignored; AI Studio injects `GEMINI_API_KEY`/`APP_URL` at runtime. Never hardcode keys or commit a real `.env`.
- **`DISABLE_HMR` logic in `vite.config.ts` must stay** — AI Studio depends on it to suppress file-watcher flicker during agent edits.

## 9. `.gitignore` Reference

The repo's `.gitignore` (root level) controls what is tracked:

```gitignore
node_modules/
build/
dist/
coverage/
.DS_Store
*.log
.env*
!*.env.example
```

Notes for agents:
- `dist/`, `build/`, `coverage/` are build/test output — never commit.
- **All `.env*` files are ignored** (`*.env*`), so real secrets (`GEMINI_API_KEY`, `APP_URL`) in `.env`, `.env.local`, etc. will never be committed. Only `.env.example` is force-included (`!*.env.example`).
- `.DS_Store` (macOS) and `*.log` are excluded.
- `node_modules/` is ignored — install via `npm install`/`bun install` after cloning.
- There is **no ignore rule** for `assets/`, `src/`, or `agents.md`, so docs and source are tracked normally.

## 10. Guidelines for Safe Changes

1. **Content edits → `src/data/insuranceData.ts` first.** Keep agency facts (phone `(204) 422-5985`, address `30B Dawson Rd, Ste Anne, MB R5H 1B3`, founded 1972, founders Arthur & Jeanette Fiola) accurate; they appear in many components.
2. **Preserve bilingual parity.** Any English string added should have a French counterpart; any `insuranceData` field added needs a matching `...Fr` field and a `types.ts` update.
3. **Keep `id` attributes** on interactive elements stable — automation/tests may depend on them.
4. **Run `npm run lint` (tsc --noEmit) after edits** to catch type errors; there is no other check.
5. **Match the existing color palette and Tailwind v4 arbitrary-value style**; don't introduce a separate styling system.
6. **Don't remove `DISABLE_HMR` handling** in `vite.config.ts`.
7. **Don't commit env files or secrets.** Use `.env.example` as the template.
8. **Before adding a dependency**, check if it's already declared (note several are declared-but-unused). Prefer the existing stack (React 19, Vite 6, Tailwind v4, lucide-react) over new libraries.
9. **If implementing real form submission or Gemini features**, add actual server code and document the new endpoint; the current `express`/`@google/genai` deps suggest this is the intended evolution path.
