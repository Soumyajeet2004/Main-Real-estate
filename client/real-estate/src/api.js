// src/api.js
import axios from "axios";

// Works for both CRA and Next. It will use whichever you set.
const BASE_URL =
  process.env.REACT_APP_API_URL ;

const api = axios.create({
  baseURL: BASE_URL, // e.g. http://localhost:6005  (dev) or your Vercel URL (prod)
  withCredentials: false, // set true only if you actually use cookies/sessions
});

export default api;
