"use client";

import { useState } from "react";
import { marked } from "marked";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Session {
  id: string;
  title: string;
  date?: string;
  summary: string;
}

interface CampaignLogProps {
  title?: string;
  sessions: Session[];
}

export function CampaignLog({ title = "Journal de Campagne", sessions }: CampaignLogProps) {
  const [selectedSession, setSelectedSession] = useState<string>(sessions[0]?.id || "");

  const formatContent = (content: string) => {
    return marked.parse(content || "", { async: false }) as string;
  };

  return (
    <>
      {/* Vue mobile en accordéon */}
      <div className="md:hidden rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-2xl font-cinzel mb-4">{title}</h2>
        <Accordion type="single" collapsible>
          {sessions.map((session) => (
            <AccordionItem key={session.id} value={session.id} className="border-none">
              <AccordionTrigger className="text-left hover:no-underline rounded-lg hover:bg-secondary/50 px-4 py-2 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-lg font-semibold text-primary/80">#{session.id}</span>
                  <div>
                    <h4 className="font-semibold">{session.title}</h4>
                    <time className="text-xs text-muted-foreground block mt-1">
                      {session.date}
                    </time>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div 
                  className="mt-2 text-sm bg-secondary/30 p-4 rounded-lg prose prose-invert prose-sm max-w-none" 
                  dangerouslySetInnerHTML={{ __html: formatContent(session.summary) }} 
                />
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
            {sessions.map((session) => (
              <button
                key={session.id}
                onClick={() => setSelectedSession(session.id)}
                className={`w-full p-4 rounded-lg transition-colors text-left
                  ${selectedSession === session.id ? 'bg-primary/10' : 'bg-secondary/50 hover:bg-secondary/70'}
                `}
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg font-semibold text-primary/80">#{session.id}</span>
                  <div>
                    <h4 className="font-semibold">{session.title}</h4>
                    <time className="text-xs text-muted-foreground block mt-1">
                      {session.date}
                    </time>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Contenu de la session (colonne droite) */}
          <div className="bg-secondary/30 rounded-lg p-6">
            {selectedSession ? (
              <div className="prose prose-invert prose-sm max-w-none">
                <h3 className="text-xl font-semibold mb-4">
                  Détails de la session #{selectedSession} - {sessions.find(s => s.id === selectedSession)?.title}
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: formatContent(sessions.find(s => s.id === selectedSession)?.summary || "")
                  }}
                />
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                Sélectionnez une session pour voir son contenu
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 