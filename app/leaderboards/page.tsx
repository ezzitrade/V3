export const dynamic = "force-static";

import React from "react";

const mockGlobal = [
  { rank: 1, name: "NeonWhale", energy: 12850 },
  { rank: 2, name: "SolWizard", energy: 11640 },
  { rank: 3, name: "CrystalFox", energy: 10420 },
  { rank: 4, name: "InfernoRider", energy: 9300 },
  { rank: 5, name: "MountZen", energy: 8820 },
];

const mockRealms = [
  { realm: "Mystic Mountains", energy: 41230 },
  { realm: "Crystal Canyon", energy: 38910 },
  { realm: "Neon Nexus", energy: 37780 },
  { realm: "Inferno Isle", energy: 32240 },
  { realm: "Shadow Sanctum", energy: 29870 },
];

export default function LeaderboardsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-10">
        <header className="space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-cyan-300/80">
            Leaderboards · War Energy
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            شكون{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
              أقوى
            </span>{" "}
            Commanders فـ EZZI WORLD؟
          </h1>
          <p className="max-w-2xl text-sm text-slate-300/90 md:text-base">
            هاد الأرقام demo off-chain، ولكن design ديال الصفحة جاهز باش يتربط مستقبلاً ب API حقيقي أو
            on-chain indexer.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-6">
          <div className="rounded-2xl border border-cyan-500/40 bg-slate-950/90 p-4 md:p-5">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-cyan-300/80">
                  Global players
                </p>
                <h2 className="mt-1 text-sm font-semibold text-slate-50 md:text-base">
                  Top War Energy grinders
                </h2>
              </div>
              <div className="rounded-full bg-slate-900/90 px-3 py-1 text-[0.7rem] text-slate-200">
                Live soon · demo now
              </div>
            </div>

            <div className="mt-3 overflow-hidden rounded-xl border border-slate-700/80">
              <table className="min-w-full border-collapse text-left text-[0.75rem] md:text-[0.8rem]">
                <thead className="bg-slate-900/95 text-slate-400">
                  <tr>
                    <th className="px-3 py-2 font-normal">Rank</th>
                    <th className="px-3 py-2 font-normal">Commander</th>
                    <th className="px-3 py-2 font-normal text-right">War Energy</th>
                  </tr>
                </thead>
                <tbody>
                  {mockGlobal.map((row) => (
                    <tr
                      key={row.rank}
                      className="border-t border-slate-800/80 odd:bg-slate-900/70 even:bg-slate-900/40"
                    >
                      <td className="px-3 py-2 text-xs text-slate-400">#{row.rank}</td>
                      <td className="px-3 py-2 text-xs text-slate-100">{row.name}</td>
                      <td className="px-3 py-2 text-right font-mono text-[0.75rem] text-cyan-200">
                        {row.energy.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="flex flex-col gap-4 rounded-2xl border border-slate-700/80 bg-slate-950/90 p-4 md:p-5">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
                Realms war
              </p>
              <h2 className="mt-1 text-sm font-semibold text-slate-50 md:text-base">
                أي Realm كيجمع طاقة أكثر؟
              </h2>
            </div>
            <div className="space-y-2 text-[0.75rem] text-slate-200 md:text-xs">
              {mockRealms.map((r, idx) => (
                <div key={r.realm} className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-100">{r.realm}</span>
                    <span className="font-mono text-xs text-cyan-200">
                      {r.energy.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-900/90">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-400"
                      style={{ width: `${80 - idx * 8}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
