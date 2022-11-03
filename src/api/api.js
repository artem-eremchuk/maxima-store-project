import axiosClient from "../axiosClient"

export const api = {
  login: (loginFormData) => 
    axiosClient.post('/auth/login', loginFormData),

  register: (registerFormData) => 
    axiosClient.post('/auth/register', registerFormData),

  validate: (accessToken) => 
    axiosClient.post('/auth/validate', `token=${accessToken}`),

  getProducts: (page, size) => axiosClient.get(`/products?page=${page}&size=${size}`),  

  getCategory: (page, size, category) => axiosClient.get(`/products?category=${category}&page=${page}&size=${size}`), 

  getCart: () => axiosClient.get(`/cart`),

  addProductToCart: (id) => axiosClient.post(`/cart/products/${id}`),

  deleteProductFromCart: (id) => axiosClient.delete(`/cart/products/${id}`),
}