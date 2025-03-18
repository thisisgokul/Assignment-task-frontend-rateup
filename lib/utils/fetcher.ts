import axiosInstance from "./axiosInstance";

export const fetcher = (url: string) =>
    axiosInstance.get(url, { withCredentials: true }).then((res) => res.data);