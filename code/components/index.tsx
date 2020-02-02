import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import "../styles/global.scss";
import {TopNavigationBar} from "./top_navigation_bar/top_nav_bar";

ReactDOM.render(<BrowserRouter><TopNavigationBar/></BrowserRouter>, document.getElementById('root'));