import { css } from '@emotion/core';

export const FONT_FAMILY_MONO = 'Roboto Mono, Courier New, monospace';
export const FONT_FAMILY_SANS_SERIF = 'Roboto, Helvetica, sans-serif';
export const FONT_FAMILY_SERIF = 'FF Tisa, Georgia, serif';

export const COLOR_BG = '#F0EFEF';
export const COLOR_BG_ACCENT = '#FFF';
export const COLOR_ACCENT = '#BC4124';
export const COLOR_PRIMARY = '#4A4A4A';
export const COLOR_SECONDARY = '#848282';
export const COLOR_TERNARY = '#B4B4B4';

const globalCss = css`
    html,
    body {
        background-color: ${COLOR_BG};
        color: ${COLOR_PRIMARY};
        font-family: ${FONT_FAMILY_SANS_SERIF};
    }
`;

export default globalCss;
