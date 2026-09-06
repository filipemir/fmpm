import { blank, join, dims } from './_shared.js';

export function makeTide(C, R) {
    const d = { C: C, R: R };
    return {
        step() {},
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const t = tick * 0.05,
                g = blank(C, R);
            for (let x = 0; x < C; x++) {
                const swash =
                    Math.sin(x * 0.1 - t * 1.3) * 0.5 +
                    Math.sin(x * 0.04 + t * 0.6) * 0.34;
                const line = R * (0.55 - swash * 0.3);
                for (let y = 0; y < R; y++) {
                    const k = y - line;
                    if (k < -0.7) continue;
                    if (k < 0.7) {
                        g[y][x] = swash > 0.3 ? '~' : '-';
                        continue;
                    }
                    const dens = 1 - Math.min(1, k / (R * 0.5));
                    const n = Math.abs(
                        Math.sin(
                            x * 12.9898 + y * 78.233 + Math.floor(t * 2) * 0.37
                        )
                    );
                    if (n < dens * 0.5) g[y][x] = dens > 0.55 ? ':' : '.';
                }
            }
            return join(g);
        }
    };
}
