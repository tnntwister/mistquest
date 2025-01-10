export interface Stories {
  id: string;
  title: string;
  description: string;
  link: string;
}

export interface GameAids {
  id: string;
  title: string;
  description: string;
  link: string;
}

export const stories: Stories[] = [
  {
    id: "3",
    title: "Un soir au coin de feu",
    description: "Deux loups-garous racontent à P'yo la purge de Pittsfied, en 2004.",
    link: "/stories/eveil-tobias.pdf"
  },
  {
    id: "2",
    title: "L'antre des espoirs",
    description: "La rencontre entre Vera et Paul.",
    link: "/stories/rituels-paul.pdf"
  },
  {
    id: "1",
    title: "Volonté de puissance",
    description: "Rencontre entre Eddie et Paul.",
    link: "/stories/cercle-moissons.pdf"
  }
];

export const gameAids: GameAids[] = [
  {
    id: "1",
    title: "Fiche de personnage",
    description: "une version pdf de la fiche de personnage, remplissable.",
    link: "/aids/fiche-tradition.pdf"
  },
  {
    id: "2",
    title: "Résumé de création de personnage",
    description: "Les différentes étapes de la création d'un personnage.",
    link: "/aids/guide-spheres.pdf"
  },
  {
    id: "3",
    title: "Descriptif des sphères",
    description: "Un descriptif des différentes sphères et leurs effets.",
    link: "/aids/descriptif-spheres.pdf"
  }
];
