export const dynamic = "force-static";

import React from "react";

const faqs = [
  {
    q: "واش الموقع الحالي فيه فلوس حقيقية؟",
    a: "لا. النسخة الحالية off-chain demo فقط. مكاين لا payments لا token حقيقي. الهدف ديالها هو نبينو gameplay loop و UX ديال المشروع قبل ما ندخلو blockchain.",
  },
  {
    q: "فين غادي يخدم token ديال EZZI؟",
    a: "الهدف هو الإطلاق على Solana بسبب السرعة و الرسوم المنخفضة. ولكن التصميم ديال ال tokenomics كيخلي من الممكن نديرو bridges أو نسخ على شبكات أخرى فالمستقبل.",
  },
  {
    q: "كيفاش كنستافد إلا دخلت بدري؟",
    a: "الناس اللي كيدخلو فـ presale / early community كيستافدو من: سعر أفضل للكبسولات، access مبكر للمودات الجديدة، و allocation أقوى فـ airdrops المستقبلية.",
  },
  {
    q: "شنو الفرق بين War Energy و token؟",
    a: "War Energy هي عملة داخل اللعبة (game-only) كتجمعها من puzzle / mining / city. من بعد، جزء من هاد ال energy كيستعمل باش يوزع rewards من ال pool ديال EZZI token، بلا ما يتحول هو بحدّو لعملة قابلة للtrade.",
  },
  {
    q: "واش اللعبة غادي تبقى f2p ولا لا؟",
    a: "الهدف الأساسي: تبقى free-to-play فـ المستوى الأساسي، والناس اللي باغين value أكبر يقدرو يشرو Capsules / NFTs / boosts ولكن يبقى اللعب في المتناول للجميع.",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-10">
        <header className="space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
            FAQ · الأسئلة الشائعة
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            كل{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
              الأسئلة المهمة
            </span>{" "}
            فمكان واحد.
          </h1>
          <p className="max-w-2xl text-sm text-slate-300/90 md:text-base">
            هاد الصفحة مكتوبة بلغة بسيطة، باش أي واحد يدخل يفهم واش المشروع حقيقي، وشنو بالضبط غادي
            يوقع من بعد.
          </p>
        </header>

        <section className="space-y-3">
          {faqs.map((item, idx) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-700/80 bg-slate-950/90 p-4 md:p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                <div>
                  <div className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-500">
                    Q{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-50 md:text-[0.95rem]">
                    {item.q}
                  </div>
                </div>
                <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full border border-slate-600/80 text-xs text-slate-300 group-open:rotate-90">
                  &gt;
                </span>
              </summary>
              <p className="mt-3 text-[0.8rem] text-slate-300/90 md:text-[0.9rem]">{item.a}</p>
            </details>
          ))}
        </section>
      </div>
    </main>
  );
}
