import React from "react";

import Bullet from "@/assets/list-marker.svg";
import useScreenWidth from "@/hooks/useScreenWidth";

import * as S from "./styled";
import { Props } from "./types";

function IngredientInfo({ ingredients }: Props) {
    const screenWidth = useScreenWidth();

    const productSection = (
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
    );

    return (
        <>
            <S.BorderWrapper>
                <S.IngredientSection>
                    <S.Heading2>Ingredients</S.Heading2>
                    <S.IngredientList>
                        {ingredients.map((ingr) =>
                            screenWidth <= 620 ? (
                                <S.IngredientWithImage key={ingr.foodId}>
                                    <S.Label>
                                        <img src={Bullet} />
                                        {ingr.text}
                                    </S.Label>
                                    <S.ProductImage src={ingr.image} />
                                </S.IngredientWithImage>
                            ) : (
                                <S.Label key={ingr.foodId}>
                                    <img src={Bullet} />
                                    {ingr.text}
                                </S.Label>
                            )
                        )}
                    </S.IngredientList>
                </S.IngredientSection>
            </S.BorderWrapper>
            {screenWidth > 620 && productSection}
        </>
    );
}

export default IngredientInfo;
