import { AR, blank, join, dims } from './_shared.js';

export function makeRain(C, R) {
    const d = { C: C, R: R };
    const drops = [];
    const spawn = (t) =>
        drops.push({
            x: 0.02 + Math.random() * 0.96,
            y: 0.08 + Math.random() * 0.84,
            born: t
        });
    for (let i = 0; i < 3; i++) spawn(-Math.floor(Math.random() * 28));
    return {
        step(t) {
            for (let i = drops.length - 1; i >= 0; i--)
                if (t - drops[i].born > 34) drops.splice(i, 1);
            if (Math.random() < 0.3) spawn(t);
        },
        rows(t, c, r) {
            const [C, R] = dims(d, c, r);
            const g = blank(C, R);
            drops.forEach((o) => {
                const age = t - o.born,
                    rad = age * 0.42,
                    fade = 1 - age / 34;
                const cx = o.x * C,
                    cy = o.y * R;
                for (let y = 0; y < R; y++) {
                    for (let x = 0; x < C; x++) {
                        const dx = x - cx,
                            dy = (y - cy) * AR;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (age < 2 && dist < 0.9) {
                            g[y][x] = 'o';
                            continue;
                        }
                        if (Math.abs(dist - rad) < 0.55 && rad > 0.6) {
                            const ch =
                                fade > 0.62 ? 'o' : fade > 0.34 ? ':' : '.';
                            if (g[y][x] === ' ' || ch === 'o') g[y][x] = ch;
                        }
                    }
                }
            });
            return join(g);
        }
    };
}
