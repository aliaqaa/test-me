import React from 'react';  
import { Outlet, Navigate } from 'react-router';  
import Cookies from 'js-cookie';
const ProtectedRoute = () => {  
    const isAuthenticated = Cookies.get('token');

    return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;  
};  

export default ProtectedRoute;  