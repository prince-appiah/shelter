import { createAsyncThunk } from "@reduxjs/toolkit";
import UsersApi from "services/users.api";

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
