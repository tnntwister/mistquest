import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Action } from '@/types/action';
import { actions } from '@/data/actions';
import type { Quest, FulfillResult } from '@/types/quest';

interface QuestActionsProps {
  quest: Quest;
  onMakeProgress: (questId: string, progress: number) => void;
  onFulfillVow: (questId: string, result: FulfillResult) => void;
  onForsakeVow: (questId: string) => void;
}

const ACTION_CATEGORIES = [
  { value: 'aventure', label: 'Aventure' },
  { value: 'combat', label: 'Combat' },
  { value: 'relation', label: 'Relation' },
] as const;

export function QuestActions({ quest, onMakeProgress, onFulfillVow, onForsakeVow }: QuestActionsProps) {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<typeof ACTION_CATEGORIES[number]['value']>('aventure');

  const progressBonus = Math.floor(quest.progress / 10);

  return (
    <div className="flex gap-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Actions</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Choisir une Action</DialogTitle>
          </DialogHeader>
          <Tabs value={selectedCategory} onValueChange={(v) => setSelectedCategory(v as typeof selectedCategory)}>
            <TabsList className="grid w-full grid-cols-3">
              {ACTION_CATEGORIES.map(category => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {ACTION_CATEGORIES.map(category => (
              <TabsContent key={category.value} value={category.value} className="space-y-4">
                {actions
                  .filter(action => action?.category === category.value)
                  .map(action => action && (
                    <div key={action.id} className="p-4 border rounded-lg space-y-2">
                      <h3 className="font-bold">{action.label}</h3>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                      <div className="flex gap-2">
                        <Button onClick={() => {
                          // TODO: Implémenter la logique de résolution
                          setOpen(false);
                        }}>
                          Fort
                        </Button>
                        <Button onClick={() => {
                          setOpen(false);
                        }}>
                          Faible
                        </Button>
                        <Button onClick={() => {
                          setOpen(false);
                        }}>
                          Échec
                        </Button>
                      </div>
                    </div>
                  ))}
              </TabsContent>
            ))}
          </Tabs>
        </DialogContent>
      </Dialog>
      <Button variant="destructive" onClick={() => onForsakeVow?.(quest.id)}>
        Abandonner
      </Button>
    </div>
  );
} 