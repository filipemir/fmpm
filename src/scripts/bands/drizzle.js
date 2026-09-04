import { blank, join, dims, TICK } from './_shared.js';

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
