"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, Map, Mountain, Waves } from "lucide-react";

const regions = [
  {
    name: "The Shrouded Vale",
    description: "A mystical valley where ancient secrets linger in the mist",
    icon: Mountain
  },
  {
    name: "Stormhaven Coast",
    description: "Treacherous shores hiding forgotten treasures",
    icon: Waves
  },
  {
    name: "The Wandering Woods",
    description: "An ever-changing forest where paths shift like memories",
    icon: Map
  },
  {
    name: "Lost Crossroads",
    description: "Where countless stories intersect and new legends begin",
    icon: Compass
  }
];

export function WorldMap() {
  return (
    <section className="grid gap-6 sm:grid-cols-2">
      {regions.map((region) => (
        <Card key={region.name} className="transition-all hover:shadow-lg">
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-3">
              <region.icon className="h-6 w-6" />
              <CardTitle>{region.name}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{region.description}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}