import { Suspense } from "react";
import { PageHeader } from "./components/page-header";
import { StoryGrid } from "./components/story-grid";
import { WorldMap } from "./components/world-map";
import { StorySkeleton, MapSkeleton } from "./components/loading";

export default function LegendsPage() {
  return (
    <div className="space-y-8">
      <PageHeader />
      
      <Suspense fallback={<MapSkeleton />}>
        <WorldMap />
      </Suspense>

      <Suspense fallback={<StorySkeleton />}>
        <StoryGrid />
      </Suspense>
    </div>
  );
}