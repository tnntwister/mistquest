"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { CampaignLog } from "@/components/campaign-log";
import { CharactersList } from "@/components/characters-list";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import Link from "next/link";
import mageData from "@/data/mage.json";

export default function MagePage() {
  const { campaignLogs, characters, stories, gameAids, pageInfo } = mageData;

  return (
    <div className="space-y-8">
      <HeroSection 
        imagePrefix={pageInfo.imagePrefix}
        title={pageInfo.title}
        description={pageInfo.description}
      />

      <div className="container mx-auto space-y-12">
        {/* Chroniques */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Chroniques en Cours</h2>
          
          <div className="space-y-8">
            <CampaignLog 
              title={campaignLogs.tobias.title}
              sessions={campaignLogs.tobias.sessions}
            />
            <CampaignLog 
              title={campaignLogs.moisson.title}
              sessions={campaignLogs.moisson.sessions}
            />
          </div>
        </div>

        {/* Téléchargements */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Ressources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Histoires */}
            <Card>
              <CardHeader>
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Histoires à Lire
                </h4>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stories.map((story) => (
                    <div key={story.id} className="p-4 bg-secondary/30 rounded-lg">
                      <h5 className="font-semibold mb-2">{story.title}</h5>
                      <p className="text-sm text-muted-foreground mb-3">{story.description}</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={story.link}>
                          <FileText className="h-4 w-4 mr-2" />
                          Lire
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Aides de jeu */}
            <Card>
              <CardHeader>
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Aides de Jeu
                </h4>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {gameAids.map((aid) => (
                    <div key={aid.id} className="p-4 bg-secondary/30 rounded-lg">
                      <h5 className="font-semibold mb-2">{aid.title}</h5>
                      <p className="text-sm text-muted-foreground mb-3">{aid.description}</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={aid.link}>
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Personnages */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Personnages Importants</h2>
          <div className="space-y-8">
            <CharactersList 
              title="Alliés et Mentors"
              characters={characters.allies}
            />
            <CharactersList 
              title="Antagonistes"
              characters={characters.rivals}
            />
          </div>
        </div>

      </div>
    </div>
  );
}