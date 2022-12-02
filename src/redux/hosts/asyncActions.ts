import { createAsyncThunk } from "@reduxjs/toolkit";
import HostApi from "services/host.api";

export const fetchHostListingsAction = createAsyncThunk("host/fetchListings", async (data, thunk) => {
  try {
    const response = await HostApi.getHostProperties();
    console.log("🚀 ~ response", response);

    return response;
  } catch (error) {
    return thunk.rejectWithValue(error.response.data);
  }
});

export const fetchHostBookingsAction = createAsyncThunk("host/fetchBookings", async (data, thunk) => {
  try {
    const response = await HostApi.getHostBookings();
    console.log("🚀 ~ response", response);

    return response;
  } catch (error) {
    return thunk.rejectWithValue(error.response.data);
  }
});

export const fetchHostBookingDetailsAction = createAsyncThunk(
  "host/fetchHostBookingDetails",
  async ({ booking_id }: { booking_id: string }, thunk) => {
    try {
      const response = await HostApi.getHostBookingDetails({ booking_id });
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  },
);
