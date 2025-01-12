import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Action, ActionLog } from '@/types/action';
import { actions } from '@/data/actions';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function BasicActions() {
  const [actionLogs, setActionLogs] = useState<ActionLog[]>([]);
  const actionsList = actions || [];

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
    
    setActionLogs(prev => [...prev, {
      action,
      timestamp: Date.now(),
      result
    }]);
  };

  return (
    <div className="space-y-6">
      {/* Journal de campagne */}
      <Card>
        <CardHeader>
          <CardTitle>Journal de Campagne</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            {actionLogs.slice().reverse().map((log, index) => (
              <div key={index} className="mb-4 pb-4 border-b last:border-0">
                <div className="text-sm text-muted-foreground">
                  {new Date(log.timestamp).toLocaleTimeString()}
                </div>
                <div className="font-medium">{log.action.label}</div>
                {log.result && (
                  <div className="text-sm mt-1">
                    Résultat: <span className="font-medium">{log.result}</span>
                  </div>
                )}
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Liste des actions */}
      <Card>
        <CardHeader>
          <CardTitle>Actions</CardTitle>
        </CardHeader>
        <CardContent>
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
    </div>
  );
} 