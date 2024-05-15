import axios from "axios";
import { API_URL } from "../config";
import { rejectInterceptors, responseInterceptors } from "./interceptors";

export const API = axios.create({
  baseURL: API_URL
});

API.interceptors.request.use((config) => config);
API.interceptors.response.use(responseInterceptors, rejectInterceptors);
