import { css, styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

export const buttonStyles = css`
    background-color: #008055;
    font: 500 14px "Inter";

    &::after {
        position: absolute;
        opacity: 0;
        z-index: -1;
        transition: opacity 0.3s ease-in-out;
        box-shadow: 0px 8px 16px 0px #00805529;
        border-radius: inherit;
        width: inherit;
        height: inherit;
        content: "";
    }

    &:hover::after {
        opacity: 1;
    }
`;
