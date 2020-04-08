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
        <animated.div style={spring}>
            <Root>
                <AvatarWrapper>
                    <Avatar />
                </AvatarWrapper>
                <Content>
                    <Header1Wrapper>
                        <Header1>
                            Hi! I'm filipe <Emoji symbol={'👋'} />
                        </Header1>
                        <Slash>
                            <Underline />
                        </Slash>
                    </Header1Wrapper>
                    <Header2>I'm a software engineer from Boston.</Header2>
                    <About>
                        I like building beautiful products and finding problems that can be meaningfully addressed with
                        technology. If you have one, I’d love to hear about it. I’m also a lover of music, books,
                        movies, and rock climbing and may occasionally muse about any or all of those here.
                        <Technologies>
                            {tech.map((t) => (
                                <TechTag technology={t} />
                            ))}
                        </Technologies>
                    </About>
                </Content>
            </Root>
        </animated.div>
    );
}
