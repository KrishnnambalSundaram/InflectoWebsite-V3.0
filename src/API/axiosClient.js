import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default axiosClient;
