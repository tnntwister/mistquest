import { Metadata } from 'next'
import { getMarkdownContent } from '@/lib/markdown'
import Layout from '@/components/layout'
import { DocSidebar } from '@/components/doc-sidebar'

interface PageProps {
  params: {
    slug: string[]
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const content = await getMarkdownContent(`the-missing-5th-edition/${params.slug.join('/')}.md`)
    
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

export default async function Page({ params }: PageProps) {
  const content = await getMarkdownContent(`the-missing-5th-edition/${params.slug.join('/')}.md`)
  
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-[#2a2a2a] p-4 md:h-[calc(100vh-4rem)] md:overflow-y-auto">
          <DocSidebar />
        </aside>
        <main className="flex-1 p-6 bg-[#1a1a1a]">
          <h1 className="text-4xl font-bold mb-2 text-white">{content.metadata.title}</h1>
          {content.metadata.description && (
            <p className="text-gray-400 mb-6">{content.metadata.description}</p>
          )}
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content.content }} />
        </main>
      </div>
    </Layout>
  )
} 