import React, { ReactNode, CSSProperties } from 'react';
import {
    TransitionGroup,
    Transition as ReactTransition
} from 'react-transition-group';

const timeout = 200,
    transitionStyles: { [key: string]: CSSProperties } = {
        entering: {
            position: 'absolute',
            opacity: 0
        },
        entered: {
            transition: `opacity ${timeout}ms ease-in-out`,
            opacity: 1
        },
        exiting: {
            transition: `all ${timeout}ms ease-in-out`,
            opacity: 0
        }
    };

export default function Transition({
    children,
    location
}: {
    children: ReactNode;
    location: Location;
}) {
    return (
        <TransitionGroup>
            <ReactTransition
                key={location.pathname}
                timeout={{
                    enter: timeout,
                    exit: timeout
                }}
            >
                {(status) => (
                    <div
                        style={{
                            ...transitionStyles[status]
                        }}
                    >
                        {children}
                    </div>
                )}
            </ReactTransition>
        </TransitionGroup>
    );
}
