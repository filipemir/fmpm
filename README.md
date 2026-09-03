# [fmpm.dev](https://fmpm.dev)

A small, mostly-static personal site: an intro, posts, a reading list, and a
`/now` page. Built with [Astro](https://astro.build).

## Why Astro

The site should be static by default, but able to grow the occasional dynamic
page later (an embedded data viz, a page backed by a live API call) without a
rewrite. Astro's island model fits that directly, and its official adapters
cover both the current host (Vercel) and a possible future move to Cloudflare
Pages without a framework change.

`output: "static"` in `astro.config.mjs` is the default for every page. To make
one page dynamic later, add `export const prerender = false;` to that page —
it'll be served on-demand by the adapter instead of being pre-rendered,
everything else stays static.

## Structure

- `src/content/posts/` — long-form posts (MDX), schema in
  `src/content.config.ts`
- `src/data/` — `books.json`, `notes.json`, `now.json`: structured data that
  doesn't need a body per entry
- `src/components/`, `src/layouts/` — Astro components/layouts
- `src/scripts/` — the small bits of vanilla JS the design actually needs: the
  header's ASCII band (`bands.js`, ported as-is), theme toggle + nav dot
  (`header.js`), and the post image lightbox (`lightbox.js`)

## Development

```bash
npm install
npm run dev
```

`npm run build` type-checks (`astro check`) and builds to `dist/`.

## Content

- **Posts** live in `src/content/posts/*.mdx`. `hello-world.mdx` and
  `mocking-auth0-tokens.mdx` are the original placeholder/sample posts carried
  over as-is; `migrations-are-a-people-problem.mdx` is a fully-built sample post
  demonstrating the syntax-highlighted code block, footnotes, and
  click-to-expand image pattern.
- **Books** (`src/data/books.json`) were migrated from the old
  `src/data/books/*.ts` year files — 198 entries, `reread` is derived by
  detecting a repeated title+author.
- **Notes** (`src/data/notes.json`) are still placeholder content — there's no
  real notes archive yet. The page exists at `/notes` but isn't linked from the
  nav (matching the original design decision to drop Notes from navigation while
  keeping the page around).
- **Now/Then** (`src/data/now.json`) — the September 2026 entry is real. The
  older entries (April 2026 and before) are carried over from the design mockup
  and were never confirmed as real content; a couple of them mention Lisbon,
  which conflicts with the bio's "now live in Maine" — worth a pass before
  publishing.
