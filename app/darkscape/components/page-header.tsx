"use client";

import { GothicHeader } from "@/components/ui/gothic-header";

export function PageHeader() {
  return (
    <GothicHeader>
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
        Darkscape
      </h1>
      <p className="text-lg text-muted-foreground mt-4">
        Plongez dans les profondeurs de la magie interdite, où la réalité se plie à la volonté des initiés.
      </p>
    </GothicHeader>
  );
}