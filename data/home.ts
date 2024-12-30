export interface HomeSection {
  title: string;
  description: string;
  link: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  iconName: string;
  href: string;
  image: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  description: string;
}

export interface Achievement {
  title: string;
  description?: string;
  icon?: string;
  date?: string;
}

export const homeSections: HomeSection[] = [
  {
    title: "Mage l'Ascension",
    description: "Découvrez les chroniques de Mage l'Ascension, entre mystère et magie dans un monde contemporain sombre et fascinant.",
    link: "/mage",
    image: "/images/mage.jpg"
  },
  {
    title: "Légendes du Nouveau Soleil",
    description: "Plongez dans l'univers des Légendes du Nouveau Soleil, un monde où la magie et la technologie se mêlent dans une quête épique.",
    link: "/nouveau-soleil",
    image: "/images/nouveau-soleil.jpg"
  },
  {
    title: "Ironsworn",
    description: "Découvrez mes adaptations d'Ironsworn : Pax Elfica, un monde elfique mystérieux, et Archipels, une aventure maritime épique.",
    link: "/ironsworn",
    image: "/images/ironsworn.jpg"
  },
  {
    title: "Réflexions",
    description: "Explorez mes réflexions sur la pratique du jeu de rôle, son impact sur le développement personnel et sa dimension sociopolitique.",
    link: "/reflexions",
    image: "/images/reflexions.jpg"
  }
];

export const features: Feature[] = [
  {
    title: "Fael Bursandra des Hazat",
    description: "Suivez le voyage d'un noble guerrier dans un univers d'intrigues et d'honneur.",
    iconName: "⚔️",
    href: "/fael",
    image: "/images/features/fael-hero.webp"
  },
  {
    title: "Mage",
    description: "Explorez les mystères de la magie et des pouvoirs qui altèrent la réalité.",
    iconName: "✨",
    href: "/mage",
    image: "/images/features/mage-hero.webp"
  },
  {
    title: "LNS",
    description: "Plongez dans la dark fantasy et les aventures épiques.",
    iconName: "📖",
    href: "/nouveau-soleil",
    image: "/images/features/lns-hero.webp"
  },
  {
    title: "Tokyo:Otherscape",
    description: "Explorez le mystère de Tokyo, une ville où les lignes entre le monde réel et le monde des esprits sont floues.",
    iconName: "✨",
    href: "/otherscape",
    image: "/images/features/otherscape-hero.webp"
  },
  {
    title: "Ironsworn",
    description: "Forgez votre chemin à travers des terres dangereuses en solo ou en groupe.",
    iconName: "🗡️",
    href: "/ironsworn",
    image: "/images/features/ironsworn-hero.webp"
  },
  {
    title: "LitM",
    description: "Créez vos propres récits dans un monde enveloppé de mystère.",
    iconName: "📜",
    href: "/legends",
    image: "/images/features/litm-hero.webp"
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    date: "1993",
    description: "Runequest boite bleue"
  },
  {
    id: "2",
    date: "1994",
    description: "Torg"
  },
  {
    id: "3",
    date: "1995",
    description: "SpaceMaster"
  },
  {
    id: "4",
    date: "1996",
    description: "Cyberpunk 2020"
  },
  {
    id: "5",
    date: "1997",
    description: "Ambre"
  },
  {
    id: "6",
    date: "2001",
    description: "D20 system"
  },
  {
    id: "7",
    date: "2003",
    description: "Savage Worlds"
  },
  {
    id: "8",
    date: "2004",
    description: "Post-Mortem"
  }
];

export const achievements: Achievement[] = [
  {
    title: "A organisé un multitables"
  },
  {
    title: "A été publié (Archipels, Post-Mortem)"
  },
  {
    title: "A vendu des pdfs (Lance-Feu)"
  },
  {
    title: "A crée un fanzine (l'Aiguillier)"
  }
]; 