import { Breadcrumbs } from "@/components/breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CharactersList } from "@/components/characters-list";
import { CampaignLog } from "@/components/campaign-log";
import { Metadata } from 'next';
import { SITE_NAME } from '../../config';
import { HeroSection } from "@/components/ui/hero-section";

export const metadata: Metadata = {
  title: `Le Temps des Moissons - ${SITE_NAME}`,
  description: "Une chronique de Mage l'Ascension sur la lutte entre Traditions et Technocratie dans la France rurale des années 2020."
};

export default function MoissonPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Mage", href: "/mage" },
    { label: "Le Temps des Moissons" }
  ];

  return (
    <div className="container mx-auto py-8 space-y-6">
      <Breadcrumbs items={breadcrumbItems} />
      
      <HeroSection 
        title="Le Temps des Moissons"
        description="Dans la France rurale des années 2020, un groupe de mages des Traditions tente de protéger les derniers bastions de la magie face à l'avancée implacable de la Technocratie."
        imagePrefix="moissons"
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
                  La France rurale, loin des métropoles hyperconnectées, reste l'un des derniers refuges 
                  où la magie traditionnelle persiste. Mais la Technocratie, sous couvert de modernisation 
                  agricole et de développement territorial, étend son influence.
                </p>
                <h2>L'Enjeu</h2>
                <p>
                  Les personnages, membres des Traditions, doivent protéger les communautés rurales 
                  et leurs pratiques ancestrales tout en luttant contre l'influence grandissante 
                  des agents de la Technocratie qui cherchent à "rationaliser" ces territoires.
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
                title: "Les Semailles",
                date: "Mars 2024",
                summary: "L'arrivée des premiers agents de la Technocratie dans la région..."
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
                name: "Marie-Jeanne Dupont",
                title: "Verbena",
                description: "Une guérisseuse locale qui maintient les anciennes traditions",
                tags: ["Traditions", "Allié"]
              },
              // Ajoutez d'autres personnages ici
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
} 