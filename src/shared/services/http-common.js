import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Axios instance
 * @summary
 * Axios instance to make HTTP requests to the backend API
 * @type {axios.AxiosInstance}
 */
const http = axios.create({
    baseURL: API_BASE_URL
});

// Set default headers
http.defaults.headers.common["Content-Type"]                = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

// Interceptor to add the Authorization header if the token exists
http.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default http;