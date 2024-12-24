"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { CampaignLog } from "@/components/campaign-log";
import { CharactersList } from "@/components/characters-list";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import Link from "next/link";

const tobiasLogs = [
  {
    id: "3",
    title: "L'Éveil",
    date: "2024-03-20",
    summary: "Tobias découvre ses pouvoirs lors d'une expérience de laboratoire qui tourne mal..."
  },
  {
    id: "2",
    title: "Premier Contact",
    date: "2024-03-13",
    summary: "Rencontre avec un mentor des Fils de l'Éther..."
  },
  {
    id: "1",
    title: "La Théorie du Tout",
    date: "2024-03-06",
    summary: "Exploration des théories quantiques et leurs implications magiques..."
  }
];

const paulLogs = [
  {
    id: "3",
    title: "Rituels Ancestraux",
    date: "2024-03-20",
    summary: "Paul approfondit sa connexion avec les esprits des ancêtres..."
  },
  {
    id: "2",
    title: "Les Voix du Passé",
    date: "2024-03-13",
    summary: "Découverte d'anciens sites sacrés dans la région..."
  },
  {
    id: "1",
    title: "Héritage Verbena",
    date: "2024-03-06",
    summary: "Initiation aux mystères des anciennes traditions..."
  }
];

const moissonLogs = [
  {
    id: "3",
    title: "La Récolte",
    date: "2024-03-20",
    summary: "Le cercle se prépare pour le rituel de la moisson..."
  },
  {
    id: "2",
    title: "Équinoxe",
    date: "2024-03-13",
    summary: "Préparatifs pour la grande cérémonie de l'équinoxe..."
  },
  {
    id: "1",
    title: "Les Graines du Pouvoir",
    date: "2024-03-06",
    summary: "Découverte des anciennes traditions agricoles magiques..."
  }
];

const characters = {
  allies: [
    {
      id: "mentor",
      name: "Maître Chen",
      title: "Mentor des Fils de l'Éther",
      description: "Un brillant scientifique qui guide les nouveaux éveillés dans leur compréhension de la réalité quantique.",
      tags: ["Mentor", "Guide", "Fils de l'Éther"],
      imagePath: "/images/characters/chen.webp"
    },
    {
      id: "sophia",
      name: "Sophia",
      title: "Prêtresse Verbena",
      description: "Une sage-femme qui maintient les anciennes traditions et protège les cercles sacrés.",
      tags: ["Alliée spirituelle", "Verbena", "Guérisseuse"],
      imagePath: "/images/characters/sophia.webp"
    }
  ],
  rivals: [
    {
      id: "technocrate",
      name: "Agent Smith",
      title: "Agent de la Technocratie",
      description: "Un agent déterminé à maintenir la réalité consensuelle et à éliminer les déviants.",
      tags: ["Adversaire", "Technocratie", "NWO"],
      imagePath: "/images/characters/smith.webp"
    },
    {
      id: "maraudeur",
      name: "Le Chaos",
      title: "Maraudeur",
      description: "Une entité imprévisible qui sème le chaos et déforme la réalité autour d'elle.",
      tags: ["Menace", "Maraudeur", "Imprévisible"],
      imagePath: "/images/characters/chaos.webp"
    }
  ]
};

const stories = [
  {
    id: "1",
    title: "L'Éveil de Tobias",
    description: "Une nouvelle sur la découverte de la magie par un jeune scientifique.",
    link: "/stories/eveil-tobias.pdf"
  },
  {
    id: "2",
    title: "Les Rituels de Paul",
    description: "Un récit détaillé des premières expériences magiques de Paul.",
    link: "/stories/rituels-paul.pdf"
  },
  {
    id: "3",
    title: "Le Cercle des Moissons",
    description: "L'histoire de la formation du cercle et de leurs premiers rituels.",
    link: "/stories/cercle-moissons.pdf"
  }
];

const gameAids = [
  {
    id: "1",
    title: "Fiche de Tradition",
    description: "Template pour créer votre propre mage avec les spécificités de sa tradition.",
    link: "/aids/fiche-tradition.pdf"
  },
  {
    id: "2",
    title: "Guide des Sphères",
    description: "Résumé des effets et correspondances pour chaque niveau de sphère.",
    link: "/aids/guide-spheres.pdf"
  },
  {
    id: "3",
    title: "Aide de jeu Paradigmes",
    description: "Comment créer et utiliser les paradigmes magiques dans vos parties.",
    link: "/aids/paradigmes.pdf"
  }
];

export default function MagePage() {
  return (
    <div className="space-y-8">
      <HeroSection 
        imagePrefix="mage" 
        title="Mage: The Ascension" 
        description="Explore the realms of reality-bending magic and philosophical conflict in the World of Darkness." 
      />

      <div className="container mx-auto space-y-12">
        {/* Chroniques */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Chroniques en Cours</h2>
          
          <div className="space-y-8">
            <CampaignLog 
              title="Chroniques de Tobias"
              sessions={tobiasLogs} 
            />
            <CampaignLog 
              title="Journal de Paul"
              sessions={paulLogs} 
            />
            <CampaignLog 
              title="Le Temps des Moissons"
              sessions={moissonLogs} 
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