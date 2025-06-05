
import React, { useState } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Sidebar from '@/components/Layout/Sidebar';
import Header from '@/components/Layout/Header';
import DashboardOverview from '@/components/Dashboard/DashboardOverview';
import DataTable from '@/components/DataTables/DataTable';
import Analytics from '@/components/Analytics/Analytics';
import Calendar from '@/components/Calendar/Calendar';
import KanbanBoard from '@/components/Kanban/KanbanBoard';
import ThemeSelector from '@/components/Themes/ThemeSelector';
import Settings from '@/components/Settings/Settings';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'tables':
        return <DataTable />;
      case 'charts':
        return <Analytics />;
      case 'calendar':
        return <Calendar />;
      case 'kanban':
        return <KanbanBoard />;
      case 'themes':
        return <ThemeSelector />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 flex w-full h-screen overflow-hidden">
        {/* Fixed Sidebar */}
        <div className="flex-shrink-0">
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isCollapsed={sidebarCollapsed}
            setIsCollapsed={setSidebarCollapsed}
          />
        </div>

        {/* Scrollable Main Content */}
        <div className="flex-1 flex flex-col min-w-0 h-full">
          {/* Fixed Header */}
          <div className="flex-shrink-0">
            <Header />
          </div>

          {/* Scrollable Page Content */}
          <main className="flex-1 overflow-y-auto p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
