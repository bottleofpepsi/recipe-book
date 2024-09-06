import React from "react";

import Indicator from "@/assets/loader.svg";

import { Props } from "./types";

function LoadingIndicator({ size }: Props) {
    return <img src={Indicator} width={size} height={size} />;
}

export default LoadingIndicator;
