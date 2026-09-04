import { blank, join, dims } from './_shared.js';

export function makeSnow(C, R) {
    const d = { C: C, R: R };
    const s = [];
    for (let i = 0; i < Math.max(26, Math.round(C / 1.5)); i++) {
        s.push({
            x: Math.random(),
            y: Math.random(),
            v: 0.004 + Math.random() * 0.006,
            p: Math.random() * 6.28
        });
    }
    return {
        step(t) {
            s.forEach((q) => {
                q.y += q.v;
                q.x += (Math.sin(t * 0.05 + q.p) * 0.14 - 0.03) / 80;
                if (q.y >= 1) {
                    q.y = -0.01;
                    q.x = Math.random();
                }
                if (q.x < 0) q.x += 1;
                if (q.x >= 1) q.x -= 1;
            });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            s.forEach((q) => {
                const y = Math.floor(q.y * R);
                if (y < 0 || y >= R) return;
                g[y][Math.min(C - 1, Math.floor(q.x * C))] =
                    q.v > 0.008 ? '*' : q.v > 0.006 ? ',' : '.';
            });
            return join(g);
        }
    };
}
