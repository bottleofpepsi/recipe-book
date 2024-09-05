import React from "react";

import Button from "../Button";
import * as S from "./styled";
import { Props } from "./types";

function HomeButton({ handleClick }: Props) {
    return (
        <S.Container>
            <Button onClick={handleClick} styles={S.buttonStyles}>
                Back to homepage
            </Button>
        </S.Container>
    );
}

export default HomeButton;
