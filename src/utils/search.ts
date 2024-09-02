import { SearchParameters } from "@/types/search";

export function processQuery({ query, diet, dishType } : SearchParameters) {
    const ID = process.env.API_ID;
    const KEY = process.env.API_KEY;
    const URL = process.env.API_URL;

    return `${URL}?type=public${query && `&q=${query}`}&app_id=${ID}` + 
           `&app_key=${KEY}${diet && `&diet=${diet}`}` + 
           `${dishType && `&dishType=${dishType}`}`;
}