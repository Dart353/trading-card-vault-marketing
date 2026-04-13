# Trading Card Vault — Marketing Site

Marketing website for Trading Card Vault, the B2B SaaS platform for local game shops.

Stack: **SvelteKit 5** (runes) · **TypeScript** strict · **Tailwind CSS 4** · **shadcn-svelte** (slate base) · **adapter-node**.

## Local development

```bash
pnpm install
pnpm dev     # http://localhost:5174
```

Other scripts:

- `pnpm build` — production build (outputs Node server in `build/`)
- `pnpm preview` — preview the production build locally
- `pnpm check` — svelte-check with strict TypeScript
- `pnpm lint` / `pnpm format` — Prettier

## Environment variables

None required for the marketing site itself at this time. When the contact-form
backend is wired up you will need (TODO):

- `BREVO_API_KEY` — for `/api/contact` to forward to Brevo transactional email.
- `CONTACT_TO_EMAIL` — inbox that receives form submissions.

## Deployment

Builds with `@sveltejs/adapter-node`. Deploy to any Node host (Fly.io, Render,
Railway, a VPS behind nginx, etc.):

```bash
pnpm build
node build
```

## TODOs before launch

- [ ] **Pricing** — confirm final tier names, prices, and limits in `src/lib/content/pricing.ts`. Current values are placeholders.
- [ ] **Legal copy** — `/legal/privacy` and `/legal/terms` are starter templates. Have counsel review before going live.
- [ ] **Testimonials + logos** — `src/lib/content/testimonials.ts` contains fictional shops flagged with `isPlaceholder: true`. Replace with real quotes and SVG logos.
- [ ] **Team bios** — `src/routes/about/+page.svelte` uses placeholder team cards. Drop in real bios and headshots.
- [ ] **Analytics** — a commented-out Plausible snippet lives in `src/routes/+layout.svelte`. Uncomment and set the domain attribute when launching.
- [ ] **Contact form backend** — `src/routes/api/contact/+server.ts` currently logs to console. Wire to Brevo (or whichever transactional provider) and add env vars above.
- [ ] **Booking link** — `SITE.app.bookDemoUrl` in `src/lib/content/site.ts` points at a placeholder `cal.com` URL.
- [ ] **Social handles** — confirm final Twitter/LinkedIn URLs in `src/lib/content/site.ts`.
- [ ] **OG image** — drop a real `static/og-default.png` (1200×630) before launch.
- [ ] **Favicon** — replace `static/favicon.svg` with final branded mark.
- [ ] **MTG imagery rights** — `src/lib/content/cards.ts` hotlinks Scryfall's public image CDN for real printings used in the hero and widget preview. Review the [Wizards of the Coast Fan Content Policy](https://company.wizards.com/en/legal/fancontentpolicy) and Scryfall's image guidelines before production launch; swap to original stylized art if needed.
- [ ] **ROI assumption** — `TIME_SAVINGS_RATIO` in `RoiCalculator.svelte` is a ballpark. Validate against pilot-shop telemetry before we make this number the headline of a paid-ads landing page.

## Project layout

```
src/
├── app.css              # Tailwind + design tokens (palette, typography, keyframes)
├── app.html
├── lib/
│   ├── components/
│   │   ├── custom/               # User-created components grouped by UI pattern
│   │   │   ├── calculator/       # ROI calculator
│   │   │   ├── form/             # Contact form
│   │   │   ├── icon/             # FeatureIcon (lucide wrapper)
│   │   │   ├── illustration/     # Card imagery + scanner mockup
│   │   │   ├── layout/           # Header, footer, logo, theme toggle
│   │   │   ├── section/          # Page sections (Hero, FeatureRow, …)
│   │   │   └── seo/              # SeoHead
│   │   └── shadcn/ui/            # shadcn-svelte primitives
│   ├── content/         # Typed copy: site, features, pricing, faqs, testimonials, cards, blog
│   └── utils/utils.ts   # `cn` + ref/children type helpers
├── schema/              # Zod schemas (contactSchema, …)
└── routes/
    ├── +layout.svelte
    ├── +page.svelte            # /
    ├── features/+page.svelte
    ├── pricing/+page.svelte
    ├── for-shops/+page.svelte
    ├── widget/+page.svelte
    ├── about/+page.svelte
    ├── contact/                # +page.svelte, +page.server.ts
    ├── blog/                   # index + [slug]
    ├── legal/                  # privacy + terms
    ├── api/contact/+server.ts  # stub — TODO: wire to Brevo
    └── sitemap.xml/+server.ts
static/
├── favicon.svg
└── robots.txt
```

Components follow the `.claude/architecture.md` convention of organising by UI
pattern — see also `.claude/component-structure.md` and `.claude/naming.md`.

## Conventions

This repo follows the engineering standards documented in the top-level
`CLAUDE.md` and the `.claude/*.md` context files. In short:

- Svelte 5 runes only. No `export let`, no `$:`.
- Component `Props` interfaces are always prefixed with the component name.
- `on*` for callback props; `handle*` for parent implementations.
- Boolean variables prefixed with `is` / `has` / `can` / `should`.
- `function` declarations for component functions, not `const` arrow forms.
- All `{#each}` blocks are keyed.
