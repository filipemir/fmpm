import React from 'react';
import { useSpring, animated } from 'react-spring';

import {
    Root,
    AvatarWrapper,
    Avatar,
    Content,
    Header1,
    Header1Wrapper,
    Header2,
    About,
    Slash,
    Technologies
} from './styles';
import Emoji from 'a11y-react-emoji';
import Underline from 'images/underline.svg';
import { Tech } from 'models/tech';
import TechTag from 'components/TechTag';

export default function Welcome() {
    const tech = [Tech.REACT, Tech.TS, Tech.JAVA, Tech.SPRING_BOOT],
        spring = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
        <Root>
            <animated.div style={{ ...spring, display: 'flex' }}>
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
                    <Header2>I&apos;m a software engineer from Boston.</Header2>
                    <About>
                        I like building beautiful products and finding problems that can be meaningfully addressed with
                        technology. If you have one, I&apos;d love to hear about it. I&apos;m also a lover of music,
                        books, movies, and rock climbing and may occasionally muse about any or all of those here.
                        <Technologies>
                            {tech.map((t) => (
                                <TechTag technology={t} key={t} />
                            ))}
                        </Technologies>
                    </About>
                </Content>
            </animated.div>
        </Root>
    );
}