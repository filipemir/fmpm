// Click-to-expand for post images. Any <img> inside .prose gets this
// automatically — no per-post markup needed, plain markdown ![]() images
// included. No-op if a page has none.
//
// Post pages aren't persisted across transitions (only the header is), so
// this needs to re-wire on every navigation — astro:page-load fires after
// every swap (including the first load), unlike a plain top-level call
// which would only ever run once thanks to ES module de-duplication.

function initLightbox() {
    const images = document.querySelectorAll('.prose img');
    const overlay = document.querySelector('[data-lightbox-overlay]');
    if (!images.length || !overlay) return;

    const overlayImg = overlay.querySelector('img');
    if (!overlayImg) return;

    images.forEach((img) => {
        img.addEventListener('click', () => {
            overlayImg.src = img.currentSrc || img.src;
            overlayImg.alt = img.alt || '';
            overlay.hidden = false;
        });
    });

    overlay.addEventListener('click', () => {
        overlay.hidden = true;
    });
}

document.addEventListener('astro:page-load', initLightbox);

document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const overlay = document.querySelector('[data-lightbox-overlay]');
    if (overlay && !overlay.hidden) overlay.hidden = true;
});
