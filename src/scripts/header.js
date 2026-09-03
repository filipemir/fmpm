// Drives the interactive pieces of the shared header: the theme toggle,
// the band picker, the ASCII band itself (hero-sized on load, collapses on
// scroll, never grows back), and the nav dot that tracks the active/
// hovered page. Runs on every page since the header is shared.

const THEME_KEY = 'fm-site-theme';
const WC = 80;
const BAND_MS_DEFAULT = 100;
// The curated pool offered in the picker (a subset of everything in
// bands.js + bands-variants.js) — order matches their concatenation, not
// this list.
const BAND_POOL_IDS = [
    'rain',
    'snow',
    'shooting',
    'leaves',
    'embers',
    'flock',
    'bubbles',
    'seeds'
];

function applyTheme(theme, persist) {
    document.documentElement.setAttribute('data-theme', theme);
    if (persist) {
        try {
            window.localStorage.setItem(THEME_KEY, theme);
        } catch {
            /* private mode / storage disabled */
        }
    }
    const btn = document.querySelector('[data-theme-toggle]');
    if (btn) {
        const dark = theme === 'dark';
        btn.textContent = dark ? '☀' : '☾';
        btn.setAttribute('title', dark ? 'Switch to light' : 'Switch to dark');
        btn.setAttribute('aria-label', 'Toggle dark mode');
    }
}

function resolveTheme() {
    let saved = null;
    try {
        saved = window.localStorage.getItem(THEME_KEY);
    } catch {
        /* ignore */
    }
    const prefersDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    return saved === 'dark' || (saved === null && prefersDark)
        ? 'dark'
        : 'light';
}

function initTheme() {
    // Not persisted: a page load with no saved choice should keep following
    // the system preference, not silently lock in whatever it said today.
    applyTheme(resolveTheme(), false);

    const btn = document.querySelector('[data-theme-toggle]');
    if (btn) {
        btn.addEventListener('click', () => {
            const isDark =
                document.documentElement.getAttribute('data-theme') === 'dark';
            applyTheme(isDark ? 'light' : 'dark', true);
        });
    }

    // The header (and its data-theme-setting script) persists across
    // client-side navigation, but <html>'s data-theme attribute doesn't —
    // it's only ever set by this script, never present in a page's raw
    // server-rendered markup, so a transition swap drops it. Reapply on
    // every swap; harmless when it was never actually lost.
    document.addEventListener('astro:after-swap', () => {
        applyTheme(resolveTheme(), false);
    });

    if (window.matchMedia) {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', () => {
                let saved = null;
                try {
                    saved = window.localStorage.getItem(THEME_KEY);
                } catch {
                    /* ignore */
                }
                if (saved === null) applyTheme(resolveTheme(), false);
            });
    }
}

function initBand() {
    const el = document.querySelector('[data-band]');
    const nav = document.querySelector('[data-nav]');
    const header = document.querySelector('[data-header]');
    const corner = document.querySelector('[data-corner-controls]');
    const pickerToggle = document.querySelector('[data-band-picker-toggle]');
    const menu = document.querySelector('[data-band-menu]');
    if (!el || !nav || !header) return;

    const reduceMotion =
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // The header's non-band chrome (wordmark, gaps, nav) — measured, not
    // hard-coded, so adding a header row can't push the nav off-screen.
    // nav's bottom edge minus the band's own current height isolates it
    // regardless of how tall the band itself happens to be right now.
    let chrome = 175;
    const measureChrome = () => {
        const y = window.pageYOffset || document.documentElement.scrollTop || 0;
        const c =
            Math.round(
                nav.getBoundingClientRect().bottom +
                    y -
                    el.getBoundingClientRect().height
            ) + 8;
        if (c > 40 && c !== chrome) {
            chrome = c;
            return true;
        }
        return false;
    };

    const heroRows = () => {
        const fit = Math.floor(((window.innerHeight - chrome) * 0.9) / 12.5);
        return Math.max(12, Math.min(56, fit));
    };

    let hero = heroRows();
    let rows = hero;
    let tick = 0;
    let band = null;
    let bandId = null;
    let pool = [];
    let wave = null;
    let pickerOpen = false;

    const render = () => {
        if (!band) return;
        el.textContent = band.rows(tick, WC, rows).join('\n');
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
        measureChrome();
        if (rows === hero) {
            hero = heroRows();
            rows = hero;
            render();
        }
    };

    const closeMenu = () => {
        pickerOpen = false;
        if (menu) {
            menu.hidden = true;
            menu.style.opacity = '0';
            menu.style.transform = 'translateY(-4px)';
            menu.style.pointerEvents = 'none';
        }
        if (pickerToggle) {
            pickerToggle.setAttribute('aria-expanded', 'false');
            pickerToggle.style.color = 'var(--faint)';
        }
    };

    const renderMenu = () => {
        if (!menu) return;
        menu.innerHTML = '';
        pool.forEach((def) => {
            const active = def.id === bandId;
            const opt = document.createElement('button');
            opt.type = 'button';
            opt.setAttribute('role', 'option');
            opt.setAttribute('aria-selected', String(active));
            opt.className = 'band-option';
            opt.style.color = active ? 'var(--ink)' : 'var(--muted)';
            const mark = document.createElement('span');
            mark.className = 'band-option-mark';
            mark.textContent = active ? '•' : '';
            const label = document.createElement('span');
            label.textContent = def.label;
            opt.appendChild(mark);
            opt.appendChild(label);
            opt.addEventListener('click', () => {
                closeMenu();
                setBand(def, true);
            });
            menu.appendChild(opt);
        });
    };

    const openMenu = () => {
        pickerOpen = true;
        renderMenu();
        if (menu) {
            menu.hidden = false;
            requestAnimationFrame(() => {
                menu.style.opacity = '1';
                menu.style.transform = 'translateY(0)';
                menu.style.pointerEvents = 'auto';
            });
        }
        if (pickerToggle) {
            pickerToggle.setAttribute('aria-expanded', 'true');
            pickerToggle.style.color = 'var(--accent)';
        }
    };

    function setBand(def, isUserPick) {
        bandId = def.id;
        band = def.make(WC, rows);
        if (isUserPick) {
            // Re-open the banner to full height so the newly-picked animation is
            // actually visible, then let it collapse again on the next scroll.
            hero = heroRows();
            rows = hero;
            // Jump instantly: a smooth scroll keeps firing onScroll, whose
            // one-way clamp would re-collapse the band before reaching the top.
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }
        render();
        if (wave) window.clearInterval(wave);
        if (reduceMotion) return;
        wave = window.setInterval(() => {
            tick += 1;
            band.step(tick);
            render();
        }, def.ms || BAND_MS_DEFAULT);
    }

    // Always a fresh random pick on load — a picker choice only holds for the
    // current visit (see setBand below), it's never remembered across a
    // reload, so the site doesn't quietly lock in on one pattern forever.
    Promise.all([import('./bands.js'), import('./bands-variants.js')]).then(
        ([base, variants]) => {
            const all = base.BANDS.concat(variants.VARIANTS);
            pool = all.filter((b) => BAND_POOL_IDS.indexOf(b.id) >= 0);
            const pick =
                pool[Math.floor(Math.random() * pool.length)] || all[0];
            setBand(pick, false);
            onScroll();
        }
    );

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    measureChrome();
    setTimeout(measureChrome, 400);
    if (document.fonts && document.fonts.ready)
        document.fonts.ready.then(measureChrome);

    if (pickerToggle) {
        pickerToggle.addEventListener('click', () => {
            if (pickerOpen) closeMenu();
            else openMenu();
        });
    }

    document.addEventListener('mousedown', (e) => {
        if (!pickerOpen) return;
        if (corner && corner.contains(e.target)) return;
        closeMenu();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && pickerOpen) closeMenu();
    });
}

// The header persists across page transitions (see transition:persist on
// <header> and <ClientRouter /> in Layout.astro) so the band never resets
// and restarts on navigation. That means the active nav item can't be read
// off the (stale, persisted) markup after a swap — derive it from the URL
// instead, both on load and after every transition.
function sectionIndexForPath(pathname) {
    if (pathname.startsWith('/writing')) return 0;
    if (pathname.startsWith('/reading')) return 1;
    if (pathname.startsWith('/now') || pathname === '/then') return 2;
    return null;
}

function initNavDot() {
    const nav = document.querySelector('[data-nav]');
    const dot = document.querySelector('[data-nav-dot]');
    if (!nav || !dot) return;

    const items = Array.prototype.slice.call(
        nav.querySelectorAll('[data-nav-item]')
    );
    let activeIndex = sectionIndexForPath(window.location.pathname);
    let centers = [];
    let hover = null;

    const applyActiveAttr = () => {
        items.forEach((el, i) => {
            if (i === activeIndex) el.setAttribute('aria-current', 'page');
            else el.removeAttribute('aria-current');
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
            dot.style.opacity = '0';
            return;
        }
        dot.style.opacity = '1';
        dot.style.transform = `translateX(${centers[idx].toFixed(1)}px) translateX(-50%)`;
    };

    items.forEach((el, i) => {
        el.addEventListener('mouseenter', () => {
            hover = i;
            place();
        });
    });
    nav.addEventListener('mouseleave', () => {
        hover = null;
        place();
    });

    document.addEventListener('astro:after-swap', () => {
        activeIndex = sectionIndexForPath(window.location.pathname);
        applyActiveAttr();
        place();
    });

    applyActiveAttr();
    measure();
    window.addEventListener('resize', measure);
    setTimeout(measure, 400);
    if (document.fonts && document.fonts.ready)
        document.fonts.ready.then(measure);
}

initTheme();
initBand();
initNavDot();
