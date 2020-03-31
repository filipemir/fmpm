import React from 'react';
import { ReactSVG } from 'react-svg';
import useMeasure, { RectReadOnly } from 'react-use-measure';

import { RootDiv, PageDiv, UnderlineDiv, PageSeparator, CircleDiv } from './styles';
import underline from './underline.svg';
import Page from 'models/page';

function getUnderlinePosition({ rootRect, activePageRect }: { rootRect: RectReadOnly; activePageRect: RectReadOnly }) {
    const rootRectVisible = rootRect.height > 0 || rootRect.width > 0,
        activePageVisible = activePageRect.height > 0 || activePageRect.width > 0;

    if (!rootRectVisible || !activePageVisible) {
        return;
    }

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
        top: '-10px'
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
        underlinePosition = getUnderlinePosition({ rootRect, activePageRect }),
        dotPosition = getDotPosition({ rootRect, activePageRect });

    return (
        <RootDiv ref={rootRef}>
            {dotPosition && <CircleDiv style={dotPosition} />}
            {underlinePosition && (
                <UnderlineDiv style={underlinePosition}>
                    <ReactSVG src={underline} />
                </UnderlineDiv>
            )}
            {pages.map((p, i) => {
                const isActive = p === currentPage,
                    isLast = i === pages.length - 1;
                return (
                    <>
                        <PageDiv
                            active={isActive}
                            ref={isActive ? activePageRef : undefined}
                            key={`page-${p}`}
                            onClick={() => onPageClick(p)}
                        >
                            {p}
                        </PageDiv>
                        {!isLast && <PageSeparator>.</PageSeparator>}
                    </>
                );
            })}
        </RootDiv>
    );
}
