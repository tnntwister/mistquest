import Layout from '@/components/layout'
import { Clock, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { breves } from '@/lib/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brèves du Monde des Ténèbres'
}

export default function BrevesduMdT() {
return (
  <Layout>
    <h1 className="text-4xl font-bold mb-4 text-center text-white">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gold-200">
        Brèves du Monde des Ténèbres
      </span>
    </h1>
    
    <p className="text-gray-300 text-center mb-8">
      Votre source hebdomadaire d'informations sur les événements du Monde des Ténèbres et ma campagne de Mage.
    </p>
    
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
        <BookOpen className="mr-2 text-purple-400" />
        Éditions Récentes
      </h2>

      <div className="space-y-8">
        {breves.map((breve) => (
          <article key={breve.id} className="bg-[#2a2a2a] p-6 rounded-lg shadow-xl border border-purple-700/20">
            <Link href={`/breves-du-mdt/${breve.id}`}>
              <h3 className="text-2xl font-bold mb-4 text-white hover:text-purple-400 transition-colors">
                {breve.title}
              </h3>
            </Link>
            <p className="mb-4 text-gray-300 flex items-center">
              <Clock className="mr-2 text-purple-400" />
              Semaine de jeu : {breve.gameWeek} | Publié le {breve.publishDate}
            </p>
            <div className="prose prose-invert max-w-none">
              <p>{breve.summary}</p>
              
              <Link href={`/breves-du-mdt/${breve.id}`} className="inline-block mt-4 text-purple-400 hover:text-gold-200 transition-colors">
                Lire l'article complet →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
)
}

