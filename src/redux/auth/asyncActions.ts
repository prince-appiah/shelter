import { createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import AuthApi, { LoginFields, OtpFields, SignupFields } from "services/auth.api";
import { IDecodedUser } from "typings";
import { setCurrentUser } from "./authSlice";

export const signupAction = createAsyncThunk("auth/signup", async (data: SignupFields, thunk) => {
  try {
    const response = await AuthApi.signUp(data);

    return response.data;
  } catch (error) {
    return thunk.rejectWithValue(error.response.data);
  }
});

export const loginAction = createAsyncThunk("auth/login", async ({ otp, email }: LoginFields, thunk) => {
  try {
    const response = await AuthApi.login({ email, otp });

    localStorage.setItem("token", response.data.token);
    const decoded = (await jwtDecode(response.data.token)) as IDecodedUser;
    thunk.dispatch(setCurrentUser(decoded));

    return response.data;
  } catch (error) {
    return thunk.rejectWithValue(error.response.data);
  }
});

export const getOtpAction = createAsyncThunk("auth/getOtp", async ({ email }: OtpFields, thunk) => {
  try {
    const response = await AuthApi.getOTP({ email });

    return response.data;
  } catch (error) {
    return thunk.rejectWithValue(error.response.data);
  }
});

export const logoutAction = createAsyncThunk("auth/logout", async (data, thunk) => {
  try {
    const response = await AuthApi.logout();
    console.log("🚀 ~ response", response);

    // if (response.status === 200) {
    //   logoutUser();
    //   window.location.pathname = LOGIN_ROUTE;
    //   return;
    // }

    return response;
  } catch (error) {
    return thunk.rejectWithValue(error.response.data);
  }
});
