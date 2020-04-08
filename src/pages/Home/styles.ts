import styled from '@emotion/styled';

export const RootDiv = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

export const WelcomeSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-height: 800px;
`;

export const Section = styled.div`
    margin-bottom: 100px;
`;

export const HeaderWrapper = styled.h2`
    margin-bottom: 50px;
`;

export const ResumeWrapper = styled.div`
    display: block;
    position: relative;
`;

export const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 20px;

    > div {
        margin-right: 40px;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;
