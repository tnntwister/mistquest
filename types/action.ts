type Stat = 'vigueur' | 'coeur' | 'fer' | 'ombre' | 'astuce' | 'sante' | 'esprit' | 'sante_compagnon';

type ActionRank = 'pénible' | 'dangereux' | 'redoutable' | 'extrême' | 'épique';

export type Action = {
  id: string;
  label: string;
  description: string;
  category: string;
  stats?: Partial<Record<Stat, string>>;
  rank?: ActionRank | Record<ActionRank, string>;
  trigger: string;
  outcomes?: {
    strongHit?: (string | { name: string; description: string })[];
    weakHit?: (string | { name: string; description: string })[];
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
  result: 'strongHit' | 'weakHit' | 'miss' | 'encounter';
  chapter: number;
  text?: string;
}