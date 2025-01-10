import { Card } from "@/components/ui/card";

export function ProfileSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {[...Array(4)].map((_, i) => (
        <Card key={i} className="h-32 animate-pulse" />
      ))}
    </div>
  );
}

export function JournalSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(2)].map((_, i) => (
        <Card key={i} className="h-32 animate-pulse" />
      ))}
    </div>
  );
}