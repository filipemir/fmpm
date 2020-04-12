import styled from '@emotion/styled';

export const RootDiv = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

export const WelcomeSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 200px);
    > div {
        transform: translateY(-150px);
    }
`;
