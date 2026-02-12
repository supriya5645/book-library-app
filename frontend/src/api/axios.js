import axios from "axios";

const api = axios.create({
  baseURL: "https://book-library-backend-o8dd.onrender.com/api",
});

// Automatically add the token to every request header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
