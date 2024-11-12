import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard: React.FC = () => {
  const token = localStorage.getItem('token');

  return token ? <Outlet /> : <Navigate to="/auth/signin" />;
};

export default AuthGuard;
