import { ReactNode } from "react";

export type Props = {
    children: ReactNode | undefined;
};

export type State = {
    hasError: boolean;
    error: Error;
};
