import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { fetchRecipeByID } from "@/api";
import CaloriesIcon from "@/assets/calories.svg";
import CuisineIcon from "@/assets/cuisine-type.svg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IngredientInfo from "@/components/IngredientInfo";
import LoadingIndicator from "@/components/LoadingIndicator";
import TextWithIcon from "@/components/TextWithIcon";
import { RecipeInfo } from "@/types";
import { capitalize } from "@/utils";

import * as S from "./styled";

function RecipeInfoPage() {
    const { id } = useParams();
    const [recipeInfo, setRecipeInfo] = useState({} as RecipeInfo);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const navigate = useNavigate();

    if (hasError) throw new Error("Error");

    useEffect(() => {
        fetchRecipeByID(id!)
            .then((recipe) => {
                setRecipeInfo(recipe);
                setIsLoaded(true);
            })
            .catch(() => {
                navigate("/error");
                setHasError(true);
            });
    }, []);

    return (
        <>
            <Header isHomePage={false} />
            <S.Recipe>
                {isLoaded ? (
                    <>
                        <S.RecipeInfo>
                            <header>
                                <S.MealType>
                                    Meal type – {recipeInfo.mealType}
                                </S.MealType>
                                <S.Heading1>{recipeInfo.dishName}</S.Heading1>
                            </header>
                            <S.DishInfo>
                                <TextWithIcon
                                    src={CaloriesIcon}
                                >{`${recipeInfo.calories.toFixed(0)} calories`}</TextWithIcon>
                                <TextWithIcon
                                    src={CuisineIcon}
                                >{`Cuisine Type – ${capitalize(recipeInfo.cuisineType)}`}</TextWithIcon>
                            </S.DishInfo>
                            <IngredientInfo
                                ingredients={recipeInfo.ingredients}
                            />
                            <S.RecipeLink href={recipeInfo.recipeURL}>
                                Recipe link
                            </S.RecipeLink>
                        </S.RecipeInfo>
                        <S.DishImage
                            src={recipeInfo.image.url}
                            height={400}
                            width={400}
                        />
                    </>
                ) : (
                    <LoadingIndicator size={400} />
                )}
            </S.Recipe>
            <Footer />
        </>
    );
}

export default RecipeInfoPage;
