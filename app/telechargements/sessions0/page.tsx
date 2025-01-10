import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { stories, gameAids } from "@/data/files";
import { Metadata } from 'next';
import { SITE_NAME } from '../../config';

export const metadata: Metadata = {
  title: `Sessions 0 - ${SITE_NAME}`,
  description: "Téléchargez les documents nécessaires pour créer votre personnage et commencer la partie."
};

export default function Sessions0Page() {
  return (
    <div className="space-y-8">
      <HeroSection 
       imagePrefix="litm" 
       title="Sessions 0" 
       description="Téléchargez les documents nécessaires pour créer votre personnage et commencer la partie."
      />

      <div className="container mx-auto space-y-12">

        {/* Téléchargements */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Téléchargements</h2>
          
          <div className="grid grid-cols-1">            

            {/* Aides de jeu */}
            <Card>
              <CardHeader>
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Mage l'Ascension
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
      </div>
    </div>
  );
}