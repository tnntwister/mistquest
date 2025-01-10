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
    id: "1",
    title: "Un soir au coin de feu",
    description: "Deux loups-garous racontent à P'yo la purge de Pittsfied, en 2004.",
    link: "/documents/mage/un-soir-au-coin-du-feu.pdf"
  },
  {
    id: "2",
    title: "L'antre des espoirs",
    description: "La rencontre entre Vera et Paul.",
    link: "/documents/mage/l-antre-des-espoirs.pdf"
  },
  {
    id: "3",
    title: "Volonté de puissance",
    description: "Rencontre entre Eddie et Paul.",
    link: "/documents/mage/volonte-de-puissance.pdf"
  },
  {
    id: "4",
    title: "Deux parenthèses qui se répondent",
    description: "Formation de Jenn par Echo",
    link: "/documents/mage/deux-parentheses-qui-se-repondent.pdf"
  },
  {
    id: "5",
    title: "L'amérique des possibles",
    description: "Formation de Tobias par Pelops",
    link: "/documents/mage/l-amerique-des-possibles.pdf"
  }
];

export const gameAids: GameAids[] = [
  {
    id: "1",
    title: "Fiche de personnage",
    description: "une version pdf de la fiche de personnage, remplissable.",
    link: "/documents/mage/M20_fiche.pdf"
  },
  {
    id: "2",
    title: "Base du lore",
    description: "Histoire de l'univers et les différentes options de jeu.",
    link: "/documents/mage/M20_joueur1.pdf"
  },
  {
    id: "3",
    title: "Résumé de création de personnage",
    description: "Les différentes étapes de la création d'un personnage.",
    link: "/documents/mage/M20_resume_creation.pdf"
  },
  {
    id: "4",
    title: "Descriptif des sphères",
    description: "Un descriptif des différentes sphères et leurs effets.",
    link: "/documents/mage/M20_spheres.pdf"
  }
];
