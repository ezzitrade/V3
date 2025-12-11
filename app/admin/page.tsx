'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { GameStateProvider } from '@/context/GameStateContext';
import { AdminCharacterEditor } from '@/components/AdminCharacterEditor';

export default function AdminPage() {
  return (
    <GameStateProvider>
      <Navbar />
      <main className="mx-auto mt-6 max-w-6xl px-4 pb-10">
        <header className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-400">
              Local Admin Tools
            </div>
            <h1 className="text-xl font-semibold text-slate-50 sm:text-2xl">Avatar & Marketplace Controls</h1>
            <p className="mt-2 text-xs text-slate-300">
              This page never touches a blockchain. It just writes to your browser so you can prototype new characters
              and see how they feel in the marketplace grid.
            </p>
          </div>
          <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-[11px] text-amber-200">
            For founders only · safe to test
          </span>
        </header>
        <AdminCharacterEditor />
      </main>
    </GameStateProvider>
  );
}
