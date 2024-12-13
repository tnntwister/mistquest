import Layout from '@/components/layout'
import Link from 'next/link'
import Image from 'next/image'
import { Book, Users, Calendar } from 'lucide-react'

export default function Home() {
  return (
    <Layout>
      <section className="mb-12 relative rounded-lg overflow-hidden">
        <Image 
          src="/placeholder.svg?height=400&width=1200&text=Mystical+Background" 
          alt="Mage l'Ascension - Mystical Background" 
          width={1200} 
          height={400} 
          className="w-full h-[400px] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/90 flex items-center justify-center p-4">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Bienvenue dans ma campagne de Mage l'Ascension
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-200">
              Explorez mon monde magique, découvrez ma version homebrew de la 5ème édition, et suivez les aventures de mon groupe !
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gold-200">
            À propos de Mage l'Ascension
          </span>
        </h2>
        <div className="bg-[#2a2a2a] p-8 rounded-lg shadow-xl border border-purple-700/20 mb-8">
          <p className="mb-4 text-gray-300">
            Mage l'Ascension est un jeu de rôle édité par White Wolf Publishing et Onyx Path Publishing, traduit en français par Arkhane Asylum Publishing. Ce jeu fascinant fait partie de l'univers du Monde des Ténèbres, un cadre de jeu riche et complexe qui englobe plusieurs lignes de jeux interconnectées.
          </p>
          <p className="mb-4 text-gray-300">
            Dans le Monde des Ténèbres, les joueurs peuvent explorer divers aspects du surnaturel, des vampires aux loups-garous, en passant par les fantômes et, bien sûr, les mages. Mage l'Ascension se concentre sur les pratiquants de la magie, offrant aux joueurs la possibilité de façonner la réalité selon leur volonté et leurs croyances.
          </p>
          <p className="text-gray-300">
            Mon site propose une interprétation et une adaptation de ce riche univers, avec ma propre version homebrew des règles, tout en restant fidèle à l'esprit original du jeu.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gold-200">
            Découvrez mon univers
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#2a2a2a] rounded-lg p-8 shadow-xl border border-purple-700/20 hover:border-purple-500/40 transition-colors">
            <div className="flex justify-center mb-6">
              <Book className="w-12 h-12 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">The Missing 5th Edition</h3>
            <p className="mb-6 text-center text-gray-300">Explorez ma version unique de la 5ème édition de Mage l'Ascension.</p>
            <div className="text-center">
              <Link 
                href="/the-missing-5th-edition" 
                className="text-purple-400 hover:text-gold-200 transition-colors inline-flex items-center"
              >
                En savoir plus
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
          <div className="bg-[#2a2a2a] rounded-lg p-8 shadow-xl border border-purple-700/20 hover:border-purple-500/40 transition-colors">
            <div className="flex justify-center mb-6">
              <Users className="w-12 h-12 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Campagne en cours</h3>
            <p className="mb-6 text-center text-gray-300">Revivez les aventures passées et découvrez les personnages de ma campagne.</p>
            <div className="text-center">
              <Link 
                href="/campagne-en-cours" 
                className="text-purple-400 hover:text-gold-200 transition-colors inline-flex items-center"
              >
                Explorer
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
          <div className="bg-[#2a2a2a] rounded-lg p-8 shadow-xl border border-purple-700/20 hover:border-purple-500/40 transition-colors md:col-span-2">
            <div className="flex justify-center mb-6">
              <Calendar className="w-12 h-12 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Brèves du MdT</h3>
            <p className="mb-6 text-center text-gray-300">Explorez la timeline de ma campagne et les événements clés de mon monde.</p>
            <div className="text-center">
              <Link 
                href="/breves-du-mdt" 
                className="text-purple-400 hover:text-gold-200 transition-colors inline-flex items-center"
              >
                Consulter
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gold-200">
            Brèves du MdT : Une Aide de Jeu pour les MJs
          </span>
        </h2>
        <div className="bg-[#2a2a2a] p-8 rounded-lg shadow-xl border border-purple-700/20">
          <p className="mb-6 text-gray-300">
            Mes Brèves du MdT (Maître du Temps) sont bien plus qu'une simple chronologie. C'est un outil puissant conçu pour enrichir l'expérience de jeu des Maîtres de Jeu (MJs) dans l'univers de Mage l'Ascension.
          </p>
          <p className="mb-4 text-white font-semibold">Ce calendrier vous permet de :</p>
          <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
            <li>Suivre les événements majeurs de la campagne</li>
            <li>Planifier les futures sessions et arcs narratifs</li>
            <li>Créer une cohérence temporelle dans mon monde</li>
            <li>Offrir aux joueurs un aperçu de l'histoire en développement</li>
          </ul>
          <p className="text-gray-300">
            Que vous soyez un MJ expérimenté ou débutant, mon calendrier fictif vous aidera à créer une expérience immersive et captivante pour vos joueurs.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gold-200">
            Crédits et Remerciements
          </span>
        </h2>
        <div className="bg-[#2a2a2a] p-8 rounded-lg shadow-xl border border-purple-700/20">
          <p className="mb-4 text-gray-300">
            Mage l'Ascension est un jeu édité par White Wolf Publishing et Onyx Path Publishing. Nous tenons à exprimer notre gratitude pour la création de cet univers riche et captivant.
          </p>
          <p className="mb-4 text-gray-300">
            La version française du jeu est traduite et publiée par Arkhane Asylum Publishing. Nous les remercions pour leur travail de qualité qui permet aux francophones de profiter pleinement de ce jeu extraordinaire.
          </p>
          <p className="mb-4 text-gray-300">
            Mon site et ma version homebrew sont des créations de fans, réalisées avec amour et respect pour l'œuvre originale. Nous ne prétendons pas détenir les droits sur Mage l'Ascension ou le Monde des Ténèbres.
          </p>
          <p className="text-gray-300">
            Nous encourageons tous les visiteurs à soutenir les éditeurs officiels en achetant les livres et suppléments originaux.
          </p>
        </div>
      </section>
    </Layout>
  )
}

