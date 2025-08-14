import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';
import Login from '../components/Login';

const PrivateRoutes = () => {
    const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes
