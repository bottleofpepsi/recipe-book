import { SearchParameters } from "@/types/search";

export function processQuery({
    query,
    dietValues,
    dishTypeValues,
}: SearchParameters) {
    const { URL, KEY, ID } = getAPIEnvVars();
    const queryParams = [
        ["type", "public"],
        ["app_id", ID as string],
        ["app_key", KEY as string],
    ];

    if (query) queryParams.push(["q", query]);

    queryParams.push(...dietValues.map((diet) => ["diet", diet]));
    queryParams.push(
        ...dishTypeValues.map((dishType) => ["dishType", dishType])
    );

    return `${URL}?${new URLSearchParams(queryParams).toString()}`;
}

export function getAPIEnvVars() {
    return {
        ID: process.env.API_ID,
        KEY: process.env.API_KEY,
        URL: process.env.API_URL,
    };
}

export function setParameter(this: string[], value: string, set: boolean) {
    if (set) {
        this.push(value);
        return;
    }

    this.splice(this.indexOf(value), 1);
}
