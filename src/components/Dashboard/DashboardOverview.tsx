
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import MetricCard from './MetricCard';
import { Users, DollarSign, ShoppingCart, TrendingUp, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

const DashboardOverview = () => {
  const { theme } = useTheme();

  const metrics = [
    { title: 'Total Users', value: '2,845', change: '+12.5%', icon: Users, trend: 'up' as const },
    { title: 'Revenue', value: '$45,720', change: '+8.2%', icon: DollarSign, trend: 'up' as const },
    { title: 'Orders', value: '1,239', change: '-3.1%', icon: ShoppingCart, trend: 'down' as const },
    { title: 'Growth', value: '23.5%', change: '+5.4%', icon: TrendingUp, trend: 'up' as const },
  ];

  const chartData = [
    { name: 'Jan', value: 400, revenue: 2400 },
    { name: 'Feb', value: 300, revenue: 1398 },
    { name: 'Mar', value: 500, revenue: 3800 },
    { name: 'Apr', value: 700, revenue: 3908 },
    { name: 'May', value: 600, revenue: 4800 },
    { name: 'Jun', value: 800, revenue: 3800 },
  ];

  const pieData = [
    { name: 'Desktop', value: 45, color: '#3B82F6' },
    { name: 'Mobile', value: 35, color: '#8B5CF6' },
    { name: 'Tablet', value: 20, color: '#10B981' },
  ];

  const themeColors = {
    blue: '#3B82F6',
    purple: '#8B5CF6',
    green: '#10B981',
    orange: '#F97316'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={`colorRevenue-${theme}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={themeColors[theme]} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={themeColors[theme]} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke={themeColors[theme]} 
                strokeWidth={3}
                fillOpacity={1} 
                fill={`url(#colorRevenue-${theme})`} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Traffic Sources</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {pieData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm font-medium text-gray-600">{item.name}</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{item.value}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { user: 'Sarah Johnson', action: 'completed a purchase', time: '2 minutes ago', avatar: 'SJ' },
            { user: 'Mike Chen', action: 'signed up for premium', time: '15 minutes ago', avatar: 'MC' },
            { user: 'Emma Davis', action: 'left a 5-star review', time: '1 hour ago', avatar: 'ED' },
            { user: 'Alex Rodriguez', action: 'updated their profile', time: '3 hours ago', avatar: 'AR' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors">
              <div className={`w-10 h-10 bg-gradient-to-br ${themeColors[theme] === '#3B82F6' ? 'from-blue-500 to-blue-600' : themeColors[theme] === '#8B5CF6' ? 'from-purple-500 to-purple-600' : themeColors[theme] === '#10B981' ? 'from-green-500 to-green-600' : 'from-orange-500 to-orange-600'} rounded-full flex items-center justify-center text-white font-medium text-sm`}>
                {activity.avatar}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
