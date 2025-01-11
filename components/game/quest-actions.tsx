import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QuestRank, QUEST_RANKS, calculateProgress, type Quest, type RollResult, calculateFulfillResult, type FulfillResult } from '@/types/quest';

interface QuestActionsProps {
  quest: Quest;
  onMakeProgress: (questId: string, progress: number) => void;
  onFulfillVow: (questId: string, result: FulfillResult) => void;
  onForsakeVow: (questId: string) => void;
}

export function QuestActions({ quest, onMakeProgress, onFulfillVow, onForsakeVow }: QuestActionsProps) {
  const [selectedTaskRank, setSelectedTaskRank] = useState<QuestRank>('dangerous');
  const [showProgressResult, setShowProgressResult] = useState(false);
  const [lastRollResult, setLastRollResult] = useState<RollResult | null>(null);

  const progressBonus = Math.floor(quest.progress / 10);
  const canFulfill = quest.progress >= 4; // Minimum recommandé pour tenter

  const handleMakeProgress = (result: RollResult) => {
    const progress = calculateProgress(quest.rank, selectedTaskRank, result);
    setLastRollResult(result);
    setShowProgressResult(true);
    onMakeProgress(quest.id, progress);
  };

  const handleFulfillVow = (result: RollResult) => {
    const fulfillResult = calculateFulfillResult(quest.progress, result);
    onFulfillVow(quest.id, fulfillResult);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" size="sm">
            Make Progress
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Make Progress</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Rang de la tâche accomplie</label>
              <Select
                value={selectedTaskRank}
                onValueChange={(value: QuestRank) => {
                  setSelectedTaskRank(value);
                  setShowProgressResult(false);
                }}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {QUEST_RANKS.map((rank) => (
                    <SelectItem key={rank.value} value={rank.value}>
                      {rank.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {!showProgressResult ? (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Lancez les dés et sélectionnez le résultat :
                </p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => handleMakeProgress('strong')}
                  >
                    Strong Hit
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleMakeProgress('weak')}
                  >
                    Weak Hit
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleMakeProgress('miss')}
                  >
                    Miss
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-sm">
                  {lastRollResult === 'miss' ? (
                    "Pas de progression cette fois-ci."
                  ) : (
                    `Vous progressez de ${calculateProgress(quest.rank, selectedTaskRank, lastRollResult!)} cases.`
                  )}
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setShowProgressResult(false)}
                >
                  Nouveau jet
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="default" 
            size="sm"
            disabled={!canFulfill}
          >
            Fulfill Your Vow (+{progressBonus})
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Fulfill Your Vow</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Lancez les dés et ajoutez +{progressBonus} (progrès actuel : {quest.progress}/10).
              {!canFulfill && " Il est recommandé d'avoir au moins 4 points de progrès."}
            </p>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => handleFulfillVow('strong')}
              >
                Strong Hit (+{progressBonus})
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleFulfillVow('weak')}
              >
                Weak Hit (+{progressBonus})
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleFulfillVow('miss')}
              >
                Miss (+{progressBonus})
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="destructive" 
            size="sm"
          >
            Forsake Your Vow
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Forsake Your Vow</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Êtes-vous sûr de vouloir abandonner cette quête ? 
              Cela aura des conséquences sur votre personnage.
            </p>
            <div className="flex justify-end gap-2">
              <Button 
                variant="destructive" 
                onClick={() => onForsakeVow(quest.id)}
              >
                Abandonner la quête
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 