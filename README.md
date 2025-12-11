# Ezzi World · Off‑chain Genesis Prototype

This is a minimal Next.js 14 + Tailwind project for the **Ezzi World: War of Realms** off‑chain demo.

## Features

- Ultra‑clean cyberpunk landing page with:
  - War Console explainer
  - Capsule presale strip (UI only, no real payments)
  - Genesis avatar spotlight section
  - Social links (X, Discord, Telegram)

- Game page `/game`
  - Puzzle panel → calls `contributeWarEnergy(50|120, "PUZZLE_SOLVED")`
  - Mining panel → calls `contributeWarEnergy(20 * cycles, "MINING_LOOP_COMPLETED")`
  - Building upgrades → calls `contributeWarEnergy(35 * level, "BUILDING_UPGRADED")`
  - Avatar boost overview

- Marketplace `/marketplace`
  - Off‑chain avatar marketplace using `EzziCharacter` definitions
  - Buying uses off‑chain Ezzi (just numbers in localStorage)

- Admin tools `/admin`
  - Local editor to add/remove extra avatars
  - Stored in browser only through `localStorage`

- Game state
  - Stored in localStorage under `ezzi_world_state_v1`
  - Tracks warEnergy, Ezzi coins, owned avatars
  - Applies avatar boosts and simple passive warEnergy/hour

## Running locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploying on Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, create a new project from that repo.
3. Use the default **Next.js** preset.
4. Deploy — no extra environment variables are required for this off‑chain prototype.

When you later add real Solana wallet connect / presale logic, you can plug it into:

- The **capsule strip** on the landing page.
- The **GameStateContext** to sync on‑chain balances.
