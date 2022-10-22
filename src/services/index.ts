import axios, { AxiosResponse } from "axios";
import { LOGIN_ROUTE } from "config/constants/routes";
import { BASE_URL, LOCAL_BACKEND } from "config/constants/vars";

const token = localStorage.getItem("token");
const baseURL =
  process.env.NODE_ENV === "development" ? LOCAL_BACKEND : BASE_URL;

export enum APIStatus {
  IDLE,
  PENDING,
  REJECTED,
  FULFILLED,
}

export type APIError = {
  message: string;
  code: number;
};

export type ApiData<T = any> = {
  status: APIStatus;
  error?: APIError;
  data?: T;
};

const signal = new AbortController().signal;

const api = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
  signal,
});

export const onFulfilledRequest = (response: AxiosResponse) => response;
export const onRejectedResponse = (error: any): any => {
  const { status } = error.response;

  if (status === 401 || status === 403) {
    const { location } = window;
    // store.dispatch(logoutUser());
    localStorage.removeItem("token");
    location.pathname = LOGIN_ROUTE;
    return;
  }

  return Promise.reject({ message: error || "Server error", code: 500 });
};

api.interceptors.response.use(onFulfilledRequest, onRejectedResponse);

export default api;
