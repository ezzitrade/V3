'use client';

import React from 'react';
import type { EzziCharacter } from '@/lib/gameTypes';
import { useGameState } from '@/context/GameStateContext';

interface Props {
  character: EzziCharacter;
}

const rarityColors: Record<EzziCharacter['rarity'], string> = {
  common: 'from-amber-500 to-orange-400',
  rare: 'from-fuchsia-400 to-indigo-400',
  epic: 'from-cyan-400 to-sky-500',
  legendary: 'from-amber-300 via-amber-500 to-fuchsia-400'
};

export function CharacterCard({ character }: Props) {
  const { buyCharacter, ownedCharacters } = useGameState();
  const owned = ownedCharacters.some(c => c.id === character.id);

  return (
    <div className="glass-panel flex flex-col overflow-hidden border-slate-700/70">
      <div className={`h-1 w-full bg-gradient-to-r ${rarityColors[character.rarity]}`} />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start gap-3">
          <div className="aspect-[3/4] w-20 overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/80">
            <img src={character.image} alt={character.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-50">{character.name}</h3>
              <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-300">
                {character.rarity}
              </span>
            </div>
            <p className="line-clamp-3 text-xs text-slate-300">{character.description}</p>
            <div className="mt-2 grid grid-cols-2 gap-1 text-[10px] text-slate-300">
              <span>🧠 Puzzle × {character.boost.puzzleMultiplier.toFixed(2)}</span>
              <span>⛏ Mining × {character.boost.miningMultiplier.toFixed(2)}</span>
              <span>🏛 Build × {character.boost.buildingMultiplier.toFixed(2)}</span>
              <span>⚡ +{character.boost.passiveEnergyPerHour}/h</span>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="font-semibold text-cyan-300">{character.priceEzzi.toLocaleString()} EZZI</span>
          <button
            disabled={owned}
            onClick={() => buyCharacter(character.id)}
            className={`rounded-full px-3 py-1 text-[11px] font-semibold transition ${
              owned
                ? 'cursor-default bg-slate-800/80 text-slate-500'
                : 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-slate-950 shadow-lg shadow-cyan-500/40 hover:brightness-110'
            }`}
          >
            {owned ? 'Owned' : 'Unlock Avatar'}
          </button>
        </div>
      </div>
    </div>
  );
}
