import Layout from '@/components/layout'
import { DocSidebar } from '@/components/doc-sidebar'
import { getMarkdownContent } from '@/lib/markdown'

export default async function Timeline() {
  const { content, metadata } = await getMarkdownContent('the-missing-5th-edition/ce-qui-change/timeline.md')
  
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-[#2a2a2a] p-4 md:h-[calc(100vh-4rem)] md:overflow-y-auto">
          <DocSidebar />
        </aside>
        <main className="flex-1 p-6 bg-[#1a1a1a]">
          <h1 className="text-4xl font-bold mb-2 text-white">{metadata.title}</h1>
          {metadata.description && (
            <p className="text-gray-400 mb-6">{metadata.description}</p>
          )}
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </main>
      </div>
    </Layout>
  )
} 