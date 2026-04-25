import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// GET
export const GET_API = (url) => API.get(url);

// POST
export const POST_API = (url, data) => API.post(url, data);

// PUT
export const PUT_API = (url, data) => API.put(url, data);

// DELETE
export const DELETE_API = (url) => API.delete(url);

export default API;