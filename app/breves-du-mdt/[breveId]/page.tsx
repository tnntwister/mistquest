import Layout from '@/components/layout'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'
import { breves } from '@/lib/data'

export const dynamicParams = false

export async function generateStaticParams() {
  return breves.map((breve) => ({
    breveId: breve.id,
  }))
}

export default function BrevePage({ params }: { params: { breveId: string } }) {
  const breve = breves.find((b) => b.id === params.breveId)

  if (!breve) {
    return <div>Brève not found</div>
  }

  return (
    <Layout>
      <Link href="/breves-du-mdt" className="inline-flex items-center text-purple-400 hover:text-gold-200 transition-colors mb-6">
        <ArrowLeft className="mr-2" />
        Retour aux Brèves
      </Link>
      
      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-white">
          {breve.title}
        </h1>
        
        <p className="text-gray-300 flex items-center mb-8">
          <Clock className="mr-2 text-purple-400" />
          Semaine de jeu : {breve.gameWeek} | Publié le {breve.publishDate}
        </p>

        <div dangerouslySetInnerHTML={{ __html: breve.content }} />
      </article>
    </Layout>
  )
}

