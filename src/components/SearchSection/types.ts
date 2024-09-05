import { SearchParameters } from "@/types";

export type Props = {
    params: SearchParameters;
    setParams: React.Dispatch<React.SetStateAction<SearchParameters>>;
};
