import { Suspense } from "react";
import { DarkArts } from "./components/dark-arts";
import { Grimoire } from "./components/grimoire";
import { LoadingSkeleton } from "./components/loading";
import { HeroSection } from "@/components/ui/hero-section";
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