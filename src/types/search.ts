import { Images } from "./image";
import Ingredient from "./ingredient";

export type SearchParameters = {
    query: string;
    dietValues: string[];
    dishTypeValues: string[];
    nextLink?: string;
};

export type ResultItem = {
    recipe: {
        uri: string;
        label: string;
        images: Images;
    };
};

export type ResultItemInfo = ResultItem & {
    recipe: {
        url: string;
        calories: number;
        mealType: string[];
        cuisineType: string[];
        ingredients: Ingredient[];
    };
};

export type Results = {
    from: number;
    to: number;
    count: number;
    _links: {
        next?: {
            href: string;
        };
    };
    hits: ResultItem[];
};

export type ParamSetter = (arg1: string, arg2: boolean) => void;
