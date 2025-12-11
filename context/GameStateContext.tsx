'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { EzziCharacter, CharacterBoost } from '@/lib/gameTypes';
import { BASE_CHARACTERS } from '@/lib/nftCatalog';

type EnergySource = 'PUZZLE_SOLVED' | 'MINING_LOOP_COMPLETED' | 'BUILDING_UPGRADED' | 'PASSIVE_TICK';

export interface GameState {
  walletAddress: string | null;
  warEnergy: number;
  ezziCoins: number;
  boosts: CharacterBoost;
  ownedCharacters: EzziCharacter[];
  totalCapsulesPurchased: number;
  connectDummyWallet: (address?: string) => void;
  contributeWarEnergy: (baseAmount: number, source: EnergySource, meta?: string) => void;
  addCoins: (amount: number) => void;
  spendCoins: (amount: number) => boolean;
  buyCharacter: (characterId: string) => boolean;
}

const defaultBoost: CharacterBoost = {
  puzzleMultiplier: 1,
  miningMultiplier: 1,
  buildingMultiplier: 1,
  passiveEnergyPerHour: 0
};

const GameStateContext = createContext<GameState | undefined>(undefined);

const STORAGE_KEY = 'ezzi_world_state_v1';

interface StoredState {
  warEnergy: number;
  ezziCoins: number;
  ownedCharacterIds: string[];
  totalCapsulesPurchased: number;
  lastPassiveAt: number | null;
}

function loadStoredState(): StoredState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredState;
  } catch {
    return null;
  }
}

function persistState(state: StoredState) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

function computeBoost(characters: EzziCharacter[]): CharacterBoost {
  return characters.reduce(
    (acc, c) => ({
      puzzleMultiplier: acc.puzzleMultiplier * c.boost.puzzleMultiplier,
      miningMultiplier: acc.miningMultiplier * c.boost.miningMultiplier,
      buildingMultiplier: acc.buildingMultiplier * c.boost.buildingMultiplier,
      passiveEnergyPerHour: acc.passiveEnergyPerHour + c.boost.passiveEnergyPerHour
    }),
    defaultBoost
  );
}

export function GameStateProvider({ children }: { children: React.ReactNode }) {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [warEnergy, setWarEnergy] = useState(0);
  const [ezziCoins, setEzziCoins] = useState(0);
  const [ownedCharacters, setOwnedCharacters] = useState<EzziCharacter[]>([]);
  const [totalCapsulesPurchased, setTotalCapsulesPurchased] = useState(0);
  const [lastPassiveAt, setLastPassiveAt] = useState<number | null>(null);

  useEffect(() => {
    const stored = loadStoredState();
    if (!stored) return;
    const owned = BASE_CHARACTERS.filter(c => stored.ownedCharacterIds.includes(c.id));
    setOwnedCharacters(owned);
    setWarEnergy(stored.warEnergy);
    setEzziCoins(stored.ezziCoins);
    setTotalCapsulesPurchased(stored.totalCapsulesPurchased);
    setLastPassiveAt(stored.lastPassiveAt);
  }, []);

  useEffect(() => {
    const now = Date.now();
    if (lastPassiveAt == null) {
      setLastPassiveAt(now);
      return;
    }
    const hours = (now - lastPassiveAt) / (1000 * 60 * 60);
    if (hours <= 0) return;
    const hourly = boosts.passiveEnergyPerHour;
    if (hourly <= 0) return;
    const gained = Math.floor(hourly * hours);
    if (gained > 0) {
      setWarEnergy(prev => prev + gained);
      setLastPassiveAt(now);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ownedCharacters]);

  useEffect(() => {
    const stored: StoredState = {
      warEnergy,
      ezziCoins,
      ownedCharacterIds: ownedCharacters.map(c => c.id),
      totalCapsulesPurchased,
      lastPassiveAt
    };
    persistState(stored);
  }, [warEnergy, ezziCoins, ownedCharacters, totalCapsulesPurchased, lastPassiveAt]);

  const boosts = useMemo(() => computeBoost(ownedCharacters), [ownedCharacters]);

  const connectDummyWallet = (address?: string) => {
    if (address) {
      setWalletAddress(address);
    } else {
      const rand = Math.random().toString(16).slice(2, 10);
      setWalletAddress(`Ezzi_${rand}`);
    }
  };

  const applyReward = (baseAmount: number, source: EnergySource) => {
    let multiplier = 1;
    switch (source) {
      case 'PUZZLE_SOLVED':
        multiplier = boosts.puzzleMultiplier;
        break;
      case 'MINING_LOOP_COMPLETED':
        multiplier = boosts.miningMultiplier;
        break;
      case 'BUILDING_UPGRADED':
        multiplier = boosts.buildingMultiplier;
        break;
      case 'PASSIVE_TICK':
      default:
        multiplier = 1;
        break;
    }
    const energy = Math.floor(baseAmount * multiplier);
    const coins = Math.floor(baseAmount * 0.2 * multiplier);
    return { energy, coins };
  };

  const contributeWarEnergy = (baseAmount: number, source: EnergySource, _meta?: string) => {
    const { energy, coins } = applyReward(baseAmount, source);
    setWarEnergy(prev => prev + energy);
    setEzziCoins(prev => prev + coins);
  };

  const addCoins = (amount: number) => setEzziCoins(prev => prev + amount);

  const spendCoins = (amount: number) => {
    if (ezziCoins < amount) return false;
    setEzziCoins(prev => prev - amount);
    return true;
  };

  const buyCharacter = (characterId: string) => {
    const existing = ownedCharacters.find(c => c.id === characterId);
    if (existing) return false;
    const def = BASE_CHARACTERS.find(c => c.id === characterId);
    if (!def) return false;
    if (!spendCoins(def.priceEzzi)) return false;
    setOwnedCharacters(prev => [...prev, def]);
    return true;
  };

  const value: GameState = {
    walletAddress,
    warEnergy,
    ezziCoins,
    boosts,
    ownedCharacters,
    totalCapsulesPurchased,
    connectDummyWallet,
    contributeWarEnergy,
    addCoins,
    spendCoins,
    buyCharacter
  };

  return <GameStateContext.Provider value={value}>{children}</GameStateContext.Provider>;
}

export function useGameState() {
  const ctx = useContext(GameStateContext);
  if (!ctx) throw new Error('useGameState must be used inside GameStateProvider');
  return ctx;
}
