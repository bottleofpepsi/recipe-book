import React from "react";

import * as S from "./styled";
import { Props } from "./types";

function RecipeCard({ recipe }: Props) {
    const { url } = recipe.thumbnail;

    return (
        <S.Card>
            <S.DishImage
                src={url}
                height={300}
                width={300}
                alt={recipe.dishName}
            />
            <S.Container>
                <S.DishName>{recipe.dishName}</S.DishName>
            </S.Container>
        </S.Card>
    );
}

export default RecipeCard;
