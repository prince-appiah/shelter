import { createAsyncThunk } from "@reduxjs/toolkit";
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

export const getUserDetailsAction = createAsyncThunk(
  "users/getUserDetails",
  async ({ user_id }: { user_id: string }, thunk) => {
    try {
      const response = await UsersApi.getUserDetails({ user_id });
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      console.log("🚀 ~ error", error);
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

export const updateUserAction = createAsyncThunk(
  "global/updateUser",
  async (data: IUser, thunk) => {
    try {
      const response = await UsersApi.updateUser(data._id, data);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const deleteUserAction = createAsyncThunk(
  "global/deleteUser",
  async ({ id }: { id: string }, thunk) => {
    try {
      const response = await UsersApi.deleteUser(id);
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);
