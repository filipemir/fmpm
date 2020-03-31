import React from 'react';

import { RootDiv, LeftDiv, RightDiv } from './styles';
import NavHorizontal from 'components/NavHorizontal';
import FmpmLogo from 'components/FmpmLogo';
import Page from 'models/page';

export default function NavBar({ currentPage, onPageClick }: { currentPage: Page; onPageClick: (page: Page) => void }) {
    return (
        <RootDiv>
            <LeftDiv>
                <FmpmLogo />
            </LeftDiv>
            <RightDiv>
                <NavHorizontal currentPage={currentPage} onPageClick={onPageClick} />
            </RightDiv>
        </RootDiv>
    );
}
