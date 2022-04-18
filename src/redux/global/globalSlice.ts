import { createSlice } from "@reduxjs/toolkit";
import { fetchListingsAction } from "./asyncActions";

export interface IGlobalState {
  listings: any[];
}

const initialState = {
  listings: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //  fetch listings
    builder.addCase(fetchListingsAction.pending, () => {});
    builder.addCase(fetchListingsAction.fulfilled, (state, action) => {
      state.listings = action.payload.data;
    });
    builder.addCase(fetchListingsAction.rejected, () => {});
  },
});

export default globalSlice.reducer;
