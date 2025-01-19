import { Sword, BookOpen, Compass } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface FooterMenuItem {
  title: string
  href: string
  icon: LucideIcon
  role: string
}

interface Update {
  date: string
  description: string
}

export const developmentZones: FooterMenuItem[] = [
  {
    title: "Fading Suns",
    href: "/personnages/fael",
    icon: Sword,
    role: "PJ"
  },
  {
    title: "Vampire V5",
    href: "/personnages/taylor",
    icon: Compass,
    role: "PJ"
  },
  {
    title: "Tokyo:Otherscape",
    href: "/univers/otherscape",
    icon: Compass,
    role: "MJ"
  },
  {
    title: "Nativesworn",
    href: "/creations/nativesworn",
    icon: BookOpen,
    role: "PJ/MJ"
  },
  {
    title: "Archipels",
    href: "/creations/archipels",
    icon: Compass,
    role: "PJ/MJ"
  },
  {
    title: "Obojima",
    href: "/univers/obojima",
    icon: BookOpen,
    role: "MJ"
  }
]

export const latestUpdates: Update[] = [
  {
    date: "18/01/2025",
    description: "Fiche de Jérome Sarrac"
  },
  {
    date: "10/01/2025", 
    description: "Fiche de Nicole"
  },
  {
    date: "04/01/2025",
    description: "Création de Nativesworn"
  },
  {
    date: "30/12/2024",
    description: "Description de Fael"
  }
] 