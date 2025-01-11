"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="max-w-[800px] mx-auto">
          <Card className="p-6">
            <CardContent>Chargement...</CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Ne rien afficher pendant la redirection
  }

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
                <p className="text-muted-foreground">{user.email}</p>
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
