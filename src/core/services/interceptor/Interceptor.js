import axios from 'axios';  
import Cookies from 'js-cookie';
const axiosInstance = axios.create({  
  baseURL: import.meta.env.VITE_API_URL, // Change this line  
});  

axiosInstance.interceptors.request.use(  
  (config) => {  
    const token = Cookies.get("token");  
    if (token) {  
      config.headers['Authorization'] = `Bearer ${token}`;  
    }  
    return config;  
  },  
  (error) => {  
    return Promise.reject(error);  
  }  
);  

axiosInstance.interceptors.response.use(  
  (response) => {  
    return response;  
  },  
  (error) => {  
    console.error('API  error: ', error);  
    return Promise.reject(error);  
  }  
);  

export default axiosInstance;  