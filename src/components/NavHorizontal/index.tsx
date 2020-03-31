import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import useMeasure, { RectReadOnly } from 'react-use-measure';
import { useSpring, animated, useTrail } from 'react-spring';

import { RootDiv, PageDiv, PageSeparator, underlineDivCss, dotCss } from './styles';
import underlineSvg from 'images/underline.svg';
import Page from 'models/page';

function getUnderlinePosition(activePageRect: RectReadOnly) {
    const { left, top, width, height } = activePageRect;
    return {
        left: left + width / 2,
        top: top + height - 3,
        width: width
    };
}

function getDotPosition(hoveredRect: DOMRect | RectReadOnly) {
    const { top, left, width } = hoveredRect;
    return { top: top - 10, left: left + width / 2, opacity: 1 };
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
        [activePageRef, activePageRect] = useMeasure(),
        underlinePosition = useSpring({ ...getUnderlinePosition(activePageRect), immediate: skipAnimations }),
        dotPosition = useSpring({ ...getDotPosition(activePageRect), immediate: skipAnimations }),
        trail = useTrail(pages.length, { opacity: 1, from: { opacity: 0 } });

    return (
        <RootDiv>
            {dotPosition && <animated.div style={dotPosition} css={dotCss} />}
            <animated.div style={underlinePosition} css={underlineDivCss}>
                <ReactSVG src={underlineSvg} />
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
