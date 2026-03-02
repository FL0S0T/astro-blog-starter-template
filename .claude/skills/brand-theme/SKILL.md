---
name: florian-soter-brand-theme
description: Applies Florian Soter's personal brand identity, design system, and visual language to any website, content artifact, landing page, presentation, or visual output. Use whenever floriansoter.io style, tone, layout, typography, or design consistency is required.
license: Internal use for floriansoter.io
version: 2.0.0
---

# Florian Soter – Personal Brand Styling

## Overview

This skill enforces the official design language and visual identity of **floriansoter.io**.

The platform represents:

- A hands-on CEO, tech enthusiast & builder
- Visionary but analytical thinking
- Personal & friendly tone (DU-style)
- Substantial, hype-free insights
- A calm, structured intellectual presence with visual richness

This is not a marketing brand.
It is the digital thinking platform of a hands-on CEO who codes, builds and thinks structurally in the AI age.

Keywords: Apple × Medium design, CEO brand, intellectual platform, dark mode, glassmorphism, hero images, serif reading, strategic clarity, personal but professional

---

# Design Philosophy — Apple × Medium

The visual identity blends Apple's refinement with Medium's reading experience:

**Apple influences:**
- Glassmorphism (backdrop-filter blur on header)
- Pill-shaped buttons (border-radius: 980px)
- Subtle hero gradients
- Refined shadows and hover lift effects
- Smooth, purposeful transitions

**Medium influences:**
- Source Serif 4 for longform prose
- Large hero images on articles and cards
- Generous typography and whitespace for reading
- Image-rich article cards

Design should feel like:
A premium, intelligent workspace — not a startup landing page, not a minimal text blog.
Visually rich but never loud.

---

# Color System

## Core Colors — Dark Mode (Default)

Background: `#0a0a0c`
Primary Text: `#f5f5f7`
Secondary Text: `#86868b`
Tertiary Text: `#6e6e73`
Surface: `#1c1c1e`
Surface Hover: `#2c2c2e`
Border: `rgba(255,255,255,0.08)`
Border Strong: `rgba(255,255,255,0.15)`

---

## Accent Color

Primary Accent: `#2997ff`
Accent Soft: `rgba(41,151,255,0.1)`

Used for:
- Links
- Badges and highlights
- Active states
- Focus rings
- Blockquote borders
- Hero nebula gradients

Not used for buttons — buttons are monochrome (see UI Component Guidelines).

---

## Light Mode

Background: `#ffffff`
Primary Text: `#1d1d1f`
Secondary Text: `#6e6e73`
Surface: `#f5f5f7`
Accent: `#0071e3`
Glass BG: `rgba(255,255,255,0.8)`

---

## Gradients (subtle, purposeful)

Hero Gradient: subtle radial from accent-soft to transparent
Subtle Gradient: for newsletter CTA sections

No aggressive marketing gradients.
Gradients serve atmosphere, not conversion.

---

# Typography System

## Headings

Primary: Inter (Bold / Semi-Bold / Extra-Bold)
Fallback: -apple-system, Arial, Helvetica

Style:
- Clean, modern
- Strong hierarchy with letter-spacing: -0.04em on large headings
- No decorative fonts

---

## Body Text (Prose)

Primary: Source Serif 4 (for article/reading content)
Inter Regular for UI and non-prose text

Max text width: 720px
Line height: 1.6–1.8

Reading experience has priority over visual experimentation.

---

# Layout Principles

## Structural Rules

- Generous whitespace
- Clear vertical rhythm
- Light borders (1px, subtle)
- Cards with hover lift (translateY(-2px))
- Glassmorphism on sticky header
- Performance-first layout

---

## Page Composition

### Home

1. Gradient hero with eyebrow badge, headline, sub, CTAs
2. Featured article (horizontal card with hero image)
3. Recent articles (2-col grid with image cards)
4. Five Thinking Layers (linked cards with arrows)
5. Newsletter CTA section
6. Rich footer

### Article Layout

1. Large hero image (full-width, rounded bottom corners)
2. Centered header with category badge, date, reading time
3. TL;DR panel (surface background, accent label)
4. Longform structured content (Source Serif 4)
5. Newsletter CTA at end

---

# Voice Integration into Design

Because writing is:
- Personal, friendly, DU-tone, analytical

Design must:
- Avoid corporate coldness
- Avoid influencer aesthetics
- Avoid startup hype visuals
- Feel thoughtful, human, and premium

---

# UI Component Guidelines

## Buttons

- Pill-shaped (border-radius: 980px)
- **Monochrome Apple-style** — no accent color on buttons
- Dark mode primary: light fill (`#f5f5f7`) with dark text (`#1d1d1f`), hover → `#ffffff`
- Light mode primary: dark fill (`#1d1d1f`) with white text, hover → `#000000`
- Outline variant: transparent with subtle border, theme-aware text color
- Subtle hover transitions (scale, background)
- No heavy shadows or gradients
- Blue/accent reserved for links, badges, and focus states — not buttons

---

## Links

- Accent color
- Underline only on hover
- No decorative effects

---

## Cards

- Surface background with 1px border
- Rounded corners (--radius-lg, typically 16px)
- Hover: lift with shadow enhancement
- Article cards include hero images with zoom on hover

---

## Glassmorphism Header

- backdrop-filter: saturate(180%) blur(20px)
- Semi-transparent background
- Subtle border-bottom
- Sticky positioning

---

# Dark Mode Default

Default theme: Dark.
Light mode toggle available (persisted in localStorage).

Theme switch: no-FOUC via inline script in `<head>`.

---

# Design Anti-Patterns

Never use:

- Neon colors
- Aggressive marketing gradients
- Animated hero sections (parallax, auto-play)
- Oversized startup slogans
- Pop-up interruptions (except non-intrusive cookie consent)
- Aggressive CTA banners
- Generic stock photography

If design feels loud — refine.
If design feels trendy for trends' sake — simplify.
If design feels sales-driven — remove.

Subtle gradients, hero images and glassmorphism are encouraged when they serve the reading experience.

---

# Social Presence

Social links displayed in header (desktop) and footer:

- X/Twitter: https://x.com/FlorianSot64718
- LinkedIn: https://www.linkedin.com/in/floriansoter/
- Medium: https://flosot.medium.com

---

# Technical Alignment

- Astro 5 static-first rendering
- Cloudflare Pages via @astrojs/cloudflare adapter
- Minimal client-side JavaScript
- Lighthouse score > 90
- Semantic HTML
- Accessible contrast ratios
- RSS feed + auto-generated sitemap
- Client-side i18n (EN default, DE toggle)
- Cookie consent (localStorage, non-intrusive)

---

# Brand Essence

floriansoter.io represents:

- Structural clarity
- Intellectual honesty
- Hands-on builder mindset
- Tech enthusiasm
- Calm authority
- Human depth
- Vision without drama

If visual output conflicts with these values, redesign it.

---

# Usage Instruction

Use this skill whenever:

- Designing website pages
- Creating landing pages
- Generating visual artifacts
- Producing presentations
- Styling blog outputs
- Maintaining brand consistency

Always align visuals with:

CEO-level seriousness
Personal DU-tone warmth
Analytical structure
Apple × Medium visual quality
Performance-first thinking
