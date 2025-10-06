'use client';

import { Activity, TrendingUp, AlertTriangle, Plus } from 'lucide-react';

interface Position {
  id: string;
  strategy: string;
  collateral: string;
  borrowed: string;
  apy: string;
  health: number;
  profit: string;
  status: 'active' | 'warning' | 'critical';
}

const mockPositions: Position[] = [
  {
    id: '1',
    strategy: 'DeFi Stable Looping',
    collateral: '5,000 USDC',
    borrowed: '3,750 USDC',
    apy: '22.4%',
    health: 2.4,
    profit: '+$142',
    status: 'active',
  },
  {
    id: '2',
    strategy: 'Conservative Yield',
    collateral: '3,200 USDT',
    borrowed: '2,100 USDT',
    apy: '18.2%',
    health: 3.1,
    profit: '+$89',
    status: 'active',
  },
  {
    id: '3',
    strategy: 'Aggressive USDC Loop',
    collateral: '4,250 USDC',
    borrowed: '3,400 USDC',
    apy: '28.7%',
    health: 1.5,
    profit: '+$203',
    status: 'warning',
  },
];

export function ActivePositions() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">Active Positions</h2>
        </div>
        <button className="bg-gradient-gold text-bg font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-all duration-200 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Position
        </button>
      </div>

      <div className="space-y-4">
        {mockPositions.map((position) => (
          <div
            key={position.id}
            className={`glass-card p-6 rounded-lg transition-all duration-200 ${
              position.status === 'warning'
                ? 'border-warning/50 glow-accent'
                : position.status === 'critical'
                ? 'border-danger/50'
                : ''
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">{position.strategy}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted">Health Factor:</span>
                  <span
                    className={`font-bold ${
                      position.health >= 2
                        ? 'text-success'
                        : position.health >= 1.5
                        ? 'text-warning'
                        : 'text-danger'
                    }`}
                  >
                    {position.health.toFixed(1)}
                  </span>
                </div>
              </div>
              {position.status === 'warning' && (
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-warning/20 text-warning text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  Low Health
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <div className="text-sm text-muted mb-1">Collateral</div>
                <div className="font-semibold">{position.collateral}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-1">Borrowed</div>
                <div className="font-semibold">{position.borrowed}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-1">Current APY</div>
                <div className="font-semibold text-accent">{position.apy}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-1">Profit/Loss</div>
                <div className="font-semibold text-success flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {position.profit}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-surface hover:bg-surface/80 text-fg font-medium py-2 rounded-lg transition-all duration-200">
                Add Collateral
              </button>
              <button className="flex-1 bg-surface hover:bg-surface/80 text-fg font-medium py-2 rounded-lg transition-all duration-200">
                Withdraw
              </button>
              <button className="flex-1 bg-danger/20 hover:bg-danger/30 text-danger font-medium py-2 rounded-lg transition-all duration-200">
                Emergency Exit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
