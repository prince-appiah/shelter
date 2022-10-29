import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IBooking } from "typings";
import { fetchHostBookingsAction } from "./asyncActions";

export interface IHostState {
  status: "idle" | "loading" | "success" | "error";
  bookings: IBooking[];
}

const initialState: IHostState = {
  status: "idle",
  bookings: [],
};

export const hostSlice = createSlice({
  name: "hosts",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
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
  },
});

export const hostSelector = (state: RootState) => state.hosts;
export const { setStatus } = hostSlice.actions;
export default hostSlice.reducer;
