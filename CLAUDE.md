# Astro Agent Rules — fmpm.dev

**[HARD]** invariant. **[DEFAULT]** expected; deviate only with a one-line
reason in the change summary. **[OPEN]** judgment — keep it small, say what you
chose.

**`npm run verify` failing is a failure.** The checks are the source of truth
for every mechanically enforceable rule and are not restated here. This document
covers only what a script can't decide.

Gap not covered here? Flag it. Don't halt over trivia — make the smallest
reasonable choice and note it.

## Static analysis

**[HARD] Make liberal use of static analysis.** If a rule can be expressed as a
lint rule, a type, or a check script, implement it that way — in the same change
that introduces the rule. Prose rules are rules someone has to remember; checks
are rules that hold. When a new convention gets decided, either it gets a check
or it gets an explicit note saying why it can't have one.

## Working constraints

Changes are reviewed in a few minutes, often on a phone. Reviewability outranks
elegance.

- **[HARD] One concern per change.** No drive-by refactors or renames. Spotted
  something? List it at the end.
- **[HARD] No new runtime dependencies** without asking. CI-only dev deps are
  fine.
- **[DEFAULT] Prefer the boring diff.**
- **[DEFAULT] Summarize each change in under five lines:** what changed, what it
  affects, what you were unsure about.

## Done means

1. `npm run verify` passes.
2. `npm run build` adds no new warnings.
3. The page still reads and navigates with JS disabled.
4. No new console errors.

## Structure

```
src/
├── pages/          # routes
├── layouts/        # BaseLayout + wrappers
├── components/     # flat until ~15 files
├── content/        # one folder per collection
├── content.config.ts
├── assets/         # optimizable images
├── styles/         # global.css — tokens and resets only
└── lib/            # pure utilities
```

**[DEFAULT]** Split `components/` into `ui/` and `features/` only past ~15
files, as its own change.

## Components

- **[HARD]** Slots for markup, props for data. Never markup as a string prop.
- **[DEFAULT]** One responsibility. Layout + data-fetching + unrelated UI means
  split before adding.
- **[DEFAULT]** Extract on the third occurrence. Two is usually coincidence, and
  extracting there produces props that exist only to reconcile two call sites.
  Exception: byte-identical markup in the same feature. Never speculative.

## Layouts

- **[HARD]** One `BaseLayout.astro` owns `<html>`, `<head>`, nav, footer.
- **[HARD]** All other layouts wrap it. Never duplicate its contents.
- **[HARD]** SEO/meta are props into the layout, never hardcoded per page.
- **[DEFAULT]** Per-page `<head>` additions go through `<slot name="head" />`.

## Content collections

- **[HARD]** Every collection has a Zod schema in `content.config.ts`.
- **[HARD]** Frontmatter image paths use the `image()` helper.
- **[HARD]** Required fields: `title`, `description`, `pubDate`. `draft`
  defaults `false`.
- **[HARD]** `draft: true` is excluded from listings, RSS, and sitemap in
  production; visible in `astro dev`.
- **[HARD]** Slug comes from the filename. Set an explicit `slug` only to
  preserve an already-published URL.
- **[HARD]** Ordering is `pubDate`, never the filename. Any other ordering need
  is a typed frontmatter field, not a naming convention.

## Islands & hydration

Walk in order. Stop at the first that works.

1. **CSS only** — `:hover`, `:focus-visible`, `:checked`, `@keyframes`,
   transitions.
2. **Plain `<script>`** — needs JS, no persistent state: toggles, scroll
   classes, canvas/CSS animation.
3. **Alpine** — real state (open/closed, selection, form values). Default for
   real interactivity.
4. **React island** — only if state is too complex to stay declarative in
   Alpine, or a React-only library is required. Justify in a comment above the
   directive.

- **[HARD]** Alpine expressions stay trivial. TypeScript can't see inside
  `x-data`, so real logic goes in a typed `lib/` module.
- **[HARD]** `client:load` only for must-run-immediately (currently: the
  banner). `client:visible` otherwise. `client:idle` for non-critical.
  `client:only` disallowed unless SSR is impossible.

### Banner

Always-on JS animation — the only legitimate one.

- **[HARD]** Degrades to a static fallback with JS disabled. Never blank or
  broken.
- **[HARD]** No framework. Plain `<script>` or Alpine.

## Navigation

- **[HARD]** `prefetch` on with `prefetchAll: true`,
  `defaultStrategy: 'viewport'`. Main reason navigation feels instant.
- **[HARD]** `ClientRouter` is on, so a navigation is a swap, not a fresh
  document. Every script has to say how it survives one. Two shapes are in use:
  the header is `transition:persist`ed and its module runs once, so it
  re-derives what a swap drops (`astro:after-swap` reapplies `data-theme` and
  re-places the nav dot from the URL); per-page scripts wire up inside
  `astro:page-load`, which fires on first load and after every swap, because a
  top-level call would only ever run once. A new script that does neither works
  on first load and silently stops on the second navigation.
- **[OPEN]** Not mechanically checked: both shapes are legitimate, and which one
  a script needs depends on whether its markup is persisted, which a lint rule
  can't see. Review has to catch it.
- **[HARD]** URL changes to a published page ship with a redirect in the same
  change.

## Performance budget

Targets, not proxies. If a rule conflicts with the budget, the budget wins and
the rule gets revised.

- **[HARD]** ≤ 40 KB gzipped JS per page.
- **[HARD]** ≤ 100 KB gzipped CSS + JS per page.
- **[HARD]** Lighthouse performance ≥ 95, throttled mobile, per representative
  page.
- **[DEFAULT]** Flag any change adding > 10 KB gzipped to a page, even under
  budget.

## Styling

No CSS framework. Tokens plus scoped styles are the whole system.

- **[HARD]** Scoped `<style>` only. `styles/global.css` holds tokens and resets,
  nothing else.
- **[HARD]** Every color, spacing, radius, font-size is a `var(--token)`.
  Missing token? Add it to `global.css` first.
- **[HARD]** Theming via `data-theme` on `<html>`, set by an `is:inline` script
  before paint. No flash.

## Images

- **[HARD]** `astro:assets` only. Optimizable images in `src/assets/`; `public/`
  only for fixed-path unprocessed files.
- **[HARD]** `alt` is a real description — the check catches missing, not
  useless. `alt=""` only for decorative, with a comment.
- **[HARD]** Fixed-size elements use `densities={[1,2]}`; viewport-relative use
  `widths`/`sizes` or `layout`. Don't mix for one use case.
- **[HARD]** `loading="lazy"` default. `eager` + `fetchpriority="high"` only for
  the largest above-the-fold image.
- **[DEFAULT]** Full-size variants via `getImage()`, fetched on demand — never
  pre-loaded alongside thumbnails.

## Not checked

Component extraction judgment; whether Alpine was the right rung; whether `alt`
text is good; whether a change is one concern. That's what review is for.
