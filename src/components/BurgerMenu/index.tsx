import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";
import { Props } from "./types";

function BurgerMenu({ visible }: Props) {
    const navigator = useNavigate();

    const handleClick = () => {
        document.body.style.overflow = "unset";
        navigator("/");
    };

    return (
        <S.Menu $visible={visible}>
            <S.MenuBar onClick={handleClick}>
                <S.HomeLink>Home</S.HomeLink>
            </S.MenuBar>
        </S.Menu>
    );
}

export default BurgerMenu;
