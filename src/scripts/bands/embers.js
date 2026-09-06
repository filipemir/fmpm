import { blank, join, dims, dens } from './_shared.js';

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
