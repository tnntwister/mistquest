"use client";

import { Card } from "@/components/ui/card";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";


export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      
      <Card className="relative overflow-hidden border-0">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/lns-hero.webp"
            alt="Légendes du Nouveau Soleil"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/30" />
        
        <div className="relative space-y-6 p-8 md:p-12">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Sun className="h-8 w-8 animate-pulse text-amber-500/30" />
              <Moon className="absolute left-0 top-0 h-8 w-8 text-slate-400" />
            </div>
            <h1 className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
              Légendes du Nouveau Soleil
            </h1>
          </div>

          <p className="max-w-2xl text-lg text-muted-foreground">
            Dans un monde où le soleil s'est éteint, les derniers bastions de l'humanité 
            luttent contre une obscurité qui cache des secrets plus anciens que le temps lui-même.
          </p>

          <div className="h-px w-full bg-gradient-to-r from-slate-700 via-slate-500 to-transparent" />
        </div>
      </Card>
    </section>
  );
}