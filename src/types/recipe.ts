import { ImageInfo } from "./image";
import Ingredient from "./ingredient";

export type Recipe = {
    dishName: string;
    thumbnail: ImageInfo;
    id: string;
};

export type Recipes = {
    items: Recipe[];
    totalCount: number;
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
