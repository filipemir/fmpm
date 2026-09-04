import { blank, join, dims } from './_shared.js';

export function makeContrails(C, R) {
    const d = { C: C, R: R };
    let tr = [];
    return {
        step(t) {
            tr = tr.filter((o) => t - o.born < 150);
            if (tr.length < 4 && Math.random() < 0.06) {
                tr.push({
                    y: 0.1 + Math.random() * 0.8,
                    born: t,
                    sp: 0.006 + Math.random() * 0.006,
                    dy: (Math.random() - 0.5) * 0.0012
                });
            }
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            tr.forEach((o) => {
                const age = tick - o.born;
                const head = o.sp * age;
                for (let k = 0; k < 26; k++) {
                    const fx = head - k * 0.014;
                    if (fx < 0 || fx > 1) continue;
                    const x = Math.floor(fx * C);
                    const y = Math.floor((o.y + o.dy * (age - k)) * R);
                    if (x < 0 || x >= C || y < 0 || y >= R) continue;
                    g[y][x] =
                        k === 0
                            ? '+'
                            : k < 6
                              ? '-'
                              : k < 14
                                ? '.'
                                : g[y][x] === ' '
                                  ? '.'
                                  : g[y][x];
                }
            });
            return join(g);
        }
    };
}
