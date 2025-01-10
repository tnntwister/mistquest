import { Sword, BookOpen, Compass } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface FooterMenuItem {
  title: string
  href: string
  icon: LucideIcon
  role: string
}

export const developmentZones: FooterMenuItem[] = [
  {
    title: "Fading Suns",
    href: "/fael",
    icon: Sword,
    role: "PJ"
  },
  {
    title: "Tokyo:Otherscape",
    href: "/otherscape",
    icon: Compass,
    role: "MJ"
  },
  {
    title: "Mage l'Ascension",
    href: "/mage",
    icon: BookOpen,
    role: "MJ"
  },
  {
    title: "Légendes du Nouveau Soleil",
    href: "/nouveau-soleil",
    icon: BookOpen,
    role: "MJ"
  },
  {
    title: "Archipels, Pax Elfica",
    href: "/ironsworn",
    icon: Compass,
    role: "MJ"
  },
  {
    title: "Obojima",
    href: "/obojima",
    icon: Compass,
    role: "MJ"
  }
] 