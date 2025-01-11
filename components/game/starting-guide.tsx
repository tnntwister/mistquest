import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import type { StartingGuide } from '@/types/task';

interface StartingGuideProps {
  guide: StartingGuide;
  onTaskToggle: (taskId: string) => void;
}

export function StartingGuide({ guide, onTaskToggle }: StartingGuideProps) {
  const allTasksCompleted = guide.tasks.every(task => task.completed);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{guide.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {allTasksCompleted ? (
          <div className="flex items-center justify-between">
            <p className="text-green-500 font-medium">
              Félicitations ! Vous êtes prêt à commencer votre aventure.
            </p>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onTaskToggle(guide.tasks[0].id)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
          </div>
        ) : (
          <>
            <p className="text-muted-foreground">
              {guide.description}
            </p>
            <ul className="space-y-4 mt-4">
              {guide.tasks.map((task) => (
                <li key={task.id} className="flex items-start space-x-3">
                  <Checkbox
                    id={task.id}
                    checked={task.completed}
                    onCheckedChange={() => onTaskToggle(task.id)}
                  />
                  <div className="space-y-1">
                    <label
                      htmlFor={task.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {task.label}
                    </label>
                    {task.description && (
                      <p className="text-sm text-muted-foreground">
                        {task.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </CardContent>
    </Card>
  );
} 