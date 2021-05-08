import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const FONT_FAMILY_MONO = 'Roboto Mono, Courier New, monospace';
export const FONT_FAMILY_SANS_SERIF = 'Roboto, Helvetica, sans-serif';
export const FONT_FAMILY_SERIF = 'FF Tisa, Georgia, serif';

export const COLOR_BG = '#F0EFEF';
export const COLOR_BG_ACCENT = '#FFFFFF';
export const COLOR_ACCENT = '#BC4124';
export const COLOR_PRIMARY = 'rgba(74,74,74,0.91)';
export const COLOR_SECONDARY = '#848282';
export const COLOR_TERNARY = '#B4B4B4';
export const COLOR_QUATERNARY = '#E4E3E3';

// export const COLOR_BG = '#0A192F';
// export const COLOR_BG_ACCENT = '#01527A';
// export const COLOR_ACCENT = '#F4A345';
// export const COLOR_PRIMARY = '#FFFFFF';
// export const COLOR_SECONDARY = '#A3BACF';
// export const COLOR_TERNARY = '#A3BACF';
// export const COLOR_QUATERNARY = '#063C5C';

export const HEADER_HEIGHT = 65;
export const PADDING_TOP_PAGE = HEADER_HEIGHT + 10;

export const MOBILE_MAX_WIDTH = '800px';

export const StyledBlurrableImage = styled.img`
    filter: ${(props: { blur?: boolean }) => (props.blur ? 'blur(5px)' : null)};
`;

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
        position: relative;

        &:hover {
            &:after {
                width: 100%;
                content: ' ';
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 1px dashed ${COLOR_ACCENT};
                animation: grow 400ms forwards ease-in-out;
            }
        }

        @keyframes grow {
            0% {
                width: 0;
            }

            100% {
                width: 100%;
            }
        }
    }

    #___gatsby,
    #gatsby-focus-wrapper {
        height: 100%;
    }
`;

export default globalCss;
