import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-grow: 1;
    padding: 30px 0;
`;

export const Heading1 = styled.h1`
    color: #fc692d;
    font: 700 122px "Inter";
`;

export const ErrorMessage = styled.p`
    font: 300 46px "Inter";
`;

export const Suggestion = styled.p`
    color: #b0b0b0;
    font: 500 21px "Inter";
`;
