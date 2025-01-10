import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Journey = {
  id: string;
  title: string;
  progress: number;
  difficulty: "Dangereux" | "Formidable" | "Extrême" | "Épique";
  lastUpdated: string;
};

const SAMPLE_JOURNEYS: Journey[] = [
  {
    id: "1",
    title: "La Quête du Sanctuaire Perdu",
    progress: 65,
    difficulty: "Formidable",
    lastUpdated: "2024-03-20"
  },
  // ... autres voyages
];

export function RecentJourneys() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Voyages Récents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SAMPLE_JOURNEYS.map((journey) => (
            <Card key={journey.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{journey.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Difficulté: {journey.difficulty}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progression</span>
                    <span>{journey.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${journey.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Dernière mise à jour: {new Date(journey.lastUpdated).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 