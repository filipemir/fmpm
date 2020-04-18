import React, { useState } from 'react';
import parse from 'react-html-parser';
import { useSpring, animated } from 'react-spring';

import { Title, SlashDiv, Technologies } from '../common/styles';
import {
    Root,
    Preview,
    Content,
    Description,
    DescriptionBox,
    DescriptionBoxWrapper,
    TitleWrapper,
    GithubLogo
} from './styles';
import FakeBrowser from 'components/FakeBrowser';
import TechTag from 'components/TechTag';
import GithubSvg from 'images/github.svg';
import Underline from 'images/underline.svg';
import { ProjectRowProps } from 'components/ProjectRow/common/props';

export default function ProjectRowDesktop({ project, leftAlignedContent = false }: ProjectRowProps) {
    const { img, name, description, technologies, url, githubUrl } = project,
        [hovered, setHovered] = useState(false),
        [ready, setReady] = useState(false),
        spring = useSpring({ opacity: ready ? 1 : 0 });
    return (
        <animated.div style={spring}>
            <Root onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <Preview
                    alignLeft={!leftAlignedContent}
                    href={url || githubUrl}
                    target={'_blank'}
                    rel='noopener noreferrer'
                >
                    <FakeBrowser img={img} active={hovered} onReady={() => setReady(true)} />
                </Preview>
                <Content alignLeft={leftAlignedContent}>
                    <TitleWrapper alignLeft={leftAlignedContent}>
                        <Title href={url || githubUrl} target={'_blank'} rel='noopener noreferrer'>
                            <span>{name}</span>
                            <SlashDiv>
                                <Underline />
                            </SlashDiv>
                        </Title>

                        {githubUrl && (
                            <GithubLogo
                                alignLeft={!leftAlignedContent}
                                href={githubUrl}
                                target={'_blank'}
                                rel='noopener noreferrer'
                            >
                                <GithubSvg />
                            </GithubLogo>
                        )}
                    </TitleWrapper>
                    <DescriptionBoxWrapper>
                        <DescriptionBox alignLeft={leftAlignedContent}>
                            <Description>{parse(description)}</Description>
                        </DescriptionBox>
                    </DescriptionBoxWrapper>
                    <Technologies>
                        {technologies.map((t) => (
                            <TechTag technology={t} key={t} />
                        ))}
                    </Technologies>
                </Content>
            </Root>
        </animated.div>
    );
}
