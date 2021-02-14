import React from 'react';
import Helmet from 'components/Helmet';
import styled from '@emotion/styled';
import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    FONT_FAMILY_SERIF,
    PADDING_TOP_PAGE
} from 'styles/global';
import SHAME from 'images/shame.gif';
import Emoji from 'a11y-react-emoji';
import Underline from 'images/underline.svg';
import { Link } from 'gatsby';

const MOBILE_THRESHOLD = '800px';

const StyledRoot = styled.div`
    margin: 0 auto;
    padding-top: ${PADDING_TOP_PAGE}px;
    padding-bottom: ${PADDING_TOP_PAGE}px;
    text-align: center;
    min-height: calc(100vh - 300px);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledHeaderContent = styled.span`
    text-shadow: 2px 4px ${COLOR_BG_ACCENT};
    z-index: 0;
    position: relative;
    font-weight: 400;
`;

const StyledHeaderText = styled.span`
    font-family: ${FONT_FAMILY_SERIF};
    margin: 0 0.2em;
    color: ${COLOR_ACCENT};
    font-size: 50px;

    @media (max-width: ${MOBILE_THRESHOLD}) {
        font-size: 30px;
    }
`;

const SlashDiv = styled.div`
    position: absolute;
    height: 0.7em;
    z-index: -1;
    fill: ${COLOR_BG_ACCENT};
    top: 50%;
    left: 50%;
    width: 110%;
    transform: translate(-50%, -50%);

    div {
        height: 100%;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: minmax(200px, 600px) 350px;
    grid-column-gap: 50px;
    margin: 20px auto;

    @media (max-width: ${MOBILE_THRESHOLD}) {
        margin: 0;
        grid-template-columns: 1fr;
    }
`;

const StyledP = styled.p`
    font-weight: 400;
    font-family: ${FONT_FAMILY_SERIF};
    font-size: 20px;
    line-height: 1.2;
    text-align: start;

    @media (max-width: ${MOBILE_THRESHOLD}) {
        text-align: center;
        font-size: 18px;
`;

const StyledShameImg = styled.img`
    margin: 0 auto;
    width: 100%;
`;

export default function FourOhFourPage() {
    return (
        <StyledRoot>
            <Helmet />
            <h1>
                <StyledHeaderContent>
                    <Emoji symbol={'☠️'} />
                    <StyledHeaderText>404!</StyledHeaderText>
                    <Emoji symbol={'🚨️'} />
                    <SlashDiv>
                        <Underline />
                    </SlashDiv>
                </StyledHeaderContent>
            </h1>
            <Grid>
                <StyledShameImg src={SHAME} alt={"That's a shame"} />
                <div>
                    <StyledP>
                        Well, that <i>is</i> a <span>shame</span>.
                    </StyledP>
                    <StyledP>
                        The page you requested does not exist. At least, not yet
                        or not here.
                    </StyledP>
                    <StyledP>
                        <Link to={'/'}>Head back!</Link>
                    </StyledP>
                </div>
            </Grid>
        </StyledRoot>
    );
}
