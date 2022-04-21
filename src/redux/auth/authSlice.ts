import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { signupAction } from "./asyncActions";

export interface IAuthState {
  currentUser: any;
  status: "idle" | "loading" | "success" | "error";
  successMsg: string;
  errorMsg: string;
}

const initialState: IAuthState = {
  currentUser: {},
  status: "idle",
  errorMsg: "",
  successMsg: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupAction.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(signupAction.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(signupAction.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

// Action creators are generated for each case reducer function
// export const {   } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
