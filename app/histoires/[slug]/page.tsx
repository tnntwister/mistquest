import { getMarkdownContent, getAllHistoireSlugs } from '@/lib/mdLoader'
import Layout from '@/components/layout'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const slugs = await getAllHistoireSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default async function HistoirePage({ params }: { params: { slug: string } }) {
  const content = await getMarkdownContent(params.slug)

  return (
    <Layout>
      <Link href="/campagne-en-cours" className="inline-flex items-center text-purple-400 hover:text-gold-200 transition-colors mb-6">
        <ArrowLeft className="mr-2" />
        Retour à la campagne en cours
      </Link>
      
      <article className="prose prose-invert max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </Layout>
  )
}

