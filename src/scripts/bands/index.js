// Combines every ASCII band animation (one per file in this directory) into
// the same { id, label, make, ms } registry header.js consumed from the old
// two-file bands.js/bands-variants.js split. BANDS/VARIANTS is kept as two
// arrays rather than merged into one, matching that original grouping.

import { makeRain } from './rain.js';
import { makeReeds } from './reeds.js';
import { makeFireflies } from './fireflies.js';
import { makeSnow } from './snow.js';
import { makeSonar } from './sonar.js';
import { makePulse } from './pulse.js';
import { makeDrift } from './drift.js';

import { makeClouds } from './clouds.js';
import { makeStream } from './stream.js';
import { makeSwell } from './swell.js';
import { makeRipples } from './ripples.js';
import { makeShooting } from './shooting.js';
import { makeLeaves } from './leaves.js';
import { makeEmbers } from './embers.js';
import { makeTide } from './tide.js';
import { makeDrizzle } from './drizzle.js';
import { makeMoss } from './moss.js';
import { makeFlock } from './flock.js';
import { makeBubbles } from './bubbles.js';
import { makeSeeds } from './seeds.js';
import { makeContrails } from './contrails.js';
import { makeDrips } from './drips.js';

export const BANDS = [
    { id: 'rain', label: 'Rain on still water', make: makeRain, ms: 100 },
    { id: 'reeds', label: 'Wind through reeds', make: makeReeds, ms: 90 },
    { id: 'fireflies', label: 'Fireflies', make: makeFireflies, ms: 110 },
    { id: 'snow', label: 'Snowfall', make: makeSnow, ms: 110 },
    { id: 'sonar', label: 'Sonar sweep', make: makeSonar, ms: 90 },
    { id: 'pulse', label: 'Pulse', make: makePulse, ms: 110 },
    { id: 'drift', label: 'Sand ripples', make: makeDrift, ms: 110 }
];

export const VARIANTS = [
    { id: 'clouds', label: 'Clouds whirling', make: makeClouds, ms: 110 },
    { id: 'stream', label: 'Water streaming', make: makeStream, ms: 90 },
    { id: 'swell', label: 'Waves', make: makeSwell, ms: 100 },
    { id: 'ripples', label: 'Ripples', make: makeRipples, ms: 100 },
    { id: 'shooting', label: 'Shooting stars', make: makeShooting, ms: 90 },
    { id: 'leaves', label: 'Wind on leaves', make: makeLeaves, ms: 100 },
    { id: 'embers', label: 'Embers rising', make: makeEmbers, ms: 100 },
    { id: 'tide', label: 'Tide line', make: makeTide, ms: 100 },
    { id: 'drizzle', label: 'Drizzle', make: makeDrizzle, ms: 90 },
    { id: 'moss', label: 'Moss blooming', make: makeMoss, ms: 120 },
    { id: 'flock', label: 'Murmuration', make: makeFlock, ms: 140 },
    { id: 'bubbles', label: 'Bubbles rising', make: makeBubbles, ms: 100 },
    { id: 'seeds', label: 'Dandelion seeds', make: makeSeeds, ms: 110 },
    { id: 'contrails', label: 'Contrails', make: makeContrails, ms: 100 },
    { id: 'drips', label: 'Drips on glass', make: makeDrips, ms: 100 }
];
