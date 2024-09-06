import styled from "styled-components";

export const Heading2 = styled.h2`
    font: 700 24px "Playful Despair";
`;

export const IngredientSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 10px 15px 0;
    border-radius: 0 20px 20px 0;
    background: #27355a
        linear-gradient(
            90deg,
            rgba(217, 217, 217, 0) 23.93%,
            rgba(217, 217, 217, 0.1) 100%
        );

    @media (max-width: 620px) {
        background: none;
    }
`;

export const BorderWrapper = styled.div`
    padding: 2px 2px 2px 0;
    border-radius: 0 20px 20px 0;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 100%
    );

    @media (max-width: 620px) {
        background: none;
    }
`;

export const IngredientList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;

    @media (max-width: 620px) {
        gap: 30px;
    }
`;

export const Label = styled.li`
    display: flex;
    align-items: center;
    gap: 20px;
    color: #a2a8ba;
    font: 500 16px "Poppins";
`;

export const ProductList = styled.ul`
    padding: 10px 0;
    display: flex;
    gap: 40px;
    list-style: none;
    overflow-x: scroll;
`;

export const ProductImage = styled.img`
    border-radius: 10px;
`;

export const IngredientWithImage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
