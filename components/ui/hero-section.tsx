"use client";

import { Card } from "@/components/ui/card";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  imagePrefix: string;  // Par exemple: "lns", "fael", "darkscape"
  title: string;
  description: string;
  showSunMoon?: boolean;
}

export function HeroSection({ 
  imagePrefix, 
  title, 
  description, 
  showSunMoon = false 
}: HeroSectionProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      
      <Card className="relative overflow-hidden border-0">
        <div className="absolute inset-0">
          <Image
            src={`/images/hero/${imagePrefix}-hero.webp`}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/35 to-transparent" />
        
        <div className="relative space-y-6 p-8 md:p-12">
          <div className="flex items-center space-x-4">
            {showSunMoon && (
              <div className="relative">
                <Sun className="h-8 w-8 animate-pulse text-amber-500/30" />
                <Moon className="absolute left-0 top-0 h-8 w-8 text-slate-400" />
              </div>
            )}
            <h1 className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
              {title}
            </h1>
          </div>

          <p className="max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>

          <div className="h-px w-full bg-gradient-to-r from-slate-700 via-slate-500 to-transparent" />
        </div>
      </Card>
    </section>
  );
}