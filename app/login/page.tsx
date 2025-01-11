'use client';

import { Metadata } from "next";
import { SITE_NAME } from "../config";
import { UserAuthForm } from "@/components/user-auth-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroSection } from "@/components/ui/hero-section";

export default function LoginPage() {
  return (
    <div className="space-y-8">
      <HeroSection 
        imagePrefix="login" 
        title="Espace Personnel" 
        description="Connectez-vous pour accéder à vos contenus personnalisés et sauvegarder vos parties." 
      />

      <div className="container mx-auto py-8">
        <div className="max-w-[800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Colonne de gauche - Citation et présentation */}
          <Card className="p-6 bg-muted/50">
            <CardHeader>
              <CardTitle>Bienvenue</CardTitle>
              <CardDescription>
                Créez et gérez vos personnages, sauvegardez vos parties et accédez à du contenu exclusif.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <blockquote className="space-y-2 border-l-2 pl-4">
                <p className="text-lg">
                  "Le jeu de rôle est un art collectif où chaque participant contribue à créer une histoire unique."
                </p>
                <footer className="text-sm text-muted-foreground">François-Xavier Guillois</footer>
              </blockquote>
            </CardContent>
          </Card>

          {/* Colonne de droite - Formulaire de connexion */}
          <div className="space-y-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Connexion</TabsTrigger>
                <TabsTrigger value="register">Inscription</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle>Connexion</CardTitle>
                    <CardDescription>
                      Connectez-vous à votre compte pour accéder à vos contenus.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UserAuthForm mode="login" />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="register">
                <Card>
                  <CardHeader>
                    <CardTitle>Inscription</CardTitle>
                    <CardDescription>
                      Créez un compte pour accéder à toutes les fonctionnalités.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UserAuthForm mode="register" />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <p className="text-center text-sm text-muted-foreground">
              En continuant, vous acceptez nos{" "}
              <a href="/legal/cgu" className="underline underline-offset-4 hover:text-primary">
                Conditions d'utilisation
              </a>{" "}
              et notre{" "}
              <a href="/legal/mentions-legales" className="underline underline-offset-4 hover:text-primary">
                Politique de confidentialité
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}