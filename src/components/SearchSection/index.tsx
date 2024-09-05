import { useFormik } from "formik";
import React, { useEffect, useRef } from "react";

import SearchIcon from "@/assets/search-icon.svg";
import { validationSchema } from "@/constants";
import { dietFilters, dishTypeFilters } from "@/constants/search";
import { focusRef, setParameter } from "@/utils";

import DropdownMenu from "../DropdownMenu";
import * as S from "./styled";
import { Props } from "./types";

function SearchSection({ setParams }: Props) {
    const inputRef = useRef(null);

    const formik = useFormik({
        initialValues: {
            query: "",
            dishTypeValues: [],
            dietValues: [],
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setParams({ ...values, nextLink: "" });
        },
    });

    const setDishType = setParameter.bind(formik.values.dishTypeValues);
    const setDiet = setParameter.bind(formik.values.dietValues);

    const isTouched =
        formik.touched.dietValues ||
        formik.touched.dishTypeValues ||
        formik.touched.query;

    useEffect(() => {
        focusRef(inputRef);
    }, [formik.errors]);

    return (
        <S.SearchForm onSubmit={formik.handleSubmit}>
            <S.Heading1>Discover Recipe & Delicious Food</S.Heading1>
            <S.SearchBar>
                <S.SearchField
                    ref={inputRef}
                    name="query"
                    type="search"
                    placeholder="Search For Your Favorite Food"
                    onChange={formik.handleChange}
                />
                <S.SearchButton type="submit">
                    <img src={SearchIcon} width={24} height={24} />
                </S.SearchButton>
            </S.SearchBar>
            {isTouched && formik.errors.query ? (
                <S.ValidatonErrorMsg>{formik.errors.query}</S.ValidatonErrorMsg>
            ) : null}

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
