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
    const trimmedText = actionText.trim();
    
    if (trimmedText.length < 2 && !window.confirm('Déclencher l\'action sans description ?')) {
      return;
    }

    const results = ['strongHit', 'weakHit', 'miss'];
    const result = results[Math.floor(Math.random() * results.length)] as ActionLog['result'];
    
    addLog({
      action,
      timestamp: Date.now(),
      result,
      text: trimmedText || undefined
    });

    setActionText("");
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
              <ScrollArea className="min-h-[200px] px-2">
                <div className="space-y-2 grid grid-cols-2 gap-4">
                  {actions.map(action => (
                    <div key={action.id}>
                      <div className="flex flex-col justify-between items-center">
                        <h3>{action.label}</h3>
                        <p className="text-xs text-gray-600 min-h-16 pt-2 pb-6">{action.description}</p>
                        <Button 
                          variant="outline"
                          className="w-full justify-center"
                          onClick={() => handleActionClick(action)}
                        >
                            Déclencher l'action
                        </Button>
                      </div>
                    </div>
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