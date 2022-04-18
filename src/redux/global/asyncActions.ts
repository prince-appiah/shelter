import { createAsyncThunk } from "@reduxjs/toolkit";
import GlobalApi from "services/global.api";

export const fetchListingsAction = createAsyncThunk(
  "global/fetchListings",
  async (data, thunk) => {
    try {
      const response = await GlobalApi.fetchListings();
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);
