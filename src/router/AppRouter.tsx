import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Page/Dashbaord/Layout/Layout';
import {  getAllRoutes, getDashboardComponent } from './routes';
import type { User } from '../types/type';
import LoadingSpinner from '../Common/LoadingSpinner';

interface AppRouterProps {
  user: User;
}

const AppRouter: React.FC<AppRouterProps> = ({ user }) => {
  const allRoutes = getAllRoutes();
  const userRoutes = allRoutes.filter(route => route.roles.includes(user.role));
  const DashboardComponent = getDashboardComponent(user.role);

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* Main layout routes */}
          <Route path="/" element={<Layout user={user} />}>
            {/* Dynamic dashboard based on role */}
            <Route 
              path="/dashboard" 
              element={<DashboardComponent />} 
            />
            
            {/* Render user-specific routes */}
            {userRoutes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>
          
          {/* 404 catch-all */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;