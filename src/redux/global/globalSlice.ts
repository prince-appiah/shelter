import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IAmenity, IHost, IProperty, IPropertyType } from "typings";
import {
  addAmenitiesAction,
  addPropertyTypeAction,
  createListingAction,
  editAmenitiesAction,
  editPropertyTypeAction,
  fetchAmenitiesAction,
  fetchHostsAction,
  fetchListingsAction,
  fetchPropertyTypesAction,
  getPropertyDetails,
} from "./asyncActions";

export interface IGlobalState {
  status: "idle" | "loading" | "success" | "error";
  error: any;
  listings: IProperty[];
  selectedListing: IProperty;
  amenities: IAmenity[];
  propertyTypes: IPropertyType[];
  hosts: IHost[];
}

const initialState: IGlobalState = {
  listings: [],
  selectedListing: null,
  amenities: [],
  propertyTypes: [],
  hosts: [],
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
      return { ...state, status: "loading" };
    });
    builder.addCase(fetchListingsAction.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        listings: action.payload.data,
      };
    });
    builder.addCase(fetchListingsAction.rejected, (state, _action) => {
      return { ...state, status: "error" };
    });

    //  get property/property details
    builder.addCase(getPropertyDetails.pending, (state, _action) => {
      return { ...state, status: "loading" };
    });
    builder.addCase(getPropertyDetails.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        selectedListing: action.payload.data.data,
      };
    });
    builder.addCase(getPropertyDetails.rejected, (state, action) => {
      return { ...state, status: "error" };
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

    //  create listing/property
    builder.addCase(createListingAction.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(createListingAction.fulfilled, (state, action) => {
      state.status = "success";
      state.listings = [...state.listings, action.payload.data];
    });
    builder.addCase(createListingAction.rejected, (state, _action) => {
      state.status = "error";
    });

    //  fetch hosts
    builder.addCase(fetchHostsAction.pending, (state, _action) => {
      return { ...state, status: "loading" };
    });
    builder.addCase(fetchHostsAction.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        hosts: action.payload.data,
      };
    });
    builder.addCase(fetchHostsAction.rejected, (state, _action) => {
      return { ...state, status: "error" };
    });
  },
});

export const globalSelector = (state: RootState) => state.global;
export const { setStatus } = globalSlice.actions;
export default globalSlice.reducer;
