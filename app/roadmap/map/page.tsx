export const dynamic = "force-static";

import React from "react";

const realms = [
  {
    id: "mystic-mountains",
    name: "Mystic Mountains",
    role: "Puzzle-first Realm",
    description:
      "مسارات ثلجية، معابد قديمة، و ألغاز نورانية. هنا يتولّد جزء كبير من War Energy عبر الـ puzzle mode.",
  },
  {
    id: "shadow-sanctum",
    name: "Shadow Sanctum",
    role: "Stealth / strategy",
    description:
      "مدينة مظلمة داخل nebula، فيها future modes ديال infiltration و co-op raids.",
  },
  {
    id: "crystal-canyon",
    name: "Crystal Canyon",
    role: "Mining core",
    description:
      "كريستالات عملاقة تخرج من الأرض، كل mining loop هنا كيحس اللاعب أنه داخل منجم سيبربانك حقيقي.",
  },
  {
    id: "inferno-isle",
    name: "Inferno Isle",
    role: "High-risk / high-reward",
    description:
      "جزيرة بركانية للـ endgame: مخاطرة كبيرة و rewards أكبر، مربوطة مباشرة بالـ token economy.",
  },
  {
    id: "neon-nexus",
    name: "Neon Nexus",
    role: "Main city",
    description:
      "العاصمة السيبرية، فيها الـ hubs ديال marketplace, social hub, و الـ city / buildings system.",
  },
];

export default function RoadmapMapPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-10">
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-cyan-300/80">
              EZZI WORLD · ROADMAP MAP
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              خريطة{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                العوالم
              </span>{" "}
              اللي غادي يتحولوا لـ on-chain.
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300/90 md:text-base">
              هادي نسخة 2.5D مبسّطة من ال World Map: كل realm هنا عندو دور واضح فـ gameplay و فـ
              tokenomics ديال المشروع.
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-3 text-xs text-cyan-50 shadow-[0_0_30px_rgba(56,189,248,0.7)] md:w-64">
            <div className="text-[0.6rem] uppercase tracking-[0.3em] text-cyan-200/90">
              Prototype
            </div>
            <p className="mt-1">
              هاد الصفحة off-chain concept، من بعد غادي ترتبط مباشرة بصور 2.5D map اللي صايبتيهم.
            </p>
          </div>
        </header>

        <section className="relative overflow-hidden rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-4 md:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(56,189,248,0.22),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(244,114,182,0.22),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-10 rounded-[2rem] border border-white/10" />

          <div className="relative grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-6">
            {/* Mini-map layout */}
            <div className="flex flex-col justify-center gap-4">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-lg rounded-[2rem] border border-cyan-400/60 bg-slate-950/80 p-3 shadow-[0_0_40px_rgba(56,189,248,0.85)]">
                <div className="pointer-events-none absolute inset-px rounded-[1.85rem] border border-white/10" />
                <div className="pointer-events-none absolute inset-x-6 top-0 h-16 rounded-b-[1.9rem] bg-gradient-to-b from-cyan-400/35 via-cyan-500/10 to-transparent" />

                <div className="relative grid h-full w-full grid-cols-3 grid-rows-2 gap-2">
                  {realms.map((realm, index) => {
                    const isCenter = realm.id === "neon-nexus";
                    return (
                      <div
                        key={realm.id}
                        className={
                          "group relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/80 p-2 text-xs shadow-[0_0_22px_rgba(15,23,42,0.9)] transition-all hover:border-cyan-300/80 hover:shadow-[0_0_30px_rgba(56,189,248,0.85)]"
                        }
                      >
                        <div className="pointer-events-none absolute inset-px rounded-[1.1rem] border border-white/5" />
                        <div
                          className={
                            "pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-fuchsia-500/15 opacity-0 transition-opacity group-hover:opacity-100"
                          }
                        />
                        <div className="relative flex h-full flex-col justify-between">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[0.6rem] uppercase tracking-[0.25em] text-slate-400">
                              {index + 1 < 10 ? `0${index + 1}` : index + 1}
                            </span>
                            {isCenter && (
                              <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[0.6rem] text-cyan-100">
                                Hub
                              </span>
                            )}
                          </div>
                          <div>
                            <div className="text-[0.75rem] font-semibold text-slate-50">
                              {realm.name}
                            </div>
                            <div className="mt-0.5 text-[0.65rem] text-slate-300">
                              {realm.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="mx-auto max-w-lg text-[0.7rem] md:text-xs text-slate-300/90">
                في النسخة النهائية، كل بلاصة هنا غادي ترتبط بـ{" "}
                <span className="text-cyan-200">tile map 2.5D</span> حقيقي (الصور اللي صايبتيهم)، ومعاها
                كاميرا و interactions بسيطة (hover / click / transitions).
              </p>
            </div>

            {/* Details */}
            <div className="space-y-3 rounded-2xl border border-slate-700/80 bg-slate-950/90 p-4 md:p-5">
              <div className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
                Realms breakdown
              </div>
              <div className="space-y-3">
                {realms.map((realm) => (
                  <div
                    key={realm.id}
                    className="rounded-xl border border-slate-700/75 bg-slate-900/80 p-3 text-[0.7rem] md:text-xs text-slate-200/90"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-semibold text-slate-50">{realm.name}</div>
                      <div className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[0.6rem] text-slate-200">
                        {realm.role}
                      </div>
                    </div>
                    <p className="mt-1.5">{realm.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
