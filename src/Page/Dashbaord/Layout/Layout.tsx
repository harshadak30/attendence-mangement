import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X, Bell } from 'lucide-react';
import Sidebar from '../Sidebar';
import type { User } from '../../../types/type';

interface LayoutProps {
  user: User;
}

const Layout: React.FC<LayoutProps> = ({ user }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [, setCurrentTime] = useState(new Date());

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };


  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case 'employee':
        return 'Employee';
      case 'super_admin':
        return 'Admin';
      case 'master_admin':
        return 'master_Admin';
      default:
        return role;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-shrink-0">
        <Sidebar 
          user={user} 
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={toggleSidebar}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" 
            onClick={toggleMobileSidebar} 
          />
          <div className="relative flex flex-col w-64 bg-white shadow-xl">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={toggleMobileSidebar}
                className="rounded-md text-gray-300 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <X size={24} />
              </button>
            </div>
            <Sidebar user={user} />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileSidebar}
                className="lg:hidden text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
              >
                <Menu size={24} />
              </button>

              {/* Desktop Toggle Button */}
              <button
                onClick={toggleSidebar}
                className="hidden lg:block text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
              >
                {isSidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
              </button>

              {/* Mobile Logo */}
              <div className="lg:hidden flex items-center space-x-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">
                  A
                </div>
                <h1 className="text-lg font-bold text-gray-900">AttendEase</h1>
              </div>

              {/* Desktop Breadcrumb/Page Title */}
              <div className="hidden lg:block">
                <h1 className="text-xl font-semibold text-gray-900">
                  Welcome back, {user.name}!
                </h1>
            
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
            

              {/* Notifications */}
              <button className="relative p-2 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full">
                <Bell size={20} />
                {/* Notification Badge */}
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 transform translate-x-1/2 -translate-y-1/2"></span>
              </button>

              

              {/* User Avatar */}
              <div className="flex items-center space-x-3">
                <div className="hidden sm:flex flex-col items-end">
                  <div className="text-sm font-medium text-gray-900 truncate max-w-[120px]">
                    {user.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {getRoleDisplayName(user.role)}
                  </div>
                </div>
                <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="h-full">
            <Outlet />
          </div>
        </main>

        {/* Footer (Optional) */}
        <footer className="bg-white border-t border-gray-200 px-4 lg:px-6 py-3">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              {/* <span>© 2024 AttendEase</span>
              <span>•</span>
              <span>MaitriAI Solutions</span> */}
            </div>
            <div className="flex items-center space-x-4">
              {/* <span>Version 1.0.0</span>
              <span>•</span> */}
              <span className="flex items-center space-x-1">
                {/* <div className="w-2 h-2 bg-green-400 rounded-full"></div> */}
                 <span>© 2025 AttendEase</span>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;