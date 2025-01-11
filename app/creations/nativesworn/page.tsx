import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';
import { SITE_NAME } from '../../config';
import { SystemDescription } from "@/components/system-description";

export const metadata: Metadata = {
  title: `Nativesworn - ${SITE_NAME}`,
  description: "Découvrez mon hack pour Ironsworn : Nativesworn, un monde amérindien à l'arrivée des européens."
};

const NativeswornResources = [
  {
    id: "1",
    title: "Les assets des natifs",
    description: "Nouveaux assets pour jouer des personnages natifs.",
    link: ""
  },
  {
    id: "2",
    title: "Les vérités et les serments",
    description: "Les vérités d'Ironsworn adaptées pour le cadre de jeu, et des exemples de serments de départ.",
    link: ""
  },
  {
    id: "3",
    title: "Le Dreamcatcher",
    description: "Présentation du monde et des règles spécifiques à Nativesworn.",
    link: ""
  }
];



export default function IronswornPage() {
  return (
    <div className="space-y-8">
      <HeroSection 
        imagePrefix="nativesworn" 
        title="nativesworn" 
        description="Jouez un natif amérindien à l'arrivée des européens. Choisissez entre l'alliance ou la guerre." 
      />

      <div className="container mx-auto space-y-12">
        {/* Desc */}
        <SystemDescription 
            name="Un hack pour Ironsworn"
            description={`
              <p class='mb-2'>
              NativeSworn est un hack d'Ironsworn qui transpose l'univers du jeu dans un cadre inspiré des cultures amérindiennes, où les joueurs incarnent des membres d'une tribu naviguant entre traditions ancestrales et l'arrivée des étrangers venus d'Europe.
              </p>
              <p class='mb-2'>
              Le jeu conserve la mécanique des vœux d'Ironsworn mais les transforme en serments sacrés, profondément ancrés dans la spiritualité et les valeurs tribales. Il introduit également un système de totems unique avec une jauge dédiée qui représente le lien spirituel entre le personnage et son animal totem, nécessitant des rituels et des offrandes pour maintenir cette connexion.
                            </p>
              <p class='mb-2'>
              Les joueurs ont accès à dix voies distinctes (comme le Chaman, le Guerrier de la Tribu ou l'Éclaireur des Plaines) qui définissent leur rôle dans la communauté. Le système met l'accent sur l'harmonie avec la nature, le respect des traditions, et la nécessité de s'adapter face aux changements, tout en conservant la structure narrative et mécanique qui fait le succès d'Ironsworn.</p>
            `}
            imagePath="/images/sections/nativesworn-section.webp"
            MoreLink="/creations/nativesworn/start"
          />
        {/* Couverture des univers */}
        <section className="space-y-8">
          <div className="relative rounded-lg overflow-hidden h-[300px]">
            <Image
              src="/images/hero/nativesworn-hero.webp"
              alt="Nativesworn Cover"
              fill
              className="object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">NativeSworn</h2>
                <p className="text-muted-foreground max-w-xl">
                NativeSworn propose des aventures solo ou guidées dans un univers inspiré des cultures amérindiennes, où ils incarnent des membres d'une tribu devant naviguer entre traditions ancestrales et changements apportés par l'arrivée des Européens. 
                </p><p className="text-muted-foreground max-w-xl">
                Les joueurs explorent des thèmes profonds comme la spiritualité, la communion avec la nature, et la préservation des traditions, tout en utilisant un système de serments sacrés et de totems qui influencent directement leur progression et leurs capacités.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NativeswornResources.map((resource) => (
              <Card key={resource.id}>
                <CardHeader>
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{resource.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    {resource.link && <Link href={resource.link}>
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger
                    </Link>}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

       
      </div>
    </div>
  );
} 