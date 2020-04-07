import React from 'react';

import {
    RootWithDropShadow,
    Title,
    Description,
    Wrapper,
    Technologies,
    GithubLogo,
    ExternalLinks,
    ExternalLinkSvg
} from './styles';
import { Project } from 'models/project';
import TechTag from 'components/TechTag';
import GithubSvg from 'images/github.svg';
import LinkSvg from 'images/link.svg';

export default function ProjectCard({ project }: { project: Project }) {
    const { name, description, technologies, githubUrl, url } = project;
    return (
        <RootWithDropShadow>
            <Wrapper>
                <Title>{name}</Title>
                <Description>{description}</Description>
                <Technologies>
                    {technologies.map((t) => (
                        <TechTag technology={t} />
                    ))}
                </Technologies>
                <ExternalLinks>
                    {githubUrl && (
                        <GithubLogo href={githubUrl} target={'_blank'} rel='noopener'>
                            <GithubSvg />
                        </GithubLogo>
                    )}
                    {url && (
                        <ExternalLinkSvg href={url} target={'_blank'} rel='noopener'>
                            <LinkSvg />
                        </ExternalLinkSvg>
                    )}
                </ExternalLinks>
            </Wrapper>
        </RootWithDropShadow>
    );
}
