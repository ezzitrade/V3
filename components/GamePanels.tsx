"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useGameState } from "@/context/GameStateContext";
import type { NftCharacter } from "@/lib/nftCatalog";

// ---------- Shared helpers ----------

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface PanelProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  accent?: string;
}

const PanelShell: React.FC<PanelProps> = ({ title, subtitle, children, accent }) => {
  return (
    <section
      className={classNames(
        "relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90 p-5 md:p-6",
        "shadow-[0_0_40px_rgba(56,189,248,0.35)] overflow-hidden"
      )}
    >
      <div className="pointer-events-none absolute inset-px rounded-2xl border border-cyan-400/10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-500/15 via-cyan-500/5 to-transparent" />
      <header className="relative flex items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cyan-300/80">
            <span className="h-[1px] w-6 bg-cyan-400/70" />
            {accent ?? "EZZI WORLD · LIVE"}
          </div>
          <h2 className="mt-2 text-lg md:text-xl font-semibold text-white">{title}</h2>
          <p className="mt-1 text-xs md:text-sm text-slate-300/80">{subtitle}</p>
        </div>
      </header>
      <div className="relative mt-2 md:mt-3">{children}</div>
    </section>
  );
};

// ---------- Puzzle Panel (real mini-game) ----------

type GridCell = { row: number; col: number };

const PUZZLE_SIZE = 4;
const CORRECT_PATH: GridCell[] = [
  { row: 3, col: 0 },
  { row: 2, col: 0 },
  { row: 1, col: 1 },
  { row: 1, col: 2 },
  { row: 2, col: 2 },
  { row: 3, col: 3 },
];

const cellKey = (c: GridCell) => `${c.row}-${c.col}`;

const PuzzlePanel: React.FC = () => {
  const { contributeWarEnergy } = useGameState();
  const [path, setPath] = useState<GridCell[]>([]);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [message, setMessage] = useState<string>("الوصل بين الـ Nodes باش توصل الطاقة لـ EZZI CORE.");
  const [isLocked, setIsLocked] = useState(false);

  const lastCell = path[path.length - 1];

  const isOnPath = (row: number, col: number) => {
    return !!CORRECT_PATH.find((c) => c.row === row && c.col === col);
  };

  const isVisited = (row: number, col: number) => {
    return !!path.find((c) => c.row === row && c.col === col);
  };

  const isStart = (row: number, col: number) => row === CORRECT_PATH[0].row && col === CORRECT_PATH[0].col;
  const isGoal = (row: number, col: number) => {
    const last = CORRECT_PATH[CORRECT_PATH.length - 1];
    return row === last.row && col === last.col;
  };

  const canClick = (row: number, col: number) => {
    if (isLocked) return false;
    const cell = { row, col };
    const expected = CORRECT_PATH[path.length];
    return expected && expected.row === cell.row && expected.col === cell.col;
  };

  const handleCellClick = (row: number, col: number) => {
    if (!canClick(row, col)) {
      setStatus("error");
      setMessage("المسار انقطع ⚠️ – جرّب من الأول وركّز على النودز المضيئة.");
      setPath([]);
      return;
    }

    const newPath = [...path, { row, col }];
    setPath(newPath);
    setStatus("idle");
    setMessage("مسار صحيح ✅ – كمّل الربط باش تشحن الـ EZZI CORE.");

    if (newPath.length === CORRECT_PATH.length) {
      // Puzzle complete
      contributeWarEnergy(50, "PUZZLE_SOLVED", "Neural circuit puzzle completed");
      setStatus("success");
      setMessage("Puzzle complete! ⚡ ربحت War Energy وتم شحن الـ Realm.");
      setIsLocked(true);

      // Auto-unlock after a short cooldown so player يمكن يعاود اللعب
      setTimeout(() => {
        setIsLocked(false);
        setPath([]);
        setStatus("idle");
        setMessage("عاود التحدي ولا جرّب مسار آخر باش تعلي الـ combo ديالك.");
      }, 2800);
    }
  };

  const handleReset = () => {
    setPath([]);
    setStatus("idle");
    setIsLocked(false);
    setMessage("تم مسح المسار. إبدأ من النقطة الأولى المضيئة أسفل اليسار.");
  };

  const hintIndices = useMemo(() => {
    // small hint: show two intermediate nodes in subtle pulsing
    return [1, CORRECT_PATH.length - 2];
  }, []);

  return (
    <PanelShell
      title="Puzzle · Neural Circuit"
      subtitle="إوصل بين النودز المضيئة بدون ما تقطع المسار، وكل حل ناجح يشحن War Energy."
      accent="PUZZLE · REAL-TIME"
    >
      <div className="grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-4 md:gap-6 items-stretch">
        {/* Grid */}
        <div className="relative flex flex-col">
          <div className="relative mx-auto aspect-square w-full max-w-xs rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-3 md:p-4 shadow-inner shadow-cyan-500/40">
            {/* animated glow background */}
            <div className="pointer-events-none absolute inset-6 rounded-2xl bg-[radial-gradient(circle_at_20%_0,rgba(34,211,238,0.15),transparent_60%),radial-gradient(circle_at_80%_100%,rgba(147,51,234,0.18),transparent_55%)]" />

            <div className="relative grid h-full w-full grid-cols-4 gap-1.5 md:gap-2">
              {Array.from({ length: PUZZLE_SIZE }).map((_, row) =>
                Array.from({ length: PUZZLE_SIZE }).map((__, col) => {
                  const key = cellKey({ row, col });
                  const onPath = isOnPath(row, col);
                  const visited = isVisited(row, col);
                  const start = isStart(row, col);
                  const goal = isGoal(row, col);
                  const can = canClick(row, col);
                  const hintIndex = CORRECT_PATH.findIndex((c) => c.row === row && c.col === col);
                  const isHint = hintIndices.includes(hintIndex);

                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleCellClick(row, col)}
                      className={classNames(
                        "relative flex items-center justify-center rounded-xl border text-xs md:text-sm font-medium transition-all duration-150",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                        isLocked && "cursor-not-allowed opacity-60",
                        !can && !visited && !start && !goal && "cursor-default",
                        can && "cursor-pointer hover:scale-[1.03] hover:border-cyan-300/80 hover:shadow-[0_0_20px_rgba(45,212,191,0.65)]",
                        visited
                          ? "border-cyan-300/90 bg-cyan-500/30 text-white shadow-[0_0_24px_rgba(34,211,238,0.85)]"
                          : onPath
                          ? "border-cyan-300/70 bg-cyan-500/10 text-cyan-50"
                          : "border-slate-700/90 bg-slate-900/80 text-slate-400"
                      )}
                    >
                      <div
                        className={classNames(
                          "absolute inset-px rounded-[0.9rem] border border-white/5",
                          visited && "border-cyan-100/60"
                        )}
                      />
                      <div
                        className={classNames(
                          "h-1.5 w-1.5 rounded-full",
                          visited
                            ? "bg-cyan-100 shadow-[0_0_18px_rgba(125,211,252,0.95)]"
                            : onPath
                            ? "bg-cyan-300/90 shadow-[0_0_12px_rgba(45,212,191,0.85)]"
                            : "bg-slate-500/60"
                        )}
                      />
                      {start && (
                        <span className="pointer-events-none absolute -bottom-4 text-[0.6rem] uppercase tracking-[0.25em] text-emerald-300/85">
                          START
                        </span>
                      )}
                      {goal && (
                        <span className="pointer-events-none absolute -top-4 text-[0.6rem] uppercase tracking-[0.25em] text-fuchsia-300/90">
                          CORE
                        </span>
                      )}
                      {isHint && !visited && (
                        <span className="pointer-events-none absolute inset-0 rounded-[0.9rem] border border-cyan-400/60 opacity-70 animate-pulse" />
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-600/80 bg-slate-900/80 px-3 py-1.5 text-[0.7rem] md:text-xs font-medium text-slate-200 shadow-[0_0_16px_rgba(15,23,42,0.9)] hover:border-cyan-400/70 hover:text-cyan-100 hover:shadow-[0_0_24px_rgba(45,212,191,0.45)] transition-colors"
            >
              <span className="h-1 w-1 rounded-full bg-cyan-400" />
              Reset puzzle
            </button>

            <div className="flex items-center gap-2 text-[0.65rem] md:text-[0.7rem] text-slate-400">
              <span className="h-[1px] w-6 bg-gradient-to-r from-emerald-400/70 via-cyan-300/70 to-transparent" />
              <span>كل حل ناجح = +50 War Energy</span>
            </div>
          </div>
        </div>

        {/* Info / status */}
        <div className="flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <div
              className={classNames(
                "rounded-xl border px-3.5 py-3 text-xs md:text-sm leading-relaxed",
                status === "success"
                  ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-100 shadow-[0_0_25px_rgba(16,185,129,0.6)]"
                  : status === "error"
                  ? "border-rose-400/70 bg-rose-500/5 text-rose-100 shadow-[0_0_24px_rgba(244,63,94,0.55)]"
                  : "border-cyan-300/35 bg-cyan-500/5 text-cyan-50/90 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
              )}
            >
              {message}
            </div>

            <div className="mt-1 grid grid-cols-2 gap-3 text-[0.65rem] md:text-[0.7rem] text-slate-300/90">
              <div className="space-y-1">
                <div className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-400">
                  Puzzle rules
                </div>
                <ul className="space-y-0.5">
                  <li>• إبدأ من النقطة START المضيئة.</li>
                  <li>• كل ضغطة خاطئة = reset للمسار.</li>
                  <li>• واصل حتى توصل للـ CORE الأخيرة.</li>
                </ul>
              </div>
              <div className="space-y-1">
                <div className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-400">
                  BONUS
                </div>
                <ul className="space-y-0.5">
                  <li>• حل سريع = إحساس AAA في كل run.</li>
                  <li>• Loop لا منتهي باش تجمع energy.</li>
                  <li>• مناسب للـ mobile و desktop.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-700/80 bg-slate-950/90 p-3">
            <div className="flex items-center justify-between gap-2 text-[0.7rem] md:text-xs">
              <div className="flex flex-col gap-1">
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">
                  EZZI · PUZZLE LOOP
                </span>
                <span className="text-slate-100">
                  Puzzle حقيقي، short-session و always rewarding.
                </span>
              </div>
              <div className="flex flex-col items-end text-[0.65rem] text-slate-300">
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-emerald-200">
                  +50 Energy / solve
                </span>
                <span className="mt-1 text-[0.6rem] text-slate-500">Auto-reset بعد كل run</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PanelShell>
  );
};

// ---------- Mining Panel (timing mini-game) ----------

const MiningPanel: React.FC = () => {
  const { contributeWarEnergy } = useGameState();
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 3;
        if (next >= 100) {
          clearInterval(id);
          setIsRunning(false);
          setResult("فاتك الـ sweet spot ⛏️ – جرّب جولة جديدة.");
          return 100;
        }
        return next;
      });
    }, 70);

    return () => clearInterval(id);
  }, [isRunning]);

  const handleStart = () => {
    setProgress(0);
    setResult(null);
    setIsRunning(true);
  };

  const handleCollect = () => {
    if (!isRunning) return;

    const current = progress;
    let energy = 10;
    let feedback = "Collect ضعيف – حاول توقف وسط المنطقة المضيئة باش تربح أكثر.";

    if (current >= 60 && current <= 90) {
      energy = 35;
      feedback = "Timing أسطوري! ⚡ استخرجت vein كامل من EZZI Crystals.";
    } else if (current >= 40 && current < 60) {
      energy = 22;
      feedback = "Timing متوسط – جزء جيد من الكريستال اتجمع.";
    } else if (current > 90 && current < 100) {
      energy = 16;
      feedback = "فاتك الـ peak شوية، ولكن مازال لقطتي شوية طاقة.";
    }

    contributeWarEnergy(energy, "MINING_LOOP_COMPLETED", "Mining timing mini-game cleared");
    setIsRunning(false);
    setResult(feedback);
  };

  const sweetStart = 60;
  const sweetEnd = 90;

  return (
    <PanelShell
      title="Mining · Crystal Extraction"
      subtitle="إلعب على الـ timing المثالي باش تستخرج أكبر كمية من طاقة EZZI من الأعماق."
      accent="MINING · LOOP"
    >
      <div className="grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-4 md:gap-6 items-stretch">
        {/* Gauge */}
        <div className="flex flex-col justify-center gap-4">
          <div className="relative mx-auto w-full max-w-md rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-950 via-slate-950/90 to-slate-900/90 p-4 shadow-[0_0_40px_rgba(56,189,248,0.22)]">
            <div className="pointer-events-none absolute inset-px rounded-[1.4rem] border border-slate-50/5" />
            <div className="pointer-events-none absolute inset-x-4 top-0 h-12 rounded-b-full bg-gradient-to-b from-cyan-400/20 via-cyan-500/5 to-transparent" />

            <div className="mb-3 flex items-center justify-between text-[0.7rem] text-slate-300">
              <span className="uppercase tracking-[0.28em] text-slate-400">MINING HEAT</span>
              <span className="font-mono text-xs text-cyan-200">{progress.toString().padStart(3, "0")}%</span>
            </div>

            <div className="relative mt-2 h-10 rounded-full bg-slate-900/90">
              {/* Sweet spot */}
              <div
                className="absolute inset-y-1 rounded-full bg-gradient-to-r from-emerald-500/10 via-emerald-400/35 to-emerald-500/10"
                style={{
                  left: `${sweetStart}%`,
                  right: `${100 - sweetEnd}%`,
                }}
              >
                <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-emerald-300/70 shadow-[0_0_18px_rgba(52,211,153,0.85)]" />
              </div>

              {/* Progress bar */}
              <div
                className="absolute inset-y-1 left-1 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-400 shadow-[0_0_20px_rgba(56,189,248,0.75)]"
                style={{ width: `${Math.max(4, Math.min(progress, 100))}%` }}
              >
                <div className="absolute -right-2 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border border-white/70 bg-slate-950 shadow-[0_0_20px_rgba(59,130,246,0.95)]">
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-fuchsia-500" />
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-[0.65rem] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-6 bg-gradient-to-r from-slate-500 via-cyan-400/70 to-transparent" />
                <span>Aim for the neon band for max yield.</span>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 text-[0.6rem] text-emerald-100">
                Perfect = +35 Energy
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleStart}
                disabled={isRunning}
                className={classNames(
                  "inline-flex flex-1 items-center justify-center rounded-full px-3.5 py-1.5 text-xs md:text-sm font-semibold transition-all",
                  "border border-cyan-400/70 bg-cyan-500/15 text-cyan-50 shadow-[0_0_30px_rgba(56,189,248,0.6)]",
                  "hover:border-cyan-300 hover:bg-cyan-400/25 hover:shadow-[0_0_36px_rgba(56,189,248,0.85)]",
                  isRunning && "cursor-not-allowed opacity-60"
                )}
              >
                {isRunning ? "Mining in progress..." : "Start mining run"}
              </button>
              <button
                type="button"
                onClick={handleCollect}
                disabled={!isRunning}
                className={classNames(
                  "inline-flex flex-1 items-center justify-center rounded-full px-3.5 py-1.5 text-xs md:text-sm font-semibold transition-all",
                  "border border-emerald-400/70 bg-emerald-500/10 text-emerald-50 shadow-[0_0_30px_rgba(16,185,129,0.6)]",
                  "hover:border-emerald-300 hover:bg-emerald-400/25 hover:shadow-[0_0_36px_rgba(16,185,129,0.85)]",
                  !isRunning && "cursor-not-allowed opacity-60"
                )}
              >
                Collect crystals
              </button>
            </div>
          </div>

          <p className="text-[0.7rem] md:text-xs leading-relaxed text-slate-300/90">
            كل run قصير، ولكن فيه لحظة واحدة ذهبية. إذا وقفت داخل{" "}
            <span className="text-emerald-300/90">المنطقة المضيئة</span> قبل الانفجار، تخرج بأكبر قدر من
            طاقة EZZI. نظام بسيط ولكن عميق، loop مثالي للجوال وحتى للـ quick sessions.
          </p>
        </div>

        {/* Info / tiers */}
        <div className="flex flex-col justify-between gap-4">
          <div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 p-3 md:p-4">
            <div className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-400">
              Yield tiers
            </div>
            <div className="mt-2 space-y-1.5 text-[0.7rem] md:text-xs text-slate-200/90">
              <div className="flex items-center justify-between">
                <span>Perfect timing (داخل المنطقة)</span>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-200">
                  +35 Energy
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Good timing (قريب من المركز)</span>
                <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-cyan-200">
                  +22 Energy
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Late / early (خارج المنطقة)</span>
                <span className="rounded-full bg-slate-700/60 px-2 py-0.5 text-slate-200">
                  +10–16 Energy
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-3.5 md:p-4 text-[0.7rem] md:text-xs text-slate-200/90">
            <div className="flex items-center justify-between gap-2">
              <div>
                <div className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">
                  LOOP DESIGN
                </div>
                <p className="mt-1">
                  Mini-game خفيف، واضح، ومباشر — كيخلي اللاعب يرجع كل مرة يجرب يضرب perfect
                  timing، بلا ملل، بلا واجهة معقدة.
                </p>
              </div>
              <div className="shrink-0 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-3 py-2 text-right">
                <div className="text-[0.6rem] text-emerald-200/90">AAA-feel</div>
                <div className="text-xs font-semibold text-emerald-100">Short · Satisfying</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PanelShell>
  );
};

// ---------- Buildings / City Panel (upgrade loop) ----------

const BuildingsPanel: React.FC = () => {
  const { buildingLevel, upgradeBuilding } = useGameState();

  const currentBoost = useMemo(() => {
    return 1 + buildingLevel * 0.07;
  }, [buildingLevel]);

  const upgradeCost = useMemo(() => {
    return 50 + buildingLevel * 35;
  }, [buildingLevel]);

  const canUpgrade = true; // off-chain demo: always available

  return (
    <PanelShell
      title="City · EZZI Nexus"
      subtitle="طوّر مركز المدينة باش تزيد multipliers ديال الطاقة و rare drops فالمنظومة كاملة."
      accent="CITY · PROGRESSION"
    >
      <div className="grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-4 md:gap-6 items-stretch">
        <div className="flex flex-col justify-center gap-4">
          <div className="relative mx-auto w-full max-w-md rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-4 shadow-[0_0_32px_rgba(109,40,217,0.5)]">
            <div className="pointer-events-none absolute inset-px rounded-[1.4rem] border border-fuchsia-300/25" />
            <div className="pointer-events-none absolute inset-x-4 top-0 h-16 rounded-b-full bg-gradient-to-b from-fuchsia-500/25 via-purple-500/10 to-transparent" />

            <div className="mb-3 flex items-center justify-between text-[0.7rem] text-slate-200">
              <span className="uppercase tracking-[0.28em] text-slate-400">CITY CORE LEVEL</span>
              <span className="font-mono text-sm text-fuchsia-200">Lv {buildingLevel}</span>
            </div>

            <div className="relative mt-1 flex items-end gap-1">
              {Array.from({ length: 5 }).map((_, index) => {
                const levelIndex = index + 1;
                const active = buildingLevel >= levelIndex;
                const height = 50 + index * 15;

                return (
                  <div
                    key={levelIndex}
                    className={classNames(
                      "flex-1 rounded-t-2xl border border-slate-700/80 bg-slate-950/90",
                      "relative overflow-hidden"
                    )}
                    style={{ height }}
                  >
                    <div
                      className={classNames(
                        "absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-800 via-slate-900 to-slate-950",
                        active &&
                          "from-fuchsia-500 via-violet-500/90 to-sky-500 shadow-[0_0_30px_rgba(168,85,247,0.8)]"
                      )}
                    />
                    <div className="absolute inset-x-1 bottom-0 h-1.5 rounded-full bg-slate-900/70" />
                    {active && (
                      <div className="absolute inset-1 rounded-t-2xl bg-[radial-gradient(circle_at_50%_0,rgba(244,114,182,0.4),transparent_60%)]" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-3 flex items-center justify-between text-[0.7rem] md:text-xs text-slate-200/90">
              <div className="flex flex-col gap-0.5">
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">
                  Global boost
                </span>
                <span>كل Level كيضرب الطاقة بـ{" "}
                  <span className="text-fuchsia-300">
                    x{currentBoost.toFixed(2)}
                  </span>
                  {" "} عبر كل الأنظمة.</span>
              </div>
              <div className="text-right">
                <div className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">
                  Next upgrade
                </div>
                <div className="mt-0.5 rounded-full bg-slate-900/90 px-2 py-1 text-xs text-slate-100">
                  Cost: {upgradeCost} War Energy (off-chain demo)
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                disabled={!canUpgrade}
                onClick={() => upgradeBuilding()}
                className={classNames(
                  "inline-flex flex-1 items-center justify-center rounded-full px-3.5 py-1.5 text-xs md:text-sm font-semibold transition-all",
                  "border border-fuchsia-400/70 bg-fuchsia-500/10 text-fuchsia-50 shadow-[0_0_30px_rgba(217,70,239,0.75)]",
                  "hover:border-fuchsia-300 hover:bg-fuchsia-400/25 hover:shadow-[0_0_38px_rgba(217,70,239,0.9)]"
                )}
              >
                Upgrade city core
              </button>
              <div className="flex flex-col text-[0.65rem] text-slate-300/90">
                <span>كل upgrade يزيد قيمة اللعب و rewards.</span>
                <span className="text-[0.6rem] text-slate-500">
                  On-chain من بعد غادي يتحول لـ real building NFTs.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copy / flavour */}
        <div className="flex flex-col justify-between gap-4">
          <div className="space-y-2 text-[0.7rem] md:text-xs text-slate-200/90">
            <div className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">
              EZZI CITY · PROGRESSION LOOP
            </div>
            <p>
              عوض grind بلا معنى، كل upgrade فالمدينة كيحسّ اللاعب أنه فعلاً كيخلق impact فـ EZZI
              World: شوارع كاتنقّ، أبراج كاتزيد ارتفاع، و War Energy كتضرب ب multiplier حقيقي.
            </p>
            <p>
              هاد الـ loop بسيطة ولكن قوية: تجمّع من puzzle و mining، ترجع تبني وتطوّر CITY CORE، ومن
              بعد ترجع تلعب loops بقوة أعلى.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-[0.65rem] md:text-[0.7rem] text-slate-300/90">
            <div className="rounded-xl border border-slate-700/80 bg-slate-950/90 p-3">
              <div className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">
                DESIGN GOAL
              </div>
              <p className="mt-1.5">
                Loop قصير + progression واضح + fantasy ديال مدينة سيبرية كتفيق معك.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700/80 bg-slate-950/90 p-3">
              <div className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">
                FUTURE ON-CHAIN
              </div>
              <p className="mt-1.5">
                نفس المنطق غادي يتحول لـ NFTs و real token boosts فـ نسخة Web3 من EZZI WORLD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PanelShell>
  );
};

// ---------- Export all panels ----------

export const GamePanels: React.FC<{ selectedCharacter: NftCharacter | null }> = ({
  selectedCharacter,
}) => {
  return (
    <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
      <PuzzlePanel />
      <MiningPanel />
      <BuildingsPanel />
    </div>
  );
};
