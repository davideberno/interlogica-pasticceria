import axios, { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const get = async <TRes>(path: string, config?: AxiosRequestConfig) => {
  const response = await axios.get<TRes>(path, config);
  return response;
};

export const post = async <TReq, TRes>(path: string, payload: TReq, config?: AxiosRequestConfig) => {
  const response = await axios.post<TRes>(path, payload, config);
  return response;
};

export const patch = async <TReq, TRes>(path: string, payload: TReq, config?: AxiosRequestConfig) => {
  const response = await axios.patch<TRes>(path, payload, config);
  return response;
};

export const remove = async <TRes>(path: string, config?: AxiosRequestConfig) => {
  const response = await axios.delete<TRes>(path, config);
  return response;
};
