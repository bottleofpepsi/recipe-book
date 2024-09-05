import React from "react";

import Bullet from "@/assets/list-marker.svg";

import * as S from "./styled";
import { Props } from "./types";

function IngredientInfo({ ingredients }: Props) {
    return (
        <>
            <S.BorderWrapper>
                <S.IngredientSection>
                    <S.Heading2>Ingredients</S.Heading2>
                    <S.IngredientList>
                        {ingredients.map((ingr) => (
                            <S.Label key={ingr.foodId}>
                                <img src={Bullet} />
                                {ingr.text}
                            </S.Label>
                        ))}
                    </S.IngredientList>
                </S.IngredientSection>
            </S.BorderWrapper>
            <S.ProductsSection>
                <S.Heading2>Products</S.Heading2>
                <S.ProductList>
                    {ingredients.map((ingr) => (
                        <li key={ingr.foodId}>
                            <S.ProductImage
                                src={ingr.image}
                                width={160}
                                height={160}
                            />
                        </li>
                    ))}
                </S.ProductList>
            </S.ProductsSection>
        </>
    );
}

export default IngredientInfo;
