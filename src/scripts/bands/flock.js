import { blank, join, dims, dens, TICK, BACK } from './_shared.js';

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
