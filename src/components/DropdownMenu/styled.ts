import styled from "styled-components";

export const DropdownMenu = styled.div`
    position: relative;
    z-index: 1;
    cursor: pointer;
    font: 400 16px "Roboto";
    border-radius: 10px;
    background-color: #ffffff;
    width: 320px;

    @media (max-width: 700px) {
        width: clamp(300px, 70vw, 700px);
    }
`;

export const DropdownButton = styled.div`
    display: flex;
    align-items: center;
    z-index: 1;
    padding: 10px 15px;
    /* height: 48px; */
    border-bottom: 1px solid #f17900;
    border-radius: 28px;
`;

export const DropdownText = styled.span`
    flex-grow: 1;
    font: 400 16px "Roboto";
    color: #737373;
`;

export const DropdownList = styled.ul<{ $visible: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 2;
    position: absolute;
    top: 60px;
    box-sizing: border-box;
    width: inherit;
    height: 190px;
    padding: 7px 7px 7px 4px;
    border-radius: 20px;
    border: 1px solid #f17900;
    margin: 0;
    background-color: #ffffff;
    list-style: none;
    overflow-y: scroll;

    ${(props) => !props.$visible && `display: none`}
`;

export const DropdownIcon = styled.img<{ $isUp: boolean }>`
    transform: ${(props) => (props.$isUp ? "none" : "rotate(180deg)")};
    transition: transform 300ms ease-in-out;
`;
