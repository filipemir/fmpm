import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { Root, Bar, Dots, CloseDot, MinDot, MaxDot, Content } from './styles';

interface FakeBrowserProps {
    img: string;
    active?: boolean;
    onReady?: () => void;
}

export default function FakeBrowser({ img, active, onReady }: FakeBrowserProps) {
    const [ready, setReady] = useState(false),
        spring = useSpring({ opacity: ready ? 1 : 0 });

    return (
        <>
            <animated.div style={{ ...spring, height: '100%' }}>
                <Root active={!!active}>
                    <Bar>
                        <Dots>
                            <CloseDot />
                            <MinDot />
                            <MaxDot />
                        </Dots>
                    </Bar>
                    <Content style={{ backgroundImage: `url(${img})` }} />
                </Root>
            </animated.div>
            <img
                src={img}
                style={{ display: 'none' }}
                onLoad={() => {
                    setReady(true);
                    onReady && onReady();
                }}
            />
        </>
    );
}
