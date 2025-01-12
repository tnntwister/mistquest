type Stat = 'vigueur' | 'coeur' | 'fer' | 'ombre' | 'astuce';

type ActionRank = 'pénible' | 'dangereux' | 'redoutable' | 'extrême' | 'épique';

export type Action = {
  id: string;
  label: string;
  description: string;
  category: string;
  stat?: Stat;
  stats?: Partial<Record<string, string>>;
  rank?: ActionRank | Record<ActionRank, string>;
  trigger: string;
  outcomes: {
    strongHit?: string[];
    weakHit?: string[];
    miss?: string[];
    effect?: string[];
  };
  options?: Array<{
    name: string;
    description: string;
  }>;
  additionalEffects?: {
    withBond?: string;
    withMomentum?: string;
    tableauProbabilites?: Record<string, string>;
    tableauResultats?: Record<string, string>;
  };
};

export interface ActionLog {
  action: Action;
  timestamp: number;
  result?: 'strongHit' | 'weakHit' | 'miss';
}