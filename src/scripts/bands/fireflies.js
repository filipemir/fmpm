import { blank, join, dims } from './_shared.js';

export function makeFireflies(C, R) {
    const d = { C: C, R: R };
    const f = [];
    for (let i = 0; i < Math.max(8, Math.round(C / 6)); i++) {
        f.push({
            x: Math.random(),
            y: Math.random(),
            p: Math.random() * 6.28,
            sp: 0.6 + Math.random() * 0.8
        });
    }
    return {
        step(t) {
            f.forEach((q) => {
                q.x += (Math.cos(t * 0.03 * q.sp + q.p) * 0.16 + 0.04) / 80;
                q.y += Math.sin(t * 0.045 * q.sp + q.p * 1.7) * 0.004;
                if (q.x >= 1) q.x -= 1;
                if (q.x < 0) q.x += 1;
                if (q.y >= 1) q.y -= 1;
                if (q.y < 0) q.y += 1;
            });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            f.forEach((q) => {
                const b = Math.sin(tick * 0.07 * q.sp + q.p);
                if (b < 0.25) return;
                const x = Math.min(C - 1, Math.floor(q.x * C)),
                    y = Math.min(R - 1, Math.floor(q.y * R));
                g[y][x] = b > 0.88 ? '*' : b > 0.6 ? '+' : '.';
            });
            return join(g);
        }
    };
}
