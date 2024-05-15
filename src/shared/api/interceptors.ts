import { AxiosError, AxiosResponse } from "axios";
import { ErrorResponse } from "./models";

export const responseInterceptors = <T>(response: AxiosResponse<T>) =>
  response.data;

export const rejectInterceptors = (error: AxiosError<ErrorResponse>) => {
  const { data, status } = error.response!;
  switch (status) {
    case 404:
      console.error("Not Found");
      Promise.reject(data.detail);
      break;

    case 422:
      console.error("Validation Error");
      Promise.reject(data.detail);
      break;

    case 500:
      console.error("/server-error");
      break;
  }
  return Promise.reject(error);
};
