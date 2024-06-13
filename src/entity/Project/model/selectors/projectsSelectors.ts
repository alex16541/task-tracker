import { StateSchema } from "@/app/providers/store";

export const selectProjects = (state: StateSchema) => state.projects;
export const selectProjectByName = (name?: string) => (state: StateSchema) =>
  name ? state.projects.data.find((p) => p.name === name) : undefined;
export const selectProjectsData = (state: StateSchema) => state.projects.data;
