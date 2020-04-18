import styled from '@emotion/styled';

export const RootDiv = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    height: 100vh;
`;

export const WelcomeSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 100%;

    @media (max-width: 900px) {
        text-align: center;
        height: unset;
        display: block;

        > div {
            transform: none;
        }
    }
`;
