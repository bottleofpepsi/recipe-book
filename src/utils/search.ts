import { SearchParameters } from "@/types/search";

export function processQuery({ query, diet, dishType }: SearchParameters) {
    const { URL, KEY, ID } = getAPIEnvVars();

    return (
        `${URL}?type=public${query && `&q=${query}`}&app_id=${ID}` +
        `&app_key=${KEY}${diet && `&diet=${diet}`}` +
        `${dishType && `&dishType=${dishType}`}`
    );
}

export function getAPIEnvVars() {
    return {
        ID: process.env.API_ID,
        KEY: process.env.API_KEY,
        URL: process.env.API_URL,
    };
}
