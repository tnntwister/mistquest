import { useState } from 'react';
import { Encounter, EncounterType, RegionType, RankType, DispositionType } from '@/types/encounter';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EncounterFormProps {
  onSubmit: (encounter: Encounter) => void;
  trigger?: React.ReactNode;
}

export function EncounterForm({ onSubmit, trigger }: EncounterFormProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Encounter>>({
    type: 'combat',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.label && formData.description && formData.type) {
      onSubmit({
        id: crypto.randomUUID(),
        label: formData.label,
        description: formData.description,
        type: formData.type,
        region: formData.region,
        rank: formData.rank,
        disposition: formData.disposition,
        details: formData.details,
        moves: formData.moves?.filter(Boolean) || [],
      } as Encounter);
      setFormData({ type: 'combat' });
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button>Nouvelle Rencontre</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nouvelle Rencontre</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label>Type</label>
              <Select
                value={formData.type}
                onValueChange={(value: EncounterType) => 
                  setFormData(prev => ({ ...prev, type: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="combat">Combat</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                  <SelectItem value="exploration">Exploration</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label>Région</label>
              <Select
                value={formData.region}
                onValueChange={(value: RegionType) => 
                  setFormData(prev => ({ ...prev, region: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ravenland">Ravenland</SelectItem>
                  <SelectItem value="hinterlands">Hinterlands</SelectItem>
                  <SelectItem value="tempest_hills">Tempest Hills</SelectItem>
                  <SelectItem value="flooded_lands">Flooded Lands</SelectItem>
                  <SelectItem value="havens">Havens</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label>Titre</label>
            <Input
              value={formData.label || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <label>Description</label>
            <Textarea
              value={formData.description || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label>Rang</label>
              <Select
                value={formData.rank}
                onValueChange={(value: RankType) => 
                  setFormData(prev => ({ ...prev, rank: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="troublesome">Troublesome</SelectItem>
                  <SelectItem value="dangerous">Dangerous</SelectItem>
                  <SelectItem value="formidable">Formidable</SelectItem>
                  <SelectItem value="extreme">Extreme</SelectItem>
                  <SelectItem value="epic">Epic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label>Disposition</label>
              <Select
                value={formData.disposition}
                onValueChange={(value: DispositionType) => 
                  setFormData(prev => ({ ...prev, disposition: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="neutral">Neutral</SelectItem>
                  <SelectItem value="hostile">Hostile</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label>Moves (séparés par des virgules)</label>
            <Input
              value={formData.moves?.join(', ') || ''}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                moves: e.target.value.split(',').map(m => m.trim()) 
              }))}
            />
          </div>

          <Button type="submit">Créer la rencontre</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
} 