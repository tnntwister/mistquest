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
        <Suspense fallback={<Card className="h-64 animate-pulse" />}>
            <AssetsGrid />
        </Suspense>
        
        <Suspense fallback={<Card className="h-32 animate-pulse" />}>
            <RecentJourneys />
        </Suspense>
      </div>
    </div>
  );
} 