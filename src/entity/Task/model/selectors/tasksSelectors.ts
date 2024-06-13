import { StateSchema } from "@/app/providers/store";

export const selectTask = (id: string) => (state: StateSchema) =>
  state.tasks.data.find((task) => task.id === id) ?? null;

export const selectTasks = (state: StateSchema) => state.tasks.data;
export const selectTasksByProject =
  (projectId?: string) => (state: StateSchema) =>
    state.tasks.data.filter((t) => t.project === projectId);
