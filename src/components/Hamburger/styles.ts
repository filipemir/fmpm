import styled from '@emotion/styled';

import { COLOR_ACCENT } from 'styles/global';

const BAR_WIDTH = 30,
    BAR_HEIGHT = 2,
    SPACE = 8;

export const Root = styled.div`
    .hamburger {
        outline: none;
    }
    .hamburger-box {
        width: ${BAR_WIDTH}px;
        height: 20px;
        outline: none;
    }

    .hamburger,
    .hamburger--spring {
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

        & {
            .hamburger-inner {
                &:before {
                    top: ${SPACE}px;
                }

                &:after {
                    top: ${2 * SPACE}px;
                }
            }
        }
    }
`;
