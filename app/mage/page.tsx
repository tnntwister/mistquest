"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { CampaignLog } from "@/components/campaign-log";
import { CharactersList } from "@/components/characters-list";

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
      relationship: "Mentor et guide"
    },
    {
      id: "sophia",
      name: "Sophia",
      title: "Prêtresse Verbena",
      description: "Une sage-femme qui maintient les anciennes traditions et protège les cercles sacrés.",
      relationship: "Alliée spirituelle"
    }
  ],
  rivals: [
    {
      id: "technocrate",
      name: "Agent Smith",
      title: "Agent de la Technocratie",
      description: "Un agent déterminé à maintenir la réalité consensuelle et à éliminer les déviants.",
      relationship: "Adversaire déclaré"
    },
    {
      id: "maraudeur",
      name: "Le Chaos",
      title: "Maraudeur",
      description: "Une entité imprévisible qui sème le chaos et déforme la réalité autour d'elle.",
      relationship: "Menace imprévisible"
    }
  ]
};

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
            <CampaignLog sessions={tobiasLogs} />
            <CampaignLog sessions={paulLogs} />
            <CampaignLog sessions={moissonLogs} />
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