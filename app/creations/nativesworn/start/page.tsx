'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import IronswornSoloSystem from '@/components/game/ironsworn';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { HeroSection } from '@/components/ui/hero-section';
import { Button } from '@/components/ui/button';

export default function StartPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Nativesworn", href: "/creations/nativesworn" },
    { label: "Nouvelle Aventure" }
  ];

  return (
    <div className="space-y-8">
      <HeroSection 
        imagePrefix="nativesworn" 
        title="Nouvelle Aventure" 
        description="Créez votre personnage et commencez votre voyage dans les terres amérindiennes." 
      />

      <div className="container mx-auto space-y-12">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="grid grid-cols-12 gap-8">
          {/* Colonne de gauche - Aventure (8/12) */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <IronswornSoloSystem />
          </div>

          {/* Colonne de droite - Guide et actions (4/12) */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Guide de Démarrage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bienvenue dans votre nouvelle aventure Nativesworn. Avant de commencer, prenez le temps de définir :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Votre tribu d'origine et ses traditions</li>
                  <li>Votre rôle au sein de la communauté</li>
                  <li>Votre animal totem et votre lien spirituel</li>
                  <li>Le serment sacré qui guide votre quête</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feuille de Personnage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">Stats</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div>Edge: 1</div>
                      <div>Heart: 2</div>
                      <div>Iron: 2</div>
                      <div>Shadow: 1</div>
                      <div>Wits: 1</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Resources</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div>Health: 5</div>
                      <div>Spirit: 5</div>
                      <div>Supply: 5</div>
                      <div>Momentum: 2</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full">Face Danger</Button>
                <Button className="w-full">Secure an Advantage</Button>
                <Button className="w-full">Strike</Button>
                <Button className="w-full">Gather Information</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
