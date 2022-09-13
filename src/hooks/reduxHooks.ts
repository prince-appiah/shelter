import { useMemo } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authSelector } from "redux/auth/authSlice";
import { customerSelector } from "redux/customers/customerSlice";
import { globalSelector } from "redux/global/globalSlice";
import { AppDispatch, RootState } from "redux/store";
import { usersSelector } from "redux/users/usersSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useUsersState = () => {
  const userState = useAppSelector(usersSelector);
  return useMemo(() => userState, [userState]);
};

export const useGlobalState = () => {
  const globalState = useAppSelector(globalSelector);
  return useMemo(() => globalState, [globalState]);
};

export const useAuthState = () => {
  const authState = useAppSelector(authSelector);

  return useMemo(() => authState, [authState]);
};

export const useCustomersState = () => {
  const customersState = useAppSelector(customerSelector);

  return useMemo(() => customersState, [customersState]);
};
