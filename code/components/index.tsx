import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {NavBar} from "./NavBar/navBar";
import {routes} from "./NavBar/routeData";

const Base = () => (
    <div>
        <NavBar/>
        <Switch>
            {routes.map(route => <Route path={route.urlPattern}><route.component/></Route>)}
        </Switch>
    </div>
);

ReactDOM.render(<BrowserRouter><Base/></BrowserRouter>, document.getElementById('root'));