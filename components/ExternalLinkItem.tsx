import { ExternalLink } from 'lucide-react'

interface ExternalLinkItemProps {
  title: string
  link: string
}

export function ExternalLinkItem({ title, link }: ExternalLinkItemProps) {
  return (
    <a 
      href={link}
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-purple-400 hover:text-gold-200 transition-colors group"
    >
      <ExternalLink className="w-4 h-4 group-hover:text-gold-200 transition-colors" />
      {title}
    </a>
  )
}

