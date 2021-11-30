import React from 'react';
import Image from 'next/image';

import {
    Root,
    Bar,
    Dots,
    CloseDot,
    MinDot,
    MaxDot,
    ImgWrapper
} from './styles';
import { Project } from 'models/project';

interface FakeBrowserProps {
    active?: boolean;
    project: Project;
}

export default function FakeBrowser({ active, project }: FakeBrowserProps) {
    return (
        <Root active={!!active}>
            <Bar>
                <Dots>
                    <CloseDot />
                    <MinDot />
                    <MaxDot />
                </Dots>
            </Bar>
            <ImgWrapper>
                <Image src={project.img} />
            </ImgWrapper>
        </Root>
    );
}
