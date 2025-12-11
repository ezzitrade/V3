export type CharacterRarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface CharacterBoost {
  puzzleMultiplier: number;
  miningMultiplier: number;
  buildingMultiplier: number;
  passiveEnergyPerHour: number;
}

export interface EzziCharacter {
  id: string;
  name: string;
  rarity: CharacterRarity;
  image: string;
  description: string;
  boost: CharacterBoost;
  priceEzzi: number;
}
