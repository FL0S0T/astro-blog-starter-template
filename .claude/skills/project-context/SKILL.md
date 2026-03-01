---
name: florian-soter-project-context
description: Core project context for floriansoter.io. Defines positioning, mission, tone, publishing model, technical stack, analytics, and strategic intent. Must be loaded before generating content, copy, design, or strategy to ensure alignment with executive-level positioning and structural thinking.
version: 2.0.0
---

# floriansoter.io – Master Project Context

This document defines the strategic, editorial, and technical foundation of floriansoter.io.

Every piece of content, copy, design, or strategic output must align with this context.

---

# 1. Strategic Foundation

## Positioning

Florian Soter is a techie who became a CEO.

He was always a techie first — coding, building cloud architectures, shipping AI solutions. Strategy, M&A and delivery came later, but the techie never left. He still builds, codes and architects whenever time allows.

His real edge: bridging deep technical understanding with the real problems of people and businesses to create meaningful, sustainable solutions.

Background:
- Been a techie his whole life
- Completed an apprenticeship, then studied Business Informatics (Wirtschaftsinformatik) at TU Darmstadt
- Worked at consulting firms from his very first semester — focus was always technology: strategy, architecture, implementation
- Over the years, strategy and delivery came on top: M&A deals, tech due diligences, large-scale change programs, AI strategy development
- Introduced AI in highly regulated industries: energy, finance and insurance
- Still loves coding, cloud technology, AI and turning complex problems into running systems

He writes in DU-tone.

The tone is:

- Personal
- Friendly
- Analytical
- Structured
- Executive-level
- No hype
- No marketing tone

He is:

- Techie at heart, CEO by trade
- Coder, cloud architect, AI builder
- Operator who understands both sides — tech and business
- Consultant turned entrepreneur
- Father of two children
- Reflective but decisive
- Bridges deep technical understanding with real business problems

---

## Mission

To not only observe new technologies, but to test them in practice, understand their systemic implications, and implement them entrepreneurially.

To share mental models and operational insights that help leaders make structurally sound decisions in the AI age.

---

## Vision

To contribute to a world where technology is shaped by builders — not described by observers.

Where companies use AI and new systems consciously, responsibly, and strategically.

---

## Tone Rules

Always:

- DU-tone
- Clear structure
- Executive-level clarity
- Analytical precision
- Calm authority

Never:

- Use hype language
- Sound like marketing
- Use influencer-style hooks
- Use motivational fluff
- Overuse buzzwords

Personal context is allowed (e.g., father of two, consulting background, coding passion), but must always lead back to structural insight.

---

# 2. Intellectual Architecture

All content must align with one of the five thinking layers:

1. Systems & Strategy
2. Build & Execution
3. Applied Technologies
4. Enterprise Implications
5. Capital & Structure

This is not a random blog.

It is a structured thinking platform.

---

# 3. Publishing Model

## Rhythm

- Sunday: Longform article on website
- Monday: LinkedIn + X via Publer
- Wednesday: Medium repost
- Once per month: Newsletter ("Operator Letter")

---

## Standard Article Structure

Every article must include:

1. TL;DR (5–8 executive bullet points)
2. Context & Problem framing
3. Structural analysis / framework
4. Operator perspective (real-world insight)
5. Enterprise implications
6. Clear recommendations

Articles must end with actionable guidance.

---

# 4. Technical Setup

## Core Stack

Framework:
Astro 5 (static-first, performance-oriented)

Hosting:
Cloudflare Pages (via Wrangler / Cloudflare Workers adapter)

Deployment:
GitHub Push -> Cloudflare Build -> Global CDN

---

## Design System

The website follows an Apple × Medium design language:

- Glassmorphism header with backdrop-filter blur
- Hero images on articles (Unsplash or custom)
- Source Serif 4 for prose/reading, Inter for headings/UI
- Pill-shaped buttons (border-radius: 980px)
- Subtle gradients on hero sections
- Cards with images, hover lift effects
- Dark mode default with light mode toggle
- English default language with DE toggle (client-side i18n via data-i18n attributes)

---

## Social Links

- X/Twitter: https://x.com/FlorianSot64718
- LinkedIn: https://www.linkedin.com/in/floriansoter/
- Medium: https://flosot.medium.com

---

## Project Structure

/src
  /content
    /insights (all articles, sorted by category via frontmatter)
  /components
  /layouts
  /pages
  /styles
  /i18n
/public
  /images

---

## Content Collection Schema

title
description
pubDate
category (enum: systems-strategy, build-execution, applied-technologies, enterprise-implications, capital-structure)
tags
tldr (string array)
readingTime
heroImage (optional)
seoDescription (optional)

---

# 5. Website Structure

## Navigation

- Home
- Insights
- Focus
- About
- Newsletter
- Contact

## Legal Pages

- Impressum (/impressum)
- Datenschutz (/datenschutz)

## Features

- Dark/light mode toggle (localStorage)
- EN/DE language toggle (localStorage, client-side)
- Cookie consent banner (non-intrusive, localStorage)
- Category filtering on insights page (client-side JS)
- RSS feed (/rss.xml)
- Sitemap (auto-generated)

---

# 6. Newsletter

Primary Tool:
Brevo (`https://app.brevo.com/`)

Subscribers are stored in Brevo.
Not on the website.
Not in GitHub.
Not in Cloudflare.

---

## Newsletter Format

Monthly Operator Letter:

- Article summary
- Personal reflection
- Current experiments
- 1–2 external recommendations

Tone:
Slightly more personal.
Still structured.
Never marketing-heavy.

---

# 7. Social & Distribution

Tool:
Publer

Used for:
- LinkedIn posts
- X threads
- Scheduling

Medium is published separately.

---

# 8. Analytics Setup

## Website

Cloudflare Web Analytics:
- Pageviews
- Unique visitors
- Referrers
- Top articles

Integration note:
- Cloudflare Web Analytics is enabled via the Cloudflare dashboard — no client-side script required.
- Privacy-friendly, cookie-free, GDPR-compliant by design.

PostHog:
- newsletter_signup
- scroll_75
- article_completion
- returning_user
- category_click

---

## Social

- LinkedIn native analytics
- X native analytics
- Publer engagement data
- Medium statistics

---

## Newsletter

- Subscriber growth
- Open rate
- Click rate
- Unsubscribe rate

---

# 9. KPI Logic

Primary measurements:

Awareness -> Social impressions
Traffic -> Website visitors
Engagement -> Scroll depth > 75%
Conversion -> Newsletter signups
Loyalty -> Returning visitors
Authority -> Strategic inbound conversations

Vanity metrics are secondary.

---

# 10. Platform Objective

This is not:

- A marketing blog
- An influencer platform
- A tool comparison site

It is:

The digital thinking platform of a techie who became a CEO — who still writes code, builds cloud architectures, and bridges deep technical understanding with real business problems.

Personal.
Structured.
Executive-level.
Measured.
Scalable.
Substantial.

---

# Final Rule

If any output conflicts with:

- Executive clarity
- Structural thinking
- Calm authority
- Personal grounding
- Analytical precision

It must be revised.
