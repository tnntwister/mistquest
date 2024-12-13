import Layout from '@/components/layout'
import { Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Edition1() {
  return (
    <Layout>
      <Link href="/breves-du-mdt" className="inline-flex items-center text-purple-400 hover:text-gold-200 transition-colors mb-6">
        <ArrowLeft className="mr-2" />
        Retour aux Brèves
      </Link>
      
      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Édition #1 - Semaine du 01/01/2024
        </h1>
        
        <p className="text-gray-300 flex items-center mb-8">
          <Clock className="mr-2 text-purple-400" />
          Publié le 07/01/2024
        </p>

        <h2 className="text-3xl font-bold mb-4 text-purple-400">L'Éveil des nouveaux mages</h2>
        
        <p>La nouvelle année a commencé avec un événement extraordinaire : l'Éveil simultané de plusieurs nouveaux mages dans ma ville. Ce phénomène rare a envoyé des ondes de choc à travers le tissu de la réalité, attirant l'attention de diverses factions du Monde des Ténèbres. L'air même semblait vibrer d'une énergie nouvelle et imprévisible.</p>

        <h3 className="text-2xl font-bold mb-4 text-purple-400">Événements Marquants</h3>
        
        <h4 className="text-xl font-semibold mb-2">Découverte d'un ancien grimoire</h4>
        <p>Au milieu du chaos de ces Éveils multiples, un ancien grimoire a été découvert dans les archives poussiéreuses d'une vieille bibliothèque. Ce tome, rempli de sorts oubliés et de connaissances arcanes, promet de révolutionner ma compréhension de certains aspects de la magie. Les premières tentatives de déchiffrage ont déjà révélé des techniques de manipulation de la réalité jusqu'alors inconnues.</p>

        <h4 className="text-xl font-semibold mb-2">Première rencontre avec un mentor puissant et mystérieux</h4>
        <p>Alors que les nouveaux Éveillés tentaient de comprendre leurs pouvoirs naissants, une figure énigmatique est apparue. Ce mentor, dont le nom reste un mystère, semble posséder une maîtrise incroyable de la magie. Ses enseignements, bien que cryptiques, ont déjà commencé à façonner la compréhension des jeunes mages de leurs nouvelles capacités.</p>

        <h4 className="text-xl font-semibold mb-2">Formation d'alliances précaires</h4>
        <p>Face à l'incertitude et aux dangers potentiels de leur nouvelle réalité, les nouveaux Éveillés ont commencé à former des alliances. Ces liens, bien que fragiles, pourraient être la clé de leur survie dans le monde complexe et souvent hostile de la magie. Cependant, les tensions sont palpables, et la confiance reste un bien rare et précieux.</p>

        <h3 className="text-2xl font-bold mb-4 text-purple-400">Implications et Questions</h3>
        <p>L'Éveil simultané de tant de nouveaux mages soulève de nombreuses questions. Pourquoi maintenant ? Y a-t-il une signification plus profonde à cet événement ? Comment cela affectera-t-il l'équilibre des pouvoirs dans ma région ?</p>

        <p>Alors que j'entre dans cette nouvelle ère, une chose est certaine : le monde tel que je le connaissais est en train de changer. Les frontières entre la réalité et la magie s'estompent, et l'avenir n'a jamais été aussi incertain... et excitant.</p>

        <p>Restez à l'écoute pour plus de mises à jour sur ces développements fascinants dans mon Monde des Ténèbres.</p>
      </article>
    </Layout>
  )
}

