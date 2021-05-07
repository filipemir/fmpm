import styled from '@emotion/styled';
import { COLOR_PRIMARY, FONT_FAMILY_SERIF } from 'styles/global';

export const SectionHeaderWrapper = styled.h1`
    margin: 0 0 30px 0;
    text-align: center;
`;

export const SectionIntro = styled.div`
    font-family: ${FONT_FAMILY_SERIF};
    color: ${COLOR_PRIMARY};
    max-width: 45em;
    margin: 0 auto 40px auto;
    font-weight: 300;
    line-height: 1.7;
    font-size: 18px;
    text-align: center;

    > div {
        margin-top: 15px;
    }
`;

export const Section = styled.div`
    padding: 0 20px;
`;
