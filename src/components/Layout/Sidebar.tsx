
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  LayoutDashboard, 
  Table, 
  BarChart3, 
  Calendar,
  Kanban,
  Settings,
  Palette,
  ChevronRight,
  Bell,
  User,
  Search,
  LogOut,
  Crown
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const Sidebar = ({ activeTab, setActiveTab, isCollapsed, setIsCollapsed }: SidebarProps) => {
  const { theme } = useTheme();

  const themeClasses = {
    blue: 'from-blue-600 to-blue-800 border-blue-500/20',
    purple: 'from-purple-600 to-purple-800 border-purple-500/20',
    green: 'from-green-600 to-green-800 border-green-500/20',
    orange: 'from-orange-600 to-orange-800 border-orange-500/20'
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'tables', label: 'Data Tables', icon: Table, badge: '12' },
    { id: 'charts', label: 'Analytics', icon: BarChart3, badge: null },
    { id: 'calendar', label: 'Calendar', icon: Calendar, badge: '3' },
    { id: 'kanban', label: 'Kanban Board', icon: Kanban, badge: '5' },
    { id: 'themes', label: 'Themes', icon: Palette, badge: null },
    { id: 'settings', label: 'Settings', icon: Settings, badge: null },
  ];

  const userStats = [
    { label: 'Projects', value: '24' },
    { label: 'Tasks', value: '67' },
    { label: 'Messages', value: '12' }
  ];

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-72'} transition-all duration-300 h-full bg-gradient-to-b ${themeClasses[theme]} backdrop-blur-xl border-r border-white/10 relative flex flex-col`}>
      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg border hover:scale-110 transition-transform z-10"
      >
        <ChevronRight className={`w-4 h-4 transition-transform ${isCollapsed ? '' : 'rotate-180'}`} />
      </button>

      {/* Header Section */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Crown className="w-6 h-6 text-yellow-300" />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="text-xl font-bold text-white">Celebal Admin</h2>
              <p className="text-white/60 text-xs">Professional Dashboard</p>
            </div>
          )}
        </div>

        {/* Search Bar */}
        {!isCollapsed && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
            />
          </div>
        )}
      </div>

      {/* User Profile Section */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white/20"></div>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-medium text-sm truncate"> Aryan Singh</h3>
              <p className="text-white/60 text-xs">Product Manager</p>
            </div>
          )}
          {!isCollapsed && (
            <button className="p-1 hover:bg-white/10 rounded-lg transition-colors relative">
              <Bell className="w-4 h-4 text-white/70" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full"></div>
            </button>
          )}
        </div>

        {/* User Stats */}
        {!isCollapsed && (
          <div className="mt-3 grid grid-cols-3 gap-2">
            {userStats.map((stat, index) => (
              <div key={index} className="text-center py-2 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-white font-semibold text-sm">{stat.value}</div>
                <div className="text-white/60 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2">
        <div className="mb-4">
          {!isCollapsed && (
            <h4 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">Main Menu</h4>
          )}
          
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 hover:bg-white/10 group relative ${
                  isActive ? 'bg-white/20 text-white shadow-lg' : 'text-white/70 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}`} />
                {!isCollapsed && (
                  <>
                    <span className="font-medium flex-1 text-left">{item.label}</span>
                    {item.badge && (
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
                {isActive && (
                  <div className="absolute right-2 w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-white/10">
        {!isCollapsed && (
          <div className="mb-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/70 text-xs">Storage Usage</span>
              <span className="text-white text-xs font-medium">67%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{ width: '67%' }}></div>
            </div>
            <p className="text-white/60 text-xs mt-1">8.2 GB of 12 GB used</p>
          </div>
        )}
        
        <button className="w-full flex items-center gap-3 px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
          <LogOut className="w-4 h-4" />
          {!isCollapsed && <span className="text-sm">Sign Out</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
