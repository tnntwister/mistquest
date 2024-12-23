import { Suspense } from "react";
import { PageHeader } from "./components/page-header";
import { DarkArts } from "./components/dark-arts";
import { Grimoire } from "./components/grimoire";
import { LoadingSkeleton } from "./components/loading";
import { Frame } from "lucide-react";
export default function DarkscapePage() {
  return (
    <Frame className="space-y-12 py-8">
      <PageHeader />
      
      <Suspense fallback={<LoadingSkeleton />}>
        <DarkArts />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <Grimoire />
      </Suspense>
    </Frame>
  );
}