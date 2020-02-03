import * as React from "react";
import {StatsProps} from "./types/props";

export class StatExtra extends React.Component<StatsProps, any> {
    static statistics_name = "Open Source";
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return super.render();
    }
}