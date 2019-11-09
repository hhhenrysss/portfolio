import {Aboutme} from "../Aboutme/aboutme";
import {Research} from "../Research/research";
import {Project} from "../Project/project";
import {Misc} from "../Misc/misc";
import {Nomatch} from "../Nomatch/nomatch";

interface RouteData {
    urlPattern: string;
    component: any;
    linkName: string;
}

export const routes: RouteData[] = [
    {urlPattern: `/`, component: Aboutme, linkName: `About me`},
    {urlPattern: `/research`, component: Research, linkName: `Researches`},
    {urlPattern: `/projects`, component: Project, linkName: `Projects`},
    {urlPattern: `/misc`, component: Misc, linkName: `Miscellaneous`},
    {urlPattern: `*`, component: Nomatch, linkName: ``}
];