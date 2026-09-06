import { blank, join, dims } from './_shared.js';

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
