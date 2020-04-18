import styled from '@emotion/styled';
import { COLOR_SECONDARY, FONT_FAMILY_SANS_SERIF } from 'styles/global';

export const SectionHeaderWrapper = styled.h2`
    margin: 0 0 30px 0;
    text-align: center;
`;

export const SectionIntro = styled.div`
    font-family: ${FONT_FAMILY_SANS_SERIF};
    color: ${COLOR_SECONDARY};
    max-width: 45em;
    margin: 0 auto 20px auto;
    font-weight: 300;
    line-height: 1.4;
    text-align: center;
    font-size: 1em;
`;
