import Layout from '@/components/layout'
import { SectionTitle } from '@/components/SectionTitle'
import { AideDeJeuCard } from '@/components/AideDeJeuCard'
import { ExternalLinkItem } from '@/components/ExternalLinkItem'
import { PersonnageCard } from '@/components/PersonnageCard'
import { HistoireCard } from '@/components/HistoireCard'
import { TelechargementCard } from '@/components/TelechargementCard'
import { aidesDeJeu, aventuresSolo, personnages, histoires, telechargements } from '@/lib/campagne-en-cours-data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Campagne en cours'
}

export default function CampagneEnCours() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gold-200">
          Campagne en cours
        </span>
      </h1>

      <section className="mb-12">
        <SectionTitle>Aides de jeu et scénarii</SectionTitle>
        <div className="space-y-6">
          {aidesDeJeu.map((aide, index) => (
            <AideDeJeuCard key={index} {...aide} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>Aventures en solo</SectionTitle>
        <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-xl border border-purple-700/20">
          <p className="mb-6 text-gray-300">
            Découvrez les aventures en solo de mes personnages sur Minimal Roleplay, une plateforme de jeu de rôle textuel.
          </p>
          <div className="space-y-4">
            {aventuresSolo.map((aventure, index) => (
              <ExternalLinkItem key={index} {...aventure} />
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>Galerie de personnages</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personnages.map((personnage, index) => (
            <PersonnageCard key={index} {...personnage} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>Histoires à lire</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {histoires.map((histoire, index) => (
            <HistoireCard key={index} {...histoire} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>Téléchargements</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {telechargements.map((telechargement, index) => (
            <TelechargementCard key={index} {...telechargement} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

