import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IAmenity, IProperty, IPropertyType } from "typings";
import {
  addAmenitiesAction,
  addPropertyTypeAction,
  editAmenitiesAction,
  editPropertyTypeAction,
  fetchAmenitiesAction,
  fetchListingsAction,
  fetchPropertyTypesAction,
} from "./asyncActions";

export interface IGlobalState {
  status: "idle" | "loading" | "success" | "error";
  error: any;
  listings: IProperty[];
  amenities: IAmenity[];
  propertyTypes: IPropertyType[];
}

const initialState: IGlobalState = {
  listings: [],
  amenities: [],
  propertyTypes: [],
  status: "idle",
  error: null,
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

    //  fetch property types
    builder.addCase(fetchPropertyTypesAction.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(fetchPropertyTypesAction.fulfilled, (state, action) => {
      state.status = "success";
      state.propertyTypes = action.payload.data;
    });
    builder.addCase(fetchPropertyTypesAction.rejected, (state, _action) => {
      state.status = "error";
    });

    //  create property types
    builder.addCase(addPropertyTypeAction.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(addPropertyTypeAction.fulfilled, (state, action) => {
      state.status = "success";
      state.propertyTypes = [...state.propertyTypes, action.payload.data];
    });
    builder.addCase(addPropertyTypeAction.rejected, (state, _action) => {
      state.status = "error";
    });

    //  edit property type
    builder.addCase(editPropertyTypeAction.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(editPropertyTypeAction.fulfilled, (state, action) => {
      state.status = "success";
      state.propertyTypes = state.propertyTypes.map((item) =>
        item._id === action.payload.data._id ? action.payload.data : item
      );
    });
    builder.addCase(editPropertyTypeAction.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
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
    });
    builder.addCase(editAmenitiesAction.rejected, (state, _action) => {
      state.status = "error";
    });
  },
});

export const globalSelector = (state: RootState) => state.global;
export const { setStatus } = globalSlice.actions;
export default globalSlice.reducer;
