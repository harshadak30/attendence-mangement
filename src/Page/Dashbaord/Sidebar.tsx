import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ChevronDown,
  ChevronRight,
  LogOut,
 
} from 'lucide-react';
import type  { User as UserType } from '../../types/type';
import { getRoutesByRole } from '../../router/routes';

interface SidebarProps {
  user: UserType;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  user, 
  isCollapsed = false, 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Get routes based on user role
  const navigationItems = getRoutesByRole(user.role);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case 'employee':
        return 'Employee';
      case 'super_admin':
        return 'Super Admin';
      case 'master_admin':
        return 'Master Admin';
      default:
        return role;
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'employee':
        return 'bg-blue-100 text-blue-800';
      case 'super_admin':
        return 'bg-purple-100 text-purple-800';
      case 'master_admin':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderNavItem = (item: any, level: number = 0) => {
    const hasSubItems = item.subRoutes && item.subRoutes.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const isItemActive = isActive(item.path);
    const filteredSubItems = item.subRoutes?.filter((subItem: any) =>
      subItem.roles.includes(user.role)
    );

    return (
      <div key={item.id} className="mb-1">
        <button
          onClick={() => {
            if (hasSubItems && filteredSubItems && filteredSubItems.length > 0) {
              toggleExpanded(item.id);
            } else {
              handleNavigation(item.path);
            }
          }}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
            isItemActive
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
          } ${level > 0 ? 'ml-4 border-l-2 border-gray-200 pl-6' : ''}`}
          title={isCollapsed ? item.label : undefined}
        >
          <div className="flex items-center space-x-3">
            <item.icon
              size={18}
              className={`${
                isItemActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'
              } transition-colors duration-200`}
            />
            {!isCollapsed && (
              <>
                <span className="truncate">{item.label}</span>
                {item.badge && item.badge > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                    {item.badge > 99 ? '99+' : item.badge}
                  </span>
                )}
              </>
            )}
          </div>
          
          {!isCollapsed && hasSubItems && filteredSubItems && filteredSubItems.length > 0 && (
            <div className="ml-auto">
              {isExpanded ? (
                <ChevronDown size={16} className="text-gray-400" />
              ) : (
                <ChevronRight size={16} className="text-gray-400" />
              )}
            </div>
          )}
        </button>

        {/* Sub-items */}
        {!isCollapsed && hasSubItems && isExpanded && filteredSubItems && (
          <div className="mt-1 space-y-1">
            {filteredSubItems.map((subItem: any) => renderNavItem(subItem, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`bg-white border-r border-gray-200 flex flex-col h-full transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">
            A
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-bold text-gray-900 truncate">AttendEase</h1>
              <div className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${getRoleBadgeColor(user.role)}`}>
                {getRoleDisplayName(user.role)}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* User Profile */}
      {/* {!isCollapsed && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <User size={20} className="text-gray-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
          </div>
        </div>
      )} */}

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigationItems.map(item => renderNavItem(item))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => {
            // Handle logout
            console.log('Logout clicked');
          }}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group ${
            isCollapsed ? 'justify-center' : ''
          }`}
          title={isCollapsed ? 'Logout' : undefined}
        >
          <LogOut size={18} className="text-gray-500 group-hover:text-red-500 transition-colors duration-200" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;