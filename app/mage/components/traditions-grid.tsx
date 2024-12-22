"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Book, Scroll, Users } from "lucide-react";

const traditions = [
  {
    name: "Hermetic Order",
    description: "Masters of ceremonial magic and ancient wisdom",
    icon: Book
  },
  {
    name: "Verbena",
    description: "Nature-oriented practitioners of primal magic",
    icon: Sparkles
  },
  {
    name: "Celestial Chorus",
    description: "Divine channelers of spiritual harmony",
    icon: Scroll
  },
  {
    name: "Virtual Adepts",
    description: "Techno-mages shaping digital reality",
    icon: Users
  }
];

export function TraditionsGrid() {
  return (
    <section className="grid gap-6 sm:grid-cols-2">
      {traditions.map((tradition) => (
        <Card key={tradition.name} className="transition-all hover:shadow-lg">
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-3">
              <tradition.icon className="h-6 w-6" />
              <CardTitle>{tradition.name}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{tradition.description}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}