import styled from "styled-components";

export const Text = styled.span`
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: 30px;

    transition: font-weight 200ms ease;
`;

export const DropdownItem = styled.li<{ selected?: boolean }>`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 8px;
    color: #484848;
    font: 400 16px "Roboto";
    outline: none;

    transition:
        background-color 200ms ease-in-out,
        outline 100ms ease-in;

    &:focus,
    &:active,
    &:hover {
        outline: solid 0px #bb00ff00;
        background-color: #ecbaff;
    }

    ${(props) =>
        props.selected &&
        `
        outline: solid 2px #BB00FF;
        background-color: #ebb3ff;
        font-weight: 500;
    `}
`;
