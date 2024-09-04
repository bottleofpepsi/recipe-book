import { ParamSetter } from "@/types";

export type Props = {
    setParameter: ParamSetter;
    items: MenuItem[];
    text: string;
};

export type MenuItem = {
    id: number;
    apiParam: string;
    text: string;
};

export type ItemProps = {
    itemDetails: MenuItem;
    onItemClicked: ParamSetter;
};
