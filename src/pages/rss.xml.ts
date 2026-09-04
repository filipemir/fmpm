import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getListedPosts } from '@/lib/posts';

export async function GET(context: APIContext) {
    // Same set as the /writing listing (draft- and cutoff-filtered) — an RSS
    // feed announcing posts the site itself doesn't list would be odd.
    const posts = await getListedPosts();
    return rss({
        title: 'Filipe Miranda',
        description:
            'Filipe Miranda — staff engineer at Atticus, writing about software and the rest of it.',
        site: context.site!,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.blurb,
            pubDate: post.data.date,
            link: `/writing/${post.id}/`
        }))
    });
}
