import styled from '@emotion/styled';

export const RootDiv = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

export const Section = styled.div`
    margin-bottom: 100px;
`;

export const HeaderWrapper = styled.h2`
    margin-bottom: 50px;
`;

export const ProjectsWrapper = styled.div`
    > div {
        margin-top: 60px;

        &:first-of-type {
            margin-top: 0;
        }
    }
`;
