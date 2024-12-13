import { Metadata } from 'next'
import { getMarkdownContent } from '@/lib/markdown'

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  try {
    const content = await getMarkdownContent(`the-missing-5th-edition/${params?.slug?.join('/')}.md`)
    
    return {
      title: content.metadata.title,
      description: content.metadata.description
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Page non trouvée'
    }
  }
} 