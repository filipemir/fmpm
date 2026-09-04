import { blank, join, dims } from './_shared.js';

export function makeSwell(C, R) {
    const d = { C: C, R: R };
    return {
        step() {},
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const t = tick * 0.045,
                g = blank(C, R);
            const lines = Math.max(2, Math.round(R / 4.5));
            for (let k = 0; k < lines; k++) {
                const ph = k * 1.7;
                for (let x = 0; x < C; x++) {
                    const u = x * 0.11;
                    const hgt =
                        Math.sin(u - t * 1.5 + ph) * 0.5 +
                        Math.sin(u * 0.43 + t * 0.7 + ph) * 0.32;
                    const y = Math.round(
                        (0.1 + ((k + 0.5) / lines) * 0.84 + hgt * 0.05) * R
                    );
                    if (y < 0 || y >= R) continue;
                    const slope = Math.cos(u - t * 1.5 + ph);
                    if (Math.abs(slope) < 0.72) continue;
                    g[y][x] = slope > 0.75 ? '/' : slope < -0.75 ? '\\' : '~';
                }
            }
            return join(g);
        }
    };
}
