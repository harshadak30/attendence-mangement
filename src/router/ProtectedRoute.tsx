import React from 'react';
import { Navigate } from 'react-router-dom';
import type { User } from '../types/type';

interface ProtectedRouteProps {
  children: React.ReactNode;
  user: User;
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  user, 
  allowedRoles 
}) => {
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
