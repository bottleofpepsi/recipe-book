import styled from "styled-components";

export const DropdownMenu = styled.div`
    position: relative;
    z-index: 1;
    cursor: pointer;
    font: 400 16px "Roboto";
    border-radius: 10px;
    background-color: #ffffff;
    width: 320px;
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
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 5px;
    top: 60px;
    z-index: 2;
    margin: 0;
    border-radius: 20px;
    background-color: #ffffff;
    padding: 7px 7px 7px 4px;
    width: 310px;
    height: 160px;
    list-style: none;
    overflow-y: scroll;
    border: 1px solid #f17900;

    ${(props) => !props.$visible && `display: none`}
`;

export const DropdownIcon = styled.img<{ $isUp: boolean }>`
    transform: ${(props) => (props.$isUp ? "none" : "rotate(180deg)")};
    transition: transform 300ms ease-in-out;
`;
