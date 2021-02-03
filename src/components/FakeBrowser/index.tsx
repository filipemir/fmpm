import React, { ReactChild } from 'react';

import {
    Root,
    Bar,
    Dots,
    CloseDot,
    MinDot,
    MaxDot,
    ImgWrapper
} from './styles';

interface FakeBrowserProps {
    active?: boolean;
    image: ReactChild;
}

export default function FakeBrowser({ active, image }: FakeBrowserProps) {
    return (
        <Root active={!!active}>
            <Bar>
                <Dots>
                    <CloseDot />
                    <MinDot />
                    <MaxDot />
                </Dots>
            </Bar>
            <ImgWrapper>{image}</ImgWrapper>
        </Root>
    );
}
