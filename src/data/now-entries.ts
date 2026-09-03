import Sep2026Now from '../components/now-entries/Sep2026Now.astro';

export interface NowEntry {
    date: string;
    Component: typeof Sep2026Now;
}

// Ordered newest first. Each entry's content lives entirely in its own
// component under src/components/now-entries/ — this list just says which
// component is current (index 0, shown on /now) vs archived (shown on /then).
export const nowEntries: NowEntry[] = [
    { date: 'September 2026', Component: Sep2026Now }
];
