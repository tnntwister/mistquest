import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MomentumTrack } from './momentum-track';
import type { Character, Asset } from '@/types/character';
import { Checkbox } from '@/components/ui/checkbox';
import { AssetPicker } from './asset-picker';
import { QuestMaker } from './quest-maker';
import type { Quest } from '@/types/quest';
import { QuestActions } from './quest-actions';
import { Badge } from '@/components/ui/badge';
import type { FulfillResult } from '@/types/quest';
import { Button } from '@/components/ui/button';
import { assets as assetTemplates } from '@/data/assets';
import { AssetType } from '@/types/asset';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useCampaignLog } from '@/contexts/campaign-log-context';
import { Trash as TrashIcon, Save as SaveIcon, Plus as PlusIcon } from 'lucide-react';

interface CharacterSheetProps {
  character: Character;
  onNameChange?: (name: string) => void;
  onStatChange?: (statKey: keyof Character['stats'], value: number) => void;
  onResourceChange?: (resourceKey: keyof Character['resources'], value: number) => void;
  onQuestAdd?: (quest: Quest) => void;
  onQuestProgress?: (questId: string, progress: number) => void;
  onQuestFulfill?: (questId: string, result: FulfillResult) => void;
  onQuestForsake?: (questId: string) => void;
  onAssetAdd?: (asset: Asset) => void;
  onAssetRemove?: (assetId: string) => void;
}

interface ConnectionStatus {
  connected: boolean;
  authenticated: boolean;
  hasSavedCampaign: boolean;
  message: string;
}

export function CharacterSheetIronsworn({ 
  character,
  onNameChange,
  onStatChange,
  onResourceChange,
  onQuestAdd,
  onQuestProgress,
  onQuestFulfill,
  onQuestForsake,
  onAssetAdd,
  onAssetRemove
}: CharacterSheetProps) {
  const [status, setStatus] = useState<ConnectionStatus>({
    connected: false,
    authenticated: false,
    hasSavedCampaign: false,
    message: 'Vérification de la connexion...'
  });
  const { logs, clearLogs } = useCampaignLog();
  const campaignId = crypto.randomUUID(); // À stocker dans un context

  useEffect(() => {
    async function checkConnection() {
      try {
        // Vérifier la connexion à Supabase
        const { data, error } = await supabase.from('health_check').select('*').limit(1);
        if (error) throw error;
        setStatus(prev => ({ ...prev, connected: true, message: 'Vérification de l\'authentification...' }));

        // Vérifier l'authentification
        const { data: session } = await supabase.auth.getSession();
        if (!session.session) {
          setStatus(prev => ({ ...prev, message: 'Non connecté' }));
          return;
        }
        setStatus(prev => ({ ...prev, authenticated: true, message: 'Recherche d\'une sauvegarde...' }));

        // Vérifier les sauvegardes existantes
        const { data: savedCampaign } = await supabase
          .from('campaigns')
          .select('*')
          .eq('user_id', session.session.user.id)
          .single();

        setStatus(prev => ({
          ...prev,
          hasSavedCampaign: !!savedCampaign,
          message: savedCampaign ? 'Campagne trouvée' : 'Prêt pour une nouvelle campagne'
        }));
      } catch (error) {
        setStatus(prev => ({ ...prev, message: 'Erreur de connexion' }));
      }
    }

    checkConnection();
  }, []);

  const handleSave = async () => {
    if (!status.authenticated) {
      setStatus(prev => ({ ...prev, message: 'Connexion requise' }));
      return;
    }

    try {
      setStatus(prev => ({ ...prev, message: 'Sauvegarde en cours...' }));
      const { error } = await supabase.from('campaigns').upsert({
        id: campaignId,
        character,
        logs
      });
      if (error) throw error;
      setStatus(prev => ({ ...prev, message: 'Sauvegarde réussie' }));
    } catch (error) {
      setStatus(prev => ({ ...prev, message: 'Erreur de sauvegarde' }));
    }
  };

  const handleNewCampaign = () => {
    if (window.confirm('Créer une nouvelle campagne ? Les données non sauvegardées seront perdues.')) {
      clearLogs();
      // Réinitialiser le personnage
      // ...
      setStatus(prev => ({ ...prev, message: 'Nouvelle campagne créée' }));
    }
  };

  const activeQuestsCount = character.quests.filter(q => q.status === 'active').length;
  const assetsCount = character.assets.length;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="space-y-4">
            <Input
              value={character.name}
              onChange={(e) => onNameChange?.(e.target.value)}
              className="text-xl font-bold"
              placeholder="Nom du personnage"
            />
            <div className="flex items-start flex-col gap-4 text-sm text-muted-foreground">
              <span >Campagne {campaignId}</span>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-1 w-full block">{status.message}</span>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => clearLogs()}
                disabled={!logs.length}
                title="Vider le journal"
              >
                <TrashIcon className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                onClick={handleSave}
                disabled={!status.authenticated}
                title="Sauvegarder"
              >
                <SaveIcon className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                onClick={handleNewCampaign}
                title="Nouvelle campagne"
              >
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{character.background}</p>

          <Tabs defaultValue="stats">
            <TabsList  className="w-full">
              <TabsTrigger value="stats">Stats</TabsTrigger>
              <TabsTrigger value="assets">Assets</TabsTrigger>
              <TabsTrigger value="quests">Quêtes</TabsTrigger>
            </TabsList>

            <div className="mt-4">
              <TabsContent value="stats">
                {/* Stats */}
                <Card border={false}>
                  <CardHeader className="px-0">
                    <CardTitle>Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
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
                <Card border={false}>
                  <CardHeader className="px-0">
                    <CardTitle>Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
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

              <TabsContent value="assets">
                <div className="flex justify-between items-center py-4">
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
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                              XP: {asset.experience}
                            </span>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="h-6 w-6 text-destructive"
                              onClick={() => onAssetRemove?.(asset.id)}
                            >
                              ×
                            </Button>
                          </div>
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
                    onAssetAdd={(asset) => onAssetAdd?.(asset)}
                    availableAssets={assetTemplates.map(template => ({
                      ...template,
                      type: template.type as AssetType,
                      experience: 0,
                      abilities: template.abilities.map((a, i) => ({ ...a, enabled: i === 0, trackValue: 0 }))
                    }))}
                    maxAssets={character.validation.maxStartingAssets}
                    currentAssetCount={assetsCount}
                    existingAssets={character.assets}
                  />
                </div>
              </TabsContent>

              <TabsContent value="quests">
                <div className="flex justify-between items-center py-4">
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
                              onMakeProgress={(questId, progress) => {
                                onQuestProgress?.(questId, progress);
                              }}
                              onFulfillVow={(questId, result) => {
                                onQuestFulfill?.(questId, result);
                              }}
                              onForsakeVow={(questId) => {
                                onQuestForsake?.(questId);
                              }}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                  <QuestMaker 
                    onQuestAdd={(quest) => onQuestAdd?.(quest)}
                    recommendedMin={character.validation.recommendedStartingQuests.min}
                    recommendedMax={character.validation.recommendedStartingQuests.max}
                    currentQuestCount={activeQuestsCount}
                  />
                </div>
              </TabsContent>
            </div>
          </Tabs>
          </CardContent>
        </Card>
    </div>
  );
} 