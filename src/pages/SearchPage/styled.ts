import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-grow: 1;
    padding: clamp(20px, 3%, 40px);
`;

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
