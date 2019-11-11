import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {NavBar} from "./NavBar/navBar";
import {routes} from "./NavBar/routeData";
import {BlueDivider} from "./Dividers/dividers";

import "../styles/global.scss";

const Base = () => (
    <div style={{display: "flex", flexDirection: "row", width: "calc(100% - 4em)", height: "calc(100% - 4em)", padding: "2em"}}>
        <NavBar/>
        <BlueDivider/>
        <Switch>
            {routes.map(route => <Route path={route.urlPattern}><route.component/></Route>)}
        </Switch>
    </div>
);

ReactDOM.render(<BrowserRouter><Base/></BrowserRouter>, document.getElementById('root'));