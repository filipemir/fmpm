import styled from '@emotion/styled';

export const RootDiv = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
`;

export const TimelineWrapper = styled.div`
    position: sticky;
    top: 30px;
    margin-top: 30px;
    display: block;
    left: 0;
    height: 500px;
`;

export const JobsWrapper = styled.div`
    justify-content: right;
    flex-grow: 1;
    padding: 0 20px;
    max-width: 100%;

    @media (max-width: 900px) {
        padding: 0;
    }
`;
