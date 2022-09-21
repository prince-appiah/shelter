import { createAsyncThunk } from "@reduxjs/toolkit";
import HostApi from "services/host.api";

export const fetchHostBookingsAction = createAsyncThunk(
  "host/fetchBookings",
  async (data, thunk) => {
    try {
      const response = await HostApi.getHostBookings();
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);
