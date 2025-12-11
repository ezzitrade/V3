export const dynamic = "force-static";

import React from "react";
import Link from "next/link";

const tiers = [
  {
    id: "common",
    name: "Common Capsule",
    price: "$20 → $24",
    supply: "3,000",
    perks: ["Basic War Energy boost", "Early access لنسخة on-chain", "Random Common skin"],
    accent: "COMMON",
  },
  {
    id: "rare",
    name: "Rare Capsule",
    price: "$28 → $34",
    supply: "1,500",
    perks: ["Boost أعلى + chance لـ Rare NFT", "Priority في المودات الجديدة", "Animated city badge"],
    accent: "RARE",
  },
  {
    id: "epic",
    name: "Epic Capsule",
    price: "$36 → $40",
    supply: "600",
    perks: [
      "Epic NFT احتمال عالي",
      "Boost كبير في War Energy",
      "اسمك يبان فـ Wall of Founders",
    ],
    accent: "EPIC",
  },
  {
    id: "legendary",
    name: "Legendary Capsule",
    price: "$40 → $44",
    supply: "200",
    perks: [
      "Guaranteed Legendary entry",
      "Access لقناة خاصة في Discord",
      "أولوية فكل beta + airdrops مستقبلية",
    ],
    accent: "LEGENDARY",
  },
];

export default function PresalePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-10">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-amber-300/90">
              EZZI WORLD · CAPSULE PRESALE
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              ادخل{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                قبل
              </span>{" "}
              ما تفيق المدينة.
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300/90 md:text-base">
              هادي نسخة off-chain ديال الواجهة: كتخلي الناس تفهم الميكانيزم و ال value ديال كل Capsule،
              وكتجهز الأرضية للـ smart contracts فنسخة on-chain.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 text-xs text-slate-200 md:items-end">
            <div className="rounded-full border border-emerald-400/70 bg-emerald-500/10 px-3 py-1.5 text-emerald-100 shadow-[0_0_25px_rgba(16,185,129,0.6)]">
              Demo UI · Payments will connect to your Solana wallet في النسخة النهائية.
            </div>
            <Link
              href="/capsules"
              className="text-[0.7rem] text-amber-200 underline decoration-amber-400/70 underline-offset-4 hover:text-amber-100"
            >
              إستكشف كل التفاصيل ديال الكبسولات &rarr;
            </Link>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-6">
          <div className="grid gap-4 md:grid-cols-2">
            {tiers.map((tier) => (
              <article
                key={tier.id}
                className="relative flex flex-col justify-between rounded-2xl border border-amber-400/50 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-4 shadow-[0_0_30px_rgba(251,191,36,0.35)]"
              >
                <div className="pointer-events-none absolute inset-px rounded-2xl border border-white/10" />
                <div className="pointer-events-none absolute inset-x-6 top-0 h-12 rounded-b-[1.2rem] bg-gradient-to-b from-amber-400/40 via-amber-500/15 to-transparent" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-2 text-[0.7rem]">
                    <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.3em] text-slate-300">
                      {tier.accent}
                    </span>
                    <span className="font-mono text-xs text-amber-200">{tier.price}</span>
                  </div>
                  <h2 className="mt-2 text-base font-semibold text-slate-50 md:text-lg">
                    {tier.name}
                  </h2>
                  <p className="mt-1 text-[0.7rem] text-slate-400">
                    Supply:{" "}
                    <span className="font-mono text-slate-100">{tier.supply}</span>
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[0.75rem] text-slate-200">
                    {tier.perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-2 rounded-xl border border-amber-400/30 bg-slate-950/80 px-2.5 py-1.5"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 shadow-[0_0_10px_rgba(252,211,77,1)]" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative mt-3 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    disabled
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-amber-400/70 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-100 shadow-[0_0_24px_rgba(245,158,11,0.8)]"
                  >
                    Connect Solana wallet (soon)
                  </button>
                  <span className="text-[0.6rem] text-slate-400">
                    Off-chain demo — no real payments.
                  </span>
                </div>
              </article>
            ))}
          </div>

          <aside className="flex flex-col gap-4 rounded-2xl border border-slate-700/80 bg-slate-950/90 p-4 md:p-5">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
                Why capsules?
              </p>
              <h2 className="mt-2 text-lg font-semibold text-slate-50">
                ماشي مجرد بيع token، بل access لموجات من الفرص.
              </h2>
              <p className="mt-2 text-sm text-slate-300/90">
                كل Capsule هي combination ما بين: access مبكر، boosts حقيقية داخل اللعبة، و position
                قوي فـ token launch. الفكرة هي أنك تشتري{" "}
                <span className="text-amber-200">slot فالعالم</span>، ماشي مجرد رقم فتورصة.
              </p>
            </div>

            <div className="grid gap-3 text-[0.7rem] md:text-xs text-slate-200">
              <div className="rounded-xl border border-emerald-400/50 bg-emerald-500/10 p-3">
                <div className="text-[0.6rem] uppercase tracking-[0.3em] text-emerald-200">
                  War Energy link
                </div>
                <p className="mt-1.5">
                  جزء من قيمة الكبسولات مستقبلاً يتحول لـ{" "}
                  <span className="text-emerald-100">rewards pool</span> حسب War Energy اللي تجمع فـ
                  المرحلة الأولى.
                </p>
              </div>
              <div className="rounded-xl border border-cyan-400/50 bg-cyan-500/10 p-3">
                <div className="text-[0.6rem] uppercase tracking-[0.3em] text-cyan-200">
                  Transparent rounds
                </div>
                <p className="mt-1.5">
                  الأسعار واضحة: من 20$ حتى 44$، بلا غموض. كل round عندو cap واضح و dashboard كيوري
                  التقدم.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
