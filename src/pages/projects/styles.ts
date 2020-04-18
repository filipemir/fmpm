import styled from '@emotion/styled';
import { COLOR_QUATERNARY, PADDING_TOP_PAGE } from 'styles/global';

export const RootDiv = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding-top: ${PADDING_TOP_PAGE}px;
`;

export const Section = styled.div`
    margin-bottom: 100px;
`;

export const ProjectsWrapper = styled.div`
    padding: 30px 20px 0 20px;
`;

export const Project = styled.div`
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
