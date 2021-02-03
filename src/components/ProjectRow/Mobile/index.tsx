import React from 'react';
import parse from 'react-html-parser';

import { Title, SlashDiv, Technologies } from '../common/styles';
import {
    Root,
    Preview,
    Description,
    DescriptionBoxWrapper,
    GithubLogo
} from './styles';
import TechTag from 'components/TechTag';
import GithubSvg from 'images/github.svg';
import Underline from 'images/underline.svg';
import { ProjectRowProps } from 'components/ProjectRow/common/props';
import ConnectedFakeBrowser from 'components/FakeBrowser/connected';

export default function ProjectRowMobile({ project }: ProjectRowProps) {
    const { name, description, url, githubUrl, technologies } = project;

    return (
        <Root>
            <Title
                href={url || githubUrl}
                target={'_blank'}
                rel='noopener noreferrer'
            >
                <span>{name}</span>
                <SlashDiv>
                    <Underline />
                </SlashDiv>
            </Title>
            <Preview>
                <ConnectedFakeBrowser project={project} />
                <DescriptionBoxWrapper>
                    <Description>{parse(description)}</Description>
                </DescriptionBoxWrapper>
            </Preview>
            <Technologies>
                {technologies.map((t) => (
                    <TechTag technology={t} key={t} />
                ))}
            </Technologies>

            {githubUrl && (
                <GithubLogo
                    href={githubUrl}
                    target={'_blank'}
                    rel='noopener noreferrer'
                >
                    <GithubSvg />
                </GithubLogo>
            )}
        </Root>
    );
}
