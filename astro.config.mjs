import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// Static by default. Individual pages can opt into on-demand rendering later
// (e.g. a data viz page that calls an API at request time) by exporting
// `export const prerender = false` from that page — the Vercel adapter
// serves those as serverless functions alongside the prebuilt static pages.
export default defineConfig({
  site: "https://fmpm.dev",
  output: "static",
  adapter: vercel(),
  integrations: [mdx(), sitemap()],
  markdown: {
    // "css-variables" emits tokens as var(--shiki-token-*) instead of fixed
    // colors, so the same highlighted output can be tinted per theme (see
    // the --shiki-* mappings in src/styles/global.css) instead of shipping
    // a light and dark Shiki theme.
    shikiConfig: { theme: "css-variables" },
  },
});
