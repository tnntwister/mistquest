import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MomentumTrack } from './momentum-track';
import type { Character } from '@/types/character';
import { Checkbox } from '@/components/ui/checkbox';
import { AssetPicker } from './asset-picker';
import { QuestMaker } from './quest-maker';
import type { Quest } from '@/types/quest';
import { QuestActions } from './quest-actions';
import { Badge } from '@/components/ui/badge';
import type { FulfillResult } from '@/types/quest';
import { Button } from '@/components/ui/button';

interface CharacterSheetProps {
  character: Character;
  onNameChange?: (name: string) => void;
  onStatChange?: (statKey: keyof Character['stats'], value: number) => void;
  onResourceChange?: (resourceKey: keyof Character['resources'], value: number) => void;
  onQuestAdd?: (quest: Quest) => void;
  onQuestProgress?: (questId: string, progress: number) => void;
  onQuestFulfill?: (questId: string, result: FulfillResult) => void;
  onQuestForsake?: (questId: string) => void;
}

export function CharacterSheetIronsworn({ 
  character,
  onNameChange,
  onStatChange,
  onResourceChange,
  onQuestAdd,
  onQuestProgress,
  onQuestFulfill,
  onQuestForsake 
}: CharacterSheetProps) {
  const activeQuestsCount = character.quests.filter(q => q.status === 'active').length;
  const assetsCount = character.assets.length;

  return (
    <div className="space-y-6">
      {/* En-tête avec nom éditable */}
      <Card>
        <CardHeader>
          <Input
            value={character.name}
            onChange={(e) => onNameChange?.(e.target.value)}
            className="text-xl font-bold"
            placeholder="Nom du personnage"
          />
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{character.background}</p>
        </CardContent>
      </Card>

      {/* Onglets */}
      <Tabs defaultValue="stats" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="stats">Stats & Ressources</TabsTrigger>
          <TabsTrigger value="assets">Assets</TabsTrigger>
          <TabsTrigger value="quests">Quêtes</TabsTrigger>
        </TabsList>

        <TabsContent value="stats" className="space-y-4">
          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(character.stats).map(([key, stat]) => (
                  <div key={key} className="space-y-1">
                    <label className="text-sm font-medium">{stat.name}</label>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        disabled={stat.value <= 0}
                        onClick={() => onStatChange?.(key as keyof Character['stats'], stat.value - 1)}
                      >
                        -
                      </Button>
                      <span className="text-lg font-medium w-6 text-center">{stat.value}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        disabled={stat.value >= 5}
                        onClick={() => onStatChange?.(key as keyof Character['stats'], stat.value + 1)}
                      >
                        +
                      </Button>
                      <span className="text-xs text-muted-foreground flex-1">{stat.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(character.resources)
                  .filter(([key]) => key !== 'momentum')
                  .map(([key, resource]) => (
                    <div key={key} className="space-y-1">
                      <div className="flex items-center gap-1">
                        <label className="text-sm font-medium flex-1">{resource.name}</label>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          disabled={resource.current <= 0}
                          onClick={() => onResourceChange?.(key as keyof Character['resources'], resource.current - 1)}
                        >
                          -
                        </Button>
                        <span className="text-sm w-8 text-center">
                          {resource.current}/{resource.max}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          disabled={resource.current >= resource.max}
                          onClick={() => onResourceChange?.(key as keyof Character['resources'], resource.current + 1)}
                        >
                          +
                        </Button>
                      </div>
                      <Progress 
                        value={(resource.current / resource.max) * 100} 
                        className="h-2"
                      />
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <MomentumTrack 
            current={character.resources.momentum.current}
            max={character.resources.momentum.max}
            onValueChange={(value) => {
              onResourceChange?.('momentum', value);
            }}
          />
        </TabsContent>

        <TabsContent value="assets" className="space-y-4">
          <div className="flex justify-between items-center">
            <CardTitle>Assets</CardTitle>
            <span className={`text-sm ${assetsCount > character.validation.maxStartingAssets ? 'text-red-500' : 'text-muted-foreground'}`}>
              {assetsCount}/{character.validation.maxStartingAssets} assets choisis
            </span>
          </div>
          <div className="space-y-4">
            {character.assets.map((asset) => (
              <Card key={asset.id}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{asset.name}</CardTitle>
                    <span className="text-sm text-muted-foreground">
                      XP: {asset.experience}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {asset.abilities.map((ability, index) => (
                      <div 
                        key={ability.id}
                        className={`p-2 rounded border ${ability.enabled ? 'bg-secondary' : ''}`}
                      >
                        <div className="flex items-start gap-2">
                          {index > 0 && (
                            <Checkbox 
                              checked={ability.enabled}
                              onCheckedChange={(checked) => {
                                // Handler pour débloquer la capacité
                              }}
                            />
                          )}
                          <div className="space-y-1 flex-1">
                            <p className="text-sm">{ability.description}</p>
                            {ability.requiresTrack && (
                              <Progress 
                                value={(ability.trackValue || 0) / (ability.trackMax || 1) * 100}
                                className="h-2"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
            <AssetPicker 
              onAssetAdd={(asset) => {
                // Handler pour ajouter un asset
              }}
              availableAssets={[]} // À remplir avec les assets disponibles
              maxAssets={character.validation.maxStartingAssets}
              currentAssetCount={assetsCount}
            />
          </div>
        </TabsContent>

        <TabsContent value="quests" className="space-y-4">
          <div className="flex justify-between items-center">
            <CardTitle>Quêtes</CardTitle>
            <span className="text-sm text-muted-foreground">
              {activeQuestsCount} quête{activeQuestsCount > 1 ? 's' : ''} active{activeQuestsCount > 1 ? 's' : ''}
            </span>
          </div>
          <div className="space-y-4">
            {character.quests
              .filter(quest => quest.status === 'active')
              .map((quest) => (
                <Card key={quest.id}>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{quest.title}</h4>
                            <p className="text-xs text-muted-foreground">
                              Juré à : {quest.swornTo}
                            </p>
                          </div>
                          <Badge>{quest.rank}</Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {quest.description}
                      </p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Progression</span>
                          <span>{quest.progress}/10</span>
                        </div>
                        <Progress 
                          value={(quest.progress / 10) * 100} 
                          className="h-2"
                        />
                      </div>
                      <QuestActions
                        quest={quest}
                        onMakeProgress={onQuestProgress}
                        onFulfillVow={(questId, result) => onQuestFulfill?.(questId, result)}
                        onForsakeVow={onQuestForsake}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}

            <QuestMaker 
              onQuestAdd={onQuestAdd}
              recommendedMin={character.validation.recommendedStartingQuests.min}
              recommendedMax={character.validation.recommendedStartingQuests.max}
              currentQuestCount={activeQuestsCount}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 