import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { BasicAction } from '@/types/action';

interface BasicActionsProps {
  actions: BasicAction[];
}

export function BasicActions({ actions }: BasicActionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {actions.map((action) => (
          <Button 
            key={action.id}
            className="w-full"
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
} 