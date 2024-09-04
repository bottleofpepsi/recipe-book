import React from "react";

import CaretUp from "@/assets/caret-up.svg";
import useVisible from "@/hooks/useVisible";

import DropdownItem from "./DropdownItem";
import * as S from "./styled";
import { Props } from "./types";

function DropdownMenu({ setParameter, items, text }: Props) {
    const [ref, visible, setVisible] = useVisible<HTMLDivElement>(false);

    const switchVisible = () => setVisible(!visible);

    return (
        <S.DropdownMenu ref={ref}>
            <S.DropdownButton onClick={switchVisible}>
                <S.DropdownText>{text}</S.DropdownText>
                <S.DropdownIcon
                    src={CaretUp}
                    $isUp={visible}
                    width={24}
                    height={24}
                />
            </S.DropdownButton>
            <S.DropdownList $visible={visible}>
                {items.map((item) => (
                    <DropdownItem
                        key={item.id}
                        itemDetails={item}
                        onItemClicked={setParameter}
                    />
                ))}
            </S.DropdownList>
        </S.DropdownMenu>
    );
}

export default DropdownMenu;
