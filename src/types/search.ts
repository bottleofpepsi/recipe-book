import { Images } from "./image";
import Ingredient from "./ingredient";

export type SearchParameters = {
    query: string;
    diet: string;
    dishType: string;
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
    count: number;
    _links: {
        next?: {
            href: string;
        };
    };
    hits: ResultItem[];
};
