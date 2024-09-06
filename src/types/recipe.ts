import { ImageInfo } from "./image";
import Ingredient from "./ingredient";

export type Recipe = {
    dishName: string;
    thumbnail: ImageInfo;
    id: string;
};

export type Recipes = {
    from: number;
    to: number;
    totalCount: number;
    items: Recipe[];
    nextLink?: string;
};

export interface RecipeInfo extends Omit<Recipe, "thumbnail"> {
    calories: number;
    cuisineType: string;
    mealType: string;
    ingredients: Ingredient[];
    image: ImageInfo;
    recipeURL: string;
}
