import { HeroSection } from "@/components/ui/hero-section";
import { SITE_NAME } from '../../config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Tokyo : Otherscape et le moteur Mist Engine - ${SITE_NAME}`,
  description: "Découvrez les aventures de Tokyo : Otherscape, un jeu de rôle sur le moteur Mist Engine."
};

export default function DarkscapePage() {
  return (
    <div className="space-y-8">
      <HeroSection
        imagePrefix="otherscape" 
        title="Otherscape" 
        description="Explore the mysterious Otherscape, a realm where the boundaries between worlds blur, and the unknown awaits."
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