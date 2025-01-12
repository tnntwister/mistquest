export type EncounterType = 'combat' | 'social' | 'exploration';
export type RegionType = 'ravenland' | 'hinterlands' | 'tempest_hills' | 'flooded_lands' | 'havens';
export type RankType = 'troublesome' | 'dangerous' | 'formidable' | 'extreme' | 'epic';
export type DispositionType = 'friendly' | 'neutral' | 'hostile';

export interface Encounter {
  id: string;
  label: string;
  description: string;
  type: EncounterType;
  region?: RegionType;
  rank?: RankType;
  disposition?: DispositionType;
  details?: {
    theme?: string;
    action?: string;
    features?: string[];
    threats?: string[];
    opportunities?: string[];
  };
  moves?: string[];
} 