import { Suspense } from "react";
import { TraditionsGrid } from "./components/traditions-grid";
import { RecentChronicles } from "./components/recent-chronicles";
import { Card } from "@/components/ui/card";

export default function MagePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Mage: The Ascension</h1>
        <p className="text-lg text-muted-foreground">
          Explore the realms of reality-bending magic and philosophical conflict in the World of Darkness.
        </p>
      </section>

      <Suspense fallback={<Card className="h-64 animate-pulse" />}>
        <TraditionsGrid />
      </Suspense>
      
      <Suspense fallback={<Card className="h-32 animate-pulse" />}>
        <RecentChronicles />
      </Suspense>
    </div>
  );
}