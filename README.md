# DSC — Delhi Skating Community

Monorepo for the Delhi Skating Community ([@delhiskatingcommunity](https://www.instagram.com/delhiskatingcommunity/)) website.

## Stack

- **Monorepo:** Turborepo + Yarn workspaces
- **Frontend:** Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- **Node:** 20 LTS (see `.nvmrc`)

## Layout

```
apps/
  web/    # Next.js site (Home, About, Events, Contact)
```

A NestJS API (`apps/api`) and shared `packages/*` will be added later when backend logic (registration, auth) is required.

## Getting started

```bash
yarn install
yarn dev
```

Then open http://localhost:3000.

## Scripts

| Command | What it does |
|---|---|
| `yarn dev` | Start all apps in dev mode (Turbo) |
| `yarn build` | Build all apps for production |
| `yarn lint` | Lint all apps |
| `yarn typecheck` | TypeScript check across the monorepo |

## Content

Events and community info are hardcoded in `apps/web/src/data/` for the MVP. They are accessed exclusively through the `apps/web/src/data/lib/*` functions so the data source can later be swapped to a CMS (e.g. Contentful) without touching pages or components.
