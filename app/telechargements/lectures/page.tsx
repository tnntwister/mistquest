import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";
import { stories } from "@/data/files";
import { Metadata } from 'next';
import { SITE_NAME } from '../../config';

export const metadata: Metadata = {
  title: `Lectures & Fanfictions de jeu de rôle- ${SITE_NAME}`,
  description: "J'écris parfois des histoires pour compléter le background des PJs que je maîtrise. Voici quelques extraits."
};

export default function LecturesPage() {
  return (
    <div className="space-y-8">
      <HeroSection 
       imagePrefix="litm" 
       title="Lectures" 
       description="J'écris parfois des histoires pour compléter le background des PJs que je maîtrise. Voici quelques extraits"
      />

      <div className="container mx-auto space-y-12">

        {/* Téléchargements */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Téléchargements</h2>
          
          <div className="grid grid-cols-1">
            {/* Histoires */}
            <Card>
              <CardHeader>
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Mage l'Ascension
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

          </div>
        </div>
      </div>
    </div>
  );
}