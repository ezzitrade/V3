export const dynamic = "force-static";

import React from "react";
import Link from "next/link";

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const phases = [
  {
    id: "phase-0",
    label: "Phase 0",
    title: "Off-chain Ultra AAA Prototype",
    period: "الآن · 2025",
    status: "LIVE",
    items: [
      "Landing page Ultra AAA",
      "Game loops (Puzzle · Mining · City) off-chain",
      "Marketplace + Capsules + NFTs logic demo",
      "Leaderboards, Profile, City overview",
    ],
  },
  {
    id: "phase-1",
    label: "Phase 1",
    title: "Presale & Community War",
    period: "بعد الإطلاق الأول",
    status: "NEXT",
    items: [
      "Capsule presale rounds (Common → Legendary)",
      "Community War Energy global target",
      "Early access MVP لـ on-chain rewards logic",
      "Partners + creators quests",
    ],
  },
  {
    id: "phase-2",
    label: "Phase 2",
    title: "On-chain Genesis",
    period: "بعد قفل الـ presale",
    status: "PLANNED",
    items: [
      "EZZI token launch على Solana",
      "NFT characters + buildings mint",
      "On-chain War Energy → rewards pool",
      "City governance mini-features",
    ],
  },
  {
    id: "phase-3",
    label: "Phase 3",
    title: "EZZI World · Live Service",
    period: "2025+",
    status: "VISION",
    items: [
      "New realms, biomes, and puzzles",
      "Seasonal passes & ranked War",
      "Mobile build + controller support",
      "Co-op raids على الـ mega city",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-10">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-cyan-300/80">
              EZZI WORLD · ROADMAP
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              خطة{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                Web3
              </span>{" "}
              على شكل لعبة.
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300/90 md:text-base">
              كل مرحلة كتزيد layer جديد: من لعبة off-chain مدمنة، لـ presale ذكي، لـ token و NFTs، ثم
              لـ live service عالم كامل. كل حاجة هنا واضحة ومكتوبة بلغة اللاعب و المستثمر.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 text-xs text-slate-300 md:items-end">
            <div className="flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1.5 text-emerald-100 shadow-[0_0_25px_rgba(16,185,129,0.6)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(74,222,128,1)]" />
              <span>Phase 0: Prototype LIVE</span>
            </div>
            <Link
              href="/roadmap/map"
              className="text-[0.7rem] text-cyan-200 underline decoration-cyan-400/70 underline-offset-4 hover:text-cyan-100"
            >
              اكتشف {" "}
              <span className="font-semibold">Roadmap Map</span>{" "}
              التفاعلية &rarr;
            </Link>
          </div>
        </header>

        <section className="relative mt-2 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-950/95 p-4 md:p-6">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-b-[2rem] bg-gradient-to-b from-cyan-400/25 via-cyan-500/10 to-transparent" />
          <div className="pointer-events-none absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />

          <ol className="relative mx-auto max-w-4xl space-y-8 md:space-y-10">
            {phases.map((phase, idx) => (
              <li
                key={phase.id}
                className={classNames(
                  "relative flex flex-col gap-4 rounded-2xl border border-slate-700/80 bg-slate-950/80 px-4 py-4 md:flex-row md:gap-6 md:px-6 md:py-5",
                  idx === 0 &&
                    "border-emerald-400/60 bg-gradient-to-br from-emerald-500/15 via-slate-950 to-slate-950/95 shadow-[0_0_40px_rgba(16,185,129,0.75)]"
                )}
              >
                <div className="flex items-start gap-3 md:w-52">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/50 bg-slate-950 text-xs font-semibold text-cyan-100 shadow-[0_0_18px_rgba(56,189,248,0.65)]">
                    {phase.label.replace("Phase ", "")}
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-400">
                      {phase.label}
                    </p>
                    <h2 className="mt-1 text-base font-semibold text-slate-50 md:text-lg">
                      {phase.title}
                    </h2>
                    <p className="mt-1 text-[0.7rem] text-slate-400">{phase.period}</p>
                    <span
                      className={classNames(
                        "mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.6rem] font-semibold",
                        phase.status === "LIVE" &&
                          "border border-emerald-400/60 bg-emerald-500/10 text-emerald-100",
                        phase.status === "NEXT" &&
                          "border border-cyan-400/60 bg-cyan-500/10 text-cyan-100",
                        phase.status === "PLANNED" &&
                          "border border-fuchsia-400/60 bg-fuchsia-500/10 text-fuchsia-100",
                        phase.status === "VISION" &&
                          "border border-slate-500/60 bg-slate-700/30 text-slate-100"
                      )}
                    >
                      <span className="h-1 w-1 rounded-full bg-current" />
                      {phase.status}
                    </span>
                  </div>
                </div>
                <div className="md:flex-1">
                  <ul className="grid gap-2 text-[0.75rem] text-slate-200 md:text-sm">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-2"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 p-4 md:p-5">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
              Core principle
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-50">
              Game-first. Token-second. Community-always.
            </h2>
            <p className="mt-2 text-sm text-slate-300/90">
              النموذج كامل مبني على أن اللاعب يدخل عشان{" "}
              <span className="text-cyan-200">يلعب و يعيش عالم</span>، ماشي غير عشان يضرب شورت ترم
              flip. كل reward system و presale و tokenomics يبقى خادم لهاد الهدف.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 p-4 md:p-5">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
              Next stop
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-50">
              Capsule presale + War Energy global quest.
            </h2>
            <p className="mt-2 text-sm text-slate-300/90">
              نطلّق النسخة off-chain، نبني community، و نفتح أبواب{" "}
              <span className="text-amber-200">Capsule Presale</span> اللي فيها early access bonuses و
              real upside للناس اللي دخلوا من الأول.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
