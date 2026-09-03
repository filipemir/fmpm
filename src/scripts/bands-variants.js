// Variant bands, appended to the base set. Same conventions as bands.js:
// normalized state, make(C, R) -> { step(tick), rows(tick, C?, R?) }.

const AR = 2.1;
const blank = (C, R) => {
    const g = [];
    for (let y = 0; y < R; y++) g.push(new Array(C).fill(' '));
    return g;
};
const join = (g) => g.map((r) => r.join(''));
const dims = (d, C, R) => [C || d.C, R || d.R];

const dens = (C, k) => Math.max(26, Math.round((C / 1.5) * (k || 1)));

const TICK = "'";
const BACK = '\u0060';

export function makeClouds(C, R) {
    const d = { C: C, R: R };
    const puffs = [];
    for (let i = 0; i < 4; i++) {
        puffs.push({
            x: Math.random(),
            y: 0.12 + Math.random() * 0.7,
            r: 0.05 + Math.random() * 0.09,
            sp: 0.00018 + Math.random() * 0.0004,
            spin: Math.random() * 6.28
        });
    }
    return {
        step() {
            puffs.forEach((p) => {
                p.spin += 0.02;
                p.x += p.sp + Math.cos(p.spin) * 0.0004;
                p.y += Math.sin(p.spin * 0.7) * 0.0016;
                if (p.x > 1.15) p.x = -0.15;
                if (p.y < 0.05) p.y = 0.05;
                if (p.y > 0.9) p.y = 0.9;
            });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            puffs.forEach((p) => {
                const cx = p.x * C,
                    cy = p.y * R,
                    rad = p.r * C;
                for (let a = 0; a < 20; a++) {
                    const th = (a / 20) * 6.283 + p.spin * 0.4;
                    const wob = 1 + Math.sin(th * 3 + p.spin) * 0.22;
                    const x = Math.round(cx + Math.cos(th) * rad * wob);
                    const y = Math.round(cy + (Math.sin(th) * rad * wob) / AR);
                    if (x < 0 || x >= C || y < 0 || y >= R) continue;
                    if (g[y][x] === ' ')
                        g[y][x] = wob > 1.12 ? '*' : wob > 0.95 ? '.' : ',';
                }
            });
            return join(g);
        }
    };
}

export function makeStream(C, R) {
    const d = { C: C, R: R };
    const bits = [];
    for (let i = 0; i < 44; i++)
        bits.push({
            x: Math.random(),
            lane: Math.random(),
            v: 0.004 + Math.random() * 0.009
        });
    return {
        step() {
            bits.forEach((b) => {
                b.x += b.v;
                if (b.x > 1.02) {
                    b.x = -0.02;
                    b.lane = Math.random();
                }
            });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            bits.forEach((b) => {
                const drift = Math.sin(b.x * 7 + tick * 0.02) * 0.06;
                const y = Math.floor((b.lane * 0.86 + 0.07 + drift) * R);
                const x = Math.floor(b.x * C);
                if (y < 0 || y >= R || x < 0 || x >= C) return;
                g[y][x] = b.v > 0.01 ? '~' : b.v > 0.007 ? '-' : '.';
            });
            return join(g);
        }
    };
}

export function makeSwell(C, R) {
    const d = { C: C, R: R };
    return {
        step() {},
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const t = tick * 0.045,
                g = blank(C, R);
            const lines = Math.max(2, Math.round(R / 4.5));
            for (let k = 0; k < lines; k++) {
                const ph = k * 1.7;
                for (let x = 0; x < C; x++) {
                    const u = x * 0.11;
                    const hgt =
                        Math.sin(u - t * 1.5 + ph) * 0.5 +
                        Math.sin(u * 0.43 + t * 0.7 + ph) * 0.32;
                    const y = Math.round(
                        (0.1 + ((k + 0.5) / lines) * 0.84 + hgt * 0.05) * R
                    );
                    if (y < 0 || y >= R) continue;
                    const slope = Math.cos(u - t * 1.5 + ph);
                    if (Math.abs(slope) < 0.72) continue;
                    g[y][x] = slope > 0.75 ? '/' : slope < -0.75 ? '\\' : '~';
                }
            }
            return join(g);
        }
    };
}

export function makeRipples(C, R) {
    const d = { C: C, R: R };
    return {
        step() {},
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const t = tick * 0.06,
                g = blank(C, R);
            for (let y = 0; y < R; y++) {
                for (let x = 0; x < C; x++) {
                    const dx = x - C * 0.5,
                        dy = (y - R * 0.5) * AR;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const v = Math.sin(dist * 0.42 - t * 1.6);
                    const falloff = 1 - Math.min(1, dist / (C * 0.62));
                    if (v < 0.86 || falloff < 0.12) continue;
                    g[y][x] = falloff > 0.6 ? 'o' : falloff > 0.34 ? ':' : '.';
                }
            }
            return join(g);
        }
    };
}

export function makeShooting(C, R) {
    const d = { C: C, R: R };
    const stars = [];
    for (let i = 0; i < 62; i++)
        stars.push({
            x: Math.random(),
            y: Math.random(),
            p: Math.random() * 6.28
        });
    let streaks = [];
    return {
        step(t) {
            streaks = streaks.filter((s) => t - s.born < 26);
            if (Math.random() < 0.15)
                streaks.push({
                    x: 0.05 + Math.random() * 0.55,
                    y: Math.random() * 0.45,
                    born: t
                });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            stars.forEach((s) => {
                const b = Math.sin(tick * 0.04 + s.p);
                if (b < 0.1) return;
                g[Math.min(R - 1, Math.floor(s.y * R))][
                    Math.min(C - 1, Math.floor(s.x * C))
                ] = b > 0.93 ? '+' : '.';
            });
            streaks.forEach((s) => {
                const age = tick - s.born;
                const hx = s.x * C + age * 1.5,
                    hy = s.y * R + age * 0.32;
                for (let k = 0; k < 7; k++) {
                    const x = Math.round(hx - k * 1.5),
                        y = Math.round(hy - k * 0.32);
                    if (x < 0 || x >= C || y < 0 || y >= R) continue;
                    g[y][x] = k === 0 ? '*' : k < 3 ? '-' : '.';
                }
            });
            return join(g);
        }
    };
}

export function makeLeaves(C, R) {
    const d = { C: C, R: R };
    const lv = [];
    for (let i = 0; i < dens(C, 2.3); i++)
        lv.push({
            x: Math.random(),
            y: Math.random(),
            p: Math.random() * 6.28,
            sp: 0.5 + Math.random()
        });
    const glyphs = [TICK, BACK, ',', '.'];
    return {
        step(t) {
            lv.forEach((q) => {
                const gust = Math.sin(t * 0.03 + q.p) * 0.5 + 0.5;
                q.x += (0.001 + gust * 0.006) * q.sp;
                q.y += Math.sin(t * 0.06 + q.p * 2) * 0.004;
                if (q.x > 1.02) {
                    q.x = -0.02;
                    q.y = Math.random();
                }
                if (q.y < 0) q.y += 1;
                if (q.y >= 1) q.y -= 1;
            });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            lv.forEach((q, i) => {
                const x = Math.min(C - 1, Math.floor(q.x * C)),
                    y = Math.min(R - 1, Math.floor(q.y * R));
                g[y][x] = glyphs[(i + Math.floor(tick * 0.1)) % glyphs.length];
            });
            return join(g);
        }
    };
}

export function makeEmbers(C, R) {
    const d = { C: C, R: R };
    const spawn = () => ({
        x: 0.2 + Math.random() * 0.6,
        y: 1,
        v: 0.005 + Math.random() * 0.008,
        p: Math.random() * 6.28
    });
    const e = [];
    for (let i = 0; i < dens(C); i++) {
        const q = spawn();
        q.y = Math.random();
        e.push(q);
    }
    return {
        step(t) {
            e.forEach((q, i) => {
                q.y -= q.v;
                q.x += Math.sin(t * 0.05 + q.p) * 0.004;
                if (q.y < -0.02) e[i] = spawn();
            });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            e.forEach((q) => {
                const x = Math.floor(q.x * C),
                    y = Math.floor(q.y * R);
                if (x < 0 || x >= C || y < 0 || y >= R) return;
                g[y][x] = q.y > 0.66 ? '*' : q.y > 0.33 ? '+' : '.';
            });
            return join(g);
        }
    };
}

export function makeTide(C, R) {
    const d = { C: C, R: R };
    return {
        step() {},
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const t = tick * 0.05,
                g = blank(C, R);
            for (let x = 0; x < C; x++) {
                const swash =
                    Math.sin(x * 0.1 - t * 1.3) * 0.5 +
                    Math.sin(x * 0.04 + t * 0.6) * 0.34;
                const line = R * (0.55 - swash * 0.3);
                for (let y = 0; y < R; y++) {
                    const k = y - line;
                    if (k < -0.7) continue;
                    if (k < 0.7) {
                        g[y][x] = swash > 0.3 ? '~' : '-';
                        continue;
                    }
                    const dens = 1 - Math.min(1, k / (R * 0.5));
                    const n = Math.abs(
                        Math.sin(
                            x * 12.9898 + y * 78.233 + Math.floor(t * 2) * 0.37
                        )
                    );
                    if (n < dens * 0.5) g[y][x] = dens > 0.55 ? ':' : '.';
                }
            }
            return join(g);
        }
    };
}

export function makeDrizzle(C, R) {
    const d = { C: C, R: R };
    const dr = [];
    for (let i = 0; i < 40; i++)
        dr.push({
            x: Math.random(),
            y: Math.random(),
            v: 0.02 + Math.random() * 0.02,
            len: 1 + Math.floor(Math.random() * 2)
        });
    return {
        step() {
            dr.forEach((q) => {
                q.y += q.v;
                q.x -= 0.002;
                if (q.y > 1.05) {
                    q.y = -0.05;
                    q.x = Math.random();
                }
                if (q.x < 0) q.x += 1;
            });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            dr.forEach((q) => {
                const x = Math.floor(q.x * C);
                for (let k = 0; k < q.len; k++) {
                    const y = Math.floor(q.y * R) - k;
                    if (y < 0 || y >= R || x < 0 || x >= C) continue;
                    g[y][x] = k === 0 ? TICK : '|';
                }
            });
            return join(g);
        }
    };
}

export function makeMoss(C, R) {
    const d = { C: C, R: R };
    const cells = [];
    for (let i = 0; i < 14; i++)
        cells.push({
            x: Math.random(),
            y: Math.random(),
            p: Math.random() * 6.28,
            r: 0.02 + Math.random() * 0.03
        });
    return {
        step() {},
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const t = tick * 0.02,
                g = blank(C, R);
            cells.forEach((q) => {
                const grow = Math.sin(t + q.p) * 0.5 + 0.5;
                const rad = q.r * C * grow;
                const cx = q.x * C,
                    cy = q.y * R;
                for (let a = 0; a < 8; a++) {
                    const th = (a / 8) * 6.283;
                    const x = Math.round(cx + Math.cos(th) * rad);
                    const y = Math.round(cy + (Math.sin(th) * rad) / AR);
                    if (x < 0 || x >= C || y < 0 || y >= R) continue;
                    if (g[y][x] === ' ')
                        g[y][x] = grow > 0.7 ? '*' : grow > 0.4 ? '.' : ',';
                }
            });
            return join(g);
        }
    };
}

export function makeFlock(C, R) {
    const d = { C: C, R: R };
    const b = [];
    for (let i = 0; i < dens(C, 5.5); i++)
        b.push({
            x: Math.random(),
            y: 0.15 + Math.random() * 0.7,
            vx: 0.004 + Math.random() * 0.003,
            vy: 0,
            p: Math.random() * 6.28
        });
    // aspect-corrected neighbourhood: x is in columns, y in rows, so y distances
    // are weighted to compare like-for-like
    const NEAR = 0.085,
        TIGHT = 0.022;
    return {
        step(t) {
            const target =
                0.5 + Math.sin(t * 0.016) * 0.4 + Math.sin(t * 0.006) * 0.08;
            // boids: local cohesion + alignment pull birds into travelling clumps,
            // short-range separation keeps the clumps from collapsing to a blot
            b.forEach((q) => {
                let cx = 0,
                    cy = 0,
                    ax = 0,
                    ay = 0,
                    n = 0,
                    sx = 0,
                    sy = 0;
                for (let j = 0; j < b.length; j++) {
                    const o = b[j];
                    if (o === q) continue;
                    const dx = o.x - q.x,
                        dy = (o.y - q.y) * 0.35;
                    const dd = dx * dx + dy * dy;
                    if (dd > NEAR * NEAR) continue;
                    cx += o.x;
                    cy += o.y;
                    ax += o.vx;
                    ay += o.vy;
                    n++;
                    if (dd < TIGHT * TIGHT) {
                        sx -= dx;
                        sy -= dy;
                    }
                }
                if (n) {
                    q.vx +=
                        (cx / n - q.x) * 0.34 +
                        (ax / n - q.vx) * 0.45 +
                        sx * 0.4;
                    q.vy +=
                        (cy / n - q.y) * 0.45 +
                        (ay / n - q.vy) * 0.45 +
                        sy * 0.5;
                }
                q.vy +=
                    (target - q.y) * 0.022 + Math.sin(t * 0.045 + q.p) * 0.002;
                q.vy = Math.max(-0.026, Math.min(0.026, q.vy * 0.93));
                q.vx = Math.max(0.0007, Math.min(0.005, q.vx * 0.96 + 0.0001));
                q.y += q.vy;
                q.x += q.vx;
                q.x = ((q.x % 1) + 1) % 1;
                if (q.y < 0.02) {
                    q.y = 0.02;
                    q.vy = Math.abs(q.vy) * 0.35;
                }
                if (q.y > 0.96) {
                    q.y = 0.96;
                    q.vy = -Math.abs(q.vy) * 0.35;
                }
            });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            b.forEach((q) => {
                const x = Math.min(C - 1, Math.max(0, Math.floor(q.x * C)));
                const y = Math.min(R - 1, Math.max(0, Math.floor(q.y * R)));
                g[y][x] = q.vy < -0.006 ? TICK : q.vy > 0.006 ? ',' : BACK;
            });
            return join(g);
        }
    };
}

export function makeBubbles(C, R) {
    const d = { C: C, R: R };
    const spawn = () => ({
        x: 0.04 + Math.random() * 0.92,
        y: 1.02,
        v: 0.006 + Math.random() * 0.01,
        p: Math.random() * 6.28,
        big: Math.random() < 0.3
    });
    const bb = [];
    for (let i = 0; i < dens(C); i++) {
        const q = spawn();
        q.y = Math.random();
        bb.push(q);
    }
    return {
        step(t) {
            bb.forEach((q, i) => {
                q.y -= q.v;
                q.x += Math.sin(t * 0.06 + q.p) * 0.003;
                if (q.y < -0.03) bb[i] = spawn();
            });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            bb.forEach((q) => {
                const x = Math.floor(q.x * C),
                    y = Math.floor(q.y * R);
                if (x < 0 || x >= C || y < 0 || y >= R) return;
                g[y][x] = q.big ? 'o' : q.y > 0.5 ? '.' : ':';
            });
            return join(g);
        }
    };
}

export function makeSeeds(C, R) {
    const d = { C: C, R: R };
    const sd = [];
    for (let i = 0; i < dens(C); i++)
        sd.push({
            x: Math.random(),
            y: Math.random(),
            p: Math.random() * 6.28,
            sp: 0.6 + Math.random() * 0.8
        });
    return {
        step(t) {
            sd.forEach((q) => {
                q.x += (0.0022 + Math.sin(t * 0.02 + q.p) * 0.0016) * q.sp;
                q.y += Math.cos(t * 0.035 + q.p * 1.4) * 0.0035;
                if (q.x > 1.03) {
                    q.x = -0.03;
                    q.y = Math.random();
                }
                if (q.y < 0.02) q.y = 0.02;
                if (q.y > 0.96) q.y = 0.96;
            });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            sd.forEach((q) => {
                const x = Math.min(C - 1, Math.floor(q.x * C)),
                    y = Math.min(R - 1, Math.floor(q.y * R));
                const spin = Math.sin(tick * 0.12 + q.p);
                g[y][x] =
                    spin > 0.5 ? '*' : spin > 0 ? '+' : spin > -0.5 ? '.' : ',';
            });
            return join(g);
        }
    };
}

export function makeContrails(C, R) {
    const d = { C: C, R: R };
    let tr = [];
    return {
        step(t) {
            tr = tr.filter((o) => t - o.born < 150);
            if (tr.length < 4 && Math.random() < 0.06) {
                tr.push({
                    y: 0.1 + Math.random() * 0.8,
                    born: t,
                    sp: 0.006 + Math.random() * 0.006,
                    dy: (Math.random() - 0.5) * 0.0012
                });
            }
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            tr.forEach((o) => {
                const age = tick - o.born;
                const head = o.sp * age;
                for (let k = 0; k < 26; k++) {
                    const fx = head - k * 0.014;
                    if (fx < 0 || fx > 1) continue;
                    const x = Math.floor(fx * C);
                    const y = Math.floor((o.y + o.dy * (age - k)) * R);
                    if (x < 0 || x >= C || y < 0 || y >= R) continue;
                    g[y][x] =
                        k === 0
                            ? '+'
                            : k < 6
                              ? '-'
                              : k < 14
                                ? '.'
                                : g[y][x] === ' '
                                  ? '.'
                                  : g[y][x];
                }
            });
            return join(g);
        }
    };
}

export function makeDrips(C, R) {
    const d = { C: C, R: R };
    const spawn = () => ({
        x: Math.random(),
        y: Math.random() * 0.5,
        hold: 20 + Math.floor(Math.random() * 60),
        v: 0,
        big: Math.random() < 0.35
    });
    const dp = [];
    for (let i = 0; i < dens(C); i++) dp.push(spawn());
    return {
        step() {
            dp.forEach((q, i) => {
                if (q.hold > 0) {
                    q.hold--;
                    return;
                }
                q.v += 0.0012;
                q.y += q.v;
                if (q.y > 1.03) dp[i] = spawn();
            });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            dp.forEach((q) => {
                const x = Math.floor(q.x * C),
                    y = Math.floor(q.y * R);
                if (x < 0 || x >= C || y < 0 || y >= R) return;
                g[y][x] =
                    q.hold > 0 ? (q.big ? 'o' : '.') : q.v > 0.008 ? '|' : ':';
            });
            return join(g);
        }
    };
}

export const VARIANTS = [
    { id: 'clouds', label: 'Clouds whirling', make: makeClouds, ms: 110 },
    { id: 'stream', label: 'Water streaming', make: makeStream, ms: 90 },
    { id: 'swell', label: 'Waves', make: makeSwell, ms: 100 },
    { id: 'ripples', label: 'Ripples', make: makeRipples, ms: 100 },
    { id: 'shooting', label: 'Shooting stars', make: makeShooting, ms: 90 },
    { id: 'leaves', label: 'Wind on leaves', make: makeLeaves, ms: 100 },
    { id: 'embers', label: 'Embers rising', make: makeEmbers, ms: 100 },
    { id: 'tide', label: 'Tide line', make: makeTide, ms: 100 },
    { id: 'drizzle', label: 'Drizzle', make: makeDrizzle, ms: 90 },
    { id: 'moss', label: 'Moss blooming', make: makeMoss, ms: 120 },
    { id: 'flock', label: 'Murmuration', make: makeFlock, ms: 140 },
    { id: 'bubbles', label: 'Bubbles rising', make: makeBubbles, ms: 100 },
    { id: 'seeds', label: 'Dandelion seeds', make: makeSeeds, ms: 110 },
    { id: 'contrails', label: 'Contrails', make: makeContrails, ms: 100 },
    { id: 'drips', label: 'Drips on glass', make: makeDrips, ms: 100 }
];
