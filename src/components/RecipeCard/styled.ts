import styled from "styled-components";

export const Card = styled.article`
    display: flex;
    flex-direction: column;
    width: 300px;
    border-radius: 20px;
    background-color: #cccccc80;
    cursor: pointer;
    overflow: hidden;

    @media (hover: hover) {
        &:hover {
            box-shadow: 0px 0px 10px #a0a0a0;
        }
    }

    @media (hover: none) {
        &:active {
            box-shadow: 0px 0px 10px #a0a0a0;
        }
    }

    @media (max-width: 700px) {
        width: 350px;
        font-size: 18px;
    }
`;

export const DishImage = styled.img`
    width: 300px;
    height: 300px;

    @media (max-width: 700px) {
        width: 350px;
        height: 350px;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    padding: 11px;

    @media (max-width: 700px) {
        height: 70px;
    }
`;

export const DishName = styled.h3`
    font: 700 22px "Inter";
    color: #2e266f;
    text-align: center;

    @media (max-width: 700px) {
        font-size: 18px;
    }
`;
