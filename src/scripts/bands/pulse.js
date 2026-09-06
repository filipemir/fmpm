import { AR, blank, join, dims } from './_shared.js';

export function makePulse(C, R) {
    const d = { C: C, R: R };
    return {
        step() {},
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const t = tick * 0.05,
                g = blank(C, R);
            const step = Math.max(2, Math.round(R / 3));
            for (let y = 0; y < R; y += step) {
                for (let x = 0; x < C; x += 4) {
                    const dx = (x - C * 0.34) * 0.24,
                        dy = (y - R * 0.5) * AR * 0.5;
                    const b = Math.sin(
                        Math.sqrt(dx * dx + dy * dy) * 0.55 - t * 1.4
                    );
                    if (b < 0.2) continue;
                    g[y][x] = b > 0.9 ? 'o' : b > 0.6 ? ':' : '.';
                }
            }
            return join(g);
        }
    };
}
