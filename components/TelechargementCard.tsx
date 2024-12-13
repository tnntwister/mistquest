import { Download } from 'lucide-react'

interface TelechargementCardProps {
  title: string
  description: string
  link: string
}

export function TelechargementCard({ title, description, link }: TelechargementCardProps) {
  return (
    <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-xl border border-purple-700/20">
      <Download className="w-12 h-12 text-purple-400 mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2 text-white text-center">{title}</h3>
      <p className="mb-4 text-gray-300 text-center">{description}</p>
      <div className="text-center">
        <a href={link} className="text-purple-400 hover:text-gold-200 transition-colors">Télécharger (PDF)</a>
      </div>
    </div>
  )
}

