import { blank, join, dims } from './_shared.js';

export function makeReeds(C, R) {
    const d = { C: C, R: R };
    const h = [];
    for (let x = 0; x < 400; x++) h.push(0.34 + Math.random() * 0.52);
    return {
        step() {},
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const t = tick * 0.08,
                g = blank(C, R);
            for (let x = 0; x < C; x++) {
                const gust =
                    Math.sin(x * 0.14 - t * 1.9) * 0.6 +
                    Math.sin(x * 0.05 - t * 0.8) * 0.4;
                const height = Math.max(1.4, h[x % h.length] * R + gust * 0.35);
                const tip = Math.max(0, R - height);
                for (let y = R - 1; y >= Math.floor(tip); y--) {
                    const up = (R - 1 - y) / Math.max(1, height);
                    const lean = gust * up * up;
                    const sx = Math.round(x + lean * 2.4);
                    if (sx < 0 || sx >= C) continue;
                    g[y][sx] =
                        y <= Math.floor(tip) + 0.01
                            ? lean > 0.35
                                ? "'"
                                : lean < -0.35
                                  ? '`'
                                  : '|'
                            : Math.abs(lean) > 0.75
                              ? lean > 0
                                  ? '/'
                                  : '\\'
                              : '|';
                }
            }
            return join(g);
        }
    };
}
