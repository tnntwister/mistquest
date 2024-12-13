import path from 'path'
import matter from 'gray-matter'
import { readFileSync, readdirSync } from 'fs'
import { NextResponse } from 'next/server'

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

export async function GET() {
  const contentDir = path.join(process.cwd(), 'content/the-missing-5th-edition')
  const sections = readdirSync(contentDir, { withFileTypes: true })
  
  const navigation: NavSection[] = []

  for (const section of sections) {
    if (section.isDirectory()) {
      const sectionPath = path.join(contentDir, section.name)
      const files = readdirSync(sectionPath)
      
      const items: NavItem[] = []
      
      for (const file of files) {
        if (file.endsWith('.md')) {
          const fullPath = path.join(sectionPath, file)
          const content = readFileSync(fullPath, 'utf8')
          const { data } = matter(content)
          
          items.push({
            title: data.title,
            href: `/the-missing-5th-edition/${section.name}/${file.replace('.md', '')}`,
            description: data.description
          })
        }
      }
      
      if (items.length > 0) {
        navigation.push({
          title: section.name.charAt(0).toUpperCase() + section.name.slice(1).replace(/-/g, ' '),
          slug: section.name,
          items
        })
      }
    }
  }
  
  return NextResponse.json(navigation)
} 