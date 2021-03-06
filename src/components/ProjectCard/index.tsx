import React, { useRef, MutableRefObject } from 'react';

import {
    Title,
    Description,
    Technologies,
    GithubLogo,
    ExternalLinks
} from './styles';
import { Project } from 'models/project';
import TechTag from 'components/TechTag';
import GithubSvg from 'images/github.svg';
import parse from 'react-html-parser';
import DogearedTile from 'components/DogearedTile';

export default function ProjectCard({ project }: { project: Project }) {
    const { name, description, technologies, githubUrl, url } = project,
        githubLinkRef = useRef() as MutableRefObject<HTMLAnchorElement | null>,
        onClick = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const hasUrl = url || githubUrl,
                githubLinkEl = githubLinkRef.current,
                isGithubLinkClick =
                    !!githubLinkEl && githubLinkEl.contains(evt.target as Node);

            if (!hasUrl || isGithubLinkClick) {
                return;
            }

            window.open(url || githubUrl, '_blank');
        };
    return (
        <DogearedTile onClick={onClick} height={'240px'} width={'290px'}>
            <Title
                href={url || githubUrl}
                target={'_blank'}
                rel='noopener noreferrer'
            >
                {name}
            </Title>
            <Description>{parse(description)}</Description>
            <Technologies>
                {technologies.map((t) => (
                    <TechTag technology={t} key={t} />
                ))}
            </Technologies>
            <ExternalLinks>
                {githubUrl && (
                    <GithubLogo
                        href={githubUrl}
                        target={'_blank'}
                        rel='noopener noreferrer'
                        ref={githubLinkRef}
                    >
                        <GithubSvg />
                    </GithubLogo>
                )}
            </ExternalLinks>
        </DogearedTile>
    );
}
