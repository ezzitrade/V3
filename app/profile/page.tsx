"use client";

import React from "react";
import { useGameState } from "@/context/GameStateContext";

export default function ProfilePage() {
  const { warEnergy, totalContributions, buildingLevel, characterId } = useGameState();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-10">
        <header className="space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
            Profile · Commander
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            الملف{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
              الشخصي
            </span>{" "}
            ديالك داخل EZZI WORLD.
          </h1>
          <p className="max-w-2xl text-sm text-slate-300/90 md:text-base">
            هاد الصفحة كتجمع أهم الأرقام ديالك داخل اللعبة off-chain: War Energy, level ديال المدينة،
            و progress العام.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-cyan-500/40 bg-slate-950/90 p-4 md:p-5">
            <div className="text-[0.7rem] uppercase tracking-[0.3em] text-cyan-300/80">
              Core stats
            </div>
            <div className="mt-2 grid gap-3 text-sm text-slate-100 md:text-[0.9rem]">
              <div className="flex items-center justify-between">
                <span>War Energy</span>
                <span className="font-mono text-cyan-200">{warEnergy.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Total contributions</span>
                <span className="font-mono text-emerald-200">
                  {totalContributions.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>City level</span>
                <span className="font-mono text-fuchsia-200">Lv {buildingLevel}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-700/80 bg-slate-950/90 p-4 md:p-5">
            <div className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
              Commander identity
            </div>
            <p className="mt-2 text-sm text-slate-200/90 md:text-[0.9rem]">
              حالياً،{" "}
              <span className="text-cyan-200">
                {characterId ? `Playing as: ${characterId}` : "ما زال ما إخترتيش شخصية محددة"}
              </span>
              . داخل النسخة on-chain، هاد المعطيات غادي ترتبط مباشرة بـ NFT الشخصية و الـ wallet ديالك.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
