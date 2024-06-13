import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "./types";
import { TasksSchema } from "./TasksSchema";

const initialState: TasksSchema = {
  data: [
    {
      id: "001",
      priority: 1,
      title: "Найти классный рецепт для борща",
      description: "Надоело есть одну гречку",
      project: "001",
    },
    {
      id: "002",
      priority: 1,
      title: "Купить картошку",
      description: "Для борща",
      project: "001",
      section: "001",
    },
    {
      id: "003",
      priority: 1,
      title: "Купить свеклу",
      description: "Тоже для борща",
      project: "001",
      section: "001",
    },
    {
      id: "004",
      priority: 1,
      title: "Купить курицу",
      description: "Кудаже без неё",
      project: "001",
      section: "001",
    },
    {
      id: "005",
      priority: 1,
      title: "Купить картошку",
      description: "В угловом магазине. Около 3 килограмм, на суп",
      project: "002",
    },
    {
      id: "006",
      priority: 1,
      title: "Купить картошку",
      description: "В угловом магазине. Около 3 килограмм, на суп",
      project: "002",
    },
    {
      id: "007",
      priority: 1,
      title: "Купить картошку",
      description: "В угловом магазине. Около 3 килограмм, на суп",
      project: "002",
    },
  ],
  _inited: false,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // куча разных редюсеров на работу с тасками;
    addTask: (state, { payload }: PayloadAction<Task>) => {
      state.data.push({ ...payload, id: `00${state.data.length + 1}` });
    },
    setTask: (state, { payload }: PayloadAction<Task>) => {
      const i = state.data.findIndex((task) => task.id === payload.id);
      state.data[i] = payload;
    },
    //...
    //...
    //...
  },
});

export const { actions: TasksActions, reducer: TasksReducer } = tasksSlice;
