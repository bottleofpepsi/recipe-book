import React from "react";

import * as S from "./styled";
import { Props } from "./types";

function TextWithIcon({ src, children }: Props) {
    return (
        <S.Container>
            <S.Icon src={src} />
            <span>{children}</span>
        </S.Container>
    );
}

export default TextWithIcon;
