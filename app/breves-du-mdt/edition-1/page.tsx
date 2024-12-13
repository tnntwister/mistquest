import Layout from '@/components/layout'
import { getMarkdownContent, type MarkdownContent } from '@/lib/markdown'

export default async function Edition1() {
  const { content, metadata }: MarkdownContent = await getMarkdownContent('breves-du-mdt/edition-1.md')
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-2 text-white">{metadata.title}</h1>
        {metadata.description && (
          <p className="text-gray-400 mb-6">{metadata.description}</p>
        )}
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  )
}

