import { Breadcrumbs } from "@/components/breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CharactersList } from "@/components/characters-list";
import { CampaignLog } from "@/components/campaign-log";
import { Metadata } from 'next';
import { SITE_NAME } from '../../config';
import { HeroSection } from "@/components/ui/hero-section";

export const metadata: Metadata = {
  title: `Tobias Capek - ${SITE_NAME}`,
  description: "Suivez l'histoire de Tobias Capek, un jeune mage des Traditions qui découvre ses pouvoirs dans les rues de Prague."
};

export default function TobiasPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Mage", href: "/mage" },
    { label: "Tobias Capek" }
  ];

  return (
    <div className="container mx-auto py-8 space-y-6">
      <Breadcrumbs items={breadcrumbItems} />
      
      <HeroSection 
        title="Tobias Capek"
        description="Un jeune mage des Traditions qui découvre ses pouvoirs et le monde occulte de Prague, entre héritage familial et luttes de pouvoir modernes."
        imagePrefix="tobias"
      />

      <Tabs defaultValue="histoire" className="mt-6">
        <TabsList>
          <TabsTrigger value="histoire">L'Histoire</TabsTrigger>
          <TabsTrigger value="chapitres">Les Chapitres</TabsTrigger>
          <TabsTrigger value="pnjs">Les PNJs</TabsTrigger>
        </TabsList>

        <TabsContent value="histoire" className="mt-6 space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="prose dark:prose-invert">
                <h2>Le Contexte</h2>
                <p>
                  Prague, ville aux mille tours et aux mille clochers, cache bien plus que son architecture gothique et baroque. 
                  Dans ses ruelles tortueuses et ses bâtiments centenaires se joue une lutte ancestrale entre tradition et modernité, 
                  entre magie et technologie.
                </p>
                <h2>Le Protagoniste</h2>
                <p>
                  Tobias Capek, jeune étudiant en histoire de l'art, découvre qu'il est l'héritier d'une longue lignée de mages. 
                  Son éveil à la magie coïncide avec le retour d'anciennes forces dans la ville, 
                  et il devra apprendre à maîtriser ses pouvoirs tout en naviguant dans les eaux troubles de la politique occulte.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chapitres" className="mt-6">
          <CampaignLog 
            title="Chapitres de l'Histoire"
            sessions={[
              {
                id: "1",
                title: "L'Éveil",
                date: "Janvier 2024",
                summary: "Tobias découvre ses pouvoirs lors d'une visite nocturne au Château de Prague..."
              },
              // Ajoutez d'autres chapitres ici
            ]}
          />
        </TabsContent>

        <TabsContent value="pnjs" className="mt-6">
          <CharactersList 
            title="Personnages Importants"
            characters={[
              {
                id: "1",
                name: "Professeur Dvorak",
                title: "Mentor",
                description: "Un vieux mage des Traditions qui prend Tobias sous son aile",
                tags: ["Traditions", "Mentor"]
              },
              // Ajoutez d'autres personnages ici
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
} 