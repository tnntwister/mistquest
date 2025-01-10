"use client";

import { Card } from "@/components/ui/card";
const entries = [
  {
    title: "The Price of Honor",
    date: "Recent",
    excerpt: "Today I faced a choice between my house's interests and my sworn duty to the Phoenix Throne...",
    color: "from-slate-500/20 to-slate-900/10"
  },
  {
    title: "Shadows in the Court",
    date: "1 week ago",
    excerpt: "The political machinations grow more complex. Even among allies, one must tread carefully...",
    color: "from-indigo-500/20 to-indigo-900/10"
  }
];

export function JournalEntries() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Journal Entries</h2>
      <div className="space-y-4">
        {entries.map((entry) => (
          <Card 
            key={entry.title}
            title={entry.title}
          >
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-muted-foreground">{entry.date}</span>
              <p className="text-muted-foreground">{entry.excerpt}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}