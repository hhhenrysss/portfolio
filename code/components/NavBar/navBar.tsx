import {NavLink} from "react-router-dom";
import * as React from "react";
import {resourceFolderPath} from "../utils";
import {routes} from "./routeData";



export const NavBar = () => (
    <nav>
        <div className={`profile-wrapper`}>
            <img src={resourceFolderPath + `avatar.jpeg`} alt={`hhhenrysss' avatar`}/>
            <h1>hhhenrysss</h1>
        </div>
        <div className={`nav-links-wrapper`}>
            {routes.map(route =>
                <NavLink
                    className={navLinkClass}
                    activeClassName={navActiveLinkClass}
                    to={route.urlPattern}>
                    {route.linkName}
                </NavLink>
            )}
        </div>
    </nav>
);