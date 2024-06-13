import { createSlice } from "@reduxjs/toolkit";
import { ProjectsSchema } from "./ProjectsSchema";

const initialState: ProjectsSchema = {
  data: [
    {
      id: "001",
      name: "Еда",
      sections: [
        {
          id: "001",
          name: "Список покупок",
          tasks: [],
        },
      ],
    },
    {
      id: "002",
      name: "Работа",
    },
    {
      id: "003",
      name: "Дом",
    },
    {
      id: "004",
      name: "Кодинг",
    },
  ],
  _inited: false,
};

export const projectsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const { actions: ProjectsActions, reducer: ProjectsReducer } =
  projectsSlice;
