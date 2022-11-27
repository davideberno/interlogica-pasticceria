import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export interface IApiClient {
  get<TRes>(path: string): Promise<TRes | undefined>;
  post<TReq, TRes>(path: string, payload: TReq): Promise<TRes | undefined>;
  patch<TReq, TRes>(path: string, payload: TReq): Promise<TRes | undefined>;
  delete<TRes>(path: string): Promise<TRes | undefined>;
}

export class ApiClient implements IApiClient {
  private client: AxiosInstance;

  protected createAxiosClient(config?: AxiosRequestConfig): AxiosInstance {
    return Axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      ...config,
    });
  }

  constructor(config?: AxiosRequestConfig) {
    this.client = this.createAxiosClient(config);
  }

  async get<TRes>(path: string) {
    try {
      const response = await this.client.get<TRes>(path);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async post<TReq, TRes>(path: string, payload: TReq, config?: AxiosRequestConfig) {
    try {
      const response = await this.client.post<TRes>(path, payload, config);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async patch<TReq, TRes>(path: string, payload: TReq) {
    try {
      const response = await this.client.patch<TRes>(path, payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async delete<TRes>(path: string) {
    try {
      const response = await this.client.put<TRes>(path);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
