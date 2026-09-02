// Click-to-expand for post figures. No-op if a page has none.
//
// Post pages aren't persisted across transitions (only the header is), so
// this needs to re-wire on every navigation — astro:page-load fires after
// every swap (including the first load), unlike a plain top-level call
// which would only ever run once thanks to ES module de-duplication.

function initLightbox() {
  const triggers = document.querySelectorAll("[data-lightbox-trigger]");
  const overlay = document.querySelector("[data-lightbox-overlay]");
  if (!triggers.length || !overlay) return;

  const overlayImg = overlay.querySelector("img");
  if (!overlayImg) return;

  triggers.forEach((trigger) => {
    const img = trigger.querySelector("img");
    trigger.addEventListener("click", () => {
      if (!img) return;
      overlayImg.src = img.src;
      overlayImg.alt = img.alt || "";
      overlay.hidden = false;
    });
  });

  overlay.addEventListener("click", () => {
    overlay.hidden = true;
  });
}

document.addEventListener("astro:page-load", initLightbox);

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const overlay = document.querySelector("[data-lightbox-overlay]");
  if (overlay && !overlay.hidden) overlay.hidden = true;
});
