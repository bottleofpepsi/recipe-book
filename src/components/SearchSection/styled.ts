import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media (max-width: 700px) {
        padding-top: 30px;
    }
`;

export const Heading1 = styled.h1`
    text-align: center;
    font: 400 76px "Inter";
    color: #2e266f;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const FilterPanel = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;

    @media (max-width: 700px) {
        flex-direction: column-reverse;
    }
`;

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    transition: ease 0.5s;
    background-color: #ffffff;
    border: 1px solid #f17900;
    border-radius: 48px;
    width: clamp(300px, 70vw, 1200px);
    padding: 12px 16px 12px 32px;
    overflow: hidden;

    &:focus-within {
        box-shadow: 0 0 5px #f1790080;
    }

    @media (max-width: 700px) {
        padding: 6px 12px 6px 24px;
    }
`;

export const SearchField = styled.input`
    flex-grow: 1;
    border: none;
    height: 30px;
    font: 500 24px "Inter";

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #00000038;
    }

    @media (max-width: 700px) {
        font-size: 14px;
    }
`;

export const SearchButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #ffffff;
    aspect-ratio: 1/1;
    width: 40px;

    &:hover {
        color: #808080;
    }

    &:focus {
        outline: none;
    }
`;

export const ValidatonErrorMsg = styled.span`
    text-align: center;
    color: #b00020;
    font: 400 14px "Inter";
`;
