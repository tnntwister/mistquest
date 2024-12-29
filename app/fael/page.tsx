"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { CharacterDescription } from "@/components/character-description";
import { CampaignLog } from "@/components/campaign-log";
import { CharactersList } from "@/components/characters-list";
import { Timeline } from "@/components/timeline";
import { sessions, characters, timelineEvents, recentEvents } from "@/data/fael";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function FaelPage() {
  return (
    <div className="space-y-8">
      <HeroSection 
        imagePrefix="fael" 
        title="Fael Bursandra des Hazat" 
        description="Éduqué pour la guerre, face à l'horreur j'ai préféré rejoindre les ordres du Sanctuaire Aeon, avant d'être rappelé par mon destin"
      />
      
      <div className="container mx-auto space-y-8">
        <CharacterDescription
          name="Fael Bursandra"
          description="Description à revoir"
          imagePath="/images/sections/fael.webp"
          characterSheetLink="/fael/fiche"
        />

        <CampaignLog sessions={sessions} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Timeline 
            title="Histoire"
            events={timelineEvents} 
          />
          <Timeline 
            title="Événements Récents (5020)"
            events={recentEvents} 
          />
        </div>

        <CharactersList title="Famille" characters={characters.famille} />
        <CharactersList title="Nobles Rencontrés" characters={characters.nobles} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/fael/rencontres" className="block">
            <Card className="h-full hover:bg-secondary/50 transition-colors">
              <CardHeader>
                <h3 className="text-xl font-cinzel">Les Trois Rencontres</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Les moments clés qui ont façonné mon destin à travers les années.</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/fael/equipage" className="block">
            <Card className="h-full hover:bg-secondary/50 transition-colors">
              <CardHeader>
                <h3 className="text-xl font-cinzel">Mon Équipage</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Les fidèles compagnons qui m'accompagnent dans mes voyages.</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/fael/quete" className="block">
            <Card className="h-full hover:bg-secondary/50 transition-colors">
              <CardHeader>
                <h3 className="text-xl font-cinzel">Éléments de ma Quête</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Les indices et mystères qui guident ma mission.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}