import path from 'path'
import matter from 'gray-matter'
import { cache } from 'react'

type NavItem = {
  title: string
  href: string
  description?: string
}

type NavSection = {
  title: string
  slug: string
  items: NavItem[]
}

const files = {
  'ce-qui-change': ['regles.md', 'thematiques.md', 'enjeux.md', 'timeline.md'],
  'factions': ['maraudeurs.md', 'traditions.md', 'wraiths.md', 'vampires.md', 'loups-garou.md'],
  'concepts': ['realite.md', 'umbra.md']
}

export const getNavigation = cache(async (): Promise<NavSection[]> => {
  const navigation: NavSection[] = []

  for (const [section, sectionFiles] of Object.entries(files)) {
    const items: NavItem[] = []
    
    for (const file of sectionFiles) {
      try {
        const content = await import(`@/content/the-missing-5th-edition/${section}/${file}`)
        const { data } = matter(content.default || content)
        
        items.push({
          title: data.title,
          href: `/the-missing-5th-edition/${section}/${file.replace('.md', '')}`,
          description: data.description
        })
      } catch (error) {
        console.warn(`Failed to load ${file} in ${section}:`, error)
      }
    }
    
    if (items.length > 0) {
      navigation.push({
        title: section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        slug: section,
        items
      })
    }
  }
  
  return navigation
}) 