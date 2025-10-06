'use client';

import { Trophy, Copy, TrendingUp, Users } from 'lucide-react';

interface Strategy {
  id: string;
  name: string;
  creator: string;
  apy: string;
  tvl: string;
  risk: 'Low' | 'Medium' | 'High';
  copies: number;
  performance: string;
}

const mockStrategies: Strategy[] = [
  {
    id: '1',
    name: 'DeFi Stable Looping',
    creator: '@degen_dave',
    apy: '22.4%',
    tvl: '$841k',
    risk: 'Low',
    copies: 156,
    performance: '+11.4%',
  },
  {
    id: '2',
    name: 'Aggressive USDC Loop',
    creator: '@yield_hunter',
    apy: '28.7%',
    tvl: '$523k',
    risk: 'Medium',
    copies: 89,
    performance: '+15.2%',
  },
  {
    id: '3',
    name: 'Conservative Yield',
    creator: '@safe_stacker',
    apy: '18.2%',
    tvl: '$1.2M',
    risk: 'Low',
    copies: 234,
    performance: '+8.9%',
  },
];

export function StrategyLeaderboard({ limit }: { limit?: number }) {
  const strategies = limit ? mockStrategies.slice(0, limit) : mockStrategies;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Trophy className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">Top Strategies</h2>
        </div>
        {limit && (
          <button className="text-sm text-accent hover:text-accent/80 transition-colors duration-200">
            View All →
          </button>
        )}
      </div>

      <div className="space-y-4">
        {strategies.map((strategy, index) => (
          <div
            key={strategy.id}
            className="glass-card p-6 rounded-lg hover:bg-opacity-15 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center font-bold text-bg text-xl">
                  #{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{strategy.name}</h3>
                  <p className="text-sm text-muted">by {strategy.creator}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  strategy.risk === 'Low'
                    ? 'bg-success/20 text-success'
                    : strategy.risk === 'Medium'
                    ? 'bg-warning/20 text-warning'
                    : 'bg-danger/20 text-danger'
                }`}
              >
                {strategy.risk} Risk
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <div className="text-sm text-muted mb-1">APY</div>
                <div className="text-xl font-bold text-accent">{strategy.apy}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-1">TVL</div>
                <div className="text-xl font-bold">{strategy.tvl}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-1">30d Return</div>
                <div className="text-xl font-bold text-success">{strategy.performance}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-1">Copies</div>
                <div className="text-xl font-bold flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {strategy.copies}
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-gold text-bg font-semibold py-3 rounded-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2">
              <Copy className="w-4 h-4" />
              Copy Strategy (0.1 MON)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
