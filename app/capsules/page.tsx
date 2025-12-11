export const dynamic = "force-static";

import React from "react";

const tiers = [
  {
    id: "common",
    name: "Common",
    color: "from-slate-700 via-slate-800 to-slate-900",
    desc: "مدخل سهل للعالم، للناس اللي باغين يجربو المشروع من غير مخاطرة كبيرة.",
    details: ["Boost بسيط داخل اللعبة", "Random Common skin", "Access أساسي للـ on-chain"],
  },
  {
    id: "rare",
    name: "Rare",
    color: "from-cyan-500 via-sky-500 to-slate-900",
    desc: "الطبقة اللي فيها balance بين السعر و ال upside فـ NFTs و rewards.",
    details: ["Boost أقوى", "فرصة لظهور Rare NFT", "Priority access للمودات الجديدة"],
  },
  {
    id: "epic",
    name: "Epic",
    color: "from-violet-500 via-fuchsia-500 to-slate-900",
    desc: "للناس اللي باغين يكونو فالنواة ديال المشروع و يبانو كمؤسسين الأوائل.",
    details: ["Epic drops محتملة بقوة", "اسمك على Wall of Founders", "Airdrops مميزة مستقبلاً"],
  },
  {
    id: "legendary",
    name: "Legendary",
    color: "from-amber-400 via-amber-500 to-slate-900",
    desc: "الطبقة الأعلى، supply محدود جداً، و تأثير حقيقي على شكل المشروع من بعد.",
    details: ["Guaranteed Legendary entry", "قناة خاصة و voting power أقوى", "Access لنسخ مبكرة جداً"],
  },
];

export default function CapsulesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-10">
        <header className="space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-amber-300/80">
            Capsules · Ownership keys
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            الكبسولات{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent">
              هي المفاتيح
            </span>{" "}
            للعالم.
          </h1>
          <p className="max-w-2xl text-sm text-slate-300/90 md:text-base">
            كل Capsule ماشي مجرد NFT عادي، بل package ديال access, boosts, و upside فال token launch.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {tiers.map((tier) => (
            <article
              key={tier.id}
              className="relative overflow-hidden rounded-2xl border border-amber-400/60 bg-slate-950/90 p-4 shadow-[0_0_26px_rgba(251,191,36,0.45)]"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tier.color} opacity-25`}
              />
              <div className="pointer-events-none absolute inset-px rounded-2xl border border-white/10" />
              <div className="relative space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-200">
                    {tier.id.toUpperCase()}
                  </div>
                  <div className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[0.65rem] text-slate-200">
                    Rarity tier
                  </div>
                </div>
                <h2 className="text-base font-semibold text-slate-50 md:text-lg">
                  {tier.name} Capsule
                </h2>
                <p className="text-[0.8rem] text-slate-200/90 md:text-[0.85rem]">{tier.desc}</p>
                <ul className="mt-2 space-y-1.5 text-[0.75rem] text-slate-100 md:text-[0.8rem]">
                  {tier.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 rounded-xl border border-amber-300/40 bg-slate-950/80 px-2.5 py-1.5"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,1)]" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
