import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    blurb: z.string(),
    minutes: z.number().optional(),
    footnotes: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };
