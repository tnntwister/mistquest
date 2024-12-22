import { Suspense } from "react";
import { HeroSection } from "./components/hero-section";
import { WorldLore } from "./components/world-lore";
import { CharacterClasses } from "./components/character-classes";
import { LoadingSkeleton } from "./components/loading";

export default function SoleilNoirPage() {
  return (
    <div className="relative space-y-12 py-8">
      <HeroSection />
      
      <Suspense fallback={<LoadingSkeleton />}>
        <WorldLore />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <CharacterClasses />
      </Suspense>
    </div>
  );
}