import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SITE_NAME } from '../config';
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Mon Profil - ${SITE_NAME}`,
  description: "Gérez votre profil et vos préférences personnelles.",
};

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <HeroSection 
        imagePrefix="profile" 
        title="Mon Espace Personnel" 
        description="Gérez votre profil, vos préférences et accédez à vos contenus personnalisés." 
      />

      <div className="container mx-auto py-8">
        <div className="max-w-[800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Colonne de gauche - Informations du profil */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Mon Profil</CardTitle>
              <CardDescription>
                Gérez vos informations personnelles et vos préférences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">user@example.com</p>
              </div>
              <Button variant="outline" className="w-full">
                Modifier le mot de passe
              </Button>
            </CardContent>
          </Card>

          {/* Colonne de droite - Actions rapides */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/personnages">
                  <Button variant="outline" className="w-full">
                    Mes Personnages
                  </Button>
                </Link>
                <Link href="/telechargements">
                  <Button variant="outline" className="w-full">
                    Mes Téléchargements
                  </Button>
                </Link>
                <Link href="/creations">
                  <Button variant="outline" className="w-full">
                    Mes Créations
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
