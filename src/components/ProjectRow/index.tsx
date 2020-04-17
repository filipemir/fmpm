import React, { useState } from 'react';

import {
    Root,
    Preview,
    Content,
    Description,
    DescriptionBox,
    DescriptionBoxWrapper,
    Title,
    Technologies,
    SlashDiv
    // GithubLogo
} from './styles';
import { Project } from 'models/project';
import FakeBrowser from 'components/FakeBrowser';
import TechTag from 'components/TechTag';
// import GithubSvg from 'images/github.svg';
import Underline from 'images/underline.svg';

export default function ProjectRow({
    project,
    leftAlignedContent = false
}: {
    project: Project;
    leftAlignedContent?: boolean;
}) {
    const { img, name, description, technologies } = project,
        [hovered, setHovered] = useState(false);
    return (
        <Root onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Preview alignLeft={!leftAlignedContent}>
                <FakeBrowser img={img} active={hovered} />
            </Preview>
            <Content alignLeft={leftAlignedContent}>
                <Title>
                    <span>{name}</span>
                    <SlashDiv>
                        <Underline />
                    </SlashDiv>
                </Title>
                <DescriptionBoxWrapper>
                    <DescriptionBox alignLeft={leftAlignedContent}>
                        <Description>{description}</Description>
                    </DescriptionBox>
                </DescriptionBoxWrapper>
                <Technologies>
                    {technologies.map((t) => (
                        <TechTag technology={t} key={t} />
                    ))}
                </Technologies>
                {/*{githubUrl && (*/}
                {/*    <GithubLogo href={githubUrl} target={'_blank'} rel='noopener noreferrer'>*/}
                {/*        <GithubSvg />*/}
                {/*    </GithubLogo>*/}
                {/*)}*/}
            </Content>
        </Root>
    );
}
