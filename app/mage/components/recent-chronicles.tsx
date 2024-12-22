"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RecentChronicles() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Recent Chronicles</h2>
      <Card>
        <CardHeader>
          <CardTitle>The Digital Awakening</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            A Virtual Adepts chronicle exploring the intersection of technology and magic in the modern age.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}