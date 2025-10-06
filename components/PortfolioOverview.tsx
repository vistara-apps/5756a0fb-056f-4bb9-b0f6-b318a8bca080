'use client';

import { TrendingUp, DollarSign, Activity, Shield } from 'lucide-react';

export function PortfolioOverview() {
  const stats = [
    {
      label: 'Total Value Locked',
      value: '$12,450',
      change: '+8.2%',
      positive: true,
      icon: DollarSign,
    },
    {
      label: 'Current APY',
      value: '18.4%',
      change: '+2.1%',
      positive: true,
      icon: TrendingUp,
    },
    {
      label: 'Active Positions',
      value: '3',
      change: 'Healthy',
      positive: true,
      icon: Activity,
    },
    {
      label: 'Avg Health Factor',
      value: '2.4',
      change: 'Safe',
      positive: true,
      icon: Shield,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Portfolio Overview</h2>
        <div className="text-sm text-muted">Last updated: Just now</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="glass-card p-6 rounded-lg hover:bg-opacity-15 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    stat.positive ? 'text-success' : 'text-danger'
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Circular Progress Visualization */}
      <div className="glass-card p-8 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-64 h-64 mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="100"
                stroke="rgba(255, 215, 0, 0.1)"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="128"
                cy="128"
                r="100"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray="628"
                strokeDashoffset="157"
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffd700" />
                  <stop offset="100%" stopColor="#ffed4e" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-5xl font-bold gradient-text">126</div>
              <div className="text-sm text-muted mt-2">Total Positions</div>
              <div className="text-xs text-muted">Ecosystem Wide</div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Monad Farcaster</h3>
            <p className="text-sm text-muted">DeFi Lab • Looping Strategy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
