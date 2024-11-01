import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Auth-server URL
const DOMAIN_URL = "http://localhost:5001/api";
const ADMIN_URL = "http://localhost:5002/api/admin";

const api = axios.create({
  headers: { "Content-Type": "application/json" },
});

export const register = async (credentials) => {
  const response = await api.post(`${API_URL}/register`, credentials);
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const getPosts = async (token) => {
  const response = await api.get(`${DOMAIN_URL}/posts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getAllPosts = async (token) => {
  const response = await api.get(`${ADMIN_URL}/all-posts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
