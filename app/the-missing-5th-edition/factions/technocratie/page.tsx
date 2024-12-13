import Layout from '@/components/layout'
import { DocSidebar } from '@/components/doc-sidebar'
import { getMarkdownContent } from '@/lib/markdown'

export default async function Technocratie() {
  const content = await getMarkdownContent('the-missing-5th-edition/factions/technocratie.md')
  
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-[#2a2a2a] p-4 md:h-[calc(100vh-4rem)] md:overflow-y-auto">
          <DocSidebar />
        </aside>
        <main className="flex-1 p-6 bg-[#1a1a1a]">
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </main>
      </div>
    </Layout>
  )
} 