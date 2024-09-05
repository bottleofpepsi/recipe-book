import React from "react";
import { Link } from "react-router-dom";

import logo from "@/assets/logo.svg";

import * as S from "./styled";

type Props = {
    isHomePage: boolean;
};

function Header({ isHomePage }: Props) {
    return (
        <S.Header>
            <S.LogoBanner>
                <img src={logo} width={48} height={48} />
                <S.Title>Modsen Recipe</S.Title>
            </S.LogoBanner>
            {!isHomePage && (
                <Link to="/">
                    <S.HomeLink>Home</S.HomeLink>
                </Link>
            )}
        </S.Header>
    );
}

export default Header;
