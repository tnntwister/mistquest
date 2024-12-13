import Image from 'next/image'

interface PersonnageCardProps {
  name: string
  description: string
}

export function PersonnageCard({ name, description }: PersonnageCardProps) {
  return (
    <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-xl border border-purple-700/20">
      <Image 
        src={`/placeholder.svg?height=200&width=200&text=${encodeURIComponent(name)}`}
        alt={name}
        width={200}
        height={200}
        className="rounded-lg mb-4 mx-auto"
      />
      <h4 className="text-xl font-bold mb-2 text-white text-center">{name}</h4>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  )
}

