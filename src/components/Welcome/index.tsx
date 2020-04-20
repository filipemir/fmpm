import React from 'react';
import { useSpring, animated } from 'react-spring';

import {
    Root,
    Part1,
    Part1Inner,
    AvatarWrapper,
    Avatar,
    Content,
    Header1,
    Header1Wrapper,
    Header2,
    About,
    Slash,
    Technologies,
    JobTitle
} from './styles';
import Emoji from 'a11y-react-emoji';
import Underline from 'images/underline.svg';
import { Tech } from 'models/tech';
import TechTag from 'components/TechTag';
import useMedia from 'use-media';
import { PERSONAL_EMAIL } from 'data/personal';

export default function Welcome() {
    const tech = [Tech.REACT, Tech.TS, Tech.JAVA, Tech.SPRING_BOOT],
        spring = useSpring({ opacity: 1, from: { opacity: 0 } }),
        isMobile = useMedia({ maxWidth: '900px' });
    return (
        <Root>
            <animated.div style={{ ...spring, display: isMobile ? 'block' : 'flex' }}>
                <Part1>
                    <Part1Inner>
                        <AvatarWrapper>
                            <Avatar />
                        </AvatarWrapper>
                        <Content>
                            <Header1Wrapper>
                                <Header1>
                                    Hi! I&apos;m filipe <Emoji symbol={'👋'} />
                                </Header1>
                                <Slash>
                                    <Underline />
                                </Slash>
                            </Header1Wrapper>
                            <Header2>
                                I&apos;m a <JobTitle>software engineer</JobTitle> living in Boston.
                            </Header2>
                            <Technologies>
                                {tech.map((t) => (
                                    <TechTag technology={t} key={t} />
                                ))}
                            </Technologies>
                            {!isMobile && (
                                <About>
                                    <div>
                                        I like building beautiful products and finding problems that can be meaningfully
                                        addressed with technology. If you have one, I&apos;d love to{' '}
                                        <a
                                            href={`mailto:${PERSONAL_EMAIL}`}
                                            target={'_blank'}
                                            rel='noopener noreferrer'
                                        >
                                            hear about it
                                        </a>
                                        .
                                    </div>
                                    <div>
                                        I&apos;m also a lover of music, books, movies, and rock climbing and may
                                        occasionally muse about any or all of those here.
                                    </div>
                                </About>
                            )}
                        </Content>
                    </Part1Inner>
                </Part1>
            </animated.div>
        </Root>
    );
}
