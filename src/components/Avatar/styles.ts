import styled from '@emotion/styled';
import img from './mtns.jpg';

import { COLOR_BG_ACCENT } from 'styles/global';

export const RootDiv = styled.div`
    height: 190px;
    width: 190px;
    border-radius: 50%;
    background-image: url(${img});
    background-size: contain;
    background-position: center center;
    border: 3px solid ${COLOR_BG_ACCENT};
    box-shadow: 10px 22px 0 ${COLOR_BG_ACCENT};
`;
