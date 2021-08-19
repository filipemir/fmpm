import React from 'react';

import { LeftDiv, RightDiv, RootDiv } from './styles';
import NavHorizontal from 'components/NavHorizontal';
import FmpmLogo from 'components/FmpmLogo';
import Page from 'models/page';
import Link from 'next/link';
import useMedia from 'use-media';
import Hamburger from 'components/Hamburger';

export default function NavBar({
    currentPage,
    onPageClick
}: {
    currentPage: Page;
    onPageClick: (page: Page) => void;
}) {
    const isMobile = useMedia({ maxWidth: '900px' });
    return (
        <>
            <RootDiv>
                <LeftDiv>
                    <Link href={'/'} >
                        <a onClick={() => onPageClick(Page.ABOUT)}><FmpmLogo /></a>
                    </Link>
                </LeftDiv>
                <RightDiv>
                    {!isMobile && (
                        <NavHorizontal
                            currentPage={currentPage}
                            onPageClick={onPageClick}
                        />
                    )}
                </RightDiv>
            </RootDiv>
            {isMobile && (
                <Hamburger
                    currentPage={currentPage}
                    onPageClick={onPageClick}
                />
            )}
        </>
    );
}
