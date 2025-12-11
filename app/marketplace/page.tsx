'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { GameStateProvider } from '@/context/GameStateContext';
import { MarketplaceGrid } from '@/components/MarketplaceGrid';

export default function MarketplacePage() {
  return (
    <GameStateProvider>
      <Navbar />
      <main className="mx-auto mt-6 max-w-6xl px-4 pb-10">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Genesis Marketplace
            </div>
            <h1 className="text-xl font-semibold text-slate-50 sm:text-2xl">Avatars & Off‑chain boosts</h1>
            <p className="mt-2 text-xs text-slate-300">
              Buy avatars using off‑chain Ezzi. When the token goes live on Solana, your inventory becomes bridge‑ready
              NFTs.
            </p>
          </div>
        </header>
        <MarketplaceGrid />
      </main>
    </GameStateProvider>
  );
}
