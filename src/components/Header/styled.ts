import styled, { css } from "styled-components";

const shared = css`
    font: 500 24px "Space Grotesk";
    color: #ffffff;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #27355a;
    padding: 30px 8vw;
    box-shadow: 0px 4px 16.1px 0px #0000001a;
`;

export const LogoBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

export const BurgerIcon = styled.img`
    cursor: pointer;
`;

export const Title = styled.span`
    ${shared}
`;

export const HomeLink = styled.span`
    ${shared}

    &:hover {
        color: #bbbbbb;
    }
    &:active {
        color: #777777;
    }
`;
