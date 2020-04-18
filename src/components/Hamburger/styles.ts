import styled from '@emotion/styled';

import { COLOR_ACCENT } from 'styles/global';

const BAR_WIDTH = 30,
    BAR_HEIGHT = 2;

export const Root = styled.div`
    .hamburger-box {
        width: ${BAR_WIDTH}px;
        height: 20px;
        outline: none;
    }

    .hamburger,
    .hamburger--spring {
        outline: none;
        padding: 15px 0;

        &,
        &.is-active {
            .hamburger-inner {
                &,
                &:before,
                &:after {
                    background-color: ${COLOR_ACCENT};
                    width: ${BAR_WIDTH}px;
                    height: ${BAR_HEIGHT}px;
                }
            }
        }
    }
`;
