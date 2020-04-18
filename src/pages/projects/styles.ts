import styled from '@emotion/styled';
import { COLOR_QUATERNARY } from 'styles/global';

export const RootDiv = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

export const Section = styled.div`
    margin-bottom: 100px;
`;

export const ProjectsWrapper = styled.div`
    padding: 30px 20px 0 20px;
`;

export const Project = styled.div`
    margin-top: 100px;

    @media (max-width: 900px) {
        padding-bottom: 30px;
        margin-top: 25px;
        border-bottom: 1px solid ${COLOR_QUATERNARY};
    }

    &:first-of-type {
        margin-top: 0;
    }

    &:last-of-type {
        border-bottom: none;
    }
`;
