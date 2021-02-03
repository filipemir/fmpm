import styled from '@emotion/styled';
import { FONT_FAMILY_SANS_SERIF, PADDING_TOP_PAGE } from 'styles/global';

export const StyledRoot = styled.div`
    margin: 0 auto;
    padding-top: ${PADDING_TOP_PAGE}px;
    padding-bottom: ${PADDING_TOP_PAGE}px;
    min-height: 100vh;
`;

export const StyledYear = styled.h2`
    font-family: ${FONT_FAMILY_SANS_SERIF};
    text-align: center;
`;
