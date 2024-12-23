import { Suspense } from "react";
import { CharacterProfile } from "./components/character-profile";
import { JournalEntries } from "./components/journal-entries";
import { PageHeader } from "./components/page-header";
import { ProfileSkeleton, JournalSkeleton } from "./components/loading";
import { HeroSection } from "@/components/ui/hero-section";


export default function FaelPage() {
  return (
    <div className="space-y-8">
      <HeroSection 
        imagePrefix="fael" 
        title="Fael Bursandra des Hazat" 
        description="Follow the journey of a noble warrior in the Fading Suns universe, where duty and honor clash with political intrigue."
      />
      <div className="container mx-auto">
        <Suspense fallback={<ProfileSkeleton />}>
          <CharacterProfile />
        </Suspense>

        <hr className="border-slate-800 md:hidden" />

        <Suspense fallback={<JournalSkeleton />}>
          <JournalEntries />
        </Suspense>
      </div>
    </div>
  );
}