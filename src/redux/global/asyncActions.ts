import { createAsyncThunk } from "@reduxjs/toolkit";
import AdminApi from "services/admin.api";
import GlobalApi from "services/global.api";
import { IAmenity, IPropertyType } from "typings";

export const fetchListingsAction = createAsyncThunk(
  "global/fetchListings",
  async (data, thunk) => {
    try {
      const response = await GlobalApi.fetchListings();
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const getPropertyDetails = createAsyncThunk(
  "global/propertyDetails",
  async ({ id }: { id: string }, thunk) => {
    try {
      const response = await GlobalApi.getListingDetails(id);
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      console.log("🚀 ~ error", error);
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const fetchAmenitiesAction = createAsyncThunk(
  "global/fetchAmenities",
  async (_data, thunk) => {
    try {
      const response = await GlobalApi.getAllAmenities();
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const addAmenitiesAction = createAsyncThunk(
  "global/createAmenity",
  async (data: Omit<IAmenity, "_id">, thunk) => {
    try {
      const response = await AdminApi.addAmenity(data);
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const editAmenitiesAction = createAsyncThunk(
  "global/editAmenity",
  async (data: IAmenity, thunk) => {
    try {
      const response = await AdminApi.editAmenity(data._id, data);
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const fetchPropertyTypesAction = createAsyncThunk(
  "global/fetchPropertyTypes",
  async (data, thunk) => {
    try {
      const response = await GlobalApi.getAllPropertyTypes();
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const addPropertyTypeAction = createAsyncThunk(
  "global/createPropertyType",
  async (data: Omit<IPropertyType, "_id">, thunk) => {
    try {
      const response = await AdminApi.addPropertyType(data);
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const editPropertyTypeAction = createAsyncThunk(
  "global/editPropertyType",
  async (data: IPropertyType, thunk) => {
    try {
      const response = await AdminApi.editPropertyType(data._id, data);
      console.log("🚀 ~ response", response);

      return response;
    } catch (error) {
      return thunk.rejectWithValue(error.response);
    }
  }
);
