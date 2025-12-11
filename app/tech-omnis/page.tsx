export const dynamic = "force-static";

import React from "react";

const pillars = [
  {
    title: "Off-chain first, On-chain upgrade",
    body: "كل حاجة مبنية باش تخدم حتى لو blockchain طاحت أو تبدلات. اللعبة كتخدم off-chain 100%، ومن بعد كتزيد layer on-chain فوقها بلا ما تكسر التجربة.",
  },
  {
    title: "Solana-native, but chain-agnostic",
    body: "الlaunch الرئيسي على Solana، ولكن structure ديال العقود و ال APIs يسمح لاحقاً ب bridges أو نسخ على شبكات أخرى بدون إعادة بناء من الصفر.",
  },
  {
    title: "Composable game state",
    body: "War Energy, Buildings, Capsules, NFTs… كلهم عبارة عن وحدات صغيرة تقدر يتربطو بطرق مختلفة، هادشي كيسهل إضافة modes و features جداد بسرعة.",
  },
  {
    title: "Security + Transparency",
    body: "Treasury واحد واضح، allocations fixed، و dashboards توري flow ديال الفلوس: شحال مشى للـ liquidity, marketing, dev, و rewards.",
  },
];

export default function TechOmnisPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-10">
        <header className="space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-violet-300/90">
            TECH · OMNIS
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            المعمار{" "}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              التقني
            </span>{" "}
            ديال EZZI WORLD.
          </h1>
          <p className="max-w-2xl text-sm text-slate-300/90 md:text-base">
            هاد الصفحة كتشرح كيفاش البروجي مبني باش يكون{" "}
            <span className="text-cyan-200">سريع، مرن، و قابل للتطوير</span> بدون ما يطيح فالمشاكل
            الكلاسيكية ديال مشاريع Web3.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-6">
          <div className="space-y-3 rounded-3xl border border-slate-700/80 bg-slate-950/90 p-4 md:p-5">
            <div className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
              Architecture layers
            </div>
            <div className="mt-2 space-y-3 text-sm text-slate-200 md:text-[0.9rem]">
              <p>
                <span className="text-cyan-200">Layer 0 – Game Client:</span> Next.js + React، UI كامل
                كيخدم off-chain، و كيستخدم context بسيط باش يحبس state ديال اللاعب (War Energy, city
                level, الخ...).
              </p>
              <p>
                <span className="text-cyan-200">Layer 1 – Off-chain services:</span> مستقبلاً يمكن نزيدو
                API بسيط (Node/Edge) باش يسجل progress ديال اللاعبين اللي بغاو يحتافضو به قبل ما
                يدخل blockchain.
              </p>
              <p>
                <span className="text-cyan-200">Layer 2 – On-chain logic:</span> عقود Solana اللي
                كيتعاملو مع: token, treasury, rewards pools, NFTs, و game events اللي تجي من اللعبة.
              </p>
            </div>
          </div>

          <div className="space-y-3 rounded-3xl border border-violet-500/60 bg-gradient-to-br from-slate-950 via-slate-950 to-violet-950/80 p-4 md:p-5 shadow-[0_0_40px_rgba(139,92,246,0.7)]">
            <div className="text-[0.7rem] uppercase tracking-[0.3em] text-violet-200">
              Omnis vision
            </div>
            <p className="mt-2 text-sm text-slate-100">
              الفكرة هي{" "}
              <span className="text-violet-200">Omni-layer game</span>: نفس العالم يقدر يعيش على
              عدة طبقات (client, server, blockchain) بلا ما يتكسّر. أي تحسين في طبقة كيزيد اللعبة كلها
              قوة.
            </p>
          </div>
        </section>

        <section className="grid gap-3 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-slate-700/80 bg-slate-950/90 p-4 md:p-5"
            >
              <h2 className="text-sm font-semibold text-slate-50 md:text-base">{pillar.title}</h2>
              <p className="mt-1.5 text-[0.8rem] text-slate-300/90 md:text-[0.85rem]">
                {pillar.body}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
