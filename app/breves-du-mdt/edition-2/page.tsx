import Layout from '@/components/layout'
import { Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Edition2() {
  return (
    <Layout>
      <Link href="/breves-du-mdt" className="inline-flex items-center text-purple-400 hover:text-gold-200 transition-colors mb-6">
        <ArrowLeft className="mr-2" />
        Retour aux Brèves
      </Link>
      
      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Édition #2 - Semaine du 08/01/2024
        </h1>
        
        <p className="text-gray-300 flex items-center mb-8">
          <Clock className="mr-2 text-purple-400" />
          Publié le 14/01/2024
        </p>

        <h2 className="text-3xl font-bold mb-4 text-purple-400">Conflit avec une cabale rivale</h2>
        
        <p>Cette semaine, mon groupe s'est retrouvé face à une cabale rivale, menant à un affrontement tendu au cœur de la cité. Les enjeux étaient élevés, avec le contrôle d'un important nœud magique en jeu. L'atmosphère était électrique alors que les deux groupes se faisaient face, chacun prêt à utiliser tous les moyens nécessaires pour l'emporter.</p>

        <h3 className="text-2xl font-bold mb-4 text-purple-400">Découvertes et Apprentissages</h3>
        
        <h4 className="text-xl font-semibold mb-2">Exploration d'un nœud magique ancien</h4>
        <p>Au cours de ma quête, j'ai découvert un nœud magique d'une puissance insoupçonnée, caché dans les profondeurs d'un ancien bâtiment. Ce lieu regorgeait d'énergie mystique et semblait contenir des secrets oubliés depuis des siècles. Mon exploration a révélé des inscriptions cryptiques et des artefacts mystérieux qui pourraient bien changer ma compréhension de la magie.</p>

        <h4 className="text-xl font-semibold mb-2">Apprentissage de nouveaux sorts</h4>
        <p>Face à l'adversité, mon groupe a dû faire preuve d'innovation et de créativité. J'ai développé de nouveaux sorts, combinant des aspects de différentes sphères de manière inédite. Ces nouvelles techniques magiques ont non seulement élargi mon arsenal, mais ont également approfondi ma compréhension des fondements de la magie.</p>

        <h4 className="text-xl font-semibold mb-2">Rencontre avec un mentor énigmatique</h4>
        <p>Au plus fort du conflit, un personnage mystérieux est apparu, offrant des conseils cryptiques et des enseignements profonds. Ce mentor, dont l'identité reste un mystère, semble posséder une connaissance vaste et ancienne de la magie. Ses paroles ont ouvert de nouvelles perspectives sur mon art, me poussant à remettre en question certaines de mes croyances les plus fondamentales.</p>

        <h3 className="text-2xl font-bold mb-4 text-purple-400">Conséquences et Réflexions</h3>
        <p>Le conflit avec la cabale rivale a laissé des traces profondes, tant dans le tissu de la réalité que dans mon esprit. Alors que je réfléchis aux événements de cette semaine, de nombreuses questions se posent : Quelles seront les répercussions à long terme de notre affrontement ? Comment les enseignements de mon mystérieux mentor vont-ils influencer ma pratique de la magie ? Et surtout, suis-je prêt pour les défis encore plus grands qui m'attendent ?</p>

        <p>Une chose est certaine : mon voyage dans les profondeurs du Monde des Ténèbres ne fait que commencer, et chaque pas me rapproche un peu plus de l'Ascension... ou de la chute.</p>
      </article>
    </Layout>
  )
}

