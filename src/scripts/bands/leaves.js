import { blank, join, dims, dens, TICK, BACK } from './_shared.js';

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
