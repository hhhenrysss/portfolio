import style from "../../styles/universal.scss";
import {createClassNames} from "../utils";
import * as React from "react";

export const BlueDivider = () => (
    <div className={createClassNames(style.blueDivider)}/>
);

export const YellowDivider = () => (
    <div className={createClassNames(style.yellowDivider)}/>
);

export const RedDivider = () => (
    <div className={createClassNames(style.redDivider)}/>
);