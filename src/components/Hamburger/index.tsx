import React, { useState, ReactNode } from 'react';
import { Root, PageDiv, PageDivWrapper, ContactMe } from './styles';
import { slide as Menu } from 'react-burger-menu';
import Page from 'models/page';
import Link from 'next/link';
import { PERSONAL_EMAIL } from 'data/personal';

export default function Hamburger({
    currentPage,
    onPageClick
}: {
    currentPage: Page;
    onPageClick: (page: Page) => void;
}) {
    const [open, setOpen] = useState(false),
        pages = [Page.ABOUT, Page.PROJECTS, Page.EXPERIENCE, Page.CONTACT];
    return (
        <Root>
            <Menu
                isOpen={open}
                right={true}
                onStateChange={({ isOpen }) => setOpen(isOpen)}
            >
                {pages.map((page, i) => {
                    const p = pages[i],
                        isActive = p === currentPage,
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

                            return (
                                <Link href={path}>
                                    <a
                                        onClick={() => {
                                            setOpen(false);
                                            onPageClick(page);
                                        }}
                                    >
                                        {children}
                                    </a>
                                </Link>
                            );
                        };

                    return (
                        <PageDivWrapper key={page}>
                            <PageLink>
                                <PageDiv active={isActive}>{p}</PageDiv>
                            </PageLink>
                        </PageDivWrapper>
                    );
                })}
            </Menu>
        </Root>
    );
}
