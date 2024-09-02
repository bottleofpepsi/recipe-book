import { Images } from "@/types/image";
import { Recipe, RecipeInfo, Recipes } from "@/types/recipe";
import { ResultItemInfo, Results } from "@/types/search";

function extractId(uri: string) {
    return uri.match(/(?<=recipe_)\w+$/)![0];
}

function getAvailableImageURL({ LARGE, REGULAR, SMALL, THUMBNAIL }: Images) {
    return (
        (LARGE?.url && LARGE) ||
        (REGULAR?.url && REGULAR) ||
        (SMALL?.url && SMALL) ||
        (THUMBNAIL?.url && THUMBNAIL)
    );
}

export function processResults(data: Results) {
    const result = {} as Recipes;

    result.items = data.hits.map(
        (item) =>
            ({
                id: extractId(item.recipe.uri),
                thumbnail: getAvailableImageURL(item.recipe.images),
                dishName: item.recipe.label,
            }) as Recipe
    );
    result.nextLink = data._links.next?.href;
    result.totalCount = data.count;

    return result;
}

export function processInfo(data: ResultItemInfo) {
    const recipe = data.recipe;

    return {
        id: extractId(recipe.uri),
        dishName: recipe.label,
        image: getAvailableImageURL(recipe.images),
        calories: recipe.calories,
        cuisineType: recipe.cuisineType[0],
        mealType: recipe.mealType[0],
        ingredients: recipe.ingredients,
        recipeURL: recipe.url,
    } as RecipeInfo;
}
