"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { nl2br } from "@/lib/utils";

interface Session {
  id: string;
  title: string;
  date: string;
  summary: string;
}

interface CampaignLogProps {
  title?: string;
  sessions: Session[];
}

export function CampaignLog({ title = "Journal de Campagne", sessions }: CampaignLogProps) {
  const [selectedSession, setSelectedSession] = useState<string>(sessions[0]?.id || "");

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-cinzel">{title}</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="prose prose-invert prose-sm">
                <h3 className="text-xl font-semibold mb-4">
                  {sessions.find(s => s.id === selectedSession)?.title}
                </h3>
                <div 
                  className="text-sm"
                  dangerouslySetInnerHTML={{ 
                    __html: nl2br(sessions.find(s => s.id === selectedSession)?.summary || "") 
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
      </CardContent>
    </Card>
  );
} 