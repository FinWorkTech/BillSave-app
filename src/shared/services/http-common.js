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

export default http;