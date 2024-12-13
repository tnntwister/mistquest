import fs from 'fs/promises'
import path from 'path'

type NavSection = {
  title: string
  slug: string
  items: NavItem[]
}

type NavItem = {
  title: string
  href: string
}

const titleMap: Record<string, string> = {
  'ce-qui-change': 'Ce qui change',
  'factions': 'Les factions',
  'concepts': 'Évolution des concepts',
  'thematiques': 'Les thématiques',
  'enjeux': 'Les enjeux',
  'timeline': 'Nouvelle timeline',
  'regles': 'Nouvelles règles',
  'traditions': 'Les Traditions',
  'technocratie': 'La Technocratie',
  'nephandi': 'Les Nephandi',
  'maraudeurs': 'Les Maraudeurs',
  'humains-hunters': 'Humains & Hunters',
  'vampires': 'Les vampires',
  'loups-garou': 'Les loups-garou',
  'wraiths': 'Wraiths et Revenants',
  'realite': 'La Réalité',
  'umbra': "L'Umbra",
  'outremonde': "L'Outremonde"
}

export async function getNavigation(): Promise<NavSection[]> {
  const basePath = path.join(process.cwd(), 'app/the-missing-5th-edition')
  const sections = ['ce-qui-change', 'factions', 'concepts']
  const navigation: NavSection[] = []

  for (const section of sections) {
    const sectionPath = path.join(basePath, section)
    const items: NavItem[] = []

    try {
      const entries = await fs.readdir(sectionPath, { withFileTypes: true })
      
      for (const entry of entries) {
        if (entry.isDirectory()) {
          items.push({
            title: titleMap[entry.name] || entry.name,
            href: `/the-missing-5th-edition/${section}/${entry.name}`
          })
        }
      }

      navigation.push({
        title: titleMap[section],
        slug: section,
        items: items
      })
    } catch (error) {
      console.error(`Error reading directory ${sectionPath}:`, error)
    }
  }

  return navigation
} 