import React from "react";

import * as S from "./styled";
import { Props } from "./types";

function Button({ children, onClick, styles }: Props) {
    return (
        <S.CustomButton
            className="custom-button"
            onClick={onClick}
            $styles={styles}
        >
            {children}
        </S.CustomButton>
    );
}

export default Button;
