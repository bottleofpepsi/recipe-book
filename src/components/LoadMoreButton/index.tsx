import React from "react";

import Button from "../Button";
import * as S from "./styled";
import { Props } from "./types";

function LoadMoreButton({ handleClick }: Props) {
    return (
        <S.Container>
            <Button onClick={handleClick} styles={S.buttonStyles}>
                Show More
            </Button>
        </S.Container>
    );
}

export default LoadMoreButton;
