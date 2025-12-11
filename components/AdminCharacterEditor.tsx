'use client';

import React, { useEffect, useState } from 'react';
import type { EzziCharacter, CharacterRarity } from '@/lib/gameTypes';

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

function persistCustomCharacters(chars: EzziCharacter[]) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(chars));
  } catch {
    // ignore
  }
}

const rarities: CharacterRarity[] = ['common', 'rare', 'epic', 'legendary'];

export function AdminCharacterEditor() {
  const [characters, setCharacters] = useState<EzziCharacter[]>([]);
  const [form, setForm] = useState({
    name: '',
    rarity: 'rare' as CharacterRarity,
    image: '/avatars/custom.png',
    priceEzzi: 1000,
    description: ''
  });

  useEffect(() => {
    setCharacters(loadCustomCharacters());
  }, []);

  const handleAdd = () => {
    if (!form.name.trim()) return;
    const id = form.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newChar: EzziCharacter = {
      id,
      name: form.name.trim(),
      rarity: form.rarity,
      image: form.image,
      priceEzzi: form.priceEzzi,
      description: form.description || 'Custom Ezzi avatar',
      boost: {
        puzzleMultiplier: 1.1,
        miningMultiplier: 1.1,
        buildingMultiplier: 1.1,
        passiveEnergyPerHour: 3
      }
    };
    const updated = [...characters, newChar];
    setCharacters(updated);
    persistCustomCharacters(updated);
    setForm({
      name: '',
      rarity: 'rare',
      image: '/avatars/custom.png',
      priceEzzi: 1000,
      description: ''
    });
  };

  const handleDelete = (id: string) => {
    const updated = characters.filter(c => c.id !== id);
    setCharacters(updated);
    persistCustomCharacters(updated);
  };

  return (
    <section className="glass-panel mt-6 border-amber-500/40 bg-slate-950/80">
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-4 py-3">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-400">Admin · Avatars</div>
          <p className="text-xs text-slate-300">Locally manage extra characters for testing & marketing drops.</p>
        </div>
        <span className="rounded-full bg-amber-500/10 px-2 py-1 text-[10px] text-amber-300">
          Stored in your browser only
        </span>
      </div>
      <div className="grid gap-4 px-4 py-4 md:grid-cols-[2fr,3fr]">
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
          <label className="block text-xs text-slate-300">
            Name
            <input
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-2 py-1 text-xs"
              placeholder="Crystal Phantom"
            />
          </label>
          <div className="flex gap-2">
            <label className="flex-1 text-xs text-slate-300">
              Image URL
              <input
                value={form.image}
                onChange={e => setForm({ ...form, image: e.target.value })}
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-2 py-1 text-xs"
                placeholder="/avatars/phantom.png"
              />
            </label>
            <label className="w-28 text-xs text-slate-300">
              Rarity
              <select
                value={form.rarity}
                onChange={e => setForm({ ...form, rarity: e.target.value as CharacterRarity })}
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-2 py-1 text-[11px]"
              >
                {rarities.map(r => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="block text-xs text-slate-300">
            Price (EZZI)
            <input
              type="number"
              min={0}
              value={form.priceEzzi}
              onChange={e => setForm({ ...form, priceEzzi: Number(e.target.value || 0) })}
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-2 py-1 text-xs"
            />
          </label>
          <label className="block text-xs text-slate-300">
            Short description
            <textarea
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              rows={3}
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-2 py-1 text-xs"
            />
          </label>
          <button
            onClick={handleAdd}
            className="mt-2 w-full rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-500 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-amber-400/40 hover:brightness-110"
          >
            Add Character
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Custom characters</span>
            <span>{characters.length}</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {characters.map(c => (
              <div
                key={c.id}
                className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/80 p-2 text-xs"
              >
                <div className="h-10 w-10 overflow-hidden rounded-lg border border-slate-700 bg-slate-900/80">
                  <img src={c.image} alt={c.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-semibold text-slate-50">{c.name}</span>
                    <span className="text-[10px] uppercase text-slate-400">{c.rarity}</span>
                  </div>
                  <div className="text-[10px] text-slate-400">{c.priceEzzi.toLocaleString()} EZZI</div>
                </div>
                <button
                  onClick={() => handleDelete(c.id)}
                  className="rounded-full border border-red-500/50 px-2 py-0.5 text-[10px] text-red-300 hover:bg-red-500/10"
                >
                  Remove
                </button>
              </div>
            ))}
            {!characters.length && (
              <p className="text-xs text-slate-500">
                No custom avatars yet. Add your first one on the left — it will instantly appear in the marketplace
                grid.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
