import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import * as React from "react";
import {About} from "../about/about";
import {Statistics} from "../statistics/statistics";
import {Projects} from "../projects/projects";
import {Researches} from "../researches/researches";

import '../../styles/top_bav_bar.scss';

export function TopNavigationBar() {
    return (
        <Router>
            <div className={'top-nav-bar'}>
                <nav className={'links-wrapper'}>
                    <ul>
                        <li><NavLink to={"/"} exact activeClassName={'active'}>Statistics</NavLink></li>
                        <li><NavLink to={"/projects"} activeClassName={'active'}>Projects</NavLink></li>
                        <li><NavLink to={"/researches"} activeClassName={'active'}>Researches</NavLink></li>
                    </ul>
                    <ul className={'nav-end'}>
                        <li><NavLink to={"/about"} activeClassName={'active'}>Hi.</NavLink></li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Statistics/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path="/researches">
                        <Researches/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}