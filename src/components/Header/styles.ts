import styled from '@emotion/styled';

import { COLOR_BG_ACCENT, FONT_FAMILY_SERIF } from 'styles/global';

export const Root = styled.span`
    text-shadow: 2px 4px ${COLOR_BG_ACCENT};
    z-index: 0;
    position: relative;
    font-weight: 400;
`;

export const EmojiSpan = styled.span`
    margin-right: 0.2em;
`;

export const TextSpan = styled.span`
    font-family: ${FONT_FAMILY_SERIF};
`;

export const SlashDiv = styled.div`
    position: absolute;
    height: 0.7em;
    z-index: -1;
    fill: ${COLOR_BG_ACCENT};
    top: 50%;
    left: 50%;
    width: 110%;
    transform: translate(-50%, -50%);

    div {
        height: 100%;
    }
`;
