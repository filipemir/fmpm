// Turns every GFM footnote reference ([^1] markdown syntax, parsed by
// remark-gfm into real <sup><a data-footnote-ref> + a <section
// class="footnotes"> list) into a hover popover, by cloning that footnote's
// own list entry next to the reference. No per-post markup needed — any
// post using plain [^1] footnotes gets this for free. The native list at
// the bottom stays exactly as rendered, for anyone who doesn't hover.
//
// Post pages aren't persisted across transitions, so this re-runs on every
// astro:page-load rather than once at module top-level (see lightbox.js).

function initFootnotePopovers() {
  const refs = document.querySelectorAll(".prose [data-footnote-ref]");
  refs.forEach((ref) => {
    const sup = ref.closest("sup") || ref;
    if (sup.dataset.fnWrapped) return;

    const id = (ref.getAttribute("href") || "").slice(1);
    const li = id && document.getElementById(id);
    if (!li) return;

    const clone = li.cloneNode(true);
    const backref = clone.querySelector("[data-footnote-backref]");
    if (backref) backref.remove();
    const body = clone.querySelector("p") || clone;

    const wrapper = document.createElement("span");
    wrapper.className = "fn-popover";

    const bridge = document.createElement("span");
    bridge.className = "fn-bridge";
    bridge.setAttribute("aria-hidden", "true");

    const panel = document.createElement("span");
    panel.className = "fn-panel mono";
    panel.setAttribute("role", "tooltip");
    while (body.firstChild) panel.appendChild(body.firstChild);

    sup.replaceWith(wrapper);
    wrapper.appendChild(sup);
    wrapper.appendChild(bridge);
    wrapper.appendChild(panel);
    sup.dataset.fnWrapped = "true";
  });
}

document.addEventListener("astro:page-load", initFootnotePopovers);
