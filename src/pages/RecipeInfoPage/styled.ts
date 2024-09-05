import styled from "styled-components";

export const Recipe = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-grow: 1;
    padding: 30px 120px;
    color: #ffffff;
`;

export const Heading1 = styled.h1`
    font: 500 40px "Playful Despair";
`;

export const RecipeInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex-shrink: 1;
    border-radius: 28px;
    padding: 75px 90px;
    background-color: #27355a;
`;

export const MealType = styled.span`
    color: #fdbd84;
    font: 500 13px "Poppins";
`;

export const DishInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const RecipeLink = styled.a`
    font: 700 24px "Playful Despair";
    color: #ffffff;

    &:hover {
        color: #bbbbbb;
    }
    &:active {
        color: #777777;
    }
`;

export const DishImage = styled.img`
    border-radius: 20px;
`;
