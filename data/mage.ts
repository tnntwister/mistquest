export interface CampaignLogs {
  [key: string]: {
    title: string;
    sessions: {
      id: string;
      title: string;
      date: string;
      summary: string;
    }[];
  };
}

export interface Characters {
  allies: {
    id: string;
    name: string;
    title: string;
    description: string;
    tags: string[];
    imagePath: string;
  }[];
  rivals: {
    id: string;
    name: string;
    title: string;
    description: string;
    tags: string[];
    imagePath: string;
  }[];
}

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

export interface PageInfo {
  title: string;
  description: string;
  imagePrefix: string;
}

export const campaignLogs: CampaignLogs = {
  tobias: {
    title: "Chroniques de Tobias",
    sessions: [
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
    ]
  },
  paul: {
    title: "Journal de Paul",
    sessions: [
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
    ]
  },
  moisson: {
    title: "Le Temps des Moissons",
    sessions: [
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
    ]
  }
};

export const characters: Characters = {
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

export const pageInfo: PageInfo = {
  title: "Mage: l'Ascension",
  description: "Explorez le Monde des Ténèbres et imposez votre volonté à la Réalité... si les autres vous laissent faire.",
  imagePrefix: "mage"
}; 