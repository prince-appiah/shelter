import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IDecodedUser } from "typings";
import { getOtpAction, loginAction, signupAction } from "./asyncActions";

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
      state.currentUser = action.payload;
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
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentUser } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
