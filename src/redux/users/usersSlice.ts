import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { ICustomer, IHost, IUser } from "typings";
import {
  createUserAction,
  deleteUserAction,
  fetchUsersAction,
  getUserDetailsAction,
  updateUserAction,
} from "./asyncActions";

export interface IUsersState {
  status: "idle" | "loading" | "success" | "error";
  error: any;
  users: IUser[];
  selectedUser: { role: string; profile: IHost & ICustomer };
  // selectedUser: IHost | ICustomer | (IUser & {});
}

const initialState: IUsersState = {
  status: "idle",
  error: null,
  users: [],
  selectedUser: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setSelectedUser: (state) => {
      return { ...state, status: "idle", selectedUser: null };
    },
  },
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

    //  get user details
    builder.addCase(getUserDetailsAction.pending, (state, _action) => {
      return { ...state, status: "loading" };
    });
    builder.addCase(getUserDetailsAction.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        selectedUser: action.payload.data,
      };
    });
    builder.addCase(getUserDetailsAction.rejected, (state, action) => {
      return { ...state, status: "error" };
    });

    //   create user
    builder.addCase(createUserAction.pending, (state, action) => {
      return { ...state, status: "loading" };
    });
    builder.addCase(createUserAction.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        users: [...state.users, action.payload.data.user],
      };
    });
    builder.addCase(createUserAction.rejected, (state, _action) => {
      return { ...state, status: "error" };
    });

    //  update user
    builder.addCase(updateUserAction.pending, (state, _action) => {
      return { ...state, status: "loading" };
    });
    builder.addCase(updateUserAction.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        users: state.users.map((item) => (item._id === action.payload.data.data._id ? action.payload.data.data : item)),
      };
    });
    builder.addCase(updateUserAction.rejected, (state, action) => {
      return { ...state, status: "error" };
    });

    //  delete user
    builder.addCase(deleteUserAction.pending, (state, _action) => {
      return { ...state, status: "loading" };
    });
    builder.addCase(deleteUserAction.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        users: state.users.filter((item) => item._id !== action.payload.data.deletedUserId),
      };
    });
    builder.addCase(deleteUserAction.rejected, (state, action) => {
      return { ...state, status: "error" };
    });
  },
});

export const usersSelector = (state: RootState) => state.users;
export const { setStatus, setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
