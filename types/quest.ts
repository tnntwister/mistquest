export type QuestRank = 'troublesome' | 'dangerous' | 'formidable' | 'extreme' | 'epic';
export type QuestStatus = 'active' | 'failed' | 'fulfilled' | 'forsaken';

export const QUEST_RANKS: { value: QuestRank; label: string }[] = [
  { value: 'troublesome', label: 'Problématique' },
  { value: 'dangerous', label: 'Dangereuse' },
  { value: 'formidable', label: 'Formidable' },
  { value: 'extreme', label: 'Extrême' },
  { value: 'epic', label: 'Épique' }
];

export type Quest = {
  id: string;
  title: string;
  description: string;
  rank: QuestRank;
  status: QuestStatus;
  progress: number; // 0-10
  swornTo: string; // Personne/entité envers qui le serment est fait
  context: string;
  resolutionConditions: string;
  backgroundVows?: string[];
  linkedQuests?: string[]; // IDs des quêtes liées
  bonds?: string[]; // IDs des liens
  createdAt: Date;
  updatedAt: Date;
};

export const QUEST_RANK_VALUES: Record<QuestRank, number> = {
  troublesome: 1,
  dangerous: 2,
  formidable: 3,
  extreme: 4,
  epic: 5
};

export type RollResult = 'strong' | 'weak' | 'miss';

export function calculateProgress(questRank: QuestRank, taskRank: QuestRank, rollResult: RollResult): number {
  const questValue = QUEST_RANK_VALUES[questRank];
  const taskValue = QUEST_RANK_VALUES[taskRank];
  const rankDifference = taskValue - questValue;

  // Calcul du nombre de base de cases selon la différence de rang
  let baseProgress = 0;
  if (rankDifference >= 2) {
    baseProgress = 3;
  } else if (rankDifference >= 1) {
    baseProgress = 2;
  } else if (rankDifference === 0) {
    baseProgress = 2;
  } else if (rankDifference === -1) {
    baseProgress = 1;
  } else {
    baseProgress = 0;
  }

  // Multiplication selon le résultat du jet
  switch (rollResult) {
    case 'strong':
      return baseProgress * 2;
    case 'weak':
      return baseProgress;
    case 'miss':
    default:
      return 0;
  }
}

export type FulfillResult = {
  outcome: 'strong' | 'weak' | 'miss';
  progress: number;
  experience: number;
  canMarkProgress?: boolean;
  requiresCost?: boolean;
  requiresMajorCost?: boolean;
};

export function calculateFulfillResult(progress: number, rollResult: RollResult): FulfillResult {
  const progressBonus = Math.floor(progress / 10);

  switch (rollResult) {
    case 'strong':
      return {
        outcome: 'strong',
        progress,
        experience: 2,
        canMarkProgress: true
      };
    case 'weak':
      return {
        outcome: 'weak',
        progress,
        experience: 1,
        requiresCost: true
      };
    case 'miss':
    default:
      return {
        outcome: 'miss',
        progress,
        experience: 0,
        requiresMajorCost: true
      };
  }
} 