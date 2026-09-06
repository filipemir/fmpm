import { blank, join, dims } from './_shared.js';

export function makeSonar(C, R) {
    const d = { C: C, R: R };
    const dots = [];
    for (let i = 0; i < Math.round(C * 0.55); i++)
        dots.push({ x: Math.random(), y: Math.random() });
    return {
        step() {},
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            const beam = ((tick * 0.85) % (C + 24)) - 12;
            dots.forEach((o) => {
                const x = Math.min(C - 1, Math.floor(o.x * C)),
                    y = Math.min(R - 1, Math.floor(o.y * R));
                const k = Math.abs(x - beam);
                if (k > 16) return;
                g[y][x] = k < 1.6 ? 'o' : k < 6 ? ':' : '.';
            });
            return join(g);
        }
    };
}
