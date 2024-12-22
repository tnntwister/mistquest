"use client";

import { GothicCard } from "@/components/ui/gothic-card";
import { Skull, Moon, Flame, Wind } from "lucide-react";

const darkArts = [
  {
    name: "Nécromancie",
    description: "Maîtrise des secrets de la vie et de la mort",
    icon: Skull,
    color: "from-purple-500/20 to-purple-900/10"
  },
  {
    name: "Arts Lunaires",
    description: "Manipulation des énergies nocturnes et des ombres",
    icon: Moon,
    color: "from-blue-500/20 to-blue-900/10"
  },
  {
    name: "Pyromagie Noire",
    description: "Contrôle des flammes maudites et du feu éternel",
    icon: Flame,
    color: "from-red-500/20 to-red-900/10"
  },
  {
    name: "Tempêtes Spectrales",
    description: "Invocation des vents du chaos et des tempêtes d'âmes",
    icon: Wind,
    color: "from-cyan-500/20 to-cyan-900/10"
  }
];

export function DarkArts() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold">Arts Obscurs</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {darkArts.map((art) => (
          <GothicCard 
            key={art.name}
            title={art.name}
            glowColor={art.color}
          >
            <div className="flex items-center space-x-3">
              <art.icon className="h-6 w-6 text-slate-400" />
              <p className="text-slate-400">{art.description}</p>
            </div>
          </GothicCard>
        ))}
      </div>
    </section>
  );
}