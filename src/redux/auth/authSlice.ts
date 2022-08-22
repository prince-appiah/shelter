import { createSlice } from "@reduxjs/toolkit";
import { LOGIN_ROUTE } from "config/constants/routes";
import { RootState } from "redux/store";
import { IDecodedUser } from "typings";
import {
  getOtpAction,
  loginAction,
  logoutAction,
  signupAction,
} from "./asyncActions";

export interface IAuthState {
  currentUser?: IDecodedUser;
  status: "idle" | "loading" | "success" | "error";
}

const initialState: IAuthState = {
  currentUser: null,
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
    logoutUser: (state) => {
      return { ...state, status: "idle", currentUser: null };
    },
  },
  extraReducers: (builder) => {
    // register account
    builder.addCase(signupAction.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(signupAction.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(signupAction.rejected, (state, action) => {
      state.status = "error";
    });

    // login
    builder.addCase(loginAction.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.status = "error";
    });

    // get otp
    builder.addCase(getOtpAction.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(getOtpAction.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(getOtpAction.rejected, (state, action) => {
      state.status = "error";
    });

    // logout
    builder.addCase(logoutAction.pending, (state, _action) => {
      return { ...state, status: "loading" };
    });
    builder.addCase(logoutAction.fulfilled, (state, _action) => {
      window.location.assign(LOGIN_ROUTE);
      return { ...state, status: "success", currentUser: null };
    });
    builder.addCase(logoutAction.rejected, (state, _action) => {
      return { ...state, status: "error" };
    });
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentUser, logoutUser } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
