import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import type { Quest, QuestRank } from '@/types/quest';
import { QUEST_RANKS } from '@/types/quest';

interface QuestMakerProps {
  onQuestAdd: (quest: Quest) => void;
  recommendedMin: number;
  recommendedMax: number;
  currentQuestCount: number;
}

export function QuestMaker({ 
  onQuestAdd, 
  recommendedMin, 
  recommendedMax, 
  currentQuestCount 
}: QuestMakerProps) {
  const [newQuest, setNewQuest] = useState<Partial<Quest>>({
    title: '',
    description: '',
    rank: 'dangerous',
    swornTo: '',
    context: '',
    resolutionConditions: '',
    progress: 0
  });

  const handleSubmit = () => {
    if (!newQuest.title || !newQuest.description || !newQuest.rank) return;

    const quest: Quest = {
      id: crypto.randomUUID(),
      ...newQuest as Required<Omit<Quest, 'id' | 'status' | 'createdAt' | 'updatedAt'>>,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    onQuestAdd(quest);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          Ajouter un Serment de Fer 
          {currentQuestCount > 0 && ` (${currentQuestCount})`}
          {currentQuestCount === 0 && ` (recommandé: ${recommendedMin}-${recommendedMax})`}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Faire un Serment de Fer</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Titre du serment</Label>
            <Input
              value={newQuest.title}
              onChange={(e) => setNewQuest(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Je jure de..."
            />
          </div>

          <div className="space-y-2">
            <Label>Rang du serment</Label>
            <RadioGroup
              value={newQuest.rank}
              onValueChange={(value: QuestRank) => 
                setNewQuest(prev => ({ ...prev, rank: value }))
              }
              className="grid grid-cols-2 gap-2"
            >
              {QUEST_RANKS.map((rank) => (
                <div key={rank.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={rank.value} id={rank.value} />
                  <Label htmlFor={rank.value}>{rank.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Envers qui faites-vous ce serment ?</Label>
            <Input
              value={newQuest.swornTo}
              onChange={(e) => setNewQuest(prev => ({ ...prev, swornTo: e.target.value }))}
              placeholder="Une personne, une communauté, une entité..."
            />
          </div>

          <div className="space-y-2">
            <Label>Description détaillée</Label>
            <Textarea
              value={newQuest.description}
              onChange={(e) => setNewQuest(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Décrivez les circonstances et la nature exacte de votre serment..."
            />
          </div>

          <div className="space-y-2">
            <Label>Conditions de résolution</Label>
            <Textarea
              value={newQuest.resolutionConditions}
              onChange={(e) => setNewQuest(prev => ({ ...prev, resolutionConditions: e.target.value }))}
              placeholder="Que devez-vous accomplir précisément pour considérer ce serment comme rempli ?"
            />
          </div>

          <Button 
            className="w-full" 
            onClick={handleSubmit}
            disabled={!newQuest.title || !newQuest.description || !newQuest.rank}
          >
            Jurer ce Serment de Fer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 