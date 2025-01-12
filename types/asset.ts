export type AssetType = 'companion' | 'combat' | 'ritual' | 'path';

export type AssetAbility = {
  id: string;
  description: string;
  enabled: boolean;
  requiresInput?: boolean;
  inputValue?: string;
  requiresTrack?: boolean;
  trackValue?: number;
  trackMax?: number;
};

export interface Asset {
  id: string;
  name: string;
  type: AssetType;
  description: string;
  experience: number;
  abilities: AssetAbility[];
  moves?: string[];
}

export type AssetTemplate = Omit<Asset, 'experience' | 'abilities'> & {
  abilities: Omit<AssetAbility, 'enabled'>[];
}; 