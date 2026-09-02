// Click-to-expand for post figures. No-op if a page has none.

function initLightbox() {
  const triggers = document.querySelectorAll("[data-lightbox-trigger]");
  if (!triggers.length) return;

  const overlay = document.querySelector("[data-lightbox-overlay]");
  const overlayImg = overlay ? overlay.querySelector("img") : null;
  if (!overlay || !overlayImg) return;

  const open = (src, alt) => {
    overlayImg.src = src;
    overlayImg.alt = alt || "";
    overlay.hidden = false;
  };
  const close = () => {
    overlay.hidden = true;
  };

  triggers.forEach((trigger) => {
    const img = trigger.querySelector("img");
    trigger.addEventListener("click", () => {
      if (img) open(img.src, img.alt);
    });
  });

  overlay.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) close();
  });
}

initLightbox();
