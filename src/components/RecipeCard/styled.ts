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
`;

export const DishImage = styled.img``;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    padding: 11px;
`;

export const DishName = styled.h3`
    font: 700 22px "Inter";
    color: #2e266f;
    text-align: center;
`;
