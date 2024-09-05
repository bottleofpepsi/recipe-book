import styled from "styled-components";

export const Recipe = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-grow: 1;
    padding: 50px 20px;
    color: #ffffff;

    @media (max-width: 1030px) {
        flex-direction: column-reverse;
    }
`;

export const Heading1 = styled.h1`
    font: 500 40px "Playful Despair";

    @media (max-width: 620px) {
        font-size: 30px;
    }
`;

export const RecipeInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex-shrink: 1;
    width: clamp(400px, 40%, 700px);
    padding: 75px 90px;
    border-radius: 28px;
    background-color: #27355a;

    @media (max-width: 620px) {
        padding: 30px 20px 50px 20px;
        width: clamp(320px, 40%, 620px);
    }
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
    width: fit-content;

    &:hover {
        color: #bbbbbb;
    }
    &:active {
        color: #777777;
    }
`;

export const DishImage = styled.img`
    position: sticky;
    top: calc(50vh - 200px);
    box-shadow: 0px 0 15px #00000070;
    border-radius: 20px;

    @media (max-width: 1030px) {
        position: static;
        top: auto;
    }

    @media (max-width: 620px) {
        width: 350px;
        height: 350px;
    }
`;

export const ImageWrapper = styled.div`
    @media (min-width: 1030px) {
        align-self: stretch;
    }
`;
