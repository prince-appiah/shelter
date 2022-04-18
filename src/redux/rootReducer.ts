import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import globalReducer from "./global/globalSlice";

const rootReducer = combineReducers({
  global: globalReducer,
  auth: authReducer,
});

export default rootReducer;
