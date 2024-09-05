import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { fetchRecipesByQuery } from "@/api";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingIndicator from "@/components/LoadingIndicator";
import LoadMoreButton from "@/components/LoadMoreButton";
import RecipeCard from "@/components/RecipeCard";
import SearchResults from "@/components/SearchResults";
import SearchSection from "@/components/SearchSection";
import { Recipes, SearchParameters } from "@/types";

import * as S from "./styled";

const initialParameters: SearchParameters = {
    query: "pancakes",
    dietValues: [],
    dishTypeValues: [],
};

function SearchPage() {
    const [parameters, setParameters] = useState(initialParameters);

    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState<Recipes>({} as Recipes);
    const [hasError, setHasError] = useState(false);

    const navigate = useNavigate();

    const paginate = () => {
        const newParams = { ...parameters };
        newParams.nextLink = results.nextLink;
        setParameters(newParams);
    };

    if (hasError) throw new Error("Error");

    useEffect(() => {
        setIsLoading(true);
        if (!parameters.nextLink) setResults({} as Recipes);
        fetchRecipesByQuery(parameters)
            .then((newResults) => {
                const newItems =
                    newResults.from === 1
                        ? newResults.items
                        : [...results.items, ...newResults.items];
                setResults({ ...newResults, items: newItems });
                setIsLoading(false);
            })
            .catch(() => {
                setHasError(true);
                navigate("/error");
            });
    }, [parameters]);

    return (
        <>
            <Header isHomePage={true}></Header>
            <S.Main>
                <SearchSection setParams={setParameters} />
                <SearchResults>
                    {results.items?.map((recipe) => (
                        <Link key={recipe.id} to={`/${recipe.id}`}>
                            <RecipeCard recipe={recipe} />
                        </Link>
                    ))}
                </SearchResults>
                {isLoading && (
                    <S.LoaderContainer>
                        <LoadingIndicator size={150} />
                    </S.LoaderContainer>
                )}
                {!isLoading && results.nextLink && (
                    <LoadMoreButton handleClick={paginate} />
                )}
            </S.Main>
            <Footer />
        </>
    );
}

export default SearchPage;
