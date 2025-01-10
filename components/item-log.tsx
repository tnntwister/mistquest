"use client";

import { useState } from "react";
import { nl2br } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Item {
  id: string;
  title: string;
  summary: string;
}

interface ItemsLogProps {
  title?: string;
  items: Item[];
}

export function ItemsLog({ title = "Journal de Campagne", items }: ItemsLogProps) {
  const [selectedItem, setSelectedSession] = useState<string>(items[0]?.id || "");

  return (
    <>
      {/* Vue mobile en accordéon */}
      <div className="md:hidden rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-2xl font-cinzel mb-4">{title}</h2>
        <Accordion type="single" collapsible>
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-none">
              <AccordionTrigger className="text-left hover:no-underline rounded-lg hover:bg-secondary/50 px-4 py-2 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-lg font-semibold text-primary/80">#{item.id}</span>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <time className="text-xs text-muted-foreground block mt-1">
                      {item.summary}
                    </time>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-2 text-sm bg-secondary/30 p-4 rounded-lg" dangerouslySetInnerHTML={{ __html: nl2br(item.summary) }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Vue desktop en colonnes */}
      <div className="hidden md:block rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-2xl font-cinzel mb-4">{title}</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Liste des sessions (colonne gauche) */}
          <div className="space-y-4">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedSession(item.id)}
                className={`w-full p-4 rounded-lg transition-colors text-left
                  ${selectedItem === item.id ? 'bg-primary/10' : 'bg-secondary/50 hover:bg-secondary/70'}
                `}
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg font-semibold text-primary/80">#{item.id}</span>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <time className="text-xs text-muted-foreground block mt-1">
                      {item.summary}
                    </time>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Contenu de la session (colonne droite) */}
          <div className="bg-secondary/30 rounded-lg p-6">
            {selectedItem ? (
              <div className="prose prose-invert prose-sm">
                <h3 className="text-xl font-semibold mb-4">
                  {selectedItem} - {items.find(s => s.id === selectedItem)?.title}
                </h3>
                <div
                  className="text-sm"
                  dangerouslySetInnerHTML={{
                    __html: nl2br(items.find(s => s.id === selectedItem)?.summary || "")
                  }}
                />
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                Sélectionnez un bloc pour voir son contenu
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 