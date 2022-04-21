import { createAsyncThunk } from "@reduxjs/toolkit";

import AuthApi, {
  LoginFields,
  OtpFields,
  SignupFields,
} from "services/auth.api";

export const signupAction = createAsyncThunk(
  "auth/signup",
  async (data: SignupFields, thunk) => {
    try {
      const response = await AuthApi.signUp(data);

      return response.data;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const loginAction = createAsyncThunk(
  "auth/login",
  async (data: LoginFields, thunk) => {
    try {
      const response = await AuthApi.login(data);

      return response.data;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const getOtpAction = createAsyncThunk(
  "auth/getOtp",
  async (data: OtpFields, thunk) => {
    try {
      const response = await AuthApi.getOTP(data);

      return response.data;
    } catch (error) {
      return thunk.rejectWithValue(error.response.data);
    }
  }
);
