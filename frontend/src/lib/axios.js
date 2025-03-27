import axios from "axios";
import { base } from "daisyui/imports";

export const axiosInstance = axios.create(
   { baseURL: "http://localhost:5001/api",
    withCredentials: true,
   }
);