import { createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "./UserSchema";

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: () => {},
    logout: () => {},
  },
});

export const { actions: UserActions, reducer: UserReducer } = userSlice;
