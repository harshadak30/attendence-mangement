import { lazy } from "react";
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Building2,
  UserCheck,
  ClipboardList,
} from "lucide-react";
import Dashboard from "../Page/Super-Admin/Dashboard";

// Lazy load components for code splitting
// const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const EmployeeDashboard = lazy(() => import("../Page/Employee/Dashbaord"));
const SuperAdminDashboard = lazy(() => import("../Page/Super-Admin/Dashboard"));
const MasterAdminDashboard = lazy(
  () => import("../Page/Master-Admin/Dashbaord")
);

// Master Admin Pages
const Companies = lazy(
  () => import("../Page/Master-Admin/Company/ComapniesDashbaord")
);

// Super Admin Pages
const Employees = lazy(
  () => import("../Page/Super-Admin/Employees/Employeespage")
);
const Holidays = lazy(() => import("../Page/Super-Admin/Holidays/Holidays"));

// Employee & Super Admin Pages
const Attendance = lazy(
  () => import("../Page/Super-Admin/Attendance/Attendance")
);
const LeaveRequests = lazy(
  () => import("../Page/Super-Admin/LeaveRequest/LeaveRquest")
);

// Employee Only Pages

const ApplyLeave = lazy(() => import("../Page/Employee/ApplyLeave/ApplyLeave"));
const LeaveHistory = lazy(
  () => import("../Page/Employee/LeaveHistory/LeaveHistory")
);

// export interface RouteConfig {
//   id: string;
//   path: string;
//   component: React.LazyExoticComponent<React.ComponentType<any>>;
//   label: string;
//   icon: React.ComponentType<{ size?: number; className?: string }>;
//   roles: ("employee" | "super_admin" | "master_admin")[];
//   badge?: number;
//   subRoutes?: RouteConfig[];
//   exact?: boolean;
// }

export interface RouteConfig {
  id: string;
  path: string;
  component: React.ComponentType<any> | React.LazyExoticComponent<React.ComponentType<any>>;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  roles: ("employee" | "super_admin" | "master_admin")[];
  badge?: number;
  subRoutes?: RouteConfig[];
  exact?: boolean;
}

export const routes: RouteConfig[] = [
  {
    id: "dashboard",
    path: "/dashboard",
    component: Dashboard,
    label: "Dashboard",
    icon: LayoutDashboard,
    roles: ["employee", "super_admin", "master_admin"],
    exact: true,
  },
  // Master Admin Routes
  {
    id: "companies",
    path: "/companies",
    component: Companies,
    label: "Companies",
    icon: Building2,
    roles: ["master_admin"],
  },

  // Super Admin Routes
  {
    id: "employees",
    path: "/employees",
    component: Employees,
    label: "Employees",
    icon: Users,
    roles: ["super_admin"],
  },
  {
    id: "holidays",
    path: "/holidays",
    component: Holidays,
    label: "Holidays",
    icon: Calendar,
    roles: ["super_admin"],
  },
  {
    id: "attendance",
    path: "/attendance",
    component: Attendance,
    label: "Attendance",
    icon: UserCheck,
    roles: ["super_admin"],
  },
  {
    id: "leave-requests",
    path: "/leave-requests",
    component: LeaveRequests,
    label: "Leave Requests",
    icon: ClipboardList,
    roles: ["super_admin"],
  },
  {
    id: "apply-leave",
    path: "/apply-leave",
    component: ApplyLeave,
    label: "Apply Leave",
    icon: Calendar,
    roles: ["employee"],
  },
  {
    id: "leave-history",
    path: "/leave-history",
    component: LeaveHistory,
    label: "Leave History",
    icon: FileText,
    roles: ["employee"],
  },
];

// Helper function to get dashboard component based on role
export const getDashboardComponent = (role: string) => {
  switch (role) {
    case "employee":
      return EmployeeDashboard;
    case "super_admin":
      return SuperAdminDashboard;
    case "master_admin":
      return MasterAdminDashboard;
    default:
      return Dashboard;
  }
};

// Helper function to filter routes by role
export const getRoutesByRole = (userRole: string): RouteConfig[] => {
  return routes.filter((route) => route.roles.includes(userRole as any));
};

// Helper function to get all routes (including sub-routes) for React Router
export const getAllRoutes = (): RouteConfig[] => {
  const allRoutes: RouteConfig[] = [];

  const addRoute = (route: RouteConfig) => {
    allRoutes.push(route);
    if (route.subRoutes) {
      route.subRoutes.forEach(addRoute);
    }
  };

  routes.forEach(addRoute);
  return allRoutes;
};
