
import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Plus, MoreHorizontal, User, Calendar, Flag } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  description: string;
  assignee: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  tags: string[];
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
  color: string;
}

const KanbanBoard = () => {
  const { theme } = useTheme();
  
  const [columns, setColumns] = useState<Column[]>([
    {
      id: 'todo',
      title: 'To Do',
      color: 'bg-gray-100',
      tasks: [
        {
          id: 1,
          title: 'Design System Updates',
          description: 'Update the design system components with new brand guidelines',
          assignee: 'Sarah Johnson',
          dueDate: '2024-06-20',
          priority: 'high',
          tags: ['Design', 'UI/UX']
        },
        {
          id: 2,
          title: 'API Documentation',
          description: 'Complete API documentation for v2.0 release',
          assignee: 'Mike Chen',
          dueDate: '2024-06-25',
          priority: 'medium',
          tags: ['Documentation', 'API']
        }
      ]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      color: 'bg-blue-100',
      tasks: [
        {
          id: 3,
          title: 'User Authentication',
          description: 'Implement OAuth 2.0 authentication system',
          assignee: 'Alex Rodriguez',
          dueDate: '2024-06-18',
          priority: 'high',
          tags: ['Backend', 'Security']
        },
        {
          id: 4,
          title: 'Mobile Responsive',
          description: 'Make the dashboard mobile responsive',
          assignee: 'Emma Davis',
          dueDate: '2024-06-22',
          priority: 'medium',
          tags: ['Frontend', 'Mobile']
        }
      ]
    },
    {
      id: 'review',
      title: 'In Review',
      color: 'bg-yellow-100',
      tasks: [
        {
          id: 5,
          title: 'Performance Optimization',
          description: 'Optimize application performance and loading times',
          assignee: 'David Wilson',
          dueDate: '2024-06-15',
          priority: 'medium',
          tags: ['Performance', 'Optimization']
        }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      color: 'bg-green-100',
      tasks: [
        {
          id: 6,
          title: 'Dashboard Layout',
          description: 'Complete the main dashboard layout design',
          assignee: 'Lisa Brown',
          dueDate: '2024-06-10',
          priority: 'high',
          tags: ['Design', 'Dashboard']
        },
        {
          id: 7,
          title: 'User Testing',
          description: 'Conduct user testing sessions for new features',
          assignee: 'Tom Wilson',
          dueDate: '2024-06-12',
          priority: 'low',
          tags: ['Testing', 'UX']
        }
      ]
    }
  ]);

  const themeClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600'
  };

  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  const priorityIcons = {
    low: '↓',
    medium: '→',
    high: '↑'
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Kanban Board</h1>
          <p className="text-gray-600">Organize and track your team's work with our interactive Kanban board.</p>
        </div>
        <button className={`px-6 py-3 bg-gradient-to-r ${themeClasses[theme]} text-white rounded-xl hover:shadow-lg transition-all duration-200 flex items-center gap-2 font-medium`}>
          <Plus className="w-4 h-4" />
          Add Task
        </button>
      </div>

      {/* Kanban Board */}
      <div className="overflow-x-auto pb-6">
        <div className="flex gap-6 min-w-max">
          {columns.map((column) => (
            <div key={column.id} className="w-80 flex-shrink-0">
              {/* Column Header */}
              <div className={`${column.color} rounded-t-2xl p-4 border-b border-white/50`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-gray-900">{column.title}</h3>
                    <span className="bg-white/50 text-gray-700 text-sm px-2 py-1 rounded-full font-medium">
                      {column.tasks.length}
                    </span>
                  </div>
                  <button className="p-1 hover:bg-white/20 rounded-lg transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Tasks */}
              <div className="bg-white rounded-b-2xl shadow-lg border border-gray-100 min-h-96">
                <div className="p-4 space-y-4">
                  {column.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer group hover:-translate-y-1"
                    >
                      {/* Task Header */}
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {task.title}
                        </h4>
                        <div className="flex items-center gap-1">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${priorityColors[task.priority]}`}>
                            {priorityIcons[task.priority]} {task.priority}
                          </span>
                        </div>
                      </div>

                      {/* Task Description */}
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {task.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {task.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Task Footer */}
                      <div className="flex items-center justify-between">
                        {/* Assignee */}
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 bg-gradient-to-br ${themeClasses[theme]} rounded-full flex items-center justify-center text-xs text-white font-medium`}>
                            {getInitials(task.assignee)}
                          </div>
                          <span className="text-xs text-gray-600 font-medium">{task.assignee.split(' ')[0]}</span>
                        </div>

                        {/* Due Date */}
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Add Task Button */}
                  <button className="w-full p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700">
                    <Plus className="w-4 h-4" />
                    <span className="font-medium">Add a task</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add Column */}
          <div className="w-80 flex-shrink-0">
            <button className="w-full h-20 border-2 border-dashed border-gray-200 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700">
              <Plus className="w-5 h-5" />
              <span className="font-medium">Add Column</span>
            </button>
          </div>
        </div>
      </div>

      {/* Board Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">Total Tasks</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">2</div>
            <div className="text-sm text-gray-600">In Progress</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <div className="text-sm text-gray-600">In Review</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">2</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
