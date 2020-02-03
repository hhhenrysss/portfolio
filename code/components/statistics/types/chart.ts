export enum ChartType {
    Bubble='bubble_chart',
    Line='show_chart',
    Pie='pie_chart',
    Bar='bar_chart'
}

export interface ChartData {
    id: number;
    name: string;
    first_item: string;
    type: ChartType;
    data: any;
}