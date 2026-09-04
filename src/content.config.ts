import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        blurb: z.string(),
        minutes: z.number().optional(),
        draft: z.boolean().default(false),
        pinned: z.boolean().default(false)
    })
});

const books = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
    schema: z
        .object({
            title: z.string().min(1),
            author: z.string().min(1),
            month: z.number().int().min(1).max(12),
            year: z.number().int().min(2010).max(new Date().getFullYear()),
            fav: z.boolean().optional()
        })
        .strict()
});

export const collections = { posts, books };
