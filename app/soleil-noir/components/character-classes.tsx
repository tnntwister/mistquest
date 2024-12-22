"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sword, Shield, Wand, Scroll } from "lucide-react";

const classes = [
  {
    name: "Chevalier des Ombres",
    description: "Guerriers nobles maniant des lames imprégnées de magie ancienne",
    icon: Sword,
    color: "from-blue-500/20 to-blue-900/10"
  },
  {
    name: "Gardien des Sceaux",
    description: "Protecteurs des dernières barrières mystiques contre les ténèbres",
    icon: Shield,
    color: "from-amber-500/20 to-amber-900/10"
  },
  {
    name: "Sorcier du Crépuscule",
    description: "Maîtres des arts interdits et des secrets oubliés",
    icon: Wand,
    color: "from-purple-500/20 to-purple-900/10"
  },
  {
    name: "Archiviste des Âges",
    description: "Érudits préservant la connaissance des temps anciens",
    icon: Scroll,
    color: "from-emerald-500/20 to-emerald-900/10"
  }
];

export function CharacterClasses() {
  return (
    <section className="relative space-y-8">
      <h2 className="text-2xl font-semibold">Classes de Personnages</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {classes.map((characterClass) => (
          <Card 
            key={characterClass.name} 
            className="group relative overflow-hidden border-slate-800 transition-all hover:border-slate-600"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${characterClass.color} opacity-0 transition-opacity group-hover:opacity-100`} />
            
            <CardHeader className="relative border-b border-slate-800 bg-slate-900/50">
              <div className="flex items-center space-x-3">
                <characterClass.icon className="h-6 w-6 text-slate-400" />
                <h3 className="text-xl font-semibold text-slate-200">
                  {characterClass.name}
                </h3>
              </div>
            </CardHeader>

            <CardContent className="relative p-6">
              <p className="text-slate-400">{characterClass.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}