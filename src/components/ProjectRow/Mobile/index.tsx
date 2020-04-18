import React, { useState } from 'react';
import parse from 'react-html-parser';
import { useSpring, animated } from 'react-spring';

import { Title, SlashDiv, Technologies } from '../common/styles';
import { Root, Preview, Description, DescriptionBoxWrapper, GithubLogo } from './styles';
import FakeBrowser from 'components/FakeBrowser';
import TechTag from 'components/TechTag';
import GithubSvg from 'images/github.svg';
import Underline from 'images/underline.svg';
import { ProjectRowProps } from 'components/ProjectRow/common/props';

export default function ProjectRowMobile({ project }: ProjectRowProps) {
    const { img, name, description, url, githubUrl, technologies } = project,
        [hovered, setHovered] = useState(false),
        [ready, setReady] = useState(false),
        spring = useSpring({ opacity: ready ? 1 : 0 });
    return (
        <animated.div style={spring}>
            <Root onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <Title href={url || githubUrl} target={'_blank'} rel='noopener noreferrer'>
                    <span>{name}</span>
                    <SlashDiv>
                        <Underline />
                    </SlashDiv>
                </Title>
                <Preview>
                    <FakeBrowser img={img} active={hovered} onReady={() => setReady(true)} />
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
                    <GithubLogo href={githubUrl} target={'_blank'} rel='noopener noreferrer'>
                        <GithubSvg />
                    </GithubLogo>
                )}
            </Root>
        </animated.div>
    );
}
