import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Minus, Plus, Flame, RotateCcw } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MomentumTrackProps {
  current: number;
  max: number;
  onValueChange: (value: number) => void;
}

export function MomentumTrack({ current, max, onValueChange }: MomentumTrackProps) {
  const handleIncrement = () => {
    if (current < max) {
      onValueChange(current + 1);
    }
  };

  const handleDecrement = () => {
    if (current > -6) {
      onValueChange(current - 1);
    }
  };

  const handleBurn = () => {
    onValueChange(2);
  };

  const handleReset = () => {
    onValueChange(2);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Élan</span>
          <span className={`text-2xl font-bold ${current < 0 ? 'text-red-500' : ''}`}>
            {current}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center gap-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleDecrement}
            disabled={current <= -6}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Progress 
            value={((current + 6) / (max + 6)) * 100} 
            className={`h-2 flex-1 ${current < 0 ? 'bg-red-200' : ''}`}
          />
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleIncrement}
            disabled={current >= max}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-between gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="secondary"
                  className="flex-1"
                  onClick={handleBurn}
                  disabled={current <= 0}
                >
                  <Flame className="h-4 w-4 mr-2" />
                  Brûler ({current})
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Utilisez votre élan actuel ({current}) pour annuler un dé inférieur à cette valeur, 
                puis réinitialisez l'élan à +2</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="secondary"
                  className="flex-1"
                  onClick={handleReset}
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Réinitialiser
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Réinitialise l'élan à +2</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {current < 0 && (
          <div className="text-sm text-red-500 bg-red-50 p-2 rounded">
            ⚠️ Élan négatif : Si votre dé d'action est égal à {Math.abs(current)}, 
            vous devez annuler son résultat.
            {current === -6 && (
              <p className="mt-1">
                À -6, toute pénalité supplémentaire déclenche l'action "Faire Face à un Revers".
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
} 