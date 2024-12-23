import { HeroSection } from "./components/hero-section";

export default function SoleilNoirPage() {
  return (
    <div className="relative space-y-12 py-8">
      <HeroSection 
        imagePrefix="lns" 
        title="Légendes du Soleil Noir" 
        description="Explorez les secrets de la Maison Hazat, une famille de guerriers et de diplomates qui ont dominé la politique et la guerre dans le monde."
      />
      
      <div className="container mx-auto">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            En cours de rédaction
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Le contenu de cette section est actuellement en développement.
          </p>
        </div>
      </div>
    </div>
  );
}