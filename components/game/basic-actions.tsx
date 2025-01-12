import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Action, ActionLog } from '@/types/action';
import { actions } from '@/data/actions';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCampaignLog } from '@/contexts/campaign-log-context';
import { useState } from 'react';

export function BasicActions() {
  const { addLog } = useCampaignLog();
  const actionsList = actions || [];
  const [actionText, setActionText] = useState("");

  // Grouper les actions par catégorie
  const actionsByCategory = (actionsList || []).reduce<Record<string, Action[]>>((acc, action) => {
    if (!action) return acc;
    const category = action.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(action);
    return acc;
  }, {});

  const handleActionClick = (action: Action) => {
    const results = ['strongHit', 'weakHit', 'miss'];
    const result = results[Math.floor(Math.random() * results.length)] as ActionLog['result'];
    
    addLog({
      action,
      timestamp: Date.now(),
      result,
      text: actionText.trim() || undefined
    });

    setActionText(""); // Reset le texte après l'action
  };

  return (
    <Card>
      <CardContent className="space-y-4 mt-4">
        <textarea
          value={actionText}
          onChange={(e) => setActionText(e.target.value)}
          placeholder="Décrivez votre action"
          className="w-full h-20 p-2 text-sm bg-background border rounded-md resize-none"
        />
        <Tabs defaultValue={Object.keys(actionsByCategory)[0]}>
          <TabsList className="w-full">
            {Object.keys(actionsByCategory).map(category => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(actionsByCategory).map(([category, actions]) => (
            <TabsContent key={category} value={category}>
              <ScrollArea className="h-[400px]">
                <div className="space-y-2">
                  {actions.map(action => (
                    <Button 
                      key={action.id}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => handleActionClick(action)}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
} 