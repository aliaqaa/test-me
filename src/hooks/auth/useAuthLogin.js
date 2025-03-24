import React, { useState } from 'react';  
import axiosInstance from '../../core/services/interceptor/Interceptor';  
import Cookies from 'js-cookie';   

export const useAuthLogin = () => {  
  const [user, setUser] = useState(null);  
  const [loading, setLoading] = useState(false);  
  

  const login = async (userObj) => {  
    setLoading(true); 
    try {  
      const response = await axiosInstance.post('/Sign/Login', userObj);  
      setUser(response.data);  
      Cookies.set('token', response.data.token); 
    } catch (error) {  
      console.error('Login failed', error);  
    } finally {  
      setLoading(false); 
    }  
  };  

  return { login, user, loading };  
};  