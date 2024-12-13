import Link from 'next/link'
import Image from 'next/image'

interface AideDeJeuCardProps {
  title: string
  description: string
  imageAlt: string
  content: string
  link: string
}

export function AideDeJeuCard({ title, description, imageAlt, content, link }: AideDeJeuCardProps) {
  return (
    <article className="bg-[#2a2a2a] p-6 rounded-lg shadow-xl border border-purple-700/20">
      <Link href={link} className="block group">
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">{title}</h3>
        <p className="mb-2 text-gray-300">{description}</p>
        <div className="flex items-center gap-4">
          <Image 
            src={`/placeholder.svg?height=150&width=150&text=${encodeURIComponent(imageAlt)}`}
            alt={imageAlt}
            width={150}
            height={150}
            className="rounded-lg"
          />
          <p className="text-gray-300">{content}</p>
        </div>
        <span className="inline-block mt-4 text-purple-400 group-hover:text-gold-200 transition-colors">
          Consulter le guide →
        </span>
      </Link>
    </article>
  )
}

