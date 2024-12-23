import { Suspense } from "react";
import { StoryGrid } from "./components/story-grid";
import { WorldMap } from "./components/world-map";
import { StorySkeleton, MapSkeleton } from "./components/loading";
import { HeroSection } from "@/components/ui/hero-section";

export default function LegendsPage() {
  return (
    <div className="space-y-8">
      <HeroSection
        imagePrefix="litm" 
        title="Legend in the Mist" 
        description="Explore the rich history and legends of the world, from the rise of the first empire to the fall of the last kingdom."
      />
      <div className="container mx-auto"></div>
      <Suspense fallback={<MapSkeleton />}>
        <WorldMap />
      </Suspense>

      <Suspense fallback={<StorySkeleton />}>
        <StoryGrid />
      </Suspense>
    </div>
  );
}