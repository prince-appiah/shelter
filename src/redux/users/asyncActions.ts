import { createAsyncThunk } from "@reduxjs/toolkit";
import AdminApi from "services/admin.api";
import UsersApi from "services/users.api";
import { IUser } from "typings";

export const fetchUsersAction = createAsyncThunk(
  "users/fetchUsers",
  async (data, thunk) => {
    try {
      const response = await UsersApi.fetchUsers();
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const createUserAction = createAsyncThunk(
  "users/createUser",
  async (data: Omit<IUser, "_id">, thunk) => {
    try {
      const response = await UsersApi.createUser(data);
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);
