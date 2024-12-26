"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const paxElficaResources = [
  {
    id: "1",
    title: "Assets Elfiques",
    description: "Nouveaux assets pour jouer des personnages elfiques.",
    link: "/assets/pax-elfica-assets.pdf"
  },
  {
    id: "2",
    title: "Quêtes des Royaumes",
    description: "Générateur de quêtes pour les royaumes elfiques.",
    link: "/quests/pax-elfica-quests.pdf"
  },
  {
    id: "3",
    title: "Guide du Monde",
    description: "Description détaillée des royaumes elfiques et de leurs traditions.",
    link: "/guides/pax-elfica-guide.pdf"
  }
];

const archipelsResources = [
  {
    id: "1",
    title: "Assets Maritimes",
    description: "Assets spécialisés pour la navigation et l'exploration maritime.",
    link: "/assets/archipels-assets.pdf"
  },
  {
    id: "2",
    title: "Îles et Secrets",
    description: "Générateur d'îles et de mystères pour vos aventures.",
    link: "/quests/archipels-secrets.pdf"
  },
  {
    id: "3",
    title: "Guide des Archipels",
    description: "Présentation des archipels et des dangers qui les habitent.",
    link: "/guides/archipels-guide.pdf"
  }
];

export default function IronswornPage() {
  return (
    <div className="space-y-8">
      <HeroSection 
        imagePrefix="ironsworn" 
        title="Ironsworn" 
        description="Un système de jeu simple et adaptable selon les besoins : en solo, en coopération ou en aventure guidée." 
      />

      <div className="container mx-auto space-y-12">
        {/* Couverture des univers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pax Elfica Cover */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden group">
            <Image
              src="/images/sections/pax-elfica-section.webp"
              alt="Pax Elfica"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h2 className="text-2xl font-bold text-text-light mb-2">Pax Elfica</h2>
              <p className="text-text-light/80">Résistez à la tyrannie des elfes avec Ironsworn</p>
            </div>
          </div>

          {/* Archipels Cover */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden group">
            <Image
              src="/images/sections/archipels-section.webp"
              alt="Archipels"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h2 className="text-2xl font-bold text-text-light mb-2">Archipels</h2>
              <p className="text-text-light/80">Aventures dans les îles mouvantes dans Sundered Isles</p>
            </div>
          </div>
        </div>

        {/* Pax Elfica */}
        <section className="space-y-8">
          <div className="relative rounded-lg overflow-hidden h-[200px]">
            <Image
              src="/images/settings/pax-elfica.webp"
              alt="Pax Elfica"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Pax Elfica</h2>
                <p className="text-muted-foreground max-w-xl">
                  Un monde où les royaumes elfiques maintiennent une paix fragile, 
                  tandis que d'anciennes menaces s'éveillent dans les profondeurs des forêts millénaires.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paxElficaResources.map((resource) => (
              <Card key={resource.id}>
                <CardHeader>
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{resource.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={resource.link}>
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Archipels */}
        <section className="space-y-8">
          <div className="relative rounded-lg overflow-hidden h-[200px]">
            <Image
              src="/images/settings/archipels.webp"
              alt="Archipels"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Archipels</h2>
                <p className="text-muted-foreground max-w-xl">
                  Naviguez entre les îles mystérieuses, affrontez le mal sur des mers imprévisibles dans cette adaptation d'un monde D20 pour Sundered Isles.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archipelsResources.map((resource) => (
              <Card key={resource.id}>
                <CardHeader>
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{resource.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={resource.link}>
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger
                    </Link>
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