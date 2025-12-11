export const dynamic = "force-static";

import React from "react";

const roles = [
  {
    title: "Game / World Director",
    desc: "مسؤول على بناء ال fantasy ديال EZZI WORLD، الإحساس ديال العوالم، والـ game loops الأساسية.",
  },
  {
    title: "Tech / Smart Contracts",
    desc: "يتكلف بالتصميم و البناء ديال عقود Solana، الأمان، و الربط بين اللعبة و ال blockchain.",
  },
  {
    title: "Art / Visual Direction",
    desc: "مسؤول على direction الفني: map 2.5D, UI/UX, و ال look النهائي ديال الشخصيات و المباني.",
  },
  {
    title: "Community / Growth",
    desc: "يركز على Discord, X, الحملات، و بناء مجتمع فعّال حول اللعبة و token.",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-10">
        <header className="space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
            Team · Core roles
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            الفريق{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
              اللي خاص
            </span>{" "}
            باش EZZI WORLD تولّي حقيقة.
          </h1>
          <p className="max-w-2xl text-sm text-slate-300/90 md:text-base">
            هاد الصفحة demo محايد بلا أسماء حقيقية. من بعد، نقدر نزيدو bios, links, و social proof حقيقي.
          </p>
        </header>

        <section className="grid gap-3">
          {roles.map((r) => (
            <article
              key={r.title}
              className="rounded-2xl border border-slate-700/80 bg-slate-950/90 p-4 md:p-5"
            >
              <h2 className="text-sm font-semibold text-slate-50 md:text-[0.95rem]">{r.title}</h2>
              <p className="mt-1.5 text-[0.8rem] text-slate-200/90 md:text-[0.85rem]">{r.desc}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
