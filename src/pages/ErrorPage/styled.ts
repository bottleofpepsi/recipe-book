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

    @media (max-width: 600px) {
        font-size: 40px;
    }
`;

export const ErrorMessage = styled.p`
    text-align: center;
    font: 300 46px "Inter";

    @media (max-width: 600px) {
        font-size: 24px;
    }
`;

export const Suggestion = styled.p`
    padding: 0 10px;
    text-align: center;
    color: #b0b0b0;
    font: 500 21px "Inter";
`;
