// Drives the three genuinely-interactive pieces of the shared header:
// the theme toggle, the ASCII band (hero-sized on load, collapses on
// scroll, never grows back), and the nav dot that tracks the active/
// hovered page. Runs on every page since the header is shared.

const THEME_KEY = "fm-site-theme";
const WC = 80;
const BAND_MS_DEFAULT = 100;

function applyTheme(theme, persist) {
  document.documentElement.setAttribute("data-theme", theme);
  if (persist) {
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      /* private mode / storage disabled */
    }
  }
  const btn = document.querySelector("[data-theme-toggle]");
  if (btn) {
    const dark = theme === "dark";
    btn.textContent = dark ? "☀" : "☾";
    btn.setAttribute("title", dark ? "Switch to light" : "Switch to dark");
    btn.setAttribute("aria-label", "Toggle dark mode");
  }
}

function resolveTheme() {
  let saved = null;
  try {
    saved = window.localStorage.getItem(THEME_KEY);
  } catch (e) {
    /* ignore */
  }
  const prefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return saved === "dark" || (saved === null && prefersDark) ? "dark" : "light";
}

function initTheme() {
  // Not persisted: a page load with no saved choice should keep following
  // the system preference, not silently lock in whatever it said today.
  applyTheme(resolveTheme(), false);

  const btn = document.querySelector("[data-theme-toggle]");
  if (btn) {
    btn.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      applyTheme(isDark ? "light" : "dark", true);
    });
  }

  // The header (and its data-theme-setting script) persists across
  // client-side navigation, but <html>'s data-theme attribute doesn't —
  // it's only ever set by this script, never present in a page's raw
  // server-rendered markup, so a transition swap drops it. Reapply on
  // every swap; harmless when it was never actually lost.
  document.addEventListener("astro:after-swap", () => {
    applyTheme(resolveTheme(), false);
  });

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      let saved = null;
      try {
        saved = window.localStorage.getItem(THEME_KEY);
      } catch (e) {
        /* ignore */
      }
      if (saved === null) applyTheme(resolveTheme(), false);
    });
  }
}

function initBand() {
  const el = document.querySelector("[data-band]");
  if (!el) return;

  const reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const heroRows = () => {
    const fit = Math.floor((window.innerHeight * 0.82) / 12.5);
    return Math.max(12, Math.min(56, fit));
  };

  let hero = heroRows();
  let rows = hero;
  let tick = 0;
  let band = null;

  const render = () => {
    if (!band) return;
    el.textContent = band.rows(tick, WC, rows).join("\n");
  };

  const onScroll = () => {
    const y = window.pageYOffset || document.documentElement.scrollTop || 0;
    const p = Math.min(1, Math.max(0, y / 340));
    const target = Math.round(hero - (hero - 12) * p);
    const next = Math.min(rows, target);
    if (next !== rows) {
      rows = next;
      render();
    }
  };

  const onResize = () => {
    if (rows === hero) {
      hero = heroRows();
      rows = hero;
      render();
    }
  };

  import("./bands.js").then((m) => {
    const pool = m.BANDS.filter((b) =>
      ["rain", "reeds", "fireflies", "snow", "sonar", "pulse"].includes(b.id),
    );
    const pick = pool[Math.floor(Math.random() * pool.length)] || m.BANDS[0];
    band = pick.make(WC, rows);
    render();
    onScroll();

    if (reduceMotion) return;
    window.setInterval(() => {
      tick += 1;
      band.step(tick);
      render();
    }, pick.ms || BAND_MS_DEFAULT);
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
}

// The header persists across page transitions (see transition:persist on
// <header> and <ClientRouter /> in Layout.astro) so the band never resets
// and restarts on navigation. That means the active nav item can't be read
// off the (stale, persisted) markup after a swap — derive it from the URL
// instead, both on load and after every transition.
function sectionIndexForPath(pathname) {
  if (pathname.startsWith("/writing")) return 0;
  if (pathname.startsWith("/reading")) return 1;
  if (pathname.startsWith("/now")) return 2;
  return null;
}

function initNavDot() {
  const nav = document.querySelector("[data-nav]");
  const dot = document.querySelector("[data-nav-dot]");
  if (!nav || !dot) return;

  const items = Array.prototype.slice.call(nav.querySelectorAll("[data-nav-item]"));
  let activeIndex = sectionIndexForPath(window.location.pathname);
  let centers = [];
  let hover = null;

  const applyActiveAttr = () => {
    items.forEach((el, i) => {
      if (i === activeIndex) el.setAttribute("aria-current", "page");
      else el.removeAttribute("aria-current");
    });
  };

  const measure = () => {
    const b = nav.getBoundingClientRect();
    centers = items.map((el) => {
      const r = el.getBoundingClientRect();
      return r.left - b.left + r.width / 2;
    });
    place();
  };

  const place = () => {
    const idx = hover !== null ? hover : activeIndex;
    if (idx === null || centers[idx] === undefined) {
      dot.style.opacity = "0";
      return;
    }
    dot.style.opacity = "1";
    dot.style.transform = `translateX(${centers[idx].toFixed(1)}px) translateX(-50%)`;
  };

  items.forEach((el, i) => {
    el.addEventListener("mouseenter", () => {
      hover = i;
      place();
    });
  });
  nav.addEventListener("mouseleave", () => {
    hover = null;
    place();
  });

  document.addEventListener("astro:after-swap", () => {
    activeIndex = sectionIndexForPath(window.location.pathname);
    applyActiveAttr();
    place();
  });

  applyActiveAttr();
  measure();
  window.addEventListener("resize", measure);
  setTimeout(measure, 400);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
}

initTheme();
initBand();
initNavDot();
