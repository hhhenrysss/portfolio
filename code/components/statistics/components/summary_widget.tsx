import {StatsWidgetProps} from "../types/props";
import * as React from "react";

export class SummaryWidget extends React.PureComponent<StatsWidgetProps>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className={'stats_summary_widget'}>
                <h4 className={'widget_value'}>{this.props.value}</h4>
                <div className={'widget_info_wrapper'}>
                    <h5 className={'widget_name'}>{this.props.name}</h5>
                    <i className="material-icons widget_icon" onClick={() => this.props.click_callback(this.props.id)}>{this.props.type}</i>
                </div>
            </div>
        );
    }
}