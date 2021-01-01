import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { COLOR_BG_ACCENT, COLOR_QUATERNARY } from 'styles/global';

const RootWithDropShadow = styled.div`
    filter: drop-shadow(5px 5px 0 ${COLOR_QUATERNARY});
    display: inline-block;
    cursor: pointer;
`;

const Wrapper = styled.div`
    padding: 20px 30px 40px 30px;
    box-sizing: border-box;
    background-color: ${COLOR_BG_ACCENT};
    box-shadow: 5px 5px 0 ${COLOR_QUATERNARY};
    clip-path: polygon(50% 0%, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 0);
    position: relative;
    transition: transform 100ms ease-in-out;
`;

export default function DogearedTile({
    height,
    width,
    maxHeight,
    maxWidth,
    children,
    onClick
}: {
    height?: string;
    maxHeight?: string;
    width?: string;
    maxWidth?: string;
    children?: ReactNode;
    onClick?: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
    return (
        <RootWithDropShadow onClick={(evt) => onClick && onClick(evt)}>
            <Wrapper style={{ height, width, maxHeight, maxWidth }}>{children}</Wrapper>
        </RootWithDropShadow>
    );
}
