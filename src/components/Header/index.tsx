import React from "react";

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
            {!isHomePage && <S.HomeLink href="#">Home</S.HomeLink>}
        </S.Header>
    );
}

export default Header;
