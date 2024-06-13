import { MainPage } from "@/pages/MainPage";
import { RouteObject } from "react-router-dom";
import {
  AppRoute,
  getRouteJournal,
  getRouteMain,
  getRouteProject,
  getRouteProjects,
  getRouteSubproject,
  getRouteTask,
} from "@/shared/consts/router";
import { ProjectPage } from "@/pages/ProjectPage";

export const appRoutes: Record<AppRoute, RouteObject> = {
  [AppRoute.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoute.PROJECT]: {
    path: getRouteProject(":name"),
    element: <ProjectPage />,
  },
  [AppRoute.PROJECTS]: {
    path: getRouteProjects(),
    element: <h1>Projects</h1>,
  },
  [AppRoute.SUBPROJECT]: {
    path: getRouteSubproject(":parent", ":name"),
    element: <ProjectPage />,
  },
  [AppRoute.TASK]: {
    path: getRouteTask(":id"),
    element: <h1>Task</h1>,
  },
  [AppRoute.JOURNAL]: {
    path: getRouteJournal(),
    element: <h1>Journal</h1>,
  },
};
