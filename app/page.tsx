import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollText, Sword, BookOpen, Compass, Sparkles, Flame, FlameKindling, Wind } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FeatureCard } from "../components/FeatureCard";

const features = [
  {
    title: "Fael Bursandra des Hazat",
    description: "Suivez le voyage d'un noble guerrier dans un univers d'intrigues et d'honneur.",
    iconName: "⚔️",
    href: "/fael",
    image: "/images/features/fael-hero.webp"
  },
  {
    title: "Darkscape",
    description: "Explorez les mystères de la magie et des pouvoirs qui altèrent la réalité.",
    iconName: "✨",
    href: "/darkscape",
    image: "/images/features/darkscape-hero.webp"
  },
  {
    title: "LNS",
    description: "Plongez dans la dark fantasy et les aventures épiques.",
    iconName: "📖",
    href: "/soleil-noir",
    image: "/images/features/lns-hero.webp"
  },
  {
    title: "Ironsworn",
    description: "Forgez votre chemin à travers des terres dangereuses en solo ou en groupe.",
    iconName: "🗡️",
    href: "/ironsworn",
    image: "/images/features/ironsworn-hero.webp"
  },
  {
    title: "LitM",
    description: "Créez vos propres récits dans un monde enveloppé de mystère.",
    iconName: "📜",
    href: "/legends",
    image: "/images/features/litm-hero.webp"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-12">
      <div className="relative w-full h-[60vh]">
        <Image
          src="/images/hero/main-hero.webp"
          alt="Façade moderne d'un musée"
          fill
          className="object-cover brightness-90"
          priority
        />
        {/* Overlay avec un dégradé subtil */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark/80" />
        
        {/* Contenu superposé */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 p-6 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-text-light">
              Bienvenue sur Mist.Quest
            </h1>
            <p className="mx-auto max-w-[700px] text-text-light/90 md:text-xl">
              Votre portail vers des expériences de jeu de rôle immersives et des aventures mystiques.
            </p>
          </div>
        </div>
      </div>

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Bienvenue sur Mist.Quest
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Votre portail vers des expériences de jeu de rôle immersives et des aventures mystiques.
          Découvrez des récits riches, des ressources de jeu et des histoires communautaires.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/fael">Commencer l'Exploration</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">En Savoir Plus</Link>
          </Button>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </section>

      <section className="w-full max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Dernières Mises à Jour</h2>
        <Card>
          <CardHeader>
            <CardTitle>Nouvelle Entrée du Journal</CardTitle>
            <CardDescription>Mis à jour il y a 2 jours</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Dernière entrée dans le journal de Fael Bursandra, détaillant les récentes intrigues politiques dans les maisons nobles.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}