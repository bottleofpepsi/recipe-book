import styled, { RuleSet } from "styled-components";

export const CustomButton = styled.button<{ $styles: RuleSet<object> }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #505050;
    border-radius: 25px;
    color: #ffffff;
    width: 250px;
    height: 50px;
    cursor: pointer;

    ${(props) => props.$styles}

    @media (max-width: 600px) {
        width: 150px;
    }
`;
