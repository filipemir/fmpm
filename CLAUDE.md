# 🤖 Agent Rules — fmpm.dev

## Known gaps

Things we know we want but haven't built yet. Work through and remove as they
land.

- **Playwright integration tests** — `npm run test` target and page-type suites
  don't exist yet.
- **"Other validation" checklist** — the manual checks under Validation → Other
  validation should migrate to static analysis or tests over time.

## Change Management

- One feature or concern per PR. Prefer stacked PRs over large PRs
- Keep PR descriptions succinct, clear, and free of Claude-isms
- Add no new runtime dependencies unless the user gives explicit consent
- URL changes to a published page must be coupled with a redirect in the same
  change to preserve existing URLs. Add the old → new mapping to the `redirects`
  block in `astro.config.mjs` (e.g. `'/old-slug': '/new-slug'`).

## Code Style Guidelines

- Code must first and foremost be readable, extensible, and testable.
- Minimize the use of comments. Include them IFF code itself cannot express its
  purpose or justification. Comments must never simply restate what the code
  already does.
- Each component should have one responsibility. Layout composition,
  data-fetching, UI markup, and business logic are all different
  responsibilities that warrant different components.
- Use astro slots for markup, and props for data. Never pass in markup as a
  string prop.
- Every collection must have a Zod schema.
- Blog post slugs comes from the filename. Set an explicit `slug` only to
  preserve an already-published URL.

### Structure

```
src/
├── pages/          # routes
├── layouts/        # BaseLayout + wrappers
├── components/     # Reusable UI
├── content/        # one folder per collection
├── assets/         # optimizable images
├── styles/         # global and shared styling
└── lib/            # pure utilities
```

- One base `Layout.astro` owns `<html>`, `<head>`, nav, footer.
- All other layouts must be wrapped in the base Layout. Never duplicate its
  contents.
- SEO/meta are props in the layout, never hardcoded per page.

### JS usage

- JS is acceptable but minimize its usage when possible. In order:
    1. CSS only by default: privilege `:hover`, `:focus-visible`, `:checked`,
       `@keyframes`, transitions over its JS analogues
    2. Plain `<script />` tags for interactivity that doesn't require complex
       state, like canavas or CSS animation
    3. Alpine.js for more complex interactivity. In this case, Alpine
       expressions must stay trivial. TypeScript can't see inside `x-data`, so
       real logic MUST go in a typed `lib/` module.
    4. React islands where they are truly warranted: if state is too complex to
       stay declarative in Alpine, or a React-only library is required.
- All JS usage MUST degrade gracefully. The site must always be usable with or
  without JS
- Load as necessary: `client:load` only if JS must run immediately,
  `client:visible` otherwise. `client:idle` for non-critical. `client:only`
  disallowed unless SSR is impossible.

### Styling

- `styles/global.css` holds only truly global styles. Styles should otherwise be
  scoped to their relevant components
- Every color, spacing, radius, font-size is a `var(--token)`. If a token is
  missing, add it to `global.css` first.

### Images

We should rely on Astro tooling to optimize images for us:

- Use `astro:assets` only. Optimizable images in `src/assets/`; `public/` only
  for fixed-path unprocessed files.
- `loading="lazy"` should be the default. `eager` + `fetchpriority="high"` only
  for the largest above-the-fold image.
- Full-size variants via `getImage()`, fetched on demand — never pre-loaded
  alongside thumbnails.

## Performance

Site should be performant and lightweight. Hard limits (runnable locally today;
CI enforcement pending — see Known gaps):

- Bundle size limits for JS and CSS bundles, checked via `npm run check:budget`
  (thresholds in `scripts/check-budget.mjs`).
- Each new type of page (post, now, home, books, etc) must have a representative
  Lighthouse performance test with a score >= 95, checked via
  `npm run verify:perf` (config in `lighthouserc.json`).

Additionally, we should leverage prefetch to keep navigation snappy: `prefetch`
on with `prefetchAll: true` and `defaultStrategy: 'viewport'`.

## Validation

Static analysis and tests run on CI.

### Static analysis

Run linting, typechecking, formatting, and other checks via `npm run verify`.

- Treat static analysis failures seriously. Failures must be remediated. If one
  doesn't make sense in context, flag it to the user. Don't work around it or
  add ignore directives without explicit consent
- Find opportunities to expand static analysis. If a rule can be expressed as a
  lint rule, a type, or a check script, we should do so. When a new convention
  gets decided, please actively propose a check if one is possible.

### Testing

Run via `npm run test`

- Every page type should have a suite of playwright integration tests.
- Bug resolutions must be accompanied by an integration test to prevent against
  regression

### Other validation

Ensure that:

1. `npm run build` completes with no errors or warnings.
2. The page still reads and navigates with JS disabled
3. No new console errors.
4. No unintentional typos on any posts or changes submitted
