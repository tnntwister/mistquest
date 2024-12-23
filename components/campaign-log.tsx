"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Session {
  id: string;
  title: string;
  date: string;
  summary: string;
}

interface CampaignLogProps {
  sessions: Session[];
}

export function CampaignLog({ sessions }: CampaignLogProps) {
  const [selectedSession, setSelectedSession] = useState<string>(sessions[0]?.id || "");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Journal de Campagne</CardTitle>
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
                      {new Date(session.date).toLocaleDateString()}
                    </time>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Contenu de la session (colonne droite) */}
          <div className="bg-secondary/30 rounded-lg p-6">
            {selectedSession ? (
              <div className="prose prose-invert">
                <h3 className="text-xl font-semibold mb-4">
                  {sessions.find(s => s.id === selectedSession)?.title}
                </h3>
                <p>{sessions.find(s => s.id === selectedSession)?.summary}</p>
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