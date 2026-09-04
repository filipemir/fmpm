import { blank, join, dims, dens } from './_shared.js';

export function makeSeeds(C, R) {
    const d = { C: C, R: R };
    const sd = [];
    for (let i = 0; i < dens(C); i++)
        sd.push({
            x: Math.random(),
            y: Math.random(),
            p: Math.random() * 6.28,
            sp: 0.6 + Math.random() * 0.8
        });
    return {
        step(t) {
            sd.forEach((q) => {
                q.x += (0.0022 + Math.sin(t * 0.02 + q.p) * 0.0016) * q.sp;
                q.y += Math.cos(t * 0.035 + q.p * 1.4) * 0.0035;
                if (q.x > 1.03) {
                    q.x = -0.03;
                    q.y = Math.random();
                }
                if (q.y < 0.02) q.y = 0.02;
                if (q.y > 0.96) q.y = 0.96;
            });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            sd.forEach((q) => {
                const x = Math.min(C - 1, Math.floor(q.x * C)),
                    y = Math.min(R - 1, Math.floor(q.y * R));
                const spin = Math.sin(tick * 0.12 + q.p);
                g[y][x] =
                    spin > 0.5 ? '*' : spin > 0 ? '+' : spin > -0.5 ? '.' : ',';
            });
            return join(g);
        }
    };
}
