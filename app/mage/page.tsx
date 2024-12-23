import { Suspense } from "react";
import { TraditionsGrid } from "./components/traditions-grid";
import { RecentChronicles } from "./components/recent-chronicles";
import { Card } from "@/components/ui/card";
import { HeroSection } from "@/components/ui/hero-section";

export default function MagePage() {
  return (
    <div className="space-y-8">
      <HeroSection imagePrefix="mage" title="Mage: The Ascension" description="Explore the realms of reality-bending magic and philosophical conflict in the World of Darkness." />

      <Suspense fallback={<Card className="h-64 animate-pulse" />}>
        <TraditionsGrid />
      </Suspense>
      
      <Suspense fallback={<Card className="h-32 animate-pulse" />}>
        <RecentChronicles />
      </Suspense>
    </div>
  );
}