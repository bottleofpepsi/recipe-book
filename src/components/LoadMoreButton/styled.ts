import { css, styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

export const buttonStyles = css`
    background-color: #27355a;
    font: 400 16px "Roboto";

    &::after {
        position: absolute;
        opacity: 0;
        z-index: -1;
        transition: opacity 0.3s ease-in-out;
        box-shadow: 0px 4px 20px 0px #686de080;
        border-radius: inherit;
        width: 250px;
        height: 50px;
        content: "";
    }

    &:hover::after {
        opacity: 1;
    }
`;
