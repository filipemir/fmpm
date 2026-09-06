import { getCollection, type CollectionEntry } from 'astro:content';

// Posts from before the site's actual relaunch are legacy samples — the
// pages stay reachable directly, they just don't show up in any listing.
const LISTING_CUTOFF = new Date('2026-09-01T00:00:00Z');

const byDateDesc = (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
    b.data.date.valueOf() - a.data.date.valueOf();

// Every post, drafts included — the source for individual post routing
// (writing/[slug].astro's getStaticPaths), so a draft's page still builds
// and its URL stays reachable directly. Never use this for anything that
// surfaces posts as a list (a draft must not appear there) — use
// getSortedPosts/getListedPosts instead.
export async function getAllPosts(): Promise<CollectionEntry<'posts'>[]> {
    const posts = await getCollection('posts');
    return posts.sort(byDateDesc);
}

// Draft posts are excluded here — the one place every listing-style
// consumer (the /writing index, RSS, the homepage's recent/pinned
// sections) pulls from — per CLAUDE.md's content-collection rule that
// drafts stay out of listings/RSS/sitemap. astro dev shows drafts here too
// so a listing can be previewed as it'll look once a post is published.
export async function getSortedPosts(): Promise<CollectionEntry<'posts'>[]> {
    const posts = await getCollection(
        'posts',
        ({ data }) => import.meta.env.DEV || !data.draft
    );
    return posts.sort(byDateDesc);
}

export async function getListedPosts(): Promise<CollectionEntry<'posts'>[]> {
    const posts = await getSortedPosts();
    return posts.filter((p) => p.data.date >= LISTING_CUTOFF);
}
