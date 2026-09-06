// Shared helpers for every ASCII band animation. State lives in normalized
// coordinates (x, y in 0..1) so a band can be rendered into any grid size —
// and resized live — without resetting or cropping.
// AR (2.1) is the character aspect ratio (cell height / cell width) at the
// header band's 10px font-size / 1.25 line-height.

export const AR = 2.1;

export const blank = (C, R) => {
    const g = [];
    for (let y = 0; y < R; y++) g.push(new Array(C).fill(' '));
    return g;
};

export const join = (g) => g.map((r) => r.join(''));

export const dims = (d, C, R) => [C || d.C, R || d.R];

export const dens = (C, k) => Math.max(26, Math.round((C / 1.5) * (k || 1)));

export const TICK = "'";
export const BACK = '`';
