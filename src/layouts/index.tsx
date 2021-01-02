import React, { useState, ReactNode, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Global } from '@emotion/core';
import globalCss from 'styles/global';
import 'styles/global.scss';
import {
    LayoutRoot,
    NavBarWrapper,
    PersonalLinksWrapper,
    Column
} from './styles';
import NavBar from 'components/NavBar';
import Transition from './transition';
import { getPage } from 'utils/location';
import PersonalLinks from 'components/PersonalLinks';
import useMeasure from 'react-use-measure';
import { ResizeObserver } from '@juggle/resize-observer';
import Page from 'models/page';
import useMedia from 'use-media';
import Footer from 'components/Footer';

interface LayoutProps {
    children: ReactNode;
    location: Location;
}

export default function Layout({ children, location }: LayoutProps) {
    const [page, setPage] = useState(getPage(location)),
        [personalLinksVisible, setPersonalLinksVisible] = useState(false),
        [columnRef, columnRect] = useMeasure({ polyfill: ResizeObserver }),
        spring = useSpring({ opacity: personalLinksVisible ? 1 : 0 }),
        onScroll = () => {
            setPersonalLinksVisible(true);
            window.removeEventListener('scroll', onScroll);
        },
        isMobile = useMedia({ maxWidth: '900px' }),
        onPageClick = (page: Page) => {
            setPage(page);
            setPersonalLinksVisible(true);
        };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <LayoutRoot>
            <Global styles={globalCss} />
            <NavBarWrapper>
                <NavBar currentPage={page} onPageClick={onPageClick} />
            </NavBarWrapper>
            <Column ref={columnRef}>
                <Transition location={location}>{children}</Transition>
            </Column>

            {!isMobile && (
                <animated.div style={spring}>
                    <PersonalLinksWrapper
                        style={{ left: columnRect.x + columnRect.width + 30 }}
                    >
                        <PersonalLinks />
                    </PersonalLinksWrapper>
                </animated.div>
            )}
            <Footer />
        </LayoutRoot>
    );
}
