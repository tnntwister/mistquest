import { Card } from "@/components/ui/card";

export function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-8 w-48 animate-pulse rounded-md bg-slate-800" />
      <div className="grid gap-6 md:grid-cols-2">
        {[...Array(2)].map((_, i) => (
          <Card key={i} className="h-48 animate-pulse border-slate-800" />
        ))}
      </div>
    </div>
  );
}