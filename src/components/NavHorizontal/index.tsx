import React from 'react';
import { ReactSVG } from 'react-svg';
import useMeasure, { RectReadOnly } from 'react-use-measure';
import { useSpring, animated } from 'react-spring';

import { RootDiv, PageDiv, PageSeparator, CircleDiv, underlineDivCss } from './styles';
import underlineSvg from 'images/underline.svg';
import Page from 'models/page';

function getUnderlinePosition({ rootRect, activePageRect }: { rootRect: RectReadOnly; activePageRect: RectReadOnly }) {
    return {
        left: activePageRect.x - rootRect.x + activePageRect.width / 2,
        top: activePageRect.height,
        width: activePageRect.width
    };
}

// TODO: Dot position should be based on what user is hovering over
function getDotPosition({ rootRect, activePageRect }: { rootRect: RectReadOnly; activePageRect: RectReadOnly }) {
    const rootRectVisible = rootRect.height > 0 || rootRect.width > 0,
        activePageVisible = activePageRect.height > 0 || activePageRect.width > 0;

    if (!rootRectVisible || !activePageVisible) {
        return;
    }

    return {
        left: activePageRect.x - rootRect.x + activePageRect.width / 2,
        top: -10
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
        [rootRef, rootRect] = useMeasure(),
        [activePageRef, activePageRect] = useMeasure(),
        dotPosition = getDotPosition({ rootRect, activePageRect }),
        underlinePosition = useSpring(getUnderlinePosition({ rootRect, activePageRect }));

    return (
        <RootDiv ref={rootRef}>
            {dotPosition && <CircleDiv style={dotPosition} />}
            <animated.div style={underlinePosition} css={underlineDivCss}>
                <ReactSVG src={underlineSvg} />
            </animated.div>
            {pages.map((p, i) => {
                const isActive = p === currentPage,
                    isLast = i === pages.length - 1;
                return (
                    <React.Fragment key={`page-${p}`}>
                        <PageDiv
                            active={isActive}
                            ref={isActive ? activePageRef : undefined}
                            onClick={() => onPageClick(p)}
                        >
                            {p}
                        </PageDiv>
                        {!isLast && <PageSeparator>.</PageSeparator>}
                    </React.Fragment>
                );
            })}
        </RootDiv>
    );
}
