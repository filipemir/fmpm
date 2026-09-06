import { blank, join, dims, dens } from './_shared.js';

export function makeDrips(C, R) {
    const d = { C: C, R: R };
    const spawn = () => ({
        x: Math.random(),
        y: Math.random() * 0.5,
        hold: 20 + Math.floor(Math.random() * 60),
        v: 0,
        big: Math.random() < 0.35
    });
    const dp = [];
    for (let i = 0; i < dens(C); i++) dp.push(spawn());
    return {
        step() {
            dp.forEach((q, i) => {
                if (q.hold > 0) {
                    q.hold--;
                    return;
                }
                q.v += 0.0012;
                q.y += q.v;
                if (q.y > 1.03) dp[i] = spawn();
            });
        },
        rows(tick, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            dp.forEach((q) => {
                const x = Math.floor(q.x * C),
                    y = Math.floor(q.y * R);
                if (x < 0 || x >= C || y < 0 || y >= R) return;
                g[y][x] =
                    q.hold > 0 ? (q.big ? 'o' : '.') : q.v > 0.008 ? '|' : ':';
            });
            return join(g);
        }
    };
}
