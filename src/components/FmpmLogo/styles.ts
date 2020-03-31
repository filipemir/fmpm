import styled from '@emotion/styled';

import { COLOR_ACCENT, COLOR_BG_ACCENT, FONT_FAMILY_SERIF } from 'styles/global';

export const RootAnchor = styled.a`
    display: block;
    font-size: 40px;
    font-weight: 900;
    color: ${COLOR_ACCENT};
    font-family: ${FONT_FAMILY_SERIF};
    font-style: italic;
    text-shadow: 2px 4px 0 ${COLOR_BG_ACCENT};
`;
