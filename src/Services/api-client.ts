import axios, { AxiosRequestConfig } from "axios"
import { Genre } from "../Custom hooks/useGenres";
import { Platform } from "../Custom hooks/usePlatform";


export interface FetchResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

 const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "057db95bf34a4848a62e321d1bc0e24d",
  },
});


class APIClient<T> {
  endpoint: string;

  constructor(endPoint: string) {
    this.endpoint = endPoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient