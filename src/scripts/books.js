// Favourites-only toggle on the Books page. Both views are already in the
// DOM (server-rendered); this just swaps which is visible. Not persisted
// across pages — post pages aren't persisted, so re-init on every load via
// astro:page-load rather than a top-level call (see lightbox.js).

function initBooksToggle() {
    const btn = document.querySelector('[data-favs-toggle]');
    const label = document.querySelector('[data-favs-label]');
    const allView = document.querySelector('[data-view="all"]');
    const favsView = document.querySelector('[data-view="favs"]');
    if (!btn || !allView || !favsView) return;

    let favsOnly = false;

    const render = () => {
        allView.hidden = favsOnly;
        favsView.hidden = !favsOnly;
        btn.setAttribute('aria-pressed', String(favsOnly));
        if (label)
            label.textContent = favsOnly ? 'All books' : 'Favourites only';
    };

    btn.addEventListener('click', () => {
        favsOnly = !favsOnly;
        render();
    });

    render();
}

document.addEventListener('astro:page-load', initBooksToggle);
