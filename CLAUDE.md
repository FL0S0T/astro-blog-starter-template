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

Astro 5 blog deployed to Cloudflare Workers via `@astrojs/cloudflare` adapter with static assets. Configured in `astro.config.mjs` with MDX and sitemap integrations.

**Content system:** Blog posts live in `src/content/blog/` as `.md` or `.mdx` files. The collection schema is defined in `src/content.config.ts` with required fields: `title`, `description`, `pubDate`, and optional `updatedDate` and `heroImage`. Posts are queried via `getCollection('blog')` and rendered through `src/pages/blog/[...slug].astro` using Astro's content layer with `glob` loader.

**Layout chain:** `BaseHead.astro` (SEO meta, OG tags, global CSS import, font preloads) is used by all pages. `BlogPost.astro` layout wraps individual posts with hero image and date display. Pages compose `Header`, `Footer`, and `BaseHead` components.

**Site constants** (`SITE_TITLE`, `SITE_DESCRIPTION`) are centralized in `src/consts.ts` and used by the homepage, RSS feed, and base head.

**Styling:** Single `src/styles/global.css` imported through `BaseHead.astro`. Uses Atkinson font loaded from `/public/fonts/`. Component-scoped styles via `<style>` tags in `.astro` files.

**Deployment:** Wrangler config in `wrangler.json`. Uses `nodejs_compat` flag, observability enabled, source maps uploaded.

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
