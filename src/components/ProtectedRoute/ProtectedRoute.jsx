import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const username = useSelector((state) => state.user.username);

  return username ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
