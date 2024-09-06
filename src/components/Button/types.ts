import { MouseEventHandler, ReactNode } from "react";
import { RuleSet } from "styled-components";

export type Props = {
    children: ReactNode[] | ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    styles: RuleSet<object>;
};
