import React, { ChangeEvent, KeyboardEvent } from "react";

import SearchIcon from "@/assets/search-icon.svg";
import { dietFilters, dishTypeFilters } from "@/constants/search";
import { setParameter } from "@/utils";

import DropdownMenu from "../DropdownMenu";
import * as S from "./styled";
import { Props } from "./types";

function SearchSection({ params, setParams }: Props) {
    const newParams = { ...params, nextLink: "" };

    const setDishType = setParameter.bind(null, newParams.dishTypeValues);
    const setDiet = setParameter.bind(null, newParams.dietValues);

    const setNewParams = () => {
        setParams(newParams);
    };

    const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") setNewParams();
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        newParams.query = event.target.value;
    };

    return (
        <S.SearchForm>
            <S.Heading1>Discover Recipe & Delicious Food</S.Heading1>
            <S.SearchBar>
                <S.SearchField
                    type="search"
                    placeholder="Search For Your Favorite Food"
                    onChange={handleChange}
                    onKeyDown={handleEnter}
                />
                <S.SearchButton onClick={setNewParams}>
                    <img src={SearchIcon} width={24} height={24} />
                </S.SearchButton>
            </S.SearchBar>
            <S.FilterPanel>
                <DropdownMenu
                    setParameter={setDishType}
                    items={dishTypeFilters}
                    text="Select by dish type"
                />
                <DropdownMenu
                    setParameter={setDiet}
                    items={dietFilters}
                    text="Select by diet"
                />
            </S.FilterPanel>
        </S.SearchForm>
    );
}

export default SearchSection;
