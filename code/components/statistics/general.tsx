import * as React from "react";
import {StatsProps} from "./types/props";
import {ChartData, ChartType} from "./types/chart";
import {SummaryWidget} from "./components/summary_widget";

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
    get active_chart_idx() {
        return this.state.active_chart_idx;
    }
    set active_chart_idx(idx: number) {
        const prev_state = this.state;
        this.setState({...prev_state, active_chart_idx: idx});
    }

    get widgets() {
        return (
            <div className={'chart_list'}>
                {
                    charts.map(chart_item => {
                        return <SummaryWidget
                            key={chart_item.id}
                            id={chart_item.id}
                            name={chart_item.name}
                            value={chart_item.first_item}
                            type={chart_item.type}
                            click_callback={i => this.active_chart_idx = i}
                        />
                    })
                }
            </div>
        );
    }
    get headers() {
        return (
            <div>
                <h1>{StatGeneral.statistics_name}</h1>
                <h2>{StatGeneral.description}</h2>
            </div>
        );
    }
    get animation() {
        return <div>Animation here</div>
    }
    get navigation() {
        return (
            <div>
                <div onClick={() => this.props.update_idx_callback(this.props.left_info.idx)}>{this.props.left_info.name}</div>
                <div onClick={() => this.props.update_idx_callback(this.props.right_info.idx)}>{this.props.right_info.name}</div>
            </div>
        );
    }
    get main_page() {
        return (
            <article>
                <div>
                    {this.headers}
                    {this.animation}
                </div>
                {this.widgets}
                {this.navigation}
            </article>
        );
    }
    get chart_page() {
        // todo
        return <h1>Hello</h1>;
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        if (this.active_chart_idx >= 0) {
            return this.chart_page;
        } else {
            return this.main_page;
        }
    }
}