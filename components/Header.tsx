'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { TrendingUp } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-gray-800 bg-surface/50 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-bg" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">LoopLab</h1>
              <p className="text-xs text-muted">Yield Optimization</p>
            </div>
          </div>
          
          <Wallet>
            <ConnectWallet className="bg-gradient-gold text-bg font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-all duration-200">
              <Avatar className="w-6 h-6" />
              <Name className="font-semibold" />
            </ConnectWallet>
          </Wallet>
        </div>
      </div>
    </header>
  );
}
