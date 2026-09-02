// ASCII header bands. make(C, R) -> { step(tick), rows(tick, C?, R?) -> string[] }
// State lives in normalized coordinates (x, y in 0..1) so a band can be rendered
// into any grid size — and resized live — without resetting or cropping.
// 2.1 is the character aspect ratio (cell height / cell width) at 10px/1.25.

const AR = 2.1;

const blank = (C, R) => {
  const g = [];
  for (let y = 0; y < R; y++) g.push(new Array(C).fill(" "));
  return g;
};
const join = g => g.map(r => r.join(""));
const dims = (d, C, R) => [C || d.C, R || d.R];

export function makeRain(C, R) {
  const d = { C: C, R: R };
  const drops = [];
  const spawn = t => drops.push({ x: 0.02 + Math.random() * 0.96, y: 0.08 + Math.random() * 0.84, born: t });
  for (let i = 0; i < 3; i++) spawn(-Math.floor(Math.random() * 28));
  return {
    step(t) {
      for (let i = drops.length - 1; i >= 0; i--) if (t - drops[i].born > 34) drops.splice(i, 1);
      if (Math.random() < 0.3) spawn(t);
    },
    rows(t, c, r) {
      const [C, R] = dims(d, c, r);
      const g = blank(C, R);
      drops.forEach(o => {
        const age = t - o.born, rad = age * 0.42, fade = 1 - age / 34;
        const cx = o.x * C, cy = o.y * R;
        for (let y = 0; y < R; y++) {
          for (let x = 0; x < C; x++) {
            const dx = x - cx, dy = (y - cy) * AR;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (age < 2 && dist < 0.9) { g[y][x] = "o"; continue; }
            if (Math.abs(dist - rad) < 0.55 && rad > 0.6) {
              const ch = fade > 0.62 ? "o" : fade > 0.34 ? ":" : ".";
              if (g[y][x] === " " || ch === "o") g[y][x] = ch;
            }
          }
        }
      });
      return join(g);
    }
  };
}

export function makeReeds(C, R) {
  const d = { C: C, R: R };
  const h = [];
  for (let x = 0; x < 400; x++) h.push(0.34 + Math.random() * 0.52);
  return {
    step() {},
    rows(tick, c, r) {
      const [C, R] = dims(d, c, r);
      const t = tick * 0.08, g = blank(C, R);
      for (let x = 0; x < C; x++) {
        const gust = Math.sin(x * 0.14 - t * 1.9) * 0.6 + Math.sin(x * 0.05 - t * 0.8) * 0.4;
        const height = Math.max(1.4, h[x % h.length] * R + gust * 0.35);
        const tip = Math.max(0, R - height);
        for (let y = R - 1; y >= Math.floor(tip); y--) {
          const up = (R - 1 - y) / Math.max(1, height);
          const lean = gust * up * up;
          const sx = Math.round(x + lean * 2.4);
          if (sx < 0 || sx >= C) continue;
          g[y][sx] = y <= Math.floor(tip) + 0.01
            ? (lean > 0.35 ? "'" : lean < -0.35 ? "`" : "|")
            : (Math.abs(lean) > 0.75 ? (lean > 0 ? "/" : "\\") : "|");
        }
      }
      return join(g);
    }
  };
}

export function makeFireflies(C, R) {
  const d = { C: C, R: R };
  const f = [];
  for (let i = 0; i < Math.max(8, Math.round(C / 6)); i++) {
    f.push({ x: Math.random(), y: Math.random(), p: Math.random() * 6.28, sp: 0.6 + Math.random() * 0.8 });
  }
  return {
    step(t) {
      f.forEach(q => {
        q.x += (Math.cos(t * 0.03 * q.sp + q.p) * 0.16 + 0.04) / 80;
        q.y += Math.sin(t * 0.045 * q.sp + q.p * 1.7) * 0.004;
        if (q.x >= 1) q.x -= 1; if (q.x < 0) q.x += 1;
        if (q.y >= 1) q.y -= 1; if (q.y < 0) q.y += 1;
      });
    },
    rows(tick, c, r) {
      const [C, R] = dims(d, c, r);
      const g = blank(C, R);
      f.forEach(q => {
        const b = Math.sin(tick * 0.07 * q.sp + q.p);
        if (b < 0.25) return;
        const x = Math.min(C - 1, Math.floor(q.x * C)), y = Math.min(R - 1, Math.floor(q.y * R));
        g[y][x] = b > 0.88 ? "*" : b > 0.6 ? "+" : ".";
      });
      return join(g);
    }
  };
}

export function makeSnow(C, R) {
  const d = { C: C, R: R };
  const s = [];
  for (let i = 0; i < Math.max(26, Math.round(C / 1.5)); i++) {
    s.push({ x: Math.random(), y: Math.random(), v: 0.004 + Math.random() * 0.006, p: Math.random() * 6.28 });
  }
  return {
    step(t) {
      s.forEach(q => {
        q.y += q.v;
        q.x += (Math.sin(t * 0.05 + q.p) * 0.14 - 0.03) / 80;
        if (q.y >= 1) { q.y = -0.01; q.x = Math.random(); }
        if (q.x < 0) q.x += 1; if (q.x >= 1) q.x -= 1;
      });
    },
    rows(tick, c, r) {
      const [C, R] = dims(d, c, r);
      const g = blank(C, R);
      s.forEach(q => {
        const y = Math.floor(q.y * R);
        if (y < 0 || y >= R) return;
        g[y][Math.min(C - 1, Math.floor(q.x * C))] = q.v > 0.008 ? "*" : q.v > 0.006 ? "," : ".";
      });
      return join(g);
    }
  };
}

export function makeSonar(C, R) {
  const d = { C: C, R: R };
  const dots = [];
  for (let i = 0; i < Math.round(C * 0.55); i++) dots.push({ x: Math.random(), y: Math.random() });
  return {
    step() {},
    rows(tick, c, r) {
      const [C, R] = dims(d, c, r);
      const g = blank(C, R);
      const beam = (tick * 0.85) % (C + 24) - 12;
      dots.forEach(o => {
        const x = Math.min(C - 1, Math.floor(o.x * C)), y = Math.min(R - 1, Math.floor(o.y * R));
        const k = Math.abs(x - beam);
        if (k > 16) return;
        g[y][x] = k < 1.6 ? "o" : k < 6 ? ":" : ".";
      });
      return join(g);
    }
  };
}

export function makePulse(C, R) {
  const d = { C: C, R: R };
  return {
    step() {},
    rows(tick, c, r) {
      const [C, R] = dims(d, c, r);
      const t = tick * 0.05, g = blank(C, R);
      const step = Math.max(2, Math.round(R / 3));
      for (let y = 0; y < R; y += step) {
        for (let x = 0; x < C; x += 4) {
          const dx = (x - C * 0.34) * 0.24, dy = (y - R * 0.5) * AR * 0.5;
          const b = Math.sin(Math.sqrt(dx * dx + dy * dy) * 0.55 - t * 1.4);
          if (b < 0.2) continue;
          g[y][x] = b > 0.9 ? "o" : b > 0.6 ? ":" : ".";
        }
      }
      return join(g);
    }
  };
}

export function makeDrift(C, R) {
  const d = { C: C, R: R };
  return {
    step() {},
    rows(tick, c, r) {
      const [C, R] = dims(d, c, r);
      const t = tick * 0.035, g = blank(C, R);
      const ys = 6 / Math.max(1, R);
      for (let y = 0; y < R; y++) {
        for (let x = 0; x < C; x++) {
          const v = y * ys;
          const f = Math.sin(x * 0.16 - v * 0.9 + t) + Math.sin(x * 0.07 + v * 0.4 - t * 0.7) * 0.6;
          if (f > 1.32) g[y][x] = "~";
          else if (f > 1.05) g[y][x] = "-";
          else if (f > 0.86) g[y][x] = ".";
        }
      }
      return join(g);
    }
  };
}

export const BANDS = [
  { id: "rain", label: "Rain on still water", make: makeRain, ms: 100 },
  { id: "reeds", label: "Wind through reeds", make: makeReeds, ms: 90 },
  { id: "fireflies", label: "Fireflies", make: makeFireflies, ms: 110 },
  { id: "snow", label: "Snowfall", make: makeSnow, ms: 110 },
  { id: "sonar", label: "Sonar sweep", make: makeSonar, ms: 90 },
  { id: "pulse", label: "Pulse", make: makePulse, ms: 110 },
  { id: "drift", label: "Sand ripples", make: makeDrift, ms: 110 }
];
