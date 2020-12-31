import styled from '@emotion/styled';
import { COLOR_QUATERNARY, PADDING_TOP_PAGE } from 'styles/global';

export const RootDiv = styled.div`
    margin: 0 auto;
    padding-top: ${PADDING_TOP_PAGE}px;
`;

export const ProjectsWrapper = styled.div`
    padding-top: 30px;
`;

export const Book = styled.div`
    border-bottom: 1px solid ${COLOR_QUATERNARY};
    padding-bottom: 55px;
    margin-top: 45px;

    @media (max-width: 900px) {
        padding-bottom: 30px;
        margin-top: 25px;
    }

    &:first-of-type {
        margin-top: 0;
    }

    &:last-of-type {
        border-bottom: none;
    }
`;
