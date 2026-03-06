// lib/api.js
import axios from "axios";

// baseURL will come from .env.local
const API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  withCredentials: true, // keep this if you use cookies/sessions
});

export default API;
