import { EzziCharacter } from './gameTypes';

export const BASE_CHARACTERS: EzziCharacter[] = [
  {
    id: 'ember-sentinel',
    name: 'Ember Sentinel',
    rarity: 'common',
    image: '/avatars/common3.png',
    description: 'Balanced starter guardian that slightly amplifies all your actions.',
    boost: {
      puzzleMultiplier: 1.1,
      miningMultiplier: 1.1,
      buildingMultiplier: 1.1,
      passiveEnergyPerHour: 2
    },
    priceEzzi: 250
  },
  {
    id: 'lotus-weaver',
    name: 'Lotus Weaver',
    rarity: 'rare',
    image: '/avatars/rara4.png',
    description: 'Synchronizes with Mystic Mountains to increase puzzle energy.',
    boost: {
      puzzleMultiplier: 1.35,
      miningMultiplier: 1.1,
      buildingMultiplier: 1.15,
      passiveEnergyPerHour: 5
    },
    priceEzzi: 650
  },
  {
    id: 'chrono-prism',
    name: 'Chrono Prism',
    rarity: 'epic',
    image: '/avatars/epice1.png',
    description: 'Bends time, massively boosting mining speed and offline energy.',
    boost: {
      puzzleMultiplier: 1.2,
      miningMultiplier: 1.6,
      buildingMultiplier: 1.2,
      passiveEnergyPerHour: 15
    },
    priceEzzi: 1600
  },
  {
    id: 'aurora-archon',
    name: 'Aurora Archon',
    rarity: 'legendary',
    image: '/avatars/legendary1.png',
    description: 'Legend of Ezzi World. Supercharges every war action you trigger.',
    boost: {
      puzzleMultiplier: 1.8,
      miningMultiplier: 1.5,
      buildingMultiplier: 1.5,
      passiveEnergyPerHour: 40
    },
    priceEzzi: 4200
  }
];
