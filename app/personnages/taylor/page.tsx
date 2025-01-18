import { HeroSection } from "@/components/ui/hero-section";
import { CharacterDescription } from "@/components/character-description";
import { CharactersList } from "@/components/characters-list";
import { Timeline } from "@/components/timeline";
import { CampaignLog } from "@/components/campaign-log";
import { description, timelineEvents, recentEvents, characters, sessions } from "@/data/taylor";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { metadata } from "./metadata";

export { metadata };

const vampires = {
  title: "Vampires",
  characters: [
    ...characters.allies,
    ...characters.ennemis
  ]
};

export default function TaylorPage() {
  return (
    <>
      <div className="space-y-8">
        <div className="relative overflow-hidden">
          <HeroSection 
            imagePrefix="taylor" 
            title="Jerome Sarrac" 
            description="Archonte et oracle, cherchant à purifier l'air corrompu de notre société."
          />
        </div>
        
        <div className="container mx-auto px-4 space-y-8">
          <CharacterDescription
            name="Jerome Sarrac"
            description={description}
            imagePath="/images/sections/sarrac.webp"
            characterSheetLink="/personnages/taylor/fiche"
          />

          <CampaignLog sessions={sessions} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Timeline 
              title="Histoire"
              events={timelineEvents} 
            />
            <Timeline 
              title="Événements Récents"
              events={recentEvents} 
            />
          </div>

          <CharactersList title="Proches" characters={characters.proches} />
          <CharactersList {...vampires} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/personnages/taylor/identites" className="block">
              <Card className="h-full hover:bg-secondary/50 transition-colors">
                <CardHeader>
                  <h3 className="text-xl font-cinzel text-foreground">Les Trois Vies</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Geoffrey Taylor, Gottfried Scheiner, Jerome Sarrac : trois identités, trois époques.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/personnages/taylor/fiche" className="block">
              <Card className="h-full hover:bg-secondary/50 transition-colors">
                <CardHeader>
                  <h3 className="text-xl font-cinzel text-foreground">Fiche de Personnage</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Caractéristiques, disciplines et particularités d'un Malkavien pas comme les autres.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/personnages/taylor/quete" className="block">
              <Card className="h-full hover:bg-secondary/50 transition-colors">
                <CardHeader>
                  <h3 className="text-xl font-cinzel text-foreground">La Quête de Pureté</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Ma recherche perpétuelle de la pureté de l'air et mes investigations en tant qu'archonte.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}