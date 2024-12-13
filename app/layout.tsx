import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Mist.quest - Contenus fanmade pour Mage',
    default: 'Mist.quest - Contenus fanmade pour Mage'
  },
  description: "Contenus fanmade pour Mage l'Ascension et le Monde des Ténèbres",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
