import React, { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    COLOR_PRIMARY,
    COLOR_QUATERNARY,
    FONT_FAMILY_SERIF,
    PADDING_TOP_PAGE
} from 'styles/global';

const baseTextStyles = css`
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
`;

const baseHeaderStyles = css`
    ${baseTextStyles};
    max-width: 620px;
    font-weight: 400;
    z-index: 2;
    text-shadow: 1px 2px 0 ${COLOR_BG_ACCENT};
    font-style: italic;
    line-height: 1;
`;

const h1 = styled.h1`
    ${baseHeaderStyles};
    color: ${COLOR_ACCENT};
    max-width: 700px;
    text-shadow: 2px 4px 0 ${COLOR_BG_ACCENT};
    font-size: 45px;
    margin: 50px auto 40px auto;
`;

const h2 = styled.h2`
    ${baseHeaderStyles};
    font-size: 30px;
`;

const h3 = styled.h3`
    ${baseHeaderStyles};
    font-size: 24px;
`;

const h4 = styled.h3`
    ${baseHeaderStyles};
    font-size: 22px;
`;

const h5 = styled.h3`
    ${baseHeaderStyles};
    font-size: 20px;
`;

const p = styled.p`
    ${baseTextStyles};
`;

const li = styled.li`
    ${baseTextStyles};
`;

const ol = styled.ol`
    ${baseTextStyles};
`;

const ul = styled.ul`
    ${baseTextStyles};
`;

const strong = styled.strong`
    ${baseTextStyles};
    font-weight: 500;
`;

const code = styled.code`
    background-color: ${COLOR_QUATERNARY};
    color: ${COLOR_ACCENT};
    border-radius: 6px;
    padding-left: 0.3ch;
    padding-right: 0.3ch;
    font-weight: 400;
`;

export const Root = styled.main`
    font-family: ${FONT_FAMILY_SERIF};
    color: ${COLOR_PRIMARY};
    letter-spacing: -0.02em;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 300;
    margin: 0 auto;
    padding: ${PADDING_TOP_PAGE}px 10px;
    min-height: 100vh;
    max-width: 90ch;

    .gatsby-highlight {
        box-shadow: -10px 10px ${COLOR_QUATERNARY};
        border-radius: 6px;
        max-width: 70ch;
    }

    > div {
        margin: 1em auto;
    }
`;

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <Root>
            <MDXProvider
                components={{
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    p,
                    li,
                    ol,
                    ul,
                    strong,
                    code
                }}
            >
                {children}
            </MDXProvider>
        </Root>
    );
}
