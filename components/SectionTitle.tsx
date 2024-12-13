interface SectionTitleProps {
  children: React.ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold mb-6 text-white">{children}</h2>
  )
}

