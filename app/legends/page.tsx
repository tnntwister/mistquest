
import { HeroSection } from "@/components/ui/hero-section";

export default function LegendsPage() {
  return (
    <div className="space-y-8">
      <HeroSection
        imagePrefix="litm" 
        title="Legend in the mist" 
        description="Explorez l'histoire riche et les légendes du monde, depuis l'émergence du premier empire jusqu'à la chute du dernier royaume."
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