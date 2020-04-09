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
export const COLOR_QUATERNARY = '#E4E3E3';

export const TEXT_SHADOW = `2px 4px 0 ${COLOR_BG_ACCENT}`;

const globalCss = css`
    html,
    body {
        height: 100%;
        position: relative;
        background-color: ${COLOR_BG};
        color: ${COLOR_PRIMARY};
        font-family: ${FONT_FAMILY_SANS_SERIF};
        margin: 0;

        *::selection {
            background-color: rgba(188, 65, 36, 0.2);
        }
    }

    a {
        color: ${COLOR_ACCENT};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export default globalCss;
