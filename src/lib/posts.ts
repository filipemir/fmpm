import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import imageSize from 'rehype-probe-image-size';

const rehypePrism = require('@mapbox/rehype-prism');

const postsDirectory = join(process.cwd(), 'src', 'posts');

export function getPostSlugs() {
    return fs
        .readdirSync(postsDirectory)
        .filter((slug) => /\.mdx$/.test(slug))
        .map((slug) => slug.replace(/\.mdx$/, ''));
}

export const getPostBySlug = async (slug: string) => {
    const fullPath = join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'UTF-8');
    const {
        content,
        data: { date, title }
    } = matter(fileContents);
    const { compiledSource } = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [rehypePrism, [imageSize, { staticDir: 'public' }]]
        }
    });

    return {
        slug,
        compiledSource,
        date: date as Date,
        title: title as string
    };
};

export const getAllPosts = async () => {
    const slugs = getPostSlugs();
    const posts = (
        await Promise.all(slugs.map(async (slug) => await getPostBySlug(slug)))
    ).sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
};
