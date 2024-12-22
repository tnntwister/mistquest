"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Scroll } from "lucide-react";

export function WorldLore() {
  return (
    <section className="relative space-y-8">
      <div className="flex items-center space-x-3">
        <Scroll className="h-6 w-6 text-slate-400" />
        <h2 className="text-2xl font-semibold">Chroniques des Ténèbres</h2>
      </div>

      <Card className="overflow-hidden border-slate-800 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
        <CardContent className="grid gap-8 p-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200">L'Âge des Ombres</h3>
            <p className="text-slate-400">
              Depuis la Grande Eclipse, le monde est plongé dans une nuit éternelle. 
              Les cités-états survivantes s'accrochent à leur existence, protégées par 
              des barrières mystiques et la volonté inébranlable de leurs habitants.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200">Les Gardiens de la Lumière</h3>
            <p className="text-slate-400">
              Une ancienne ordre de mystiques et de guerriers préserve les derniers 
              vestiges du savoir ancien, cherchant un moyen de rallumer le soleil 
              et de repousser les ténèbres qui menacent l'humanité.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}