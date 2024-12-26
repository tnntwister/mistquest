"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { CharacterDescription } from "@/components/character-description";
import { CampaignLog } from "@/components/campaign-log";
import { CharactersList } from "@/components/characters-list";
import { Timeline } from "@/components/timeline";
import { sessions, characters, timelineEvents, recentEvents } from "@/data/fael";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FaelPage() {
  return (
    <div className="space-y-8">
      <HeroSection 
        imagePrefix="fael" 
        title="Fael Bursandra des Hazat" 
        description="&Eacute;duqué pour la guerre, face à l'horreur j'ai préféré rejoindre les ordres du Sanctuaire Aeon, avant d'être rappelé par mon destin"
      />
      
      <div className="container mx-auto space-y-8">
        <CharacterDescription
          name="Fael Bursandra"
          description="Je suis un peu plus grand que la moyenne, mais il doit sa carrure à l'armure qu'il porte sous un surcot et une cape tenue par un jeu de spallières relié sur le torse dans un ouvrage métallique de grande facture. Les bottes de l'armure qui dépassent des vêtements sont également ouvragés. Une ceinture chargée d'une épée et d'un pistolet cinétique tient le surcot.

Sous cette lourde tenue, ma tête paraît plus quelconque. Ma barbe entretenue couvre la mâchoire et le menton sans s'étendre sur les joues. Mes cheveux mi-longs, ondulés et un peu décoiffés, donnent une tonalité aventureuse. Quelques mèches encadrent mon visage et soulignent mon regard sérieux et contemplatif."
          imagePath="/images/hero/fael-hero.webp"
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

        <CharactersList title="Alliés" characters={characters.allies} />
        <CharactersList title="Rivaux" characters={characters.rivals} />
      </div>
    </div>
  );
}