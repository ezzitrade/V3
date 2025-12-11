export const dynamic = "force-static";

import React from "react";

const features = [
  {
    title: "City Core",
    body: "المبنى الرئيسي اللي كيضرب كل الطاقة ب multiplier. كل level جديد = إحساس أن المدينة كاملة كتفيق معاك.",
  },
  {
    title: "Districts & zones",
    body: "مستقبلاً كل منطقة فالمدينة غادي تمثل جزء من gameplay: industrial zone, neon market, residential towers…",
  },
  {
    title: "On-chain buildings",
    body: "في النسخة Web3، buildings الرئيسية تتحول لـ NFTs، وكل upgrade تصبح event on-chain مع impact حقيقي.",
  },
];

export default function CityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-10">
        <header className="space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-fuchsia-300/80">
            EZZI CITY · Buildings system
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            المدينة{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              اللي كترد اللعب إدماني.
            </span>
          </h1>
          <p className="max-w-2xl text-sm text-slate-300/90 md:text-base">
            نظام المباني هو العمود الفقري ديال progression: تلعب loops صغيرة، ترجع للمدينة، تطوّر core
            ديالها، وترجع تلعب بقوة أكبر.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-6">
          <div className="space-y-3 rounded-2xl border border-slate-700/80 bg-slate-950/90 p-4 md:p-5">
            <div className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
              Design pillars
            </div>
            <div className="mt-2 space-y-3 text-[0.8rem] text-slate-200 md:text-[0.9rem]">
              {features.map((f) => (
                <div key={f.title} className="rounded-xl border border-slate-700/80 bg-slate-900/80 p-3">
                  <div className="text-sm font-semibold text-slate-50">{f.title}</div>
                  <p className="mt-1.5">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-fuchsia-500/60 bg-gradient-to-br from-slate-950 via-slate-950 to-fuchsia-950/80 p-4 md:p-5 shadow-[0_0_38px_rgba(217,70,239,0.7)]">
            <div className="text-[0.7rem] uppercase tracking-[0.3em] text-fuchsia-200">
              In-game loop
            </div>
            <p className="mt-2 text-sm text-slate-100 md:text-[0.9rem]">
              داخل صفحة <span className="text-cyan-200">/game</span>، panel ديال المدينة كيخليك تشوف
              level ديال EZZI City و تطوّرها مباشرة. هاد الصفحة فقط كتشرح الفلسفة و الميكانيزم في شكل
              واضح للمجتمع و المستثمرين.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
