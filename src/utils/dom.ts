import { MutableRefObject } from "react";

export function focusRef(ref: MutableRefObject<HTMLElement | null>) {
    ref?.current?.focus();
}
