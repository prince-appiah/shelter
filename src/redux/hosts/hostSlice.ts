import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IBooking, IProperty } from "typings";
import { fetchHostBookingDetailsAction, fetchHostBookingsAction, fetchHostListingsAction } from "./asyncActions";

export interface IHostState {
  status: "idle" | "loading" | "success" | "error";
  listings: IProperty[];
  bookings: IBooking[];
  selectedBooking: IBooking;
  selectedListing: IProperty;
}

const initialState: IHostState = {
  status: "idle",
  listings: [],
  bookings: [],
  selectedBooking: null,
  selectedListing: null,
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
    setSelectedListing: (state) => {
      return { ...state, status: "idle", selectedListing: null };
    },
  },
  extraReducers: (builder) => {
    // fetch host properties
    builder.addCase(fetchHostListingsAction.pending, (state, action) => {
      return { ...state, status: "loading" };
    });
    builder.addCase(fetchHostListingsAction.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        listings: action.payload.data,
      };
    });
    builder.addCase(fetchHostListingsAction.rejected, (state, action) => {
      return { ...state, status: "error" };
    });
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
export const { setStatus, setSelectedBooking, setSelectedListing } = hostSlice.actions;
export default hostSlice.reducer;
