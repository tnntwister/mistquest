"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { CharacterDescription } from "@/components/character-description";
import { CampaignLog } from "@/components/campaign-log";
import { CharactersList } from "@/components/characters-list";

const sessions = [
  {
    id: "3",
    title: "Intrigues à la Cour",
    date: "2024-03-06",
    summary: "Négociations tendues avec la Maison Li Halan..."
  },
  {
    id: "2",
    title: "Les Secrets du Temple",
    date: "2024-03-13",
    summary: "Exploration des ruines d'un ancien temple technologique..."
  },
  {
    id: "1",
    title: "La Trahison des Décados",
    date: "2024-03-20",
    summary: "Un complot se dévoile lors d'un bal masqué..."
  }
];

const characters = {
  allies: [
    {
      id: "victoria",
      name: "Victoria Hawkwood",
      title: "Diplomate",
      description: "Alliée de longue date de la Maison Hazat, Victoria excelle dans l'art de la négociation et des intrigues de cour.",
      relationship: "Amie proche et conseillère politique"
    },
    {
      id: "marcus",
      name: "Père Marcus",
      title: "Prêtre de l'Église Universelle",
      description: "Un prêtre érudit qui guide Fael dans les questions spirituelles tout en gardant un œil sur les hérétiques.",
      relationship: "Mentor spirituel"
    },
    {
      id: "victoria",
      name: "Victoria Hawkwood",
      title: "Diplomate",
      description: "Alliée de longue date de la Maison Hazat, Victoria excelle dans l'art de la négociation et des intrigues de cour.",
      relationship: "Amie proche et conseillère politique"
    },
    {
      id: "marcus",
      name: "Père Marcus",
      title: "Prêtre de l'Église Universelle",
      description: "Un prêtre érudit qui guide Fael dans les questions spirituelles tout en gardant un œil sur les hérétiques.",
      relationship: "Mentor spirituel"
    }, {
      id: "victoria",
      name: "Victoria Hawkwood",
      title: "Diplomate",
      description: "Alliée de longue date de la Maison Hazat, Victoria excelle dans l'art de la négociation et des intrigues de cour.",
      relationship: "Amie proche et conseillère politique"
    },
    {
      id: "marcus",
      name: "Père Marcus",
      title: "Prêtre de l'Église Universelle",
      description: "Un prêtre érudit qui guide Fael dans les questions spirituelles tout en gardant un œil sur les hérétiques.",
      relationship: "Mentor spirituel"
    }
  ],
  rivals: [
    {
      id: "decados",
      name: "Comte Décados",
      title: "Rival politique",
      description: "Un noble manipulateur qui cherche à affaiblir l'influence des Hazat dans le secteur.",
      relationship: "Ennemi juré"
    },
    {
      id: "invisibles",
      name: "Les Invisibles",
      title: "Secte mystérieuse",
      description: "Un groupe occulte qui semble avoir des liens avec les technologies interdites.",
      relationship: "Menace cachée"
    }
  ]
};

export default function FaelPage() {
  return (
    <div className="space-y-8">
      <HeroSection 
        imagePrefix="fael" 
        title="Fael Bursandra des Hazat" 
        description="Un noble guerrier dans l'univers de Fading Suns, où le devoir et l'honneur s'entrechoquent avec les intrigues politiques."
      />
      
      <div className="container mx-auto space-y-8">
        <CharacterDescription
          name="Fael Bursandra"
          description="Noble de la Maison Hazat, Fael est un maître d'armes dévoué aux traditions martiales de sa famille..."
          imagePath="/images/hero/fael-hero.webp"
          characterSheetLink="/fael/fiche"
        />

        <CampaignLog sessions={sessions} />

        <CharactersList title="Alliés" characters={characters.allies} />
        <CharactersList title="Rivaux" characters={characters.rivals} />
      </div>
    </div>
  );
}