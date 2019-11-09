import * as React from "react";
import * as ReactDOM from "react-dom";

class Base extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props);
    }
}

ReactDOM.render(<Base/>, document.getElementById('root'));