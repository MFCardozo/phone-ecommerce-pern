import axios from "axios";

export const phoneDataApi = axios.create({
  baseURL: process.env.baseURL || "http://localhost:5000/api/v1",
});
