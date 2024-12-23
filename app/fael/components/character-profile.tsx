"use client";
import { Card } from "@/components/ui/card";
import { Shield, Sword, Crown, Star } from "lucide-react";

const traits = [
  {
    name: "Noble House",
    value: "House Hazat",
    icon: Crown,
    description: "Proud members of the militant nobility",
    color: "from-amber-500/20 to-amber-900/10"
  },
  {
    name: "Combat Style",
    value: "Hazat Dueling",
    icon: Sword,
    description: "Master of the ancestral sword arts",
    color: "from-red-500/20 to-red-900/10"
  },
  {
    name: "Title",
    value: "Knight Commander",
    icon: Shield,
    description: "Leader of the house military forces",
    color: "from-blue-500/20 to-blue-900/10"
  },
  {
    name: "Allegiance",
    value: "Phoenix Throne",
    icon: Star,
    description: "Loyal servant of the Emperor",
    color: "from-purple-500/20 to-purple-900/10"
  }
];

export function CharacterProfile() {
  return (
    <section className="grid gap-6 sm:grid-cols-2">
      {traits.map((trait) => (
        <Card 
          key={trait.name}
          title={trait.name}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <trait.icon className="h-6 w-6 text-slate-400" />
              <p className="font-medium text-primary">{trait.value}</p>
            </div>
            <p className="text-muted-foreground">{trait.description}</p>
          </div>
        </Card>
      ))}
    </section>
  );
}