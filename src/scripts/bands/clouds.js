import { AR, blank, join, dims } from './_shared.js';

export function makeClouds(C, R) {
    const d = { C: C, R: R };
    const puffs = [];
    for (let i = 0; i < 4; i++) {
        puffs.push({
            x: Math.random(),
            y: 0.12 + Math.random() * 0.7,
            r: 0.05 + Math.random() * 0.09,
            sp: 0.00018 + Math.random() * 0.0004,
            spin: Math.random() * 6.28
        });
    }
    return {
        step() {
            puffs.forEach((p) => {
                p.spin += 0.02;
                p.x += p.sp + Math.cos(p.spin) * 0.0004;
                p.y += Math.sin(p.spin * 0.7) * 0.0016;
                if (p.x > 1.15) p.x = -0.15;
                if (p.y < 0.05) p.y = 0.05;
                if (p.y > 0.9) p.y = 0.9;
            });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            puffs.forEach((p) => {
                const cx = p.x * C,
                    cy = p.y * R,
                    rad = p.r * C;
                for (let a = 0; a < 20; a++) {
                    const th = (a / 20) * 6.283 + p.spin * 0.4;
                    const wob = 1 + Math.sin(th * 3 + p.spin) * 0.22;
                    const x = Math.round(cx + Math.cos(th) * rad * wob);
                    const y = Math.round(cy + (Math.sin(th) * rad * wob) / AR);
                    if (x < 0 || x >= C || y < 0 || y >= R) continue;
                    if (g[y][x] === ' ')
                        g[y][x] = wob > 1.12 ? '*' : wob > 0.95 ? '.' : ',';
                }
            });
            return join(g);
        }
    };
}
