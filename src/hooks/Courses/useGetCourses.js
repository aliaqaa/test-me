import React, { useEffect, useState } from "react";
import axiosInstance from "../../core/services/interceptor/Interceptor";

export const useGetCourses = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCoursesWithPagination = async ({query}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(
        "/Home/GetCoursesWithPagination",
        {
          params: {
            query,
          },
        }
      );
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Fetching courses failed", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { getCoursesWithPagination, data, loading, error };
};
