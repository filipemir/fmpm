import React, { useState, useRef, MutableRefObject } from 'react';
import useMeasure, { RectReadOnly } from 'react-use-measure';
import { useSpring, animated, useTrail } from 'react-spring';

import { RootDiv, PageDiv, PageSeparator, underlineDivCss, dotCss } from './styles';
import Underline from 'images/underline.svg';
import Page from 'models/page';

function getUnderlinePosition({
    rootRef,
    activePageRect
}: {
    rootRef?: MutableRefObject<HTMLDivElement | null>;
    activePageRect: RectReadOnly;
}) {
    if (!rootRef || !rootRef.current) {
        return { left: 0, opacity: 0, width: 45 };
    }

    const rootRect = rootRef.current.getBoundingClientRect();

    const { left, width } = activePageRect;
    return {
        left: left - rootRect.left,
        width: width,
        opacity: 1
    };
}

function getDotPosition({
    rootRef,
    activePageRect
}: {
    rootRef?: MutableRefObject<HTMLDivElement | null>;
    activePageRect: RectReadOnly;
}) {
    if (!rootRef || !rootRef.current) {
        return { left: 0, opacity: 0 };
    }

    const rootRect = rootRef.current.getBoundingClientRect();

    const { left, width } = activePageRect;
    return {
        left: left - rootRect.left + width / 2,
        opacity: 1
    };
}

export default function NavHorizontal({
    currentPage,
    onPageClick
}: {
    currentPage: Page;
    onPageClick: (page: Page) => void;
}) {
    const pages = Object.values(Page),
        [skipAnimations, setSkipAnimations] = useState(true),
        rootRef = useRef() as MutableRefObject<HTMLDivElement | null>,
        [activePageRef, activePageRect] = useMeasure(),
        underlinePosition = useSpring({
            ...getUnderlinePosition({ rootRef, activePageRect }),
            immediate: skipAnimations
        }),
        dotPosition = useSpring({ ...getDotPosition({ rootRef, activePageRect }), immediate: skipAnimations }),
        trail = useTrail(pages.length, { opacity: 1, from: { opacity: 0 } });

    return (
        <RootDiv ref={rootRef}>
            <animated.div style={dotPosition} css={dotCss} />
            <animated.div style={underlinePosition} css={underlineDivCss}>
                <Underline />
            </animated.div>
            {trail.map(({ opacity }, i) => {
                const p = pages[i],
                    isActive = p === currentPage,
                    isLast = i === pages.length - 1;
                return (
                    <animated.span style={{ opacity }} key={`page-${p}`}>
                        <PageDiv
                            active={isActive}
                            ref={isActive ? activePageRef : undefined}
                            onClick={() => {
                                setSkipAnimations(false);
                                onPageClick(p);
                            }}
                        >
                            {p}
                        </PageDiv>
                        {!isLast && <PageSeparator>.</PageSeparator>}
                    </animated.span>
                );
            })}
        </RootDiv>
    );
}
