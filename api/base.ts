import axios from "axios";
import axiosRetry from "axios-retry";

const baseAxios = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
});

axiosRetry(baseAxios, {
  retries: 0,
  retryDelay: axiosRetry.exponentialDelay,
  shouldResetTimeout: true,
  retryCondition: (error) =>
    axiosRetry.isNetworkOrIdempotentRequestError(error) ||
    error.response?.status === 503,
});

// const getAuthToken = (): string => sessionStorage.getItem("authToken") || "";

// baseAxios.interceptors.request.use(
//   (config) => {
//     config.headers["Authorization"] = `Bearer ${getAuthToken()}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default baseAxios;
