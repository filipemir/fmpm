import styled from '@emotion/styled';

import { COLOR_ACCENT, COLOR_QUATERNARY, FONT_FAMILY_MONO } from 'styles/global';

export const RootDiv = styled.div`
    border-radius: 4px;
    font-family: ${FONT_FAMILY_MONO};
    font-size: 10px;
    color: ${COLOR_ACCENT};
    background-color: ${COLOR_QUATERNARY};
    display: inline-block;
    padding: 5px 10px;
`;
