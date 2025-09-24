
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true, // ensures cookies (session, role) are included
  headers: {
    "Content-Type": "application/json",
  },
});
