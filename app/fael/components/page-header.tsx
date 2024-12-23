"use client";

import { Header } from "@/components/ui/header";

export function PageHeader() {
  return (
    <Header>
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
        Fael Bursandra des Hazat
      </h1>
      <p className="text-lg text-muted-foreground mt-4">
        Follow the journey of a noble warrior in the Fading Suns universe, where duty and honor clash with political intrigue.
      </p>
    </Header>
  );
}