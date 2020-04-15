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
    GithubLogo
} from './styles';
import { Project } from 'models/project';
import FakeBrowser from 'components/FakeBrowser';
import Header from 'components/Header';
import TechTag from 'components/TechTag';
import GithubSvg from 'images/github.svg';

export default function ProjectRow({ project }: { project: Project }) {
    const { img, name, description, technologies, githubUrl } = project,
        [hovered, setHovered] = useState(false);
    return (
        <Root onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Preview>
                <FakeBrowser img={img} active={hovered} />
            </Preview>
            <Content>
                <Title>
                    {githubUrl && (
                        <GithubLogo href={githubUrl} target={'_blank'} rel='noopener noreferrer'>
                            <GithubSvg />
                        </GithubLogo>
                    )}
                    <Header text={name} fontSize={28} />
                </Title>
                <DescriptionBoxWrapper>
                    <DescriptionBox>
                        <Description>{description}</Description>
                    </DescriptionBox>
                </DescriptionBoxWrapper>
                <Technologies>
                    {technologies.map((t) => (
                        <TechTag technology={t} key={t} />
                    ))}
                </Technologies>
            </Content>
        </Root>
    );
}
