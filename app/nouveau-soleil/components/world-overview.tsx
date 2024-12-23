"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function WorldOverview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Card className="bg-gradient-to-br from-background to-secondary">
      <CardContent className="space-y-4 p-6">
        <h2 className="text-2xl font-semibold">World of Soleil Noir</h2>
        <p className="text-muted-foreground leading-relaxed">
          In a world where the sun never truly rises, ancient powers vie for control
          of the remaining bastions of civilization. Magic and technology intertwine
          in a desperate struggle for survival against the encroaching darkness.
        </p>
      </CardContent>
    </Card>
  );
}