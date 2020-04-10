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
    ExternalLinks,
    GithubLogo
} from './styles';
import { Project } from 'models/project';
import FakeBrowser from 'components/FakeBrowser';
import Header from 'components/Header';
import TechTag from 'components/TechTag';
import GithubSvg from 'images/github.svg';

export default function ProjectRow({ project }: { project: Project }) {
    const { img, name, description, technologies, githubUrl } = project;
    return (
        <Root>
            <Preview>
                <FakeBrowser img={img} />
            </Preview>
            <Content>
                <Title>
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
                <ExternalLinks>
                    {githubUrl && (
                        <GithubLogo href={githubUrl} target={'_blank'} rel='noopener'>
                            <GithubSvg />
                        </GithubLogo>
                    )}
                </ExternalLinks>
            </Content>
        </Root>
    );
}
