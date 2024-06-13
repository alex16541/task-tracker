export enum AppRoute {
  MAIN = "main",
  PROJECT = "project",
  PROJECTS = "projects",
  SUBPROJECT = "subproject",
  TASK = "task",
  JOURNAL = "journal",
}

export const getRouteMain = () => "/";
export const getRouteProject = (name: string) => `/projects/${name}`;
export const getRouteProjects = () => "/projects";
export const getRouteSubproject = (parent: string, name: string) =>
  `/projects/${parent}/${name}`;
export const getRouteTask = (id: string) => `/task/${id}`;
export const getRouteJournal = () => `/journal`;
