import axios from "axios";

const api = axios.create({
  baseURL: "/api/api/",
  headers: { "Content-Type": "application/json" },
});

export default api;
