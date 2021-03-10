import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    COLOR_PRIMARY,
    COLOR_QUATERNARY,
    FONT_FAMILY_SERIF,
    PADDING_TOP_PAGE
} from 'styles/global';

export const Root = styled.main`
    margin: 0 auto;
    padding: ${PADDING_TOP_PAGE}px 10px;
    min-height: 100vh;
    max-width: 90ch;

    .gatsby-highlight {
        box-shadow: -10px 10px ${COLOR_QUATERNARY};
        border-radius: 6px;
    }

    h1 {
        font-family: ${FONT_FAMILY_SERIF};
        font-size: 55px;
        color: ${COLOR_ACCENT};
        font-weight: 400;
        z-index: 2;
        text-shadow: 2px 4px 0 ${COLOR_BG_ACCENT};

        font-style: italic;
        margin: 50px 0 40px 0;

        letter-spacing: -0.03em;
        line-height: 1;
    }

    p,
    li,
    ol {
        font-family: ${FONT_FAMILY_SERIF};
        font-size: 19px;
        line-height: 1.5;
        font-weight: 300;
        color: ${COLOR_PRIMARY};
        letter-spacing: -0.03em;
    }

    > div {
        margin: 1em auto;
    }

    p,
    li,
    ol,
    h1 {
        max-width: 60ch;
        margin-right: auto;
        margin-left: auto;
    }

    strong {
        font-weight: 600;
    }
`;

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return <Root>{children}</Root>;
}
