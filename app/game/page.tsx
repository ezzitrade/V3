'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { GameStateProvider, useGameState } from '@/context/GameStateContext';
import { PuzzlePanel, MiningPanel, BuildingPanel } from '@/components/GamePanels';

function GameShell() {
  const { walletAddress, warEnergy, ezziCoins, boosts, ownedCharacters } = useGameState();

  return (
    <>
      <Navbar />
      <main className="mx-auto mt-6 max-w-6xl px-4 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400">War Room</div>
            <h1 className="text-xl font-semibold text-slate-50 sm:text-2xl">Command Center · Off‑chain</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-300">
              Wallet: {walletAddress ?? 'demo'}
            </span>
            <span className="rounded-full border border-cyan-500/40 bg-slate-900/80 px-3 py-1 text-cyan-200">
              warEnergy: {warEnergy.toLocaleString()}
            </span>
            <span className="rounded-full border border-fuchsia-500/40 bg-slate-900/80 px-3 py-1 text-fuchsia-200">
              Ezzi: {ezziCoins.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-[3fr,2fr]">
          <div className="space-y-4">
            <PuzzlePanel />
            <MiningPanel />
          </div>
          <div className="space-y-4">
            <BuildingPanel />
            <section className="glass-panel border-slate-700/70 bg-slate-950/80 p-4 text-[11px] text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Avatar Boosts
                </span>
                <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-400">
                  {ownedCharacters.length} active
                </span>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                  <div className="text-[10px] text-slate-400">Puzzle multiplier</div>
                  <div className="mt-1 text-sm font-semibold text-cyan-300">
                    × {boosts.puzzleMultiplier.toFixed(2)}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                  <div className="text-[10px] text-slate-400">Mining multiplier</div>
                  <div className="mt-1 text-sm font-semibold text-orange-300">
                    × {boosts.miningMultiplier.toFixed(2)}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                  <div className="text-[10px] text-slate-400">Building multiplier</div>
                  <div className="mt-1 text-sm font-semibold text-fuchsia-300">
                    × {boosts.buildingMultiplier.toFixed(2)}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                  <div className="text-[10px] text-slate-400">Passive warEnergy</div>
                  <div className="mt-1 text-sm font-semibold text-emerald-300">
                    +{boosts.passiveEnergyPerHour.toFixed(1)} / hour
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                All numbers above are simulated and stored in your browser. When the on‑chain version launches, we
                snapshot your off‑chain profile.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default function GamePage() {
  return (
    <GameStateProvider>
      <GameShell />
    </GameStateProvider>
  );
}
