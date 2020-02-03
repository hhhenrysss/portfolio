import * as React from "react";
import {StatGeneral} from "./general";
import {StatWeb} from "./web";
import {StatExtra} from "./extra";

export class Statistics extends React.Component<any, {current_active_idx: number}> {
    private children_names: string[];
    constructor(props: any) {
        super(props);
        this.children_names = [StatGeneral.statistics_name, StatWeb.statistics_name, StatExtra.statistics_name];
        this.state = {
            current_active_idx: 0
        }
    }
    update_active_children(idx: number) {
        const prev_state = this.state;
        this.setState({...prev_state, current_active_idx: idx});
    }
    get left_child_info() {
        let idx = this.state.current_active_idx - 1;
        if (idx < 0) {
            idx = this.children_names.length - 1;
        }
        return {name: this.children_names[idx], idx};
    }
    get right_child_info() {
        let idx: number = this.state.current_active_idx + 1;
        if (idx >= this.children_names.length) {
            idx = 0;
        }
        return {name: this.children_names[idx], idx};
    }

    render() {
        const left = this.left_child_info;
        const right = this.right_child_info;
        const callback = (n: number) => this.update_active_children(n);

        switch (this.children_names[this.state.current_active_idx]) {
            case StatGeneral.statistics_name: {
                return <StatGeneral left_info={left} right_info={right} update_idx_callback={callback}/>
            }
            case StatExtra.statistics_name: {
                return <StatExtra left_info={left} right_info={right} update_idx_callback={callback}/>
            }
            case StatWeb.statistics_name: {
                return <StatWeb left_info={left} right_info={right} update_idx_callback={callback}/>
            }
            default: {
                throw new Error("invalid children name");
            }
        }
    }
}