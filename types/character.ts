import type { Quest as GameQuest } from './quest';
import { AssetType } from '@/types/asset';

// Types de base
export type Stat = {
  name: string;
  value: number;
  description?: string;
};

export type Resource = {
  name: string;
  current: number;
  max: number;
  description?: string;
};

export interface Asset {
  id: string;
  name: string;
  type: AssetType;
  description: string;
  abilities: {
    id: string;
    description: string;
    enabled: boolean;
    requiresInput?: boolean;
    inputValue?: string;
    requiresTrack?: boolean;
    trackValue?: number;
    trackMax?: number;
  }[];
  experience: number;
}

export type Quest = {
  title: string;
  description: string;
  status: 'active' | 'completed' | 'failed';
  progress?: number;
  rewards?: string[];
};

export type CharacterValidation = {
  maxStartingAssets: number;
  recommendedStartingQuests: {
    min: number;
    max: number;
  };
};

// Type principal pour la fiche de personnage
export type Character = {
  id: string;
  name: string;
  userId: string;
  portrait?: string;
  background: string;
  
  // Stats de base
  stats: {
    edge: Stat;
    heart: Stat;
    iron: Stat;
    shadow: Stat;
    wits: Stat;
  };
  
  // Ressources
  resources: {
    health: Resource;
    spirit: Resource;
    supply: Resource;
    momentum: Resource;
  };
  
  // Assets (capacités, équipement, etc.)
  assets: Asset[];
  
  // Quêtes
  quests: GameQuest[];
  
  validation: CharacterValidation;
  
  // Métadonnées
  createdAt: Date;
  updatedAt: Date;
};

export const DEFAULT_CHARACTER_VALIDATION: CharacterValidation = {
  maxStartingAssets: 3,
  recommendedStartingQuests: {
    min: 1,
    max: 3
  }
}; 