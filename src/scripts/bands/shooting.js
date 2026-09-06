import { blank, join, dims } from './_shared.js';

export function makeShooting(C, R) {
    const d = { C: C, R: R };
    const stars = [];
    for (let i = 0; i < 62; i++)
        stars.push({
            x: Math.random(),
            y: Math.random(),
            p: Math.random() * 6.28
        });
    let streaks = [];
    return {
        step(t) {
            streaks = streaks.filter((s) => t - s.born < 26);
            if (Math.random() < 0.15)
                streaks.push({
                    x: 0.05 + Math.random() * 0.55,
                    y: Math.random() * 0.45,
                    born: t
                });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            stars.forEach((s) => {
                const b = Math.sin(tick * 0.04 + s.p);
                if (b < 0.1) return;
                g[Math.min(R - 1, Math.floor(s.y * R))][
                    Math.min(C - 1, Math.floor(s.x * C))
                ] = b > 0.93 ? '+' : '.';
            });
            streaks.forEach((s) => {
                const age = tick - s.born;
                const hx = s.x * C + age * 1.5,
                    hy = s.y * R + age * 0.32;
                for (let k = 0; k < 7; k++) {
                    const x = Math.round(hx - k * 1.5),
                        y = Math.round(hy - k * 0.32);
                    if (x < 0 || x >= C || y < 0 || y >= R) continue;
                    g[y][x] = k === 0 ? '*' : k < 3 ? '-' : '.';
                }
            });
            return join(g);
        }
    };
}
