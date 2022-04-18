import axios from "axios";
import { BASE_URL, LOCAL_BACKEND } from "config/constants/vars";

const token = localStorage.getItem("item");
const baseURL =
  process.env.NODE_ENV === "development" ? LOCAL_BACKEND : BASE_URL;

const api = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default api;
