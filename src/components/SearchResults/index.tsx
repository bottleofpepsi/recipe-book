import React from "react";

import * as S from "./styled";
import { Props } from "./types";

function SearchResults({ children }: Props) {
    return (
        <S.Main>
            <S.Heading2>Results</S.Heading2>
            <S.Results>{children}</S.Results>
        </S.Main>
    );
}

export default SearchResults;
