import React from "react";

import * as S from "./styled";
import { Props } from "./types";

function SearchResults({ noResults, children }: Props) {
    return (
        <S.Main>
            <S.Results>
                <S.Heading2>
                    {noResults ? "Found nothing" : "Results"}
                </S.Heading2>
                {children}
            </S.Results>
        </S.Main>
    );
}

export default SearchResults;
