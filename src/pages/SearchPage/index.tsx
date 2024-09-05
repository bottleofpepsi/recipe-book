import React, { useEffect, useState } from "react";

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

    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<Recipes>({} as Recipes);

    const paginate = () => {
        const newParams = { ...parameters };
        newParams.nextLink = results.nextLink;
        setParameters(newParams);
    };

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
            })
            .catch((reason) => {
                throw new Error(reason);
            })
            .finally(() => setIsLoading(false));
    }, [parameters]);

    return (
        <>
            <Header isHomePage={true}></Header>
            <S.Main>
                <SearchSection params={parameters} setParams={setParameters} />
                <SearchResults>
                    {results.items?.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
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
            <Footer></Footer>
        </>
    );
}

export default SearchPage;
