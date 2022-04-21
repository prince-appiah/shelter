import { useMemo } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authSelector } from "redux/auth/authSlice";
import { globalSelector } from "redux/global/globalSlice";
import { AppDispatch, RootState } from "redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useGlobalState = () => {
  const globalState = useAppSelector(globalSelector);
  return useMemo(() => globalState, [globalState]);
};

export const useAuthState = () => {
  const authState = useAppSelector(authSelector);

  return useMemo(() => authState, [authState]);
};
