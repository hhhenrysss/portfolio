import {NavLink} from "react-router-dom";
import * as React from "react";
import {createClassNames, resourceFolderPath} from "../utils";
import {routes} from "./routeData";
import style from "../../styles/universal.scss";


export const NavBar = () => (
    <nav style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", maxWidth: "30%"}}>
        <div style={{width: "100%"}}>
            <img
                style={{maxWidth: "80%", maxHeight: "80%", width: "auto", height: "auto", display: "block"}}
                src={resourceFolderPath + `avatar.jpeg`}
                alt={`hhhenrysss' avatar`}
            />
            <h1 className={createClassNames(style.mainTitle)}>hhhenrysss</h1>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
            {routes.map(route =>
                <NavLink
                    style={{marginBottom: "2em"}}
                    className={createClassNames(style.navTitle, style.blackText)}
                    activeClassName={createClassNames(style.blueText)}
                    to={route.urlPattern}>
                    {route.linkName}

                </NavLink>
            )}
        </div>
    </nav>
);