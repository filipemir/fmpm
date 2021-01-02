import React, { useState, useRef, MutableRefObject, ReactNode } from 'react';
import useMeasure, { RectReadOnly } from 'react-use-measure';
import { ResizeObserver } from '@juggle/resize-observer';
import { useSpring, animated, useTrail } from 'react-spring';
import { Link } from 'gatsby';

import { RootDiv, PageDivWrapper, PageDiv, PageSeparator, underlineDivCss, dotCss, ContactMe } from './styles';
import Underline from 'images/underline.svg';
import Page from 'models/page';
import { PERSONAL_EMAIL } from 'data/personal';

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
    dottedPageRect
}: {
    rootRef?: MutableRefObject<HTMLDivElement | null>;
    dottedPageRect: RectReadOnly;
}) {
    if (!rootRef || !rootRef.current) {
        return { left: 0, opacity: 0 };
    }

    const rootRect = rootRef.current.getBoundingClientRect();

    const { left, width } = dottedPageRect;
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
    const pages = [Page.ABOUT, Page.PROJECTS, Page.EXPERIENCE, Page.CONTACT],
        [skipAnimations, setSkipAnimations] = useState(true),
        [hoveredPage, setHoveredPage] = useState<Page | null>(),
        rootRef = useRef() as MutableRefObject<HTMLDivElement | null>,
        [activePageRef, activePageRect] = useMeasure({
            polyfill: ResizeObserver
        }),
        [hoveredPageRef, hoveredPageRect] = useMeasure({
            polyfill: ResizeObserver
        }),
        underlinePosition = useSpring({
            ...getUnderlinePosition({ rootRef, activePageRect }),
            immediate: skipAnimations
        }),
        dotPosition = useSpring({
            ...getDotPosition({
                rootRef,
                dottedPageRect: hoveredPage ? hoveredPageRect : activePageRect
            }),
            immediate: skipAnimations
        }),
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
                    isHovered = p === hoveredPage,
                    isLast = i === pages.length - 1,
                    path = p === Page.ABOUT ? '/' : `/${p}`,
                    PageLink = ({ children }: { children: ReactNode }) => {
                        if (p === Page.CONTACT) {
                            return (
                                <ContactMe
                                    href={`mailto:${PERSONAL_EMAIL}`}
                                    target={'_blank'}
                                    rel='noopener noreferrer'
                                >
                                    {children}
                                </ContactMe>
                            );
                        }

                        return <Link to={path}>{children}</Link>;
                    };

                return (
                    <animated.span
                        style={{ opacity }}
                        key={`page-${p}`}
                        onMouseEnter={() => {
                            setSkipAnimations(false);
                            setHoveredPage(p);
                        }}
                        onMouseLeave={() => setHoveredPage(undefined)}
                    >
                        <PageDivWrapper ref={isHovered ? hoveredPageRef : undefined}>
                            <PageLink>
                                <PageDiv
                                    active={isActive}
                                    ref={isActive ? activePageRef : undefined}
                                    onClick={() => p !== Page.CONTACT && onPageClick(p)}
                                >
                                    {p}
                                </PageDiv>
                            </PageLink>
                        </PageDivWrapper>
                        {!isLast && <PageSeparator>.</PageSeparator>}
                    </animated.span>
                );
            })}
        </RootDiv>
    );
}
