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
    href: "/personnages/fael",
    icon: Sword,
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
    title: "Légendes du Nouveau Soleil",
    href: "/univers/lns",
    icon: BookOpen,
    role: "MJ"
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
    icon: Compass,
    role: "MJ"
  }
] 