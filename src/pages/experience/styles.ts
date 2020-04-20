import styled from '@emotion/styled';
import { PADDING_TOP_PAGE, PADDING_TOP_PAGE_MOBILE } from 'styles/global';

export const RootDiv = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding-top: ${PADDING_TOP_PAGE}px;
    @media (max-width: 900px) {
        padding-top: ${PADDING_TOP_PAGE_MOBILE}px;
    }
`;

export const ResumeWrapper = styled.div`
    display: block;
    position: relative;
    height: calc(100vh - 340px);
`;
