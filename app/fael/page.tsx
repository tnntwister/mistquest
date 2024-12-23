import { Suspense } from "react";
import { CharacterProfile } from "./components/character-profile";
import { JournalEntries } from "./components/journal-entries";
import { PageHeader } from "./components/page-header";
import { ProfileSkeleton, JournalSkeleton } from "./components/loading";
import { Frame } from "lucide-react";


export default function FaelPage() {
  return (
    <Frame className="space-y-8">
      <PageHeader />
      
      <Suspense fallback={<ProfileSkeleton />}>
        <CharacterProfile />
      </Suspense>

      <hr className="border-slate-800 md:hidden" />

      <Suspense fallback={<JournalSkeleton />}>
        <JournalEntries />
      </Suspense>
    </Frame>
  );
}