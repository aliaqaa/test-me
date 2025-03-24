import React, { useState } from 'react';  
import axiosInstance from '../../core/services/interceptor/Interceptor';  
import Cookies from 'js-cookie';   

export const useAuthRegister = () => {  
  const [data, setData] = useState(null);  
  const [loading, setLoading] = useState(false);  
  

  const SendVerifyMessage = async (userObj) => {  
    setLoading(true); 
    try {  
      const response = await axiosInstance.post('/Sign/SendVerifyMessage', userObj);  
    } catch (error) {  
      console.error('Register failed', error);  
    } finally {  
      setLoading(false); 
    }  
  };  
  const VerifyMessage = async (userObj) => {  
    setLoading(true); 
    try {  
      const response = await axiosInstance.post('/Sign/VerifyMessage', userObj);  
    } catch (error) {  
      console.error('Register failed', error);  
    } finally {  
      setLoading(false); 
    }  
  };  
  const Register = async (userObj) => {  
    setLoading(true); 
    try {  
      const response = await axiosInstance.post('/Sign/Register', userObj);  
    } catch (error) {  
      console.error('Register failed', error);  
    } finally {  
      setLoading(false); 
    }  
  };  
  return { Register,VerifyMessage,SendVerifyMessage, data, loading };  
};  