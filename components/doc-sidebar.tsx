'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

type NavItem = {
  title: string
  href: string
  items?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: "Introduction",
    href: "/the-missing-5th-edition",
  },
  {
    title: "Système de jeu",
    href: "/the-missing-5th-edition/systeme-de-jeu",
    items: [
      {
        title: "Jets de dés",
        href: "/the-missing-5th-edition/systeme-de-jeu/jets-de-des",
      },
      {
        title: "Combat",
        href: "/the-missing-5th-edition/systeme-de-jeu/combat",
      },
      {
        title: "Magie",
        href: "/the-missing-5th-edition/systeme-de-jeu/magie",
      },
      {
        title: "Paradoxe",
        href: "/the-missing-5th-edition/systeme-de-jeu/paradoxe",
      },
      {
        title: "Quintessence et Sphères",
        href: "/the-missing-5th-edition/systeme-de-jeu/quintessence-et-spheres",
      },
    ],
  },
  {
    title: "Le monde de Mage",
    href: "/the-missing-5th-edition/le-monde-de-mage",
    items: [
      {
        title: "Les Traditions",
        href: "/the-missing-5th-edition/le-monde-de-mage/les-traditions",
      },
      {
        title: "La Technocratie",
        href: "/the-missing-5th-edition/le-monde-de-mage/la-technocratie",
      },
      {
        title: "Les Nephandi et Maraudeurs",
        href: "/the-missing-5th-edition/le-monde-de-mage/nephandi-et-maraudeurs",
      },
      {
        title: "Les Royaumes",
        href: "/the-missing-5th-edition/le-monde-de-mage/les-royaumes",
      },
    ],
  },
  {
    title: "Chroniques",
    href: "/the-missing-5th-edition/chroniques",
    items: [
      {
        title: "Création de chroniques",
        href: "/the-missing-5th-edition/chroniques/creation-de-chroniques",
      },
      {
        title: "Antagonistes",
        href: "/the-missing-5th-edition/chroniques/antagonistes",
      },
      {
        title: "Récompenses",
        href: "/the-missing-5th-edition/chroniques/recompenses",
      },
    ],
  },
]

export function DocSidebar() {
  const pathname = usePathname()

  return (
    <nav className="text-white">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Ce qui change</h3>
        <ul className="space-y-2">
          <li><Link href="/the-missing-5th-edition/ce-qui-change/thematiques">Les thématiques</Link></li>
          <li><Link href="/the-missing-5th-edition/ce-qui-change/enjeux">Les enjeux</Link></li>
          <li><Link href="/the-missing-5th-edition/ce-qui-change/timeline">Nouvelle timeline</Link></li>
          <li><Link href="/the-missing-5th-edition/ce-qui-change/regles">Nouvelles règles</Link></li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Les factions</h3>
        <ul className="space-y-2">
          <li><Link href="/the-missing-5th-edition/factions/traditions">Les Traditions</Link></li>
          <li><Link href="/the-missing-5th-edition/factions/technocratie">La Technocratie</Link></li>
          <li><Link href="/the-missing-5th-edition/factions/nephandi">Les Nephandi</Link></li>
          <li><Link href="/the-missing-5th-edition/factions/maraudeurs">Les Maraudeurs</Link></li>
          <li><Link href="/the-missing-5th-edition/factions/humains-hunters">Humains & Hunters</Link></li>
          <li><Link href="/the-missing-5th-edition/factions/vampires">Les vampires</Link></li>
          <li><Link href="/the-missing-5th-edition/factions/loups-garou">Les loups-garou</Link></li>
          <li><Link href="/the-missing-5th-edition/factions/wraiths">Wraiths et Revenus</Link></li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Évolution des concepts</h3>
        <ul className="space-y-2">
          <li><Link href="/the-missing-5th-edition/concepts/realite">La Réalité</Link></li>
          <li><Link href="/the-missing-5th-edition/concepts/umbra">L'Umbra</Link></li>
          <li><Link href="/the-missing-5th-edition/concepts/outremonde">L'Outremonde</Link></li>
        </ul>
      </div>
    </nav>
  )
}

