import { SearchParameters } from "@/types/search";
import { processInfo, processResults } from "@/utils/recipe";
import { getAPIEnvVars, processQuery } from "@/utils/search";

export async function fetchRecipesByQuery(params: SearchParameters) {
    const url = params.nextLink || processQuery(params);

    const response = await fetch(url);
    const json = await response.json();

    return processResults(json);
}

export async function fetchRecipeByID(id: string) {
    const { URL: API_URL, KEY, ID } = getAPIEnvVars();
    const url = `${API_URL}/${id}?type=public&app_id=${ID}&app_key=${KEY}`;

    const response = await fetch(url);
    const json = await response.json();

    return processInfo(json);
}
