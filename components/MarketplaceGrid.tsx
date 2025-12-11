'use client';

import React, { useEffect, useState } from 'react';
import { CharacterCard } from '@/components/CharacterCard';
import { BASE_CHARACTERS } from '@/lib/nftCatalog';
import type { EzziCharacter } from '@/lib/gameTypes';

const STORAGE_KEY = 'ezzi_admin_custom_characters_v1';

function loadCustomCharacters(): EzziCharacter[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as EzziCharacter[];
  } catch {
    return [];
  }
}

export function MarketplaceGrid() {
  const [characters, setCharacters] = useState<EzziCharacter[]>(BASE_CHARACTERS);

  useEffect(() => {
    const custom = loadCustomCharacters();
    if (custom.length) {
      setCharacters([...BASE_CHARACTERS, ...custom]);
    }
  }, []);

  return (
    <section className="mt-6">
      <div className="flex items-baseline justify-between gap-2">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-cyan-400">GENESIS AVATARS</h2>
        <p className="text-xs text-slate-400">Mint off-chain now · on-chain bridge arrives at token launch</p>
      </div>
      <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {characters.map(c => (
          <CharacterCard key={c.id} character={c} />
        ))}
      </div>
    </section>
  );
}
