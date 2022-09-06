import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import authReducer from "./auth/authSlice";
import globalReducer from "./global/globalSlice";
import usersReducer from "./users/usersSlice";
import customersReducer from "./customers/customerSlice";

export const history = createBrowserHistory();

const rootReducer = (history) =>
  combineReducers({
    global: globalReducer,
    auth: authReducer,
    users: usersReducer,
    customers: customersReducer,
    router: connectRouter(history),
  });

export default rootReducer;
