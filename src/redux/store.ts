import { Action, configureStore, getDefaultMiddleware, ThunkAction } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer, { history } from "./rootReducer";

const persistConfig = {
  key: "shelter",
  version: 1,
  storage,
  blacklist: ["router"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: {},
  devTools: process.env.NODE_ENV !== "production",
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  middleware: getDefaultMiddleware({
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
    serializableCheck: false,
  }).concat(logger, routerMiddleware(history)),
});

export const persistor = persistStore(store, {});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
