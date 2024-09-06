import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: min-content;
`;

export const Heading2 = styled.h2`
    font: 400 40px "Inter";
    color: #000000;
    padding-left: 15px;
    border-left: 3px solid #efc81a;
    grid-column: 1 / -1;

    @media (max-width: 700px) {
        padding-left: 10px;
        font-size: 18px;
    }
`;

export const Results = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    /* grid-template-rows: repeat(auto-fit, 1fr); */
    justify-content: center;
    gap: 20px 30px;
    width: clamp(350px, 90vw, 1300px);

    @media (max-width: 700px) {
        grid-template-columns: repeat(auto-fit, 350px);
    }
`;
