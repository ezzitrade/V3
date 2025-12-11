'use client';

import React from 'react';
import { useGameState } from '@/context/GameStateContext';

const TIERS = [
  { id: 'early', label: 'EARLY CAPSULES', priceUsd: 20, supply: 200 },
  { id: 'mid', label: 'MID WAVE', priceUsd: 32, supply: 500 },
  { id: 'late', label: 'FINAL WAVE', priceUsd: 44, supply: 800 }
];

export function PresaleCapsulesStrip() {
  const { ezziCoins } = useGameState();

  return (
    <div className="glass-panel mt-6 border-cyan-500/40 bg-slate-950/80">
      <div className="flex flex-col gap-4 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Genesis Capsule Presale
          </div>
          <p className="mt-1 text-xs text-slate-300 sm:text-sm">
            Stake your spot before main token launch. Every capsule mints a booster avatar and permanent war energy
            multiplier.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs">
          {TIERS.map(t => (
            <div
              key={t.id}
              className="rounded-2xl border border-cyan-500/30 bg-slate-900/80 px-3 py-2 text-center shadow shadow-cyan-500/20"
            >
              <div className="text-[10px] text-slate-400">{t.label}</div>
              <div className="font-semibold text-cyan-300">${t.priceUsd}</div>
              <div className="text-[10px] text-slate-500">{t.supply} CAPS</div>
            </div>
          ))}
          <div className="ml-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-2 text-center text-[11px] font-semibold text-slate-950 shadow-lg shadow-cyan-500/40">
            YOUR OFF-CHAIN BALANCE · {ezziCoins.toLocaleString()} EZZI
          </div>
        </div>
      </div>
    </div>
  );
}
