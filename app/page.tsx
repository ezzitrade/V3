'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { PresaleCapsulesStrip } from '@/components/PresaleCapsulesStrip';
import { GameStateProvider, useGameState } from '@/context/GameStateContext';
import { MarketplaceGrid } from '@/components/MarketplaceGrid';

function Hero() {
  const { walletAddress, warEnergy, ezziCoins, connectDummyWallet } = useGameState();

  return (
    <section className="mx-auto mt-8 max-w-6xl px-4">
      <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/80 px-3 py-1 text-[11px] text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            OFF‑CHAIN GENESIS SEASON · LIVE
          </div>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Build your avatar. Charge the <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">War of Realms</span>.
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-300">
            Ezzi World is a Web3‑native strategy universe where puzzles, mining loops and city upgrades all feed a single
            global warEnergy meter. Start off‑chain, then bridge to Solana when the token goes live.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <Link
              href="/game"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:brightness-110"
            >
              Enter War Room
            </Link>
            <Link
              href="/marketplace"
              className="rounded-full border border-cyan-500/40 bg-slate-900/80 px-4 py-2 font-medium text-cyan-200 hover:bg-slate-800/80"
            >
              Browse Genesis Avatars
            </Link>
            <button
              onClick={() => connectDummyWallet()}
              className="ml-auto inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-1.5 text-[11px] text-slate-200 hover:border-cyan-500/60"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {walletAddress ? walletAddress : 'Connect demo wallet'}
            </button>
          </div>
          <dl className="mt-6 grid max-w-xl grid-cols-3 gap-3 text-[11px]">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
              <dt className="text-slate-400">warEnergy charged</dt>
              <dd className="mt-1 text-sm font-semibold text-cyan-300">{warEnergy.toLocaleString()}</dd>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
              <dt className="text-slate-400">Off‑chain Ezzi</dt>
              <dd className="mt-1 text-sm font-semibold text-fuchsia-300">{ezziCoins.toLocaleString()}</dd>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
              <dt className="text-slate-400">Phase</dt>
              <dd className="mt-1 text-sm font-semibold text-emerald-300">Genesis Simulation</dd>
            </div>
          </dl>
        </div>
        <div className="glass-panel relative overflow-hidden border-cyan-500/40 bg-gradient-to-br from-cyan-900/40 via-slate-950 to-fuchsia-900/40 p-5">
          <div className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="relative space-y-3 text-xs text-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">War Console</span>
              <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300">
                Off‑chain only · no risk
              </span>
            </div>
            <div className="grid gap-3 text-[11px]">
              <div className="rounded-2xl border border-cyan-500/40 bg-slate-950/80 p-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-cyan-200">Mystic Mountains</span>
                  <span className="text-[10px] text-cyan-400">Puzzle intel</span>
                </div>
                <p className="mt-1 text-slate-300">
                  Solve pattern‑based grids that stream encrypted signals to your Realm&apos;s warEnergy.
                </p>
              </div>
              <div className="rounded-2xl border border-orange-500/40 bg-slate-950/80 p-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-orange-200">Inferno Isle</span>
                  <span className="text-[10px] text-orange-400">Mining loops</span>
                </div>
                <p className="mt-1 text-slate-300">
                  Spin lava rigs to generate shards, earn Ezzi and unlock better NFT miners later on Solana.
                </p>
              </div>
              <div className="rounded-2xl border border-fuchsia-500/40 bg-slate-950/80 p-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-fuchsia-200">Neon Nexus</span>
                  <span className="text-[10px] text-fuchsia-400">City upgrades</span>
                </div>
                <p className="mt-1 text-slate-300">
                  Invest energy into buildings that permanently boost every action you and your faction perform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PresaleCapsulesStrip />
      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="glass-panel border-slate-700/70 p-4 text-xs text-slate-300">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-400">1 · Off‑chain Genesis</h2>
          <p className="mt-2">
            All actions right now are simulation‑only. You build your reputation, avatars and warEnergy before main
            token launch.
          </p>
        </div>
        <div className="glass-panel border-slate-700/70 p-4 text-xs text-slate-300">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-400">2 · Solana Launch</h2>
          <p className="mt-2">
            Capsule + avatar ownership, warEnergy and your off‑chain Ezzi snapshot into a Solana contract & liquidity
            pool.
          </p>
        </div>
        <div className="glass-panel border-slate-700/70 p-4 text-xs text-slate-300">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-400">3 · Live War Seasons</h2>
          <p className="mt-2">
            Seasonal PvP, Realm‑vs‑Realm goals, and protocol rewards for the most engaged commanders.
          </p>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-cyan-400">GENESIS AVATAR SPOTLIGHT</h2>
        <MarketplaceGrid />
      </section>
      <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 py-4 text-[11px] text-slate-500">
        <span>© {new Date().getFullYear()} Ezzi World · Off‑chain Genesis Prototype</span>
        <div className="flex flex-wrap items-center gap-3">
          <a href="https://x.com/Ezzitrade" target="_blank" className="hover:text-cyan-300">
            Twitter / X
          </a>
          <a href="https://discord.com/invite/mPMzZ6CC" target="_blank" className="hover:text-cyan-300">
            Discord
          </a>
          <a href="https://t.me/ezziworld" target="_blank" className="hover:text-cyan-300">
            Telegram
          </a>
        </div>
      </footer>
    </section>
  );
}

export default function LandingPage() {
  return (
    <GameStateProvider>
      <Navbar />
      <Hero />
    </GameStateProvider>
  );
}
