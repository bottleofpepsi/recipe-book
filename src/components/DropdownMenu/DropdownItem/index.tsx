import React, { useState } from "react";

import CheckMark from "@/assets/check-mark.svg";

import { ItemProps } from "../types";
import * as S from "./styled";

function DropdownItem({ itemDetails, onItemClicked }: ItemProps) {
    const [isSelected, setSelected] = useState(false);

    const handleClick = () => {
        onItemClicked(itemDetails.apiParam, !isSelected);
        setSelected(!isSelected);
    };

    return (
        <S.DropdownItem onClick={handleClick} selected={isSelected}>
            <S.Text>{itemDetails.text}</S.Text>
            {isSelected && <img src={CheckMark} width={16} height={16} />}
        </S.DropdownItem>
    );
}

export default DropdownItem;
