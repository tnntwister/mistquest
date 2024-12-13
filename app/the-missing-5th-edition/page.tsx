import Layout from '@/components/layout'
import { DocSidebar } from '@/components/doc-sidebar'
import Link from 'next/link'
import { getMarkdownContent } from '@/lib/markdown'
import { getNavigation } from '@/lib/navigation'

export default async function TheMissing5thEdition() {
  const content = await getMarkdownContent('the-missing-5th-edition/index.md')
  const navigation = await getNavigation()
  
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-[#2a2a2a] p-4 md:h-[calc(100vh-4rem)] md:overflow-y-auto">
          <DocSidebar />
        </aside>
        <main className="flex-1 p-6 bg-[#1a1a1a]">
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          
          <h2 className="mt-8 text-2xl font-bold text-white">Navigation rapide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {navigation.map((section) => (
              <div key={section.slug}>
                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                <ul className="mt-2 space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-gray-300 hover:text-white">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  )
}

