import { Suspense } from "react";
import { PageHeader } from "./components/page-header";
import { DarkArts } from "./components/dark-arts";
import { Grimoire } from "./components/grimoire";
import { LoadingSkeleton } from "./components/loading";
import { GothicFrame } from "@/components/ui/gothic-frame";

export default function DarkscapePage() {
  return (
    <GothicFrame className="space-y-12 py-8">
      <PageHeader />
      
      <Suspense fallback={<LoadingSkeleton />}>
        <DarkArts />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <Grimoire />
      </Suspense>
    </GothicFrame>
  );
}