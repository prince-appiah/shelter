import { ActionCreatorWithPayload, createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IProperty } from "typings";
import { fetchListingsAction } from "./asyncActions";

export interface IGlobalState {
  status: "idle" | "loading" | "success" | "error";
  listings: IProperty[];
}

const initialState: IGlobalState = {
  listings: [],
  status: "idle",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    //  fetch listings
    builder.addCase(fetchListingsAction.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(fetchListingsAction.fulfilled, (state, action) => {
      state.status = "success";
      state.listings = action.payload.data;
    });
    builder.addCase(fetchListingsAction.rejected, (state, _action) => {
      state.status = "error";
    });
  },
});

export const globalSelector = (state: RootState) => state.global;
export const { setStatus } = globalSlice.actions;
export default globalSlice.reducer;
