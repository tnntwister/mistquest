import { Suspense } from "react";
import { CharacterProfile } from "./components/character-profile";
import { JournalEntries } from "./components/journal-entries";
import { PageHeader } from "./components/page-header";
import { ProfileSkeleton, JournalSkeleton } from "./components/loading";
import { GothicFrame } from "@/components/ui/gothic-frame";
import { GothicDivider } from "@/components/ui/gothic-divider";

export default function FaelPage() {
  return (
    <GothicFrame className="space-y-8">
      <PageHeader />
      
      <Suspense fallback={<ProfileSkeleton />}>
        <CharacterProfile />
      </Suspense>

      <GothicDivider />

      <Suspense fallback={<JournalSkeleton />}>
        <JournalEntries />
      </Suspense>
    </GothicFrame>
  );
}