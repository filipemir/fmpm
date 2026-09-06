import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// Static by default. Individual pages can opt into on-demand rendering later
// (e.g. a data viz page that calls an API at request time) by exporting
// `export const prerender = false` from that page — the Vercel adapter
// serves those as serverless functions alongside the prebuilt static pages.

// Draft posts still build (see getStaticPaths in writing/[slug].astro) so
// their URLs are reachable directly — this scans their frontmatter to keep
// them out of the sitemap specifically. astro:content isn't available in
// this config context, hence the small manual frontmatter read rather than
// a getCollection() call.
const postsDir = fileURLToPath(new URL('./src/content/posts', import.meta.url));
const draftSlugs = new Set(
    readdirSync(postsDir)
        .filter((f) => f.endsWith('.mdx'))
        .filter((f) => {
            const frontmatter =
                readFileSync(`${postsDir}/${f}`, 'utf8').split('---')[1] ?? '';
            return /^draft:\s*true\s*$/m.test(frontmatter);
        })
        .map((f) => f.replace(/\.mdx$/, ''))
);

export default defineConfig({
    site: 'https://fmpm.dev',
    output: 'static',
    adapter: vercel(),
    integrations: [
        mdx(),
        sitemap({
            filter: (page) => {
                const slug = page.replace(/\/$/, '').split('/').pop();
                return !draftSlugs.has(slug);
            }
        })
    ],
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport'
    },
    redirects: {},
    markdown: {
        // "css-variables" emits tokens as var(--shiki-token-*) instead of fixed
        // colors, so the same highlighted output can be tinted per theme (see
        // the --shiki-* mappings in src/styles/global.css) instead of shipping
        // a light and dark Shiki theme.
        shikiConfig: { theme: 'css-variables' }
    }
});
