import { AR, blank, join, dims } from './_shared.js';

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
