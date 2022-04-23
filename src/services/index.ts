import axios, { AxiosResponse } from "axios";
import { BASE_URL, LOCAL_BACKEND } from "config/constants/vars";

const token = localStorage.getItem("item");
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

export const onFulfilledRequest = (response: AxiosResponse) => response;
export const onRejectedResponse = (error: any): any =>
  Promise.reject({ message: error || "Server error", code: 500 });

const api = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

// api.interceptors.response.use(onFulfilledRequest, onRejectedResponse);

export default api;
