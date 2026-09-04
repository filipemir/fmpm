import { blank, join, dims, dens } from './_shared.js';

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
