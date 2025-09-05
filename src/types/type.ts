export interface User {
  id: string;
  name: string;
  email: string;
  role: 'employee' | 'super_admin' | 'master_admin';
  avatar?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  path: string;
  roles: ('employee' | 'super_admin' | 'master_admin')[];
  badge?: number;
  subItems?: NavItem[];
}