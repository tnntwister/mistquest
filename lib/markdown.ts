import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { readFile } from 'fs/promises'
import { cache } from 'react'

export type MarkdownContent = {
  content: string
  metadata: {
    [key: string]: unknown
  } & {
    title: string
    description?: string
  }
}

export const getMarkdownContent = cache(async (filePath: string): Promise<MarkdownContent> => {
  const fullPath = path.join(process.cwd(), 'content', filePath)
  
  // Utilisation de l'API de fichiers de Next.js
  const fileContents = await readFile(fullPath, 'utf8')
  
  const { data, content } = matter(fileContents)
  
  if (!data.title) {
    throw new Error(`Missing title in markdown file: ${filePath}`)
  }

  const processedContent = await remark()
    .use(html)
    .process(content)
    
  return {
    content: processedContent.toString(),
    metadata: data as MarkdownContent['metadata']
  }
}) 