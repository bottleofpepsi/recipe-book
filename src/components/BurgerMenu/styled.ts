import styled, { css } from "styled-components";

export const Menu = styled.div<{ $visible: boolean }>`
    position: fixed;
    width: 100vw;
    height: calc(100vh - 108px);
    top: 108px;
    left: 0;
    background-color: #334269;
    transform: translateX(100%);

    transition: transform 400ms;

    ${(props) =>
        props.$visible &&
        css`
            transform: translateX(0%);
        `}
`;

export const MenuBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    width: 100%;
    border-top: 3px solid #1a243d;
    border-bottom: 3px solid #1a243d;
    box-sizing: border-box;
    cursor: pointer;
`;

export const HomeLink = styled.span`
    font: 500 24px "Space Grotesk";
    color: #ffffff;

    ${MenuBar}:hover & {
        color: #bbbbbb;
    }
    ${MenuBar}:active & {
        color: #777777;
    }
`;
