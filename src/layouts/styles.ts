import styled from '@emotion/styled';

export const LayoutRoot = styled.div`
    position: relative;
    height: 100%;
    z-index: 0;
`;

export const NavBarWrapper = styled.div`
    position: absolute;
    width: 100%;
    z-index: 2;
`;

export const Column = styled.div`
    margin: 0 auto;
    min-height: 500px;
`;

export const PersonalLinksWrapper = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
`;
