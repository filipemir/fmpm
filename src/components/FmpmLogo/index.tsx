import React from 'react';
import { useSpring, animated, config } from 'react-spring';

import { RootAnchor } from './styles';

export default function FmpmLogo() {
    const spring = useSpring({ opacity: 1, from: { opacity: 0 }, config: config.molasses });
    return (
        <RootAnchor>
            <animated.div style={spring}>fmpm</animated.div>
        </RootAnchor>
    );
}
