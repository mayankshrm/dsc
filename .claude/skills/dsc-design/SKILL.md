---
name: dsc-design
description: Project-specific brief for the Delhi Skating Community website at d:/code/dsc. Use alongside frontend-design whenever building or restyling UI in this repo. Encodes brand identity (bilingual wordmark, IG handles, disciplines), the locked-in skate-mag direction, and project-specific do-not-undo decisions. Does not duplicate general design taste — that lives in frontend-design.
---

This is the DSC-specific brief. It composes with [`frontend-design`](../frontend-design/SKILL.md), which provides the universal taste rules. Read that one first if you haven't — it governs unconditionally. This file only adds what `frontend-design` cannot know about *this* project.

## Brand identity

- **Name:** दिल्ली Skating Community | DSC. The bilingual lockup is the brand. **Devanagari (दिल्ली) and Latin (Skating Community) must always appear together and visually weigh equally** — when they don't, the Devanagari looks weedy.
- **Instagram:** [`@delhiskatingcommunity`](https://www.instagram.com/delhiskatingcommunity/) (~9.4K followers). Queries go to [`@gosk8erboi`](https://www.instagram.com/gosk8erboi/).
- **Disciplines:** inline · quad · skateboard · hoverboard. Always treat as a flat set — no hierarchy between them. Use the `Discipline` type and `DISCIPLINE_LABELS` from [`apps/web/src/data/lib/types.ts`](../../../apps/web/src/data/lib/types.ts).
- **Tone:** community-driven, inclusive across ages and skating styles. **Not** a coaching academy, **not** corporate, **not** "premium". Free to attend, no membership.
- **Founded:** 2019. Meetups happen on weekends, year-round.

## Aesthetic direction (locked)

> Underground skate-mag energy. Reference register: Palace, Polar, Bronze 56K, Thrasher, Patta.
> **If the page could plausibly appear on an Indian government portal, it's wrong.**

That's the test. Every design choice goes through it.

Specific colours and fonts live in code (the source of truth) — see [`apps/web/src/app/globals.css`](../../../apps/web/src/app/globals.css) and [`apps/web/tailwind.config.ts`](../../../apps/web/tailwind.config.ts). Don't re-state them here; they'd drift.

## Do-not-undo decisions

These are project-level choices that must not be silently regressed in future sessions:

- ❌ Don't reintroduce the **navy + electric-yellow** combo. v1 looked institutional; the user explicitly rejected it.
- ❌ Don't switch back to **soft 1px borders** or **rounded-xl shadcn defaults**. Borders are ink-thick; cards look stamped, not floating.
- ❌ Don't **centre-align the hero** or any major page heading. Off-grid asymmetry is the point.
- ❌ Don't use **Inter, Roboto, Arial, system fonts, or Space Grotesk** (also enforced by `frontend-design` — repeated here because it was the v1 mistake).
- ❌ Don't replace **hard-offset shadows** (`Npx Npx 0 ink`) with soft-blur shadows. The hard offset is the zine convention.
- ✅ Always **bleed at least one photo off a viewport edge** on the home page.
- ✅ Always use **mono type for metadata** (dates, locations, badges, IDs, "EST 2019", etc.). Mono-for-meta = zine-coded.
- ✅ Reach for the canonical primitives below before inventing new ones.

## Canonical primitives (reuse before inventing)

| Primitive | File | Purpose |
|---|---|---|
| `WordmarkLockup` | `apps/web/src/components/ui/WordmarkLockup.tsx` | The bilingual दिल्ली + SKATING COMMUNITY mark. Used in Header, Footer, Hero. Single source of truth for the brand mark. |
| `Marquee` | `apps/web/src/components/ui/Marquee.tsx` | Scrolling ticker strip. Used between page sections as a divider. |
| `Sticker` | `apps/web/src/components/ui/Sticker.tsx` | Rotated badge for layering over photos and cards (`EST '19`, `FREE`, `BYO HELMET`). |
| `Hero` | `apps/web/src/components/home/Hero.tsx` | Reference for the headline + photo-bleed + sticker-overlay pattern. |
| `EventCard` | `apps/web/src/components/events/EventCard.tsx` | Reference for the ink-bordered card + hard-offset hover + mono-metadata pattern. Mirror this when introducing any new card type. |

## Out of scope (don't build until the user explicitly asks)

- Dark mode
- New pages (Workshops, Gallery, Films, Blog)
- Headless CMS migration (Contentful etc.) — data layer is hardcoded behind `apps/web/src/data/lib/*` for a reason
- NestJS backend / API
- Instagram live-feed embed
- Authentication, registrations DB, payments

## Project context

- Monorepo: Turborepo + Yarn workspaces
- Single app: `apps/web` (Next.js 16, App Router, TypeScript strict, Tailwind)
- Content: hardcoded TS files behind `apps/web/src/data/lib/*` — the migration seam. Pages call `await getEvents()` etc., never the raw arrays.
- Approved revamp plan: `C:/Users/Suresh/.claude/plans/hi-claude-now-we-adaptive-feigenbaum.md`
