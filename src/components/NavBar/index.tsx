import React from 'react';

import { LeftDiv, RightDiv, RootDiv } from './styles';
import NavHorizontal from 'components/NavHorizontal';
import FmpmLogo from 'components/FmpmLogo';
import Page from 'models/page';
import { Link } from 'gatsby';

export default function NavBar({ currentPage, onPageClick }: { currentPage: Page; onPageClick: (page: Page) => void }) {
    return (
        <RootDiv>
            <LeftDiv>
                <Link to={'/'} onClick={() => onPageClick(Page.ABOUT)}>
                    <FmpmLogo />
                </Link>
            </LeftDiv>
            <RightDiv>
                <NavHorizontal currentPage={currentPage} onPageClick={onPageClick} />
            </RightDiv>
        </RootDiv>
    );
}
