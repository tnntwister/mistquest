import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import type { Asset, AssetType, AssetTemplate } from '@/types/asset';

const ASSET_TYPES = [
  { value: 'companion', label: 'Compagnon' },
  { value: 'combat', label: 'Combat' },
  { value: 'ritual', label: 'Rituel' },
  { value: 'path', label: 'Voie' }
] as const;

interface AssetPickerProps {
  onAssetAdd: (asset: Asset) => void;
  availableAssets: Asset[];
  maxAssets: number;
  currentAssetCount: number;
  existingAssets: Asset[];
}

export function AssetPicker({ onAssetAdd, availableAssets, maxAssets, currentAssetCount, existingAssets }: AssetPickerProps) {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<AssetType>('companion');

  const handleAssetAdd = (asset: AssetTemplate) => {
    const newAsset: Asset = {
      ...asset,
      id: `${asset.id}-${crypto.randomUUID()}`,
      experience: 0,
      abilities: asset.abilities.map((ability, index) => ({
        ...ability,
        enabled: index === 0, // Active seulement la première capacité
        trackValue: 0
      }))
    };
    
    onAssetAdd(newAsset);
    setOpen(false); // Ferme la dialog après l'ajout
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full"
          disabled={currentAssetCount >= maxAssets}
        >
          Ajouter un Asset
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Choisir un Asset</DialogTitle>
        </DialogHeader>
        <Tabs value={selectedType} onValueChange={(v) => setSelectedType(v as AssetType)}>
          <TabsList className="grid w-full grid-cols-4">
            {ASSET_TYPES.map(type => (
              <TabsTrigger 
                key={type.value} 
                value={type.value}
                className="px-4"
              >
                {type.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {ASSET_TYPES.map(type => (
            <TabsContent key={type.value} value={type.value}>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4">
                  {availableAssets
                    .filter(asset => asset.type === type.value)
                    .map(asset => (
                      <Card key={asset.id}>
                        <CardHeader>
                          <CardTitle>{asset.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            {asset.description}
                          </p>
                          <div className="space-y-2">
                            {asset.abilities.map((ability, index) => (
                              <div 
                                key={ability.id}
                                className={`p-2 rounded border ${index === 0 ? 'bg-secondary' : ''}`}
                              >
                                <div className="flex items-start gap-2">
                                  {index > 0 && (
                                    <Checkbox disabled checked={false} />
                                  )}
                                  <p className="text-sm">
                                    {ability.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <Button
                            className="w-full"
                            onClick={() => handleAssetAdd(asset)}
                            disabled={currentAssetCount >= maxAssets || existingAssets.some(existing => existing.name === asset.name)}
                          >
                            Choisir
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
} 