"use client";

import { GothicCard } from "@/components/ui/gothic-card";
import { GothicDivider } from "@/components/ui/gothic-divider";
import { Book } from "lucide-react";

export function Grimoire() {
  return (
    <section className="relative space-y-8">
      <div className="flex items-center space-x-3">
        <Book className="h-6 w-6 text-slate-400" />
        <h2 className="text-2xl font-semibold">Grimoire des Ombres</h2>
      </div>

      <GothicCard 
        className="overflow-hidden border-slate-800 bg-gradient-to-br from-slate-900/50 to-slate-800/30"
        glowColor="from-indigo-500/20 to-indigo-900/10"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200">Rituels Anciens</h3>
            <p className="text-slate-400">
              Les pages de ce grimoire contiennent des rituels oubliés, transmis 
              à travers les âges par les gardiens des arts obscurs. Chaque 
              incantation est un pacte avec les forces primordiales.
            </p>
          </div>

          <GothicDivider className="md:hidden" />

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200">Savoirs Interdits</h3>
            <p className="text-slate-400">
              Des connaissances millénaires sur les arts mystiques, les créatures 
              de l'ombre et les royaumes oubliés. Un savoir dangereux pour les 
              non-initiés.
            </p>
          </div>
        </div>
      </GothicCard>
    </section>
  );
}