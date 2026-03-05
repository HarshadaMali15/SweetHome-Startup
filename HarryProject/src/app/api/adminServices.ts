// app/api/adminService.ts
import API from "@/lib/api";  
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Admin Login
export const adminLogin = async (email: string, password: string) => {
  const response = await API.post("/api/admin/login", { email, password });
  return response.data;
};

// ✅ Fetch Data
export const fetchUsers = async () => {
  const response = await API.get("/api/admin/users");
  return response.data;
};

export const fetchSellers = async () => {
  const response = await API.get("/api/admin/sellers");
  return response.data;
};

export const fetchProducts = async () => {
  const response = await API.get("/api/admin/products");
  return response.data;
};

export const fetchOrders = async () => {
  const response = await API.get("/api/admin/orders");
  return response.data;
};

export const fetchDashboardData = async () => {
  const response = await API.get("/api/admin/dashboard");
  return response.data;
};

// ✅ Delete APIs
export const deleteUser = async (id: string) => {
  const response = await API.delete(`/api/admin/users/${id}`);
  return response.data;
};

export const deleteSeller = async (id: string) => {
  const response = await API.delete(`/api/admin/sellers/${id}`);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await API.delete(`/api/admin/products/${id}`);
  return response.data;
};

export const deleteOrder = async (id: string) => {
  const response = await API.delete(`/api/admin/orders/${id}`);
  return response.data;
};
