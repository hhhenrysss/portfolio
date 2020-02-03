import * as React from "react";
import {StatsProps} from "./types/props";
import {ChartData, ChartType} from "./types/chart";

const charts: ChartData[] = [
    {id: 0, name: 'Most used programming language', first_item: 'JavaScript', data: null, type: ChartType.Bubble},
    {id: 1, name: 'Most recently learned programming language', first_item: 'Rust', data: null, type: ChartType.Line},
    {id: 2, name: 'Most common interaction mechanism', first_item: 'GUI', data: null, type: ChartType.Bubble},
    {id: 3, name: 'Most active non-class projects', first_item: 'DiskUtils', data: null, type: ChartType.Bubble},
];

export class StatGeneral extends React.Component<StatsProps, {active_chart_idx: number}> {
    static statistics_name = "Programming in General";
    static description = "Reflection as a developer";
    constructor(props: StatsProps) {
        super(props);
        this.state = {
            active_chart_idx: -1
        };
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return super.render();
    }
}