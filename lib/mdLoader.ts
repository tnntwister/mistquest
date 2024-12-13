import fs from 'fs'
import path from 'path'

export async function getMarkdownContent(slug: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'content', 'histoires', `${slug}.md`)
  const fileContent = await fs.promises.readFile(filePath, 'utf8')
  return fileContent
}

export async function getAllHistoireSlugs(): Promise<string[]> {
  const histoiresDirectory = path.join(process.cwd(), 'content', 'histoires')
  const filenames = await fs.promises.readdir(histoiresDirectory)
  return filenames.map(filename => filename.replace(/\.md$/, ''))
}

