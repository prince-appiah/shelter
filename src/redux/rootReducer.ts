import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import globalReducer from "./global/globalSlice";
import usersReducer from "./users/usersSlice";

const rootReducer = combineReducers({
  global: globalReducer,
  auth: authReducer,
  users: usersReducer,
});

export default rootReducer;
