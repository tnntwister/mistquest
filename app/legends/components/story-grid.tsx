"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Feather } from "lucide-react";

const stories = [
  {
    title: "The Mist Walker",
    author: "Anonymous",
    excerpt: "In the depths of the Shrouded Vale, where reality bends like morning dew..."
  },
  {
    title: "Echoes of Storm's End",
    author: "The Chronicler",
    excerpt: "The lighthouse keeper's tale spread through Stormhaven like wildfire..."
  }
];

export function StoryGrid() {
  return (
    <section className="space-y-4">
      <div className="flex items-center space-x-2">
        <Book className="h-6 w-6" />
        <h2 className="text-2xl font-semibold">Featured Stories</h2>
      </div>
      
      <div className="space-y-4">
        {stories.map((story) => (
          <Card key={story.title} className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{story.title}</CardTitle>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Feather className="h-4 w-4" />
                  <span className="text-sm">{story.author}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{story.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}