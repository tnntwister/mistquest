import Link from 'next/link'
import { FileText } from 'lucide-react'

interface HistoireCardProps {
  title: string
  description: string
  slug: string
  excerpt: string
}

export function HistoireCard({ title, description, slug, excerpt }: HistoireCardProps) {
  return (
    <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-xl border border-purple-700/20">
      <FileText className="w-12 h-12 text-purple-400 mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2 text-white text-center">{title}</h3>
      <p className="mb-4 text-gray-300 text-center">{description}</p>
      <p className="mb-4 text-gray-400 text-sm italic">{excerpt}</p>
      <div className="text-center">
        <Link href={`/histoires/${slug}`} className="text-purple-400 hover:text-gold-200 transition-colors">Lire l'histoire</Link>
      </div>
    </div>
  )
}

