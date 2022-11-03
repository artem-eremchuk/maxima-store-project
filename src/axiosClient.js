import axios from "axios";
import Cookies from 'js-cookie';
let count = 0;

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Cookies.get('access_token')}`;
  return config;
});

axiosClient.interceptors.response.use(
  (config) => {
    return config;
  },
  async ({ response, config }) => { 
    const originalRequest = config;

    if (response.status === 401 && count === 0){
      count = count + 1;

      try {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}auth/refresh`, `token=${Cookies.get('refresh_token')}`);

        if (res.status === 200){
          Cookies.set('access_token', res.data.access_token.token);
          Cookies.set('refresh_token', res.data.refresh_token.token);
          originalRequest.data = `token=${Cookies.get('access_token')}`;

          return axiosClient.request(originalRequest);
        } else {
          if (window.location.pathname !== '/login'){
            window.location = '/login';
          }
        }        
      } catch (error) {
        if(window.location.pathname !== '/login'){
          window.location = '/login';
        }
      }
    }
    return response;
  }
)

export default axiosClient;
