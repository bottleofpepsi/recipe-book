import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 60px;
`;

export const Heading2 = styled.h2`
    font: 400 40px "Inter";
    color: #000000;
    padding-left: 15px;
    border-left: 3px solid #efc81a;
`;

export const Results = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: space-between;
    gap: 20px 30px;
    width: auto;
`;
