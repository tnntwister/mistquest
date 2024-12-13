import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getMarkdownContent(filePath: string) {
  const fullPath = path.join(process.cwd(), 'content', filePath)
  const fileContents = await fs.readFile(fullPath, 'utf8')
  
  const { content } = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(content)
    
  return processedContent.toString()
} 