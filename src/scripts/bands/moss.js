import { AR, blank, join, dims } from './_shared.js';

export function makeMoss(C, R) {
    const d = { C: C, R: R };
    const cells = [];
    for (let i = 0; i < 14; i++)
        cells.push({
            x: Math.random(),
            y: Math.random(),
            p: Math.random() * 6.28,
            r: 0.02 + Math.random() * 0.03
        });
    return {
        step() {},
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const t = tick * 0.02,
                g = blank(C, R);
            cells.forEach((q) => {
                const grow = Math.sin(t + q.p) * 0.5 + 0.5;
                const rad = q.r * C * grow;
                const cx = q.x * C,
                    cy = q.y * R;
                for (let a = 0; a < 8; a++) {
                    const th = (a / 8) * 6.283;
                    const x = Math.round(cx + Math.cos(th) * rad);
                    const y = Math.round(cy + (Math.sin(th) * rad) / AR);
                    if (x < 0 || x >= C || y < 0 || y >= R) continue;
                    if (g[y][x] === ' ')
                        g[y][x] = grow > 0.7 ? '*' : grow > 0.4 ? '.' : ',';
                }
            });
            return join(g);
        }
    };
}
