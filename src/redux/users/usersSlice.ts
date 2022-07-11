import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IUser } from "typings";
import { fetchUsersAction } from "./asyncActions";

export interface IUsersState {
  status: "idle" | "loading" | "success" | "error";
  error: any;
  users: IUser[];
}

const initialState: IUsersState = {
  status: "idle",
  error: null,
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //   fetch users
    builder.addCase(fetchUsersAction.pending, (state, action) => {
      return { ...state, status: "loading" };
    });
    builder.addCase(fetchUsersAction.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        users: action.payload.data,
      };
    });
    builder.addCase(fetchUsersAction.rejected, (state, _action) => {
      return { ...state, status: "error" };
    });
  },
});

export const usersSelector = (state: RootState) => state.users;
export const {} = userSlice.actions;
export default userSlice.reducer;
