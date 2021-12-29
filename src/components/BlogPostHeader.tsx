import React from 'react';
import styled from '@emotion/styled';
import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    COLOR_PRIMARY,
    FONT_FAMILY_MONO,
    MOBILE_MAX_WIDTH
} from '../styles/global';

const StyledTitle = styled.h1`
    font-weight: 400;
    z-index: 2;
    line-height: 1;
    display: inline-block;
    position: relative;
    color: ${COLOR_PRIMARY};
    max-width: 700px;
    text-shadow: 2px 4px 0 ${COLOR_BG_ACCENT};
    font-size: 45px;
    margin: 0 auto;
    font-style: italic;
    text-align: left;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        font-size: 32px;
    }
`;

const StyledDate = styled.div`
    font-size: 14px;
    color: ${COLOR_ACCENT};
    font-family: ${FONT_FAMILY_MONO};
    margin-top: 10px;
    text-align: left;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        margin-top: 10px;
        text-align: left;
    }
`;

const StyledRoot = styled.div`
    position: relative;
    transition: transform 100ms ease-in-out;
    max-width: 600px;
    text-align: left;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        padding-top: 0;
    }
`;

const BlogPostHeader = ({ title, date }: { title: string; date: string }) => {
    return (
        <StyledRoot>
            <StyledTitle>{title}</StyledTitle>
            <StyledDate>
                <span>{'> '}</span>
                {date}
            </StyledDate>
        </StyledRoot>
    );
};

export default BlogPostHeader;
