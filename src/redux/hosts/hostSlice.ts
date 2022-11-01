import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IBooking } from "typings";
import { fetchHostBookingDetailsAction, fetchHostBookingsAction } from "./asyncActions";

export interface IHostState {
  status: "idle" | "loading" | "success" | "error";
  bookings: IBooking[];
  selectedBooking: IBooking;
}

const initialState: IHostState = {
  status: "idle",
  bookings: [],
  selectedBooking: null,
};

export const hostSlice = createSlice({
  name: "hosts",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setSelectedBooking: (state) => {
      return { ...state, status: "idle", selectedBooking: null };
    },
  },
  extraReducers: (builder) => {
    // fetch bookings
    builder.addCase(fetchHostBookingsAction.pending, (state, action) => {
      return { ...state, status: "loading" };
    });
    builder.addCase(fetchHostBookingsAction.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        bookings: action.payload.data,
      };
    });
    builder.addCase(fetchHostBookingsAction.rejected, (state, action) => {
      return { ...state, status: "error" };
    });

    // fetch booking details
    builder.addCase(fetchHostBookingDetailsAction.pending, (state, action) => {
      return { ...state, status: "loading" };
    });
    builder.addCase(fetchHostBookingDetailsAction.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        selectedBooking: action.payload.data,
      };
    });
    builder.addCase(fetchHostBookingDetailsAction.rejected, (state, action) => {
      return { ...state, status: "error" };
    });
  },
});

export const hostSelector = (state: RootState) => state.hosts;
export const { setStatus, setSelectedBooking } = hostSlice.actions;
export default hostSlice.reducer;
