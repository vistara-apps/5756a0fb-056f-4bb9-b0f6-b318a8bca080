'use client';

import { useState } from 'react';
import { PortfolioOverview } from './PortfolioOverview';
import { StrategyLeaderboard } from './StrategyLeaderboard';
import { ActivePositions } from './ActivePositions';
import { QuickActions } from './QuickActions';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'strategies' | 'positions'>('overview');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'strategies', label: 'Strategies' },
          { id: 'positions', label: 'My Positions' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-gradient-gold text-bg'
                : 'glass-card text-muted hover:text-fg'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <PortfolioOverview />
          <QuickActions />
          <StrategyLeaderboard limit={3} />
        </div>
      )}

      {activeTab === 'strategies' && (
        <div className="space-y-8">
          <StrategyLeaderboard />
        </div>
      )}

      {activeTab === 'positions' && (
        <div className="space-y-8">
          <ActivePositions />
        </div>
      )}
    </div>
  );
}
