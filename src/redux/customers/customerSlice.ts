import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IBooking } from "typings";
import { addBookingAction, fetchMyBookingsAction } from "./asyncActions";

export interface ICustomerState {
  status: "idle" | "loading" | "success" | "error";
  error: any;
  bookings: IBooking[];
}

const initialState: ICustomerState = {
  status: "idle",
  error: null,
  bookings: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    // fetch my bookings
    builder.addCase(fetchMyBookingsAction.pending, (state, action) => {
      return { ...state, status: "loading" };
    });
    builder.addCase(fetchMyBookingsAction.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        bookings: action.payload.data,
      };
    });
    builder.addCase(fetchMyBookingsAction.rejected, (state, action) => {
      return { ...state, status: "error" };
    });

    // add booking
    builder.addCase(addBookingAction.pending, (state, action) => {
      return { ...state, status: "loading" };
    });
    builder.addCase(addBookingAction.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        // bookings: [...state.bookings, action.payload.data],
      };
    });
    builder.addCase(addBookingAction.rejected, (state, action) => {
      return { ...state, status: "error" };
    });
  },
});

export const customerSelector = (state: RootState) => state.customers;
export const { setStatus } = customerSlice.actions;
export default customerSlice.reducer;
