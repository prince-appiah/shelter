import { createAsyncThunk } from "@reduxjs/toolkit";
import CustomerApi from "services/customer.api";

export const fetchMyBookingsAction = createAsyncThunk(
  "customers/fetchMyBookings",
  async (data, thunk) => {
    try {
      const response = await CustomerApi.getMyBookings();
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);
