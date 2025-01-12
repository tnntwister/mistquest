import { useState } from 'react';
import { Encounter, EncounterType } from '@/types/encounter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCampaignLog } from '@/contexts/campaign-log-context';
import { encounters as initialEncounters } from '@/data/encounters';
import { EncounterForm } from '@/components/forms/encounter-form';

export function Encounters() {
  const [encounters, setEncounters] = useState(initialEncounters);
  const [activeTab, setActiveTab] = useState<EncounterType>('combat');
  const [encounterText, setEncounterText] = useState("");
  const { addLog } = useCampaignLog();

  const handleEncounter = (encounter: Encounter) => {
    addLog({
      action: {
        id: encounter.id,
        label: encounter.label,
        description: encounter.description,
        category: 'rencontre',
        trigger: encounter.description,
      },
      timestamp: Date.now(),
      result: 'encounter',
      text: encounterText.trim() || undefined
    });
  };

  const handleAddEncounter = (newEncounter: Encounter) => {
    setEncounters(prev => [...prev, newEncounter]);
  };

  const filteredEncounters = encounters.filter(
    encounter => encounter.type === activeTab
  );

  return (
    <div className="space-y-4">
        <textarea
          value={encounterText}
          onChange={(e) => setEncounterText(e.target.value)}
          placeholder="Décrivez votre rencontre"
          className="w-full h-20 p-2 text-sm bg-background border rounded-md resize-none"
        />
      <Tabs defaultValue="combat" onValueChange={(value) => setActiveTab(value as EncounterType)}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="combat">Combat</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="exploration">Exploration</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="grid gap-4">
            {filteredEncounters.map(encounter => (
              <Card key={encounter.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{encounter.label}</CardTitle>
                    <div className="flex gap-2">
                      {encounter.region && (
                        <Badge variant="outline">{encounter.region}</Badge>
                      )}
                      {encounter.rank && (
                        <Badge variant="secondary">{encounter.rank}</Badge>
                      )}
                      {encounter.disposition && (
                        <Badge>{encounter.disposition}</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{encounter.description}</p>
                  
                  {encounter.details && (
                    <div className="space-y-2 mb-4">
                      {encounter.details.theme && (
                        <p className="text-sm">
                          <span className="font-semibold">Thème:</span> {encounter.details.theme}
                        </p>
                      )}
                      {encounter.details.action && (
                        <p className="text-sm">
                          <span className="font-semibold">Action:</span> {encounter.details.action}
                        </p>
                      )}
                      {encounter.details.features && encounter.details.features.length > 0 && (
                        <p className="text-sm">
                          <span className="font-semibold">Caractéristiques:</span> {encounter.details.features.join(', ')}
                        </p>
                      )}
                      {encounter.details.threats && encounter.details.threats.length > 0 && (
                        <p className="text-sm">
                          <span className="font-semibold">Menaces:</span> {encounter.details.threats.join(', ')}
                        </p>
                      )}
                      {encounter.details.opportunities && encounter.details.opportunities.length > 0 && (
                        <p className="text-sm">
                          <span className="font-semibold">Opportunités:</span> {encounter.details.opportunities.join(', ')}
                        </p>
                      )}
                    </div>
                  )}
                  
                  {encounter.moves && encounter.moves.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {encounter.moves.map(move => (
                        <Badge key={move} variant="outline">{move}</Badge>
                      ))}
                    </div>
                  )}

                  <Button 
                    onClick={() => handleEncounter(encounter)}
                    variant="outline"
                    className="w-full"
                  >
                    Déclencher la rencontre
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <EncounterForm 
        onSubmit={handleAddEncounter}
        trigger={<Button className="w-full">Nouvelle Rencontre</Button>}
      />
    </div>
  );
} 