import { getCollection, type CollectionEntry } from 'astro:content';

// Posts from before the site's actual relaunch are legacy samples — the
// pages stay reachable directly, they just don't show up in any listing.
const LISTING_CUTOFF = new Date('2026-09-01T00:00:00Z');

// Draft posts are excluded here (the one place every consumer — the
// listing, individual post routing, and RSS — pulls from) so they don't
// build as real pages in production, per CLAUDE.md's content-collection
// rules, while staying reachable in `astro dev` for previewing.
export async function getSortedPosts(): Promise<CollectionEntry<'posts'>[]> {
    const posts = await getCollection(
        'posts',
        ({ data }) => import.meta.env.DEV || !data.draft
    );
    return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getListedPosts(): Promise<CollectionEntry<'posts'>[]> {
    const posts = await getSortedPosts();
    return posts.filter((p) => p.data.date >= LISTING_CUTOFF);
}
