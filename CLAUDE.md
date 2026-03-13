# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Local dev server at localhost:4321
npm run build      # Production build to ./dist/
npm run preview    # Build + local preview via wrangler dev
npm run check      # Full check: astro build + tsc + wrangler deploy --dry-run
npm run deploy     # Deploy to Cloudflare Workers
npm run cf-typegen # Generate Cloudflare Workers types
```

No test runner is configured. Use `npm run check` for validation.

## Architecture

Astro 5 blog deployed to Cloudflare Workers via `@astrojs/cloudflare` adapter in SSR mode (`output: "server"`). Configured in `astro.config.mjs` with MDX and sitemap integrations. Site URL: `https://floriansoter.io`.

### Content System

Blog posts (called "insights") live in `src/content/insights/` as `.md` or `.mdx` files. The collection schema is defined in `src/content.config.ts` using Astro's content layer with `glob` loader. Posts are queried via `getCollection('insights')` and rendered through `src/pages/insights/[...slug].astro`.

**Frontmatter schema** (required fields marked with `*`):
- `title`\* — string
- `description`\* — string
- `pubDate`\* — date (coerced)
- `category`\* — one of: `systems-strategy`, `build-execution`, `applied-technologies`, `enterprise-implications`, `capital-structure`, `current-news`
- `readingTime`\* — string (e.g. "12 min read")
- `updatedDate` — date (optional)
- `heroImage` — string, image path (optional)
- `tags` — string array (defaults to `[]`)
- `tldr` — string array, bullet summaries (defaults to `[]`)
- `seoDescription` — string for OG tags (optional)

### Pages & Routing

| Route | File | Notes |
|-------|------|-------|
| `/` | `index.astro` | Homepage with hero, featured post, thinking layers, newsletter CTA |
| `/insights` | `insights/index.astro` | Article list with category filtering |
| `/insights/[slug]` | `insights/[...slug].astro` | Dynamic article page (SSR, prerender disabled) |
| `/about` | `about.astro` | About page |
| `/focus` | `focus.astro` | Focus/mission page |
| `/contact` | `contact.astro` | Contact form |
| `/newsletter` | `newsletter.astro` | Newsletter signup |
| `/welcome` | `welcome.astro` | Onboarding page |
| `/unsubscribed` | `unsubscribed.astro` | Unsubscribe confirmation |
| `/datenschutz` | `datenschutz.astro` | German privacy policy |
| `/impressum` | `impressum.astro` | German legal/imprint |
| `/rss.xml` | `rss.xml.js` | RSS feed |

### Components (`src/components/`)

- **BaseHead.astro** — SEO meta, OG/Twitter cards, global CSS import, font preloads (Inter + Source Serif 4), theme no-FOUC script
- **Header.astro** — Sticky nav with glassmorphism, mobile hamburger, language toggle (EN/DE), theme toggle (dark/light), social links
- **Footer.astro** — Footer nav, social links, legal links, dynamic copyright year
- **ArticleCard.astro** — Article preview card with hero image, category badge, reading time; supports featured variant
- **BlogPost.astro** (layout in `src/layouts/`) — Individual post layout with hero image, metadata, TLDR block, newsletter CTA
- **HeroNebula.astro** — Animated nebula background (mouse-tracking on desktop, drift on mobile)
- **FormattedDate.astro** — Locale-aware date formatter
- **TldrBlock.astro** — Summary block rendering TLDR bullet array
- **CookieConsent.astro** — GDPR cookie consent banner
- **Modal.astro** — Generic modal with backdrop blur
- **I18nScript.astro** — Client-side i18n hydration script

### Site Constants

Centralized in `src/consts.ts`:
- `SITE_TITLE` = "Florian Soter"
- `SITE_DESCRIPTION` — German tagline
- `SITE_URL` = "https://floriansoter.io"
- `CATEGORIES` — 6 category objects with `slug` and `label`
- `LAYERS` — first 5 categories (excludes "Current News")
- `CategorySlug` — union type derived from CATEGORIES

### Internationalization

EN/DE support via `src/i18n/translations.ts`. Translations are applied client-side through `data-i18n` attributes hydrated by `I18nScript.astro`. The `Header` component includes a language toggle.

### Middleware

`src/middleware.ts` implements password-protected preview access:
- All requests require an auth cookie (`site-auth`)
- Login form served at any unauthenticated route, auth endpoint at `/__auth`
- Cookie-based session (HttpOnly, 7-day max age)

### Styling

**Design system:** Apple × Medium aesthetic with dark mode as default.

- Single global stylesheet: `src/styles/global.css` (imported via `BaseHead.astro`)
- CSS custom properties for theming (`data-theme="light"` toggles light mode)
- Typography: Inter for UI/headings, Source Serif 4 for prose/longform
- Layout max-width: 720px (content), 1120px (wide sections)
- Component-scoped styles via `<style>` tags in `.astro` files
- Responsive breakpoints: 768px (tablet), 480px (mobile)

### Deployment

Cloudflare Workers via Wrangler (`wrangler.json`):
- Entry: `./dist/_worker.js/index.js`
- Static assets from `./dist` with `ASSETS` binding
- Flags: `nodejs_compat`
- Observability and source map upload enabled
- Compatibility date: 2025-10-08

### Key Dependencies

- `astro` 5.16.2
- `@astrojs/cloudflare` 12.6.12
- `@astrojs/mdx` 4.3.12
- `@astrojs/rss` 4.0.14
- `@astrojs/sitemap` 3.6.0
- `typescript` 5.9.3
- `wrangler` 4.56.0 (dev)

## Conventions

- **Collection name is "insights"**, not "blog" — use `getCollection('insights')` everywhere
- **Dark mode first** — design and test with dark theme as the default
- **German legal pages** — `datenschutz` and `impressum` are static German-language legal requirements
- **No fonts in `/public/fonts/`** — fonts (Inter, Source Serif 4) are loaded via preload links in `BaseHead.astro`
- **Images** go in `public/images/` and are referenced as `/images/filename`
- **TypeScript strict mode** — `tsconfig.json` extends `astro/tsconfigs/strict` with `strictNullChecks: true`
- **ESM only** — `"type": "module"` in package.json

## Skill System

This repository uses modular skills for task-specific context loading.

Use progressive disclosure:

1. Read this file first.
2. Load `project-context` for every strategic, content, and design task.
3. Load only the additional skill(s) required by the current task.
4. Avoid loading unrelated skills to keep context lean.

### Skill Registry

- `.claude/skills/project-context/SKILL.md` — Baseline context: positioning, mission, tone, publishing, stack, analytics, KPI logic.
- `.claude/skills/content-engine/SKILL.md` — Longform and multi-channel content generation (Website, LinkedIn, X, Medium, Newsletter).
- `.claude/skills/copy-writer/SKILL.md` — Website and positioning copy (Home, About, Newsletter, Speaking, Advisory pages).
- `.claude/skills/website-architecture/SKILL.md` — IA, UX, page structure, design system, performance standards.
- `.claude/skills/brand-theme/SKILL.md` — Visual brand language, typography, color usage, UI consistency.

### Loading Rules

- Always load `project-context` first.
- For writing articles or posts: add `content-engine`.
- For website/page copy: add `copy-writer`.
- For structure, UX, and layouts: add `website-architecture`.
- For visual styling and brand consistency: add `brand-theme`.

If two skills conflict, prefer:
1. `project-context`
2. Task-specific skill
