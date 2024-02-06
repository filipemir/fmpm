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
    JobTitle
} from './styles';
import Emoji from 'a11y-react-emoji';
import Underline from 'images/underline.svg';
import useMedia from 'use-media';
import MY_PIC from './me.png';

export default function Welcome() {
    const spring = useSpring({ opacity: 1, from: { opacity: 0 } }),
        isMobile = useMedia({ maxWidth: '900px' });

    return (
        <Root>
            <animated.div
                style={{ ...spring, display: isMobile ? 'block' : 'flex' }}
            >
                <Part1>
                    <Part1Inner>
                        <AvatarWrapper>
                            <Avatar
                                className='filipe'
                                src={MY_PIC}
                                height={190}
                                width={190}
                            />
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
                                I&apos;m a{' '}
                                <JobTitle>software engineer</JobTitle> at{' '}
                                <a
                                    href='https://charliehealth.com'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Charlie Health.
                                </a>
                            </Header2>
                            <About>
                                <div>
                                    We&apos;re working to deliver life-saving
                                    mental health treatment to kids in crisis.
                                    If that sounds like a worthwhile way to
                                    spend your time,{' '}
                                    <a
                                        href={`https://www.charliehealth.com/careers/current-openings`}
                                        target={'_blank'}
                                        rel='noopener noreferrer'
                                    >
                                        come join us
                                    </a>
                                    .
                                </div>
                            </About>
                        </Content>
                    </Part1Inner>
                </Part1>
            </animated.div>
        </Root>
    );
}
