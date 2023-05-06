import axios from "axios";

const request = axios.create({
  baseURL: "http://192.168.0.105:8081/api",
  timeout: 1000000,
});

request.interceptors.request.use((config) => {
  const token = "";
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

request.interceptors.response.use((config) => {
  return config;
});

export default request;
