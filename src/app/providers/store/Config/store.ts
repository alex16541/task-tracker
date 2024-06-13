import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "@/entity/User";
import { TasksReducer } from "@/entity/Task";
import { ProjectsReducer } from "@/entity/Project";

const store = configureStore({
  reducer: {
    user: UserReducer,
    tasks: TasksReducer,
    projects: ProjectsReducer,
  },
});

export default store;
