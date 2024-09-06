import React, { useState } from "react";
import { Link } from "react-router-dom";

import BurgerIcon from "@/assets/burger-icon.svg";
import logo from "@/assets/logo.svg";
import useScreenWidth from "@/hooks/useScreenWidth";

import BurgerMenu from "../BurgerMenu";
import * as S from "./styled";

type Props = {
    isHomePage: boolean;
};

function Header({ isHomePage }: Props) {
    const screenWidth = useScreenWidth();
    const [burgerOpened, setBurgerOpened] = useState(false);

    const toggleMenu = () => {
        document.body.style.overflow = burgerOpened ? "unset" : "hidden";
        setBurgerOpened(!burgerOpened);
    };

    const nav =
        screenWidth > 620 ? (
            <Link to="/">
                <S.HomeLink>Home</S.HomeLink>
            </Link>
        ) : (
            <S.BurgerIcon src={BurgerIcon} onClick={toggleMenu} />
        );

    return (
        <S.Header>
            <S.LogoBanner>
                <img src={logo} width={48} height={48} />
                <S.Title>Modsen Recipe</S.Title>
            </S.LogoBanner>
            {!isHomePage && nav}
            {screenWidth <= 620 && <BurgerMenu visible={burgerOpened} />}
        </S.Header>
    );
}

export default Header;
