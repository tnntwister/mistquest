import { Suspense } from "react";
import { PageHeader } from "./components/page-header";
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
        <Suspense fallback={<LoadingSkeleton />}>
          <DarkArts />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <Grimoire />
        </Suspense>
      </div>
    </div>
  );
}