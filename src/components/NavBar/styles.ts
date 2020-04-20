import styled from '@emotion/styled';
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE } from 'styles/global';

export const RootDiv = styled.div`
    display: flex;
    align-content: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px 20px;
    height: ${HEADER_HEIGHT}px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 900px) {
        padding: 0 15px;
        height: ${HEADER_HEIGHT_MOBILE}px;
    }
`;

export const LeftDiv = styled.div`
    justify-self: left;

    a:hover {
        text-decoration: none;
    }
`;

export const RightDiv = styled.div`
    margin-left: auto;
    justify-self: right;
    padding-top: 14px;
`;
