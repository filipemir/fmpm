import React, { useState } from 'react';
import 'hamburgers/_sass/hamburgers/hamburgers.scss';
import { Root } from './styles';

export default function Welcome() {
    const [active, setActive] = useState(false);
    return (
        <Root>
            <button
                className={`hamburger hamburger--spring ${active ? 'is-active' : ''}`}
                type='button'
                onClick={() => setActive(!active)}
            >
                <span className='hamburger-box'>
                    <span className='hamburger-inner' />
                </span>
            </button>
        </Root>
    );
}
