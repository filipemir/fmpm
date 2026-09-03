import { getCollection, type CollectionEntry } from 'astro:content';

// Posts from before the site's actual relaunch are legacy samples — the
// pages stay reachable directly, they just don't show up in any listing.
const LISTING_CUTOFF = new Date('2026-09-01T00:00:00Z');

export async function getSortedPosts(): Promise<CollectionEntry<'posts'>[]> {
    const posts = await getCollection('posts');
    return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getListedPosts(): Promise<CollectionEntry<'posts'>[]> {
    const posts = await getSortedPosts();
    return posts.filter((p) => p.data.date >= LISTING_CUTOFF);
}
