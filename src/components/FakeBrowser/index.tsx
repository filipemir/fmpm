import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { Root, Bar, Dots, CloseDot, MinDot, MaxDot, Content } from './styles';

export default function FakeBrowser({ img }: { img: string }) {
    const [ready, setReady] = useState(false),
        spring = useSpring({ opacity: ready ? 1 : 0 });

    return (
        <Root>
            <animated.div style={{ ...spring, height: '100%' }}>
                <Bar>
                    <Dots>
                        <CloseDot />
                        <MinDot />
                        <MaxDot />
                    </Dots>
                </Bar>
                <Content style={{ backgroundImage: `url(${img})` }} />
            </animated.div>
            <img src={img} style={{ display: 'none' }} onLoad={() => setReady(true)} />
        </Root>
    );
}
