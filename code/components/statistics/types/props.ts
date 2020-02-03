import {ChartType} from "./chart";

export interface StatsProps {
    left_info: {
        name: string,
        idx: number
    };
    right_info: {
        name: string,
        idx: number
    };
    update_idx_callback(idx: number): void;
}

export interface StatsWidgetProps {
    id: number
    name: string;
    value: string;
    type: ChartType;
    click_callback(id: number): void;
}