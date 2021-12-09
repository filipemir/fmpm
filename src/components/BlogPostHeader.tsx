import React from 'react';
import styled from '@emotion/styled';
import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    COLOR_PRIMARY,
    FONT_FAMILY_MONO,
    MOBILE_MAX_WIDTH
} from '../styles/global';
import { SlashDiv } from './ProjectRow/common/styles';
import Underline from '../images/underline.svg';

const StyledTitle = styled.h1`
    font-weight: 400;
    z-index: 2;
    text-shadow: 1px 2px 0 ${COLOR_BG_ACCENT};
    line-height: 1;
    display: inline-block;
    position: relative;
    color: ${COLOR_PRIMARY};
    max-width: 700px;
    text-shadow: 2px 4px 0 ${COLOR_BG_ACCENT};
    font-size: 45px;
    margin: 0 auto;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        font-size: 32px;
    }
`;

const StyledDate = styled.div`
    font-size: 14px;
    color: ${COLOR_ACCENT};
    font-family: ${FONT_FAMILY_MONO};
    margin-top: 20px;
    text-align: center;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        margin-top: 10px;
    }
`;

const StyledRoot = styled.div`
    padding: 30px 0 5px 0;
    position: relative;
    transition: transform 100ms ease-in-out;
    max-width: 700px;
    text-align: center;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        padding-top: 0;
    }
`;

const BlogPostHeader = ({ title, date }: { title: string; date: string }) => {
    return (
        <StyledRoot>
            <StyledTitle>
                {title}
                <SlashDiv>
                    <Underline />
                </SlashDiv>
            </StyledTitle>
            <StyledDate>{date}</StyledDate>
        </StyledRoot>
    );
};

export default BlogPostHeader;
