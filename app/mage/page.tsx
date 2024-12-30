import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { stories, gameAids, pageInfo } from "@/data/mage";
import { Metadata } from 'next';
import { SITE_NAME } from '../config';

export const metadata: Metadata = {
  title: `Chroniques de Mage l'Ascension - ${SITE_NAME}`,
  description: "Découvrez les chroniques de Mage l'Ascension, entre mystère et magie dans un monde contemporain sombre et fascinant."
};

export default function MagePage() {
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tobias Capek */}
            <Link href="/mage/tobias" className="group">
              <Card className="h-full hover:bg-secondary/20 transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/sections/tobias.webp"
                    alt="Tobias Capek"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Tobias Capek</h3>
                  <p className="text-muted-foreground">
                    Un jeune mage des Traditions qui découvre ses pouvoirs et le monde occulte de Prague.
                  </p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Lire la chronique
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Le Temps des Moissons */}
            <Link href="/mage/moisson" className="group">
              <Card className="h-full hover:bg-secondary/20 transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/sections/le_temps_des_moissons.webp"
                    alt="Le Temps des Moissons"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Le Temps des Moissons</h3>
                  <p className="text-muted-foreground">
                    Une chronique sur la lutte entre Traditions et Technocratie dans la France rurale.
                  </p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Lire la chronique
                  </Button>
                </CardContent>
              </Card>
            </Link>
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
      </div>
    </div>
  );
}