import styled, { RuleSet } from "styled-components";

export const CustomButton = styled.button<{ $styles: RuleSet<object> }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #505050;
    border-radius: 25px;
    color: #ffffff;
    width: clamp(150px, 40vw, 250px);
    height: 50px;
    cursor: pointer;

    ${(props) => props.$styles}
`;
