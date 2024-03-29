import styled from '@emotion/styled';
import { css } from '@emotion/react';

const BAR_COLOR = '#E4E3E3',
    CLOSE_COLOR = '#FF5A52',
    MIN_COLOR = '#E6C029',
    MAX_COLOR = '#54C22C';

const dynamicSize = ({ active }: { active: boolean }) => css`
    transform: scale(${active ? 1.04 : 1});
`;

export const Root = styled.div`
    width: 100%;
    max-width: 550px;
    height: 350px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: rgba(2, 12, 27, 0.3) 0px 20px 30px -15px;
    transition: all 0.2s ease-in-out;
    margin: 0 auto;
    ${dynamicSize};
`;

export const Bar = styled.div`
    height: 20px;
    width: 100%;
    position: relative;
    top: 0;
    background-color: ${BAR_COLOR};
    text-align: left;
`;

export const Dots = styled.div`
    position: relative;
    top: 50%;
    left: 5px;
    transform: translateY(-60%);
`;

const Dot = css`
    height: 6px;
    width: 6px;
    border-radius: 50%;
    display: inline-block;
    margin: 0 3px;
`;

export const CloseDot = styled.div`
    ${Dot};
    background-color: ${CLOSE_COLOR};
`;

export const MinDot = styled.div`
    ${Dot};
    background-color: ${MIN_COLOR};
`;

export const MaxDot = styled.div`
    ${Dot};
    background-color: ${MAX_COLOR};
`;

export const ImgWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    > div {
        left: 50%;
        height: 100%;
        top: 0;
        transform: translateX(-50%);
    }
`;
