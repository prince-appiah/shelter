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

export const addBookingAction = createAsyncThunk(
  "customer/addBooking",
  async (property_id: string, thunk) => {
    try {
      const response = await CustomerApi.addBooking({ property_id });
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const cancelBookingAction = createAsyncThunk(
  "customer/cancelBooking",
  async (property_id: string, thunk) => {
    try {
      const response = await CustomerApi.cancelBooking({ property_id });
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);
