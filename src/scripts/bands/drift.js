import { blank, join, dims } from './_shared.js';

export function makeDrift(C, R) {
    const d = { C: C, R: R };
    return {
        step() {},
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const t = tick * 0.035,
                g = blank(C, R);
            const ys = 6 / Math.max(1, R);
            for (let y = 0; y < R; y++) {
                for (let x = 0; x < C; x++) {
                    const v = y * ys;
                    const f =
                        Math.sin(x * 0.16 - v * 0.9 + t) +
                        Math.sin(x * 0.07 + v * 0.4 - t * 0.7) * 0.6;
                    if (f > 1.32) g[y][x] = '~';
                    else if (f > 1.05) g[y][x] = '-';
                    else if (f > 0.86) g[y][x] = '.';
                }
            }
            return join(g);
        }
    };
}
