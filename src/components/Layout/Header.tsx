import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Bell, Search, User, Palette, Linkedin, Github } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const themeClasses = {
    blue: 'from-blue-50 to-blue-100 border-blue-200',
    purple: 'from-purple-50 to-purple-100 border-purple-200',
    green: 'from-green-50 to-green-100 border-green-200',
    orange: 'from-orange-50 to-orange-100 border-orange-200',
  };

  const accentClasses = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
  };

  const themes = [
    { id: 'blue', name: 'Blue Ocean', color: 'bg-blue-500' },
    { id: 'purple', name: 'Purple Galaxy', color: 'bg-purple-500' },
    { id: 'green', name: 'Green Forest', color: 'bg-green-500' },
    { id: 'orange', name: 'Orange Sunset', color: 'bg-orange-500' },
  ];

  return (
    <header className={`bg-gradient-to-r ${themeClasses[theme]} border-b ${themeClasses[theme].split(' ')[2]} backdrop-blur-xl`}>
      <div className="flex flex-wrap justify-between items-center px-6 py-4 gap-y-4">
        
        {/* Left Section: Search + Social Links */}
        <div className="flex items-center gap-4 flex-1 min-w-[250px]">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-10 pr-4 py-2 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm"
            />
          </div>

          <div className="flex gap-2">
            <a
              href="https://github.com/Aryan-dev-enth/kanban-admin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-900 to-black text-white p-2 rounded-md hover:scale-105 hover:shadow-lg transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-singh-459b6b225/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-2 rounded-md hover:scale-105 hover:shadow-lg transition-all"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Selector */}
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-gray-600" />
            <Select onValueChange={setTheme}>
              <SelectTrigger className="w-auto flex items-center justify-center bg-white/50 border-white/20">
                <div className="flex items-center justify-center gap-2">
                  <SelectValue placeholder="Theme" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {themes.map((themeOption) => (
                  <SelectItem key={themeOption.id} value={themeOption.id}>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${themeOption.color}`} />
                      <span>{themeOption.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-white/20 rounded-xl transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className={`absolute -top-1 -right-1 w-3 h-3 ${accentClasses[theme]} rounded-full`} />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 px-3 py-2 hover:bg-white/20 rounded-xl transition-colors cursor-pointer">
            <div className={`w-8 h-8 ${accentClasses[theme]} rounded-full flex items-center justify-center`}>
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-800">Aryan Singh</div>
              <div className="text-gray-500 text-xs">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
