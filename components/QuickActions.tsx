'use client';

import { Zap, Copy, Bell, BarChart3 } from 'lucide-react';

export function QuickActions() {
  const actions = [
    {
      icon: Zap,
      label: 'Deploy Loop',
      description: 'Start earning in 60 seconds',
      color: 'accent',
    },
    {
      icon: Copy,
      label: 'Copy Strategy',
      description: 'Follow top performers',
      color: 'primary',
    },
    {
      icon: Bell,
      label: 'Set Alerts',
      description: 'Never miss opportunities',
      color: 'warning',
    },
    {
      icon: BarChart3,
      label: 'View Analytics',
      description: 'Track your performance',
      color: 'success',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Quick Actions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.label}
              className="glass-card p-6 rounded-lg hover:bg-opacity-15 transition-all duration-200 text-left group"
            >
              <div className={`w-12 h-12 rounded-lg bg-${action.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <Icon className={`w-6 h-6 text-${action.color}`} />
              </div>
              <h3 className="font-semibold mb-1">{action.label}</h3>
              <p className="text-sm text-muted">{action.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
