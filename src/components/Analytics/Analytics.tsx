
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';

const Analytics = () => {
  const { theme } = useTheme();

  const monthlyData = [
    { month: 'Jan', users: 1200, revenue: 24000, orders: 450 },
    { month: 'Feb', users: 1100, revenue: 22000, orders: 420 },
    { month: 'Mar', users: 1800, revenue: 36000, orders: 680 },
    { month: 'Apr', users: 1900, revenue: 38000, orders: 720 },
    { month: 'May', users: 2100, revenue: 42000, orders: 800 },
    { month: 'Jun', users: 2400, revenue: 48000, orders: 900 },
  ];

  const categoryData = [
    { name: 'Electronics', value: 4500, color: '#3B82F6' },
    { name: 'Clothing', value: 3200, color: '#8B5CF6' },
    { name: 'Home & Garden', value: 2800, color: '#10B981' },
    { name: 'Sports', value: 2100, color: '#F97316' },
    { name: 'Books', value: 1500, color: '#EF4444' },
  ];

  const themeColors = {
    blue: '#3B82F6',
    purple: '#8B5CF6',
    green: '#10B981',
    orange: '#F97316'
  };

  const themeClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
        <p className="text-gray-600">Comprehensive insights into your business performance and growth metrics.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Revenue', value: '$248,000', change: '+12.5%', icon: DollarSign, color: 'blue' },
          { title: 'Active Users', value: '12,450', change: '+8.2%', icon: Users, color: 'purple' },
          { title: 'Growth Rate', value: '23.1%', change: '+3.7%', icon: TrendingUp, color: 'green' },
          { title: 'Conversion', value: '4.2%', change: '+1.1%', icon: BarChart3, color: 'orange' },
        ].map((metric, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${
                metric.color === 'blue' ? 'from-blue-500 to-blue-600' :
                metric.color === 'purple' ? 'from-purple-500 to-purple-600' :
                metric.color === 'green' ? 'from-green-500 to-green-600' :
                'from-orange-500 to-orange-600'
              } shadow-lg group-hover:scale-110 transition-transform`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                {metric.change}
              </span>
            </div>
            <div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{metric.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Revenue Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id={`colorRevenue-${theme}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={themeColors[theme]} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={themeColors[theme]} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
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

        {/* Users Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Users className="w-5 h-5" />
            User Growth
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke={themeColors[theme]} 
                strokeWidth={3}
                dot={{ fill: themeColors[theme], strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: themeColors[theme], strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Full Width Charts */}
      <div className="space-y-6">
        {/* Category Performance */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Sales by Category
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={categoryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
              <Bar 
                dataKey="value" 
                fill={themeColors[theme]} 
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Best Performing Month', value: 'June 2024', subtext: '+15% from May' },
              { label: 'Top Category', value: 'Electronics', subtext: '$4,500 revenue' },
              { label: 'Average Order Value', value: '$89.50', subtext: '+5.2% this month' },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <h4 className="text-sm font-medium text-gray-600 mb-2">{item.label}</h4>
                <p className="text-xl font-bold text-gray-900 mb-1">{item.value}</p>
                <p className="text-sm text-gray-500">{item.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
