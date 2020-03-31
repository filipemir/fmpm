import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import useMeasure, { RectReadOnly } from 'react-use-measure';
import { useSpring, animated } from 'react-spring';

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
        dotPosition = useSpring({ ...getDotPosition(activePageRect), immediate: skipAnimations });

    return (
        <RootDiv>
            {dotPosition && <animated.div style={dotPosition} css={dotCss} />}
            <animated.div style={underlinePosition} css={underlineDivCss}>
                <ReactSVG src={underlineSvg} />
            </animated.div>
            {pages.map((p, i) => {
                const isActive = p === currentPage,
                    isLast = i === pages.length - 1;
                return (
                    <span key={`page-${p}`}>
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
                    </span>
                );
            })}
        </RootDiv>
    );
}
