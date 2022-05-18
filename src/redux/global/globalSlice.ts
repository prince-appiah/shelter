import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IAmenity, IProperty } from "typings";
import {
  addAmenitiesAction,
  editAmenitiesAction,
  fetchAmenitiesAction,
  fetchListingsAction,
} from "./asyncActions";

export interface IGlobalState {
  status: "idle" | "loading" | "success" | "error";
  listings: IProperty[];
  amenities: IAmenity[];
}

const initialState: IGlobalState = {
  listings: [],
  amenities: [],
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

    //  fetch amenities
    builder.addCase(fetchAmenitiesAction.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(fetchAmenitiesAction.fulfilled, (state, action) => {
      state.status = "success";
      state.amenities = action.payload.data;
    });
    builder.addCase(fetchAmenitiesAction.rejected, (state, _action) => {
      state.status = "error";
    });

    //  create amenities
    builder.addCase(addAmenitiesAction.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(addAmenitiesAction.fulfilled, (state, action) => {
      state.status = "success";
      state.amenities = [...state.amenities, action.payload.data];
    });
    builder.addCase(addAmenitiesAction.rejected, (state, _action) => {
      state.status = "error";
    });

    //  edit amenities
    builder.addCase(editAmenitiesAction.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(editAmenitiesAction.fulfilled, (state, action) => {
      state.status = "success";
      state.amenities = state.amenities.map((item) =>
        item._id === action.payload.data._id ? action.payload.data : item
      );
      // state.amenities = {
      //   ...state,
      //   amenities: state.amenities.map((item) =>
      //     item._id === action.payload.data._id ? action.payload.data : item
      //   ),
      // };
    });
    builder.addCase(editAmenitiesAction.rejected, (state, _action) => {
      state.status = "error";
    });
  },
});

export const globalSelector = (state: RootState) => state.global;
export const { setStatus } = globalSlice.actions;
export default globalSlice.reducer;
