import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Action, ActionLog } from '@/types/action';
import { actions } from '@/data/actions';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCampaignLog } from '@/contexts/campaign-log-context';

export function BasicActions() {
  const { addLog } = useCampaignLog();
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
    
    addLog({
      action,
      timestamp: Date.now(),
      result
    });
  };

  return (
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
  );
} 