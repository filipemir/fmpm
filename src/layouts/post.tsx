import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    COLOR_PRIMARY,
    FONT_FAMILY_SERIF,
    PADDING_TOP_PAGE
} from 'styles/global';

export const Root = styled.div`
    margin: 0 auto;
    padding-top: ${PADDING_TOP_PAGE}px;
    padding-bottom: ${PADDING_TOP_PAGE}px;
    min-height: 100vh;
    max-width: 75ch;

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
        font-size: 20px;
        line-height: 1.4;
        font-weight: 300;
        color: ${COLOR_PRIMARY};

        letter-spacing: -0.03em;
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
