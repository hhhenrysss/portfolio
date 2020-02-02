import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import * as React from "react";
import {About} from "../about/about";
import {Statistics} from "../statistics/statistics";
import {Projects} from "../projects/projects";
import {Researches} from "../researches/researches";

export function TopNavigationBar() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to={"/"}>Statistics</Link></li>
                        <li><Link to={"/projects"}>Projects</Link></li>
                        <li><Link to={"/researches"}>Researches</Link></li>
                        <li><Link to={"/about"}>Hi.</Link></li>
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