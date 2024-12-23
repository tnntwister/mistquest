import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { HeroSection } from "@/components/ui/hero-section";
import { AssetsGrid } from "./components/assets-grid";
import { RecentJourneys } from "./components/recent-journeys";

export default function IronswornPage() {
  return (
    <div className="space-y-8">
      <HeroSection 
        imagePrefix="ironsworn" 
        title="Ironsworn" 
        description="Forgez votre destin dans les Terres de Fer, où les serments sont sacrés et les aventures périlleuses vous attendent."
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