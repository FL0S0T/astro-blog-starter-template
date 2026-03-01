---
name: florian-soter-website-architecture-design-system
description: Defines the complete visual, structural, and experiential design system for floriansoter.io. Ensures executive-level clarity, structural thinking, personal DU-tone alignment, Apple × Medium design language, and performance-first implementation using Astro and Cloudflare.
version: 4.0.0
---

# floriansoter.io – Website Architecture & Design System

This skill defines how floriansoter.io must look, feel, and function.

It ensures consistency with:

- Executive positioning
- Structural thinking
- Personal DU-tone
- Analytical depth
- Calm authority
- Performance-first engineering
- Apple × Medium design language

Every design, layout, or UI decision must align with this document.

---

# 1. Core Identity

floriansoter.io is:

- A thinking platform
- Led by a hands-on CEO, tech enthusiast & builder
- Personal but not soft
- Executive but not corporate
- Structured but not sterile
- Visually rich but not loud

It is NOT:

- A marketing funnel
- An influencer website
- A SaaS landing page
- A tech startup promo site

It is:

The digital thinking environment of a builder in the AI age.

---

# 2. Design Philosophy — Apple × Medium

The website blends Apple's visual refinement with Medium's reading experience:

**Apple influences:**
- Glassmorphism header with backdrop-filter blur
- Pill-shaped buttons (border-radius: 980px)
- Subtle gradients on hero sections
- Refined shadows and hover lift effects
- Clean transitions and smooth interactions

**Medium influences:**
- Source Serif 4 serif font for prose/reading
- Large hero images on articles
- Image-rich article cards
- Generous typography and reading space
- Focus on content consumption experience

The website must feel like:
- A premium reading experience
- Structured intelligence
- Calm authority with visual richness
- Substantial depth

---

# 3. Visual System

## Typography

Headings/UI: Inter (400–800)
Prose/Reading: Source Serif 4 (400, 600, 700)

Max content width: ~720px (articles), ~1080px (wide layouts)
Line height: 1.6–1.8

Clear heading hierarchy:
H1 – Strong identity
H2 – Structural sections
H3 – Sub-arguments

## Hero Images

- Articles should have hero images (16:9 aspect ratio)
- Images support zoom-on-hover in cards
- Featured articles use horizontal card layout with large image

---

# 4. Color System

## Dark Mode (Default)

Background: #0a0a0c
Primary Text: #f5f5f7
Secondary Text: #86868b
Tertiary Text: #6e6e73
Surface: #1c1c1e
Surface Hover: #2c2c2e
Border: rgba(255,255,255,0.08)
Accent: #2997ff
Accent Soft: rgba(41,151,255,0.1)
Glass BG: rgba(10,10,12,0.8)
Glass Border: rgba(255,255,255,0.06)

## Light Mode

Background: #ffffff
Primary Text: #1d1d1f
Secondary Text: #6e6e73
Surface: #f5f5f7
Border: rgba(0,0,0,0.08)
Accent: #0071e3
Glass BG: rgba(255,255,255,0.8)

## Gradients (subtle, not marketing)

Hero gradient: subtle radial from accent-soft
Subtle gradient: for newsletter/CTA sections

---

# 5. Information Architecture

## Navigation

- Home
- Insights
- Focus
- About
- Newsletter
- Contact

Plus in header:
- Social links (X, LinkedIn, Medium)
- Language toggle (EN/DE)
- Theme toggle (dark/light)
- Mobile hamburger menu

## Footer

- Brand tagline
- Content nav column (Insights, Focus, Newsletter)
- More nav column (About, Contact, RSS Feed)
- Social links (X, LinkedIn, Medium)
- Legal links (Impressum, Datenschutz)
- Copyright

## Legal Pages

- /impressum — German legal requirement
- /datenschutz — Privacy policy (DSGVO compliant)

---

# 6. Page-Level Architecture

## Home

Must include:

1. Gradient hero with positioning (eyebrow badge + headline + sub + CTAs)
2. Featured article (horizontal card with hero image)
3. Recent articles grid (2-col with image cards)
4. Five Thinking Layers section (linked cards with arrows)
5. Newsletter CTA section (gradient background)
6. Rich footer

No testimonials.
No logo walls.
No social proof blocks.

---

## Insights

- Category filter badges (client-side JS, URL params sync)
- 2-column article card grid with hero images
- All 5 thinking layers as filter options

---

## Article Page

Must include:

1. Large hero image (full-width with rounded bottom corners)
2. Centered header with category badge, date, reading time
3. Title + lead paragraph
4. TL;DR block (subtle surface panel with check icon)
5. Structured longform content (serif prose)
6. Newsletter CTA at end (inline, not popup)

No floating popups.
No intrusive share bars.

---

## Focus Page

- Gradient hero with eyebrow
- Interactive layer cards with number, description, link to filtered insights
- "Why this structure?" section

---

## About Page

Must include:

- Profile photo (circular, 140px)
- Intro paragraph
- Background section (education, consulting, career)
- "What I do" section (hands-on, coding, cloud, AI)
- "Why I write" section
- "What drives me" section (including father perspective)
- Sidebar cards (Contact CTA, Newsletter CTA)

No CV-style timeline.
Short personal context with substance.

---

## Newsletter Page

- 2-column layout with info + sticky signup card
- What it is, for whom, what you get, signup form

Tone: Calm. Confident. Executive.

---

## Contact Page

- 3-column icon cards (For whom, Topics, Format)
- Direct CTA button

---

# 7. Component Standards

## Buttons

- Pill-shaped (border-radius: 980px)
- Solid accent color (primary)
- Outline variant (secondary)
- Large variant for heroes/CTAs
- Subtle hover transitions
- No heavy shadows

## Cards

- Surface background with border
- Rounded corners (var(--radius-lg))
- Hover: lift with translateY(-2px) and enhanced shadow
- Article cards include hero image, badge, meta, title, description

## Article Cards

- Hero image with 16:9 aspect ratio, object-fit cover
- Zoom on hover (scale 1.03)
- Category badge + date + reading time
- Featured variant: horizontal layout, larger image

## TL;DR Block

- Surface panel with accent-colored label
- Check icon list items
- Subtle left border or accent highlight

## Cookie Consent

- Fixed bottom banner, non-intrusive
- Accept/Decline buttons + privacy link
- Persists in localStorage
- Respects language toggle

---

# 8. Internationalization

- English is the default language
- German available via toggle button in header
- Client-side i18n using data-i18n attributes
- Translations stored in /src/i18n/translations.ts
- Language preference persisted in localStorage
- No-FOUC: language applied before first paint
- Cookie consent banner also respects language toggle

---

# 9. UX Principles

- Reading > visuals, but visuals enhance reading
- Structure > decoration
- Flow > effects
- Speed > animations
- Touch targets: minimum 44px on mobile

No:
- Auto-play elements
- Parallax effects
- Popups (except cookie consent, once)

Scrolling should feel smooth and natural.

---

# 10. Conversion Philosophy

Primary conversion: Newsletter signup
Secondary conversion: Strategic conversations

CTAs must feel:
- Confident
- Calm
- Direct

Avoid: "Get Started", "Limited offer", "Secure your spot"
Prefer: "Operator Letter abonnieren", "Artikel lesen", "Gespräch anfragen"

---

# 11. Analytics Integration

Tools:
- Cloudflare Web Analytics (privacy-friendly, enabled via dashboard — no client-side script)
- PostHog (event tracking)

Implementation note:
- Cloudflare Web Analytics requires no code — it is enabled in the Cloudflare dashboard.
- Cookie-free, GDPR-compliant by design.

No aggressive cookie banners.
No marketing pixel clutter.

---

# 12. Performance Standards

- Astro 5 static-first
- Cloudflare Pages hosting (via @astrojs/cloudflare adapter)
- Lighthouse score > 90
- Minimal client-side JS (theme toggle, i18n, filters, cookie consent)
- Semantic HTML
- Accessible contrast ratios
- Structured data (Schema.org)
- RSS feed (/rss.xml)
- Sitemap (auto-generated)

Performance is part of the brand.
Slow websites signal sloppy thinking.

---

# 13. Responsive Design

Three breakpoints:

- Desktop: > 960px
- Tablet: 481px – 768px (single column grids, adapted spacing)
- Mobile: <= 480px (hamburger menu, stacked layouts, smaller typography)

Mobile specifics:
- Hamburger menu with animated X toggle
- Social links hidden in header (visible in footer)
- Pill buttons stack vertically
- Touch-friendly 44px minimum tap targets

---

# 14. Design Anti-Patterns

Never use:

- Neon colors
- Aggressive marketing gradients
- Testimonial sliders
- Countdown timers
- Pop-up modals (except cookie consent)
- Startup buzzword visuals
- Influencer-style imagery
- Stock photography that feels generic

Subtle gradients and hero images are encouraged.
They should enhance readability and feel premium, not loud.

---

# 15. Brand Expression

The website must communicate:

- Structural clarity
- Intellectual honesty
- Hands-on builder mindset
- Tech enthusiasm
- Executive seriousness
- Personal grounding

It should feel like:
A premium, intelligent space where a CEO who codes shares serious ideas.

---

# Final Rule

If any design decision conflicts with:

- Executive clarity
- Structural thinking
- Personal DU-tone
- Analytical depth
- Calm authority
- Performance-first mindset
- Apple × Medium visual quality

It must be revised.

The website is an extension of how you think and build.
