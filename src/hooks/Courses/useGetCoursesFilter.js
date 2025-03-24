import React, { useState } from "react";  
import axiosInstance from "../../core/services/interceptor/Interceptor";  

export const useGetCoursesFilter = () => {  
  const [data, setData] = useState({  
    technologies: null,  
    types: null,  
    levels: null,  
  });  
  const [loading, setLoading] = useState({  
    technologies: false,  
    types: false,  
    levels: false,  
  });  
  const [error, setError] = useState({  
    technologies: null,  
    types: null,  
    levels: null,  
  });  

  const fetchData = async (endpoint, key) => {  
    setLoading(prev => ({ ...prev, [key]: true }));  
    setError(prev => ({ ...prev, [key]: null }));  
    try {  
      const response = await axiosInstance.get(endpoint);  
      setData(prev => ({ ...prev, [key]: response.data }));  
    } catch (error) {  
      console.error(`Fetching ${key} data failed`, error);  
      setError(prev => ({ ...prev, [key]: error }));  
    } finally {  
      setLoading(prev => ({ ...prev, [key]: false }));  
    }  
  };  

  const GetTechnologies = () => fetchData("/Home/GetTechnologies", "technologies");  
  const GetCourseTypes = () => fetchData("/CourseType/GetCourseTypes", "types");  
  const GetAllCourseLevels = () => fetchData("/CourseLevel/GetAllCourseLevel", "levels");  

  return {  
    GetTechnologies,  
    GetCourseTypes,  
    GetAllCourseLevels,  
    data,  
    loading,  
    error,  
  };  
};  